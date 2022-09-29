import './App.css'
import Navigation from './components/navigation/Navigation'
import {BrowserRouter, Routes,Route,} from 'react-router-dom'
import Home from './pages/Home'
import Cv from "./pages/Cv"
import Show from "./pages/Show"
import Contact from './pages/Contact'
import  Erreur404 from './pages/Erreur404'
import Resumer from './pages/Resumer'
import Animation from './pages/Animation'
import Projet from './pages/projet'

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/show' element={<Show />}/>
            <Route path='/cv' element={<Cv />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/animation' element={<Animation />}/>
            <Route path='/projet' element={<Projet/>}/>
            <Route path='/resumer' element={<Resumer />}/>
            <Route path='*' element={<Erreur404 /> }/>
          </Routes>
      </BrowserRouter>

      

    </div>
  );
}

export default App;
