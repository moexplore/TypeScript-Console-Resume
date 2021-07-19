/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Resume.ts":
/*!*******************!*\
  !*** ./Resume.ts ***!
  \*******************/
/***/ (() => {

eval("\r\nvar myName = \"moshe rube\";\r\nfunction displayPosition(nameCompany, jobTitle, description) {\r\n    return console.log(jobTitle + \" at \" + nameCompany + \": I \" + description);\r\n}\r\nfunction displaySkill(skillName, cool) {\r\n    if (cool === true) {\r\n        return console.log(\"BAM: \" + skillName);\r\n    }\r\n    else {\r\n        return console.log(skillName);\r\n    }\r\n}\r\nconsole.log(\"Name: \" + myName.toUpperCase());\r\nconsole.log(\"Career: Full Stack Engineer\");\r\nconsole.log(\"Description: I have an affinity for red T-Shirts\");\r\nconsole.log(\"\");\r\nconsole.log(\"MY INTERESTS:\");\r\nconsole.log(\"I have too many to list.\");\r\nconsole.log(\"\");\r\nconsole.log(\"PREVIOUS EXPERIENCE\");\r\ndisplayPosition(\"Apple\", \"Engineer\", \"helped design and build the first Iphone.\");\r\ndisplayPosition(\"Google\", \"Engineer\", \"helped design and build the first Android.\");\r\ndisplayPosition(\"Apple Picker\", \"Apple Farm Co.\", \"picked apples from trees to help inspire my work and to experience sunlight\");\r\nconsole.log(\"\");\r\nconsole.log(\"MY SKILLS\");\r\ndisplaySkill(\"Singing\", true);\r\ndisplaySkill(\"Javascript\", true);\r\ndisplaySkill(\"Walking\", false);\r\n\n\n//# sourceURL=webpack://TypeSConsoleResume/./Resume.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Resume.ts"]();
/******/ 	
/******/ })()
;