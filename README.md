# registerElement
document.registerElement shortcut

## installation
```
npm install register-element
```

## usage (ES2015)
```js
import registerElement from 'register-element';

var MyElement = registerElement('my-element', {
  createdCallback () {
    alert('created!');
  },
  attachedCallback () {
    this.textContent = 'Hello!';
  }
});

document.body.appendChild(new MyElement());
```

### extending element

```js
var MyInput = registerElement('my-input', {
  createdCallback () {
    alert('created input');
  },
  attachedCallback () {
    this.placeholder = 'Hello!';
  }
}, HTMLInputElement, 'input');

document.body.appendChild(new MyInput());
```

## usage (CommonJS)
```js
var registerElement = require('register-element');

var MyElement = registerElement('my-element', {
  createdCallback () {
    alert('created!');
  },
  attachedCallback () {
    this.textContent = 'Hello!';
  }
});

document.body.appendChild(new MyElement());
```

## usage (oldskool)
```html
<script src="register-element.js"></script>
<script>
  import registerElement from 'register-element';

  var MyElement = registerElement('my-element', {
    createdCallback () {
      alert('created!');
    },
    attachedCallback () {
      this.textContent = 'Hello!';
    }
  });
  
  document.body.appendChild(new MyElement());
</script>
```
