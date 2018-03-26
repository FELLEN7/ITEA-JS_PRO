// Точка входа в наше приложение

// import Singleton from './singleton/';
// import Facade from './facade';
// import Freeze from '../classworks/objectfreeze';
import Government from '../classworks/singleton';
/*
  Обратите внимание что в среде разработки Singleton / singleton
  это один файл и ошибки из-за реестра не будет, но в продакшене
  это может дать ошибку, потому что например на CentOS такие импотры
  уже не отрабатывают и еррорят.

  + в файлах можно не указывать .js
  + можно подключать файлы с названием index.js обращаясь напрямую к папке
  напрмер если нужно подключить файл ./singleton/index.js,
  то можно зададь в url просто ./singleton
*/

/*
  Партерны можно поделить на три большие группы:
  - Порождающие
  - Структурные
  - Поведенческие

*/

  // Singleton();
  // Facade();
  // Freeze();
    Government.addLaw({id:0, name:'Vlad', description:'Kalinichenko'});
    Government.addLaw({id:1, name:'Sergey', description:'Tasgsdaf'});
    Government.readLaws();
    Government.readLaw(0);
    Government.showSatisfactions();
    Government.showBudget();
    Government.fiesta();
     Government.fiesta();
      Government.fiesta();
       Government.fiesta();
        Government.fiesta();
         Government.fiesta();
    Government.showSatisfactions();


