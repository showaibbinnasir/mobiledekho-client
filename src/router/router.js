import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Deafult from "../layout/Deafult";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Deafult></Deafult>,
        children : [
            {
                path: '/',
                element: <Homepage></Homepage>,
                loader: ()=> fetch('http://localhost:5000/brands')

            },
            {
                path : '/blog',
                element: <div>This is blog page</div>
            },
            {
                path : '/login',
                element: <div>This is login page</div>
            }
        ]
    }
])

export default router