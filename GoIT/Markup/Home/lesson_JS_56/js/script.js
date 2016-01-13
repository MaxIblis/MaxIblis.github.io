function create (newElement) {
   var newElement = document.createElement('div');
   document.body.appendChild(newElement);
   newElement.classList.add('row');
   return newElement;
}

var divTimeTable = create(divTimeTable);
var divStart = create(divStart);
var split = create(split);

var timeTable = document.createElement('div');
divTimeTable.appendChild(timeTable);
timeTable.innerHTML = '00:00:00:000';
timeTable.style.fontSize = "48px";
timeTable.classList.add('col-md-2', 'col-md-offset-5', 'text-center');

var start = document.createElement('button');
divStart.appendChild(start);
start.classList.add('btn', 'btn-success', 'col-md-2', 'col-md-offset-4');
start.setAttribute('type', 'button');
start.innerHTML = 'Start';
start.style.fontSize = "28px";
start.addEventListener("click", startCount);

var reset = document.createElement('button');
divStart.appendChild(reset);
reset.classList.add('btn', 'btn-warning', 'col-md-1');
reset.setAttribute('type', 'button');
start.innerHTML = 'Reset';
reset.style.fontSize = "28px";
reset.addEventListener("click", resetCount);
