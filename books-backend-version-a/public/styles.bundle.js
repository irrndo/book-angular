webpackJsonp([2,4],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(219)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--10-2!../../node_modules/postcss-loader/index.js??postcss!../../node_modules/sass-loader/lib/loader.js??ref--10-4!./style.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--10-2!../../node_modules/postcss-loader/index.js??postcss!../../node_modules/sass-loader/lib/loader.js??ref--10-4!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * CoreUI - Open Source Bootstrap Admin Template\n * @version v1.0.0-alpha.5\n * @link http://coreui.io\n * Copyright (c) 2017 creativeLabs Łukasz Holeczek\n * @license MIT\n */\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nfigcaption,\nfigure,\nmain {\n  display: block; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\npre {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n\na:active,\na:hover {\n  outline-width: 0; }\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted; }\n\nb,\nstrong {\n  font-weight: inherit; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background-color: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\naudio,\nvideo {\n  display: inline-block; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\nimg {\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal; }\n\nprogress {\n  display: inline-block;\n  vertical-align: baseline; }\n\ntextarea {\n  overflow: auto; }\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit; }\n\ndetails,\nmenu {\n  display: block; }\n\nsummary {\n  display: list-item; }\n\ncanvas {\n  display: inline-block; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none; }\n\n/*!\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@media print {\n  *,\n  *::before,\n  *::after,\n  p::first-letter,\n  div::first-letter,\n  blockquote::first-letter,\n  li::first-letter,\n  p::first-line,\n  div::first-line,\n  blockquote::first-line,\n  li::first-line {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\nhtml {\n  box-sizing: border-box;\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\n@-ms-viewport {\n  width: device-width; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 0.875rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #263238;\n  background-color: #e4e5e6; }\n\n[tabindex=\"-1\"]:focus {\n  outline: none !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: .5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #20a8d8;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #167495;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #b0bec5;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: left; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\nh1, .h1 {\n  font-size: 2.5rem; }\n\nh2, .h2 {\n  font-size: 2rem; }\n\nh3, .h3 {\n  font-size: 1.75rem; }\n\nh4, .h4 {\n  font-size: 1.5rem; }\n\nh5, .h5 {\n  font-size: 1.25rem; }\n\nh6, .h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 5px; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.09375rem;\n  border-left: 0.25rem solid #cfd8dc; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #b0bec5; }\n  .blockquote-footer::before {\n    content: \"\\2014   \\A0\"; }\n\n.blockquote-reverse {\n  padding-right: 1rem;\n  padding-left: 0;\n  text-align: right;\n  border-right: 0.25rem solid #cfd8dc;\n  border-left: 0; }\n\n.blockquote-reverse .blockquote-footer::before {\n  content: \"\"; }\n\n.blockquote-reverse .blockquote-footer::after {\n  content: \"\\A0   \\2014\"; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #e4e5e6;\n  border: 1px solid #ddd;\n  transition: all 0.2s ease-in-out;\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #b0bec5; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\ncode {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #eceff1; }\n  a > code {\n    padding: 0;\n    color: inherit;\n    background-color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #263238; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold; }\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  color: #263238; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px; }\n  @media (min-width: 576px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 768px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 992px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 1200px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 576px) {\n    .container {\n      width: 540px;\n      max-width: 100%; } }\n  @media (min-width: 768px) {\n    .container {\n      width: 720px;\n      max-width: 100%; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 960px;\n      max-width: 100%; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1140px;\n      max-width: 100%; } }\n\n.container-fluid {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px; }\n  @media (min-width: 576px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 768px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 992px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 1200px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 576px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n  @media (min-width: 768px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n  @media (min-width: 992px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n  @media (min-width: 1200px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n  @media (min-width: 576px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n    .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n    .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n    .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n    .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n    .col-xl-auto {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 768px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n    .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n    .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n    .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n    .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n    .col-xl-auto {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 992px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n    .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n    .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n    .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n    .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n    .col-xl-auto {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 1200px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n    .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n    .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n    .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n    .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n    .col-xl-auto {\n      padding-right: 15px;\n      padding-left: 15px; } }\n\n.col {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto; }\n\n.col-1 {\n  width: 8.33333333%; }\n\n.col-2 {\n  width: 16.66666667%; }\n\n.col-3 {\n  width: 25%; }\n\n.col-4 {\n  width: 33.33333333%; }\n\n.col-5 {\n  width: 41.66666667%; }\n\n.col-6 {\n  width: 50%; }\n\n.col-7 {\n  width: 58.33333333%; }\n\n.col-8 {\n  width: 66.66666667%; }\n\n.col-9 {\n  width: 75%; }\n\n.col-10 {\n  width: 83.33333333%; }\n\n.col-11 {\n  width: 91.66666667%; }\n\n.col-12 {\n  width: 100%; }\n\n.pull-0 {\n  right: auto; }\n\n.pull-1 {\n  right: 8.33333333%; }\n\n.pull-2 {\n  right: 16.66666667%; }\n\n.pull-3 {\n  right: 25%; }\n\n.pull-4 {\n  right: 33.33333333%; }\n\n.pull-5 {\n  right: 41.66666667%; }\n\n.pull-6 {\n  right: 50%; }\n\n.pull-7 {\n  right: 58.33333333%; }\n\n.pull-8 {\n  right: 66.66666667%; }\n\n.pull-9 {\n  right: 75%; }\n\n.pull-10 {\n  right: 83.33333333%; }\n\n.pull-11 {\n  right: 91.66666667%; }\n\n.pull-12 {\n  right: 100%; }\n\n.push-0 {\n  left: auto; }\n\n.push-1 {\n  left: 8.33333333%; }\n\n.push-2 {\n  left: 16.66666667%; }\n\n.push-3 {\n  left: 25%; }\n\n.push-4 {\n  left: 33.33333333%; }\n\n.push-5 {\n  left: 41.66666667%; }\n\n.push-6 {\n  left: 50%; }\n\n.push-7 {\n  left: 58.33333333%; }\n\n.push-8 {\n  left: 66.66666667%; }\n\n.push-9 {\n  left: 75%; }\n\n.push-10 {\n  left: 83.33333333%; }\n\n.push-11 {\n  left: 91.66666667%; }\n\n.push-12 {\n  left: 100%; }\n\n.offset-1 {\n  margin-left: 8.33333333%; }\n\n.offset-2 {\n  margin-left: 16.66666667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333333%; }\n\n.offset-5 {\n  margin-left: 41.66666667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333333%; }\n\n.offset-8 {\n  margin-left: 66.66666667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333333%; }\n\n.offset-11 {\n  margin-left: 91.66666667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-sm-1 {\n    width: 8.33333333%; }\n  .col-sm-2 {\n    width: 16.66666667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333333%; }\n  .col-sm-5 {\n    width: 41.66666667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333333%; }\n  .col-sm-8 {\n    width: 66.66666667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333333%; }\n  .col-sm-11 {\n    width: 91.66666667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .pull-sm-0 {\n    right: auto; }\n  .pull-sm-1 {\n    right: 8.33333333%; }\n  .pull-sm-2 {\n    right: 16.66666667%; }\n  .pull-sm-3 {\n    right: 25%; }\n  .pull-sm-4 {\n    right: 33.33333333%; }\n  .pull-sm-5 {\n    right: 41.66666667%; }\n  .pull-sm-6 {\n    right: 50%; }\n  .pull-sm-7 {\n    right: 58.33333333%; }\n  .pull-sm-8 {\n    right: 66.66666667%; }\n  .pull-sm-9 {\n    right: 75%; }\n  .pull-sm-10 {\n    right: 83.33333333%; }\n  .pull-sm-11 {\n    right: 91.66666667%; }\n  .pull-sm-12 {\n    right: 100%; }\n  .push-sm-0 {\n    left: auto; }\n  .push-sm-1 {\n    left: 8.33333333%; }\n  .push-sm-2 {\n    left: 16.66666667%; }\n  .push-sm-3 {\n    left: 25%; }\n  .push-sm-4 {\n    left: 33.33333333%; }\n  .push-sm-5 {\n    left: 41.66666667%; }\n  .push-sm-6 {\n    left: 50%; }\n  .push-sm-7 {\n    left: 58.33333333%; }\n  .push-sm-8 {\n    left: 66.66666667%; }\n  .push-sm-9 {\n    left: 75%; }\n  .push-sm-10 {\n    left: 83.33333333%; }\n  .push-sm-11 {\n    left: 91.66666667%; }\n  .push-sm-12 {\n    left: 100%; }\n  .offset-sm-0 {\n    margin-left: 0%; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-md-1 {\n    width: 8.33333333%; }\n  .col-md-2 {\n    width: 16.66666667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333333%; }\n  .col-md-5 {\n    width: 41.66666667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333333%; }\n  .col-md-8 {\n    width: 66.66666667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333333%; }\n  .col-md-11 {\n    width: 91.66666667%; }\n  .col-md-12 {\n    width: 100%; }\n  .pull-md-0 {\n    right: auto; }\n  .pull-md-1 {\n    right: 8.33333333%; }\n  .pull-md-2 {\n    right: 16.66666667%; }\n  .pull-md-3 {\n    right: 25%; }\n  .pull-md-4 {\n    right: 33.33333333%; }\n  .pull-md-5 {\n    right: 41.66666667%; }\n  .pull-md-6 {\n    right: 50%; }\n  .pull-md-7 {\n    right: 58.33333333%; }\n  .pull-md-8 {\n    right: 66.66666667%; }\n  .pull-md-9 {\n    right: 75%; }\n  .pull-md-10 {\n    right: 83.33333333%; }\n  .pull-md-11 {\n    right: 91.66666667%; }\n  .pull-md-12 {\n    right: 100%; }\n  .push-md-0 {\n    left: auto; }\n  .push-md-1 {\n    left: 8.33333333%; }\n  .push-md-2 {\n    left: 16.66666667%; }\n  .push-md-3 {\n    left: 25%; }\n  .push-md-4 {\n    left: 33.33333333%; }\n  .push-md-5 {\n    left: 41.66666667%; }\n  .push-md-6 {\n    left: 50%; }\n  .push-md-7 {\n    left: 58.33333333%; }\n  .push-md-8 {\n    left: 66.66666667%; }\n  .push-md-9 {\n    left: 75%; }\n  .push-md-10 {\n    left: 83.33333333%; }\n  .push-md-11 {\n    left: 91.66666667%; }\n  .push-md-12 {\n    left: 100%; }\n  .offset-md-0 {\n    margin-left: 0%; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-lg-1 {\n    width: 8.33333333%; }\n  .col-lg-2 {\n    width: 16.66666667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333333%; }\n  .col-lg-5 {\n    width: 41.66666667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333333%; }\n  .col-lg-8 {\n    width: 66.66666667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333333%; }\n  .col-lg-11 {\n    width: 91.66666667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .pull-lg-0 {\n    right: auto; }\n  .pull-lg-1 {\n    right: 8.33333333%; }\n  .pull-lg-2 {\n    right: 16.66666667%; }\n  .pull-lg-3 {\n    right: 25%; }\n  .pull-lg-4 {\n    right: 33.33333333%; }\n  .pull-lg-5 {\n    right: 41.66666667%; }\n  .pull-lg-6 {\n    right: 50%; }\n  .pull-lg-7 {\n    right: 58.33333333%; }\n  .pull-lg-8 {\n    right: 66.66666667%; }\n  .pull-lg-9 {\n    right: 75%; }\n  .pull-lg-10 {\n    right: 83.33333333%; }\n  .pull-lg-11 {\n    right: 91.66666667%; }\n  .pull-lg-12 {\n    right: 100%; }\n  .push-lg-0 {\n    left: auto; }\n  .push-lg-1 {\n    left: 8.33333333%; }\n  .push-lg-2 {\n    left: 16.66666667%; }\n  .push-lg-3 {\n    left: 25%; }\n  .push-lg-4 {\n    left: 33.33333333%; }\n  .push-lg-5 {\n    left: 41.66666667%; }\n  .push-lg-6 {\n    left: 50%; }\n  .push-lg-7 {\n    left: 58.33333333%; }\n  .push-lg-8 {\n    left: 66.66666667%; }\n  .push-lg-9 {\n    left: 75%; }\n  .push-lg-10 {\n    left: 83.33333333%; }\n  .push-lg-11 {\n    left: 91.66666667%; }\n  .push-lg-12 {\n    left: 100%; }\n  .offset-lg-0 {\n    margin-left: 0%; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-xl-1 {\n    width: 8.33333333%; }\n  .col-xl-2 {\n    width: 16.66666667%; }\n  .col-xl-3 {\n    width: 25%; }\n  .col-xl-4 {\n    width: 33.33333333%; }\n  .col-xl-5 {\n    width: 41.66666667%; }\n  .col-xl-6 {\n    width: 50%; }\n  .col-xl-7 {\n    width: 58.33333333%; }\n  .col-xl-8 {\n    width: 66.66666667%; }\n  .col-xl-9 {\n    width: 75%; }\n  .col-xl-10 {\n    width: 83.33333333%; }\n  .col-xl-11 {\n    width: 91.66666667%; }\n  .col-xl-12 {\n    width: 100%; }\n  .pull-xl-0 {\n    right: auto; }\n  .pull-xl-1 {\n    right: 8.33333333%; }\n  .pull-xl-2 {\n    right: 16.66666667%; }\n  .pull-xl-3 {\n    right: 25%; }\n  .pull-xl-4 {\n    right: 33.33333333%; }\n  .pull-xl-5 {\n    right: 41.66666667%; }\n  .pull-xl-6 {\n    right: 50%; }\n  .pull-xl-7 {\n    right: 58.33333333%; }\n  .pull-xl-8 {\n    right: 66.66666667%; }\n  .pull-xl-9 {\n    right: 75%; }\n  .pull-xl-10 {\n    right: 83.33333333%; }\n  .pull-xl-11 {\n    right: 91.66666667%; }\n  .pull-xl-12 {\n    right: 100%; }\n  .push-xl-0 {\n    left: auto; }\n  .push-xl-1 {\n    left: 8.33333333%; }\n  .push-xl-2 {\n    left: 16.66666667%; }\n  .push-xl-3 {\n    left: 25%; }\n  .push-xl-4 {\n    left: 33.33333333%; }\n  .push-xl-5 {\n    left: 41.66666667%; }\n  .push-xl-6 {\n    left: 50%; }\n  .push-xl-7 {\n    left: 58.33333333%; }\n  .push-xl-8 {\n    left: 66.66666667%; }\n  .push-xl-9 {\n    left: 75%; }\n  .push-xl-10 {\n    left: 83.33333333%; }\n  .push-xl-11 {\n    left: 91.66666667%; }\n  .push-xl-12 {\n    left: 100%; }\n  .offset-xl-0 {\n    margin-left: 0%; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #cfd8dc; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #cfd8dc; }\n  .table tbody + tbody {\n    border-top: 2px solid #cfd8dc; }\n  .table .table {\n    background-color: #e4e5e6; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #cfd8dc; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #cfd8dc; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #eceff1; }\n\n.table-hover tbody tr:hover {\n  background-color: #eceff1; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: #eceff1; }\n\n.table-hover .table-active:hover {\n  background-color: #dde3e6; }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: #dde3e6; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #dff0d8; }\n\n.table-hover .table-success:hover {\n  background-color: #d0e9c6; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #d0e9c6; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #d9edf7; }\n\n.table-hover .table-info:hover {\n  background-color: #c4e3f3; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #c4e3f3; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fcf8e3; }\n\n.table-hover .table-warning:hover {\n  background-color: #faf2cc; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #faf2cc; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f2dede; }\n\n.table-hover .table-danger:hover {\n  background-color: #ebcccc; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #ebcccc; }\n\n.thead-inverse th {\n  color: #e4e5e6;\n  background-color: #263238; }\n\n.thead-default th {\n  color: #607d8b;\n  background-color: #cfd8dc; }\n\n.table-inverse {\n  color: #e4e5e6;\n  background-color: #263238; }\n  .table-inverse th,\n  .table-inverse td,\n  .table-inverse thead th {\n    border-color: #35464f; }\n  .table-inverse.table-bordered {\n    border: 0; }\n  .table-inverse.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-inverse.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 991px) {\n  .table-responsive {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive.table-bordered {\n      border: 0; } }\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  line-height: 1.25;\n  color: #607d8b;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    color: #607d8b;\n    background-color: #fff;\n    border-color: #8ad4ee;\n    outline: none; }\n  .form-control::-webkit-input-placeholder {\n    color: #b0bec5;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #b0bec5;\n    opacity: 1; }\n  .form-control::placeholder {\n    color: #b0bec5;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #cfd8dc;\n    opacity: 1; }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.09375rem + 2px); }\n\nselect.form-control:focus::-ms-value {\n  color: #607d8b;\n  background-color: #fff; }\n\n.form-control-file,\n.form-control-range {\n  display: block; }\n\n.col-form-label {\n  padding-top: calc(0.5rem - 1px * 2);\n  padding-bottom: calc(0.5rem - 1px * 2);\n  margin-bottom: 0; }\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem - 1px * 2);\n  padding-bottom: calc(0.5rem - 1px * 2);\n  font-size: 1.25rem; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem - 1px * 2);\n  padding-bottom: calc(0.25rem - 1px * 2);\n  font-size: 0.875rem; }\n\n.col-form-legend {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem; }\n\n.form-control-static {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n  line-height: 1.25;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-static.form-control-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn, .form-control-static.form-control-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n.input-group-sm > select.input-group-addon:not([size]):not([multiple]),\n.input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px); }\n\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n.input-group-lg > select.input-group-addon:not([size]):not([multiple]),\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px); }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-check {\n  position: relative;\n  display: block;\n  margin-bottom: 0.5rem; }\n  .form-check.disabled .form-check-label {\n    color: #b0bec5; }\n\n.form-check-label {\n  padding-left: 1.25rem;\n  margin-bottom: 0; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.25rem;\n  margin-left: -1.25rem; }\n  .form-check-input:only-child {\n    position: static; }\n\n.form-check-inline {\n  display: inline-block; }\n  .form-check-inline .form-check-label {\n    vertical-align: middle; }\n  .form-check-inline + .form-check-inline {\n    margin-left: 0.75rem; }\n\n.form-control-feedback {\n  margin-top: 0.25rem; }\n\n.form-control-success,\n.form-control-warning,\n.form-control-danger {\n  padding-right: 3rem;\n  background-repeat: no-repeat;\n  background-position: center right 0.5234375rem;\n  background-size: 1.046875rem 1.046875rem; }\n\n.has-success .form-control-feedback,\n.has-success .form-control-label,\n.has-success .col-form-label,\n.has-success .form-check-label,\n.has-success .custom-control {\n  color: #4dbd74; }\n\n.has-success .form-control,\n.has-success .custom-select,\n.has-success .custom-file-control {\n  border-color: #4dbd74; }\n\n.has-success .input-group-addon {\n  color: #4dbd74;\n  background-color: #e2f4e8;\n  border-color: #4dbd74; }\n\n.has-success .form-control-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%234dbd74' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\"); }\n\n.has-warning .form-control-feedback,\n.has-warning .form-control-label,\n.has-warning .col-form-label,\n.has-warning .form-check-label,\n.has-warning .custom-control {\n  color: #f8cb00; }\n\n.has-warning .form-control,\n.has-warning .custom-select,\n.has-warning .custom-file-control {\n  border-color: #f8cb00; }\n\n.has-warning .input-group-addon {\n  color: #f8cb00;\n  background-color: #fff4c5;\n  border-color: #f8cb00; }\n\n.has-warning .form-control-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f8cb00' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\"); }\n\n.has-danger .form-control-feedback,\n.has-danger .form-control-label,\n.has-danger .col-form-label,\n.has-danger .form-check-label,\n.has-danger .custom-control {\n  color: #f86c6b; }\n\n.has-danger .form-control,\n.has-danger .custom-select,\n.has-danger .custom-file-control {\n  border-color: #f86c6b; }\n\n.has-danger .input-group-addon {\n  color: #f86c6b;\n  background-color: white;\n  border-color: #f86c6b; }\n\n.has-danger .form-control-danger {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f86c6b' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23f86c6b' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\"); }\n\n.form-inline {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .form-inline .form-check {\n    width: 100%; }\n  @media (min-width: 576px) {\n    .form-inline label {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-static {\n      display: inline-block; }\n    .form-inline .input-group {\n      width: auto; }\n    .form-inline .form-control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .form-inline .form-check {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: auto;\n      margin-top: 0;\n      margin-bottom: 0; }\n    .form-inline .form-check-label {\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      padding-left: 0; }\n    .form-inline .custom-control-indicator {\n      position: static;\n      display: inline-block;\n      margin-right: 0.25rem;\n      vertical-align: text-bottom; }\n    .form-inline .has-feedback .form-control-feedback {\n      top: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  line-height: 1.25;\n  transition: all 0.2s ease-in-out; }\n  .btn:focus, .btn:hover {\n    text-decoration: none; }\n  .btn:focus, .btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 2px rgba(32, 168, 216, 0.25); }\n  .btn.disabled, .btn:disabled {\n    opacity: .65; }\n  .btn:active, .btn.active {\n    background-image: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #20a8d8;\n  border-color: #20a8d8; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #1985ac;\n    border-color: #187fa3; }\n  .btn-primary:focus, .btn-primary.focus {\n    box-shadow: 0 0 0 2px rgba(32, 168, 216, 0.5); }\n  .btn-primary.disabled, .btn-primary:disabled {\n    background-color: #20a8d8;\n    border-color: #20a8d8; }\n  .btn-primary:active, .btn-primary.active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #1985ac;\n    background-image: none;\n    border-color: #187fa3; }\n\n.btn-secondary {\n  color: #263238;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-secondary:hover {\n    color: #263238;\n    background-color: #e6e5e5;\n    border-color: #adadad; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5); }\n  .btn-secondary.disabled, .btn-secondary:disabled {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-secondary:active, .btn-secondary.active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #263238;\n    background-color: #e6e5e5;\n    background-image: none;\n    border-color: #adadad; }\n\n.btn-info {\n  color: #fff;\n  background-color: #63c2de;\n  border-color: #63c2de; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #39b2d5;\n    border-color: #30aed3; }\n  .btn-info:focus, .btn-info.focus {\n    box-shadow: 0 0 0 2px rgba(99, 194, 222, 0.5); }\n  .btn-info.disabled, .btn-info:disabled {\n    background-color: #63c2de;\n    border-color: #63c2de; }\n  .btn-info:active, .btn-info.active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #39b2d5;\n    background-image: none;\n    border-color: #30aed3; }\n\n.btn-success {\n  color: #fff;\n  background-color: #4dbd74;\n  border-color: #4dbd74; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #3a9d5d;\n    border-color: #379558; }\n  .btn-success:focus, .btn-success.focus {\n    box-shadow: 0 0 0 2px rgba(77, 189, 116, 0.5); }\n  .btn-success.disabled, .btn-success:disabled {\n    background-color: #4dbd74;\n    border-color: #4dbd74; }\n  .btn-success:active, .btn-success.active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #3a9d5d;\n    background-image: none;\n    border-color: #379558; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f8cb00;\n  border-color: #f8cb00; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #c5a100;\n    border-color: #bb9900; }\n  .btn-warning:focus, .btn-warning.focus {\n    box-shadow: 0 0 0 2px rgba(248, 203, 0, 0.5); }\n  .btn-warning.disabled, .btn-warning:disabled {\n    background-color: #f8cb00;\n    border-color: #f8cb00; }\n  .btn-warning:active, .btn-warning.active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #c5a100;\n    background-image: none;\n    border-color: #bb9900; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #f86c6b;\n  border-color: #f86c6b; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #f63c3a;\n    border-color: #f53231; }\n  .btn-danger:focus, .btn-danger.focus {\n    box-shadow: 0 0 0 2px rgba(248, 108, 107, 0.5); }\n  .btn-danger.disabled, .btn-danger:disabled {\n    background-color: #f86c6b;\n    border-color: #f86c6b; }\n  .btn-danger:active, .btn-danger.active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #f63c3a;\n    background-image: none;\n    border-color: #f53231; }\n\n.btn-outline-primary {\n  color: #20a8d8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #20a8d8; }\n  .btn-outline-primary:hover {\n    color: #fff;\n    background-color: #20a8d8;\n    border-color: #20a8d8; }\n  .btn-outline-primary:focus, .btn-outline-primary.focus {\n    box-shadow: 0 0 0 2px rgba(32, 168, 216, 0.5); }\n  .btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #20a8d8;\n    background-color: transparent; }\n  .btn-outline-primary:active, .btn-outline-primary.active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #20a8d8;\n    border-color: #20a8d8; }\n\n.btn-outline-secondary {\n  color: #ccc;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ccc; }\n  .btn-outline-secondary:hover {\n    color: #263238;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5); }\n  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #ccc;\n    background-color: transparent; }\n  .btn-outline-secondary:active, .btn-outline-secondary.active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #263238;\n    background-color: #ccc;\n    border-color: #ccc; }\n\n.btn-outline-info {\n  color: #63c2de;\n  background-color: transparent;\n  background-image: none;\n  border-color: #63c2de; }\n  .btn-outline-info:hover {\n    color: #fff;\n    background-color: #63c2de;\n    border-color: #63c2de; }\n  .btn-outline-info:focus, .btn-outline-info.focus {\n    box-shadow: 0 0 0 2px rgba(99, 194, 222, 0.5); }\n  .btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #63c2de;\n    background-color: transparent; }\n  .btn-outline-info:active, .btn-outline-info.active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #63c2de;\n    border-color: #63c2de; }\n\n.btn-outline-success {\n  color: #4dbd74;\n  background-color: transparent;\n  background-image: none;\n  border-color: #4dbd74; }\n  .btn-outline-success:hover {\n    color: #fff;\n    background-color: #4dbd74;\n    border-color: #4dbd74; }\n  .btn-outline-success:focus, .btn-outline-success.focus {\n    box-shadow: 0 0 0 2px rgba(77, 189, 116, 0.5); }\n  .btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #4dbd74;\n    background-color: transparent; }\n  .btn-outline-success:active, .btn-outline-success.active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #4dbd74;\n    border-color: #4dbd74; }\n\n.btn-outline-warning {\n  color: #f8cb00;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8cb00; }\n  .btn-outline-warning:hover {\n    color: #fff;\n    background-color: #f8cb00;\n    border-color: #f8cb00; }\n  .btn-outline-warning:focus, .btn-outline-warning.focus {\n    box-shadow: 0 0 0 2px rgba(248, 203, 0, 0.5); }\n  .btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #f8cb00;\n    background-color: transparent; }\n  .btn-outline-warning:active, .btn-outline-warning.active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #f8cb00;\n    border-color: #f8cb00; }\n\n.btn-outline-danger {\n  color: #f86c6b;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f86c6b; }\n  .btn-outline-danger:hover {\n    color: #fff;\n    background-color: #f86c6b;\n    border-color: #f86c6b; }\n  .btn-outline-danger:focus, .btn-outline-danger.focus {\n    box-shadow: 0 0 0 2px rgba(248, 108, 107, 0.5); }\n  .btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #f86c6b;\n    background-color: transparent; }\n  .btn-outline-danger:active, .btn-outline-danger.active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #f86c6b;\n    border-color: #f86c6b; }\n\n.btn-link {\n  font-weight: normal;\n  color: #20a8d8;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {\n    background-color: transparent; }\n  .btn-link, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover {\n    border-color: transparent; }\n  .btn-link:focus, .btn-link:hover {\n    color: #167495;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link:disabled {\n    color: #b0bec5; }\n    .btn-link:disabled:focus, .btn-link:disabled:hover {\n      text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear; }\n  .fade.show {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.show {\n    display: block; }\n\ntr.collapse.show {\n  display: table-row; }\n\ntbody.collapse.show {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.3em;\n  vertical-align: middle;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropup .dropdown-toggle::after {\n  border-top: 0;\n  border-bottom: 0.3em solid; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0 0;\n  margin: 0.125rem 0 0;\n  font-size: 0.875rem;\n  color: #263238;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #cfd8dc; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #eceff1; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: normal;\n  color: #263238;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0; }\n  .dropdown-item:focus, .dropdown-item:hover {\n    color: #1c2429;\n    text-decoration: none;\n    background-color: #eceff1; }\n  .dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #20a8d8; }\n  .dropdown-item.disabled, .dropdown-item:disabled {\n    color: #b0bec5;\n    background-color: transparent; }\n\n.show > .dropdown-menu {\n  display: block; }\n\n.show > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0; }\n\n.dropdown-header {\n  display: block;\n  padding: 0 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #b0bec5;\n  white-space: nowrap; }\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 0.125rem; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    margin-bottom: 0; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 2; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n  .btn-group .btn + .btn,\n  .btn-group .btn + .btn-group,\n  .btn-group .btn-group + .btn,\n  .btn-group .btn-group + .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn + .btn-group,\n  .btn-group-vertical .btn-group + .btn,\n  .btn-group-vertical .btn-group + .btn-group {\n    margin-left: -1px; }\n\n.btn-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n  .btn + .dropdown-toggle-split::after {\n    margin-left: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group-vertical {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .btn-group-vertical .btn,\n  .btn-group-vertical .btn-group {\n    width: 100%; }\n  .btn-group-vertical > .btn + .btn,\n  .btn-group-vertical > .btn + .btn-group,\n  .btn-group-vertical > .btn-group + .btn,\n  .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.input-group-addon,\n.input-group-btn {\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  font-weight: normal;\n  line-height: 1.25;\n  color: #607d8b;\n  text-align: center;\n  background-color: #cfd8dc;\n  border: 1px solid rgba(0, 0, 0, 0.15); }\n  .input-group-addon.form-control-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem; }\n  .input-group-addon.form-control-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group-addon:not(:last-child) {\n  border-right: 0; }\n\n.form-control + .input-group-addon:not(:first-child) {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n      z-index: 3; }\n  .input-group-btn:not(:last-child) > .btn,\n  .input-group-btn:not(:last-child) > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:not(:first-child) > .btn,\n  .input-group-btn:not(:first-child) > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n    .input-group-btn:not(:first-child) > .btn:focus, .input-group-btn:not(:first-child) > .btn:active, .input-group-btn:not(:first-child) > .btn:hover,\n    .input-group-btn:not(:first-child) > .btn-group:focus,\n    .input-group-btn:not(:first-child) > .btn-group:active,\n    .input-group-btn:not(:first-child) > .btn-group:hover {\n      z-index: 3; }\n\n.custom-control {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n  .custom-control-input:checked ~ .custom-control-indicator {\n    color: #fff;\n    background-color: #20a8d8; }\n  .custom-control-input:focus ~ .custom-control-indicator {\n    box-shadow: 0 0 0 1px #e4e5e6, 0 0 0 3px #20a8d8; }\n  .custom-control-input:active ~ .custom-control-indicator {\n    color: #fff;\n    background-color: #b6e4f4; }\n  .custom-control-input:disabled ~ .custom-control-indicator {\n    background-color: #cfd8dc; }\n  .custom-control-input:disabled ~ .custom-control-description {\n    color: #b0bec5; }\n\n.custom-control-indicator {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #ddd;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {\n  background-color: #20a8d8;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\"); }\n\n.custom-radio .custom-control-indicator {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.custom-controls-stacked {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .custom-controls-stacked .custom-control {\n    margin-bottom: 0.25rem; }\n    .custom-controls-stacked .custom-control + .custom-control {\n      margin-left: 0; }\n\n.custom-select {\n  display: inline-block;\n  max-width: 100%;\n  height: calc(2.09375rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.25;\n  color: #607d8b;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  .custom-select:focus {\n    border-color: #8ad4ee;\n    outline: none; }\n    .custom-select:focus::-ms-value {\n      color: #607d8b;\n      background-color: #fff; }\n  .custom-select:disabled {\n    color: #b0bec5;\n    background-color: #cfd8dc; }\n  .custom-select::-ms-expand {\n    opacity: 0; }\n\n.custom-select-sm {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  height: 2.5rem;\n  margin-bottom: 0; }\n\n.custom-file-input {\n  min-width: 14rem;\n  max-width: 100%;\n  height: 2.5rem;\n  margin: 0;\n  opacity: 0; }\n\n.custom-file-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #607d8b;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.15); }\n  .custom-file-control:lang(en):empty::after {\n    content: \"Choose file...\"; }\n  .custom-file-control::before {\n    position: absolute;\n    top: -1px;\n    right: -1px;\n    bottom: -1px;\n    z-index: 6;\n    display: block;\n    height: 2.5rem;\n    padding: 0.5rem 1rem;\n    line-height: 1.5;\n    color: #607d8b;\n    background-color: #cfd8dc;\n    border: 1px solid rgba(0, 0, 0, 0.15); }\n  .custom-file-control:lang(en)::before {\n    content: \"Browse\"; }\n\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link, .navbar .dropdown-toggle {\n  display: block;\n  padding: 0.5rem 1rem; }\n  .nav-link:focus, .navbar .dropdown-toggle:focus, .nav-link:hover, .navbar .dropdown-toggle:hover {\n    text-decoration: none; }\n  .nav-link.disabled, .navbar .disabled.dropdown-toggle {\n    color: #b0bec5; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs .nav-item {\n    margin-bottom: -1px; }\n  .nav-tabs .nav-link, .nav-tabs .navbar .dropdown-toggle, .navbar .nav-tabs .dropdown-toggle {\n    border: 1px solid transparent; }\n    .nav-tabs .nav-link:focus, .nav-tabs .navbar .dropdown-toggle:focus, .navbar .nav-tabs .dropdown-toggle:focus, .nav-tabs .nav-link:hover, .nav-tabs .navbar .dropdown-toggle:hover, .navbar .nav-tabs .dropdown-toggle:hover {\n      border-color: #cfd8dc #cfd8dc #ddd; }\n    .nav-tabs .nav-link.disabled, .nav-tabs .navbar .disabled.dropdown-toggle, .navbar .nav-tabs .disabled.dropdown-toggle {\n      color: #b0bec5;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active, .nav-tabs .navbar .active.dropdown-toggle, .navbar .nav-tabs .active.dropdown-toggle,\n  .nav-tabs .nav-item.show .nav-link,\n  .nav-tabs .nav-item.show .navbar .dropdown-toggle, .navbar\n  .nav-tabs .nav-item.show .dropdown-toggle {\n    color: #607d8b;\n    background-color: #e4e5e6;\n    border-color: #ddd #ddd #e4e5e6; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px; }\n\n.nav-pills .nav-link.active, .nav-pills .navbar .active.dropdown-toggle, .navbar .nav-pills .active.dropdown-toggle,\n.show .nav-pills .nav-link,\n.show .nav-pills .navbar .dropdown-toggle, .navbar\n.show .nav-pills .dropdown-toggle {\n  color: #fff;\n  background-color: #20a8d8; }\n\n.nav-fill .nav-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 1rem; }\n  .navbar > .container,\n  .navbar > .container-fluid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    @media (max-width: 575px) {\n      .navbar > .container,\n      .navbar > .container-fluid {\n        width: 100%;\n        margin-right: 0;\n        margin-left: 0; } }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.21875rem;\n  padding-bottom: 0.21875rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link, .navbar-nav .navbar .dropdown-toggle, .navbar .navbar-nav .dropdown-toggle {\n    padding-right: 0;\n    padding-left: 0; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: transparent;\n  border: 1px solid transparent; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575px) {\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .nav-link, .navbar-expand-sm .navbar-nav .navbar .dropdown-toggle, .navbar .navbar-expand-sm .navbar-nav .dropdown-toggle {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 767px) {\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .nav-link, .navbar-expand-md .navbar-nav .navbar .dropdown-toggle, .navbar .navbar-expand-md .navbar-nav .dropdown-toggle {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 991px) {\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .nav-link, .navbar-expand-lg .navbar-nav .navbar .dropdown-toggle, .navbar .navbar-expand-lg .navbar-nav .dropdown-toggle {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 1199px) {\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .nav-link, .navbar-expand-xl .navbar-nav .navbar .dropdown-toggle, .navbar .navbar-expand-xl .navbar-nav .dropdown-toggle {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; } }\n\n.navbar-expand {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .navbar-expand .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-expand .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n    .navbar-expand .navbar-nav .nav-link, .navbar-expand .navbar-nav .navbar .dropdown-toggle, .navbar .navbar-expand .navbar-nav .dropdown-toggle {\n      padding-right: .5rem;\n      padding-left: .5rem; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap; }\n  .navbar-expand .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .navbar-expand .navbar-toggler {\n    display: none; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-nav .navbar .dropdown-toggle, .navbar .navbar-light .navbar-nav .dropdown-toggle {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .navbar .dropdown-toggle:focus, .navbar .navbar-light .navbar-nav .dropdown-toggle:focus, .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .navbar .dropdown-toggle:hover, .navbar .navbar-light .navbar-nav .dropdown-toggle:hover {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled, .navbar-light .navbar-nav .navbar .disabled.dropdown-toggle, .navbar .navbar-light .navbar-nav .disabled.dropdown-toggle {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .navbar .show > .dropdown-toggle, .navbar .navbar-light .navbar-nav .show > .dropdown-toggle,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .navbar .active > .dropdown-toggle, .navbar\n.navbar-light .navbar-nav .active > .dropdown-toggle,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .navbar .show.dropdown-toggle, .navbar\n.navbar-light .navbar-nav .show.dropdown-toggle,\n.navbar-light .navbar-nav .nav-link.active,\n.navbar-light .navbar-nav .navbar .active.dropdown-toggle, .navbar\n.navbar-light .navbar-nav .active.dropdown-toggle {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n\n.navbar-inverse .navbar-brand {\n  color: white; }\n  .navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand:hover {\n    color: white; }\n\n.navbar-inverse .navbar-nav .nav-link, .navbar-inverse .navbar-nav .navbar .dropdown-toggle, .navbar .navbar-inverse .navbar-nav .dropdown-toggle {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-inverse .navbar-nav .nav-link:focus, .navbar-inverse .navbar-nav .navbar .dropdown-toggle:focus, .navbar .navbar-inverse .navbar-nav .dropdown-toggle:focus, .navbar-inverse .navbar-nav .nav-link:hover, .navbar-inverse .navbar-nav .navbar .dropdown-toggle:hover, .navbar .navbar-inverse .navbar-nav .dropdown-toggle:hover {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-inverse .navbar-nav .nav-link.disabled, .navbar-inverse .navbar-nav .navbar .disabled.dropdown-toggle, .navbar .navbar-inverse .navbar-nav .disabled.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-inverse .navbar-nav .show > .nav-link, .navbar-inverse .navbar-nav .navbar .show > .dropdown-toggle, .navbar .navbar-inverse .navbar-nav .show > .dropdown-toggle,\n.navbar-inverse .navbar-nav .active > .nav-link,\n.navbar-inverse .navbar-nav .navbar .active > .dropdown-toggle, .navbar\n.navbar-inverse .navbar-nav .active > .dropdown-toggle,\n.navbar-inverse .navbar-nav .nav-link.show,\n.navbar-inverse .navbar-nav .navbar .show.dropdown-toggle, .navbar\n.navbar-inverse .navbar-nav .show.dropdown-toggle,\n.navbar-inverse .navbar-nav .nav-link.active,\n.navbar-inverse .navbar-nav .navbar .active.dropdown-toggle, .navbar\n.navbar-inverse .navbar-nav .active.dropdown-toggle {\n  color: white; }\n\n.navbar-inverse .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-inverse .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-inverse .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #fff;\n  border: 1px solid #cfd8dc; }\n\n.card-block {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem;\n  word-break: break-all; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #eceff1;\n  border-bottom: 1px solid #cfd8dc; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: #eceff1;\n  border-top: 1px solid #cfd8dc; }\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n\n.card-primary {\n  background-color: #20a8d8;\n  border-color: #20a8d8; }\n  .card-primary .card-header,\n  .card-primary .card-footer {\n    background-color: transparent; }\n\n.card-success {\n  background-color: #4dbd74;\n  border-color: #4dbd74; }\n  .card-success .card-header,\n  .card-success .card-footer {\n    background-color: transparent; }\n\n.card-info {\n  background-color: #63c2de;\n  border-color: #63c2de; }\n  .card-info .card-header,\n  .card-info .card-footer {\n    background-color: transparent; }\n\n.card-warning {\n  background-color: #f8cb00;\n  border-color: #f8cb00; }\n  .card-warning .card-header,\n  .card-warning .card-footer {\n    background-color: transparent; }\n\n.card-danger {\n  background-color: #f86c6b;\n  border-color: #f86c6b; }\n  .card-danger .card-header,\n  .card-danger .card-footer {\n    background-color: transparent; }\n\n.card-outline-primary {\n  background-color: transparent;\n  border-color: #20a8d8; }\n  .card-outline-primary .card-header,\n  .card-outline-primary .card-footer {\n    background-color: transparent;\n    border-color: #20a8d8; }\n\n.card-outline-secondary {\n  background-color: transparent;\n  border-color: #ccc; }\n  .card-outline-secondary .card-header,\n  .card-outline-secondary .card-footer {\n    background-color: transparent;\n    border-color: #ccc; }\n\n.card-outline-info {\n  background-color: transparent;\n  border-color: #63c2de; }\n  .card-outline-info .card-header,\n  .card-outline-info .card-footer {\n    background-color: transparent;\n    border-color: #63c2de; }\n\n.card-outline-success {\n  background-color: transparent;\n  border-color: #4dbd74; }\n  .card-outline-success .card-header,\n  .card-outline-success .card-footer {\n    background-color: transparent;\n    border-color: #4dbd74; }\n\n.card-outline-warning {\n  background-color: transparent;\n  border-color: #f8cb00; }\n  .card-outline-warning .card-header,\n  .card-outline-warning .card-footer {\n    background-color: transparent;\n    border-color: #f8cb00; }\n\n.card-outline-danger {\n  background-color: transparent;\n  border-color: #f86c6b; }\n  .card-outline-danger .card-header,\n  .card-outline-danger .card-footer {\n    background-color: transparent;\n    border-color: #f86c6b; }\n\n.card-inverse {\n  color: rgba(255, 255, 255, 0.65); }\n  .card-inverse .card-header,\n  .card-inverse .card-footer {\n    background-color: transparent;\n    border-color: rgba(255, 255, 255, 0.2); }\n  .card-inverse .card-header,\n  .card-inverse .card-footer,\n  .card-inverse .card-title,\n  .card-inverse .card-blockquote {\n    color: #fff; }\n  .card-inverse .card-link,\n  .card-inverse .card-text,\n  .card-inverse .card-subtitle,\n  .card-inverse .card-blockquote .blockquote-footer {\n    color: rgba(255, 255, 255, 0.65); }\n  .card-inverse .card-link:focus, .card-inverse .card-link:hover {\n    color: #fff; }\n\n.card-blockquote {\n  padding: 0;\n  margin-bottom: 0;\n  border-left: 0; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img {\n  width: 100%; }\n\n.card-img-top {\n  width: 100%; }\n\n.card-img-bottom {\n  width: 100%; }\n\n@media (min-width: 576px) {\n  .card-deck {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px; }\n    .card-deck .card {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 0px;\n              flex: 1 0 0;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-right: 15px;\n      margin-left: 15px; } }\n\n@media (min-width: 576px) {\n  .card-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap; }\n    .card-group .card {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 0px;\n              flex: 1 0 0; }\n      .card-group .card + .card {\n        margin-left: 0;\n        border-left: 0; } }\n\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n       -moz-column-gap: 1.25rem;\n            column-gap: 1.25rem; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.breadcrumb {\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #fff; }\n  .breadcrumb::after {\n    display: block;\n    clear: both;\n    content: \"\"; }\n\n.breadcrumb-item {\n  float: left; }\n  .breadcrumb-item + .breadcrumb-item::before {\n    display: inline-block;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    color: #b0bec5;\n    content: \"/\"; }\n  .breadcrumb-item + .breadcrumb-item:hover::before {\n    text-decoration: underline; }\n  .breadcrumb-item + .breadcrumb-item:hover::before {\n    text-decoration: none; }\n  .breadcrumb-item.active {\n    color: #b0bec5; }\n\n.pagination {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none; }\n\n.page-item:first-child .page-link, .pagination-datatables li:first-child .page-link, .pagination li:first-child .page-link, .page-item:first-child .pagination-datatables li a, .pagination-datatables li .page-item:first-child a, .pagination-datatables li:first-child a, .page-item:first-child .pagination li a, .pagination li .page-item:first-child a, .pagination li:first-child a {\n  margin-left: 0; }\n\n.page-item.active .page-link, .pagination-datatables li.active .page-link, .pagination li.active .page-link, .page-item.active .pagination-datatables li a, .pagination-datatables li .page-item.active a, .pagination-datatables li.active a, .page-item.active .pagination li a, .pagination li .page-item.active a, .pagination li.active a {\n  z-index: 2;\n  color: #fff;\n  background-color: #20a8d8;\n  border-color: #20a8d8; }\n\n.page-item.disabled .page-link, .pagination-datatables li.disabled .page-link, .pagination li.disabled .page-link, .page-item.disabled .pagination-datatables li a, .pagination-datatables li .page-item.disabled a, .pagination-datatables li.disabled a, .page-item.disabled .pagination li a, .pagination li .page-item.disabled a, .pagination li.disabled a {\n  color: #b0bec5;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #ddd; }\n\n.page-link, .pagination-datatables li a, .pagination li a {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #20a8d8;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .page-link:focus, .pagination-datatables li a:focus, .pagination li a:focus, .page-link:hover, .pagination-datatables li a:hover, .pagination li a:hover {\n    color: #167495;\n    text-decoration: none;\n    background-color: #cfd8dc;\n    border-color: #ddd; }\n\n.pagination-lg .page-link, .pagination-lg .pagination-datatables li a, .pagination-datatables li .pagination-lg a, .pagination-lg .pagination li a, .pagination li .pagination-lg a {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem; }\n\n.pagination-sm .page-link, .pagination-sm .pagination-datatables li a, .pagination-datatables li .pagination-sm a, .pagination-sm .pagination li a, .pagination li .pagination-sm a {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline; }\n  .badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\na.badge:focus, a.badge:hover {\n  color: #fff;\n  text-decoration: none; }\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em; }\n\n.badge-default {\n  background-color: #b0bec5; }\n  .badge-default[href]:focus, .badge-default[href]:hover {\n    background-color: #93a6af; }\n\n.badge-primary {\n  background-color: #20a8d8; }\n  .badge-primary[href]:focus, .badge-primary[href]:hover {\n    background-color: #1985ac; }\n\n.badge-success {\n  background-color: #4dbd74; }\n  .badge-success[href]:focus, .badge-success[href]:hover {\n    background-color: #3a9d5d; }\n\n.badge-info {\n  background-color: #63c2de; }\n  .badge-info[href]:focus, .badge-info[href]:hover {\n    background-color: #39b2d5; }\n\n.badge-warning {\n  background-color: #f8cb00; }\n  .badge-warning[href]:focus, .badge-warning[href]:hover {\n    background-color: #c5a100; }\n\n.badge-danger {\n  background-color: #f86c6b; }\n  .badge-danger[href]:focus, .badge-danger[href]:hover {\n    background-color: #f63c3a; }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #cfd8dc; }\n  @media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0; }\n\n.alert {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: bold; }\n\n.alert-dismissible .close {\n  position: relative;\n  top: -0.75rem;\n  right: -1.25rem;\n  padding: 0.75rem 1.25rem;\n  color: inherit; }\n\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d0e9c6; }\n  .alert-success hr {\n    border-top-color: #c1e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bcdff1; }\n  .alert-info hr {\n    border-top-color: #a6d5ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faf2cc; }\n  .alert-warning hr {\n    border-top-color: #f7ecb5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebcccc; }\n  .alert-danger hr {\n    border-top-color: #e4b9b9; }\n  .alert-danger .alert-link {\n    color: #843534; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-align: center;\n  background-color: #eceff1; }\n\n.progress-bar {\n  height: 1rem;\n  line-height: 1rem;\n  color: #fff;\n  background-color: #20a8d8;\n  transition: width 0.6s ease; }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n          animation: progress-bar-stripes 1s linear infinite; }\n\n.media {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.media-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.list-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #607d8b;\n  text-align: inherit; }\n  .list-group-item-action:focus, .list-group-item-action:hover {\n    color: #607d8b;\n    text-decoration: none;\n    background-color: #eceff1; }\n  .list-group-item-action:active {\n    color: #263238;\n    background-color: #cfd8dc; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item:last-child {\n    margin-bottom: 0; }\n  .list-group-item:focus, .list-group-item:hover {\n    text-decoration: none; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #b0bec5;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #20a8d8;\n    border-color: #20a8d8; }\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active,\n  button.list-group-item-success.active {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active,\n  button.list-group-item-info.active {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active,\n  button.list-group-item-warning.active {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active,\n  button.list-group-item-danger.active {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive::before {\n    display: block;\n    content: \"\"; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714286%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.close {\n  float: right;\n  font-size: 1.3125rem;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    opacity: .75; }\n\nbutton.close {\n  padding: 0;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    transition: -webkit-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out;\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n    -webkit-transform: translate(0, -25%);\n            transform: translate(0, -25%); }\n  .modal.show .modal-dialog {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.show {\n    opacity: 0.5; }\n\n.modal-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 15px;\n  border-bottom: 1px solid #cfd8dc; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 15px; }\n\n.modal-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 15px;\n  border-top: 1px solid #cfd8dc; }\n  .modal-footer > :not(:first-child) {\n    margin-left: .25rem; }\n  .modal-footer > :not(:last-child) {\n    margin-right: .25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 30px auto; }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show {\n    opacity: 0.9; }\n  .tooltip.tooltip-top, .tooltip.bs-tether-element-attached-bottom {\n    padding: 5px 0;\n    margin-top: -3px; }\n    .tooltip.tooltip-top .tooltip-inner::before, .tooltip.bs-tether-element-attached-bottom .tooltip-inner::before {\n      bottom: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: \"\";\n      border-width: 5px 5px 0;\n      border-top-color: #000; }\n  .tooltip.tooltip-right, .tooltip.bs-tether-element-attached-left {\n    padding: 0 5px;\n    margin-left: 3px; }\n    .tooltip.tooltip-right .tooltip-inner::before, .tooltip.bs-tether-element-attached-left .tooltip-inner::before {\n      top: 50%;\n      left: 0;\n      margin-top: -5px;\n      content: \"\";\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000; }\n  .tooltip.tooltip-bottom, .tooltip.bs-tether-element-attached-top {\n    padding: 5px 0;\n    margin-top: 3px; }\n    .tooltip.tooltip-bottom .tooltip-inner::before, .tooltip.bs-tether-element-attached-top .tooltip-inner::before {\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: \"\";\n      border-width: 0 5px 5px;\n      border-bottom-color: #000; }\n  .tooltip.tooltip-left, .tooltip.bs-tether-element-attached-right {\n    padding: 0 5px;\n    margin-left: -3px; }\n    .tooltip.tooltip-left .tooltip-inner::before, .tooltip.bs-tether-element-attached-right .tooltip-inner::before {\n      top: 50%;\n      right: 0;\n      margin-top: -5px;\n      content: \"\";\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000; }\n  .tooltip-inner::before {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  padding: 1px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2); }\n  .popover.popover-top, .popover.bs-tether-element-attached-bottom {\n    margin-top: -10px; }\n    .popover.popover-top::before, .popover.popover-top::after, .popover.bs-tether-element-attached-bottom::before, .popover.bs-tether-element-attached-bottom::after {\n      left: 50%;\n      border-bottom-width: 0; }\n    .popover.popover-top::before, .popover.bs-tether-element-attached-bottom::before {\n      bottom: -11px;\n      margin-left: -11px;\n      border-top-color: rgba(0, 0, 0, 0.25); }\n    .popover.popover-top::after, .popover.bs-tether-element-attached-bottom::after {\n      bottom: -10px;\n      margin-left: -10px;\n      border-top-color: #fff; }\n  .popover.popover-right, .popover.bs-tether-element-attached-left {\n    margin-left: 10px; }\n    .popover.popover-right::before, .popover.popover-right::after, .popover.bs-tether-element-attached-left::before, .popover.bs-tether-element-attached-left::after {\n      top: 50%;\n      border-left-width: 0; }\n    .popover.popover-right::before, .popover.bs-tether-element-attached-left::before {\n      left: -11px;\n      margin-top: -11px;\n      border-right-color: rgba(0, 0, 0, 0.25); }\n    .popover.popover-right::after, .popover.bs-tether-element-attached-left::after {\n      left: -10px;\n      margin-top: -10px;\n      border-right-color: #fff; }\n  .popover.popover-bottom, .popover.bs-tether-element-attached-top {\n    margin-top: 10px; }\n    .popover.popover-bottom::before, .popover.popover-bottom::after, .popover.bs-tether-element-attached-top::before, .popover.bs-tether-element-attached-top::after {\n      left: 50%;\n      border-top-width: 0; }\n    .popover.popover-bottom::before, .popover.bs-tether-element-attached-top::before {\n      top: -11px;\n      margin-left: -11px;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n    .popover.popover-bottom::after, .popover.bs-tether-element-attached-top::after {\n      top: -10px;\n      margin-left: -10px;\n      border-bottom-color: #fff; }\n    .popover.popover-bottom .popover-title::before, .popover.bs-tether-element-attached-top .popover-title::before {\n      position: absolute;\n      top: 0;\n      left: 50%;\n      display: block;\n      width: 20px;\n      margin-left: -10px;\n      content: \"\";\n      border-bottom: 1px solid #f7f7f7; }\n  .popover.popover-left, .popover.bs-tether-element-attached-right {\n    margin-left: -10px; }\n    .popover.popover-left::before, .popover.popover-left::after, .popover.bs-tether-element-attached-right::before, .popover.bs-tether-element-attached-right::after {\n      top: 50%;\n      border-right-width: 0; }\n    .popover.popover-left::before, .popover.bs-tether-element-attached-right::before {\n      right: -11px;\n      margin-top: -11px;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n    .popover.popover-left::after, .popover.bs-tether-element-attached-right::after {\n      right: -10px;\n      margin-top: -10px;\n      border-left-color: #fff; }\n\n.popover-title {\n  padding: 8px 14px;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb; }\n  .popover-title:empty {\n    display: none; }\n\n.popover-content {\n  padding: 9px 14px;\n  color: #263238; }\n\n.popover::before,\n.popover::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover::before {\n  content: \"\";\n  border-width: 11px; }\n\n.popover::after {\n  content: \"\";\n  border-width: 10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0; }\n\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.carousel-item-next,\n.active.carousel-item-right {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0); }\n\n.carousel-item-prev,\n.active.carousel-item-left {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0); }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5; }\n  .carousel-control-prev:focus, .carousel-control-prev:hover,\n  .carousel-control-next:focus,\n  .carousel-control-next:hover {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators li {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    max-width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    background-color: rgba(255, 255, 255, 0.5); }\n    .carousel-indicators li::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n    .carousel-indicators li::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n  .carousel-indicators .active {\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-faded {\n  background-color: #dcdddf; }\n\n.bg-primary {\n  background-color: #20a8d8 !important; }\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #1985ac !important; }\n\n.bg-success {\n  background-color: #4dbd74 !important; }\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #3a9d5d !important; }\n\n.bg-info {\n  background-color: #63c2de !important; }\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #39b2d5 !important; }\n\n.bg-warning {\n  background-color: #f8cb00 !important; }\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #c5a100 !important; }\n\n.bg-danger {\n  background-color: #f86c6b !important; }\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #f63c3a !important; }\n\n.bg-inverse {\n  background-color: #263238 !important; }\n\na.bg-inverse:focus, a.bg-inverse:hover {\n  background-color: #11171a !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.rounded-circle {\n  border-radius: 50%; }\n\n.rounded-0 {\n  border-radius: 0; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n.d-print-block {\n  display: none !important; }\n  @media print {\n    .d-print-block {\n      display: block !important; } }\n\n.d-print-inline {\n  display: none !important; }\n  @media print {\n    .d-print-inline {\n      display: inline !important; } }\n\n.d-print-inline-block {\n  display: none !important; }\n  @media print {\n    .d-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; } }\n\n.order-first {\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1; }\n\n.order-last {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.order-0 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0; }\n\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important; }\n\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n      flex-wrap: wrap-reverse !important; }\n\n.justify-content-start {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n\n.justify-content-end {\n  -webkit-box-pack: end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important; }\n\n.justify-content-center {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n      justify-content: space-around !important; }\n\n.align-items-start {\n  -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n\n.align-items-end {\n  -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important; }\n\n.align-items-center {\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important; }\n\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important; }\n\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n      align-content: flex-start !important; }\n\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n      align-content: flex-end !important; }\n\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n      align-content: center !important; }\n\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n      align-content: space-between !important; }\n\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n      align-content: space-around !important; }\n\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n      align-content: stretch !important; }\n\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n      -ms-grid-row-align: auto !important;\n      align-self: auto !important; }\n\n.align-self-start {\n  -ms-flex-item-align: start !important;\n      align-self: flex-start !important; }\n\n.align-self-end {\n  -ms-flex-item-align: end !important;\n      align-self: flex-end !important; }\n\n.align-self-center {\n  -ms-flex-item-align: center !important;\n      -ms-grid-row-align: center !important;\n      align-self: center !important; }\n\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n      align-self: baseline !important; }\n\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n      -ms-grid-row-align: stretch !important;\n      align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-last {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-last {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-last {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-last {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n.sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1020; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  -webkit-clip-path: none;\n          clip-path: none; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0 {\n  margin-top: 0 !important; }\n\n.mr-0 {\n  margin-right: 0 !important; }\n\n.mb-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0 {\n  margin-left: 0 !important; }\n\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important; }\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1 {\n  margin-left: 0.25rem !important; }\n\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important; }\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2 {\n  margin-left: 0.5rem !important; }\n\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important; }\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3 {\n  margin-top: 1rem !important; }\n\n.mr-3 {\n  margin-right: 1rem !important; }\n\n.mb-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3 {\n  margin-left: 1rem !important; }\n\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important; }\n\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4 {\n  margin-left: 1.5rem !important; }\n\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important; }\n\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5 {\n  margin-top: 3rem !important; }\n\n.mr-5 {\n  margin-right: 3rem !important; }\n\n.mb-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5 {\n  margin-left: 3rem !important; }\n\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important; }\n\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0 {\n  padding-top: 0 !important; }\n\n.pr-0 {\n  padding-right: 0 !important; }\n\n.pb-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0 {\n  padding-left: 0 !important; }\n\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important; }\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1 {\n  padding-left: 0.25rem !important; }\n\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important; }\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2 {\n  padding-left: 0.5rem !important; }\n\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important; }\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3 {\n  padding-top: 1rem !important; }\n\n.pr-3 {\n  padding-right: 1rem !important; }\n\n.pb-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3 {\n  padding-left: 1rem !important; }\n\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important; }\n\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4 {\n  padding-left: 1.5rem !important; }\n\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important; }\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5 {\n  padding-top: 3rem !important; }\n\n.pr-5 {\n  padding-right: 3rem !important; }\n\n.pb-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5 {\n  padding-left: 3rem !important; }\n\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important; }\n\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto {\n  margin-top: auto !important; }\n\n.mr-auto {\n  margin-right: auto !important; }\n\n.mb-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto {\n  margin-left: auto !important; }\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important; }\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0 {\n    margin-left: 0 !important; }\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1 {\n    margin-left: 0.25rem !important; }\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2 {\n    margin-left: 0.5rem !important; }\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3 {\n    margin-left: 1rem !important; }\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4 {\n    margin-left: 1.5rem !important; }\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5 {\n    margin-left: 3rem !important; }\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0 {\n    padding-left: 0 !important; }\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1 {\n    padding-left: 0.25rem !important; }\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2 {\n    padding-left: 0.5rem !important; }\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3 {\n    padding-left: 1rem !important; }\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4 {\n    padding-left: 1.5rem !important; }\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5 {\n    padding-left: 3rem !important; }\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto {\n    margin-left: auto !important; }\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0 {\n    margin-left: 0 !important; }\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1 {\n    margin-left: 0.25rem !important; }\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2 {\n    margin-left: 0.5rem !important; }\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3 {\n    margin-left: 1rem !important; }\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4 {\n    margin-left: 1.5rem !important; }\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5 {\n    margin-left: 3rem !important; }\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0 {\n    padding-left: 0 !important; }\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1 {\n    padding-left: 0.25rem !important; }\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2 {\n    padding-left: 0.5rem !important; }\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3 {\n    padding-left: 1rem !important; }\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4 {\n    padding-left: 1.5rem !important; }\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5 {\n    padding-left: 3rem !important; }\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto {\n    margin-left: auto !important; }\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0 {\n    margin-left: 0 !important; }\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1 {\n    margin-left: 0.25rem !important; }\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2 {\n    margin-left: 0.5rem !important; }\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3 {\n    margin-left: 1rem !important; }\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4 {\n    margin-left: 1.5rem !important; }\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5 {\n    margin-left: 3rem !important; }\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0 {\n    padding-left: 0 !important; }\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1 {\n    padding-left: 0.25rem !important; }\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2 {\n    padding-left: 0.5rem !important; }\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3 {\n    padding-left: 1rem !important; }\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4 {\n    padding-left: 1.5rem !important; }\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5 {\n    padding-left: 3rem !important; }\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto {\n    margin-left: auto !important; }\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0 {\n    margin-left: 0 !important; }\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1 {\n    margin-left: 0.25rem !important; }\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2 {\n    margin-left: 0.5rem !important; }\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3 {\n    margin-left: 1rem !important; }\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4 {\n    margin-left: 1.5rem !important; }\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5 {\n    margin-left: 3rem !important; }\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0 {\n    padding-left: 0 !important; }\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1 {\n    padding-left: 0.25rem !important; }\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2 {\n    padding-left: 0.5rem !important; }\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3 {\n    padding-left: 1rem !important; }\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4 {\n    padding-left: 1.5rem !important; }\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5 {\n    padding-left: 3rem !important; }\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto {\n    margin-left: auto !important; }\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; } }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-muted {\n  color: #b0bec5 !important; }\n\na.text-muted:focus, a.text-muted:hover {\n  color: #93a6af !important; }\n\n.text-primary {\n  color: #20a8d8 !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #1985ac !important; }\n\n.text-success {\n  color: #4dbd74 !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #3a9d5d !important; }\n\n.text-info {\n  color: #63c2de !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #39b2d5 !important; }\n\n.text-warning {\n  color: #f8cb00 !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #c5a100 !important; }\n\n.text-danger {\n  color: #f86c6b !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #f63c3a !important; }\n\n.text-gray-dark {\n  color: #263238 !important; }\n\na.text-gray-dark:focus, a.text-gray-dark:hover {\n  color: #11171a !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n.chart-legend,\n.bar-legend,\n.line-legend,\n.pie-legend,\n.radar-legend,\n.polararea-legend,\n.doughnut-legend {\n  list-style-type: none;\n  margin-top: 5px;\n  text-align: center;\n  -webkit-padding-start: 0;\n  -moz-padding-start: 0;\n  padding-left: 0; }\n\n.chart-legend li,\n.bar-legend li,\n.line-legend li,\n.pie-legend li,\n.radar-legend li,\n.polararea-legend li,\n.doughnut-legend li {\n  display: inline-block;\n  white-space: nowrap;\n  position: relative;\n  margin-bottom: 4px;\n  padding: 2px 8px 2px 28px;\n  font-size: smaller;\n  cursor: default; }\n\n.chart-legend li span,\n.bar-legend li span,\n.line-legend li span,\n.pie-legend li span,\n.radar-legend li span,\n.polararea-legend li span,\n.doughnut-legend li span {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px; }\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased; }\n\n.font-xs {\n  font-size: .75rem !important; }\n\n.font-sm {\n  font-size: .85rem !important; }\n\n.font-lg {\n  font-size: 1rem !important; }\n\n.font-xl {\n  font-size: 1.25rem !important; }\n\n.font-2xl {\n  font-size: 1.5rem !important; }\n\n.font-3xl {\n  font-size: 1.75rem !important; }\n\n.font-4xl {\n  font-size: 2rem !important; }\n\n.font-5xl {\n  font-size: 2.5rem !important; }\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn; }\n\n.aside-menu {\n  z-index: 1019;\n  width: 250px;\n  color: #263238;\n  background: #fff;\n  border-left: 1px solid #cfd8dc; }\n  .aside-menu .nav-tabs {\n    border-color: #cfd8dc; }\n    .aside-menu .nav-tabs .nav-link, .aside-menu .nav-tabs .navbar .dropdown-toggle, .navbar .aside-menu .nav-tabs .dropdown-toggle {\n      padding: 0.75rem 1rem;\n      color: #263238;\n      border-top: 0; }\n      .aside-menu .nav-tabs .nav-link.active, .aside-menu .nav-tabs .navbar .active.dropdown-toggle, .navbar .aside-menu .nav-tabs .active.dropdown-toggle {\n        color: #20a8d8;\n        border-right-color: #cfd8dc;\n        border-left-color: #cfd8dc; }\n    .aside-menu .nav-tabs .nav-item:first-child .nav-link, .aside-menu .nav-tabs .nav-item:first-child .navbar .dropdown-toggle, .navbar .aside-menu .nav-tabs .nav-item:first-child .dropdown-toggle {\n      border-left: 0; }\n  .aside-menu .tab-content {\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: auto;\n    border: 0;\n    border-top: 1px solid #cfd8dc;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .aside-menu .tab-content::-webkit-scrollbar {\n      width: 10px;\n      margin-left: -10px;\n      -webkit-appearance: none; }\n    .aside-menu .tab-content::-webkit-scrollbar-track {\n      background-color: white;\n      border-right: 1px solid #f2f2f2;\n      border-left: 1px solid #f2f2f2; }\n    .aside-menu .tab-content::-webkit-scrollbar-thumb {\n      height: 50px;\n      background-color: #e6e5e5;\n      background-clip: content-box;\n      border-color: transparent;\n      border-style: solid;\n      border-width: 1px 2px; }\n    .aside-menu .tab-content .tab-pane {\n      padding: 0; }\n\n.img-avatar {\n  border-radius: 50em; }\n\n.avatar {\n  position: relative;\n  display: inline-block;\n  width: 36px; }\n  .avatar .img-avatar {\n    width: 36px;\n    height: 36px; }\n  .avatar .avatar-status {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: block;\n    width: 10px;\n    height: 10px;\n    border: 1px solid #fff;\n    border-radius: 50em; }\n\n.avatar.avatar-xs {\n  position: relative;\n  display: inline-block;\n  width: 20px; }\n  .avatar.avatar-xs .img-avatar {\n    width: 20px;\n    height: 20px; }\n  .avatar.avatar-xs .avatar-status {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: block;\n    width: 8px;\n    height: 8px;\n    border: 1px solid #fff;\n    border-radius: 50em; }\n\n.avatar.avatar-sm {\n  position: relative;\n  display: inline-block;\n  width: 24px; }\n  .avatar.avatar-sm .img-avatar {\n    width: 24px;\n    height: 24px; }\n  .avatar.avatar-sm .avatar-status {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: block;\n    width: 8px;\n    height: 8px;\n    border: 1px solid #fff;\n    border-radius: 50em; }\n\n.avatar.avatar-lg {\n  position: relative;\n  display: inline-block;\n  width: 72px; }\n  .avatar.avatar-lg .img-avatar {\n    width: 72px;\n    height: 72px; }\n  .avatar.avatar-lg .avatar-status {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: block;\n    width: 12px;\n    height: 12px;\n    border: 1px solid #fff;\n    border-radius: 50em; }\n\n.avatars-stack .avatar.avatar-xs {\n  margin-right: -10px; }\n\n.avatars-stack .avatar {\n  margin-right: -15px;\n  transition: margin-left 0.25s, margin-right 0.25s; }\n  .avatars-stack .avatar:hover {\n    margin-right: 0 !important; }\n\n.badge-pill {\n  border-radius: 10rem; }\n\n.breadcrumb-menu {\n  position: absolute;\n  top: 0;\n  right: 1rem; }\n  .breadcrumb-menu::before {\n    display: none; }\n  .breadcrumb-menu .btn {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem; }\n  .breadcrumb-menu .btn.btn-secondary {\n    color: #b0bec5;\n    border: 0; }\n    .breadcrumb-menu .btn.btn-secondary:hover, .breadcrumb-menu .btn.btn-secondary.active {\n      color: #263238;\n      background: transparent; }\n  .breadcrumb-menu .open .btn.btn-secondary {\n    color: #263238;\n    background: transparent; }\n  .breadcrumb-menu .dropdown-menu {\n    min-width: 180px;\n    line-height: 1.5; }\n\n.breadcrumb {\n  position: relative;\n  margin-bottom: 1.5rem;\n  border-bottom: 1px solid #cfd8dc; }\n\n.btn .badge {\n  position: absolute;\n  top: 2px;\n  right: 6px;\n  font-size: 9px; }\n\n.btn-transparent {\n  color: #fff;\n  background-color: transparent;\n  border-color: transparent; }\n  .btn-transparent:hover {\n    color: #fff;\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-transparent:focus, .btn-transparent.focus {\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5); }\n  .btn-transparent.disabled, .btn-transparent:disabled {\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-transparent:active, .btn-transparent.active,\n  .show > .btn-transparent.dropdown-toggle {\n    color: #fff;\n    background-color: transparent;\n    background-image: none;\n    border-color: transparent; }\n\n.btn [class^=\"icon-\"], .btn [class*=\" icon-\"] {\n  display: inline-block;\n  margin-top: -2px;\n  vertical-align: middle; }\n\n.btn-facebook,\n.btn-twitter,\n.btn-linkedin,\n.btn-flickr,\n.btn-tumblr,\n.btn-xing,\n.btn-github,\n.btn-html5,\n.btn-openid,\n.btn-stack-overflow,\n.btn-youtube,\n.btn-css3,\n.btn-dribbble,\n.btn-google-plus,\n.btn-instagram,\n.btn-pinterest,\n.btn-vk,\n.btn-yahoo,\n.btn-behance,\n.btn-dropbox,\n.btn-reddit,\n.btn-spotify,\n.btn-vine,\n.btn-foursquare,\n.btn-vimeo {\n  position: relative;\n  overflow: hidden;\n  color: #fff !important;\n  text-align: center;\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border: 0; }\n  .btn-facebook::before,\n  .btn-twitter::before,\n  .btn-linkedin::before,\n  .btn-flickr::before,\n  .btn-tumblr::before,\n  .btn-xing::before,\n  .btn-github::before,\n  .btn-html5::before,\n  .btn-openid::before,\n  .btn-stack-overflow::before,\n  .btn-youtube::before,\n  .btn-css3::before,\n  .btn-dribbble::before,\n  .btn-google-plus::before,\n  .btn-instagram::before,\n  .btn-pinterest::before,\n  .btn-vk::before,\n  .btn-yahoo::before,\n  .btn-behance::before,\n  .btn-dropbox::before,\n  .btn-reddit::before,\n  .btn-spotify::before,\n  .btn-vine::before,\n  .btn-foursquare::before,\n  .btn-vimeo::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    font-family: \"FontAwesome\";\n    font-style: normal;\n    font-weight: normal;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased; }\n  .btn-facebook:hover,\n  .btn-twitter:hover,\n  .btn-linkedin:hover,\n  .btn-flickr:hover,\n  .btn-tumblr:hover,\n  .btn-xing:hover,\n  .btn-github:hover,\n  .btn-html5:hover,\n  .btn-openid:hover,\n  .btn-stack-overflow:hover,\n  .btn-youtube:hover,\n  .btn-css3:hover,\n  .btn-dribbble:hover,\n  .btn-google-plus:hover,\n  .btn-instagram:hover,\n  .btn-pinterest:hover,\n  .btn-vk:hover,\n  .btn-yahoo:hover,\n  .btn-behance:hover,\n  .btn-dropbox:hover,\n  .btn-reddit:hover,\n  .btn-spotify:hover,\n  .btn-vine:hover,\n  .btn-foursquare:hover,\n  .btn-vimeo:hover {\n    color: #fff; }\n  .btn-facebook.icon span,\n  .btn-twitter.icon span,\n  .btn-linkedin.icon span,\n  .btn-flickr.icon span,\n  .btn-tumblr.icon span,\n  .btn-xing.icon span,\n  .btn-github.icon span,\n  .btn-html5.icon span,\n  .btn-openid.icon span,\n  .btn-stack-overflow.icon span,\n  .btn-youtube.icon span,\n  .btn-css3.icon span,\n  .btn-dribbble.icon span,\n  .btn-google-plus.icon span,\n  .btn-instagram.icon span,\n  .btn-pinterest.icon span,\n  .btn-vk.icon span,\n  .btn-yahoo.icon span,\n  .btn-behance.icon span,\n  .btn-dropbox.icon span,\n  .btn-reddit.icon span,\n  .btn-spotify.icon span,\n  .btn-vine.icon span,\n  .btn-foursquare.icon span,\n  .btn-vimeo.icon span {\n    display: none; }\n  .btn-facebook.text::before,\n  .btn-twitter.text::before,\n  .btn-linkedin.text::before,\n  .btn-flickr.text::before,\n  .btn-tumblr.text::before,\n  .btn-xing.text::before,\n  .btn-github.text::before,\n  .btn-html5.text::before,\n  .btn-openid.text::before,\n  .btn-stack-overflow.text::before,\n  .btn-youtube.text::before,\n  .btn-css3.text::before,\n  .btn-dribbble.text::before,\n  .btn-google-plus.text::before,\n  .btn-instagram.text::before,\n  .btn-pinterest.text::before,\n  .btn-vk.text::before,\n  .btn-yahoo.text::before,\n  .btn-behance.text::before,\n  .btn-dropbox.text::before,\n  .btn-reddit.text::before,\n  .btn-spotify.text::before,\n  .btn-vine.text::before,\n  .btn-foursquare.text::before,\n  .btn-vimeo.text::before {\n    display: none; }\n  .btn-facebook.text span,\n  .btn-twitter.text span,\n  .btn-linkedin.text span,\n  .btn-flickr.text span,\n  .btn-tumblr.text span,\n  .btn-xing.text span,\n  .btn-github.text span,\n  .btn-html5.text span,\n  .btn-openid.text span,\n  .btn-stack-overflow.text span,\n  .btn-youtube.text span,\n  .btn-css3.text span,\n  .btn-dribbble.text span,\n  .btn-google-plus.text span,\n  .btn-instagram.text span,\n  .btn-pinterest.text span,\n  .btn-vk.text span,\n  .btn-yahoo.text span,\n  .btn-behance.text span,\n  .btn-dropbox.text span,\n  .btn-reddit.text span,\n  .btn-spotify.text span,\n  .btn-vine.text span,\n  .btn-foursquare.text span,\n  .btn-vimeo.text span {\n    margin-left: 0 !important; }\n  .btn-facebook::before,\n  .btn-twitter::before,\n  .btn-linkedin::before,\n  .btn-flickr::before,\n  .btn-tumblr::before,\n  .btn-xing::before,\n  .btn-github::before,\n  .btn-html5::before,\n  .btn-openid::before,\n  .btn-stack-overflow::before,\n  .btn-youtube::before,\n  .btn-css3::before,\n  .btn-dribbble::before,\n  .btn-google-plus::before,\n  .btn-instagram::before,\n  .btn-pinterest::before,\n  .btn-vk::before,\n  .btn-yahoo::before,\n  .btn-behance::before,\n  .btn-dropbox::before,\n  .btn-reddit::before,\n  .btn-spotify::before,\n  .btn-vine::before,\n  .btn-foursquare::before,\n  .btn-vimeo::before {\n    width: 2.3125rem;\n    height: 2.3125rem;\n    padding: 0.5rem 0;\n    font-size: 0.875rem;\n    line-height: 1.5; }\n  .btn-facebook span,\n  .btn-twitter span,\n  .btn-linkedin span,\n  .btn-flickr span,\n  .btn-tumblr span,\n  .btn-xing span,\n  .btn-github span,\n  .btn-html5 span,\n  .btn-openid span,\n  .btn-stack-overflow span,\n  .btn-youtube span,\n  .btn-css3 span,\n  .btn-dribbble span,\n  .btn-google-plus span,\n  .btn-instagram span,\n  .btn-pinterest span,\n  .btn-vk span,\n  .btn-yahoo span,\n  .btn-behance span,\n  .btn-dropbox span,\n  .btn-reddit span,\n  .btn-spotify span,\n  .btn-vine span,\n  .btn-foursquare span,\n  .btn-vimeo span {\n    margin-left: 2.3125rem; }\n  .btn-facebook.icon,\n  .btn-twitter.icon,\n  .btn-linkedin.icon,\n  .btn-flickr.icon,\n  .btn-tumblr.icon,\n  .btn-xing.icon,\n  .btn-github.icon,\n  .btn-html5.icon,\n  .btn-openid.icon,\n  .btn-stack-overflow.icon,\n  .btn-youtube.icon,\n  .btn-css3.icon,\n  .btn-dribbble.icon,\n  .btn-google-plus.icon,\n  .btn-instagram.icon,\n  .btn-pinterest.icon,\n  .btn-vk.icon,\n  .btn-yahoo.icon,\n  .btn-behance.icon,\n  .btn-dropbox.icon,\n  .btn-reddit.icon,\n  .btn-spotify.icon,\n  .btn-vine.icon,\n  .btn-foursquare.icon,\n  .btn-vimeo.icon {\n    width: 2.3125rem;\n    height: 2.3125rem; }\n  .btn-facebook.btn-lg, .btn-group-lg > .btn-facebook.btn,\n  .btn-twitter.btn-lg,\n  .btn-group-lg > .btn-twitter.btn,\n  .btn-linkedin.btn-lg,\n  .btn-group-lg > .btn-linkedin.btn,\n  .btn-flickr.btn-lg,\n  .btn-group-lg > .btn-flickr.btn,\n  .btn-tumblr.btn-lg,\n  .btn-group-lg > .btn-tumblr.btn,\n  .btn-xing.btn-lg,\n  .btn-group-lg > .btn-xing.btn,\n  .btn-github.btn-lg,\n  .btn-group-lg > .btn-github.btn,\n  .btn-html5.btn-lg,\n  .btn-group-lg > .btn-html5.btn,\n  .btn-openid.btn-lg,\n  .btn-group-lg > .btn-openid.btn,\n  .btn-stack-overflow.btn-lg,\n  .btn-group-lg > .btn-stack-overflow.btn,\n  .btn-youtube.btn-lg,\n  .btn-group-lg > .btn-youtube.btn,\n  .btn-css3.btn-lg,\n  .btn-group-lg > .btn-css3.btn,\n  .btn-dribbble.btn-lg,\n  .btn-group-lg > .btn-dribbble.btn,\n  .btn-google-plus.btn-lg,\n  .btn-group-lg > .btn-google-plus.btn,\n  .btn-instagram.btn-lg,\n  .btn-group-lg > .btn-instagram.btn,\n  .btn-pinterest.btn-lg,\n  .btn-group-lg > .btn-pinterest.btn,\n  .btn-vk.btn-lg,\n  .btn-group-lg > .btn-vk.btn,\n  .btn-yahoo.btn-lg,\n  .btn-group-lg > .btn-yahoo.btn,\n  .btn-behance.btn-lg,\n  .btn-group-lg > .btn-behance.btn,\n  .btn-dropbox.btn-lg,\n  .btn-group-lg > .btn-dropbox.btn,\n  .btn-reddit.btn-lg,\n  .btn-group-lg > .btn-reddit.btn,\n  .btn-spotify.btn-lg,\n  .btn-group-lg > .btn-spotify.btn,\n  .btn-vine.btn-lg,\n  .btn-group-lg > .btn-vine.btn,\n  .btn-foursquare.btn-lg,\n  .btn-group-lg > .btn-foursquare.btn,\n  .btn-vimeo.btn-lg,\n  .btn-group-lg > .btn-vimeo.btn {\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    border: 0; }\n    .btn-facebook.btn-lg::before, .btn-group-lg > .btn-facebook.btn::before,\n    .btn-twitter.btn-lg::before,\n    .btn-group-lg > .btn-twitter.btn::before,\n    .btn-linkedin.btn-lg::before,\n    .btn-group-lg > .btn-linkedin.btn::before,\n    .btn-flickr.btn-lg::before,\n    .btn-group-lg > .btn-flickr.btn::before,\n    .btn-tumblr.btn-lg::before,\n    .btn-group-lg > .btn-tumblr.btn::before,\n    .btn-xing.btn-lg::before,\n    .btn-group-lg > .btn-xing.btn::before,\n    .btn-github.btn-lg::before,\n    .btn-group-lg > .btn-github.btn::before,\n    .btn-html5.btn-lg::before,\n    .btn-group-lg > .btn-html5.btn::before,\n    .btn-openid.btn-lg::before,\n    .btn-group-lg > .btn-openid.btn::before,\n    .btn-stack-overflow.btn-lg::before,\n    .btn-group-lg > .btn-stack-overflow.btn::before,\n    .btn-youtube.btn-lg::before,\n    .btn-group-lg > .btn-youtube.btn::before,\n    .btn-css3.btn-lg::before,\n    .btn-group-lg > .btn-css3.btn::before,\n    .btn-dribbble.btn-lg::before,\n    .btn-group-lg > .btn-dribbble.btn::before,\n    .btn-google-plus.btn-lg::before,\n    .btn-group-lg > .btn-google-plus.btn::before,\n    .btn-instagram.btn-lg::before,\n    .btn-group-lg > .btn-instagram.btn::before,\n    .btn-pinterest.btn-lg::before,\n    .btn-group-lg > .btn-pinterest.btn::before,\n    .btn-vk.btn-lg::before,\n    .btn-group-lg > .btn-vk.btn::before,\n    .btn-yahoo.btn-lg::before,\n    .btn-group-lg > .btn-yahoo.btn::before,\n    .btn-behance.btn-lg::before,\n    .btn-group-lg > .btn-behance.btn::before,\n    .btn-dropbox.btn-lg::before,\n    .btn-group-lg > .btn-dropbox.btn::before,\n    .btn-reddit.btn-lg::before,\n    .btn-group-lg > .btn-reddit.btn::before,\n    .btn-spotify.btn-lg::before,\n    .btn-group-lg > .btn-spotify.btn::before,\n    .btn-vine.btn-lg::before,\n    .btn-group-lg > .btn-vine.btn::before,\n    .btn-foursquare.btn-lg::before,\n    .btn-group-lg > .btn-foursquare.btn::before,\n    .btn-vimeo.btn-lg::before,\n    .btn-group-lg > .btn-vimeo.btn::before {\n      width: 2.875rem;\n      height: 2.875rem;\n      padding: 0.5rem 0;\n      font-size: 1.25rem;\n      line-height: 1.5; }\n    .btn-facebook.btn-lg span, .btn-group-lg > .btn-facebook.btn span,\n    .btn-twitter.btn-lg span, .btn-group-lg > .btn-twitter.btn span,\n    .btn-linkedin.btn-lg span, .btn-group-lg > .btn-linkedin.btn span,\n    .btn-flickr.btn-lg span, .btn-group-lg > .btn-flickr.btn span,\n    .btn-tumblr.btn-lg span, .btn-group-lg > .btn-tumblr.btn span,\n    .btn-xing.btn-lg span, .btn-group-lg > .btn-xing.btn span,\n    .btn-github.btn-lg span, .btn-group-lg > .btn-github.btn span,\n    .btn-html5.btn-lg span, .btn-group-lg > .btn-html5.btn span,\n    .btn-openid.btn-lg span, .btn-group-lg > .btn-openid.btn span,\n    .btn-stack-overflow.btn-lg span, .btn-group-lg > .btn-stack-overflow.btn span,\n    .btn-youtube.btn-lg span, .btn-group-lg > .btn-youtube.btn span,\n    .btn-css3.btn-lg span, .btn-group-lg > .btn-css3.btn span,\n    .btn-dribbble.btn-lg span, .btn-group-lg > .btn-dribbble.btn span,\n    .btn-google-plus.btn-lg span, .btn-group-lg > .btn-google-plus.btn span,\n    .btn-instagram.btn-lg span, .btn-group-lg > .btn-instagram.btn span,\n    .btn-pinterest.btn-lg span, .btn-group-lg > .btn-pinterest.btn span,\n    .btn-vk.btn-lg span, .btn-group-lg > .btn-vk.btn span,\n    .btn-yahoo.btn-lg span, .btn-group-lg > .btn-yahoo.btn span,\n    .btn-behance.btn-lg span, .btn-group-lg > .btn-behance.btn span,\n    .btn-dropbox.btn-lg span, .btn-group-lg > .btn-dropbox.btn span,\n    .btn-reddit.btn-lg span, .btn-group-lg > .btn-reddit.btn span,\n    .btn-spotify.btn-lg span, .btn-group-lg > .btn-spotify.btn span,\n    .btn-vine.btn-lg span, .btn-group-lg > .btn-vine.btn span,\n    .btn-foursquare.btn-lg span, .btn-group-lg > .btn-foursquare.btn span,\n    .btn-vimeo.btn-lg span, .btn-group-lg > .btn-vimeo.btn span {\n      margin-left: 2.875rem; }\n    .btn-facebook.btn-lg.icon, .btn-group-lg > .btn-facebook.icon.btn,\n    .btn-twitter.btn-lg.icon,\n    .btn-group-lg > .btn-twitter.icon.btn,\n    .btn-linkedin.btn-lg.icon,\n    .btn-group-lg > .btn-linkedin.icon.btn,\n    .btn-flickr.btn-lg.icon,\n    .btn-group-lg > .btn-flickr.icon.btn,\n    .btn-tumblr.btn-lg.icon,\n    .btn-group-lg > .btn-tumblr.icon.btn,\n    .btn-xing.btn-lg.icon,\n    .btn-group-lg > .btn-xing.icon.btn,\n    .btn-github.btn-lg.icon,\n    .btn-group-lg > .btn-github.icon.btn,\n    .btn-html5.btn-lg.icon,\n    .btn-group-lg > .btn-html5.icon.btn,\n    .btn-openid.btn-lg.icon,\n    .btn-group-lg > .btn-openid.icon.btn,\n    .btn-stack-overflow.btn-lg.icon,\n    .btn-group-lg > .btn-stack-overflow.icon.btn,\n    .btn-youtube.btn-lg.icon,\n    .btn-group-lg > .btn-youtube.icon.btn,\n    .btn-css3.btn-lg.icon,\n    .btn-group-lg > .btn-css3.icon.btn,\n    .btn-dribbble.btn-lg.icon,\n    .btn-group-lg > .btn-dribbble.icon.btn,\n    .btn-google-plus.btn-lg.icon,\n    .btn-group-lg > .btn-google-plus.icon.btn,\n    .btn-instagram.btn-lg.icon,\n    .btn-group-lg > .btn-instagram.icon.btn,\n    .btn-pinterest.btn-lg.icon,\n    .btn-group-lg > .btn-pinterest.icon.btn,\n    .btn-vk.btn-lg.icon,\n    .btn-group-lg > .btn-vk.icon.btn,\n    .btn-yahoo.btn-lg.icon,\n    .btn-group-lg > .btn-yahoo.icon.btn,\n    .btn-behance.btn-lg.icon,\n    .btn-group-lg > .btn-behance.icon.btn,\n    .btn-dropbox.btn-lg.icon,\n    .btn-group-lg > .btn-dropbox.icon.btn,\n    .btn-reddit.btn-lg.icon,\n    .btn-group-lg > .btn-reddit.icon.btn,\n    .btn-spotify.btn-lg.icon,\n    .btn-group-lg > .btn-spotify.icon.btn,\n    .btn-vine.btn-lg.icon,\n    .btn-group-lg > .btn-vine.icon.btn,\n    .btn-foursquare.btn-lg.icon,\n    .btn-group-lg > .btn-foursquare.icon.btn,\n    .btn-vimeo.btn-lg.icon,\n    .btn-group-lg > .btn-vimeo.icon.btn {\n      width: 2.875rem;\n      height: 2.875rem; }\n  .btn-facebook.btn-sm, .btn-group-sm > .btn-facebook.btn,\n  .btn-twitter.btn-sm,\n  .btn-group-sm > .btn-twitter.btn,\n  .btn-linkedin.btn-sm,\n  .btn-group-sm > .btn-linkedin.btn,\n  .btn-flickr.btn-sm,\n  .btn-group-sm > .btn-flickr.btn,\n  .btn-tumblr.btn-sm,\n  .btn-group-sm > .btn-tumblr.btn,\n  .btn-xing.btn-sm,\n  .btn-group-sm > .btn-xing.btn,\n  .btn-github.btn-sm,\n  .btn-group-sm > .btn-github.btn,\n  .btn-html5.btn-sm,\n  .btn-group-sm > .btn-html5.btn,\n  .btn-openid.btn-sm,\n  .btn-group-sm > .btn-openid.btn,\n  .btn-stack-overflow.btn-sm,\n  .btn-group-sm > .btn-stack-overflow.btn,\n  .btn-youtube.btn-sm,\n  .btn-group-sm > .btn-youtube.btn,\n  .btn-css3.btn-sm,\n  .btn-group-sm > .btn-css3.btn,\n  .btn-dribbble.btn-sm,\n  .btn-group-sm > .btn-dribbble.btn,\n  .btn-google-plus.btn-sm,\n  .btn-group-sm > .btn-google-plus.btn,\n  .btn-instagram.btn-sm,\n  .btn-group-sm > .btn-instagram.btn,\n  .btn-pinterest.btn-sm,\n  .btn-group-sm > .btn-pinterest.btn,\n  .btn-vk.btn-sm,\n  .btn-group-sm > .btn-vk.btn,\n  .btn-yahoo.btn-sm,\n  .btn-group-sm > .btn-yahoo.btn,\n  .btn-behance.btn-sm,\n  .btn-group-sm > .btn-behance.btn,\n  .btn-dropbox.btn-sm,\n  .btn-group-sm > .btn-dropbox.btn,\n  .btn-reddit.btn-sm,\n  .btn-group-sm > .btn-reddit.btn,\n  .btn-spotify.btn-sm,\n  .btn-group-sm > .btn-spotify.btn,\n  .btn-vine.btn-sm,\n  .btn-group-sm > .btn-vine.btn,\n  .btn-foursquare.btn-sm,\n  .btn-group-sm > .btn-foursquare.btn,\n  .btn-vimeo.btn-sm,\n  .btn-group-sm > .btn-vimeo.btn {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    border: 0; }\n    .btn-facebook.btn-sm::before, .btn-group-sm > .btn-facebook.btn::before,\n    .btn-twitter.btn-sm::before,\n    .btn-group-sm > .btn-twitter.btn::before,\n    .btn-linkedin.btn-sm::before,\n    .btn-group-sm > .btn-linkedin.btn::before,\n    .btn-flickr.btn-sm::before,\n    .btn-group-sm > .btn-flickr.btn::before,\n    .btn-tumblr.btn-sm::before,\n    .btn-group-sm > .btn-tumblr.btn::before,\n    .btn-xing.btn-sm::before,\n    .btn-group-sm > .btn-xing.btn::before,\n    .btn-github.btn-sm::before,\n    .btn-group-sm > .btn-github.btn::before,\n    .btn-html5.btn-sm::before,\n    .btn-group-sm > .btn-html5.btn::before,\n    .btn-openid.btn-sm::before,\n    .btn-group-sm > .btn-openid.btn::before,\n    .btn-stack-overflow.btn-sm::before,\n    .btn-group-sm > .btn-stack-overflow.btn::before,\n    .btn-youtube.btn-sm::before,\n    .btn-group-sm > .btn-youtube.btn::before,\n    .btn-css3.btn-sm::before,\n    .btn-group-sm > .btn-css3.btn::before,\n    .btn-dribbble.btn-sm::before,\n    .btn-group-sm > .btn-dribbble.btn::before,\n    .btn-google-plus.btn-sm::before,\n    .btn-group-sm > .btn-google-plus.btn::before,\n    .btn-instagram.btn-sm::before,\n    .btn-group-sm > .btn-instagram.btn::before,\n    .btn-pinterest.btn-sm::before,\n    .btn-group-sm > .btn-pinterest.btn::before,\n    .btn-vk.btn-sm::before,\n    .btn-group-sm > .btn-vk.btn::before,\n    .btn-yahoo.btn-sm::before,\n    .btn-group-sm > .btn-yahoo.btn::before,\n    .btn-behance.btn-sm::before,\n    .btn-group-sm > .btn-behance.btn::before,\n    .btn-dropbox.btn-sm::before,\n    .btn-group-sm > .btn-dropbox.btn::before,\n    .btn-reddit.btn-sm::before,\n    .btn-group-sm > .btn-reddit.btn::before,\n    .btn-spotify.btn-sm::before,\n    .btn-group-sm > .btn-spotify.btn::before,\n    .btn-vine.btn-sm::before,\n    .btn-group-sm > .btn-vine.btn::before,\n    .btn-foursquare.btn-sm::before,\n    .btn-group-sm > .btn-foursquare.btn::before,\n    .btn-vimeo.btn-sm::before,\n    .btn-group-sm > .btn-vimeo.btn::before {\n      width: 1.8125rem;\n      height: 1.8125rem;\n      padding: 0.25rem 0;\n      font-size: 0.875rem;\n      line-height: 1.5; }\n    .btn-facebook.btn-sm span, .btn-group-sm > .btn-facebook.btn span,\n    .btn-twitter.btn-sm span, .btn-group-sm > .btn-twitter.btn span,\n    .btn-linkedin.btn-sm span, .btn-group-sm > .btn-linkedin.btn span,\n    .btn-flickr.btn-sm span, .btn-group-sm > .btn-flickr.btn span,\n    .btn-tumblr.btn-sm span, .btn-group-sm > .btn-tumblr.btn span,\n    .btn-xing.btn-sm span, .btn-group-sm > .btn-xing.btn span,\n    .btn-github.btn-sm span, .btn-group-sm > .btn-github.btn span,\n    .btn-html5.btn-sm span, .btn-group-sm > .btn-html5.btn span,\n    .btn-openid.btn-sm span, .btn-group-sm > .btn-openid.btn span,\n    .btn-stack-overflow.btn-sm span, .btn-group-sm > .btn-stack-overflow.btn span,\n    .btn-youtube.btn-sm span, .btn-group-sm > .btn-youtube.btn span,\n    .btn-css3.btn-sm span, .btn-group-sm > .btn-css3.btn span,\n    .btn-dribbble.btn-sm span, .btn-group-sm > .btn-dribbble.btn span,\n    .btn-google-plus.btn-sm span, .btn-group-sm > .btn-google-plus.btn span,\n    .btn-instagram.btn-sm span, .btn-group-sm > .btn-instagram.btn span,\n    .btn-pinterest.btn-sm span, .btn-group-sm > .btn-pinterest.btn span,\n    .btn-vk.btn-sm span, .btn-group-sm > .btn-vk.btn span,\n    .btn-yahoo.btn-sm span, .btn-group-sm > .btn-yahoo.btn span,\n    .btn-behance.btn-sm span, .btn-group-sm > .btn-behance.btn span,\n    .btn-dropbox.btn-sm span, .btn-group-sm > .btn-dropbox.btn span,\n    .btn-reddit.btn-sm span, .btn-group-sm > .btn-reddit.btn span,\n    .btn-spotify.btn-sm span, .btn-group-sm > .btn-spotify.btn span,\n    .btn-vine.btn-sm span, .btn-group-sm > .btn-vine.btn span,\n    .btn-foursquare.btn-sm span, .btn-group-sm > .btn-foursquare.btn span,\n    .btn-vimeo.btn-sm span, .btn-group-sm > .btn-vimeo.btn span {\n      margin-left: 1.8125rem; }\n    .btn-facebook.btn-sm.icon, .btn-group-sm > .btn-facebook.icon.btn,\n    .btn-twitter.btn-sm.icon,\n    .btn-group-sm > .btn-twitter.icon.btn,\n    .btn-linkedin.btn-sm.icon,\n    .btn-group-sm > .btn-linkedin.icon.btn,\n    .btn-flickr.btn-sm.icon,\n    .btn-group-sm > .btn-flickr.icon.btn,\n    .btn-tumblr.btn-sm.icon,\n    .btn-group-sm > .btn-tumblr.icon.btn,\n    .btn-xing.btn-sm.icon,\n    .btn-group-sm > .btn-xing.icon.btn,\n    .btn-github.btn-sm.icon,\n    .btn-group-sm > .btn-github.icon.btn,\n    .btn-html5.btn-sm.icon,\n    .btn-group-sm > .btn-html5.icon.btn,\n    .btn-openid.btn-sm.icon,\n    .btn-group-sm > .btn-openid.icon.btn,\n    .btn-stack-overflow.btn-sm.icon,\n    .btn-group-sm > .btn-stack-overflow.icon.btn,\n    .btn-youtube.btn-sm.icon,\n    .btn-group-sm > .btn-youtube.icon.btn,\n    .btn-css3.btn-sm.icon,\n    .btn-group-sm > .btn-css3.icon.btn,\n    .btn-dribbble.btn-sm.icon,\n    .btn-group-sm > .btn-dribbble.icon.btn,\n    .btn-google-plus.btn-sm.icon,\n    .btn-group-sm > .btn-google-plus.icon.btn,\n    .btn-instagram.btn-sm.icon,\n    .btn-group-sm > .btn-instagram.icon.btn,\n    .btn-pinterest.btn-sm.icon,\n    .btn-group-sm > .btn-pinterest.icon.btn,\n    .btn-vk.btn-sm.icon,\n    .btn-group-sm > .btn-vk.icon.btn,\n    .btn-yahoo.btn-sm.icon,\n    .btn-group-sm > .btn-yahoo.icon.btn,\n    .btn-behance.btn-sm.icon,\n    .btn-group-sm > .btn-behance.icon.btn,\n    .btn-dropbox.btn-sm.icon,\n    .btn-group-sm > .btn-dropbox.icon.btn,\n    .btn-reddit.btn-sm.icon,\n    .btn-group-sm > .btn-reddit.icon.btn,\n    .btn-spotify.btn-sm.icon,\n    .btn-group-sm > .btn-spotify.icon.btn,\n    .btn-vine.btn-sm.icon,\n    .btn-group-sm > .btn-vine.icon.btn,\n    .btn-foursquare.btn-sm.icon,\n    .btn-group-sm > .btn-foursquare.icon.btn,\n    .btn-vimeo.btn-sm.icon,\n    .btn-group-sm > .btn-vimeo.icon.btn {\n      width: 1.8125rem;\n      height: 1.8125rem; }\n\n.btn-facebook {\n  background: #3b5998; }\n  .btn-facebook::before {\n    content: \"\\F09A\";\n    background: #344e86; }\n  .btn-facebook:hover {\n    background: #344e86; }\n    .btn-facebook:hover::before {\n      background: #2d4373; }\n\n.btn-twitter {\n  background: #00aced; }\n  .btn-twitter::before {\n    content: \"\\F099\";\n    background: #0099d4; }\n  .btn-twitter:hover {\n    background: #0099d4; }\n    .btn-twitter:hover::before {\n      background: #0087ba; }\n\n.btn-linkedin {\n  background: #4875b4; }\n  .btn-linkedin::before {\n    content: \"\\F0E1\";\n    background: #4169a2; }\n  .btn-linkedin:hover {\n    background: #4169a2; }\n    .btn-linkedin:hover::before {\n      background: #395d90; }\n\n.btn-flickr {\n  background: #ff0084; }\n  .btn-flickr::before {\n    content: \"\\F16E\";\n    background: #e60077; }\n  .btn-flickr:hover {\n    background: #e60077; }\n    .btn-flickr:hover::before {\n      background: #cc006a; }\n\n.btn-tumblr {\n  background: #32506d; }\n  .btn-tumblr::before {\n    content: \"\\F173\";\n    background: #2a435c; }\n  .btn-tumblr:hover {\n    background: #2a435c; }\n    .btn-tumblr:hover::before {\n      background: #22364a; }\n\n.btn-xing {\n  background: #026466; }\n  .btn-xing::before {\n    content: \"\\F168\";\n    background: #024b4d; }\n  .btn-xing:hover {\n    background: #024b4d; }\n    .btn-xing:hover::before {\n      background: #013334; }\n\n.btn-github {\n  background: #4183c4; }\n  .btn-github::before {\n    content: \"\\F09B\";\n    background: #3876b4; }\n  .btn-github:hover {\n    background: #3876b4; }\n    .btn-github:hover::before {\n      background: #3269a0; }\n\n.btn-html5 {\n  background: #e34f26; }\n  .btn-html5::before {\n    content: \"\\F13B\";\n    background: #d4431b; }\n  .btn-html5:hover {\n    background: #d4431b; }\n    .btn-html5:hover::before {\n      background: #be3c18; }\n\n.btn-openid {\n  background: #f78c40; }\n  .btn-openid::before {\n    content: \"\\F19B\";\n    background: #f67d28; }\n  .btn-openid:hover {\n    background: #f67d28; }\n    .btn-openid:hover::before {\n      background: #f56f0f; }\n\n.btn-stack-overflow {\n  background: #fe7a15; }\n  .btn-stack-overflow::before {\n    content: \"\\F16C\";\n    background: #f86c01; }\n  .btn-stack-overflow:hover {\n    background: #f86c01; }\n    .btn-stack-overflow:hover::before {\n      background: #df6101; }\n\n.btn-css3 {\n  background: #0170ba; }\n  .btn-css3::before {\n    content: \"\\F13C\";\n    background: #0161a1; }\n  .btn-css3:hover {\n    background: #0161a1; }\n    .btn-css3:hover::before {\n      background: #015187; }\n\n.btn-youtube {\n  background: #b00; }\n  .btn-youtube::before {\n    content: \"\\F167\";\n    background: #a20000; }\n  .btn-youtube:hover {\n    background: #a20000; }\n    .btn-youtube:hover::before {\n      background: #880000; }\n\n.btn-dribbble {\n  background: #ea4c89; }\n  .btn-dribbble::before {\n    content: \"\\F17D\";\n    background: #e7357a; }\n  .btn-dribbble:hover {\n    background: #e7357a; }\n    .btn-dribbble:hover::before {\n      background: #e51e6b; }\n\n.btn-google-plus {\n  background: #bb4b39; }\n  .btn-google-plus::before {\n    content: \"\\F0D5\";\n    background: #a74333; }\n  .btn-google-plus:hover {\n    background: #a74333; }\n    .btn-google-plus:hover::before {\n      background: #943b2d; }\n\n.btn-instagram {\n  background: #517fa4; }\n  .btn-instagram::before {\n    content: \"\\F16D\";\n    background: #497293; }\n  .btn-instagram:hover {\n    background: #497293; }\n    .btn-instagram:hover::before {\n      background: #406582; }\n\n.btn-pinterest {\n  background: #cb2027; }\n  .btn-pinterest::before {\n    content: \"\\F0D2\";\n    background: #b51d23; }\n  .btn-pinterest:hover {\n    background: #b51d23; }\n    .btn-pinterest:hover::before {\n      background: #9f191f; }\n\n.btn-vk {\n  background: #45668e; }\n  .btn-vk::before {\n    content: \"\\F189\";\n    background: #3d5a7d; }\n  .btn-vk:hover {\n    background: #3d5a7d; }\n    .btn-vk:hover::before {\n      background: #344d6c; }\n\n.btn-yahoo {\n  background: #400191; }\n  .btn-yahoo::before {\n    content: \"\\F19E\";\n    background: #350178; }\n  .btn-yahoo:hover {\n    background: #350178; }\n    .btn-yahoo:hover::before {\n      background: #2a015e; }\n\n.btn-behance {\n  background: #1769ff; }\n  .btn-behance::before {\n    content: \"\\F1B4\";\n    background: #0059fd; }\n  .btn-behance:hover {\n    background: #0059fd; }\n    .btn-behance:hover::before {\n      background: #0050e3; }\n\n.btn-dropbox {\n  background: #007ee5; }\n  .btn-dropbox::before {\n    content: \"\\F16B\";\n    background: #0070cc; }\n  .btn-dropbox:hover {\n    background: #0070cc; }\n    .btn-dropbox:hover::before {\n      background: #0062b2; }\n\n.btn-reddit {\n  background: #ff4500; }\n  .btn-reddit::before {\n    content: \"\\F1A1\";\n    background: #e63e00; }\n  .btn-reddit:hover {\n    background: #e63e00; }\n    .btn-reddit:hover::before {\n      background: #cc3700; }\n\n.btn-spotify {\n  background: #7ab800; }\n  .btn-spotify::before {\n    content: \"\\F1BC\";\n    background: #699f00; }\n  .btn-spotify:hover {\n    background: #699f00; }\n    .btn-spotify:hover::before {\n      background: #588500; }\n\n.btn-vine {\n  background: #00bf8f; }\n  .btn-vine::before {\n    content: \"\\F1CA\";\n    background: #00a67c; }\n  .btn-vine:hover {\n    background: #00a67c; }\n    .btn-vine:hover::before {\n      background: #008c69; }\n\n.btn-foursquare {\n  background: #1073af; }\n  .btn-foursquare::before {\n    content: \"\\F180\";\n    background: #0e6498; }\n  .btn-foursquare:hover {\n    background: #0e6498; }\n    .btn-foursquare:hover::before {\n      background: #0c5480; }\n\n.btn-vimeo {\n  background: #aad450; }\n  .btn-vimeo::before {\n    content: \"\\F194\";\n    background: #a0cf3c; }\n  .btn-vimeo:hover {\n    background: #a0cf3c; }\n    .btn-vimeo:hover::before {\n      background: #93c130; }\n\n.callout {\n  position: relative;\n  padding: 0 1rem;\n  margin: 1rem 0;\n  border: 0 solid #cfd8dc;\n  border-left-width: .25rem; }\n  .callout .chart-wrapper {\n    position: absolute;\n    top: 18px;\n    left: 45%;\n    float: right;\n    width: 100px; }\n\n.callout-bordered {\n  border: 1px solid #cfd8dc;\n  border-left-width: .25rem; }\n\n.callout code {\n  border-radius: .25rem; }\n\n.callout h4 {\n  margin-top: 0;\n  margin-bottom: .25rem; }\n\n.callout p:last-child {\n  margin-bottom: 0; }\n\n.callout + .callout {\n  margin-top: -0.25rem; }\n\n.callout-default {\n  border-left-color: #b0bec5; }\n  .callout-default h4 {\n    color: #b0bec5; }\n\n.callout-primary {\n  border-left-color: #20a8d8; }\n  .callout-primary h4 {\n    color: #20a8d8; }\n\n.callout-info {\n  border-left-color: #63c2de; }\n  .callout-info h4 {\n    color: #63c2de; }\n\n.callout-warning {\n  border-left-color: #f8cb00; }\n  .callout-warning h4 {\n    color: #f8cb00; }\n\n.callout-danger {\n  border-left-color: #f86c6b; }\n  .callout-danger h4 {\n    color: #f86c6b; }\n\n.callout-success {\n  border-left-color: #4dbd74; }\n  .callout-success h4 {\n    color: #4dbd74; }\n\n.card {\n  margin-bottom: 1.5rem; }\n\n.card-header .icon-bg {\n  display: inline-block;\n  padding: 0.75rem 1.25rem !important;\n  margin-top: -0.75rem;\n  margin-right: 1.25rem;\n  margin-bottom: -0.75rem;\n  margin-left: -1.25rem;\n  line-height: inherit;\n  color: #263238;\n  vertical-align: bottom;\n  background: transparent;\n  border-right: 1px solid #cfd8dc; }\n\n.card-header .nav.nav-tabs {\n  margin-top: -0.75rem;\n  margin-bottom: -0.75rem;\n  border-bottom: 0; }\n  .card-header .nav.nav-tabs .nav-item {\n    border-top: 0; }\n  .card-header .nav.nav-tabs .nav-link, .card-header .nav.nav-tabs .navbar .dropdown-toggle, .navbar .card-header .nav.nav-tabs .dropdown-toggle {\n    padding: 0.75rem 0.625rem;\n    color: #b0bec5;\n    border-top: 0; }\n    .card-header .nav.nav-tabs .nav-link.active, .card-header .nav.nav-tabs .navbar .active.dropdown-toggle, .navbar .card-header .nav.nav-tabs .active.dropdown-toggle {\n      color: #263238;\n      background: #fff; }\n\n.card-header.card-header-inverse {\n  color: #fff; }\n\n.card-header.card-header-primary {\n  margin: -1px -1px 0;\n  background: #20a8d8;\n  border-bottom: 1px solid #20a8d8; }\n\n.card-header.card-header-secondary {\n  margin: -1px -1px 0;\n  background: #cfd8dc;\n  border-bottom: 1px solid #cfd8dc; }\n\n.card-header.card-header-success {\n  margin: -1px -1px 0;\n  background: #4dbd74;\n  border-bottom: 1px solid #4dbd74; }\n\n.card-header.card-header-info {\n  margin: -1px -1px 0;\n  background: #63c2de;\n  border-bottom: 1px solid #63c2de; }\n\n.card-header.card-header-warning {\n  margin: -1px -1px 0;\n  background: #f8cb00;\n  border-bottom: 1px solid #f8cb00; }\n\n.card-header.card-header-danger {\n  margin: -1px -1px 0;\n  background: #f86c6b;\n  border-bottom: 1px solid #f86c6b; }\n\n.card-header .btn {\n  margin-top: -0.5rem; }\n\n.card-header .btn-sm, .card-header .btn-group-sm > .btn {\n  margin-top: -0.25rem; }\n\n.card-header .btn-lg, .card-header .btn-group-lg > .btn {\n  margin-top: -0.5rem; }\n\n.card-footer ul {\n  display: table;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  table-layout: fixed; }\n  .card-footer ul li {\n    display: table-cell;\n    padding: 0 1.25rem;\n    text-align: center; }\n\n.card-primary {\n  background-color: #20a8d8; }\n  .card-primary .card-header {\n    border-color: #1d97c2; }\n  .card-primary .card-header, .card-primary .card-footer {\n    background-color: #1d97c2; }\n\n.card-secondary {\n  background-color: #cfd8dc; }\n  .card-secondary .card-header {\n    border-color: #c0ccd1; }\n  .card-secondary .card-header, .card-secondary .card-footer {\n    background-color: #c0ccd1; }\n\n.card-success {\n  background-color: #4dbd74; }\n  .card-success .card-header {\n    border-color: #41af67; }\n  .card-success .card-header, .card-success .card-footer {\n    background-color: #41af67; }\n\n.card-info {\n  background-color: #63c2de; }\n  .card-info .card-header {\n    border-color: #4ebada; }\n  .card-info .card-header, .card-info .card-footer {\n    background-color: #4ebada; }\n\n.card-warning {\n  background-color: #f8cb00; }\n  .card-warning .card-header {\n    border-color: #dfb600; }\n  .card-warning .card-header, .card-warning .card-footer {\n    background-color: #dfb600; }\n\n.card-danger {\n  background-color: #f86c6b; }\n  .card-danger .card-header {\n    border-color: #f75453; }\n  .card-danger .card-header, .card-danger .card-footer {\n    background-color: #f75453; }\n\n.card-inverse {\n  color: #fff; }\n  .card-inverse .text-muted {\n    color: rgba(255, 255, 255, 0.6) !important; }\n\n[class*=\"card-outline-\"] .card-block {\n  background: #fff !important; }\n\n[class*=\"card-outline-\"].card-outline-top {\n  border-top-width: 2px;\n  border-right-color: #cfd8dc;\n  border-bottom-color: #cfd8dc;\n  border-left-color: #cfd8dc; }\n\n.card-accent-primary {\n  border-top-width: 2px;\n  border-top-color: #20a8d8; }\n\n.card-accent-secondary {\n  border-top-width: 2px;\n  border-top-color: #b0bec5; }\n\n.card-accent-info {\n  border-top-width: 2px;\n  border-top-color: #63c2de; }\n\n.card-accent-success {\n  border-top-width: 2px;\n  border-top-color: #4dbd74; }\n\n.card-accent-warning {\n  border-top-width: 2px;\n  border-top-color: #f8cb00; }\n\n.card-accent-danger {\n  border-top-width: 2px;\n  border-top-color: #f86c6b; }\n\n.card-header > i {\n  margin-right: 0.5rem; }\n\n.card-header .card-actions {\n  position: absolute;\n  top: 0;\n  right: 0; }\n  .card-header .card-actions a, .card-header .card-actions button {\n    display: block;\n    float: left;\n    width: 50px;\n    padding: 0.75rem 0;\n    margin: 0 !important;\n    color: #263238;\n    text-align: center;\n    background: transparent;\n    border: 0;\n    border-left: 1px solid #cfd8dc;\n    box-shadow: 0; }\n    .card-header .card-actions a:hover, .card-header .card-actions button:hover {\n      text-decoration: none; }\n    .card-header .card-actions a [class^=\"icon-\"], .card-header .card-actions a [class*=\" icon-\"], .card-header .card-actions button [class^=\"icon-\"], .card-header .card-actions button [class*=\" icon-\"] {\n      display: inline-block;\n      vertical-align: middle; }\n    .card-header .card-actions a i, .card-header .card-actions button i {\n      display: inline-block;\n      transition: .4s; }\n    .card-header .card-actions a .r180, .card-header .card-actions button .r180 {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n  .card-header .card-actions .input-group {\n    width: 230px;\n    margin: 6px; }\n    .card-header .card-actions .input-group .input-group-addon {\n      background: #fff; }\n    .card-header .card-actions .input-group input {\n      border-left: 0; }\n\n.card-full {\n  margin-top: -1rem;\n  margin-right: -15px;\n  margin-left: -15px;\n  border: 0;\n  border-bottom: 1px solid #cfd8dc; }\n\n@media (min-width: 576px) {\n  .card-columns.cols-2 {\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2; } }\n\n.card.drag, .card .drag {\n  cursor: move; }\n\n.card-placeholder {\n  background: rgba(0, 0, 0, 0.025);\n  border: 1px dashed #b0bec5; }\n\n.chart-wrapper canvas {\n  width: 100% !important; }\n\nbase-chart.chart {\n  display: block !important; }\n\n.dropdown-item {\n  position: relative;\n  padding: 10px 20px;\n  border-bottom: 1px solid #cfd8dc; }\n  .dropdown-item:last-child {\n    border-bottom: 0; }\n  .dropdown-item i {\n    display: inline-block;\n    width: 20px;\n    margin-right: 10px;\n    margin-left: -10px;\n    color: #cfd8dc;\n    text-align: center; }\n  .dropdown-item .badge {\n    position: absolute;\n    right: 10px;\n    margin-top: 2px; }\n\n.dropdown-header {\n  padding: 8px 20px;\n  background: #eceff1;\n  border-bottom: 1px solid #cfd8dc; }\n  .dropdown-header .btn {\n    margin-top: -7px;\n    color: #b0bec5; }\n    .dropdown-header .btn:hover {\n      color: #263238; }\n    .dropdown-header .btn.pull-right {\n      margin-right: -20px; }\n\n.dropdown-menu-lg {\n  width: 250px; }\n\n.app-footer {\n  min-height: 50px;\n  padding: 0 1rem;\n  line-height: 50px;\n  color: #263238;\n  background: #eceff1;\n  border-top: 1px solid #cfd8dc; }\n\n.row.row-equal {\n  padding-right: 7.5px;\n  padding-left: 7.5px;\n  margin-right: -15px;\n  margin-left: -15px; }\n  .row.row-equal [class*=\"col-\"] {\n    padding-right: 7.5px;\n    padding-left: 7.5px; }\n\n.main .container-fluid {\n  padding: 0 30px; }\n\n.input-group-addon,\n.input-group-btn {\n  min-width: 40px;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n#loading-bar,\n#loading-bar-spinner {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  transition: 350ms linear all; }\n\n#loading-bar.ng-enter,\n#loading-bar.ng-leave.ng-leave-active,\n#loading-bar-spinner.ng-enter,\n#loading-bar-spinner.ng-leave.ng-leave-active {\n  opacity: 0; }\n\n#loading-bar.ng-enter.ng-enter-active,\n#loading-bar.ng-leave,\n#loading-bar-spinner.ng-enter.ng-enter-active,\n#loading-bar-spinner.ng-leave {\n  opacity: 1; }\n\n#loading-bar .bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 20002;\n  width: 100%;\n  height: 2px;\n  background: #20a8d8;\n  border-top-right-radius: 1px;\n  border-bottom-right-radius: 1px;\n  transition: width 350ms; }\n\n#loading-bar .peg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 70px;\n  height: 2px;\n  border-radius: 100%;\n  -ms-box-shadow: #29d 1px 0 6px 1px;\n  box-shadow: #29d 1px 0 6px 1px;\n  opacity: .45; }\n\n#loading-bar-spinner {\n  position: fixed;\n  top: 10px;\n  left: 10px;\n  z-index: 10002;\n  display: block; }\n\n#loading-bar-spinner .spinner-icon {\n  width: 14px;\n  height: 14px;\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n  -webkit-animation: loading-bar-spinner 400ms linear infinite;\n  animation: loading-bar-spinner 400ms linear infinite; }\n\n@-webkit-keyframes loading-bar-spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes loading-bar-spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n\n.pace-inactive {\n  display: none; }\n\n.pace .pace-progress {\n  position: fixed;\n  top: 0;\n  right: 100%;\n  z-index: 2000;\n  width: 100%;\n  height: 2px;\n  background: #20a8d8; }\n\n.modal-primary .modal-content {\n  border-color: #20a8d8; }\n\n.modal-primary .modal-header {\n  color: #fff;\n  background-color: #20a8d8; }\n\n.modal-secondary .modal-content {\n  border-color: #cfd8dc; }\n\n.modal-secondary .modal-header {\n  color: #fff;\n  background-color: #cfd8dc; }\n\n.modal-success .modal-content {\n  border-color: #4dbd74; }\n\n.modal-success .modal-header {\n  color: #fff;\n  background-color: #4dbd74; }\n\n.modal-info .modal-content {\n  border-color: #63c2de; }\n\n.modal-info .modal-header {\n  color: #fff;\n  background-color: #63c2de; }\n\n.modal-warning .modal-content {\n  border-color: #f8cb00; }\n\n.modal-warning .modal-header {\n  color: #fff;\n  background-color: #f8cb00; }\n\n.modal-danger .modal-content {\n  border-color: #f86c6b; }\n\n.modal-danger .modal-header {\n  color: #fff;\n  background-color: #f86c6b; }\n\n.nav-tabs .nav-link, .nav-tabs .navbar .dropdown-toggle, .navbar .nav-tabs .dropdown-toggle {\n  color: #607d8b; }\n  .nav-tabs .nav-link.active, .nav-tabs .navbar .active.dropdown-toggle, .navbar .nav-tabs .active.dropdown-toggle {\n    color: #263238;\n    background: #fff;\n    border-color: #cfd8dc;\n    border-bottom-color: #fff; }\n    .nav-tabs .nav-link.active:focus, .nav-tabs .navbar .active.dropdown-toggle:focus, .navbar .nav-tabs .active.dropdown-toggle:focus {\n      background: #fff;\n      border-color: #cfd8dc;\n      border-bottom-color: #fff; }\n\n.tab-content {\n  margin-top: -1px;\n  background: #fff;\n  border: 1px solid #cfd8dc; }\n  .tab-content .tab-pane {\n    padding: 1rem; }\n\n.card-block .tab-content {\n  margin-top: 0;\n  border: 0; }\n\n.app-header.navbar {\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 55px;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  border-bottom: 1px solid #cfd8dc; }\n  .app-header.navbar .navbar-brand {\n    display: inline-block;\n    width: 155px;\n    height: 55px;\n    padding: 0.5rem 1rem;\n    margin-right: 0;\n    background-color: #fff;\n    background-image: url(" + __webpack_require__(220) + ");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 70px auto;\n    border-bottom: 1px solid #cfd8dc; }\n  .app-header.navbar .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .app-header.navbar .nav-item {\n    position: relative;\n    min-width: 50px;\n    margin: 0 !important;\n    text-align: center; }\n    .app-header.navbar .nav-item .nav-link, .app-header.navbar .nav-item .dropdown-toggle {\n      padding-top: 0;\n      padding-bottom: 0; }\n      .app-header.navbar .nav-item .nav-link .badge, .app-header.navbar .nav-item .dropdown-toggle .badge {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-top: -16px;\n        margin-left: 0; }\n      .app-header.navbar .nav-item .nav-link > .img-avatar, .app-header.navbar .nav-item .dropdown-toggle > .img-avatar {\n        height: 35px;\n        margin: 0 10px; }\n  .app-header.navbar .dropdown-menu {\n    padding-bottom: 0;\n    line-height: 1.5; }\n  .app-header.navbar .dropdown-item {\n    min-width: 180px; }\n\n.navbar-brand {\n  color: rgba(0, 0, 0, 0.8); }\n  .navbar-brand:focus, .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.8); }\n\n.navbar-nav .nav-link, .navbar-nav .navbar .dropdown-toggle, .navbar .navbar-nav .dropdown-toggle {\n  color: rgba(0, 0, 0, 0.3); }\n  .navbar-nav .nav-link:focus, .navbar-nav .navbar .dropdown-toggle:focus, .navbar .navbar-nav .dropdown-toggle:focus, .navbar-nav .nav-link:hover, .navbar-nav .navbar .dropdown-toggle:hover, .navbar .navbar-nav .dropdown-toggle:hover {\n    color: rgba(0, 0, 0, 0.6); }\n\n.navbar-nav .open > .nav-link, .navbar-nav .navbar .open > .dropdown-toggle, .navbar .navbar-nav .open > .dropdown-toggle, .navbar-nav .open > .nav-link:focus, .navbar-nav .navbar .open > .dropdown-toggle:focus, .navbar .navbar-nav .open > .dropdown-toggle:focus, .navbar-nav .open > .nav-link:hover, .navbar-nav .navbar .open > .dropdown-toggle:hover, .navbar .navbar-nav .open > .dropdown-toggle:hover,\n.navbar-nav .active > .nav-link,\n.navbar-nav .navbar .active > .dropdown-toggle, .navbar\n.navbar-nav .active > .dropdown-toggle,\n.navbar-nav .active > .nav-link:focus,\n.navbar-nav .navbar .active > .dropdown-toggle:focus, .navbar\n.navbar-nav .active > .dropdown-toggle:focus,\n.navbar-nav .active > .nav-link:hover,\n.navbar-nav .navbar .active > .dropdown-toggle:hover, .navbar\n.navbar-nav .active > .dropdown-toggle:hover,\n.navbar-nav .nav-link.open,\n.navbar-nav .navbar .open.dropdown-toggle, .navbar\n.navbar-nav .open.dropdown-toggle,\n.navbar-nav .nav-link.open:focus,\n.navbar-nav .navbar .open.dropdown-toggle:focus, .navbar\n.navbar-nav .open.dropdown-toggle:focus,\n.navbar-nav .nav-link.open:hover,\n.navbar-nav .navbar .open.dropdown-toggle:hover, .navbar\n.navbar-nav .open.dropdown-toggle:hover,\n.navbar-nav .nav-link.active,\n.navbar-nav .navbar .active.dropdown-toggle, .navbar\n.navbar-nav .active.dropdown-toggle,\n.navbar-nav .nav-link.active:focus,\n.navbar-nav .navbar .active.dropdown-toggle:focus, .navbar\n.navbar-nav .active.dropdown-toggle:focus,\n.navbar-nav .nav-link.active:hover,\n.navbar-nav .navbar .active.dropdown-toggle:hover, .navbar\n.navbar-nav .active.dropdown-toggle:hover {\n  color: rgba(0, 0, 0, 0.8); }\n\n.navbar-divider {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.progress-xs {\n  height: 4px; }\n\n.progress-sm {\n  height: 8px; }\n\n.progress-white {\n  background-color: rgba(255, 255, 255, 0.2) !important; }\n  .progress-white .progress-bar {\n    background-color: #fff; }\n\n.sidebar {\n  padding: 0;\n  overflow: hidden;\n  color: #fff;\n  background: #263238; }\n  .sidebar .sidebar-close {\n    position: absolute;\n    right: 0;\n    display: none;\n    padding: 0 1rem;\n    font-size: 24px;\n    font-weight: 800;\n    line-height: 55px;\n    color: #fff;\n    background: 0;\n    border: 0;\n    opacity: .8; }\n    .sidebar .sidebar-close:hover {\n      opacity: 1; }\n  .sidebar .sidebar-nav {\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    width: 200px; }\n    .sidebar .sidebar-nav::-webkit-scrollbar {\n      position: absolute;\n      width: 10px;\n      margin-left: -10px;\n      -webkit-appearance: none; }\n    .sidebar .sidebar-nav::-webkit-scrollbar-track {\n      background-color: #304047;\n      border-right: 1px solid #1c2429;\n      border-left: 1px solid #1c2429; }\n    .sidebar .sidebar-nav::-webkit-scrollbar-thumb {\n      height: 50px;\n      background-color: #11171a;\n      background-clip: content-box;\n      border-color: transparent;\n      border-style: solid;\n      border-width: 1px 2px; }\n  .sidebar .nav {\n    width: 200px;\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n    .sidebar .nav .nav-title {\n      padding: 0.75rem 1rem;\n      font-size: 11px;\n      font-weight: 600;\n      color: #cfd8dc;\n      text-transform: uppercase; }\n    .sidebar .nav .divider {\n      height: 10px; }\n    .sidebar .nav .nav-item {\n      position: relative;\n      margin: 0;\n      transition: background .3s ease-in-out; }\n      .sidebar .nav .nav-item ul {\n        max-height: 0;\n        padding: 0;\n        margin: 0;\n        overflow-y: hidden;\n        transition: max-height .3s ease-in-out; }\n        .sidebar .nav .nav-item ul li {\n          padding: 0;\n          list-style: none; }\n      .sidebar .nav .nav-item .nav-link, .sidebar .nav .nav-item .navbar .dropdown-toggle, .navbar .sidebar .nav .nav-item .dropdown-toggle {\n        display: block;\n        padding: 0.75rem 1rem;\n        color: #fff;\n        text-decoration: none;\n        background: transparent; }\n        .sidebar .nav .nav-item .nav-link:hover, .sidebar .nav .nav-item .navbar .dropdown-toggle:hover, .navbar .sidebar .nav .nav-item .dropdown-toggle:hover {\n          color: #fff !important;\n          background: #20a8d8 !important; }\n          .sidebar .nav .nav-item .nav-link:hover i, .sidebar .nav .nav-item .navbar .dropdown-toggle:hover i, .navbar .sidebar .nav .nav-item .dropdown-toggle:hover i {\n            color: #fff !important; }\n        .sidebar .nav .nav-item .nav-link.active, .sidebar .nav .nav-item .navbar .active.dropdown-toggle, .navbar .sidebar .nav .nav-item .active.dropdown-toggle {\n          color: #fff;\n          background: #304047; }\n          .sidebar .nav .nav-item .nav-link.active i, .sidebar .nav .nav-item .navbar .active.dropdown-toggle i, .navbar .sidebar .nav .nav-item .active.dropdown-toggle i {\n            color: #20a8d8; }\n        .sidebar .nav .nav-item .nav-link [class^=\"icon-\"], .sidebar .nav .nav-item .navbar .dropdown-toggle [class^=\"icon-\"], .navbar .sidebar .nav .nav-item .dropdown-toggle [class^=\"icon-\"], .sidebar .nav .nav-item .nav-link [class*=\" icon-\"], .sidebar .nav .nav-item .navbar .dropdown-toggle [class*=\" icon-\"], .navbar .sidebar .nav .nav-item .dropdown-toggle [class*=\" icon-\"] {\n          display: inline-block;\n          margin-top: -4px;\n          vertical-align: middle; }\n        .sidebar .nav .nav-item .nav-link i, .sidebar .nav .nav-item .navbar .dropdown-toggle i, .navbar .sidebar .nav .nav-item .dropdown-toggle i {\n          width: 20px;\n          margin: 0 0.5rem 0 0;\n          font-size: 14px;\n          color: #b0bec5;\n          text-align: center; }\n        .sidebar .nav .nav-item .nav-link .badge, .sidebar .nav .nav-item .navbar .dropdown-toggle .badge, .navbar .sidebar .nav .nav-item .dropdown-toggle .badge {\n          float: right;\n          margin-top: 2px; }\n        .sidebar .nav .nav-item .nav-link.nav-dropdown-toggle::before, .sidebar .nav .nav-item .navbar .nav-dropdown-toggle.dropdown-toggle::before, .navbar .sidebar .nav .nav-item .nav-dropdown-toggle.dropdown-toggle::before {\n          position: absolute;\n          top: 0.96875rem;\n          right: 1rem;\n          display: block;\n          width: 0.875rem;\n          height: 0.875rem;\n          padding: 0;\n          font-size: 0.875rem;\n          line-height: 0.65625rem;\n          text-align: center;\n          content: \"\\2039\";\n          transition: .3s; }\n      .sidebar .nav .nav-item.nav-dropdown.open {\n        background: rgba(0, 0, 0, 0.2); }\n        .sidebar .nav .nav-item.nav-dropdown.open > ul, .sidebar .nav .nav-item.nav-dropdown.open > ol {\n          max-height: 1000px; }\n        .sidebar .nav .nav-item.nav-dropdown.open .nav-link, .sidebar .nav .nav-item.nav-dropdown.open .navbar .dropdown-toggle, .navbar .sidebar .nav .nav-item.nav-dropdown.open .dropdown-toggle {\n          color: #fff;\n          border-left: 0 !important; }\n        .sidebar .nav .nav-item.nav-dropdown.open > .nav-link.nav-dropdown-toggle::before, .sidebar .nav .navbar .nav-item.nav-dropdown.open > .nav-dropdown-toggle.dropdown-toggle::before, .navbar .sidebar .nav .nav-item.nav-dropdown.open > .nav-dropdown-toggle.dropdown-toggle::before {\n          -webkit-transform: rotate(-90deg);\n                  transform: rotate(-90deg); }\n        .sidebar .nav .nav-item.nav-dropdown.open .nav-dropdown.open {\n          border-left: 0; }\n      .sidebar .nav .nav-item.nav-dropdown.nt {\n        transition: 0s !important; }\n        .sidebar .nav .nav-item.nav-dropdown.nt > ul, .sidebar .nav .nav-item.nav-dropdown.nt > ol {\n          transition: 0s !important; }\n        .sidebar .nav .nav-item.nav-dropdown.nt .nav-link.nav-dropdown-toggle::before, .sidebar .nav .nav-item.nav-dropdown.nt .navbar .nav-dropdown-toggle.dropdown-toggle::before, .navbar .sidebar .nav .nav-item.nav-dropdown.nt .nav-dropdown-toggle.dropdown-toggle::before {\n          transition: 0s !important; }\n      .sidebar .nav .nav-item .nav-label {\n        display: block;\n        padding: 0.09375rem 1rem;\n        color: #cfd8dc; }\n        .sidebar .nav .nav-item .nav-label:hover {\n          color: #fff;\n          text-decoration: none; }\n        .sidebar .nav .nav-item .nav-label i {\n          width: 20px;\n          margin: -3px 0.5rem 0 0;\n          font-size: 10px;\n          color: #b0bec5;\n          text-align: center;\n          vertical-align: middle; }\n      .sidebar .nav .nav-item .progress {\n        background-color: #455b66 !important; }\n\n@media (min-width: 992px) {\n  .sidebar-compact .sidebar .sidebar-nav {\n    width: 150px; }\n  .sidebar-compact .sidebar .nav {\n    width: 150px; }\n    .sidebar-compact .sidebar .nav .nav-title {\n      text-align: center; }\n    .sidebar-compact .sidebar .nav .nav-item {\n      width: 150px;\n      border-left: 0 !important; }\n      .sidebar-compact .sidebar .nav .nav-item .nav-link, .sidebar-compact .sidebar .nav .nav-item .navbar .dropdown-toggle, .navbar .sidebar-compact .sidebar .nav .nav-item .dropdown-toggle {\n        text-align: center; }\n        .sidebar-compact .sidebar .nav .nav-item .nav-link i, .sidebar-compact .sidebar .nav .nav-item .navbar .dropdown-toggle i, .navbar .sidebar-compact .sidebar .nav .nav-item .dropdown-toggle i {\n          display: block;\n          width: 100%;\n          margin: 0.25rem 0;\n          font-size: 24px; }\n        .sidebar-compact .sidebar .nav .nav-item .nav-link .badge, .sidebar-compact .sidebar .nav .nav-item .navbar .dropdown-toggle .badge, .navbar .sidebar-compact .sidebar .nav .nav-item .dropdown-toggle .badge {\n          position: absolute;\n          top: 18px;\n          right: 10px; }\n        .sidebar-compact .sidebar .nav .nav-item .nav-link.nav-dropdown-toggle::before, .sidebar-compact .sidebar .nav .nav-item .navbar .nav-dropdown-toggle.dropdown-toggle::before, .navbar .sidebar-compact .sidebar .nav .nav-item .nav-dropdown-toggle.dropdown-toggle::before {\n          top: 30px; }\n  .sidebar-minimized .hidden-cn {\n    display: none; }\n  .sidebar-minimized .sidebar {\n    z-index: 1019; }\n    .sidebar-minimized .sidebar:hover {\n      overflow: visible; }\n    .sidebar-minimized .sidebar .sidebar-nav {\n      overflow: visible;\n      width: 50px; }\n    .sidebar-minimized .sidebar .nav {\n      width: 50px; }\n      .sidebar-minimized .sidebar .nav .nav-title, .sidebar-minimized .sidebar .nav .divider {\n        display: none; }\n      .sidebar-minimized .sidebar .nav .nav-item {\n        width: 50px;\n        overflow: hidden;\n        border-left: 0 !important; }\n        .sidebar-minimized .sidebar .nav .nav-item ul {\n          background: #263238; }\n        .sidebar-minimized .sidebar .nav .nav-item .nav-link, .sidebar-minimized .sidebar .nav .nav-item .navbar .dropdown-toggle, .navbar .sidebar-minimized .sidebar .nav .nav-item .dropdown-toggle {\n          position: relative;\n          padding-left: 0;\n          margin: 0;\n          white-space: nowrap;\n          border-left: 0 !important; }\n          .sidebar-minimized .sidebar .nav .nav-item .nav-link.nav-dropdown-toggle::before, .sidebar-minimized .sidebar .nav .nav-item .navbar .nav-dropdown-toggle.dropdown-toggle::before, .navbar .sidebar-minimized .sidebar .nav .nav-item .nav-dropdown-toggle.dropdown-toggle::before {\n            display: none; }\n          .sidebar-minimized .sidebar .nav .nav-item .nav-link i, .sidebar-minimized .sidebar .nav .nav-item .navbar .dropdown-toggle i, .navbar .sidebar-minimized .sidebar .nav .nav-item .dropdown-toggle i {\n            display: block;\n            float: left;\n            width: 50px;\n            padding: 0;\n            margin: 0 !important;\n            font-size: 18px; }\n          .sidebar-minimized .sidebar .nav .nav-item .nav-link .badge, .sidebar-minimized .sidebar .nav .nav-item .navbar .dropdown-toggle .badge, .navbar .sidebar-minimized .sidebar .nav .nav-item .dropdown-toggle .badge {\n            position: absolute;\n            right: 15px;\n            display: none; }\n          .sidebar-minimized .sidebar .nav .nav-item .nav-link:hover, .sidebar-minimized .sidebar .nav .nav-item .navbar .dropdown-toggle:hover, .navbar .sidebar-minimized .sidebar .nav .nav-item .dropdown-toggle:hover {\n            width: 200px; }\n            .sidebar-minimized .sidebar .nav .nav-item .nav-link:hover .badge, .sidebar-minimized .sidebar .nav .nav-item .navbar .dropdown-toggle:hover .badge, .navbar .sidebar-minimized .sidebar .nav .nav-item .dropdown-toggle:hover .badge {\n              display: inline; }\n        .sidebar-minimized .sidebar .nav .nav-item ul {\n          position: absolute;\n          left: 50px; }\n          .sidebar-minimized .sidebar .nav .nav-item ul li {\n            position: relative;\n            padding: 0; }\n            .sidebar-minimized .sidebar .nav .nav-item ul li .nav-link, .sidebar-minimized .sidebar .nav .nav-item ul li .navbar .dropdown-toggle, .navbar .sidebar-minimized .sidebar .nav .nav-item ul li .dropdown-toggle {\n              width: 150px; }\n            .sidebar-minimized .sidebar .nav .nav-item ul li ul, .sidebar-minimized .sidebar .nav .nav-item ul li ol {\n              position: absolute;\n              top: 0;\n              left: 100%; }\n        .sidebar-minimized .sidebar .nav .nav-item.nav-dropdown.open {\n          background: #304047; }\n          .sidebar-minimized .sidebar .nav .nav-item.nav-dropdown.open > .nav-link i, .sidebar-minimized .sidebar .nav .navbar .nav-item.nav-dropdown.open > .dropdown-toggle i, .navbar .sidebar-minimized .sidebar .nav .nav-item.nav-dropdown.open > .dropdown-toggle i {\n            color: #20a8d8; }\n          .sidebar-minimized .sidebar .nav .nav-item.nav-dropdown.open > ul, .sidebar-minimized .sidebar .nav .nav-item.nav-dropdown.open > ol {\n            display: none; }\n        .sidebar-minimized .sidebar .nav .nav-item:hover {\n          width: 250px;\n          overflow: visible;\n          background: #20a8d8;\n          transition: 0s; }\n          .sidebar-minimized .sidebar .nav .nav-item:hover > .nav-link, .sidebar-minimized .sidebar .nav .navbar .nav-item:hover > .dropdown-toggle, .navbar .sidebar-minimized .sidebar .nav .nav-item:hover > .dropdown-toggle {\n            width: 250px; }\n          .sidebar-minimized .sidebar .nav .nav-item:hover > ul, .sidebar-minimized .sidebar .nav .nav-item:hover > ol {\n            display: inline;\n            max-height: 10000px;\n            transition: 0s; }\n            .sidebar-minimized .sidebar .nav .nav-item:hover > ul li, .sidebar-minimized .sidebar .nav .nav-item:hover > ol li {\n              width: 200px; }\n              .sidebar-minimized .sidebar .nav .nav-item:hover > ul li .nav-link, .sidebar-minimized .sidebar .nav .nav-item:hover > ul li .navbar .dropdown-toggle, .navbar .sidebar-minimized .sidebar .nav .nav-item:hover > ul li .dropdown-toggle, .sidebar-minimized .sidebar .nav .nav-item:hover > ol li .nav-link, .sidebar-minimized .sidebar .nav .nav-item:hover > ol li .navbar .dropdown-toggle, .navbar .sidebar-minimized .sidebar .nav .nav-item:hover > ol li .dropdown-toggle {\n                width: 200px; }\n          .sidebar-minimized .sidebar .nav .nav-item:hover.nav-dropdown.open > ul, .sidebar-minimized .sidebar .nav .nav-item:hover.nav-dropdown.open > ol {\n            display: inline; } }\n\n.switch.switch-default {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 40px;\n  height: 24px;\n  background-color: transparent;\n  cursor: pointer; }\n  .switch.switch-default .switch-input {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0; }\n  .switch.switch-default .switch-label {\n    position: relative;\n    display: block;\n    height: inherit;\n    font-size: 10px;\n    font-weight: 600;\n    text-transform: uppercase;\n    background-color: #fff;\n    border: 1px solid #cfd8dc;\n    border-radius: 2px;\n    transition: opacity background .15s ease-out; }\n  .switch.switch-default .switch-input:checked ~ .switch-label::before {\n    opacity: 0; }\n  .switch.switch-default .switch-input:checked ~ .switch-label::after {\n    opacity: 1; }\n  .switch.switch-default .switch-handle {\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 20px;\n    height: 20px;\n    background: #fff;\n    border: 1px solid #cfd8dc;\n    border-radius: 1px;\n    transition: left .15s ease-out; }\n  .switch.switch-default .switch-input:checked ~ .switch-handle {\n    left: 18px; }\n  .switch.switch-default.switch-lg {\n    width: 48px;\n    height: 28px; }\n    .switch.switch-default.switch-lg .switch-label {\n      font-size: 12px; }\n    .switch.switch-default.switch-lg .switch-handle {\n      width: 24px;\n      height: 24px; }\n    .switch.switch-default.switch-lg .switch-input:checked ~ .switch-handle {\n      left: 22px; }\n  .switch.switch-default.switch-sm {\n    width: 32px;\n    height: 20px; }\n    .switch.switch-default.switch-sm .switch-label {\n      font-size: 8px; }\n    .switch.switch-default.switch-sm .switch-handle {\n      width: 16px;\n      height: 16px; }\n    .switch.switch-default.switch-sm .switch-input:checked ~ .switch-handle {\n      left: 14px; }\n  .switch.switch-default.switch-xs {\n    width: 24px;\n    height: 16px; }\n    .switch.switch-default.switch-xs .switch-label {\n      font-size: 7px; }\n    .switch.switch-default.switch-xs .switch-handle {\n      width: 12px;\n      height: 12px; }\n    .switch.switch-default.switch-xs .switch-input:checked ~ .switch-handle {\n      left: 10px; }\n\n.switch.switch-text {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 48px;\n  height: 24px;\n  background-color: transparent;\n  cursor: pointer; }\n  .switch.switch-text .switch-input {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0; }\n  .switch.switch-text .switch-label {\n    position: relative;\n    display: block;\n    height: inherit;\n    font-size: 10px;\n    font-weight: 600;\n    text-transform: uppercase;\n    background-color: #fff;\n    border: 1px solid #cfd8dc;\n    border-radius: 2px;\n    transition: opacity background .15s ease-out; }\n  .switch.switch-text .switch-label::before,\n  .switch.switch-text .switch-label::after {\n    position: absolute;\n    top: 50%;\n    width: 50%;\n    margin-top: -.5em;\n    line-height: 1;\n    text-align: center;\n    transition: inherit; }\n  .switch.switch-text .switch-label::before {\n    right: 1px;\n    color: #cfd8dc;\n    content: attr(data-off); }\n  .switch.switch-text .switch-label::after {\n    left: 1px;\n    color: #fff;\n    content: attr(data-on);\n    opacity: 0; }\n  .switch.switch-text .switch-input:checked ~ .switch-label::before {\n    opacity: 0; }\n  .switch.switch-text .switch-input:checked ~ .switch-label::after {\n    opacity: 1; }\n  .switch.switch-text .switch-handle {\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 20px;\n    height: 20px;\n    background: #fff;\n    border: 1px solid #cfd8dc;\n    border-radius: 1px;\n    transition: left .15s ease-out; }\n  .switch.switch-text .switch-input:checked ~ .switch-handle {\n    left: 26px; }\n  .switch.switch-text.switch-lg {\n    width: 56px;\n    height: 28px; }\n    .switch.switch-text.switch-lg .switch-label {\n      font-size: 12px; }\n    .switch.switch-text.switch-lg .switch-handle {\n      width: 24px;\n      height: 24px; }\n    .switch.switch-text.switch-lg .switch-input:checked ~ .switch-handle {\n      left: 30px; }\n  .switch.switch-text.switch-sm {\n    width: 40px;\n    height: 20px; }\n    .switch.switch-text.switch-sm .switch-label {\n      font-size: 8px; }\n    .switch.switch-text.switch-sm .switch-handle {\n      width: 16px;\n      height: 16px; }\n    .switch.switch-text.switch-sm .switch-input:checked ~ .switch-handle {\n      left: 22px; }\n  .switch.switch-text.switch-xs {\n    width: 32px;\n    height: 16px; }\n    .switch.switch-text.switch-xs .switch-label {\n      font-size: 7px; }\n    .switch.switch-text.switch-xs .switch-handle {\n      width: 12px;\n      height: 12px; }\n    .switch.switch-text.switch-xs .switch-input:checked ~ .switch-handle {\n      left: 18px; }\n\n.switch.switch-icon {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 48px;\n  height: 24px;\n  background-color: transparent;\n  cursor: pointer; }\n  .switch.switch-icon .switch-input {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0; }\n  .switch.switch-icon .switch-label {\n    position: relative;\n    display: block;\n    height: inherit;\n    font-family: FontAwesome;\n    font-size: 10px;\n    font-weight: 600;\n    text-transform: uppercase;\n    background-color: #fff;\n    border: 1px solid #cfd8dc;\n    border-radius: 2px;\n    transition: opacity background .15s ease-out; }\n  .switch.switch-icon .switch-label::before,\n  .switch.switch-icon .switch-label::after {\n    position: absolute;\n    top: 50%;\n    width: 50%;\n    margin-top: -.5em;\n    line-height: 1;\n    text-align: center;\n    transition: inherit; }\n  .switch.switch-icon .switch-label::before {\n    right: 1px;\n    color: #cfd8dc;\n    content: attr(data-off); }\n  .switch.switch-icon .switch-label::after {\n    left: 1px;\n    color: #fff;\n    content: attr(data-on);\n    opacity: 0; }\n  .switch.switch-icon .switch-input:checked ~ .switch-label::before {\n    opacity: 0; }\n  .switch.switch-icon .switch-input:checked ~ .switch-label::after {\n    opacity: 1; }\n  .switch.switch-icon .switch-handle {\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 20px;\n    height: 20px;\n    background: #fff;\n    border: 1px solid #cfd8dc;\n    border-radius: 1px;\n    transition: left .15s ease-out; }\n  .switch.switch-icon .switch-input:checked ~ .switch-handle {\n    left: 26px; }\n  .switch.switch-icon.switch-lg {\n    width: 56px;\n    height: 28px; }\n    .switch.switch-icon.switch-lg .switch-label {\n      font-size: 12px; }\n    .switch.switch-icon.switch-lg .switch-handle {\n      width: 24px;\n      height: 24px; }\n    .switch.switch-icon.switch-lg .switch-input:checked ~ .switch-handle {\n      left: 30px; }\n  .switch.switch-icon.switch-sm {\n    width: 40px;\n    height: 20px; }\n    .switch.switch-icon.switch-sm .switch-label {\n      font-size: 8px; }\n    .switch.switch-icon.switch-sm .switch-handle {\n      width: 16px;\n      height: 16px; }\n    .switch.switch-icon.switch-sm .switch-input:checked ~ .switch-handle {\n      left: 22px; }\n  .switch.switch-icon.switch-xs {\n    width: 32px;\n    height: 16px; }\n    .switch.switch-icon.switch-xs .switch-label {\n      font-size: 7px; }\n    .switch.switch-icon.switch-xs .switch-handle {\n      width: 12px;\n      height: 12px; }\n    .switch.switch-icon.switch-xs .switch-input:checked ~ .switch-handle {\n      left: 18px; }\n\n.switch.switch-3d {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 40px;\n  height: 24px;\n  background-color: transparent;\n  cursor: pointer; }\n  .switch.switch-3d .switch-input {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0; }\n  .switch.switch-3d .switch-label {\n    position: relative;\n    display: block;\n    height: inherit;\n    font-size: 10px;\n    font-weight: 600;\n    text-transform: uppercase;\n    background-color: #eceff1;\n    border: 1px solid #cfd8dc;\n    border-radius: 2px;\n    transition: opacity background .15s ease-out; }\n  .switch.switch-3d .switch-input:checked ~ .switch-label::before {\n    opacity: 0; }\n  .switch.switch-3d .switch-input:checked ~ .switch-label::after {\n    opacity: 1; }\n  .switch.switch-3d .switch-handle {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 24px;\n    height: 24px;\n    background: #fff;\n    border: 1px solid #cfd8dc;\n    border-radius: 1px;\n    transition: left .15s ease-out;\n    border: 0;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); }\n  .switch.switch-3d .switch-input:checked ~ .switch-handle {\n    left: 16px; }\n  .switch.switch-3d.switch-lg {\n    width: 48px;\n    height: 28px; }\n    .switch.switch-3d.switch-lg .switch-label {\n      font-size: 12px; }\n    .switch.switch-3d.switch-lg .switch-handle {\n      width: 28px;\n      height: 28px; }\n    .switch.switch-3d.switch-lg .switch-input:checked ~ .switch-handle {\n      left: 20px; }\n  .switch.switch-3d.switch-sm {\n    width: 32px;\n    height: 20px; }\n    .switch.switch-3d.switch-sm .switch-label {\n      font-size: 8px; }\n    .switch.switch-3d.switch-sm .switch-handle {\n      width: 20px;\n      height: 20px; }\n    .switch.switch-3d.switch-sm .switch-input:checked ~ .switch-handle {\n      left: 12px; }\n  .switch.switch-3d.switch-xs {\n    width: 24px;\n    height: 16px; }\n    .switch.switch-3d.switch-xs .switch-label {\n      font-size: 7px; }\n    .switch.switch-3d.switch-xs .switch-handle {\n      width: 16px;\n      height: 16px; }\n    .switch.switch-3d.switch-xs .switch-input:checked ~ .switch-handle {\n      left: 8px; }\n\n.switch-pill .switch-label, .switch.switch-3d .switch-label,\n.switch-pill .switch-handle, .switch.switch-3d .switch-handle {\n  border-radius: 50em !important; }\n\n.switch-pill .switch-label::before, .switch.switch-3d .switch-label::before {\n  right: 2px !important; }\n\n.switch-pill .switch-label::after, .switch.switch-3d .switch-label::after {\n  left: 2px !important; }\n\n.switch-primary > .switch-input:checked ~ .switch-label {\n  background: #20a8d8 !important;\n  border-color: #1985ac; }\n\n.switch-primary > .switch-input:checked ~ .switch-handle {\n  border-color: #1985ac; }\n\n.switch-primary-outline > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #20a8d8; }\n  .switch-primary-outline > .switch-input:checked ~ .switch-label::after {\n    color: #20a8d8; }\n\n.switch-primary-outline > .switch-input:checked ~ .switch-handle {\n  border-color: #20a8d8; }\n\n.switch-primary-outline-alt > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #20a8d8; }\n  .switch-primary-outline-alt > .switch-input:checked ~ .switch-label::after {\n    color: #20a8d8; }\n\n.switch-primary-outline-alt > .switch-input:checked ~ .switch-handle {\n  background: #20a8d8 !important;\n  border-color: #20a8d8; }\n\n.switch-secondary > .switch-input:checked ~ .switch-label {\n  background: #cfd8dc !important;\n  border-color: #b2c0c6; }\n\n.switch-secondary > .switch-input:checked ~ .switch-handle {\n  border-color: #b2c0c6; }\n\n.switch-secondary-outline > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #cfd8dc; }\n  .switch-secondary-outline > .switch-input:checked ~ .switch-label::after {\n    color: #cfd8dc; }\n\n.switch-secondary-outline > .switch-input:checked ~ .switch-handle {\n  border-color: #cfd8dc; }\n\n.switch-secondary-outline-alt > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #cfd8dc; }\n  .switch-secondary-outline-alt > .switch-input:checked ~ .switch-label::after {\n    color: #cfd8dc; }\n\n.switch-secondary-outline-alt > .switch-input:checked ~ .switch-handle {\n  background: #cfd8dc !important;\n  border-color: #cfd8dc; }\n\n.switch-success > .switch-input:checked ~ .switch-label {\n  background: #4dbd74 !important;\n  border-color: #3a9d5d; }\n\n.switch-success > .switch-input:checked ~ .switch-handle {\n  border-color: #3a9d5d; }\n\n.switch-success-outline > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #4dbd74; }\n  .switch-success-outline > .switch-input:checked ~ .switch-label::after {\n    color: #4dbd74; }\n\n.switch-success-outline > .switch-input:checked ~ .switch-handle {\n  border-color: #4dbd74; }\n\n.switch-success-outline-alt > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #4dbd74; }\n  .switch-success-outline-alt > .switch-input:checked ~ .switch-label::after {\n    color: #4dbd74; }\n\n.switch-success-outline-alt > .switch-input:checked ~ .switch-handle {\n  background: #4dbd74 !important;\n  border-color: #4dbd74; }\n\n.switch-info > .switch-input:checked ~ .switch-label {\n  background: #63c2de !important;\n  border-color: #39b2d5; }\n\n.switch-info > .switch-input:checked ~ .switch-handle {\n  border-color: #39b2d5; }\n\n.switch-info-outline > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #63c2de; }\n  .switch-info-outline > .switch-input:checked ~ .switch-label::after {\n    color: #63c2de; }\n\n.switch-info-outline > .switch-input:checked ~ .switch-handle {\n  border-color: #63c2de; }\n\n.switch-info-outline-alt > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #63c2de; }\n  .switch-info-outline-alt > .switch-input:checked ~ .switch-label::after {\n    color: #63c2de; }\n\n.switch-info-outline-alt > .switch-input:checked ~ .switch-handle {\n  background: #63c2de !important;\n  border-color: #63c2de; }\n\n.switch-warning > .switch-input:checked ~ .switch-label {\n  background: #f8cb00 !important;\n  border-color: #c5a100; }\n\n.switch-warning > .switch-input:checked ~ .switch-handle {\n  border-color: #c5a100; }\n\n.switch-warning-outline > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #f8cb00; }\n  .switch-warning-outline > .switch-input:checked ~ .switch-label::after {\n    color: #f8cb00; }\n\n.switch-warning-outline > .switch-input:checked ~ .switch-handle {\n  border-color: #f8cb00; }\n\n.switch-warning-outline-alt > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #f8cb00; }\n  .switch-warning-outline-alt > .switch-input:checked ~ .switch-label::after {\n    color: #f8cb00; }\n\n.switch-warning-outline-alt > .switch-input:checked ~ .switch-handle {\n  background: #f8cb00 !important;\n  border-color: #f8cb00; }\n\n.switch-danger > .switch-input:checked ~ .switch-label {\n  background: #f86c6b !important;\n  border-color: #f63c3a; }\n\n.switch-danger > .switch-input:checked ~ .switch-handle {\n  border-color: #f63c3a; }\n\n.switch-danger-outline > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #f86c6b; }\n  .switch-danger-outline > .switch-input:checked ~ .switch-label::after {\n    color: #f86c6b; }\n\n.switch-danger-outline > .switch-input:checked ~ .switch-handle {\n  border-color: #f86c6b; }\n\n.switch-danger-outline-alt > .switch-input:checked ~ .switch-label {\n  background: #fff !important;\n  border-color: #f86c6b; }\n  .switch-danger-outline-alt > .switch-input:checked ~ .switch-label::after {\n    color: #f86c6b; }\n\n.switch-danger-outline-alt > .switch-input:checked ~ .switch-handle {\n  background: #f86c6b !important;\n  border-color: #f86c6b; }\n\n.table-outline {\n  border: 1px solid #cfd8dc; }\n  .table-outline td {\n    vertical-align: middle; }\n\n.table-align-middle td {\n  vertical-align: middle; }\n\n.table-clear td {\n  border: 0; }\n\n.social-box {\n  min-height: 160px;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  background: #fff;\n  border: 1px solid #cfd8dc; }\n  .social-box i {\n    display: block;\n    margin: -1px -1px 0;\n    font-size: 40px;\n    line-height: 90px;\n    background: #cfd8dc; }\n  .social-box .chart-wrapper {\n    height: 90px;\n    margin: -90px 0 0; }\n    .social-box .chart-wrapper canvas {\n      width: 100% !important;\n      height: 90px !important; }\n  .social-box ul {\n    padding: 10px 0;\n    list-style: none; }\n    .social-box ul li {\n      display: block;\n      float: left;\n      width: 50%; }\n      .social-box ul li:first-child {\n        border-right: 1px solid #cfd8dc; }\n      .social-box ul li strong {\n        display: block;\n        font-size: 20px; }\n      .social-box ul li span {\n        font-size: 10px;\n        font-weight: 500;\n        color: #cfd8dc;\n        text-transform: uppercase; }\n  .social-box.facebook i {\n    color: #fff;\n    background: #3b5998; }\n  .social-box.twitter i {\n    color: #fff;\n    background: #00aced; }\n  .social-box.linkedin i {\n    color: #fff;\n    background: #4875b4; }\n  .social-box.google-plus i {\n    color: #fff;\n    background: #bb4b39; }\n\n.horizontal-bars {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n  .horizontal-bars li {\n    position: relative;\n    height: 40px;\n    line-height: 40px;\n    vertical-align: middle; }\n    .horizontal-bars li .title {\n      width: 100px;\n      font-size: 12px;\n      font-weight: 600;\n      color: #b0bec5;\n      vertical-align: middle; }\n    .horizontal-bars li .bars {\n      position: absolute;\n      top: 15px;\n      width: 100%;\n      padding-left: 100px; }\n      .horizontal-bars li .bars .progress:first-child {\n        margin-bottom: 2px; }\n    .horizontal-bars li.legend {\n      text-align: center; }\n      .horizontal-bars li.legend .badge {\n        display: inline-block;\n        width: 8px;\n        height: 8px;\n        padding: 0; }\n    .horizontal-bars li.divider {\n      height: 40px; }\n      .horizontal-bars li.divider i {\n        margin: 0 !important; }\n  .horizontal-bars.type-2 li {\n    overflow: hidden; }\n    .horizontal-bars.type-2 li i {\n      display: inline-block;\n      margin-right: 1rem;\n      margin-left: 5px;\n      font-size: 18px;\n      line-height: 40px; }\n    .horizontal-bars.type-2 li .title {\n      display: inline-block;\n      width: auto;\n      margin-top: -9px;\n      font-size: 0.875rem;\n      font-weight: normal;\n      line-height: 40px;\n      color: #263238; }\n    .horizontal-bars.type-2 li .value {\n      float: right;\n      font-weight: 600; }\n    .horizontal-bars.type-2 li .bars {\n      position: absolute;\n      top: auto;\n      bottom: 0;\n      padding: 0; }\n\n.icons-list {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n  .icons-list li {\n    position: relative;\n    height: 40px;\n    vertical-align: middle; }\n    .icons-list li i {\n      display: block;\n      float: left;\n      width: 35px !important;\n      height: 35px !important;\n      margin: 2px;\n      line-height: 35px !important;\n      text-align: center; }\n    .icons-list li .desc {\n      height: 40px;\n      margin-left: 50px;\n      border-bottom: 1px solid #cfd8dc; }\n      .icons-list li .desc .title {\n        padding: 2px 0 0;\n        margin: 0; }\n      .icons-list li .desc small {\n        display: block;\n        margin-top: -4px;\n        color: #b0bec5; }\n    .icons-list li .value {\n      position: absolute;\n      top: 2px;\n      right: 45px;\n      text-align: right; }\n      .icons-list li .value strong {\n        display: block;\n        margin-top: -3px; }\n    .icons-list li .actions {\n      position: absolute;\n      top: -4px;\n      right: 10px;\n      width: 40px;\n      height: 40px;\n      line-height: 40px;\n      text-align: center; }\n      .icons-list li .actions i {\n        float: none;\n        width: auto;\n        height: auto;\n        padding: 0;\n        margin: 0;\n        line-height: normal; }\n    .icons-list li.divider {\n      height: 40px; }\n      .icons-list li.divider i {\n        width: auto;\n        height: auto;\n        margin: 2px 0 0;\n        font-size: 18px; }\n\n@media all and (-ms-high-contrast: none) {\n  html {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; } }\n\n.app,\napp-dashboard,\napp-root {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh; }\n\n.app-header {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 55px;\n          flex: 0 0 55px; }\n\n.app-footer {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50px;\n          flex: 0 0 50px; }\n\n.app-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  overflow-x: hidden; }\n  .app-body .main {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    min-width: 0; }\n  .app-body .sidebar {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 200px;\n            flex: 0 0 200px;\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .app-body .aside-menu {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 250px;\n            flex: 0 0 250px; }\n\n.header-fixed .app-header {\n  position: fixed;\n  z-index: 1020;\n  width: 100%; }\n\n.header-fixed .app-body {\n  margin-top: 55px; }\n\n.sidebar-hidden .sidebar {\n  margin-left: -200px; }\n\n.sidebar-fixed .sidebar {\n  position: fixed;\n  width: 200px;\n  height: 100%; }\n  .sidebar-fixed .sidebar .sidebar-nav {\n    height: calc(100vh - 55px); }\n\n.sidebar-fixed .main, .sidebar-fixed .app-footer {\n  margin-left: 200px; }\n\n.sidebar-fixed.sidebar-hidden .main, .sidebar-fixed.sidebar-hidden .app-footer {\n  margin-left: 0; }\n\n.sidebar-off-canvas .sidebar {\n  position: fixed;\n  z-index: 1019;\n  height: 100%; }\n  .sidebar-off-canvas .sidebar .sidebar-nav {\n    height: calc(100vh - 55px); }\n\n@media (min-width: 992px) {\n  .sidebar-compact .sidebar {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 150px;\n            flex: 0 0 150px; }\n  .sidebar-compact.sidebar-hidden .sidebar {\n    margin-left: -150px; }\n  .sidebar-compact.sidebar-fixed .main, .sidebar-compact.sidebar-fixed .app-footer {\n    margin-left: 150px; }\n  .sidebar-compact.sidebar-fixed .sidebar {\n    width: 150px; }\n  .sidebar-compact.sidebar-fixed.sidebar-hidden .main, .sidebar-compact.sidebar-fixed.sidebar-hidden .app-footer {\n    margin-left: 0; }\n  .sidebar-minimized .sidebar {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50px;\n            flex: 0 0 50px; }\n  .sidebar-minimized.sidebar-hidden .sidebar {\n    margin-left: -50px; }\n  .sidebar-minimized.sidebar-fixed .main, .sidebar-minimized.sidebar-fixed .app-footer {\n    margin-left: 50px; }\n  .sidebar-minimized.sidebar-fixed .sidebar {\n    width: 50px; }\n  .sidebar-minimized.sidebar-fixed.sidebar-hidden .main, .sidebar-minimized.sidebar-fixed.sidebar-hidden .app-footer {\n    margin-left: 0; } }\n\n.aside-menu-hidden .aside-menu {\n  margin-right: -250px; }\n\n.aside-menu-fixed .aside-menu {\n  position: fixed;\n  right: 0;\n  height: 100%; }\n  .aside-menu-fixed .aside-menu .tab-content {\n    height: calc(100vh - 2.375rem - 55px); }\n\n.aside-menu-fixed .main, .aside-menu-fixed .app-footer {\n  margin-right: 250px; }\n\n.aside-menu-fixed.aside-menu-hidden .main, .aside-menu-fixed.aside-menu-hidden .app-footer {\n  margin-right: 0; }\n\n.aside-menu-off-canvas .aside-menu {\n  position: fixed;\n  right: 0;\n  z-index: 1019;\n  height: 100%; }\n  .aside-menu-off-canvas .aside-menu .tab-content {\n    height: calc(100vh - 2.375rem - 55px); }\n\n.footer-fixed .app-footer {\n  position: fixed;\n  bottom: 0;\n  z-index: 1020;\n  width: 100%; }\n\n.footer-fixed .app-body {\n  margin-bottom: 50px; }\n\n.app-header,\n.app-footer,\n.sidebar,\n.main,\n.aside-menu {\n  transition: margin-left 0.25s, margin-right 0.25s, width 0.25s, -webkit-box-flex 0.25s;\n  transition: margin-left 0.25s, margin-right 0.25s, width 0.25s, flex 0.25s;\n  transition: margin-left 0.25s, margin-right 0.25s, width 0.25s, flex 0.25s, -webkit-box-flex 0.25s, -ms-flex 0.25s; }\n\n@media (max-width: 991px) {\n  .app-header {\n    position: fixed !important;\n    z-index: 1020;\n    width: 100%; }\n    .app-header .navbar-toggler {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 70px;\n      height: inherit; }\n    .app-header .navbar-toggler {\n      color: rgba(0, 0, 0, 0.3); }\n    .app-header .navbar-brand {\n      width: 100% !important;\n      margin: 0 auto !important; }\n    .app-header .navbar-nav {\n      position: absolute;\n      top: 0;\n      right: 15px;\n      height: inherit; }\n  .app-body {\n    margin-top: 55px; }\n  .sidebar {\n    position: fixed;\n    width: 220px;\n    height: 100%;\n    margin-left: -220px; }\n    .sidebar .sidebar-nav,\n    .sidebar .nav {\n      width: 220px !important; }\n  .main, .app-footer {\n    margin-left: 0 !important; }\n  .aside-menu {\n    margin-right: -250px; }\n  .sidebar-mobile-show .sidebar {\n    width: 220px;\n    margin-left: 0; }\n    .sidebar-mobile-show .sidebar .sidebar-nav {\n      height: calc(100vh - 55px); }\n  .sidebar-mobile-show .main {\n    margin-right: -220px !important;\n    margin-left: 220px !important; } }\n\nhr.transparent {\n  border-top: 1px solid transparent; }\n\n.bg-primary,\n.bg-success,\n.bg-info,\n.bg-warning,\n.bg-danger,\n.bg-inverse {\n  color: #fff; }\n\n.b-a-0 {\n  border: 0 !important; }\n\n.b-t-0 {\n  border-top: 0 !important; }\n\n.b-r-0 {\n  border-right: 0 !important; }\n\n.b-b-0 {\n  border-bottom: 0 !important; }\n\n.b-l-0 {\n  border-left: 0 !important; }\n\n.b-a-1 {\n  border: 1px solid #cfd8dc !important; }\n\n.b-t-1 {\n  border-top: 1px solid #cfd8dc !important; }\n\n.b-r-1 {\n  border-right: 1px solid #cfd8dc !important; }\n\n.b-b-1 {\n  border-bottom: 1px solid #cfd8dc !important; }\n\n.b-l-1 {\n  border-left: 1px solid #cfd8dc !important; }\n\n.b-a-2 {\n  border: 2px solid #cfd8dc !important; }\n\n.b-t-2 {\n  border-top: 2px solid #cfd8dc !important; }\n\n.b-r-2 {\n  border-right: 2px solid #cfd8dc !important; }\n\n.b-b-2 {\n  border-bottom: 2px solid #cfd8dc !important; }\n\n.b-l-2 {\n  border-left: 2px solid #cfd8dc !important; }\n\n@media (max-width: 575px) {\n  .d-down-none {\n    display: none !important; } }\n\n@media (max-width: 767px) {\n  .d-sm-down-none {\n    display: none !important; } }\n\n@media (max-width: 991px) {\n  .d-md-down-none {\n    display: none !important; } }\n\n@media (max-width: 1199px) {\n  .d-lg-down-none {\n    display: none !important; } }\n\n.d-xl-down-none {\n  display: none !important; }\n\n.label-pill {\n  border-radius: 1rem !important; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.navbar .dropdown-toggle .img-avatar {\n  height: 35px;\n  margin: 0 10px; }\n\n*[dir=\"rtl\"] {\n  direction: rtl;\n  unicode-bidi: embed; }\n  *[dir=\"rtl\"] ul {\n    -webkit-padding-start: 0; }\n  *[dir=\"rtl\"] table tr th {\n    text-align: right; }\n  *[dir=\"rtl\"] .breadcrumb-item {\n    float: right; }\n  *[dir=\"rtl\"] .breadcrumb-menu {\n    right: auto;\n    left: 1rem; }\n  *[dir=\"rtl\"] .dropdown-item {\n    text-align: right; }\n    *[dir=\"rtl\"] .dropdown-item i {\n      margin-right: -10px;\n      margin-left: 10px; }\n    *[dir=\"rtl\"] .dropdown-item .badge {\n      right: auto;\n      left: 10px; }\n  *[dir=\"rtl\"] .sidebar-hidden .sidebar {\n    margin-right: -200px; }\n  *[dir=\"rtl\"] .sidebar-fixed .main, *[dir=\"rtl\"] .sidebar-fixed .app-footer {\n    margin-right: 200px; }\n  *[dir=\"rtl\"] .sidebar-fixed.sidebar-hidden .main, *[dir=\"rtl\"] .sidebar-fixed.sidebar-hidden .app-footer {\n    margin-right: 0; }\n  *[dir=\"rtl\"] .sidebar-minimized .sidebar {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50px;\n            flex: 0 0 50px; }\n  *[dir=\"rtl\"] .sidebar-minimized.sidebar-hidden .sidebar {\n    margin-left: -50px; }\n  *[dir=\"rtl\"] .sidebar-minimized.sidebar-fixed .main, *[dir=\"rtl\"] .sidebar-minimized.sidebar-fixed .app-footer {\n    margin-left: 50px; }\n  *[dir=\"rtl\"] .sidebar-minimized.sidebar-fixed.sidebar-hidden .main, *[dir=\"rtl\"] .sidebar-minimized.sidebar-fixed.sidebar-hidden .app-footer {\n    margin-left: 0; }\n  *[dir=\"rtl\"] .aside-menu-hidden .aside-menu {\n    margin-left: -250px; }\n  *[dir=\"rtl\"] .aside-menu-fixed .aside-menu {\n    right: auto;\n    left: 0; }\n  *[dir=\"rtl\"] .aside-menu-fixed .main, *[dir=\"rtl\"] .aside-menu-fixed .app-footer {\n    margin-left: 250px; }\n  *[dir=\"rtl\"] .aside-menu-fixed.aside-menu-hidden .main, *[dir=\"rtl\"] .aside-menu-fixed.aside-menu-hidden .app-footer {\n    margin-left: 0; }\n  *[dir=\"rtl\"] .aside-menu-off-canvas .aside-menu {\n    position: fixed;\n    right: 0;\n    z-index: 1019;\n    height: 100%; }\n    *[dir=\"rtl\"] .aside-menu-off-canvas .aside-menu .tab-content {\n      height: calc(100vh - 2.375rem - 55px); }\n  *[dir=\"rtl\"] .sidebar .sidebar-nav {\n    direction: ltr; }\n    *[dir=\"rtl\"] .sidebar .sidebar-nav * {\n      direction: rtl; }\n    *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .nav-link [class^=\"icon-\"], *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .navbar .dropdown-toggle [class^=\"icon-\"], .navbar *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .dropdown-toggle [class^=\"icon-\"], *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .nav-link [class*=\" icon-\"], *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .navbar .dropdown-toggle [class*=\" icon-\"], .navbar *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .dropdown-toggle [class*=\" icon-\"] {\n      margin-right: -4px; }\n    *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .nav-link .badge, *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .navbar .dropdown-toggle .badge, .navbar *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .dropdown-toggle .badge {\n      float: left;\n      margin-top: 2px; }\n    *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .nav-link.nav-dropdown-toggle::before, *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .navbar .nav-dropdown-toggle.dropdown-toggle::before, .navbar *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item .nav-dropdown-toggle.dropdown-toggle::before {\n      position: absolute;\n      right: auto !important;\n      left: 1rem; }\n    *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item.nav-dropdown.open > .nav-link.nav-dropdown-toggle::before, *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .navbar .nav-item.nav-dropdown.open > .nav-dropdown-toggle.dropdown-toggle::before, .navbar *[dir=\"rtl\"] .sidebar .sidebar-nav .nav .nav-item.nav-dropdown.open > .nav-dropdown-toggle.dropdown-toggle::before {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n  *[dir=\"rtl\"] .horizontal-bars li .bars {\n    padding-right: 100px;\n    padding-left: 0; }\n    *[dir=\"rtl\"] .horizontal-bars li .bars .progress:first-child {\n      margin-bottom: 2px; }\n  *[dir=\"rtl\"] .horizontal-bars.type-2 li i {\n    margin-right: 5px;\n    margin-left: 1rem; }\n  *[dir=\"rtl\"] .horizontal-bars.type-2 li .value {\n    float: left;\n    font-weight: 600; }\n  *[dir=\"rtl\"] .horizontal-bars.type-2 li .bars {\n    padding: 0; }\n  *[dir=\"rtl\"] .icons-list li {\n    position: relative;\n    height: 40px;\n    vertical-align: middle; }\n    *[dir=\"rtl\"] .icons-list li i {\n      float: right; }\n    *[dir=\"rtl\"] .icons-list li .desc {\n      margin-right: 50px;\n      margin-left: 0; }\n    *[dir=\"rtl\"] .icons-list li .value {\n      right: auto;\n      left: 45px;\n      text-align: left; }\n      *[dir=\"rtl\"] .icons-list li .value strong {\n        display: block;\n        margin-top: -3px; }\n    *[dir=\"rtl\"] .icons-list li .actions {\n      right: auto;\n      left: 10px; }\n  *[dir=\"rtl\"] .callout {\n    border: 0 solid #cfd8dc;\n    border-right-width: .25rem; }\n    *[dir=\"rtl\"] .callout .chart-wrapper {\n      left: 0;\n      float: left; }\n  *[dir=\"rtl\"] .callout-default {\n    border-right-color: #b0bec5; }\n  *[dir=\"rtl\"] .callout-primary {\n    border-right-color: #20a8d8; }\n  *[dir=\"rtl\"] .callout-info {\n    border-right-color: #63c2de; }\n  *[dir=\"rtl\"] .callout-warning {\n    border-right-color: #f8cb00; }\n  *[dir=\"rtl\"] .callout-danger {\n    border-right-color: #f86c6b; }\n  *[dir=\"rtl\"] .callout-success {\n    border-right-color: #4dbd74; }\n\n.table-col-button-icon {\n  width: 20px; }\n", ""]);

// exports


/***/ }),

