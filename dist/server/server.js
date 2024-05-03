/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nconst paramEdit_css_1 = __importDefault(__webpack_require__(/*! ./paramEdit.css */ \"./src/paramEdit.css\"));\r\nconst Item_1 = __webpack_require__(/*! ./Item */ \"./src/Item.tsx\"); // класс Item - это клетка в поле\r\nconst MagicWand_1 = __webpack_require__(/*! ./MagicWand */ \"./src/MagicWand.tsx\");\r\nconst FillTicket_1 = __webpack_require__(/*! ./FillTicket */ \"./src/FillTicket.ts\");\r\n//import { PostResult } from './api/PostResult';\r\nfunction AppComponent() {\r\n    const fieldOneItems = [];\r\n    const fieldTwoItems = [];\r\n    const wand = (0, MagicWand_1.MagicWand)();\r\n    const [showWand, setShowWand] = (0, react_1.useState)(true);\r\n    const [fieldOneSelected, setFieldOneSelected] = (0, react_1.useState)([]);\r\n    const [fieldTwoSelected, setFieldTwoSelected] = (0, react_1.useState)([]);\r\n    const [textResult, setTextResult] = (0, react_1.useState)('');\r\n    const [wins] = (0, react_1.useState)((0, FillTicket_1.FillTicket)()); // определили выйгрышные номера\r\n    const button = (0, react_1.useRef)(null);\r\n    const ticketDiv = (0, react_1.useRef)(null);\r\n    const fieldOne = (0, react_1.useRef)(null);\r\n    const fieldTwo = (0, react_1.useRef)(null);\r\n    function autoFillTicket() {\r\n        const selectedNumbers = (0, FillTicket_1.FillTicket)();\r\n        setFieldOneSelected(selectedNumbers.fieldOneWinNumbers);\r\n        setFieldTwoSelected(selectedNumbers.fieldTwoWinNumbers);\r\n        for (let i = 0; i < 19; i++) {\r\n            if (fieldOne.current)\r\n                fieldOne.current.children[i].\r\n                    setAttribute('style', 'background-color:white; cursor:pointer');\r\n            if (selectedNumbers.fieldOneWinNumbers.includes(i + 1)) {\r\n                if (fieldOne.current)\r\n                    fieldOne.current.children[i].\r\n                        setAttribute('style', 'background-color:yellow; cursor:pointer');\r\n            }\r\n        }\r\n        for (let i = 0; i < 2; i++) {\r\n            if (fieldTwo.current)\r\n                fieldTwo.current.children[i].\r\n                    setAttribute('style', 'background-color:white; cursor:pointer');\r\n            if (selectedNumbers.fieldTwoWinNumbers[0] === (i + 1)) {\r\n                if (fieldTwo.current)\r\n                    fieldTwo.current.children[i].\r\n                        setAttribute('style', 'background-color:yellow; cursor:pointer');\r\n            }\r\n        }\r\n    }\r\n    function checkTicket() {\r\n        let isTicketWon = false;\r\n        setShowWand(false);\r\n        if (((fieldOneSelected.filter(x => wins.fieldOneWinNumbers.includes(x))).length >= 4) ||\r\n            (((fieldOneSelected.filter(x => wins.fieldOneWinNumbers.includes(x))).length >= 3) &&\r\n                fieldTwoSelected[0] === wins.fieldTwoWinNumbers[0])) {\r\n            isTicketWon = true;\r\n            setTextResult('You win! Congratulations!');\r\n        }\r\n        else\r\n            setTextResult('Hope next time you win!');\r\n        for (let i = 0; i < 8; i++) {\r\n            if (wins.fieldOneWinNumbers.includes(fieldOneSelected[i])) {\r\n                if (fieldOne.current)\r\n                    fieldOne.current.children[fieldOneSelected[i] - 1].\r\n                        setAttribute('style', 'background-color:lightgreen');\r\n            }\r\n        }\r\n        if (wins.fieldTwoWinNumbers[0] === fieldTwoSelected[0]) {\r\n            if (fieldTwo.current)\r\n                fieldTwo.current.children[fieldTwoSelected[0] - 1].\r\n                    setAttribute('style', 'background-color:lightgreen');\r\n        }\r\n        if (ticketDiv.current) {\r\n            ticketDiv.current.style.pointerEvents = 'none';\r\n            ticketDiv.current.style.opacity = '0.7';\r\n        }\r\n        // PostResult('http://localhost:8000/results', fieldOneSelected, fieldTwoSelected, isTicketWon);\r\n    }\r\n    // первоначальное заполнение полей\r\n    for (let i = 0; i < 19; i++) {\r\n        fieldOneItems.push(new Item_1.Item('1', i + 1, fieldOneSelected, setFieldOneSelected));\r\n    }\r\n    for (let i = 0; i < 2; i++) {\r\n        fieldTwoItems.push(new Item_1.Item('2', i + 1, fieldTwoSelected, setFieldTwoSelected));\r\n    }\r\n    // проверяем все ли поля заполнены после нажатия на клетку\r\n    (0, react_1.useEffect)(() => {\r\n        if ((fieldOneSelected.length === 8) && (fieldTwoSelected.length === 1)) {\r\n            if (button.current) {\r\n                button.current.disabled = false;\r\n                button.current.style.backgroundColor = 'lightgreen';\r\n                button.current.style.cursor = 'pointer';\r\n            }\r\n        }\r\n        else {\r\n            if (button.current) {\r\n                button.current.disabled = true;\r\n                button.current.style.backgroundColor = 'white';\r\n                button.current.style.cursor = 'default';\r\n            }\r\n        }\r\n    }, [fieldOneSelected, fieldTwoSelected]);\r\n    return (react_1.default.createElement(\"div\", { className: paramEdit_css_1.default.modal },\r\n        react_1.default.createElement(\"div\", { className: paramEdit_css_1.default.container, ref: ticketDiv },\r\n            react_1.default.createElement(\"div\", { className: paramEdit_css_1.default.ticketNumber },\r\n                \" \",\r\n                react_1.default.createElement(\"span\", null, \"Ticket 1\"),\r\n                react_1.default.createElement(\"div\", { className: paramEdit_css_1.default.wand, onClick: autoFillTicket }, showWand && wand)),\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"div\", { className: paramEdit_css_1.default.fieldTitle },\r\n                    react_1.default.createElement(\"span\", { className: paramEdit_css_1.default.fieldNumber }, \"Field 1 \"),\r\n                    react_1.default.createElement(\"span\", { className: paramEdit_css_1.default.fieldTask }, \"Pick 8 numbers\")),\r\n                react_1.default.createElement(\"div\", { className: paramEdit_css_1.default.field, ref: fieldOne }, fieldOneItems.map((item, index) => item.getItem())),\r\n                react_1.default.createElement(\"div\", { className: paramEdit_css_1.default.fieldTitle },\r\n                    react_1.default.createElement(\"span\", { className: paramEdit_css_1.default.fieldNumber }, \"Field 2 \"),\r\n                    react_1.default.createElement(\"span\", { className: paramEdit_css_1.default.fieldTask }, \"Pick 1 number\")),\r\n                react_1.default.createElement(\"div\", { className: paramEdit_css_1.default.field, style: { marginBottom: '23px' }, ref: fieldTwo }, fieldTwoItems.map((item, index) => item.getItem())),\r\n                react_1.default.createElement(\"button\", { className: paramEdit_css_1.default.button, ref: button, onClick: checkTicket }, \"Check my ticket\"))),\r\n        textResult && react_1.default.createElement(\"div\", { className: paramEdit_css_1.default.win },\r\n            react_1.default.createElement(\"div\", { className: paramEdit_css_1.default.textResult }, textResult),\r\n            react_1.default.createElement(\"div\", null, \"Winning numbers:\"),\r\n            react_1.default.createElement(\"div\", null, wins.fieldOneWinNumbers.sort((a, b) => a - b).map((item, index) => react_1.default.createElement(\"span\", { key: index, className: paramEdit_css_1.default.winNumbers }, item))),\r\n            react_1.default.createElement(\"div\", null, wins.fieldTwoWinNumbers.map((item, index) => react_1.default.createElement(\"span\", { key: index, className: paramEdit_css_1.default.winNumbers }, item))))));\r\n}\r\nexports.App = (0, root_1.hot)(() => react_1.default.createElement(AppComponent, null));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/FillTicket.ts":
/*!***************************!*\
  !*** ./src/FillTicket.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// используется для определения выйгрышных номеров, а также для автозаполнения\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FillTicket = void 0;\r\nfunction FillTicket() {\r\n    let fieldOneNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];\r\n    const fieldOneWinNumbers = [];\r\n    const fieldTwoWinNumbers = [Math.floor(Math.random() * 2 + 1)];\r\n    for (let i = 0; i < 8; i++) {\r\n        const ind = Math.floor(Math.random() * (19 - i));\r\n        fieldOneWinNumbers.push(fieldOneNumbers[ind]);\r\n        fieldOneNumbers.splice(ind, 1);\r\n    }\r\n    return { fieldOneWinNumbers, fieldTwoWinNumbers };\r\n}\r\nexports.FillTicket = FillTicket;\r\n\n\n//# sourceURL=webpack:///./src/FillTicket.ts?");

/***/ }),

