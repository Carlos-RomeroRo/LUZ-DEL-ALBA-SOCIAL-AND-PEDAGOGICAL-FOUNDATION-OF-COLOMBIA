import Navbar from "./components/navbar/navBar";
import './index.css';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return(<>
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  </>);
  
}

export default App;