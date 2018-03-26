

var show_address = document.getElementById('show_address');
var count_employers = document.getElementById('count_employers');
var show_employers = document.getElementById('show_employers');
var sort_balance = document.getElementById('sort_balance');
let flag_address = false;	

var xhr = new XMLHttpRequest();
var base;
xhr.open('GET', 'http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2', false);
xhr.send();
if (xhr.status != 200) {
  alert( xhr.status + ': ' + xhr.statusText );
} else {
  console.log(JSON.parse(xhr.responseText));
  base = JSON.parse(xhr.responseText);
}


show_address.addEventListener('click', Test);
count_employers.addEventListener('click', Show_Count);
show_employers.addEventListener('click', Show_Employers);
sort_balance.addEventListener('click', Sort_Balance);

function Sort_Balance(){
	
}


function Constructor(base) {
let table = document.getElementById('table_1');
	base.forEach(element => {	
		let tr = document.createElement('tr');
		let line = `<td>${element.company}</td>
					<td>${element.balance}</td>
					<td>${element.registered}</td>
					<td class="address"></td>
					<td class="counter"></td>
					<td class="employer"></td>`;
			tr.innerHTML = line;
     		table.appendChild(tr);
	});
document.body.appendChild(table);
}

function Test() {
	flag_address == true ? HidAddress() : Show_Address();
}

function Show_Address() {
let address = document.getElementsByClassName('address');
let str = "";
	base.forEach((element, index) => {	
			str += `Address: ${element.address.city}${element.address.zip}${element.address.country}${element.address.state}${element.address.street}${element.address.house}\n`;
			address[index].innerHTML = `${element.address.city} ${element.address.zip} ${element.address.country} ${element.address.state} ${element.address.street} ${element.address.house}`;
		}
	);
	alert(str);
	flag_address = true;
}

function HidAddress(){
	let address = document.getElementsByClassName('address');
	for(var i = 0; i < address.length; i++){
		address[i].innerHTML = "";
	}
	flag_address = false;
}

function Show_Count() {
let counter = document.getElementsByClassName('counter');
	base.forEach((element, index) => {	
			counter[index].innerHTML = element.employers.length;
		}
	);
}

function Show_Employers() {
let employer = document.getElementsByClassName('employer');
	base.forEach((element, index) => {
		let names = [];	
			for(var i = 0 ; i < element.employers.length; i++){
				names.push(element.employers[i].name);
			}
		employer[index].innerHTML = names;
		}
	);
}


Constructor(base);

