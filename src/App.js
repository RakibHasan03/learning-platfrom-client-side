
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route/Route';

function App() {
  return (
    <div className='body bg-indigo-100'>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
