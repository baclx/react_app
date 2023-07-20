import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyTickets from "./pages/my_ticket";
import DetailTickets from "./pages/detail_ticket";
import Home from "./pages/home";

import '../src/style/grid.css'
import '../src/style/main.css'
import '../src/style/base.css'

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyTickets" element={<MyTickets />} />
            <Route path="/DetailTickets" element={<DetailTickets />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
