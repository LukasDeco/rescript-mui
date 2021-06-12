// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Core from "@material-ui/core";
import * as Styles from "@material-ui/core/styles";

var useStyles = Styles.makeStyles(function (theme) {
      return {
              root: {
                margin: "0 auto",
                maxWidth: "970px",
                width: "100%"
              },
              rounded: {
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                padding: "15px"
              }
            };
    });

var Styles$1 = {
  useStyles: useStyles
};

function NewImplementationTheme(Props) {
  var classes = Curry._1(useStyles, undefined);
  return React.createElement(Core.Paper, {
              children: React.createElement(Core.Typography, {
                    children: "Some Content"
                  }),
              classes: {
                root: classes.root,
                rounded: classes.rounded
              }
            });
}

var make = NewImplementationTheme;

export {
  Styles$1 as Styles,
  make ,
  
}
/* useStyles Not a pure module */
