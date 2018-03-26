
class Planet {
	constructor(name) {
	this.name = name,
	this.population = this.randomPopulation(),
    this.timeCycle = 24
	}

	growPopulation(){
		let new_population = this.populationMultiplyRate() * (this.population/1000);
		this.population += new_population;
		console.log('Add :' + new_population + 'people'); 
	}

	randomPopulation(){
    	return Math.floor((Math.random() * 100000000)+1000000);
    }
    populationMultiplyRate(){
    	return Math.floor(Math.random() * 11);
    }

}


let Mars = new Planet('Mars');
console.log(Mars.name);
Mars.growPopulation();


let Venera = new Planet('Venera');
console.log(Venera.name);
Venera.growPopulation();