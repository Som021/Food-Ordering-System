import './App.css'
import Header from './header/page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/Login';

function App() {
  
  return(
    <>
        <Routes>
          <Route index element = {<IndexPage />}/>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
    </>
  );
}

export default App
 