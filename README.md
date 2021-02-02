## Install

`npm install --save dereckrx/simple-react`

## Usage

```javascript
const { div, p, ol, li } = simpleReact(React.createElement); 

const Component = (props) => {
  const ListItem = (props) => li(props.text);

  return (
    div(
      p('Hello Simplicity!'),
      ol(
        li('No JSX, only functions!'),
        li({style: { color: 'red' }}, 
          'With or without attribute props'))
        ListItem({text: 'Easy to use with custom components'}),
  )
}
```