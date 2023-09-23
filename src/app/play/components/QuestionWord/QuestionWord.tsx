import styles from './QuestionWord.module.css';

type Props = {
    currentQuestionLetter : string | null,
    generateQuestion: () => void,
}
const QuestionWord = ({ currentQuestionLetter, generateQuestion }: Props) => {
    // todo: prevent next question to be the same question as the previous (i.e. prevent two consecutive identical questions)
    return (
    <>
        <article key={currentQuestionLetter} className={styles.questionLetterContainer} onClick={generateQuestion}>
            <p className={`${styles.questionLetter} ${styles.animation}`} suppressHydrationWarning={true}>
            {currentQuestionLetter}
            </p>
        </article>
    </>
)
}

export default QuestionWord;
