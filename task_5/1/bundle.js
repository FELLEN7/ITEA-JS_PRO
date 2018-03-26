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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*

  Модули в JS
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import

  Так как для экспорта и импорта нету родной поддержки в
  браузерах, то нам понадобится сборщик который это умеет делать

  Выбор пал на вебпак.
  npm install --save-dev webpack

  Создадим файл конфига webpack.config.js

  База с документации
  const path = require('path');
  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };

  Затестим - в консоли наберем команду webpack
*/
console.log("WEBPACK WORKINGs");
// Для экспорта и импорта обязательно нужно имя
// import str from './modules/1.js';
// console.log(str);
//
// import someObj from './modules/2';
// console.log(someObj);
//
// import { mArray, mObj, User } from './modules/3';
// console.log( mArray, mObj, User);
//
// const Butch = new User('Butch');
// console.log(Butch);
//
// console.log('1da2net3');

/*

  Установка webpack-dev-server
  npm install --save-dev webpack-dev-server
  -> автообвновления и пересборка


  package.json ->
    scripts -> "start": "webpack-dev-server --open"

  webpack.config.js ->
    devServer: {
      contentBase: './public'
    }

*/

/*
  Установим babel
  npm install babel-loader babel-core babel-preset-env --save-dev

  usage: https://webpack.js.org/loaders/babel-loader/#usage
  webpack.config.js ->
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  }

*/

/*
  Задание - разбить задание про птиц на модули и собрать в бандл при помощи вебпака.
*/

/***/ })
/******/ ]);