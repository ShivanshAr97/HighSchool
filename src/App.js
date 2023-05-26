import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Notes from './components/Notes';
import Lectures from './components/Lectures';
import Discussions from './components/Discussions';
import Opportunities from './components/Opportunities';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      
      <Main />

      <Notes heading="Incomplete Notes?" content="Read from the best in field notes written by the top scorers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem possimus molestias minima facilis ratione, quod, commodi labore assumenda, harum iusto saepe sed corrupti quibusdam quas provident optio suscipit quo! Similique aperiam ut corrupti accusantium, deleniti dolore libero. Accusantium, sapiente." button="View Notes" />

      <Lectures heading="Need to Study a topic or Revise the Syllabus?" content="Read from the best in field notes written by the top scorers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem possimus molestias minima facilis ratione, quod, commodi labore assumenda, harum iusto saepe sed corrupti quibusdam quas provident optio suscipit quo! Similique aperiam ut corrupti accusantium, deleniti dolore libero. Accusantium, sapiente." button="Browse  Playlists" />

      <Discussions heading="Discuss doubts" content="Read from the best in field notes written by the top scorers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem possimus molestias minima facilis ratione, quod, commodi labore assumenda, harum iusto saepe sed corrupti quibusdam quas provident optio suscipit quo! Similique aperiam ut corrupti accusantium, deleniti dolore libero. Accusantium, sapiente." button="Begin Discussions" />

      <Opportunities heading="Get Amazing Opportunities" content="Read from the best in field notes written by the top scorers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem possimus molestias minima facilis ratione, quod, commodi labore assumenda, harum iusto saepe sed corrupti quibusdam quas provident optio suscipit quo! Similique aperiam ut corrupti accusantium, deleniti dolore libero. Accusantium, sapiente." button="View Opportunities" />

      <Footer/>
    </>
  );
}

export default App;
