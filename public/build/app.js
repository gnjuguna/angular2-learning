webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var browser_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(223);
	var http_1 = __webpack_require__(247);
	var common_dom_1 = __webpack_require__(189);
	var app_component_1 = __webpack_require__(262);
	function main() {
	    return browser_1.bootstrap(app_component_1.AppComponent, [
	        http_1.HTTP_PROVIDERS,
	        router_1.ROUTER_PROVIDERS,
	        common_dom_1.ELEMENT_PROBE_PROVIDERS
	    ])
	        .catch(function (err) { return console.error(err); });
	}
	document.addEventListener('DOMContentLoaded', main);


/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var hero_from_component_ts_1 = __webpack_require__(263);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [hero_from_component_ts_1.HeroFormComponent],
	            template: "\n    <hero-form></hero-form>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	})();
	exports.AppComponent = AppComponent;


/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var hero_1 = __webpack_require__(264);
	var HeroFormComponent = (function () {
	    function HeroFormComponent() {
	        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
	        this.model = new hero_1.Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
	        this.submitterd = false;
	    }
	    HeroFormComponent.prototype.onSubmit = function () {
	        this.submitterd = true;
	    };
	    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
	        get: function () {
	            return JSON.stringify(this.model);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    HeroFormComponent = __decorate([
	        core_1.Component({
	            selector: 'hero-form',
	            templateUrl: 'app/hero-form.component.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HeroFormComponent);
	    return HeroFormComponent;
	})();
	exports.HeroFormComponent = HeroFormComponent;


/***/ },

/***/ 264:
/***/ function(module, exports) {

	var Hero = (function () {
	    function Hero(id, name, power, alterEgi) {
	        this.id = id;
	        this.name = name;
	        this.power = power;
	        this.alterEgi = alterEgi;
	    }
	    return Hero;
	})();
	exports.Hero = Hero;


/***/ }

});
//# sourceMappingURL=app.map