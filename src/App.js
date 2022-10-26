
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route/Route';

function App() {
  return (
    <div className='body bg-indigo-100'>
      <RouterProvider router={router} ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
