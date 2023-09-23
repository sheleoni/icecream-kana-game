import styles from './QuestionWord.module.css';

type Props = {
    currentQuestionLetter : string | null,
    generateQuestion: () => void,
    questionPool: string[]
}
const QuestionWord = ({ currentQuestionLetter, generateQuestion, questionPool }: Props) => {
    return (
    <>
        <article className={styles.questionLetterContainer} onClick={generateQuestion}>
            (Question Word)
            <p className={styles.questionLetter} suppressHydrationWarning={true}>
            {currentQuestionLetter}
            </p>
        </article>
    </>
)
}

export default QuestionWord;
