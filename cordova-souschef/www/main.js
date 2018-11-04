(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top: 15px\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-select-recipe-modal></app-select-recipe-modal>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"row\">\n        <app-recipe-collection></app-recipe-collection>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'souschef';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe/recipe.component */ "./src/app/recipe/recipe.component.ts");
/* harmony import */ var _select_recipe_modal_select_recipe_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-recipe-modal/select-recipe-modal.component */ "./src/app/select-recipe-modal/select-recipe-modal.component.ts");
/* harmony import */ var _recipe_collection_recipe_collection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipe-collection/recipe-collection.component */ "./src/app/recipe-collection/recipe-collection.component.ts");
/* harmony import */ var _ingredient_ingredient_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ingredient/ingredient.component */ "./src/app/ingredient/ingredient.component.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/unit/unit.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_6__["RecipeComponent"],
                _select_recipe_modal_select_recipe_modal_component__WEBPACK_IMPORTED_MODULE_7__["SelectRecipeModalComponent"],
                _recipe_collection_recipe_collection_component__WEBPACK_IMPORTED_MODULE_8__["RecipeCollectionComponent"],
                _ingredient_ingredient_component__WEBPACK_IMPORTED_MODULE_9__["IngredientComponent"],
                _unit_unit_component__WEBPACK_IMPORTED_MODULE_10__["UnitComponent"],
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_11__["TimerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ingredient.service.ts":
/*!***************************************!*\
  !*** ./src/app/ingredient.service.ts ***!
  \***************************************/
/*! exports provided: IngredientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientService", function() { return IngredientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IngredientService = /** @class */ (function () {
    function IngredientService(http) {
        this.http = http;
    }
    IngredientService.prototype.loadIngredientDatabase = function () {
        return this.http.get('./assets/ingredients.json');
    };
    IngredientService.prototype.getIngredient = function (id) {
        return this.loadIngredientDatabase().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var outputData = data.filter(function (r) {
                return r.id == id;
            });
            if (outputData.length == 1) {
                return outputData[0];
            }
            return null;
        }));
    };
    IngredientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IngredientService);
    return IngredientService;
}());



/***/ }),

/***/ "./src/app/ingredient.ts":
/*!*******************************!*\
  !*** ./src/app/ingredient.ts ***!
  \*******************************/
/*! exports provided: RecipeIngredient, Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeIngredient", function() { return RecipeIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var RecipeIngredient = /** @class */ (function () {
    function RecipeIngredient() {
    }
    return RecipeIngredient;
}());

var Ingredient = /** @class */ (function () {
    function Ingredient() {
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/ingredient/ingredient.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ingredient/ingredient.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ingredient/ingredient.component.html":
/*!******************************************************!*\
  !*** ./src/app/ingredient/ingredient.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{ data.quantity }} <app-unit [dataId]=\"data.unit\"></app-unit>&nbsp;<span *ngIf=\"ingredient\">{{ ingredient.name }}</span><span *ngIf=\"data.notes\">, {{ data.notes }}</span></span><br />\n"

/***/ }),

/***/ "./src/app/ingredient/ingredient.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ingredient/ingredient.component.ts ***!
  \****************************************************/
/*! exports provided: IngredientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientComponent", function() { return IngredientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ingredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ingredient */ "./src/app/ingredient.ts");
/* harmony import */ var _ingredient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ingredient.service */ "./src/app/ingredient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IngredientComponent = /** @class */ (function () {
    function IngredientComponent(api) {
        this.api = api;
    }
    IngredientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getIngredient(this.data.id).subscribe(function (i) { return _this.ingredient = i; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ingredient__WEBPACK_IMPORTED_MODULE_1__["RecipeIngredient"])
    ], IngredientComponent.prototype, "data", void 0);
    IngredientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingredient',
            template: __webpack_require__(/*! ./ingredient.component.html */ "./src/app/ingredient/ingredient.component.html"),
            styles: [__webpack_require__(/*! ./ingredient.component.css */ "./src/app/ingredient/ingredient.component.css")]
        }),
        __metadata("design:paramtypes", [_ingredient_service__WEBPACK_IMPORTED_MODULE_2__["IngredientService"]])
    ], IngredientComponent);
    return IngredientComponent;
}());



/***/ }),

