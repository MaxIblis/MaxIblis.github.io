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
   var h4 = this.createElement('h4','', '',"Вопрос №" + (i + 1));

   for (var j = 0; j < answersAmount; j++) {
   var label = this.createElement('label', '','','Вариант ответа №' + (j + 1));
   var checkbox = this.createElement('input', '', 'checkbox', '');
   label.insertAdjacentElement('afterBegin', checkbox);
   h4.appendChild(label);
   }
   form.appendChild(h4);
   form.appendChild(input);
}

}

}

var head = create.createElement('h3', 'h3', '', 'Тест по програмированнию');
var form = create.createElement('form','','','');
var input = create.createElement('input', 'button', 'submit', 'Проверить мои результаты');

create.generateQuestions(3, 3);
wrapper.appendChild(head);
wrapper.appendChild(form);
