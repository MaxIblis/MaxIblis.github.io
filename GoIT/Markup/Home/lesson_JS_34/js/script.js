var wrapper = document.createElement('div');
   wrapper.className = "wrapper";
var body = document.querySelector('body');
   body.appendChild(wrapper);

var create = {
   createElement: function(tagName, className, type, content){
      var element = document.createElement(tagName);

      element.className = className;
      inputType = type;
      element.innerHTML = content;

      if (tagName === 'input'){
       element.setAttribute('type', inputType);
       element.setAttribute('value', content);
      }else{
       element.innerHTML = content;
    }

   return element;
   },

   generateQuestions: function(questionsAmount, answersAmount) {

   for (var i = 0; i < questionsAmount; i++) {
   var p = this.createElement('p','', '',(i + 1) + '.' + "Вопрос №" + (i + 1));

   for (var j = 0; j < answersAmount; j++) {
   var label = this.createElement('label','label_my','','Вариант ответа №' + (j + 1));
   var checkbox = this.createElement('input', '', 'checkbox', '');
   label.insertAdjacentElement('afterBegin', checkbox);
   p.appendChild(label);
   }
   form.appendChild(p);
   form.appendChild(input);
}

}

}

var head = create.createElement('h5', 'h5', '', 'Тест по програмированнию');
// var div_form = create.createElement('div', 'form-group', '', '');
var form = create.createElement('form','','','');
var input = create.createElement('input', 'btn btn-default btn_my', 'submit', 'Проверить мои результаты');

create.generateQuestions(3, 3);
wrapper.appendChild(head);
// wrapper.appendChild(div_form);
wrapper.appendChild(form);
