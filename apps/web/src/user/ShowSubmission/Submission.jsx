import axios from 'axios';
import { useEffect, useState } from 'react';
import { VITE_APP_API_URL } from '../../env';
import Loading from '../../utils/Loading';
import Stars from './Stars';

const Submission = (props) => {
    const { score, quizID } = props;
    const [quiz, setQuiz] = useState({});
    let arr = [];
    const [loading, setLoading] = useState(false);
    const imgPath = './assets/gt.png';
    useEffect(() => {
        async function getQuiz() {
            try {
                setLoading(true);
                const json = await axios.get(
                    `${VITE_APP_API_URL}/quiz/${quizID}`
                );
                setQuiz(json.data.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        getQuiz();
    }, [quizID]);
    if (loading || !quiz.title) return <Loading message="Loading.." />;
    return (
        <div className="submissionContainer">
            <h1 className="quizTitle">{quiz.title}</h1>
            <br />
            <br />
            <br />
            <div className="submissionContent">
                <h1>Your response has been recorded</h1>
                <br />
                <br />
                <br />
                <p>Your Score</p>
                <p>
                    {score}/{quiz.totalPoints}
                </p>
                {/* <i className="fa fa-star"></i>
                <span className="fa fa-star checked"></span> */}
                <Stars score={score} totalPoints={quiz.totalPoints} />
            </div>
        </div>
    );
};
export default Submission;
