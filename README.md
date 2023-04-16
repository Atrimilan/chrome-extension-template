# Chrome extension template v2

This is a [manifest v3](https://developer.chrome.com/docs/extensions/mv3/intro/) chrome extension.

This extension uses Webpack, see the [webpack.config.js](https://github.com/Atrimilan/chrome-extension-template/blob/master/webpack.config.js) configuration. You can use SCSS, TypeScript, Vue.js (JS & TS).

---

### Installation

* Run `npm ci` to install all node modules

### Compilation

* `npm run start` to compile once _(development mode)_
* `npm run watch` to compile everytime you edit a file _(development mode)_
* `npm run build` to build once _(production mode)_

### Install the extension

* Go to `chrome://extensions/` or `edge://extensions/`
* Toggle developper mode and click on "load unpacked extension"
* Select the `./dist` folder of the project
* You can then reload each time you update your extension
