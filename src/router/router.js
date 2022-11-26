import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Products from "../components/Products/Products";
import Register from "../components/Register/Register";
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
            },{
                path : '/products/:id',
                element : <Products></Products>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },{
                path : '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router