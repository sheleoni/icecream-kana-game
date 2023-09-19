import * as Checkbox from "@radix-ui/react-checkbox";
import styles from './QuestionFilter.module.css'
const QuestionFilter = () => {
    return (
        <>
            <li className={styles.checkboxContainer}>
                <Checkbox.Root className={`${styles.CheckboxRoot} ${styles.button}`} id={"foo"}>
                    <Checkbox.Indicator>
                       ✔
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className={styles.Label} htmlFor={"foo"}>
                    HELLO
                </label>
            </li>
        </>
    )
}

export default QuestionFilter;
