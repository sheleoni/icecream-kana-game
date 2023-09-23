import Image from "next/image";
import styles from "./Bubbles.module.css";

const Bubbles = () => {
    const tempChoiceArray = ['a', 'tsu', 'u', 'e', 'o'];
    return (
        <>
            <aside className={styles.bubbleAreaContainer}>
                {/* todo: ↑ bubbles container */}
                <ol>
                { tempChoiceArray.map((choice) => {
                    return (
                        <li key={choice} className={styles.bubbleContainer}>
                        <Image
                             src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1676767326/hiragana_game/Bubble_background_opudxy.gif"
                             alt=""
                             width={150}
                             height={150}
                             className={styles.bubbleImage}
                        />
                            <span className={styles.choiceLetter}>
                                {choice}
                            </span>
                        </li>
                    )
                    })
                }
                </ol>
            </aside>
        </>
    )
}

export default Bubbles;
