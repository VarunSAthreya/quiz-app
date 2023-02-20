import '../styles/admin.css';

const QuizCardComponent = (props) => {
    var coyText = props.quizlink;

    // your function to copy here

    const copyToClipBoard = async (copyMe) => {
        try {
            await navigator.clipboard.writeText(copyMe);
            alert('Copied the text: ');
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    return (
        <div className="quizflexcontainer">
            <div className="quiz-list">
                <div className="quiz-title">
                    <p>{props.quizname}</p>
                </div>

                <div className="copylink">
                    <button
                        className="copyquizbutton"
                        onClick={() => copyToClipBoard(coyText)}
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizCardComponent;
