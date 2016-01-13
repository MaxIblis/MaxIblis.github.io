function create (newElement) {
   var newElement = document.createElement('div');
   document.body.appendChild(newElement);
   newElement.classList.add('row');
   return newElement;
}

var divTimeTable = create(divTimeTable);
var divStart = create(divStart);
// var divSplit = create(divSplit);

var timeTable = document.createElement('div');
divTimeTable.appendChild(timeTable);
timeTable.innerHTML = '00:00:00:000';
timeTable.style.fontSize = "48px";
timeTable.classList.add('col-md-2', 'col-md-offset-5', 'text-center');

var buttonStart = document.createElement('button');
divStart.appendChild(buttonStart);
buttonStart.classList.add('btn', 'btn-success', 'col-md-2', 'col-md-offset-4');
buttonStart.setAttribute('type', 'button');
buttonStart.innerHTML = 'Start';
buttonStart.style.fontSize = "28px";
buttonStart.addEventListener("click", startCount);

var buttonReset = document.createElement('button');
divStart.appendChild(buttonReset);
buttonReset.classList.add('btn', 'btn-success', 'col-md-2');
buttonReset.setAttribute('type', 'button');
buttonReset.innerHTML = 'Reset';
buttonReset.style.fontSize = "28px";
// buttonReset.addEventListener("click", resetCount);

var zero = new Date (0, 0),
seconds = 0,
minutes = 0,
hours = 0,
timer,
time;

function counter(){
   zero.setMilliseconds(zero.getMilliseconds() + 4);
   var milliseconds = zero.getMilliseconds();
   var millisecondsValue, secondsValue, minutesValue, hoursValue;
      if (milliseconds >= 996){
         seconds++;
      }
      if (seconds >= 60){
         seconds = 0;
         minutes++;
      }
      if (minutes >= 60) {
         minutes = 0;
         hours++;
      }

      if (milliseconds < 10){
         millisecondsValue = '00' + milliseconds;
      }else if(milliseconds < 100) {
            millisecondsValue = '0' + milliseconds;
         }
      else {
            millisecondsValue = milliseconds;
         }

      secondsValue = seconds;
      minutesValue = minutes;
      hoursValue = hours;

      time = hoursValue + ":" + minutesValue + ":" + secondsValue + ":" + millisecondsValue;
      timeTable.innerHTML = time;
}

function startCount(){
   buttonStart.classList.remove('btn-success');
   buttonStart.classList.add('btn-danger');
   buttonStart.innerHTML = 'Pause';
   timer = setInterval (counter, 4);
   buttonStart.removeEventListener("click", startCount);
   // button.addEventListener("click", pauseCount);
}
