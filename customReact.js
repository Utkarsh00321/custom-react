function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "h1",
  children: "Hello React!",
};

const reactElement2 = {
  type: "h2",
  children: "Hello React!",
};

const reactElement3 = {
  type: "h3",
  children: "Hello React!",
};

const reactElement4 = {
  type: "h4",
  children: "Hello React!",
};

const reactElement5 = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click to visit ...",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
customRender(reactElement2, mainContainer);
customRender(reactElement3, mainContainer);
customRender(reactElement4, mainContainer);
customRender(reactElement5, mainContainer);
