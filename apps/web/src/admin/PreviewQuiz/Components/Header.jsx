const Header = (props) => {
    const { quiz } = props;
    console.log('hehe', quiz);
    return (
        <header className="main-header ">
            <h1 className="quizTitle">{quiz.title.toUpperCase()}</h1>
            <p>Total Points: {quiz.totalPoints}</p>
        </header>
    );
};
export default Header;
