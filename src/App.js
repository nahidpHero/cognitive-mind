
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routs from './routes/Router';




function App() {
  return (
    <div className="App">
   <RouterProvider router={routs}>
   </RouterProvider>
    </div>
  );
}

export default App;
