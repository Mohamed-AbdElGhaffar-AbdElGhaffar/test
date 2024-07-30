import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

let routers = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/> }
  ]}
])

function App() {
  return <>
    <RouterProvider router={routers} ></RouterProvider>
  </>
}

export default App;
