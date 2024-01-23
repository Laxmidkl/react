

import Toolbar from './components/Navigation/Toolbar';
import Footer from './components/Navigation/Footer_btw';

import Home from './components/Page/Home';
import {Routes,Route} from "react-router-dom"
import Aboutus from './components/Page/Aboutus';
import Service  from './components/Page/Service';
import Blog  from './components/Page/Blog';
import Contact from './components/Page/Contact';

function App() {

  return (
    <div className='bg-white-500 text-l text-green-950 '>
      <Toolbar />
      <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/about" element={<Aboutus></Aboutus>}/>
      <Route path="/service" element={<Service></Service>}/>
      <Route path="/blog" element={<Blog></Blog>}/>
      <Route path="/contact" element={<Contact></Contact>}/>


      </Routes>

     





<Footer></Footer>

    </div>









  )
}

export default App
