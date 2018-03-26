/*
  Задание:

    Написать синглтон, который будет создавать обьект government

    Данные:
    {
        laws: [],
        budget: 1000000
        citizensSatisfactions: 0,
    }

    У этого обьекта будут методы:
      .добавитьЗакон({id, name, description})
        -> добавляет закон в laws и понижает удовлетворенность граждан на -10

      .читатькКонституцию -> Вывести все законы на экран
      .читатьЗакон(ид)

      .показатьУровеньДовольства()
      .показатьБюджет()
            
      .провестиПраздник -> отнимает от бюджета 50000, повышает удовлетворенность граждан на +5


*/
const _data =  
{
        laws: [],
        budget: 1000000,
        citizensSatisfactions: 0,
}



// Создаем обьект и методы
const government = {
  addLaw: (obj) => {
    _data.laws.push(obj);
    _data.citizensSatisfactions -= 10;
  },
  readLaws: () => {
    _data.laws.forEach(e => {
      console.log(e);
    });
  },
  readLaw: (id) => {
    _data.laws.forEach(e => {
      e.id == id ? console.log(e) : 0 ;
    });
  },
  showSatisfactions: () => {
    console.log(`Satisfactions: ${_data.citizensSatisfactions}`);
  },
  showBudget: () => {
    console.log(`Budget: ${_data.budget}`);
  },
  fiesta: () => {
    _data.budget -=50000;
    _data.citizensSatisfactions +=5;
  }
};
// Замораживаем
Object.freeze(government);

export default government;
