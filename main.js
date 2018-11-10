// Original
const flip = Math.floor(Math.random() * 2);
document.addEventListener('DOMContentLoaded', function(){
  if (flip == 0) {
    var lista = document.getElementsByTagName('ul');
    var listItem = document.createElement('li');
    listItem.id = "krona";
    lista[0].appendChild(listItem);
  }
  if (flip == 1) {
    var lista = document.getElementsByTagName('ul');
    var listItem = document.createElement('li');
    listItem.id = "klave";
    lista[0].appendChild(listItem);
  }
});
