import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Landpage from './Components/Landpage/Landpage';
import MoviesProvider from './store/MoviesContext';
import Grid from './Components/GridLatest';
import GridTop from './Components/GridTop';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import MovieDetail from './Components/MovieDetail';
import GridAll from './Components/GridAll';
import Register from './Register';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App container-fluid">
      <MoviesProvider>
        <Router>
          <Header/>
          {/* <Login/> */}
          <Register/>
            <Routes>
              {/* <Route path ='/' element={<Slider/>}/>
              <Route path ='/Latest' element={<Grid/>}/> 
              <Route path ='/Top' element={<GridTop/>}/> 
              <Route path ='/:id' element={<MovieDetail/>}/>  */}
            </Routes>
        </Router>
      </MoviesProvider>
    </div>
  );
}

export default App;
