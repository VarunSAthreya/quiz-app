import axios from 'axios';
import UserList from './UserDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
//`import { VITE_APP_API_URL } from '../../../env';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Link, useParams } from 'react-router-dom';

const Usersubmissions1 = () => {
    // const params = useParams();
    const { id } = useParams();

    const [quizzes, setQuizzes] = useState(null);
    const fetchQuizzes = () => {
        const getQuizzes = async () => {
            try {
                {
                    /* to get quizObject based on Quiz id*/
                }
                const quizzes = await axios.get(
                    'http://localhost:3000/submit/quiz/${id}'
                );
                setQuizzes(quizzes);
                // console.log(quizzes);
                // console.log(quizzes.data);
            } catch (err) {
                console.log(err);
            }
        };
        getQuizzes();
    };

    useEffect(fetchQuizzes, []);

    return (
        <div>
            <div className="listing-quiz">
                <div className="listing-heading">
                    <h1>
                        {/*quizId.title */}
                        Quiz-Title{id}
                    </h1>
                </div>
                <div className="quiz-detailes">
                    <p>
                        {/* quizID.description */}
                        Description:The given quiz contains the reuired details
                        10 questions and 2 points each
                    </p>
                    <p>
                        {/* quizID.TotalResponses*/}
                        Total Responses:
                    </p>
                    <p>
                        {/* quizId.AvgScore*/}
                        Avg Score:
                    </p>
                </div>

                <div className="quizzes">
                    {/* received quiz object*/}
                    {quizzes !== null &&
                        //using number of submissions count  of the quiz Id  generating the user submissions cards
                        quizzes.data.map((variant1) => (
                            <UserList
                                key={variant1.id}
                                className="quiz-listcomponent"
                                // paasing  the quizid  object as a prop here
                                data={quizzes.data}
                            ></UserList>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Usersubmissions1;
