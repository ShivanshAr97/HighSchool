import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import NotesMain from './components/NotesMain';
import LecturesMain from './components/LecturesMain';
import DiscussionsMain from './components/DiscussionsMain';
import OpportunitiesMain from './components/OpportunitiesMain';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Main />} />

        <Route exact path='/notes' element={<NotesMain />} />

        <Route exact path='/lectures' element={<LecturesMain />} />

        <Route exact path='/discussions' element={<DiscussionsMain />} />

        <Route exact path='/opportunities' element={<OpportunitiesMain />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
