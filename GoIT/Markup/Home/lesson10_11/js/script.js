alert ('Part1');

var a = +prompt ('Введите число');
var b = +prompt ('Введите степень');

function pow (a, b){
   var result = 1;

   for (var i = 0; i < b; i++) {
      result = result * a;
   }
return result;
}

var finalResult = pow (a, b);

console.log (finalResult);

alert ('Part2');

var arr = [];

for (var i = 0; i < 5; i++) {
   arr[i] = prompt ('Введите имя пользователя');
}

var name = prompt ('Введите Ваше имя');
var flag = false;

for (var i = 0; i < arr.length; i++) {
   if (arr[i] === name){
      flag = true;
   }
}

if (flag) {
   alert (name +', вы успешно вошли')
} else {
   alert ('good luck')
}
