// Description:
//   Utility commands surrounding Hubot uptime.
//
'use strict';


/** MYSQLの接続に必要な情報 */
/*
const mysql = require('mysql');
const connection = mysql.createConnection({
  host : '127.0.0.1',
  user : 'root',
  password : '',
  port : '3306',
  database: 'hira'//データベース名を変更
});

connection.connect();//データベース接続
*/

/*データ取得処理 */
/*
connection.query('SELECT * from user LIMIT 2;', (err, rows) => {
  if (err) throw err;

  console.log(rows);
});

connection.end();//データベースへの接続を遮断
*/





module.exports = (robot) => {

  /*
  class User{
    constructor(id,time){
      this.id=id;
      this.time=time;
      this.state=false;
    }
  }
  */

  let id;//setInterval()を変数にいれる
  let getTime;//ローカル変数「i(経過時間)」を返す関数のオブジェクト
  const tm = 5000;//時間
  let state=false;//ユーザーが自転車を借りているかどうかを表す(true:自転車を借りている状態,false:自転車を借りていない状態)
  let availableStation=[['ABCD','岩手県','019-11-2222',2],['EFG','東京','111-1111-1111',1],['HIJK','銀座','019-47-2222',3]];//店舗名、住所、電話番号、在庫数
  
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
     state=false;

    /**返却先場所の候補を表示する */
    res.send(`現在地周辺の自転車置き場を3つ表示します`);
    availableStation.map((value,index) =>{
      res.send(`返却先(${index+1})\n店舗名:${value[0]}\n住所:${value[1]}\n 電話番号:${value[2]}\n返却可能数:${value[3]}`)
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
      availableStation.map((value,index) =>{
        res.send(`貸出元(${index+1})\n店舗名:${value[0]}\n住所:${value[1]}\n電話番号:${value[2]}\n在庫数:${value[3]}`)
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
   
    let i = 1;//１時間毎の時間を計測

    /**貸し出しの際の処理 */
    if (res.json.options[res.json.response] === '貸出元(1)') {
      res.send(`自転車1を借ました`);
      state=true;
    } else if (res.json.options[res.json.response] === '貸出元(2)') {
      res.send(`自転車2を借ました`);
      state=true;
    } else if (res.json.options[res.json.response] === '貸出元(3)') {
      res.send(`自転車3を借ました`);
      state=true;
    } else if (res.json.options[res.json.response] === '返却先:自転車置き場1') {
      /** 返却先:自転車置き場1を選択した場合の処理*/ 
      //res.send(``);
    } else if (res.json.options[res.json.response] === '貸出元:自転車置き場2') {
      /** 返却先:自転車置き場2を選択した場合の処理*/ 
      //res.send(``);
    } else if (res.json.options[res.json.response] === '貸出元:自転車置き場3') {
      /** 返却先:自転車置き場3を選択した場合の処理*/ 
      //res.send(``);
    }


    /** push通知と金額計算処理(自転車を借りている状態時) */
    if(state === true){
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
    /** 経過時間のゲッター */
    getTime=()=>{return i};
  });


}
