import AppError from './AppError';

export default function calculateScore(quiz: any, submittedQuiz: any) {
    let score = 0;
    for (let i = 0; i < quiz.questions.length; i++) {
        let currentQuestion = quiz.questions[i];
        let submittedQuestion = submittedQuiz.questions[i];

        let flag = true;

        if (currentQuestion._id.toString() !== submittedQuestion.id) {
            submittedQuestion = submittedQuiz.questions.find(
                (q: any) => q.id === currentQuestion._id.toString()
            );

            if (!submittedQuestion) {
                throw new AppError({
                    message:
                        'Error! Invalid quiz, few questions are missing or not present.',
                    statusCode: 401,
                });
            }
        }

        for (let j = 0; j < currentQuestion.options.length; j++) {
            let currentOption = currentQuestion.options[j];
            let submittedOption = submittedQuestion.options[i];

            if (currentOption._id.toString() !== submittedOption.id) {
                submittedOption = submittedQuestion.options.find(
                    (o: any) => o.id === currentOption._id.toString()
                );

                if (!submittedOption) {
                    throw new AppError({
                        message:
                            'Error! Invalid quiz, few options are missing or not present.',
                        statusCode: 401,
                    });
                }
            }

            if (currentOption.isAnswer !== submittedOption.isSelected) {
                flag = false;
                break;
            }
        }
        if (flag) score += currentQuestion.points;
    }

    return score;
}
