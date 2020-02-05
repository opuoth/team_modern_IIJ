// Description:
//   Utility commands surrounding Hubot uptime.
//
'use strict';



module.exports = (robot) => {

  let id;//setInterval()を変数にいれる
  let getTime;
  const tm = 5000;//時間
  let flag=false;
  
  /* 最初に表示するメッセージ */
  robot.join((res) => {
    res.send({
      question: '周辺の自転車を探しますか?'
    });
  });



  /* 自転車を返す場所を探す処理と利用料金の目安を表示し、timerをstopする */
  robot.respond(/返却$/, (res) => {
     /**タイマーのストップと利用料金の目安を表示 */
     clearInterval(id);
     res.send(`利用料金の目安:${getTime() * 200}円\n利用時間:${getTime()}時間`);
     flag=false;
    /**返す場所の候補を表示する */
    res.send(`現在地周辺の自転車置き場を3つ表示します`);
    res.send('返却先:自転車置き場1');
    res.send('返却先:自転車置き場2');
    res.send('返却先:自転車置き場3');
    res.send({
      question: 'どの自転車置き場を選択しますか?',
      options: ['返却先:自転車置き場1', '返却先:自転車置き場2', '返却先:自転車置き場3'],
    });
  });


  /* yesの場合は、周辺の自転車を探す処理.Noの場合は、ユーザからの返答を待つ */
  robot.respond('yesno', (res) => {
    if (res.json.response === true) {
      /** 借りる候補の自転車ステーションを表示する処理*/
      
      res.send(`現在地周辺の自転車置き場を3つ表示します`);
      res.send('貸出元:自転車置き場1');
      res.send('貸出元:自転車置き場2');
      res.send('貸出元:自転車置き場3');
      res.send({
        question: 'どの自転車置き場を選択しますか?',
        options: ['貸出元:自転車置き場1', '貸出元:自転車置き場2', '貸出元:自転車置き場3']
      });
    } else {
      res.send(`探したくなったら「Hey」って言ってね`);
    }
  });

  /* 再度自転車の場所を探したくなったらまた表示する */
  robot.respond(/Hey$/i, (res) => {
    res.send({
      question: '周辺の自転車を探しますか?'
    });
  });


  /** 自転車置き場の場所をユーザに選んでもらい、それを表示する */
  robot.respond('select', (res) => {
   
    let i = 1;//１時間毎の時間を計測

    res.send(res.message.id);
    /**貸し出しの際の処理 */
    if (res.json.options[res.json.response] === '貸出元:自転車置き場1') {
      res.send(`自転車1を借ました`);
      flag=true;
    } else if (res.json.options[res.json.response] === '貸出元:自転車置き場2') {
      res.send(`自転車2を借ました`);
      flag=true;
    } else if (res.json.options[res.json.response] === '貸出元:自転車置き場3') {
      res.send(`自転車3を借ました`);
      flag=true;
    }

    if(flag===true){
    res.send({
      text: '返す時は返却を入力すると,周辺の自転車置き場を表示します',
      onsend: () => {
        let fn = () => {
          res.send(`${i}時間経過しました\n現在の料金目安は${i * 200}円です`);
          i++;
        }
        id = setInterval(fn, tm);
      }
    });
  }
    getTime=()=>{return i};
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
