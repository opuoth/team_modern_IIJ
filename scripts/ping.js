// Description:
//   Utility commands surrounding Hubot uptime.
//
// Commands:
//   ping - Reply with pong
//   echo <text> - Reply back with <text>
//   time - Reply with current time
'use strict';

	

module.exports = (robot) => {
  robot.join((res) => {
    res.send({
      question: '周辺の自転車を探しますか?'
    });
  });

  robot.respond('yesno', (res) => {
    if (res.json.response === null) {
      res.send(`周辺の自転車を探す処理：　res.json.question:${res.json.question}.`);
    } else {
      res.send(`探したくなったら「Hey」って言ってね：　res.json.question: ${res.json.response}.`);
    }
  });

  robot.respond(/Hey$/, (res) => {
    res.send({
      question: '周辺の自転車を探しますか?'
    });
  });

};
