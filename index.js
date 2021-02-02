const simpleReact = (createElement) => {
  const isReactComponent = (value) => {
    return (
      value.$$typeof && value.$$typeof.toString() === "Symbol(react.element)"
    );
  };

  const create = (name, ...props) => {
    if (props.length === 0) {
      // No props or children
      return createElement(name);
    } else if (isReactComponent(props[0]) || typeof props[0] === "string") {
      // Children with no props
      return createElement(name, null, ...props);
    } else {
      // Props and children
      return createElement(name, props[0], ...props.slice(1, props.length));
    }
  };

  const creatorFor = (name) => {
    return (...props) => {
      return create(name, ...props);
    };
  };

  return {
    x: create,
    create: create,
    creatorFor: creatorFor,
    div: creatorFor("div"),
    p: creatorFor("p"),
    h1: creatorFor("h1"),
    h2: creatorFor("h2"),
    h3: creatorFor("h3"),
    h4: creatorFor("h4"),
    a: creatorFor("a"),
    ul: creatorFor("ul"),
    li: creatorFor("li"),
    input: creatorFor("input"),
    button: creatorFor("button"),
    label: creatorFor("label"),
    textarea: creatorFor("textarea"),
    form: creatorFor("form"),
  };
};

module.exports = { simpleReact };