/***/ "./src/Item.tsx":
/*!**********************!*\
  !*** ./src/Item.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Item = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst paramEdit_css_1 = __importDefault(__webpack_require__(/*! ./paramEdit.css */ \"./src/paramEdit.css\"));\r\nclass Item extends react_1.default.Component {\r\n    constructor(nField, num, selected, setSelected // изменяет state выбранных номеров\r\n    ) {\r\n        super({ num, selected, setSelected });\r\n        this.nField = nField;\r\n        this.num = num;\r\n        this.selected = selected;\r\n        this.setSelected = setSelected;\r\n    }\r\n    handleClick(e) {\r\n        const el = e.target;\r\n        if (el.getAttribute('isClicked') === 'true') {\r\n            el.setAttribute('isClicked', 'false');\r\n            el.setAttribute('style', 'background-color:white; cursor:pointer');\r\n            this.setSelected(this.selected.filter((n) => n !== Number(el.innerText)));\r\n        }\r\n        else {\r\n            if ((el.getAttribute('data-nfield') === '1' && this.selected.length < 8) ||\r\n                (el.getAttribute('data-nfield') === '2' && this.selected.length < 1)) {\r\n                el.setAttribute('isClicked', 'true');\r\n                el.setAttribute('style', 'background-color:yellow; cursor:pointer');\r\n                this.setSelected([...this.selected, Number(el.innerText)]);\r\n            }\r\n            else {\r\n                alert(`Поле ${this.nField} заполнено`);\r\n            }\r\n        }\r\n    }\r\n    getItem() {\r\n        return react_1.default.createElement(\"div\", { key: this.num, onClick: this.handleClick.bind(this), \"data-nfield\": this.nField, className: paramEdit_css_1.default.fielditem, style: { backgroundColor: 'white', cursor: 'pointer' } }, this.num);\r\n    }\r\n}\r\nexports.Item = Item;\r\n\n\n//# sourceURL=webpack:///./src/Item.tsx?");

