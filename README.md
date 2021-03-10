## Install

`npm install --save dereckrx/simple-react`

## Usage

Script tag

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script crossorigin src="https://cdn.jsdelivr.net/gh/dereckrx/simple-react@latest/index.js"></script>
```

Or npm package

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { simpleReact } from 'simple-react';

const { div, ul, li, creatorFor } = simpleReact(React.createElement); 

const p = creatorFor('p'); // Create any missing tags

const Component = (props) => {
  const ListItem = (props) => li(props.text);

  return (
    div(
      p('Hello Simplicity!'),
      ul(
        li('No JSX, only functions!'),
        li({style: { color: 'red' }}, 
          'With or without attribute props'),
        ListItem({text: 'Easy to use with custom components'})))
  )
}

ReactDOM.render(
  Component(),
  document.getElementById('app'),
)
```
