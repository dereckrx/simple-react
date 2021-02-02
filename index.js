const simpleReact = (createElement) => {
  const create = (name, ...props) => {
    const isElement = (value) =>
      value.$$typeof && value.$$typeof.toString() === "Symbol(react.element)";

    if (props.length === 0) {
      // No props or children
      return createElement(name);
    } else if (isElement(props[0]) || typeof props[0] === "string") {
      // Children with no props
      return createElement(name, null, ...props);
    } else {
      // Props and children
      return createElement(name, props[0], ...props.slice(1, props.length));
    }
  };

  const creatorFor = (name) => (...props) => create(name, ...props);

  return {
    creatorFor,
    ...[
      "div",
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "a",
      "ul",
      "ol",
      "li",
      "input",
      "button",
      "label",
      "textarea",
      "form",
      "pre",
    ].reduce((acc, tag) => ({ ...acc, [tag]: creatorFor(tag) }), {}),
  };
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { simpleReact };
}
