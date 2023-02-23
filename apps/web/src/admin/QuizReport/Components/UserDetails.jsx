import { format } from 'date-fns';
import React from 'react';

const UserList = ({ submission }) => {
    return (
        <div className="quizflexcontainer">
            <div className="user-list">
                <div className="user-name">{submission.username}</div>
                <div className="createdAt">
                    {format(new Date(submission.createdAt), 'dd MMM yyyy')}
                </div>
                <div className="user-score">
                    Correct Ans: {submission.correctQuestions}
                </div>
                <div className="total-score">
                    Score: {submission.score + '/' + submission.totalScore}
                </div>
            </div>
        </div>
    );
};

export default UserList;
