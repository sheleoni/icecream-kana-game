import styles from './QuestionWord.module.css';

type Props = {
    currentQuestionLetter : string | null
}
const QuestionWord = ({ currentQuestionLetter }: Props) => {
return (
    <>
        <article className={styles.questionLetterContainer}>
            (Question Word)
            <p className={styles.questionLetter} suppressHydrationWarning={true}>
            {currentQuestionLetter}
            </p>
        </article>
    </>
)
}

export default QuestionWord;
