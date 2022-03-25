import './App.css';
import { Router } from '@reach/router';
import GoalForm from './components/GoalForm';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import UpdateGoal from './components/UpdateGoal';
import NavBar from './components/NavBar';
import Main from './view/Main';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <GoalForm path="/new-goal" />
        <DisplayAll path="/" />
        <DisplayOne path="/goal/:id" />
        <UpdateGoal path="/edit/:id" />
        <Main path="/visions" />
      </Router>
    </div>
    // {/* // <BrowserRouter>
    // //   <div className ="App">
    // //     <Routes>
    // //       <Route path="/visions" element={<Main />} />
    // //       <Route path="/new-goal" element={<GoalForm />} />
    // //       <Route path="/" element={<DisplayAll />} />
    // //       <Route path="/goal/:id" element={<DisplayOne />} />
    // //       <Route path="/edit/:id" element={<UpdateGoal />} />
    // //     </Routes>
    // //   </div>
    // // </BrowserRouter> */}
  );
}

export default App;