/***/ }),

/***/ "./src/MagicWand.tsx":
/*!***************************!*\
  !*** ./src/MagicWand.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MagicWand = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MagicWand() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { fillRule: \"evenodd\", clipRule: \"evenodd\", d: \"M12.0716 1.5249C12.4266 1.5249 12.7144 1.81272 12.7144 2.16776V4.71423C12.7144 5.06927 12.4266 5.35709 12.0716 5.35709C11.7165 5.35709 11.4287 5.06927 11.4287 4.71423V2.16776C11.4287 1.81272 11.7165 1.5249 12.0716 1.5249ZM16.3831 4.52589C16.6342 4.27484 16.6342 3.86781 16.3831 3.61676C16.1321 3.3657 15.7251 3.3657 15.474 3.61676L14.1883 4.90247C13.9372 5.15352 13.9372 5.56056 14.1883 5.81161C14.4393 6.06266 14.8464 6.06266 15.0974 5.81161L16.3831 4.52589ZM9.71965 11.1893C9.9707 10.9383 9.9707 10.5313 9.71965 10.2802C9.4686 10.0292 9.06156 10.0292 8.81051 10.2802L1.24005 17.8507C0.988995 18.1017 0.988995 18.5088 1.24005 18.7598C1.4911 19.0109 1.89813 19.0109 2.14918 18.7598L9.71965 11.1893ZM12.7144 11.7857C12.7144 11.4306 12.4266 11.1428 12.0716 11.1428C11.7165 11.1428 11.4287 11.4306 11.4287 11.7857V13.6678C11.4287 14.0228 11.7165 14.3107 12.0716 14.3107C12.4266 14.3107 12.7144 14.0228 12.7144 13.6678V11.7857ZM14.6426 7.9285C14.6426 7.57346 14.9304 7.28564 15.2854 7.28564H17.8569C18.2119 7.28564 18.4997 7.57346 18.4997 7.9285C18.4997 8.28354 18.2119 8.57136 17.8569 8.57136H15.2854C14.9304 8.57136 14.6426 8.28354 14.6426 7.9285ZM6.28544 7.28564C5.9304 7.28564 5.64258 7.57346 5.64258 7.9285C5.64258 8.28354 5.9304 8.57136 6.28544 8.57136H8.85686C9.2119 8.57136 9.49972 8.28354 9.49972 7.9285C9.49972 7.57346 9.2119 7.28564 8.85686 7.28564H6.28544ZM14.1883 10.0453C14.4393 9.79429 14.8464 9.79429 15.0974 10.0453L16.3831 11.3311C16.6342 11.5821 16.6342 11.9891 16.3831 12.2402C16.1321 12.4912 15.7251 12.4912 15.474 12.2402L14.1883 10.9545C13.9372 10.7034 13.9372 10.2964 14.1883 10.0453ZM8.66872 3.61676C8.41766 3.3657 8.01063 3.3657 7.75958 3.61676C7.50853 3.86781 7.50853 4.27484 7.75958 4.52589L9.04529 5.81161C9.29634 6.06266 9.70338 6.06266 9.95443 5.81161C10.2055 5.56056 10.2055 5.15352 9.95443 4.90247L8.66872 3.61676Z\", fill: \"black\" })));\r\n}\r\nexports.MagicWand = MagicWand;\r\n\n\n//# sourceURL=webpack:///./src/MagicWand.tsx?");

/***/ }),

