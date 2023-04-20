import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/router';

function App() {
  
  return (
    
    <div className=" max-w-screen-2xl mx-auto text-lg text-white" >
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
