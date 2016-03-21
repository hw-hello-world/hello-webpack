require('./component.css');

function hello () {
  var h1 = document.createElement('h1');
  h1.innerHTML = 'Hello Webpack, HMR, haha?';
  h1.className = 'large-header';

  return h1;
}

module.exports = hello;
