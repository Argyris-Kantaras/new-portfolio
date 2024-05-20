import './App.css';
import Header from './components/Header';
import Work from './sections/work/Work';
import Home from './sections/home/Home';
import { useState } from 'react';

function App() {
  const [scrollEl,setScrollEl] = useState(0)
  return (
    <div className="App">
      <Header setScrollEl = {setScrollEl}/>
      <Home/>
      <Work scrollEl = {scrollEl}/>
    </div>
  );
}

export default App

//https://bootstrapmade.com/demo/DevFolio/