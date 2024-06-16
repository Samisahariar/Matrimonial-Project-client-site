import {
    createBrowserRouter,
   
} from "react-router-dom";
import Main from "../layouts/Main";
import Enter from "../pages/Enter";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element : <Enter></Enter>
            }
        ]
    }
])
