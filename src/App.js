import './App.css';
import { RouterProvider } from "react-router-dom";
import { routers } from './Routers/Routers/Routers';



function App() {
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
