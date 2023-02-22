import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { VITE_APP_API_URL } from '../../env';
import { Loading } from '../TakeQuiz/Components/Loading';

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

    if (loading) return <Loading message={'Loading...'} />;

    return <div>{submission && <p>{JSON.stringify(submission)}</p>}</div>;
};

export default ShowSubmission;
