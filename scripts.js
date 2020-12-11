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
    out += `<p class="alertName" role="alert">${all}</p>`;
    callingField.innerHTML = out;
}