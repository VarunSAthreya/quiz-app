import React, { useEffect, useState } from 'react';
//`import { VITE_APP_API_URL } from '../../../env';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { VITE_APP_API_URL } from '../../env';
import Loading from '../../utils/Loading';
import UserList from './Components/UserDetails';
import './styles/style.css';

const QuizReport = () => {
    const { id } = useParams();
    console.log(id);

    const [report, setReport] = useState({});
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        Promise.all([
            axios.get(`${VITE_APP_API_URL}/quiz/report/${id}`),
            axios.get(`${VITE_APP_API_URL}/submit/quiz/${id}`),
        ])
            .then((res) => {
                const [rep, sub] = res;
                console.log({ rep, sub });
                setReport(rep.data.data);
                setSubmissions(sub.data.data);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loading message="Fetching data..." />;
    if (error) {
        return (
            <div>
                <h2>Error</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="listing-quiz">
                <div className="listing-heading">
                    <h1>{submissions[0].quizTitle}</h1>
                </div>
                <div className="quiz-detailes">
                    <p>No. Of times Quiz Taken: {report.quizTaken}</p>
                    <p>
                        Average Score:{' '}
                        {(Math.round(report.avgScore * 100) / 100).toFixed(2) +
                            ' / ' +
                            report.totalScore}
                    </p>
                </div>

                <div className="quizzes">
                    {submissions.length > 0 &&
                        submissions.map((submit) => (
                            <UserList
                                key={submit.id}
                                className="quiz-listcomponent"
                                submission={submit}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default QuizReport;
