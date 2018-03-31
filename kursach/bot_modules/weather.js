var weather = (city) => {
  var city = msg.text.substring(9);
  console.log(`City: ${city}`);
  var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.wunderground.com/api/3a2bbe2847de8f28/conditions/q/${city}.json`, false);
    xhr.send();
    if (xhr.status != 200) {
      console.log( xhr.status + ': ' + xhr.statusText );
      return `sity is not defined`;
    } else {
  var content = JSON.parse(xhr.responseText);
  return `Weather in ${content.current_observation.observation_location.city}\n
Temp: ${content.current_observation.temp_c}\n
Feels like: ${content.current_observation.feelslike_c}`;
  }
  xhr.abort();
}

module.exports = weather;