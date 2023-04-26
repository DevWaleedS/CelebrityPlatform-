import { createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import { Header } from "../components";
import About from "./Pages/About";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Contact from "./Pages/Contact";

export let Router = createBrowserRouter([
    {
        path: "/home",
        element: <Layout />,
        errorElement: <div>errorElement</div>,
        children: [
            {
                path: "about",
                element: <About />,
            },
            {
                path: "term",
                element: <Terms />,
            },
            {
                path: "privacy",
                element: <Privacy />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },

    {
        path: "/",
        element: <Home />,
    },
]);
