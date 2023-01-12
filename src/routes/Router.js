
import { createBrowserRouter } from 'react-router-dom';
import ContuctUs from '../components/ContuctUs/ContuctUs';
import Home from '../components/Home/Home';
import Main from '../Layouts/Main';
const routs=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/contactus',
                element:<ContuctUs></ContuctUs>
            }
        ]
    }
])
  

export default routs