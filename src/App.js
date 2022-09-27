import './App.css'
import Navigation from './components/navigation/Navigation'
import {BrowserRouter, Routes,Route,Swich} from 'react-router-dom'
import Home from './pages/Home'
import Cv from "./pages/Cv"
import Contact from './pages/Contact'
import  Erreur404 from './pages/Erreur404'


function App() {
  return (
    <div className="App">
      <h1>site olygood</h1>
      <BrowserRouter>
        <Navigation />
        
         <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/cv' element={<Cv />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<Erreur404 /> }/>
         </Routes>

            
         
        

      </BrowserRouter>

      

    </div>
  );
}

export default App;
