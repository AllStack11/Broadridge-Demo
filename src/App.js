import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import MainHeader from './components/MainHeader';
import AppHeader from './components/AppHeader'
import MainFooter from './components/MainFooter'
import SideBar from './components/SideBar'
import DemoCard from './components/DemoCard'
import TickerCard from './components/TickerCard'
import FormCard from './components/FormCard'
import ReminderCard from './components/ReminderCard'
import ExpenseCard from './components/ExpenseCard'
import AstridPage from './pages/Astrid_page'
import UBSPage from './pages/UBS_page'
import FormsPage from './pages/FormsPage'
import './styles/App.css'


function App() {
  return (
    <div className="App">
      <MainHeader/>  
      <AppHeader/>


        <div className="flex-container">

          <div className="flex-sidebar">
            <SideBar/>
          </div>

          <div className="flex-main">
          <Routes>
            <Route path="/astrid" element={ <AstridPage/> } />
            <Route path="/ubsPage" element={ <UBSPage/> } />
            <Route path="/formsPage" element={ <FormsPage/> } />
          </Routes>

            <div className="c1">  </div>
            <div className="c2"> <TickerCard/><DemoCard/><ExpenseCard/> <ReminderCard/> <FormCard/>    </div>
            <div className="c3">  </div>

          </div>

          <div className="flex3">
          </div>

        </div>


        <MainFooter/>
    </div>
  );
}

export default App;
