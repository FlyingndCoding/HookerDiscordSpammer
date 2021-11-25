const Discord = require(`discord.js`)
const client = new Discord.Client()
const readline = require(`readline`)
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`Made by Space Wumpus(Add me for nitro)#3255`);
rl.question(`Whats the webhook url?\n`, url => {
  let urlData = url
  let tokenAndID = urlData.split(`/`)
  rl.question(`Nickname?\n`, username => {
    let usernameData = username
    rl.question(`Avatar link??\n`, avatar => {
      let avatarData = avatar
      rl.question(`What to spam?\n`, async message => {
        let messageData = message
        rl.question(`How many times?\n`, async times => {
          if (isNaN(times)) {
            console.log(`Jeez invalid number`);
            process.exit();
          }
          let i = 0;
          //Made by Space Wumpus(Add me for nitro)#3255
          const webhookClient = new Discord.WebhookClient(tokenAndID[5], tokenAndID[6]);
          do {
            await webhookClient.send(`${messageData}`, {
              username: usernameData,
              avatarURL: avatarData
            })
            await rl.close()
            await console.log(`Sent ${message} to webhook! Add me Space Wumpus(Add me for nitro)#3255`)
            i++
          } while(i != times);
          process.exit()
        })
      })
    });
  });
});
