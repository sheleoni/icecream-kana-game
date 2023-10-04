import Hexagon from "@/app/play/components/Hexagons/Hexagon/Hexagon";
import styles from './Hexagons.module.css';
import rowKana from "@/app/play/data/rowKana";
import React from "react";
import iceCreamPool from "@/app/play/data/iceCreamPool";

type IceCreamScoop = {
    name: string;
    imgURL: string;
}

type Props = {
    currentQuestionLetter: string,
    tideLevel: object,
    setTideLevel: React.Dispatch<React.SetStateAction<object>>,
    iceCreamStack: IceCreamScoop[],
    setIceCreamStack: React.Dispatch<React.SetStateAction<IceCreamScoop[]>>,
}

type TideLevel = {
    [key: string]: number,
}
const Hexagons = ({ currentQuestionLetter, tideLevel, setTideLevel, iceCreamStack, setIceCreamStack }: Props) => {
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

    const handleClickHexagon = (characterTideLevel: number, character: string): void => {
        if (characterTideLevel < 5) { return }
        // if hexagon tide level = 5, reset hexagon level ↓
        const nextTideLevel: TideLevel = { ...tideLevel };
        nextTideLevel[character] = 0;
        setTideLevel(nextTideLevel);
        // adds new ice cream scoop ↓
        pickIceCreamByCharacter(character);
        // todo: maybe POST added ice-cream scoop on click
    }

    const pickIceCreamByCharacter = (character: string) => {
        const possibleIceCreamScoops = iceCreamPool[character as keyof typeof iceCreamPool];
        if (!possibleIceCreamScoops) {
            // choose a random ice cream from placeholders if specific ice cream is not ready
            const randomIndex = Math.floor(Math.random() * (iceCreamPool.placeholder.length));
            const randomIceCreamScoop = iceCreamPool.placeholder[randomIndex];
            const nextIceCreamStack: IceCreamScoop[] = [...iceCreamStack];
            nextIceCreamStack.push(randomIceCreamScoop);
            setIceCreamStack(nextIceCreamStack);
            return;
        }
        const randomIndex = Math.floor(Math.random() * (possibleIceCreamScoops.length));
        const randomIceCreamScoop = possibleIceCreamScoops[randomIndex];
        const nextIceCreamStack: IceCreamScoop[] = [...iceCreamStack];
        nextIceCreamStack.push(randomIceCreamScoop);
        setIceCreamStack(nextIceCreamStack);
    }

    return (
        <>
            <ol className={styles.hexagonsContainer}>
            {
                hexagonCharacters?.map((character: string) => {
                    return (
                            <li key={character}
                                className={styles.hexagon}
                                onClick={() => handleClickHexagon(
                                    tideLevel[character as keyof typeof tideLevel],
                                    character)}
                            >
                                <Hexagon
                                    character={character}
                                    tideLevel={tideLevel[character as keyof typeof tideLevel]}
                                />
                            </li>)
                })
            }
            </ol>
        </>
    )
}

export default Hexagons;
