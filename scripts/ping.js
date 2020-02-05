// Description:
//   Utility commands surrounding Hubot uptime.
//
'use strict';


module.exports = (robot) => {

  
  class User{
    constructor(time,availableStation){
      this.id;
      this.i=time;
      this.state=false;
      this.availableStation=availableStation;
    }

    get Time(){
      return this.i;
    }
  }
  

/*
  let id;//setInterval()を変数にいれる
  let getTime;//ローカル変数「i(経過時間)」を返す関数のオブジェクト

  let state = false;//ユーザーが自転車を借りているかどうかを表す(true:自転車を借りている状態,false:自転車を借りていない状態)
  */

  const tm = 5000;//時間
  let availableStation = [['ABCD', '岩手県', '019-11-2222', 2], ['EFG', '東京', '111-1111-1111', 1], ['HIJK', '銀座', '019-47-2222', 3]];//店舗名、住所、電話番号、在庫数
  let user=new User(1,availableStation);

  /* 最初に表示するメッセージ */
  robot.join((res) => {
    res.send({
      question: '周辺の自転車を探しますか?'
    });
  });
  robot.respond(/room/i, (res) => {
    res.send(`This room id is ${res.message.room}`);
	});




  /* 自転車を返す場所を探す処理と利用料金の目安を表示し、timerをstopする */
  robot.respond(/返却$/, (res) => {
    /**返却先場所の候補を表示する */
    res.send(`現在地周辺の自転車置き場を3つ表示します`);
    user.availableStation.map((value, index) => {
      res.send(`返却先(${index + 1})\n店舗名:${value[0]}\n住所:${value[1]}\n 電話番号:${value[2]}\n返却可能数:${value[3]}`)
    })
    res.send({
      question: 'どの自転車置き場を選択しますか?',
      options: ['返却先(1)', '返却先(2)', '返却先(3)'],
    });
  });


  /* yesの場合は、周辺の自転車を探す処理.Noの場合は、ユーザからの返答を待つ */
  robot.respond('yesno', (res) => {
    if (res.json.response === true) {

      /** 借りる候補の自転車ステーションを表示する処理*/
      res.send(`現在地周辺の自転車置き場を3つ表示します`);
      user.availableStation.map((value, index) => {
        res.send(`貸出元(${index + 1})\n店舗名:${value[0]}\n住所:${value[1]}\n電話番号:${value[2]}\n在庫数:${value[3]}`)
      })
      res.send({
        question: 'どの自転車置き場を選択しますか?',
        options: ['貸出元(1)', '貸出元(2)', '貸出元(3)']
      });
    } else {
      res.send(`探したくなったら「search」って言ってね`);
    }
  });

  /* 再度自転車の場所を探したくなったらまた表示する */
  robot.respond(/search$/i, (res) => {
    res.send({
      question: '周辺の自転車を探しますか?'
    });
  });


  /** 自転車置き場の場所をユーザに選んでもらい、それを表示する */
  robot.respond('select', (res) => {

   // let i = 1;//１時間毎の時間を計測

    /**貸し出しの際の処理 */
    switch (res.json.options[res.json.response]) {
      case '貸出元(1)':
        res.send(`自転車1を借ました`);
        user.state = true;
        break;
      case '貸出元(2)':
        res.send(`自転車2を借ました`);
        user.state = true;
        break;
      case '貸出元(3)':
        res.send('自転車3を借りました')
        user.state = true;
        break;
      case '返却先(1)':
        /**タイマーのストップと利用料金の目安を表示 */
        clearInterval(user.id);
        res.send(`利用料金の目安:${user.Time * 200}円\n利用時間:${user.Time}時間`);
        user.state = false;
        break;
      case '返却先(2)':
        /**タイマーのストップと利用料金の目安を表示 */
        clearInterval(user.id);
        res.send(`利用料金の目安:${user.Time * 200}円\n利用時間:${user.Time}時間`);
        user.state = false;
        break;
      case '返却先(3)':
        /**タイマーのストップと利用料金の目安を表示 */
        clearInterval(user.id);
        res.send(`利用料金の目安:${user.Time * 200}円\n利用時間:${user.Time}時間`);
        user.state = false;
        break;
    }

    /** push通知と金額計算処理(自転車を借りている状態時) */
    if (user.state === true) {
      res.send({
        text: '返す時は返却を入力すると,周辺の自転車置き場を表示します',
        onsend: () => {
          let fn = () => {
            res.send(`${user.i}時間経過しました\n現在の料金目安は${user.i * 200}円です`);
            user.i++;
          }
          user.id = setInterval(fn,tm);
        }
      });
    }
    /** 経過時間のゲッター */
   // getTime = () => { return i };
  });

  robot.respond('map', (res) => {
    // requireの設定
    const mysql = require('mysql');
    
    // MySQLとのコネクションの作成
    const connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : 'pass',
      database: 'rental_bicycle_DB'
    });
    
    // 接続
    connection.connect();
    
    // 在庫0以外のレコード取得
    connection.query('SELECT * from shop WHERE stock <> 0;', function (err, rows, fields) {
      if (err) { console.log('err: ' + err); } 
      // // テスト表示POST
      // let shop_string = '';
      // for (let key in rows[0]) {
      //   shop_string += `${key}: ${rows[0][key]}\n`;
      // }
      // res.send(shop_string);

      // 距離計算 → 近い順にソート
      let distances = []
      let index = [...Array(rows.length)].map((_, i) => i) //=> [ 0, 1, ..., rows.length-1]
      for (let row of rows) {
        let distance = (parseFloat(res.json.lng) - row.lat)**2 + (parseFloat(res.json.lng) - row.lon)**2;
        distances.push(distance);
      }
      function bcmp(v1, v2) {
        return distances[v1] - distances[v2];
      }
      index.sort(bcmp);  // distanceでソートしたインデックスリスト
      
      // TOP3 post
      for (let i in index.slice(0,3)){
        let shop_info = `near TOP${parseInt(i)+1}\n`;
        for (let key in rows[index[i]]) {
          shop_info += `${key}:　${rows[index[i]][key]}\n`;
        }
        shop_info += `場所:　https://www.google.com/maps/dir/?api=1&destination=${rows[index[i]]['lat']},${rows[index[i]]['lon']}\n`;
        shop_info += `直線距離スコア:　${distances[index[i]]**0.5}`;
        res.send(shop_info);
      }
    });
    
    // 接続終了
    connection.end();
  });

}