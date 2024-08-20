import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import {
     HashRouter,
     Routes,
     Route 
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
          <HashRouter>
          <Navbar  />
          <div className='heading text-center my-3'>
             <h1>DigiNews- Anytime Anywhere news</h1>
          </div>
          <Routes>
          <Route exact path="/" element={<News country="in" categories="general" />} />
          <Route exact path="/science" element={<News country="in" categories="science" />} />
          <Route exact path="/sports" element={<News country="in" categories="sports" />} />
          <Route exact path="/general" element={<News country="in" categories="general" />} />
          <Route exact path="/tech" element={<News country="in" categories="tech" />} />
          <Route exact path="/business" element={<News country="in" categories="business" />} />
          <Route exact path="/health" element={<News country="in" categories="health" />} />
          <Route exact path="/entertainment" element={<News country="in" categories="entertainment" />} />
          <Route exact path="/politics" element={<News country="in" categories="politics" />} />
          <Route exact path="/food" element={<News country="in" categories="food" />} />
          <Route exact path="/travel" element={<News country="in" categories="travel" />} />
          </Routes>
          </HashRouter>
         </div>
        
    )
  }
}

