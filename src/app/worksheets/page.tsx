import Image from "next/image";
import styles from "./Worksheets.module.css";

const WorksheetList = [
    {
        title: 'Hiragana',
        description: 'Hiragana worksheet answer key',
        imgURL: 'https://res.cloudinary.com/dd1dw34dc/image/upload/v1696748974/Hiragana_Romaji__Remember_Sheet_Color_p5irm0.png'
    },
    {
        title: 'Katakana',
        description: 'Katakana worksheet answer key',
        imgURL: 'https://res.cloudinary.com/dd1dw34dc/image/upload/v1696748915/hiragana_game/worksheets/Katakana_Origins_Remember_Sheet_Color_ab71wq.png'
    }
]

const Worksheets = () => {
    return (
        <>
        <ul className={styles.worksheetContainer}>
            {WorksheetList?.map((worksheet, index) => {
                return (
                    <li key={index} className={styles.worksheetItem}>
                        <h2>{worksheet.title}</h2>
                        <Image src={worksheet.imgURL}
                               width={"1000"}
                               height={"1500"}
                               alt={'Katakana worksheet answer key'}
                               className={styles.worksheet}
                        />
                    </li>
                )
            })}
        </ul>
        </>
    )
}
export default Worksheets
