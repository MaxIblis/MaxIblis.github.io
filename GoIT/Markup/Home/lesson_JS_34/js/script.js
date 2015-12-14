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
      }
   return element;
   },

   generateQuestions: function(questionsAmount, answersAmount) {

    for (var i = 0; i < questionsAmount; i++) {

  //     // this.createElement({
  //     //   tagName: 'h2',
  //     //   content: 'Вопрос №' + (i + 1),
  //     //   parentElement: form
  //     // });

      var h2 = this.createElement('h2','', '',"Вопрос №" + (i + 1));
        // tagName: 'h2',
        // content: 'Вопрос №' + (i + 1),
        // parentElement: form
      // );

      form.appendChild(h2);

  //     for (var j = 0; j < answersAmount; j++) {

  //       var label = this.createElement({
  //         tagName: 'label',
  //         content: 'Вариант ответа №' + (j + 1),
  //         parentElement: form
  //       });

  //       var checkbox = this.createElement({
  //         tagName: 'input',
  //         inputType: 'checkbox'
  //       });

  //       label.insertAdjacentElement('afterBegin', checkbox);
  //     }

  //   };

  // }
}
var head = create.createElement('h3', 'h3', '', 'Тест по програмированнию');

var form = create.createElement('form', '','','')
var input = create.createElement('input', 'button', 'submit', 'Проверить мои результаты');

// create.generateQuestions(3, 3);
wrapper.appendChild(head);
wrapper.appendChild(form);
form.appendChild(input);
