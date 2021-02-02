## Install

`npm install --save dereckrx/simple-react`

## Usage

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