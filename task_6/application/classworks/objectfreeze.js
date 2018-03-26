/*
  Задание: написать функцию, для глубокой заморозки обьектов.

  Обьект для работы:
  let universe = {
    infinity: Infinity,
    good: ['cats', 'love', 'rock-n-roll'],
    evil: {
      bonuses: ['cookies', 'great look']
    }
  };

  frozenUniverse.evil.humans = []; -> Не должен отработать.

  Методы для работы:
  1. Object.getOwnPropertyNames(obj);
      -> Получаем имена свойств из объекта obj в виде массива

  2. Проверка через typeof на обьект или !== null
  if (typeof prop == 'object' && prop !== null){...}

  Тестирование:

 et FarGalaxy = DeepFreeze(universe);
      FarGalaxy.good.push('javascript'); // false
      FarGalaxy.something = 'Wow!'; // false
      FarGalaxy.evil.humans = [];   // false

*/
  const work = () => {

    let universe = {
      infinity: Infinity,
      good: ['cats', 'love', 'rock-n-roll'],
      evil: {
        bonuses: ['cookies', 'great look']
      }
    };

    const deepFreeze = (obj) => {
      let prop = Object.getOwnPropertyNames(obj);
      prop.forEach((element, index) => {
        if(typeof obj[element] == 'object' && obj[element] !== null){
          deepFreeze(obj[element]);
        }
      });
      return Object.freeze(obj);
  }; // end
  //deepFreeze(universe);


let FarGalaxy = deepFreeze(universe);
      // FarGalaxy.good.push('javascript'); // false
      // FarGalaxy.something = 'Wow!'; // false
      // FarGalaxy.evil.humans = [];   // false


}
  

  export default work;