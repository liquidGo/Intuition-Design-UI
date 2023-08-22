/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Home from "./pages/home";
import Test from "./pages/test/test";
import { demoConfig } from "./config/demoConfig";
const demos = demoConfig;

export default [
    {
        path: '/gallery',
        component: Home,
        exact: true,
    }, {
        path: '/gallery/:component?/:demo?',
        component: (props) => {
            const { demo } = props.match.params;
            const Component = demos[demo];
            return <Component />
        },
        exact: true,
    }, {
        path: '/test',
        component: Test,
        exact: true,
    }
]
