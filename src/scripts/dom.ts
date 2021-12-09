// DOM helpers
export const $ = (
  elName: string,
  children?: (string | Node)[],
  attrs?: DOMAttributeMap
) => {
  const el = document.createElement(elName);

  if (children) {
    children.forEach((c) => {
      if (typeof c === 'string') {
        const textNode = document.createTextNode(c);
        el.appendChild(textNode);
      } else {
        el.appendChild(c);
      }
    });
  }

  if (attrs) {
    Object.keys(attrs).forEach((key) => {
      // event handlers must be applied differently
      switch (key) {
        case 'onClick':
          return el.addEventListener('click', attrs[key]);

        default:
          el.setAttribute(key, attrs[key]);
      }
    });
  }

  return el;
};

export const find = (selector: string) => document.querySelector(selector);

interface DOMAttributeMap {
  [x: string]: any;
}
