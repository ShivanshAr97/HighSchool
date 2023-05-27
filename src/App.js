import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import NotesMain from './components/NotesMain';
import LecturesMain from './components/LecturesMain';
import PageNotFound from './components/PageNotFound';
import OpportunitiesMain from './components/OpportunitiesMain';
import Footer from './components/Footer';
import ScreenShots from './components/ScreenShots';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Main />} />

        <Route exact path='/notes' element={<NotesMain />} />

        <Route exact path='/lectures' element={<LecturesMain />} />

        <Route exact path='/practice' element={<ScreenShots />} />

        <Route exact path='/opportunities' element={<OpportunitiesMain />} />

        <Route path="*" element={<PageNotFound/>} />

      </Routes>
      <Footer />

    </>
  );
}

export default App;
