// Description:
//   Utility commands surrounding Hubot uptime.
//
'use strict';



module.exports = (robot) => {

  let id;//setInterval()を変数にいれる
  const tm = 5000;//時間
  
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
     //res.send(`利用料金の目安:${i * 200}円\n利用時間:${i}時間`);
    /**返す場所の候補を表示する */
    res.send(`現在地周辺の自転車置き場を3つ表示します`);
    res.send('自転車置き場1');
    res.send('自転車置き場2');
    res.send('自転車置き場3');
    res.send({
      question: 'どの自転車置き場を選択しますか?',
      options: ['自転車置き場1', '自転車置き場2', '自転車置き場3'],
    });
  });




  /* yesの場合は、周辺の自転車を探す処理.Noの場合は、ユーザからの返答を待つ */
  robot.respond('yesno', (res) => {
    if (res.json.response === true) {
      /** 借りる候補の自転車ステーションを表示する処理*/
      res.send(`現在地周辺の自転車置き場を3つ表示します`);
      res.send('自転車置き場1');
      res.send('自転車置き場2');
      res.send('自転車置き場3');
      res.send({
        question: 'どの自転車置き場を選択しますか?',
        options: ['自転車置き場11', '自転車置き場22', '自転車置き場33']
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

    if (res.json.options[res.json.response] === '自転車置き場11') {
      res.send(`自転車1を借ました`);
    } else if (res.json.options[res.json.response] === '自転車置き場22') {
      res.send(`自転車2を借ました`);
    } else if (res.json.options[res.json.response] === '自転車置き場33') {
      res.send(`自転車3を借ました`);
    }
    res.send({
      text: '返す時は返却を入力すると,周辺の自転車置き場を表示します',
      onsend: () => {
        let fn = () => {
          res.send(`${i}時間経過しました`);
          res.send(`現在の料金目安は${i * 200}円`);
          i++;
        }
        id = setInterval(fn, tm);
      }
    });
  });




}
