// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router";
import React from "react";
import HomePage from './pages/HomePage';
import NewUser from './pages/NewUser';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new-user' element={<NewUser />} />
        </Routes>
      </div>
    );
  }
}



export default App;
