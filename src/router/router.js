import { createBrowserRouter } from "react-router-dom";
import AllProucts from "../components/Dashboard/AllProucts";
import Alluser from "../components/Dashboard/Alluser";
import Dashboard from "../components/Dashboard/Dashboard";
import Orders from "../components/Dashboard/Orders";
import Homepage from "../components/Homepage/Homepage";
import Login from "../components/Login/Login";
import PrivateRouter from "../components/PrivateRouter/PrivateRouter";
import Products from "../components/Products/Products";
import Register from "../components/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
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
                element: <Login></Login>
            },{
                path : '/products/:id',
                element : <PrivateRouter><Products></Products></PrivateRouter>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },{
                path : '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path : '/dashboard',
        element : <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children: [
            {
                path : '/dashboard/orders',
                element: <Orders></Orders>
            },
            {
                path : '/dashboard/all-user',
                element : <Alluser></Alluser>,
                
            },
            {
                path : '/dashboard/allproducts',
                element : <AllProucts></AllProucts>
            }
            
        ]
    }
])

export default router