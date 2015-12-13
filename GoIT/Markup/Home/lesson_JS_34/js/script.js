var wrapper = document.createElement('div');
   wrapper.className = "wrapper";
var body = document.querySelector('body');
   body.appendChild(wrapper);

var create = {
   createElement: function(tagName, className, content){
      var element = document.createElement(tagName);
      element.className = className;
      element.innerHTML = content;
   return element;
   }
}
var head = create.createElement('h3', 'h3', 'Тест по програмированнию');
var input = create.createElement('input', 'button', 'Проверить мои результаты');

wrapper.appendChild(head);
wrapper.appendChild(input);
