// Generated by ReScript, PLEASE EDIT WITH CARE

import * as ExampleBox from "./ExampleBox.bs.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ExampleList from "./ExampleList.bs.js";
import * as ExampleTabs from "./ExampleTabs.bs.js";
import * as ExampleIcons from "./ExampleIcons.bs.js";
import * as Material from "@mui/material";
import * as ExampleSelect from "./ExampleSelect.bs.js";
import * as ExampleSlider from "./ExampleSlider.bs.js";
import * as ExamplePopover from "./ExamplePopover.bs.js";
import * as ExampleStepper from "./ExampleStepper.bs.js";
import * as ExampleDashboard from "./ExampleDashboard.bs.js";
import * as ExampleRadioGroup from "./ExampleRadioGroup.bs.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as ExampleTextFieldSize from "./ExampleTextFieldSize.bs.js";
import * as ExampleThemeProvider from "./ExampleThemeProvider.bs.js";
import * as ExampleThemeProviderOverride from "./ExampleThemeProviderOverride.bs.js";

function Examples(props) {
  return JsxRuntime.jsxs(JsxRuntime.Fragment, {
              children: [
                JsxRuntime.jsx(Material.Grid, {
                      children: Caml_option.some(JsxRuntime.jsx(Material.Grid, {
                                children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                          variant: "h4",
                                          children: "ReScript Material-UI Examples"
                                        })),
                                item: true,
                                md: 12
                              })),
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: "Icons"
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleIcons.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: "Popover"
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExamplePopover.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: "Theme Provider"
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleThemeProvider.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: "Theme Provider Override"
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleThemeProviderOverride.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: "List"
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleList.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: Caml_option.some(JsxRuntime.jsx("a", {
                                                  children: "Tabs",
                                                  href: "https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/tabs/DisabledTabs.tsx",
                                                  target: "_blank"
                                                }))
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleTabs.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: Caml_option.some(JsxRuntime.jsx("a", {
                                                  children: "Stepper",
                                                  href: "https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/steppers/VerticalLinearStepper.tsx",
                                                  target: "_blank"
                                                }))
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleStepper.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: Caml_option.some(JsxRuntime.jsx("a", {
                                                  children: "Select",
                                                  href: "https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/selects/SimpleSelect.tsx",
                                                  target: "_blank"
                                                }))
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleSelect.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: Caml_option.some(JsxRuntime.jsx("a", {
                                                  children: "RadioGroup",
                                                  href: "https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/radio-buttons/RadioButtonsGroup.tsx",
                                                  target: "_blank"
                                                }))
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleRadioGroup.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: Caml_option.some(JsxRuntime.jsx("a", {
                                                  children: "Slider",
                                                  href: "https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/slider/InputSlider.tsx",
                                                  target: "_blank"
                                                }))
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleSlider.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: Caml_option.some(JsxRuntime.jsx("a", {
                                                  children: "Dashboard",
                                                  href: "https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/slider/InputSlider.tsx",
                                                  target: "_blank"
                                                }))
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleDashboard.make, {
                                        sidebar: "Sidebar",
                                        children: "Content"
                                      })),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: Caml_option.some(JsxRuntime.jsx("a", {
                                                  children: "Box",
                                                  href: "https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/box/box.md",
                                                  target: "_blank"
                                                }))
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleBox.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx(Material.Divider, {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsxs(Material.Grid, {
                      alignItems: "center",
                      children: [
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(Material.Typography, {
                                        variant: "h5",
                                        children: "TextField size Prop"
                                      })),
                              item: true,
                              md: 6
                            }),
                        JsxRuntime.jsx(Material.Grid, {
                              children: Caml_option.some(JsxRuntime.jsx(ExampleTextFieldSize.make, {})),
                              item: true,
                              md: 6
                            })
                      ],
                      container: true
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {})
              ]
            });
}

var make = Examples;

export {
  make ,
}
/* ExampleBox Not a pure module */
