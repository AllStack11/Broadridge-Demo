import React from "react";
import FormCard from "../components/FormCard";

const FormsPage = () => {
    return(
        <div className="formsPage">
            <h2>Forms</h2>
            <div className="c1"> </div>
            <div className="c2"> <FormCard/> <FormCard/> </div>
            <div className="c3">  <FormCard/> <FormCard/> </div>
        </div>
    );
};

export default FormsPage;