import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { VITE_APP_API_URL } from '../../env';
import { Loading } from '../TakeQuiz/Components/Loading';
import Submission from './Submission';
import './style/style.css';

const ShowSubmission = () => {
    const { id } = useParams();
    const [submission, setSubmission] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const submit = await axios.get(
                    `${VITE_APP_API_URL}/submit/${id}`
                );
                setSubmission(submit.data.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [id]);
    // console.log('submission :', submission);
    if (loading) return <Loading message={'Loading...'} />;

    return (
        <div>
            {submission && (
                <Submission
                    submission={submission}
                    score={submission.score}
                    quizID={submission.quizID}
                />
            )}
        </div>
    );
};
export default ShowSubmission;
