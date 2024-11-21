/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Managers/BaseManager.ts":
/*!*************************************!*\
  !*** ./src/Managers/BaseManager.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseManager: () => (/* binding */ BaseManager)\n/* harmony export */ });\nclass BaseManager {\n    constructor() {\n        this.tasks = [];\n    }\n    add(model) {\n        this.tasks.push(model);\n    }\n    remove(id) {\n        const index = this.tasks.findIndex((task) => task.getId() === id);\n        if (index > -1) {\n            this.tasks.splice(index, 1);\n        }\n    }\n    update(model) {\n        const index = this.tasks.findIndex((task) => task.getId() === model.getId());\n        if (index > -1) {\n            this.tasks[index] = model;\n        }\n    }\n    complete(model) {\n        model.setStatus(\"completed\");\n    }\n    getAll() {\n        return this.tasks;\n    }\n    getById(id) {\n        const index = this.tasks.findIndex((task) => task.getId() === id);\n        if (index > -1) {\n            return this.tasks[index];\n        }\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTWFuYWdlcnMvQmFzZU1hbmFnZXIudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUdPLE1BQU0sV0FBVztJQUF4QjtRQUNZLFVBQUssR0FBYSxFQUFFLENBQUM7SUFvQ2pDLENBQUM7SUFuQ0csR0FBRyxDQUFDLEtBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQVU7UUFDYixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYTtRQUNoQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDOUIsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQ25ELENBQUM7UUFDRixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNsQixLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNO1FBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPLENBQUMsRUFBVTtRQUNkLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXRvZG8vLi9zcmMvTWFuYWdlcnMvQmFzZU1hbmFnZXIudHM/ZThiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lNYW5hZ2VyfSBmcm9tIFwiLi9JTWFuYWdlclwiO1xuaW1wb3J0IHtJTW9kZWx9IGZyb20gXCIuLi9Nb2RlbHMvSU1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlTWFuYWdlciBpbXBsZW1lbnRzIElNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHRhc2tzOiBJTW9kZWxbXSA9IFtdO1xuICAgIGFkZChtb2RlbDogSU1vZGVsKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChtb2RlbCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCgodGFzazogSU1vZGVsKSA9PiB0YXNrLmdldElkKCkgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShtb2RlbDogSU1vZGVsKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAodGFzazogSU1vZGVsKSA9PiB0YXNrLmdldElkKCkgPT09IG1vZGVsLmdldElkKClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudGFza3NbaW5kZXhdID0gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wbGV0ZShtb2RlbDogSU1vZGVsKTogdm9pZCB7XG4gICAgICAgIG1vZGVsLnNldFN0YXR1cyhcImNvbXBsZXRlZFwiKTtcbiAgICB9XG5cbiAgICBnZXRBbGwoKTogSU1vZGVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9XG5cbiAgICBnZXRCeUlkKGlkOiBzdHJpbmcpOiBJTW9kZWwgfCBudWxsIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCgodGFzazogSU1vZGVsKSA9PiB0YXNrLmdldElkKCkgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Managers/BaseManager.ts\n");

/***/ }),

/***/ "./src/Managers/TaskManager.ts":
/*!*************************************!*\
  !*** ./src/Managers/TaskManager.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskManager: () => (/* binding */ TaskManager)\n/* harmony export */ });\n/* harmony import */ var _BaseManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseManager */ \"./src/Managers/BaseManager.ts\");\n\nclass TaskManager extends _BaseManager__WEBPACK_IMPORTED_MODULE_0__.BaseManager {\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTWFuYWdlcnMvVGFza01hbmFnZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFbkMsTUFBTSxXQUFZLFNBQVEscURBQVc7Q0FFM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctdG9kby8uL3NyYy9NYW5hZ2Vycy9UYXNrTWFuYWdlci50cz9jMDQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZU1hbmFnZXJ9IGZyb20gXCIuL0Jhc2VNYW5hZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBUYXNrTWFuYWdlciBleHRlbmRzIEJhc2VNYW5hZ2VyIHtcblxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Managers/TaskManager.ts\n");

/***/ }),

