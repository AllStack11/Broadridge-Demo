import React from "react";
import DemoCard from '../components/DemoCard'
import TickerCard from '../components/TickerCard'
import FormCard from '../components/FormCard'
import ReminderCard from '../components/ReminderCard'
import ExpenseCard from '../components/ExpenseCard'
import '../styles/astridPage.css'

const AstridPage = () => {
    return(
        <div className="astridPage">
            <h2>Astrid - Widget</h2>
            <div className="c1"> <TickerCard/>   </div>
            <div className="c2">  <DemoCard/>  </div>
            <div className="c3">  </div>
        </div>
    );
};

export default AstridPage;