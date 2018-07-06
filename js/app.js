(function initializePage() {
  const apiUrl = 'https://chemical-connection.herokuapp.com/';
  fetch(apiUrl)
    .then(response => response.json())
    .then(response => response.data)
    .then(data => data.forEach(getNerd));
})();

function getNerd(nerd) {
  const $li = document.createElement('li');
  const $elements = [
    getNerd(nerd.id, nerd.username, nerd.faveElements)
  ].forEach($element => $li.appendChild($element));
  document.querySelector('#nerds').appendChild($li);
}

function getElement(tagName, text) {
  const $element = document.createElement(tagName);
  const $text = document.createTextNode(text);
  $element.appendChild($text);
  return $element;
}