
import axios from "axios";
import QuizCardComponent from "./QuizCard"
import { useState } from 'react';
import { useEffect } from 'react';

const Quizcardcontaier =() => {

 

    const [quizzes, setQuizzes] = useState(null);
    const getQuizzes = async () => {
        try{
            const quizzes = await axios.get("https://jsonplaceholder.typicode.com/users");
            setQuizzes(quizzes);
            console.log(quizzes.data);
        }
        catch(err)  {
            console.log(err);
        }
    };
    useEffect(() => {
        getQuizzes();
    }, []);


    return (


         <div className="listing-quiz">
               <div className="listing-heading">
                    <h3>Created Quizzes</h3>
                </div>
          
              
                <div className="quizzes">
 
                    {quizzes !== null && quizzes.data.map((variant1) =>(


                          <QuizCardComponent
                            key={variant1.id}
                            className="quiz-listcomponent" 

                             quizname={variant1.name}
                             quizlink={variant1.website}
                          >
  
                        </QuizCardComponent>


                     ))}

                </div>

        </div>

    )

}


export default Quizcardcontaier;