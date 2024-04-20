import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import AddParticipant from './pages/AddParticipant';
import SearchParticipant from './pages/SearchParticipant';
import SearchBatch from './pages/SearchBatch';
import CreateBatch from './pages/CreateBatch';
import Navbar from './components/Navbar';
import AddCoach from './pages/AddCoach';
import SearchCoach from './pages/SearchCoach';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/add-participant" element={<AddParticipant />} />
          <Route path="/search-participant" element={<SearchParticipant />} />
          <Route path="/search-batch" element={<SearchBatch />} />
          <Route path="/add-coach" element={<AddCoach />} />
          <Route path="/search-coach" element={<SearchCoach />} />
          <Route path="/create-batch" element={<CreateBatch />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  
  return (
    <>
   <Navbar/>
  <h1>Welcome to the Home Page!</h1>;
  </>
  )
}

export default App;
