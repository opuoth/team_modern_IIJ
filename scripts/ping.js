// Description:
//   Utility commands surrounding Hubot uptime.
//
// Commands:
//   ping - Reply with pong
//   echo <text> - Reply back with <text>
//   time - Reply with current time
'use strict';

module.exports = (robot) => {
  
  robot.respond(/借りる$/, (res) => {
    res.send('自転車置き場1\n安い料金');
    res.send('自転車置き場2\n安い料金');
    res.send('自転車置き場3\n安い料金');
    res.send({
      question: '自転車置き場3\n普通の料金',
      options: ['1を借りる', '2を借りる', '3を借りる']
    });
    
  });

  robot.respond('select', (res) => {

    if (res.json.options[res.json.response]　=== '1を借りる') {
      res.send(`自転車1を借ました`);
      onsend: (sent) => {
        close_select:`completed. messageId: ${sent.message.id}`;
      }
    } else if (res.json.options[res.json.response]　=== '2を借りる'){
      res.send(`自転車2を借ました`);
    } else if (res.json.options[res.json.response]　=== '3を借りる'){
      res.send(`自転車3を借ました`);
    }
  }); 

};
