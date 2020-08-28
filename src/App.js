import React from 'react';
import Header from './Components/Header/Header';
import CourseContainer from './Components/CourseContainer/CourseContainer';
import Footer from './Components/Footer/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <CourseContainer></CourseContainer>
      <Footer></Footer>
    </div>
  );
};

export default App;