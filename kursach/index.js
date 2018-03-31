const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
var help = require('./bot_modules/help.js');
var fs = require('fs');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const token = '447730780:AAEqLs7CJ__xzY-DK1kU_P-uTfcvBXNtBTo';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const keys = {
  weather: 'Weather(help)',
  reminder: 'Reminder'
}

bot.onText(/\/start/, msg => {
 Greeting(msg);
});

bot.onText(/\/help/, msg => {
  bot.sendMessage(msg.chat.id, help(msg));
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
    case keys.reminder: bot.sendMessage(msg.chat.id, `00:00 Task - Add new reminder`);
    break
  }
});


function AddReminder(msg){
  var now = new Date();
  let task = msg.text.substring(6);
  let time = msg.text.substring(0,5);
  console.log(time);
  let task_minutes = Number(msg.text.substring(3,5));
  let task_hours = Number(msg.text.substring(0,2));
  let TaskTime = (task_minutes * 60) + (task_hours * 3600);
  console.log(TaskTime);
  let NowTime = (now.getMinutes() * 60) + (now.getHours() * 3600);
  console.log(NowTime);
  let TimeToTask = 1000 * (TaskTime - NowTime);
  console.log(`Time to task: ${TimeToTask}ms`);

  if(TimeToTask < 0){ 
    bot.sendMessage(msg.chat.id, `This time has already passed`);
  }
  else{
    setTimeout(() => {
      bot.sendMessage(msg.chat.id, task);
      }, TimeToTask);
  }

  var content = fs.readFileSync("./reminder_data/data.json");
  var parsedContent = JSON.parse(content);
  parsedContent.Tasks.push({Time: time, Task: task});
  console.log(`Pushed to reminders: Time:${time}, Task:${task}`);
  content = JSON.stringify(parsedContent);
  fs.writeFile('./reminder_data/data.json', content);

}


function Greeting(msg, sayHello = true) {
  const answer = sayHello
  ?  `Hello, ${msg.from.first_name}\n What can I do for you?`
  :  `What can I do for you?`
  bot.sendMessage(msg.chat.id, answer, {
    reply_markup:{
      keyboard: [
        [keys.weather, keys.reminder]
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
      bot.sendMessage(msg.chat.id, `sity is not define`);
    } else {
      var content = JSON.parse(xhr.responseText);
      bot.sendMessage(msg.chat.id, `Weather in ${content.current_observation.observation_location.city} 🌎
🌡Temp:  ${content.current_observation.temp_c}
🤔Feels like:  ${content.current_observation.feelslike_c}
💨Wind(kph):  ${content.current_observation.wind_kph}
💧Dewpoint:  ${content.current_observation.dewpoint_c}`, {
        parse_mode:'HTML'
      });
  }
  xhr.abort();
}