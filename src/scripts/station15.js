function displayList() {
  var fruitsDiv = document.getElementById('fruits');
  var fruits = fruitsDiv.getElementsByTagName('p');
  var list = document.createElement('ul');

    for (var i = 0; i < fruits.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = fruits[i].textContent;
      list.appendChild(listItem);
    }

    fruitsDiv.innerHTML = '';
    fruitsDiv.appendChild(list);
}