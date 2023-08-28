import React from 'react'

import Home from './pages/Home'
// import Playlist from './pages/Playlists/Playlist'
// import Results from './pages/Result/result'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
    <main>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          {/* <Route path='/playlist' exact component={Playlist} />
          <Route path='/result' exact component={Result} /> */}
        </Routes>
      </Router>
    </main>
  )}
}

export default App