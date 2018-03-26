import fly  from './mymodules/fly';
import run from './mymodules/run';
import sound from './mymodules/sound';

let Popugai = {
	fly,
	run,
	sound
}

let Golubec = {
	fly,
	run,
	sound
}

let parochka = Object.assign({}, Popugai, Golubec);
 console.log(parochka);

parochka.sound('Hello');
Golubec.fly(100);