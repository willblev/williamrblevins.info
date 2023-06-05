import { h, render } from 'preact';

import './style';

import { App } from './App';

declare const module: any;
let node: Element;

/**
 * Start the application.
 */
const start = () => {
  node = render(
    <div>
      <App />
    </div>,
    document.body,
    node,
  );
};

// Enable hot reloading for development
if (module.hot) {
  // tslint:disable-next-line:no-var-requires no-require-imports
  require('preact/devtools');
  module.hot.accept('./App', () => requestAnimationFrame(start));
}
start();