/***/ "./src/app/recipe-collection/recipe-collection.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipe-collection/recipe-collection.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipe-collection/recipe-collection.component.html":
/*!********************************************************************!*\
  !*** ./src/app/recipe-collection/recipe-collection.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n  <app-recipe *ngFor=\"let id of api.openRecipes\" [dataId]=\"id\"></app-recipe>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipe-collection/recipe-collection.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipe-collection/recipe-collection.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeCollectionComponent", function() { return RecipeCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeCollectionComponent = /** @class */ (function () {
    function RecipeCollectionComponent(api) {
        this.api = api;
    }
    RecipeCollectionComponent.prototype.ngOnInit = function () {
    };
    RecipeCollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-collection',
            template: __webpack_require__(/*! ./recipe-collection.component.html */ "./src/app/recipe-collection/recipe-collection.component.html"),
            styles: [__webpack_require__(/*! ./recipe-collection.component.css */ "./src/app/recipe-collection/recipe-collection.component.css")]
        }),
        __metadata("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]])
    ], RecipeCollectionComponent);
    return RecipeCollectionComponent;
}());



/***/ }),

/***/ "./src/app/recipe.service.ts":
/*!***********************************!*\
  !*** ./src/app/recipe.service.ts ***!
  \***********************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
        this.openRecipes = [];
    }
    RecipeService.prototype.loadRecipeDatabase = function () {
        return this.http.get('./assets/recipes.json');
    };
    RecipeService.prototype.getRecipe = function (id) {
        return this.loadRecipeDatabase().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var outputData = data.filter(function (r) {
                return r.id == id;
            });
            if ((outputData.length == 0) || (outputData.length > 1)) {
                return null;
            }
            return outputData[0];
        }));
    };
    RecipeService.prototype.getRecipeNames = function () {
        return this.loadRecipeDatabase().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.map(function (r) {
                return {
                    title: r.title,
                    id: r.id
                };
            });
        }));
    };
    RecipeService.prototype.loadRecipe = function (id) {
        var _this = this;
        this.loadRecipeDatabase().subscribe(function (data) {
            var selection = data.filter(function (r) { return r.id == id; });
            if (selection.length == 1) {
                _this.openRecipes.push(selection[0].id);
            }
        });
    };
    RecipeService.prototype.unloadRecipe = function (id) {
        this.openRecipes = this.openRecipes.filter(function (r) { return id != r; });
    };
    RecipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        // eventually we'll use the indexed db crap here, but for now we'll just use the local data
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/recipe/recipe.component.css":
/*!*********************************************!*\
  !*** ./src/app/recipe/recipe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipe/recipe.component.html":
/*!**********************************************!*\
  !*** ./src/app/recipe/recipe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\" *ngIf=\"recipe\">\n  <div class=\"card-body\">\n    <div class=\"card-title\"><h4>{{ recipe.title }}\n        <button class=\"btn btn-danger float-right\" (click)=\"close()\"><span>&times;</span></button>\n      </h4>\n    </div>\n    <div class=\"card-subtitle text-muted\">\n      From {{ recipe.source.name }} ({{ recipe.source.year }}-{{ recipe.source.month }})<br />\n      Serves {{ recipe.servings.min }} to {{ recipe.servings.max }}\n    </div>\n\n    <br/>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\" *ngFor=\"let i of recipe.ingredients\">\n        <app-ingredient [data]=\"i\"></app-ingredient>\n      </div>\n    </div>\n\n    <br/>\n\n    <ngb-tabset [justify]=\"'justified'\">\n      <ngb-tab *ngIf=\"recipe.notes\" title=\"Notes\">\n        <ng-template ngbTabContent>{{ recipe.notes }}</ng-template>\n      </ngb-tab>\n      <ngb-tab *ngFor=\"let step of recipe.steps; let i = index\" title=\"{{ i + 1 }}\">\n        <ng-template ngbTabContent>\n          <p>{{ step }}</p>\n          <div *ngIf=\"timers[i] != 0\">\n            <app-timer [time]=\"timers[i]\"></app-timer>\n          </div>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipe/recipe.component.ts":
/*!********************************************!*\
  !*** ./src/app/recipe/recipe.component.ts ***!
  \********************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(api) {
        this.api = api;
    }
    RecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getRecipe(this.dataId).subscribe(function (recipe) {
            _this.recipe = recipe;
            _this.timers = _this.recipe.steps.map(function (stepText) {
                var matches = /([0-9]+) (hour|minute|second)/.exec(stepText);
                if (matches) {
                    switch (matches[2]) {
                        case 'hour':
                            return parseInt(matches[1]) * 3600;
                        case 'minute':
                            return parseInt(matches[1]) * 60;
                        case 'second':
                            return parseInt(matches[1]);
                    }
                }
                return 0;
            });
        });
    };
    RecipeComponent.prototype.close = function () {
        this.api.unloadRecipe(this.recipe.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecipeComponent.prototype, "dataId", void 0);
    RecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.css */ "./src/app/recipe/recipe.component.css")]
        }),
        __metadata("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/select-recipe-modal/select-recipe-modal.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/select-recipe-modal/select-recipe-modal.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/select-recipe-modal/select-recipe-modal.component.html":
/*!************************************************************************!*\
  !*** ./src/app/select-recipe-modal/select-recipe-modal.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #recipeSelectContent let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Choose Recipes</h4>\n    <button type=\"button\" class=\"close\" (click)=\"modal.dismiss('Cross click')\">\n      <span>&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <button *ngFor=\"let recipe of recipes\" class=\"btn btn-light btn-block\" (click)=\"select(recipe.id)\">{{ recipe.title }}</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(recipeSelectContent)\">Open Recipes</button>\n"

/***/ }),

