
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route/Route';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='body bg-indigo-100'>
      <RouterProvider router={router} ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
