var Time = (task_minutes, task_hours) => {
  var now = new Date();
 let TaskTime = (task_minutes * 60) + (task_hours * 3600);
  let NowTime = (now.getMinutes() * 60) + (now.getHours() * 3600);
  let TimeToTask = 1000 * (TaskTime - NowTime);
  return TimeToTask;
}

module.exports = Time;