/***/ "./src/Models/BaseModel.ts":
/*!*********************************!*\
  !*** ./src/Models/BaseModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseModel: () => (/* binding */ BaseModel)\n/* harmony export */ });\nclass BaseModel {\n    constructor(title) {\n        this.title = title;\n        this.id = crypto.randomUUID();\n        this.status = 'created';\n        this.date = new Date();\n    }\n    getTitle() {\n        return this.title;\n    }\n    getStatus() {\n        return this.status;\n    }\n    getDate() {\n        return this.date;\n    }\n    getId() {\n        return this.id;\n    }\n    setId(id) {\n        this.id = id;\n    }\n    setTitle(title) {\n        this.title = title;\n    }\n    setStatus(status) {\n        this.status = status;\n    }\n    setDate(date) {\n        this.date = date;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTW9kZWxzL0Jhc2VNb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTSxTQUFTO0lBS2xCLFlBQW9CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSztRQUNELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsS0FBSyxDQUFDLEVBQVU7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBVTtRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy10b2RvLy4vc3JjL01vZGVscy9CYXNlTW9kZWwudHM/NGViYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lNb2RlbH0gZnJvbSBcIi4vSU1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBJTW9kZWwge1xuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHN0YXR1czogc3RyaW5nO1xuICAgIHByaXZhdGUgZGF0ZTogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGl0bGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAnY3JlYXRlZCc7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0U3RhdHVzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgICB9XG5cbiAgICBnZXREYXRlKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlO1xuICAgIH1cblxuICAgIGdldElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIHNldElkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHNldFN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG5cbiAgICBzZXREYXRlKGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Models/BaseModel.ts\n");

/***/ }),

/***/ "./src/Models/Task.ts":
/*!****************************!*\
  !*** ./src/Models/Task.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ \"./src/Models/BaseModel.ts\");\n\nclass Task extends _BaseModel__WEBPACK_IMPORTED_MODULE_0__.BaseModel {\n    constructor(title, userId) {\n        super(title);\n        this.userId = userId;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTW9kZWxzL1Rhc2sudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFFL0IsTUFBTSxJQUFLLFNBQVEsaURBQVM7SUFFL0IsWUFBWSxLQUFhLEVBQUUsTUFBYztRQUNyQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctdG9kby8uL3NyYy9Nb2RlbHMvVGFzay50cz82M2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZU1vZGVsfSBmcm9tIFwiLi9CYXNlTW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFRhc2sgZXh0ZW5kcyBCYXNlTW9kZWwge1xuICAgIHByaXZhdGUgdXNlcklkOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIodGl0bGUpO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Models/Task.ts\n");

/***/ }),

/***/ "./src/Models/User.ts":
/*!****************************!*\
  !*** ./src/Models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ \"./src/Models/BaseModel.ts\");\n\nclass User extends _BaseModel__WEBPACK_IMPORTED_MODULE_0__.BaseModel {\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFFL0IsTUFBTSxJQUFLLFNBQVEsaURBQVM7Q0FFbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctdG9kby8uL3NyYy9Nb2RlbHMvVXNlci50cz9mMDdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZU1vZGVsfSBmcm9tIFwiLi9CYXNlTW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlTW9kZWwge1xuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Models/User.ts\n");

/***/ }),

