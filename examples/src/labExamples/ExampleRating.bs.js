// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Lab from "@material-ui/lab";
import * as Core from "@material-ui/core";
import * as MaterialUi_Typography from "rescript-material-ui/src/MaterialUi_Typography.bs.js";

function ExampleRating(Props) {
  var match = React.useReducer((function (param, v) {
          return v;
        }), 2);
  var setValue = match[1];
  var value = match[0];
  return React.createElement("div", undefined, React.createElement(Core.Box, {
                  component: "fieldset",
                  children: null,
                  borderColor: "transparent",
                  mb: 3
                }, React.createElement(Core.Typography, {
                      children: "Controlled",
                      component: MaterialUi_Typography.Component.string("legend")
                    }), React.createElement(Lab.Rating, {
                      name: "simple-controlled",
                      onChange: (function (param, newValue) {
                          return Curry._1(setValue, newValue);
                        }),
                      value: value
                    })), React.createElement(Core.Box, {
                  component: "fieldset",
                  children: null,
                  borderColor: "transparent",
                  mb: 3
                }, React.createElement(Core.Typography, {
                      children: "Read only",
                      component: MaterialUi_Typography.Component.string("legend")
                    }), React.createElement(Lab.Rating, {
                      name: "read-only",
                      readOnly: true,
                      value: value
                    })), React.createElement(Core.Box, {
                  component: "fieldset",
                  children: null,
                  borderColor: "transparent",
                  mb: 3
                }, React.createElement(Core.Typography, {
                      children: "Disabled",
                      component: MaterialUi_Typography.Component.string("legend")
                    }), React.createElement(Lab.Rating, {
                      disabled: true,
                      name: "disabled",
                      value: value
                    })), React.createElement(Core.Box, {
                  component: "fieldset",
                  children: null,
                  borderColor: "transparent",
                  mb: 3
                }, React.createElement(Core.Typography, {
                      children: "Pristine",
                      component: MaterialUi_Typography.Component.string("legend")
                    }), React.createElement(Lab.Rating, {
                      name: "pristine",
                      value: 0
                    })));
}

var make = ExampleRating;

export {
  make ,
  
}
/* react Not a pure module */
