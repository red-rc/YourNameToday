/*var secondsInAMinute = 60;
var minutesInAnHour = secondsInAMinute * 60;
var hoursInADay = minutesInAnHour * 24;
var daysInAYear = hoursInADay * 365;
var age = daysInAYear * 11;
console.log(age);

var balloons = 100;
balloons /= 4;
console.log(balloons);

var string = "hElLo tHerE, I aM kEnObi!";
string[0].toUpperCase() + string.slice(1).toLowerCase();
console.log(string);
*/
var Bletters = [
"Б",    "В",    "Г",    "Ґ",    "Д",    "Ж",	"З",	
"Й",    "К",	"Л",	"М",	"Н",	"П",	
"Р",    "С",	"Т",	"Ф",	"Х",	"Ц",	"Ч",	
"Ш",    "Щ",	
];
var Aletters = [
"А",    "Е",    "Є",	"И",	"І",	"О",	"У",	"Ю",	"Я",	
];
var lettersUpd0 = Bletters[Math.floor(Math.random() * 22)];
var lettersUpd1 = Aletters[Math.floor(Math.random() * 9)];
var lettersUpd2 = Bletters[Math.floor(Math.random() * 22)];
var lettersUpd3 = Aletters[Math.floor(Math.random() * 9)];
var lettersUpd4 = Bletters[Math.floor(Math.random() * 22)];
var all = lettersUpd0 + lettersUpd1 + lettersUpd2 + lettersUpd3 + lettersUpd4;

document.getElementById('button').onclick = function() { 
    let callingField = document.getElementById('calling-field');
    let out = '';
    out += `<p role="alert">${all}</p>`;
    callingField.innerHTML = out;
}

var LBletters = [
"B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Z"
];
var LAletters = [
"A","E","I","O","Y","U"			
];
var LlettersUpd0 = LBletters[Math.floor(Math.random() * 20)];
var LlettersUpd1 = LAletters[Math.floor(Math.random() * 6)];
var LlettersUpd2 = LBletters[Math.floor(Math.random() * 20)];
var LlettersUpd3 = LAletters[Math.floor(Math.random() * 6)];
var LlettersUpd4 = LBletters[Math.floor(Math.random() * 20)];
var Lall = LlettersUpd0 + LlettersUpd1 + LlettersUpd2 + LlettersUpd3 + LlettersUpd4;

document.getElementById('buttonL').onclick = function() { 
    let callingField2 = document.getElementById('calling-field2');
    let out = '';
    out += `<p role="alert">${Lall}</p>`;
    callingField2.innerHTML = out;
}