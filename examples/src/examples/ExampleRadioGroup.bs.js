// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Material from "@mui/material";
import * as JsxRuntime from "react/jsx-runtime";

function ExampleRadioGroup(props) {
  var match = React.useState(function () {
        return "Yes";
      });
  var setState = match[1];
  return JsxRuntime.jsxs(Material.RadioGroup, {
              children: [
                JsxRuntime.jsx(Material.FormControlLabel, {
                      control: JsxRuntime.jsx(Material.Radio, {}),
                      label: "Yes",
                      value: "Yes"
                    }),
                JsxRuntime.jsx(Material.FormControlLabel, {
                      control: JsxRuntime.jsx(Material.Radio, {}),
                      label: "No",
                      value: "No"
                    }),
                JsxRuntime.jsx(Material.FormControlLabel, {
                      control: JsxRuntime.jsx(Material.Radio, {}),
                      label: "Maybe",
                      value: "Maybe"
                    })
              ],
              name: "answer",
              onChange: (function (e, param) {
                  var value = e.target.value;
                  setState(function (param) {
                        return value;
                      });
                }),
              value: Caml_option.some(match[0])
            });
}

var make = ExampleRadioGroup;

export {
  make ,
}
/* react Not a pure module */