/***/ 219:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA9CAYAAADoByY0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUDAzUWnzqLpwAAABBjYU52AAABGwAAARwAAAApAAAAAYMXeBsAABUfSURBVHja7Z15mBTVucZ/PQzIIoiMKBERuKAsgnoRAkbjRRETBUFMjIBgMDHXaDQBjF6Tq2KAEEmiCV7iEnAJCKKCCqIiEARNUJAlIAoiKpsyCgKyKAMz0/eP91Smp6eq69TSM8M8/T5PPzBd1aeqTn37953vJDoPmDoLWAEkyA7ygHbAL4Dd7zw/1Ou8VsB3gGNcjhUDnwArgULzdxQcC3QBugHHA6cBTYEdwEfAF8BS4B3g6xjnohbQGrgAaAGcCJwOHAY2ALuB9cAbwM4Q458EXALMBz4L8LvzzBzMMfeQg0E+Yo7fZfk6v0bEkQndzH0UIoJJRRIxWilikseAN833QdAE6AcMRQy5H9gGHAC2A7UR45wK3Ay8DzwBvGLOCYs8oAcwDDjfXGcrIsZCJJxam3N+bL6fC0wHNga4TjtgNPAB9gzSDXgEWAw8HeEZayTyMZojg2SPhM4DpoKddqoNHAJuAT5GROUgATREhDsQMchfgL8CRZa30hMxanskYf+IpPYWxHipc9IaOAO4GvgTMBgYi5gzKL6BtOdgYLMZbwUi/INp5zZFGuVi4Cpz/fuBacBXFtfKRxo4z+JczLUeQMw6jni1ZY1AflXfQBqKEXN85HF8FfAy8EPgf5AGeMJnzDxz/ijgXUR0y4GSDPfwgfm8BPwXcDeS5r8CngvwPO0QAbZF2vEpYG+G83eazz+BvyEtNho4E7jL57dB0RQYD9QBbgM+jXHsGoPqxiDgL/0OA5OB5kgyL0TmkReuQ9L/aeC3BLPtj5jxNyAC/7P53oZJ2gKPIgIchvyKINiMhMB7wG+AusCtwL5w01oOxwB3Isb7ERIcObggCIO0As6lzJdIIKnzOiKkykQSmI00w4XAVI/zLkXE9TSSwPtDXm87MBIxyHgUMFiW4fwCZBo1RAQYxjQDabnH0Pz+Hs33aLy1nw3ykGD5PjAcWBJhrBoPGwaphxzHnyH7PRUHkAN7F3JoKxMfIdv5Gx7HTzb3tQoYQ3jmcLATmVgzzLjXAF+6nJcArgfOMfMWljlSMQ1FvW4B/gEsiDDWEMQY9wGzYri3Gg0/c+Zs4Blkv+9DkmcQIo7BwJMo8vI8MAKZE5WFA4jovZ7hGkRUY1DYNg5sRWZaN6C/xzkdgJ8AU4B5MV23FHgImUIjUJg6DHqhd/ks8CDlgxM5uCATgzRAkY2+KPLSCzmcM5DD+hRyIi9GkvR3yASrLDRDWsItilWAol1ziUeCp2IhypEMM3OUDodxpsR83T0oateVcPN8BorcrUJmZy5iZYFMDPIT4JvImZuIex6gBIUrf4ps8tGIcCsD7RAjrHM51hM4BWm/uKVkERIO7VHOJBUnAJcju359Fp55Icrb9MU+lAsKaDyArIDbyCUDreE1yZ1RxGQjMAH/yMkaFFk6D8Xvs40myB5fiaR5OjoihzZIki0I3kPRtM4u99WC7Dm+e4F/IRPP1pxtjCyBpuidbs7SvdVIeDFIFySBp2GfQV4AbEK2f90I95QpQpNv7u0R9MLvpmKyrT4i3A0o2pQNbELM15rySdDOKML2dpauW4oy3k3M8/uhDmKKoUj7rMjSfdVY+EWxgtTz7EHZ3mMC/CYddYEfmOumEl5tZLq1QUGBVShStMFljHrm3GyYOA4OIb/rNMSQDpOeghKNttn9MNgFNAJaInMrE65HYea5KBzeGdWX5WAJPwYJYucmiFbwmEQM8n3EaKljJZDEPBkxz2pEKG6ojQgoakGjHw4j5kido8bm32xGh4rN+F4mVtIc7wf8L6o0mICSlsOBm8guA9coVKdMegKFbX+BchzpzFkHJd6+jULNvREBLE87rxhFaIIwdxjUQsSYWjDp1EtlqzIa81wJvJkwiXzBHyFf6D7klN+H/MTvoiRrDhbINhEFRQmqbi1ETnbqZzMyDx5E9VTbUcFiuqN8GJl79bN4nwkz/g7KS+NdSOj4VS5HQT1zzc89jtdBRZmFwO2URaz+gerYbkOaOAcLVDcGsb2nT5HzuQdpkVRm2IcSaqcCx2XpHlsgB3095cts1iLmaZPF+elqnnuLx/F8Mz/DKV+jVozC9Y1QCD+bWq7GoDoyiC12Aw8jp/30tGMfmO+yRaht0eKkzWnfF6Ko34VZum5d4FvIBD3scc4RFNZ1c8Y3ooz8EMRoOfjgaGYQkKbIo2Jm+XVkhvTM0nX7IPPqn2nff4bs/guwC8MGxX+iBOkcvAtEi8mc65iBGOyXyFzLIQOOdgZxcibpNvUmYBGSlHHb2x2AKxCRpofBi1FdWhvgspivm4/yGbvInIj0iybuQQ77ucCVMd9jjcPRziBORCc9bFmMzK8CVIUcl9NcD/k+RXjXWi1GKxZHAP8R47N+BxH0o6hoMgr+jhz2W5GvloMHjnYGaWj+XetybCWKcv0Y+F4M18pDBYr9UNHfBx7nFaG1G8egosBGMVy7gxlrOaqgjooSlBupD9zI0U8HWUOcE+OMFTVhGAQDUdTKrWI3iRzSF4E/ILMoyrMNQ6Utj+FPpO+gtSMXoirnxhGu3c48RxK4g/gKDdej6uBrkOOfgwviZJBvodDnCrwjLHHiapQwfAjvmqv9qBp5IQpxDqdM69iiAK2hGIcYY5zl881BS2b7ApOomK/xQx5K6k1Dpt2NqEgyTkxFDvvtxKPpahziYpA2wD0o/j6GaEtCM5WINEDrqO9FZsyTwOM+432GlstOQjb3M8hM8ivLb4401HPAtYgx7sJ+TXgpWjdzPbLzZyKt0p7MlbgNge6IoSehJhZDyE6h4U6kXb+JhE0OafArNbHpO3Uqym6fi+p8tlj8xg15qInbb1CkJZF2zClYbI/MjDsRsdvUFX2JGHcJWuQ1ETHzanO/nyLGrIMYoyVaMluAQsa/JFyFbhJVOW9AJtq1qInEKuBD5GzvN89aYOayo/nsQCbdTOyXCydIaeVkiYWomHGkedZsFnkedfBjkHooOVU77ftS1MTB6d90NpJE0yLcy7uIcN2qgUsRAa9F9URv4V2s6AWnVHwZyif0RszWDWXcnfqmPWh9/UzgVXNfUYv7tqHOKlOQ2XQWMkmvNHObRBXCW831JiNiDfqMW4D/I1iZfxFaMVpIzsyqAD8GGYccw3SJlEREdTIyOX6GzJ0optVq88k2vkaLrJYiZmyKojkOgxxEdU5xVwMnEQE/Yv4+wcyh8w6KkGaM0tZnE9KUQfEu0sg5pMGPQb5Cq9jcVPZe9NIL0LqIlng3fKuuKCJzT61sYhfBNUQOlQw/BhmF1l/X9jjeCRiA7NfLzSdqEiuHHKoN/BjEMZm86n5Wo9BjKcocD0O2dq6dTA41AnEsmCpCvko+CqO+RvA2mznkUC0RVx7E6Ze7CzFJ7WjD5ZBD9UCcmfQdKN/Qmuq1lDeHykED1G2lRpXQx0nITg1WKXYJxtZoXcVzxN96Px81f9hBuB5VzVEpy2KU1AuC88znGaL3oKqFMtxrCNeNpDHKwq8zzxIXaqMFYxegQE0jM2eNUJvXHShkvZTMDTbSkY8ajp8V4F4SKBn7lsux41CXnGZUpMmkucd3kR/9hcs5VSrpO6E+t01QR8Y4cQbqwj6LcAxyjfn9w6hBXZCcSF0U1TsbdZyMktfIB25AJe5hGOQy1GV+PqoEOBhijFQkUFmK01W/Dgrtf4hKYkoQ8xyPmOd6lIB8ynx2WMzdD9FCtw34I4GsoE24M8hJqAqilrl2eroi39zrAUQrT5AmrKuSQZzykavQZjFhS1TcJm0QKtsIU1V8HFp78QnaPKcVegG2WIS2SbgLZf7HE3yruDhQB0nj3UgYnYV7F0pbnIDKdK5DlQEPoGDMdipu7JNAGqUNer8/R/myu/FPJtdGgZ6bsF/H4yWEEmaMCaguLt03dpj5ErQsohdiqH8nrKvaVziCkox9UD1XHGiLzCtbUy8dPcwY49CLvRSVb9giiYoMB6LixA3AC/FPnS/ao/0Q/2jm4wrCM0grRGRnm3//RuaO+UnEONuRBn+csnIeG3xFuE1MvbAnw/1uQ4JsgXm2CciC2AZVv1DmIFL/g5CEigNXo6jaVoJrkATqzv4Rkjivo3L1oNsNfImk2hGkSTpmYe780AeZDtPRmpjeyOQIilMRw7dGJtP9BN9OYiXSrLamatzriWzofA2KwLZE+TzrH2YTxciZLUBmTVS0QJJyFpJeQZ+vBTKr5iCzYR5azRfEaYSygMWfkTR0fK3KwvFI8y1ENvVCc/0LAo7TEGlSZ9ffKBv3HA1YjZrqXYppGVXVDFILOZ9LUCl4g2jD0Qc5es8STgpdjAoYF5q/F6PCxf4hxnKcxztR6fxIsttQLhXdkFn0kvn7XyiSNYBgvZMHIs1zN9KmNR2lKJjRApnZVc4gIDNkCvJFLoowTgGyHV9A4dWgDFIfEdBKylbu7UZEFtY8yUPM/3vkBFZGF5GEuc5myiI7RajbSg/sG0m0QFXaswm2s+/RjiIkqI+H6sEgeagZwduorU3YlqEXIyJ+hnCl6p3QasUZlI+0zEPMF6UZ3GREaGOpuOlO3GiFzMSZlN+6YjHyzfpZjtPbPPdkKn+T1qpEPmKSr6B6MEgCEeQUFGM/J8QY9ZFj9RoyJcKYMpehhFZ6M+yVyAzsT/g9GA8hP+RztF4jG03lHPSkLFSaik2ISS7F3x+qh7TQGoInSo92tEY5kw+hejCIgzeQaXMtwQm8J+r+MY1wlcTNkP+yiIqr8Q4js6070VqZbkNNHNqjRWjZ2PC0PmpxtAL3Bg+zkW3tF3Q41jzra9hr41qIMW0/VZ1icENzJBhexzQFrE43uQ+FJEchU8d2dWFdVE6xEvdsqg16IPNspsfx11AC6XKirdleitoAjUbSOe6NPjuh7inDcU/IvY3C31dRUcOkoj2KYNlugNoQNRHvgp2ASqAM+yjcy3GqIrHaxNxPPmqHBFQvBgHtuf5TFD2xZZBzEIHfTLh2Q3lIaqzDu63Oh5TlRCYTrTfVFJQXGYWaSYdlajf0RWbiMo/ju1DQYQhy1r1WgJ5o5uWQ5XWPmPnZhD9xlyAmHoraDm1OO55EDnIH/C2cBBKs23yumyl7fyISyMORJXELKXRQ3RjkC6RFbkLJKb8Sj3z0st9H+1+EQTvUkeV+vLuHJFFu5VEkJRfaDe2Kw0iLdDD/DiGevRSbUT734YW5wH+jjYi8GKQhZRsE2eAQamVqi28jBmnscqwEBUSewj8SmYfe+wi8mTmJymO6UZ7hShH9tEfBCMdKKFcDVt0YBJT1vQGFXP/gc24HFBoeS/iiwIvQJM73OW8lqhe7gmgMAiqjuBMJgztQBjdqs73uyEx8wee8982zXGmu7xahOogINVsdMvMQA7rlZGqh+f05dhrkEP5dZ/IQraeO1waV4uxA2uMVXDSNH4MEmSDn3Kj24zbkCwxCKrgww7mDkdkwL+S1GiBCWYJ/seRONImDyWye2GIlSsD9CZl3j0QYqxZyzteh8u1MOISY6Leo/dFyl3N2o/eYjUACiFCdncDSkUDh6bh2KE4gzZ/ekqoh2iNlJGXV5HPTf+zFIMuQbTgERT5sbNHeKNk32vL8THgWJf364004bZDTPInwhW1dkcl0LCrAyySxSlEIsA2ZzZMgeA5FlG5Hzn/YbPXpKJK3H7Vi9XuOk5BJ1ht3BlmPiLRThHvKhAaIQbx2UY5bc7lFRfcjs2otSuROMPM2J/Ukr4ncgNZC9EKbavpJko7oJW8mWvO41OvPQ9K6wOOcK9HLDpvlTSCb/RBlvk5phg9ozcPHyPyLQ7oeQWakUxbfOuQ4vVCId53lcxSi3E4/TMY4DV8iP6YX2SmP6Y601MYsjB0UXyAT903kE5YLgWcysWYgM+cepO5moaZrqUigkoT7UafAkcSnGqeiqMxFSKOkohmq2p2J/17hXnByH49jv2CrBC3ouQeVfi+3/F0mOPssTkeVvzdTtluuDRwz8WXsI3klqPLgMVTAmL7r7UFkTt6InFg/sy0IGqBM/zqiWxpxYS/yBWegdzsMCYmMqngLIoa/o6rUV5DzPCjlMx4l+E5Hu6dOjPGm15qxh1Kx3LwPsiFnRRi/F4p9v4helM3niJmPA8RTfezgPRT2vQRtsBkE3RARz0aBCtvnWIbC131xb7LxCmWLz+I0ec5HkcPnqV4lLNuRX9YdWQiAf5RgjZmgB1HJ88NI0jmfW5CaHIa29YqzXecR1M70TJTncNAY+SfzCS/Z6iH/ZRXB251uRiUb/Ym3hH02Wph1K/bMl0AE/gnB15zvRkzQC62BSMc7KNQ6jPj2DzkOFUCuI3OisqqwADnqN6D8iFWpyX4UbfkuctqHms+1SLX3J3ul0G8hIr6OMnOwN3qhUyOM2wYx3VyCq3knJ3IKctbjxENoY9AxqCTELyt9EmKmVwm+iAnkkDqNEtwwEQmEe3FnoiBIIMLrioTpnmjDZQXFyORujtkANkgt1kbkgD9pPlORBApiLwfFQXPNc9HE1kWO+5tojUNYDEC2eth8xttmPrzMk7DYB/za/H8s0lCZwua9zTlzCYeNiCH74N7Z/RPkHzVDzNIi5HXy0GrEEUhLvhrjnMWNFUgo/wCoU52KFb2wADniA5HE7oKYM2xirQDZ+osI35ZnL4qyeZknUfAxSiL2QGU3XoGUeohB1+K+R6MNilDpyVl474C1BAVf2qF572E39L9RYJ5nDOoaMpFouwBkG0dQZPQMoFU+Ro13HhDFYvFFlOThPqT27kAO6Woq7k8eBF2Q+TKeaC/qJRTlCdrUwQbzUWTwVygY4XafbRGx3ks0Lb4ImWdX4D2vL5pzxqBIz3RERGvxFlQtkUBzdtgai6JmNvdaFcWKqViDLINe+cjeOpPslb4nUEOGpMv3zjbOfngZEWNX5P8csPiN29h5yETbSjQmAyXT3kA+2FQqtr6xfTYvTELRqRs9jn8P2cxRzZUdyBe5HDG6V3f+pShgM9TM4dUoX7XFfA4hbdcMMcdpKKT7Bopw2u7QVYpC+9Mt5s+hoSm4m5lBaCwVG1BurGM+CvWdH3GS/R5iHRWJej2S4oUWY3xOWfMAm6K4IlSynF60VwtFe2YSraEbSHI+hKqJ05NpJagCYE2E8b9GGd6Pqehv5ZmxNxI975RE0ar0be/c8DlysJ9GZmoXysKijjWyC0XApqOQ+Frso5uHkc+5xuJeUudir8exneZ+g0Yqi1DE9tj/ByF1DbpMV3zUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTAzVDAzOjUzOjIyKzAwOjAw+vI1HAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0wM1QwMzo1MzoyMiswMDowMIuvjaAAAAAASUVORK5CYII="

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(112);


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(35)
var ieee754 = __webpack_require__(54)
var isArray = __webpack_require__(55)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36).Buffer))

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ })

},[224]);
//# sourceMappingURL=styles.bundle.js.map