(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[175],{2541:function(e,a,t){"use strict";t.r(a);var n=t(131),o=t(159),r=t(0),l=t.n(r);a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{variant:"h4",className:"mb-24"},"Code Splitting"),l.a.createElement(o.a,{className:"mb-16",component:"p"},"Code-splitting your app can help you \u201clazy-load\u201d just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven\u2019t reduced the overall amount of code in your app, you\u2019ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load."),l.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h5"},"Route-based code splitting"),l.a.createElement(o.a,{className:"mb-16",component:"p"},"We are using ",l.a.createElement("b",null,"React.lazy")," function to dynamically import component.",l.a.createElement("br",null),l.a.createElement("b",null,"FuseSuspense")," component is created to avoid the repetition of ",l.a.createElement("b",null,"React.Suspense "),"component defaults, which is used in the theme layouts.",l.a.createElement("br",null),"Check out the examples below to see dynamically or regular way of importing the components."),l.a.createElement("div",{className:"flex flex-wrap lg:-mx-4"},l.a.createElement("div",{className:"w-full lg:w-1/2 lg:px-4"},l.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h6"},"Lazy Loaded Component:"),l.a.createElement(n.a,{component:"pre",className:"language-jsx my-16"},"\n                            import React from 'react';\n\n                            export const AnalyticsDashboardAppConfig = {\n                                settings: {\n                                    layout: {\n                                        config: {}\n                                    }\n                                },\n                                routes  : [\n                                    {\n                                        path     : '/apps/dashboards/analytics',\n                                        component: React.lazy(() => import('./AnalyticsDashboardApp'))\n                                    }\n                                ]\n                            };\n                            ")),l.a.createElement("div",{className:"w-full lg:w-1/2 lg:px-4"},l.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h6"},"Regular Loaded Component:"),l.a.createElement(n.a,{component:"pre",className:"language-jsx my-16"},"\n                                    import AnalyticsDashboardApp from './AnalyticsDashboardApp';\n\n                                    export const AnalyticsDashboardAppConfig = {\n                                        settings: {\n                                            layout: {\n                                                config: {}\n                                            }\n                                        },\n                                        routes  : [\n                                            {\n                                                path     : '/apps/dashboards/analytics',\n                                                component: AnalyticsDashboardApp\n                                            }\n                                        ]\n                                    };\n                                  "))),l.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h5"},"Code splitting the Redux reducers (Dynamically loaded reducers)"),l.a.createElement(o.a,{className:"mb-16",component:"p"},"We created Higher Order Component ",l.a.createElement("code",null,"withReducer")," to load redux reducer before the component render.",l.a.createElement("br",null),"You just need to pass the ",l.a.createElement("b",null,"key")," and the ",l.a.createElement("b",null,"reducer")," to the component."),l.a.createElement(n.a,{component:"pre",className:"language-jsx my-16"},"\n                              import withReducer from 'app/store/withReducer';\n                              import reducer from './store';\n                              .\n                              .\n                              export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);\n                            "))}}}]);