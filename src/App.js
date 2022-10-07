import React from "react";
import Header from "./Header";
import Meme from "./Meme";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element : <Header />,
        },
        {    
            path : "/meme",
            element : <Meme />
        },
    ]); 
    return (
        <div>
            
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;