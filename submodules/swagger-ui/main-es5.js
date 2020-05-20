function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Click on Start Game to start a new game !");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_input_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.gameStarted = !ctx_r2.gameStarted;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_3_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
      }
    }

    function AppComponent_div_3_div_34_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
      }
    }

    function AppComponent_div_3_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_3_div_34_div_2_Template, 1, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pit_r10 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.getStonesOfPit(pit_r10));
      }
    }

    function AppComponent_div_3_div_36_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
      }
    }

    function AppComponent_div_3_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_3_div_36_div_2_Template, 1, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pit_r14 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.getStonesOfPit(pit_r14));
      }
    }

    function AppComponent_div_3_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
      }
    }

    function AppComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Player 1 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Game ID :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Player 2 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Current Player : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AppComponent_div_3_div_31_Template, 1, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_div_3_div_34_Template, 3, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AppComponent_div_3_div_36_Template, 3, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AppComponent_div_3_div_39_Template, 1, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.gameData.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentPlayer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.getStonesOfPit(ctx_r1.player1Home));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.player1pits);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.player2pits);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.getStonesOfPit(ctx_r1.player2Home));
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.player1Home = {
          index: 0,
          value: "0"
        };
        this.player2Home = {
          index: 0,
          value: "0"
        };
        this.player1pits = [];
        this.player2pits = [];
        this.title = 'swagger-ui';
        this.gameStarted = false;
        this.gameData = {
          id: 0
        };
        this.currentPlayer = "Player 1";
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.processPitData({
            "1": 9,
            "2": 3,
            "3": 2,
            "4": 0,
            "5": 9,
            "6": 9,
            "7": 3,
            "8": 9,
            "9": 0,
            "10": 2,
            "11": 4,
            "12": 10,
            "13": 9,
            "14": 3
          });
        }
      }, {
        key: "processPitData",
        value: function processPitData(pitData) {
          var attribs = Object.getOwnPropertyNames(pitData);

          for (var i = 0; i < attribs.length; i++) {
            var attrib = attribs[i];

            if (i < 6) {
              this.player1pits.push({
                "index": attrib,
                "value": pitData[attrib]
              });
            } else if (i == 6) {
              this.player1Home = {
                'index': Number(attrib),
                'value': pitData[attrib]
              };
            } else if (i > 6 && i < 13) {
              this.player2pits.push({
                "index": attrib,
                "value": pitData[attrib]
              });
            } else {
              this.player2Home = {
                'index': Number(attrib),
                'value': pitData[attrib]
              };
            }
          }
        }
      }, {
        key: "getStonesOfPit",
        value: function getStonesOfPit(pit) {
          return Array(pit.value);
        }
      }, {
        key: "selectedPit",
        value: function selectedPit(pit) {// Fire event for number
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 2,
      consts: [["class", "start-game-box", 4, "ngIf"], [4, "ngIf"], [1, "start-game-box"], ["type", "button", "value", "Start Game", 1, "start-game-btn", 3, "click"], [1, "player-info"], [1, "info-table"], [1, "player-icon", "player-1"], [1, "player-icon", "player-2"], [1, "maze-block"], [1, "home-cell", "player-1", "selectable-cell"], [1, "seed-container"], ["class", "seed", 4, "ngFor", "ngForOf"], [1, "blocks"], [1, "row-1"], ["class", "stone-cell player-1 selectable-cell", 4, "ngFor", "ngForOf"], [1, "row-2"], ["onclick", "selectedPit(pit)", "class", "stone-cell player-2 selectable-cell", 4, "ngFor", "ngForOf"], [1, "home-cell", "player-2", "selectable-cell"], [1, "seed"], [1, "stone-cell", "player-1", "selectable-cell"], ["onclick", "selectedPit(pit)", 1, "stone-cell", "player-2", "selectable-cell"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 4, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 40, 6, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameStarted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStarted);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9e5e24;\n  font-family: Arial;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: medium;\n  margin-top: 50px;\n}\n\n.start-game-box[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.info-table[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 25px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  min-width: 20px;\n  min-height: 20px;\n  \n}\n\n.player-info[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.player-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  text-align: center;\n  display: inline-block;\n}\n\n.player-icon.player-1[_ngcontent-%COMP%] {\n  background-color: #e28734;\n}\n\n.player-icon.player-2[_ngcontent-%COMP%] {\n  background-color: #955e24;\n}\n\n.maze-block[_ngcontent-%COMP%] {\n  display: table;\n  margin-left: auto;\n  margin-right: auto;\n  border: 10px solid #e2ba34;\n  background-color: #e2ba34;\n}\n\n.selectable-cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n  box-shadow: inset 4px 6px 7px -4px rgba(0, 0, 0, 0.75);\n}\n\n.selectable-cell.player-1[_ngcontent-%COMP%], .home-cell.player-1[_ngcontent-%COMP%] {\n  background-color: #e28734;\n}\n\n.selectable-cell.player-2[_ngcontent-%COMP%], .home-cell.player-2[_ngcontent-%COMP%] {\n  background-color: #955e24;\n}\n\n.selectable-cell[_ngcontent-%COMP%]:hover {\n  background-color: #ffe5ce;\n}\n\n.home-cell[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 20px;\n  width: 80px;\n  border: 3px solid #e2ba34;\n}\n\n.blocks[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.row-1[_ngcontent-%COMP%], .row-2[_ngcontent-%COMP%] {\n  display: table-row;\n  border: 3px solid #e2ba34;\n  \n}\n\n\n\n.stone-cell[_ngcontent-%COMP%] {\n  display: table-cell;\n  border: 3px solid #e2ba34;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  padding: 5px;\n  vertical-align: middle;\n}\n\n.seed[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  margin: 1px;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.75);\n  background: #9e5e24;\n  background: radial-gradient(circle, #ffbb7d 0%, #ec9b20 42%, #67360b 100%);\n  \n}\n\n.start-game-btn[_ngcontent-%COMP%] {\n  background-color: #e2ba34;\n  width: 250px;\n  height: 50px;\n  font-size: 20px;\n  border: 2px solid #955e24;\n  color: #955e24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXFByb2plY3RzXFxzd2FnZ2VyLXVpL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURERTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUNLSjs7QURIRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNPSjs7QURMRTtFQUNFLHlCQUFBO0FDUUo7O0FETkU7RUFDRSx5QkFBQTtBQ1NKOztBRFBFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDVUo7O0FEUkU7RUFDRSxlQUFBO0VBR0Esc0RBQUE7QUNXSjs7QURURTs7RUFFRSx5QkFBQTtBQ1lKOztBRFZFOztFQUVFLHlCQUFBO0FDYUo7O0FEWEU7RUFDRSx5QkFBQTtBQ2NKOztBRFpFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNlSjs7QURiRTtFQUNFLG1CQUFBO0FDZ0JKOztBRGRFOztFQUVFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQ2lCSjs7QURkQTs7O0tBQUE7O0FBS0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDZ0JKOztBRGJFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUdBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSwwRUFBQTtFQUNKOytHQUFBO0FDaUJBOztBRGJFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNnQkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjOWU1ZTI0O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIH1cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiAgLnN0YXJ0LWdhbWUtYm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbmZvLXRhYmxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICBkaXZ7XHJcbiAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZGFya29saXZlZ3JlZW47ICovXHJcbiAgfVxyXG4gIC5wbGF5ZXItaW5mb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucGxheWVyLWljb257XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5wbGF5ZXItaWNvbi5wbGF5ZXItMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjg3MzQ7XHJcbiAgfVxyXG4gIC5wbGF5ZXItaWNvbi5wbGF5ZXItMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NTVlMjQ7XHJcbiAgfVxyXG4gIC5tYXplLWJsb2Nre1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmdiKDIyNiwgMTg2LCA1Mik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJiYTM0O1xyXG4gIH1cclxuICAuc2VsZWN0YWJsZS1jZWxse1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCA0cHggNnB4IDdweCAtNHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDRweCA2cHggN3B4IC00cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDRweCA2cHggN3B4IC00cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICB9XHJcbiAgLnNlbGVjdGFibGUtY2VsbC5wbGF5ZXItMSxcclxuICAuaG9tZS1jZWxsLnBsYXllci0xe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyODczNDtcclxuICB9XHJcbiAgLnNlbGVjdGFibGUtY2VsbC5wbGF5ZXItMixcclxuICAuaG9tZS1jZWxsLnBsYXllci0ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1NWUyNDtcclxuICB9XHJcbiAgLnNlbGVjdGFibGUtY2VsbDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU1Y2U7XHJcbiAgfVxyXG4gIC5ob21lLWNlbGx7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMjYsIDE4NiwgNTIpO1xyXG4gIH1cclxuICAuYmxvY2tze1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB9XHJcbiAgLnJvdy0xLFxyXG4gIC5yb3ctMntcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMjYsIDE4NiwgNTIpO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYzsgKi9cclxuICB9XHJcblxyXG4vKiAgIC5zZWVkLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfSAqL1xyXG5cclxuICAuc3RvbmUtY2VsbHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjI2LCAxODYsIDUyKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5zZWVke1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1OCw5NCwzNik7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2IoMjU1LCAxODcsIDEyNSkgMCUsIHJnYmEoMjM2LDE1NSwzMiwxKSA0MiUsIHJnYigxMDMsIDU0LCAxMSkgMTAwJSk7XHJcbi8qIGJhY2tncm91bmQ6IHJnYigyMjYsNzcsNTIpO1xyXG5iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIyNiw3Nyw1MiwxKSAwJSwgcmdiYSgxNTgsNTQsMzYsMSkgNDIlLCByZ2JhKDI1NSwyMDMsMTU3LDEpIDEwMCUpOyAqL1xyXG4gIH1cclxuXHJcbiAgLnN0YXJ0LWdhbWUtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyYmEzNDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5NTVlMjQ7XHJcbiAgICBjb2xvcjogIzk1NWUyNDtcclxuICB9IiwiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOWU1ZTI0O1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zdGFydC1nYW1lLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbmZvLXRhYmxlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuZGl2IHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBkYXJrb2xpdmVncmVlbjsgKi9cbn1cblxuLnBsYXllci1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBsYXllci1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wbGF5ZXItaWNvbi5wbGF5ZXItMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjg3MzQ7XG59XG5cbi5wbGF5ZXItaWNvbi5wbGF5ZXItMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTVlMjQ7XG59XG5cbi5tYXplLWJsb2NrIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZTJiYTM0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJiYTM0O1xufVxuXG4uc2VsZWN0YWJsZS1jZWxsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDRweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCA0cHggNnB4IDdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDRweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLnNlbGVjdGFibGUtY2VsbC5wbGF5ZXItMSxcbi5ob21lLWNlbGwucGxheWVyLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI4NzM0O1xufVxuXG4uc2VsZWN0YWJsZS1jZWxsLnBsYXllci0yLFxuLmhvbWUtY2VsbC5wbGF5ZXItMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTVlMjQ7XG59XG5cbi5zZWxlY3RhYmxlLWNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNWNlO1xufVxuXG4uaG9tZS1jZWxsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlMmJhMzQ7XG59XG5cbi5ibG9ja3Mge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4ucm93LTEsXG4ucm93LTIge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlMmJhMzQ7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7ICovXG59XG5cbi8qICAgLnNlZWQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9ICovXG4uc3RvbmUtY2VsbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlMmJhMzQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2VlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBiYWNrZ3JvdW5kOiAjOWU1ZTI0O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmZiYjdkIDAlLCAjZWM5YjIwIDQyJSwgIzY3MzYwYiAxMDAlKTtcbiAgLyogYmFja2dyb3VuZDogcmdiKDIyNiw3Nyw1Mik7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjI2LDc3LDUyLDEpIDAlLCByZ2JhKDE1OCw1NCwzNiwxKSA0MiUsIHJnYmEoMjU1LDIwMywxNTcsMSkgMTAwJSk7ICovXG59XG5cbi5zdGFydC1nYW1lLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmJhMzQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NTVlMjQ7XG4gIGNvbG9yOiAjOTU1ZTI0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pit_block_pit_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pit-block/pit-block.component */
    "./src/app/pit-block/pit-block.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pit_block_pit_block_component__WEBPACK_IMPORTED_MODULE_3__["PitBlockComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pit_block_pit_block_component__WEBPACK_IMPORTED_MODULE_3__["PitBlockComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pit-block/pit-block.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pit-block/pit-block.component.ts ***!
    \**************************************************/

  /*! exports provided: PitBlockComponent */

  /***/
  function srcAppPitBlockPitBlockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PitBlockComponent", function () {
      return PitBlockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PitBlockComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PitBlockComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
      }
    }

    var PitBlockComponent = /*#__PURE__*/function () {
      function PitBlockComponent() {
        _classCallCheck(this, PitBlockComponent);

        this.stones = 0;
      }

      _createClass(PitBlockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stones = Math.floor(Math.random() * Math.floor(15));
        }
      }, {
        key: "totalStones",
        value: function totalStones() {
          return Array(this.stones);
        }
      }]);

      return PitBlockComponent;
    }();

    PitBlockComponent.ɵfac = function PitBlockComponent_Factory(t) {
      return new (t || PitBlockComponent)();
    };

    PitBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PitBlockComponent,
      selectors: [["app-pit-block"]],
      decls: 3,
      vars: 2,
      consts: [[1, "stone-cell"], [4, "ngIf"], ["class", "seed", 4, "ngFor", "ngForOf"], [1, "seed"]],
      template: function PitBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PitBlockComponent_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PitBlockComponent_div_2_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stones);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.totalStones());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".stone-cell[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 5px;\n  width: 80px;\n  height: 80px;\n  border: 1px solid darkolivegreen;\n  vertical-align: middle;\n}\n\n.seed[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  background-color: green;\n  margin: 1px;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGl0LWJsb2NrL0Y6XFxQcm9qZWN0c1xcc3dhZ2dlci11aS9zcmNcXGFwcFxccGl0LWJsb2NrXFxwaXQtYmxvY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BpdC1ibG9jay9waXQtYmxvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUdBLCtDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9waXQtYmxvY2svcGl0LWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0b25lLWNlbGx7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrb2xpdmVncmVlbjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnNlZWR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59IiwiLnN0b25lLWNlbGwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtvbGl2ZWdyZWVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2VlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAxcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PitBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pit-block',
          templateUrl: './pit-block.component.html',
          styleUrls: ['./pit-block.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\Projects\swagger-ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map