import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { VITE_APP_API_URL } from '../../env';
import Loading from '../../utils/Loading';
import './style/style.css';
import Submission from './Submission';

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
    console.log('submission :', submission);
    if (loading) return <Loading message={'Loading...'} />;

    return (
        <div>
            {submission && (
                <Submission
                    score={submission.score}
                    quizID={submission.quizID}
                />
            )}
        </div>
    );
};
export default ShowSubmission;