/***/ "./src/paramEdit.css":
/*!***************************!*\
  !*** ./src/paramEdit.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"paramEdit__modal--3IBKa\",\n\t\"container\": \"paramEdit__container--39qQQ\",\n\t\"field\": \"paramEdit__field--NO7oJ\",\n\t\"fielditem\": \"paramEdit__fielditem--1AwAl\",\n\t\"ticketNumber\": \"paramEdit__ticketNumber--1igFo\",\n\t\"fieldTitle\": \"paramEdit__fieldTitle--2d8K4\",\n\t\"fieldNumber\": \"paramEdit__fieldNumber--3cGxH\",\n\t\"fieldTask\": \"paramEdit__fieldTask--2oKVv\",\n\t\"button\": \"paramEdit__button--tp_Im\",\n\t\"wand\": \"paramEdit__wand--2jJr0\",\n\t\"win\": \"paramEdit__win--1aoMC\",\n\t\"winNumbers\": \"paramEdit__winNumbers--1TzxE\"\n};\n\n\n//# sourceURL=webpack:///./src/paramEdit.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nconst indexTemplate = (content) => `\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">    \r\n    <title>Lottery</title>    \r\n</head>\r\n<body>\r\n    <div id=\"react_root\">${content}</div>\r\n    <div id=\"menu_dots\"></div>\r\n    <div id=\"modal_root\"></div>\r\n    <script defer src=\"/static/client.js\" type=\"application/javascript\"></script>   \r\n</body>\r\n</html> `;\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nconst app = (0, express_1.default)();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('*', (req, res) => {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\r\n});\r\napp.listen(3000, () => {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });