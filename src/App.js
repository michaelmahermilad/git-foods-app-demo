import logo from './logo.svg';
import './App.css';
import Heroswipper from './Components/Heroswipper';
import Navbar from "./Components/Navbar/index.jsx"
import About from './Components/About.jsx';
import About2 from './Components/About2.jsx';
import Brands from './Components/Brands.jsx';
import Cards from './Components/Cards.jsx';
import Footer from './Components/Footer.jsx';
import Contactus from './Components/Contactus.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
            <BrowserRouter >
      <div className="App">
 
      <Navbar/>
       
        <Routes>
          <Route path="/" element={<>

             
<Heroswipper/>
<div style={{height:"1rem"}}></div>
<h1 style={{width:"100%",textAlign:"center" ,color:"green"}}>~ Our Brands ~</h1>
<Brands  />
<div style={{height:"3rem"}}>

</div>

<About/>
<h1 style={{width:"100%",textAlign:"center" ,color:"green"}}>~ Our Certificates ~</h1>

<Brands/>
<div style={{height:"3rem"}}>

</div>
<h1 style={{width:"100%",textAlign:"center" ,color:"green"}}>~ Why choose Kail AGRO ~</h1>
<Cards/>
<div style={{height:"3rem"}}>

</div>
          </>} />
          <Route path="/contact" element={<Contactus/>} />
       
         </Routes>
  
 <About2/>

 <Footer/>
         </div>
      </BrowserRouter>{" "}
 
    </div>
  );
}

export default App;
