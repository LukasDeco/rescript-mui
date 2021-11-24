// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Grid$MaterialUi from "rescript-material-ui/src/Grid.bs.js";
import * as Lab from "@material-ui/lab";
import * as Core from "@material-ui/core";
import FormatBold from "@material-ui/icons/FormatBold";
import FormatItalic from "@material-ui/icons/FormatItalic";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import FormatColorFill from "@material-ui/icons/FormatColorFill";
import FormatAlignRight from "@material-ui/icons/FormatAlignRight";
import FormatUnderlined from "@material-ui/icons/FormatUnderlined";
import FormatAlignCenter from "@material-ui/icons/FormatAlignCenter";
import FormatAlignJustify from "@material-ui/icons/FormatAlignJustify";

var FormatAlignLeftIcon = {};

var FormatAlignCenterIcon = {};

var FormatAlignRightIcon = {};

var FormatAlignJustifyIcon = {};

var FormatBoldIcon = {};

var FormatItalicIcon = {};

var FormatUnderlinedIcon = {};

var FormatColorFillIcon = {};

var ArrowDropDownIcon = {};

function ExampleToggleButton(Props) {
  var match = React.useReducer((function (param, v) {
          return v;
        }), "left");
  var setAlignment = match[1];
  var match$1 = React.useReducer((function (param, v) {
          return v;
        }), ["bold"]);
  var setFormats = match$1[1];
  var handleAlignment = function (param, v) {
    return Curry._1(setAlignment, v);
  };
  var handleFormats = function (param, v) {
    return Curry._1(setFormats, v);
  };
  return React.createElement(Core.Grid, {
              children: null,
              container: true,
              spacing: (function () {
                    switch (2) {
                      case "0" :
                          return 0;
                      case "1" :
                          return 1;
                      case "2" :
                          return 2;
                      case "3" :
                          return 3;
                      case "4" :
                          return 4;
                      case "5" :
                          return 5;
                      case "6" :
                          return 6;
                      case "7" :
                          return 7;
                      case "8" :
                          return 8;
                      case "9" :
                          return 9;
                      case "10" :
                          return 10;
                      
                    }
                  })()
            }, React.createElement(Core.Grid, {
                  children: null,
                  item: true,
                  md: Grid$MaterialUi.Md[6],
                  sm: Grid$MaterialUi.Sm[12]
                }, React.createElement(Core.Box, {
                      children: React.createElement(Lab.ToggleButtonGroup, {
                            children: null,
                            exclusive: true,
                            onChange: handleAlignment,
                            value: match[0]
                          }, React.createElement(Lab.ToggleButton, {
                                children: React.createElement(FormatAlignLeft, {}),
                                value: "left"
                              }), React.createElement(Lab.ToggleButton, {
                                children: React.createElement(FormatAlignCenter, {}),
                                value: "center"
                              }), React.createElement(Lab.ToggleButton, {
                                children: React.createElement(FormatAlignRight, {}),
                                value: "right"
                              }), React.createElement(Lab.ToggleButton, {
                                children: React.createElement(FormatAlignJustify, {}),
                                disabled: true,
                                value: "justify"
                              })),
                      mb: 2,
                      mt: 2
                    }), React.createElement(Core.Typography, {
                      children: "Exclusive Selection",
                      gutterBottom: true
                    }), React.createElement(Core.Typography, {
                      children: "Text justification toggle buttons present options for left, right, center, full, and\n      justified text with only one item available for selection at a time. Selecting one option\n      deselects any other."
                    })), React.createElement(Core.Grid, {
                  children: null,
                  item: true,
                  md: Grid$MaterialUi.Md[6],
                  sm: Grid$MaterialUi.Sm[12]
                }, React.createElement(Core.Box, {
                      children: React.createElement(Lab.ToggleButtonGroup, {
                            children: null,
                            onChange: handleFormats,
                            value: match$1[0]
                          }, React.createElement(Lab.ToggleButton, {
                                children: React.createElement(FormatBold, {}),
                                value: "bold"
                              }), React.createElement(Lab.ToggleButton, {
                                children: React.createElement(FormatItalic, {}),
                                value: "italic"
                              }), React.createElement(Lab.ToggleButton, {
                                children: React.createElement(FormatUnderlined, {}),
                                value: "underlined"
                              }), React.createElement(Lab.ToggleButton, {
                                children: null,
                                disabled: true,
                                value: "color"
                              }, React.createElement(FormatColorFill, {}), React.createElement(ArrowDropDown, {}))),
                      mb: 2,
                      mt: 2
                    }), React.createElement(Core.Typography, {
                      children: "Multiple Selection",
                      gutterBottom: true
                    }), React.createElement(Core.Typography, {
                      children: "Logically-grouped options, like Bold, Italic, and Underline, allow multiple options to be\n      selected."
                    })));
}

var make = ExampleToggleButton;

export {
  FormatAlignLeftIcon ,
  FormatAlignCenterIcon ,
  FormatAlignRightIcon ,
  FormatAlignJustifyIcon ,
  FormatBoldIcon ,
  FormatItalicIcon ,
  FormatUnderlinedIcon ,
  FormatColorFillIcon ,
  ArrowDropDownIcon ,
  make ,
  
}
/* react Not a pure module */
