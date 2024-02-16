import React from "react";
import { Home } from '../pages/Home/Home'
import { About } from '../pages/About/About'
import { Shop } from '../pages/Shop/Shop'
import { Projects } from '../pages/Projects/Projects'
import { News } from '../pages/News/News'

export const main_pages = [
    {
        component: <Home />,
    },
    {
        component: <About />,
        path: "about",
    },
    {
        component: <Shop />,
        path: "shop",
    },
    {
        component: <Projects />,
        path: "projects",
    },
    {
        component: <News />,
        path: "news",
    },
];
