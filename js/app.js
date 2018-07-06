(function initializePage() {
  const apiUrl = 'https://chemical-connection.herokuapp.com/';
  fetch(apiUrl)
    .then(response => response.json())
    .then(response => response.data)
    .then(data => data.forEach(getNerd));
})();

function getNerd(nerd) {
  const $li = document.createElement('li');
  console.log(nerd);
  const $elements = [
    getNameplate(nerd.username, nerd.faveElements)
  ].forEach($element => $li.appendChild($element));
  document.querySelector('#nerds').appendChild($li);
}

function getImage(id, altText) {
  const $image = document.createElement('img');
  $image.src = id;
  $image.alt = altText;
  return $image;
}

function getNameplate(username, faveElements) {
  return getElement('span', `${username} - ${faveElements} - ${getRandomInt(100)}%`);
}

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
};

function getMessage(message) {
  return getElement('p', message);
}

function getLink(name) {
  const $a = getElement('a', `Leave ${name} a message`);
  $a.href = `contact.html?nerd=${name}`;
  return $a;
}

function getElement(tagName, text) {
  const $element = document.createElement(tagName);
  const $text = document.createTextNode(text);
  $element.appendChild($text);
  return $element;
}