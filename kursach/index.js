const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
var fs = require('fs');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var Help = require('./bot_modules/help.js');
var Time = require('./bot_modules/time.js');
const token = '447730780:AAEqLs7CJ__xzY-DK1kU_P-uTfcvBXNtBTo';
const bot = new TelegramBot(token, {polling: true});
const keys = {
  weather: '🌤 Weather',
  reminder: '⏰ Reminder',
  bitcoin: '🎢 Bitcoin' 
}

bot.onText(/\/start/, msg => {
 Greeting(msg);
});

bot.onText(/\/help/, msg => {
  bot.sendMessage(msg.chat.id, Help(msg));
});

bot.onText(/\/weather [A-Z a-z]+/g, msg => {
  Weather(msg);
});

bot.onText(/[0-9]{2}:[0-9]{2} [a-z -_ А-я]+/g, msg => {
  AddReminder(msg);
});

bot.on('message', msg => {
  switch(msg.text){
    case keys.weather: bot.sendMessage(msg.chat.id, `/weather City - Show weather in selected city`);
    break
    case keys.reminder: ShowTasks(msg);
    break
    case keys.bitcoin: Bitcoin(msg);
  }
});

function Bitcoin(msg){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.coinmarketcap.com/v1/ticker/bitcoin/`, false);
  xhr.send();
    if (xhr.status != 200) {
      console.log( xhr.status + ': ' + xhr.statusText );
    } else {
  var content = JSON.parse(xhr.responseText);
  bot.sendMessage(msg.chat.id, `1 BTC = ${content[0].price_usd}💵`);
  }
}

function AddReminder(msg){
  let task = msg.text.substring(6);
  let time = msg.text.substring(0,5);
  let task_minutes = Number(msg.text.substring(3,5));
  let task_hours = Number(msg.text.substring(0,2));
  let TimeToTask = Time(task_minutes, task_hours);
  let content = fs.readFileSync("./reminder_data/data.json");
  let parsedContent = JSON.parse(content);
  console.log(parsedContent);
  let flag = false;
  parsedContent.Tasks.forEach(e => {
    if(e.Time == time && e.Task == task){
      bot.sendMessage(msg.chat.id, `Reminder already exists ❌`);
      flag = true;
    }
  });
  if(TimeToTask < 0){
    bot.sendMessage(msg.chat.id, `This time has already passed ❌`);
    flag = true;
  }
  if(flag == false){
    setTimeout(() => {bot.sendMessage(msg.chat.id, `⏰ ${task}`);}, TimeToTask);
    parsedContent.Tasks.push({Time: time, Task: task});
    content = JSON.stringify(parsedContent);
    fs.writeFile('./reminder_data/data.json', content);
    bot.sendMessage(msg.chat.id, `Task: ${task}
      Time: ${time}
      Add to Reminder ✅`);
  }
}

function ShowTasks(msg){
  let content = fs.readFileSync("./reminder_data/data.json");
  let parsedContent = JSON.parse(content);
  let Tasks = [];
  parsedContent.Tasks.forEach((e, i) => {
    i == 0 ? Tasks.push(`${i+1}. ${e.Task} - ${e.Time}`) : Tasks.push(`\n${i+1}. ${e.Task} - ${e.Time}`);
  });
  bot.sendMessage(msg.chat.id, `${Tasks}
"00:00 Task" - Add new reminder 📝`);
}

function Greeting(msg, sayHello = true) {
  const answer = sayHello
  ?  `Hi, ${msg.from.first_name}👋
  What can i do for you ? 🐵`
  :  `What can i do for you ? 🐵`
  bot.sendMessage(msg.chat.id, answer, {
    reply_markup:{
      keyboard: [
        [keys.weather], [keys.reminder], [keys.bitcoin]
      ]
    }
  });
}


function Weather(msg){
  var city = msg.text.substring(9);
  console.log(`City: ${city}`);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.wunderground.com/api/3a2bbe2847de8f28/conditions/q/${city}.json`, false);
  xhr.send();
    if (xhr.status != 200) {
      console.log( xhr.status + ': ' + xhr.statusText );
      bot.sendMessage(msg.chat.id, `<b>${content.current_observation.observation_location.city}</b> is not define`);
    } else {
      var content = JSON.parse(xhr.responseText);
      bot.sendMessage(msg.chat.id, `Weather in <b>${content.current_observation.observation_location.city}</b> today 🌎
🌡 Temp:  <b>${content.current_observation.temp_c}c</b>
🤔 Feels like:  <b>${content.current_observation.feelslike_c}c</b>
💨 Wind:  <b>${content.current_observation.wind_kph}kph</b>
💧 Dewpoint:  <b>${content.current_observation.dewpoint_c}c</b>`, {
        parse_mode:'HTML'
      });
  }
  xhr.abort();
}
