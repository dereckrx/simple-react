const React = require("react");
const { simpleReact } = require("./index");

const eq = (a, b) =>
  ((as, bs, p, f) => (as === bs ? p(".") : p(`FAIL: ${as} === ${bs}\t${f()}`)))(
    JSON.stringify(a),
    JSON.stringify(b),
    console.log,
    () => new Error().stack.split("\n")[4].match(/\/([^/]+):\d+\)/)[1]
  );

const { div } = simpleReact(React.createElement);

// renders with no props or children
let el = div();
eq(el.type, "div");
eq(el.props, {});

el = div("renders text only");
eq(el.props.children, "renders text only");

el = div({ style: { marginTop: 20 } });
eq(el.props, { style: { marginTop: 20 } });
eq(el.props.children, undefined);

el = div({ style: { marginTop: 20 } }, "renders with props and text");
eq(el.props.style, { marginTop: 20 });
eq(el.props.children, "renders with props and text");

el = div(div("renders with component child"));
const child = el.props.children;
eq(child.props.children, "renders with component child");

el = div(div("renders"), div("multiple"), div("children"));
eq(el.props.children.length, 3);

const AppComponent = (props) => div(props.text);
el = div(AppComponent({ text: "renders custom components" }));
eq(el.props.children.props.children, "renders custom components");

// render DOM
document = {
  getElementById: (id) => {},
};