/***/ "./src/Services/Printer.ts":
/*!*********************************!*\
  !*** ./src/Services/Printer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Printer: () => (/* binding */ Printer)\n/* harmony export */ });\nclass Printer {\n    constructor(manager, writerFunction) {\n        this.manager = manager;\n        this.writerFunction = writerFunction;\n    }\n    printAll() {\n        const models = this.manager.getAll();\n        models.forEach((model) => {\n            this.writerFunction(model);\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvUHJpbnRlci50cyIsIm1hcHBpbmdzIjoiOzs7O0FBR08sTUFBTSxPQUFPO0lBRWhCLFlBQW9CLE9BQWlCLEVBQVMsY0FBc0M7UUFBaEUsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtJQUNwRixDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sTUFBTSxHQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWEsRUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctdG9kby8uL3NyYy9TZXJ2aWNlcy9QcmludGVyLnRzP2NmNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTWFuYWdlcn0gZnJvbSBcIi4uL01hbmFnZXJzL0lNYW5hZ2VyXCI7XG5pbXBvcnQge0lNb2RlbH0gZnJvbSBcIi4uL01vZGVscy9JTW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFByaW50ZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtYW5hZ2VyOiBJTWFuYWdlcixwcml2YXRlIHdyaXRlckZ1bmN0aW9uOiAoaXRlbTogSU1vZGVsKSA9PiB2b2lkKSB7XG4gICAgfVxuXG4gICAgcHJpbnRBbGwoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZGVsczogSU1vZGVsW10gPSB0aGlzLm1hbmFnZXIuZ2V0QWxsKCk7XG4gICAgICAgIG1vZGVscy5mb3JFYWNoKChtb2RlbDogSU1vZGVsKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLndyaXRlckZ1bmN0aW9uKG1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Services/Printer.ts\n");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Models_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/Task */ \"./src/Models/Task.ts\");\n/* harmony import */ var _Models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/User */ \"./src/Models/User.ts\");\n/* harmony import */ var _Managers_TaskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Managers/TaskManager */ \"./src/Managers/TaskManager.ts\");\n/* harmony import */ var _Services_Printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/Printer */ \"./src/Services/Printer.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n// ---------- NENURASINETI -------------------------------------------\nconst taskManager = new _Managers_TaskManager__WEBPACK_IMPORTED_MODULE_2__.TaskManager();\nlet consoleWriter = console.log;\nlet htmlWriter = (item) => {\n    const listElement = document.getElementById(\"tasksList\");\n    const listItem = document.createElement(\"li\");\n    listItem.textContent = item.getTitle();\n    listElement.appendChild(listItem);\n};\nconst taskPrinter = new _Services_Printer__WEBPACK_IMPORTED_MODULE_3__.Printer(taskManager, htmlWriter);\nconst kamPriklauso = new _Models_User__WEBPACK_IMPORTED_MODULE_1__.User('Tautvydas');\n// ---------- Funkcijos skirtos Event Listeneriams -------------------\nfunction createTask() {\n    const taskElement = document.getElementById(\"newTaskInput\");\n    const taskTitle = taskElement.value;\n    const taskItem = new _Models_Task__WEBPACK_IMPORTED_MODULE_0__.Task(taskTitle, kamPriklauso.getId());\n    taskManager.add(taskItem);\n    taskPrinter.printAll();\n}\nfunction PrintAllTasks() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const tasks = yield fetch('db/tasks.json');\n        const tasksJson = yield tasks.json();\n        tasksJson.forEach((taskData) => {\n            const taskItem = new _Models_Task__WEBPACK_IMPORTED_MODULE_0__.Task(taskData.title, kamPriklauso.getId());\n            taskManager.add(taskItem);\n        });\n        taskPrinter.printAll(); // Sita vieta pas visus skirsis nuo mano eilutes. Cia tiesiog kvieciam pritinimo funkcija.\n    });\n}\n// ---------- EVENT Listeneriai --------------------------------------\nconst createButton = document.getElementById(\"createButton\");\ncreateButton.addEventListener(\"click\", createTask);\ndocument.addEventListener('DOMContentLoaded', PrintAllTasks);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNtQztBQUNBO0FBQ2dCO0FBQ1I7QUFFM0Msc0VBQXNFO0FBQ3RFLE1BQU0sV0FBVyxHQUFHLElBQUksOERBQVcsRUFBRSxDQUFDO0FBQ3RDLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDaEMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFZLEVBQVEsRUFBRTtJQUNwQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBcUIsQ0FBQztJQUM3RSxNQUFNLFFBQVEsR0FBa0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFDRCxNQUFNLFdBQVcsR0FBWSxJQUFJLHNEQUFPLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2xFLE1BQU0sWUFBWSxHQUFHLElBQUksOENBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUUzQyxzRUFBc0U7QUFDdEUsU0FBUyxVQUFVO0lBQ2pCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFxQixDQUFDO0lBQ2hGLE1BQU0sU0FBUyxHQUFXLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSw4Q0FBSSxDQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM1RCxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLFdBQVcsQ0FBQyxRQUFRLEVBQUU7QUFDeEIsQ0FBQztBQUVELFNBQWUsYUFBYTs7UUFDeEIsTUFBTSxLQUFLLEdBQWEsTUFBTSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckQsTUFBTSxTQUFTLEdBQUcsTUFBTSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQWEsRUFBUSxFQUFFO1lBQ3RDLE1BQU0sUUFBUSxHQUFHLElBQUksOENBQUksQ0FBRSxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1FBQ0YsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsMEZBQTBGO0lBQ3RILENBQUM7Q0FBQTtBQUVELHNFQUFzRTtBQUN0RSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBc0IsQ0FBQztBQUNsRixZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRW5ELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy10b2RvLy4vc3JjL21haW4udHM/Y2Q0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lNb2RlbH0gZnJvbSBcIi4vTW9kZWxzL0lNb2RlbFwiO1xuaW1wb3J0IHtUYXNrfSBmcm9tIFwiLi9Nb2RlbHMvVGFza1wiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi9Nb2RlbHMvVXNlclwiO1xuaW1wb3J0IHtUYXNrTWFuYWdlcn0gZnJvbSBcIi4vTWFuYWdlcnMvVGFza01hbmFnZXJcIjtcbmltcG9ydCB7UHJpbnRlcn0gZnJvbSBcIi4vU2VydmljZXMvUHJpbnRlclwiO1xuXG4vLyAtLS0tLS0tLS0tIE5FTlVSQVNJTkVUSSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCB0YXNrTWFuYWdlciA9IG5ldyBUYXNrTWFuYWdlcigpO1xubGV0IGNvbnNvbGVXcml0ZXIgPSBjb25zb2xlLmxvZztcbmxldCBodG1sV3JpdGVyID0gKGl0ZW06IElNb2RlbCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrc0xpc3RcIikgYXMgSFRNTFVMaXN0RWxlbWVudDtcbiAgICBjb25zdCBsaXN0SXRlbTogSFRNTExJRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0VGl0bGUoKTtcbiAgICBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG59XG5jb25zdCB0YXNrUHJpbnRlcjogUHJpbnRlciA9IG5ldyBQcmludGVyKHRhc2tNYW5hZ2VyLCBodG1sV3JpdGVyKTtcbmNvbnN0IGthbVByaWtsYXVzbyA9IG5ldyBVc2VyKCdUYXV0dnlkYXMnKTtcblxuLy8gLS0tLS0tLS0tLSBGdW5rY2lqb3Mgc2tpcnRvcyBFdmVudCBMaXN0ZW5lcmlhbXMgLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gY3JlYXRlVGFzaygpOiB2b2lkIHtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCB0YXNrVGl0bGU6IHN0cmluZyA9IHRhc2tFbGVtZW50LnZhbHVlO1xuICBjb25zdCB0YXNrSXRlbSA9IG5ldyBUYXNrICh0YXNrVGl0bGUsIGthbVByaWtsYXVzby5nZXRJZCgpKTtcbiAgdGFza01hbmFnZXIuYWRkKHRhc2tJdGVtKTtcbiAgdGFza1ByaW50ZXIucHJpbnRBbGwoKVxufVxuXG5hc3luYyBmdW5jdGlvbiBQcmludEFsbFRhc2tzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRhc2tzOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKCdkYi90YXNrcy5qc29uJyk7XG4gICAgY29uc3QgdGFza3NKc29uID0gYXdhaXQgdGFza3MuanNvbigpO1xuXG4gICAgdGFza3NKc29uLmZvckVhY2goKHRhc2tEYXRhOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBuZXcgVGFzayAodGFza0RhdGEudGl0bGUsIGthbVByaWtsYXVzby5nZXRJZCgpKTtcbiAgICAgICAgdGFza01hbmFnZXIuYWRkKHRhc2tJdGVtKTtcbiAgICB9KVxuICAgIHRhc2tQcmludGVyLnByaW50QWxsKCk7IC8vIFNpdGEgdmlldGEgcGFzIHZpc3VzIHNraXJzaXMgbnVvIG1hbm8gZWlsdXRlcy4gQ2lhIHRpZXNpb2cga3ZpZWNpYW0gcHJpdGluaW1vIGZ1bmtjaWphLlxufVxuXG4vLyAtLS0tLS0tLS0tIEVWRU5UIExpc3RlbmVyaWFpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZUJ1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVGFzayk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBQcmludEFsbFRhc2tzKTtcblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;