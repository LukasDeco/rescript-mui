// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Material from "@mui/material";
import * as JsxRuntime from "react/jsx-runtime";

function ExampleTextFieldSize(props) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx(Material.TextField, {
                      fullWidth: true,
                      placeholder: "None",
                      variant: "outlined"
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.TextField, {
                      fullWidth: true,
                      placeholder: "Medium",
                      size: "medium",
                      variant: "outlined"
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.TextField, {
                      fullWidth: true,
                      placeholder: "Small",
                      size: "small",
                      variant: "outlined"
                    })
              ]
            });
}

var make = ExampleTextFieldSize;

export {
  make ,
}
/* @mui/material Not a pure module */
