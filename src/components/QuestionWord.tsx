type Props = {
    currentQuestionLetter : string
}
const QuestionWord = ({ currentQuestionLetter }: Props) => {
return (
    <>
        <p suppressHydrationWarning={true}>
        (Question Word)
        {currentQuestionLetter}
        </p>
    </>
)
}

export default QuestionWord;
