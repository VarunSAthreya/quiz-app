const Header = (props) => {
    const { quizName, setQuizName } = props;

    const changeHandlerQuizName = (event) => {
        setQuizName(event.target.value);
    };

    return (
        <div className="quiz-container">
            <div className="header">
                <input
                    onChange={changeHandlerQuizName}
                    type="text"
                    value={quizName}
                    name="quizNameInput"
                    id="quizNameInput"
                    placeholder="Enter Quiz Name"
                />
            </div>
        </div>
    );
};

export default Header;