/***/ "./src/app/select-recipe-modal/select-recipe-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/select-recipe-modal/select-recipe-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: SelectRecipeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRecipeModalComponent", function() { return SelectRecipeModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectRecipeModalComponent = /** @class */ (function () {
    function SelectRecipeModalComponent(api, modalService) {
        this.api = api;
        this.modalService = modalService;
    }
    SelectRecipeModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getRecipeNames().subscribe(function (data) {
            _this.recipes = data.sort(function (a, b) {
                if (a.title < b.title) {
                    return -1;
                }
                else {
                    return 1;
                }
            });
        });
    };
    SelectRecipeModalComponent.prototype.open = function (content) {
        this.modalService.open(content).result.then(function (something) {
        });
    };
    SelectRecipeModalComponent.prototype.select = function (id) {
        this.api.loadRecipe(id);
    };
    SelectRecipeModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-recipe-modal',
            template: __webpack_require__(/*! ./select-recipe-modal.component.html */ "./src/app/select-recipe-modal/select-recipe-modal.component.html"),
            styles: [__webpack_require__(/*! ./select-recipe-modal.component.css */ "./src/app/select-recipe-modal/select-recipe-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], SelectRecipeModalComponent);
    return SelectRecipeModalComponent;
}());



/***/ }),

/***/ "./src/app/timer/timer.component.css":
/*!*******************************************!*\
  !*** ./src/app/timer/timer.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timer/timer.component.html":
/*!********************************************!*\
  !*** ./src/app/timer/timer.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-9\">\n    <ngb-progressbar type=\"info\" [value]=\"timeElapsed\" [max]=\"time\" [striped]=\"true\" [animated]=\"true\">{{ time - timeElapsed }}</ngb-progressbar>\n  </div>\n  <div class=\"col-md-3\">\n    <button class=\"btn btn-info\" (click)=\"start()\">Start {{ time }} second timer!</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/timer/timer.component.ts":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
    };
    TimerComponent.prototype.start = function () {
        var _this = this;
        this._timer = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000).subscribe(function (t) {
            _this.timeElapsed = t;
            if (_this.timeElapsed >= _this.time) {
                _this._timer.unsubscribe();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "time", void 0);
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.css */ "./src/app/timer/timer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/unit.service.ts":
/*!*********************************!*\
  !*** ./src/app/unit.service.ts ***!
  \*********************************/
/*! exports provided: UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnitService = /** @class */ (function () {
    function UnitService(http) {
        this.http = http;
    }
    UnitService.prototype.loadUnitDatabase = function () {
        return this.http.get('./assets/units.json');
    };
    UnitService.prototype.getUnit = function (id) {
        return this.loadUnitDatabase().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var outputData = data.filter(function (r) {
                return r.id == id;
            });
            if (outputData.length == 1) {
                return outputData[0];
            }
            return null;
        }));
    };
    UnitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UnitService);
    return UnitService;
}());



/***/ }),

/***/ "./src/app/unit/unit.component.css":
/*!*****************************************!*\
  !*** ./src/app/unit/unit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/unit/unit.component.html":
/*!******************************************!*\
  !*** ./src/app/unit/unit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"unit\">{{ unit.name }}</span>\n"

/***/ }),

/***/ "./src/app/unit/unit.component.ts":
/*!****************************************!*\
  !*** ./src/app/unit/unit.component.ts ***!
  \****************************************/
/*! exports provided: UnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitComponent", function() { return UnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _unit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit.service */ "./src/app/unit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitComponent = /** @class */ (function () {
    function UnitComponent(api) {
        this.api = api;
    }
    UnitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getUnit(this.dataId).subscribe(function (u) { return _this.unit = u; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UnitComponent.prototype, "dataId", void 0);
    UnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit',
            template: __webpack_require__(/*! ./unit.component.html */ "./src/app/unit/unit.component.html"),
            styles: [__webpack_require__(/*! ./unit.component.css */ "./src/app/unit/unit.component.css")]
        }),
        __metadata("design:paramtypes", [_unit_service__WEBPACK_IMPORTED_MODULE_1__["UnitService"]])
    ], UnitComponent);
    return UnitComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Keith\GitHub\SousChef\ng-souschef\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map