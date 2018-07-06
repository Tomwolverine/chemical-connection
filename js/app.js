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
    // getImage(nerd.id, nerd.username),
    getNameplate(nerd.id, nerd.username, nerd.faveElements),
    // getMessage(nerd.message),
    // getLink(nerd.name)
  ].forEach($element => $li.appendChild($element));
  document.querySelector('#nerds').appendChild($li);
}

function getImage(id, altText) {
  const $image = document.createElement('img');
  $image.src = id;
  $image.alt = altText;
  return $image;
}

function getNameplate(name, phoneNumber) {
  return getElement('span', `${name} - ${phoneNumber}`);
}

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