// Description:
//   Utility commands surrounding Hubot uptime.
//
// Commands:
//   ping - Reply with pong
//   echo <text> - Reply back with <text>
//   time - Reply with current time
'use strict';



module.exports = (robot) => {

  const tm = 10000;//時間
  let i = 1;//１時間毎の時間を計測
  let flag = true;//push通知するフラグ
  let id;

  /* 最初に表示するメッセージ */
  robot.join((res) => {
    res.send({
      question: '周辺の自転車を探しますか?'
    });
  });

    /* 自転車を返す場所を探す処理と利用料金の目安を表示し、timerをstopする */
    robot.respond(/F$/i, (res) => {
      clearInterval(id);
      res.send(`利用料金の目安:${i * 200}円\n利用時間:${i}時間`);
    });


  /* yesの場合は、周辺の自転車を探す処理　Noの場合は、ユーザからの返答を待つ */
  robot.respond('yesno', (res) => {
    if (res.json.response === true) {
      res.send(`周辺の自転車を探す処理：　`);
      /*１時間毎に通知処理 */
      res.send({
        text: '返す時はFを押してね',
        onsend: () => {
          let fn = () => {
            res.send(`${i}時間経過しました`);
            res.send(`現在の料金目安は${i * 200}円`);
            i++;
          }
          id = setInterval(fn, tm);

        }
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



}
