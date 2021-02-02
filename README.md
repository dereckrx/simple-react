## Install

`npm install --save dereckrx/simple-react`

## Usage

```javascript
const { div, p, ol, li } = simpleReact(React.createElement); 

const Component = (props) => {
  return (
    div(
      p('Hello Simplicity!'),
      ol(
        li('No JSX'),
        li('Only functions'),
        li({style: { color: 'red' }}, 
          'With or without style props')))
  )
}
```