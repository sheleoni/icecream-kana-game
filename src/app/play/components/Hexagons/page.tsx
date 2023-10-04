import Hexagon from "@/app/play/components/Hexagons/Hexagon/page";
import styles from './Hexagons.module.css';
import rowKana from "@/app/play/data/rowKana";
import React from "react";

type Props = {
    currentQuestionLetter: string,
    tideLevel: object,
}
const Hexagons = ({ currentQuestionLetter, tideLevel }: Props) => {
    const findRowByKana = (kana: string, rowKana: {[key: string]: string[]}): string | null => { // todo: refactor duplicate function here (also in <Bubbles /> component
        // returns the row of the single inputted kana character (e.g. input 「こ」 → outputs 「か行」 since こ belongs to か行)
        for (const [row, kanaArray] of Object.entries(rowKana)) {
            // Object.entries(rowKana) looks like this:
            // [    ↓ row    ↓ kanaArray
            //     ['あ行', ['あ', 'い', 'う', 'え', 'お']],
            //     ['か行', ['か', 'き', 'く', 'け', 'こ']],
            //     and so on...
            // ]
            if (kanaArray.includes(kana)) {
                return row;
            }
        }
        return null;  // or throw an error, or return a default value, etc.
    }
    const currentQuestionRow: string = `${findRowByKana(currentQuestionLetter, rowKana)}`; // todo: refactor duplicate variable here (also in <Bubbles /> component
    const hexagonCharacters: string[] = rowKana[currentQuestionRow as keyof typeof rowKana];

    const handleClickHexagon = () => {
    // todo: handle click hexagon
        // if hexagon tide level = 5, reset hexagon level
        // add new ice cream scoop
    }

    return (
        <>
            <ol className={styles.hexagonsContainer}>
            {
                hexagonCharacters?.map((character: string) => {
                    return (
                            <li key={character} className={styles.hexagon}>
                                <Hexagon
                                    character={character}
                                    tideLevel={tideLevel[character as keyof typeof tideLevel]} />
                            </li>)
                })
            }
            </ol>
            {/*<Hexagon textCharacter={character} />*/}
        </>
    )
}

export default Hexagons;
