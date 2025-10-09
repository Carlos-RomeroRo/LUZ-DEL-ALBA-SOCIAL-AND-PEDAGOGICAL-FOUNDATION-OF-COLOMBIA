import Navbar from "./components/navbar/navBar";
import Footer from "./components/footer/footer";
import './index.css';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return(<>
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer></Footer>
    </BrowserRouter>
  </>);
  
}

export default App;