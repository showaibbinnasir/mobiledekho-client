import { createBrowserRouter } from "react-router-dom";
import AllPhone from "../components/AllPhone/AllPhone";
import Blog from "../components/Blog/Blog";
import AddProduct from "../components/Dashboard/AddProduct";
import AddProductForm from "../components/Dashboard/AddProductForm";
import AllProucts from "../components/Dashboard/AllProucts";
import Alluser from "../components/Dashboard/Alluser";
import Dashboard from "../components/Dashboard/Dashboard";
import Orders from "../components/Dashboard/Orders";
import Payment from "../components/Dashboard/Payment";
import ErrorPage from "../components/ErrorPage/ErrorPage";
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
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path: '/',
                element: <Homepage></Homepage>,
                loader: ()=> fetch('http://localhost:5000/brands')

            },
            {
                path : '/blog',
                element: <Blog></Blog>
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
            },{
                path : '/allphone',
                element : <PrivateRouter><AllPhone></AllPhone></PrivateRouter>,
                loader: ()=> fetch('http://localhost:5000/products')
            }
        ]
    },
    {
        path : '/dashboard',
        element : <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path : '/dashboard',
                element : <h1 className="lg:hidden block">Click right menubar to open drawer</h1>
            },
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
            },{
                path : '/dashboard/addproduct',
                element : <AddProduct></AddProduct>,
                loader: ()=> fetch('http://localhost:5000/brands')
            },{
                path : '/dashboard/addproductfrom',
                element : <AddProductForm></AddProductForm>
            },
            {
                path : '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader : ({params})=> fetch(`http://localhost:5000/orders/${params.id}`) 
            }
            
        ]
    }
])

export default router