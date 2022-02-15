

import React from "react";
import DemoCard from '../components/DemoCard'
import TickerCard from '../components/TickerCard'
import FormCard from '../components/FormCard'
import ReminderCard from '../components/ReminderCard'
import ExpenseCard from '../components/ExpenseCard'
import '../styles/UBSpage.css'

const UBSPage = () => {
    return(
        <div className="ubsPage">
            <h2>UBS - Widget</h2>
            <div className="c1"> <DemoCard/> <ReminderCard/>  </div>
            <div className="c2"> <TickerCard/> <ExpenseCard/>  </div>
            <div className="c3">  <FormCard/> </div>
        </div>
    );
};

export default UBSPage;