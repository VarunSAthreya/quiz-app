import React from "react";
import  CreatequizButton from './CreateQuizButton';
import Quizcardcontaier from './Quizcardcontainer';
import '../styles/admin.css';


const AdminPageContainer = () => {


    return (


              <div className="adminpage-container">
                   
                     <div className="create-btn-class">
                          <CreatequizButton /> 
                     </div>

                     <div className="listing-quiz_app">
                           <Quizcardcontaier/>
                     </div> 
   
              </div>


    );
};

export default AdminPageContainer;