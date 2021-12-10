export const $ = (
  elName: string,
  children?: (string | Node)[],
  attrs?: DOMAttributeMap
) => {
  const el = document.createElement(elName);

  if (children) {
    children.forEach((c) => {
      if (typeof c === 'string') {
        const contents = withRenderedSvgs(c);

        contents.forEach((piece) => el.appendChild(piece));
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

const infoIcon = `<svg
aria-hidden="true"
focusable="false"
role="img"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 10 10"
class="w-6 inline"
>
<path
  fill="currentColor"
  d="M4.878,0.093c0.021-0.001,0.042-0.001,0.064,0c0.291-0.01,0.544,0.209,0.585,0.494
  c0.13,0.545-0.449,1.092-0.982,0.874C3.909,1.166,4.23,0.124,4.878,0.093z M4.616,2.467C5.029,2.44,5.101,2.92,4.972,3.408
  c-0.251,1.12-0.641,2.205-0.854,3.332c0.103,0.446,0.664-0.064,0.904-0.228c0.204-0.162,0.24,0.041,0.31,0.212
  c-0.51,0.357-1.022,0.721-1.59,1.009c-0.534,0.323-0.97-0.18-0.837-0.74c0.22-1.045,0.51-2.075,0.747-3.117
  c0.074-0.562-0.667,0.01-0.888,0.141C2.586,4.24,2.501,4.077,2.427,3.875C3.018,3.444,3.62,2.915,4.273,2.57
  C4.406,2.504,4.521,2.473,4.616,2.467z"
/>
</svg>`;

const headphonesIcon = `
<svg
  aria-hidden="true"
  focusable="false"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  class="w-4 inline ml-2"
  >
    <g transform="matrix( 1, 0, 0, 1, 0,0)">
      <g>
        <path
          stroke="currentColor"
          d="M35.4,63c-1.4,0-2.5-0.5-3.5-1.4c-1-1-1.4-2.1-1.4-3.5c0-0.2,0-0.3,0-0.5c0.1-1.2,0.6-2.2,1.4-3
          c1-1,2.1-1.4,3.5-1.4s2.5,0.5,3.5,1.4c0.6,0.6,1,1.3,1.2,2h3c1.7,0,3.2-0.6,4.4-1.9c0.4-0.5,0.8-1,1.1-1.5
          c-0.6-0.3-1.2-0.7-1.8-1.2c-1-1-1.6-2.3-1.6-3.8v-15c0-1.5,0.5-2.8,1.6-3.8c1-1,2.3-1.6,3.8-1.6c1.5,0,2.8,0.5,3.8,1.6
          c0.7,0.7,1.2,1.5,1.4,2.4H57c0.3,0,0.6,0,0.8,0.1v-0.2c0-7.7-2.6-14.3-7.7-19.7c-5.5-5.5-11.5-8.1-18.6-8.1
          c-7.2,0-13.5,2.7-18.6,8.1C7.9,17.4,5.3,24,5.3,31.7V32c0.5-0.1,1.1-0.2,1.7-0.2h1.1c0.2-0.9,0.7-1.7,1.4-2.4c1-1,2.3-1.6,3.8-1.6
          c1.5,0,2.8,0.5,3.8,1.6c1.1,1,1.6,2.3,1.6,3.8v15c0,1.5-0.5,2.8-1.6,3.8c-1,1-2.3,1.6-3.8,1.6c-1.5,0-2.8-0.5-3.8-1.6
          c-0.8-0.8-1.3-1.7-1.5-2.7H7c-1.5,0-2.9-0.5-4-1.4c-0.2-0.1-0.3-0.3-0.5-0.4c-1.2-1.2-1.8-2.7-1.8-4.4v-4.9c0-1.7,0.6-3.2,1.8-4.4
          v-2C2.5,23.3,5.3,16,11,10c5.7-6,12.6-9,20.6-9c7.8,0,14.5,2.9,20.6,9c5.7,6,8.5,13.3,8.5,21.7v1.3c0.3,0.2,0.5,0.4,0.8,0.7
          c1.2,1.2,1.8,2.7,1.8,4.4V43c0,1.7-0.6,3.2-1.8,4.4c-0.5,0.5-1,0.9-1.6,1.2c-0.9,0.5-1.8,0.7-2.9,0.7H56c-0.2,1-0.7,1.9-1.5,2.7
          c-0.8,0.8-1.8,1.4-3,1.5c-0.4,1.1-1.1,2.2-2,3.1c-1.8,1.9-3.9,2.8-6.4,2.8h-3c-0.2,0.8-0.6,1.5-1.3,2.1C37.9,62.5,36.8,63,35.4,63
          z"
        />
      </g>
    </g>
  </svg>
`;

const withRenderedSvgs = (value: string) => {
  const shortcode = getSvgShortCode(value);

  if (!shortcode) {
    return [document.createTextNode(value)];
  }

  const svg = svgShortcodesMap.get(shortcode);

  if (!svg) {
    return [document.createTextNode(value)];
  }

  const [before, after] = value.split(shortcode);
  const beforeNode = document.createTextNode(before);
  const afterNode = document.createTextNode(after);

  const el =
    shortcode === '(i)' ? renderInfoIcon() : renderButtonWithHeadphonesIcon();

  return [beforeNode, el, afterNode];
};

const renderButtonWithHeadphonesIcon = () => {
  const parser = new DOMParser();
  const svgEl = parser.parseFromString(
    headphonesIcon,
    'image/svg+xml'
  ).documentElement;

  return $('button', ['Help', svgEl], {
    class:
      'border border-purple-500 rounded-full px-3 inline-flex items-center align-center justify-items-center',
  });
};

const renderInfoIcon = () => {
  const parser = new DOMParser();
  return parser.parseFromString(infoIcon, 'image/svg+xml').documentElement;
};

const getSvgShortCode = (value: string) => {
  if (value.includes('(i)')) {
    return '(i)';
  }

  if (value.includes('[help + headphones icon]')) {
    return '[help + headphones icon]';
  }

  return null;
};

const svgShortcodesMap = new Map([
  ['(i)', infoIcon],
  ['[help + headphones icon]', headphonesIcon],
]);

export const cn = (classNames: CnItem[]) =>
  classNames
    .map((c) => {
      if (typeof c === 'string') {
        return c;
      }

      const [className] = Object.keys(c);

      if (c[className]) {
        return className;
      }

      return '';
    })
    .filter((c) => !!c.trim())
    .join(' ');

type CnItem = string | { [x: string]: boolean };

export const createHoverClassNames = (classNames: string) =>
  classNames
    .split(' ')
    .map((s) => `hover:${s}`)
    .join(' ');
