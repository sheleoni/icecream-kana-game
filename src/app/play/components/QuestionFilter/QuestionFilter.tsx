'use client';

import * as Checkbox from "@radix-ui/react-checkbox";
import styles from './QuestionFilter.module.css';
import {ReactElement, useState, useEffect} from "react";
import {FilterOptions as InitialFilterOptionsData} from "@/app/play/components/QuestionFilter/FilterOptions";
import CharactersByRow from "@/app/play/components/QuestionFilter/CharactersByRow";

const QuestionFilter = () => {

    const HIRAGANA_MODE = "hiragana";
    const KATAKANA_MODE = "katakana";

    type FilterOptions = {
        hiragana: { [character: string]: boolean},
        katakana: { [character: string]: boolean}
    }

    type FilterMode = typeof HIRAGANA_MODE | typeof KATAKANA_MODE;

    const [filterMode, setFilterMode] = useState<FilterMode>(HIRAGANA_MODE); // toggle between Hiragana or Katakana mode
    const [filterOptions, setFilterOptions] = useState<FilterOptions>(InitialFilterOptionsData);
    const switchMode = (filterMode: string): void => {
        console.log("switch modes")
        let newMode: FilterMode;
        // toggles between Hiragana and Katakana modes
        if (filterMode === HIRAGANA_MODE) {
            newMode = KATAKANA_MODE;
            setFilterMode(newMode)
        } else {
            newMode = HIRAGANA_MODE;
            setFilterMode(newMode)
        }
    };

    const currentModeRowCharacters = filterOptions[filterMode]; // shows all row characters in the currently selected mode;
    const filterEntries = Object.entries(currentModeRowCharacters);
    /* transforms, for example,
        {
        'あ': false,
        'か': false,
        'さ': false
        }
        to
        [
            [”あ", "false"],
            [”か", "false"],
            ["さ", "false"]
        ]
        and so on...
     */

    const hiraganaRowCharacters = filterOptions[HIRAGANA_MODE];
    const katakanaRowCharacters = filterOptions[KATAKANA_MODE];
    const allRowCharacters = { ...hiraganaRowCharacters, ...katakanaRowCharacters};
    // ↑ creates a 1-dimensional object containing all hiragana & katakana rows with their isChecked value
    // { 'あ': true, 'い': true } and so on
    const allRowCharactersArray = Object.entries(allRowCharacters);
    // ↑ creates an array: [['あ', true], ['か', true]] and so on

        const generateQuestionPool = () => { // adds characters from selected character rows to a 1-D array.
            console.log(allRowCharacters, `all row chars`)
            let questionPool: string[] = [];
                allRowCharactersArray.forEach(([row, isChecked]: [string, boolean]) => {
                    let charactersInRow = CharactersByRow[row as keyof typeof CharactersByRow];
                    // ↑ type definition that "row" should only be any kana character あ〜ン
                    console.log(charactersInRow, 'row chars', isChecked)
                    if (isChecked) {
                        charactersInRow.forEach((characterInRow: string): void => {
                        questionPool.push(characterInRow)
                        })
                    }
            })
            console.log(questionPool, 'question pool')
            return questionPool;
        }
    const questionPool = generateQuestionPool();

    const handleCheckedChange = (character: string, isChecked: boolean) => {
        const filterList = filterOptions[filterMode];
        const nextFilterList = { ...filterList, [character]: !isChecked };
        setFilterOptions({ ...filterOptions, [filterMode]: nextFilterList });
        console.log("check changed!")
        console.log(nextFilterList)
        // todo: POST data to database
    }

    return (
        <>
            <aside>
                current mode: { filterMode }
                <button onClick={() => switchMode(filterMode)}>
                    Switch mode
                </button>
                <ul className={styles.checkboxContainer}>
                    { filterEntries.map(([character, isChecked]) => {
                        return (
                                <li key={character} className={styles.choice}>
                                    <Checkbox.Root
                                        className={`${styles.CheckboxRoot} ${styles.button}`}
                                        id={character}
                                        checked={isChecked}
                                        onCheckedChange={() => handleCheckedChange(character, isChecked)}
                                    >
                                        <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                            ✦
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <label className={styles.Label} htmlFor={character}>
                                        {character}行
                                    </label>
                                </li>
                        )
                    })}
                </ul>
            </aside>
            <p>
            Selected rows:
                {
                    Object.entries(allRowCharacters).map(([row, isChecked]: [string, boolean]) => {
                        return (
                           isChecked && (<p key={row}>
                               { row }行：
                               { CharactersByRow[row].map((character): ReactElement => {
                                    return (<span key={row}>{character}</span>)
                               })
                               }
                            {/*   todo: fix type error */}
                            </p>)
                        )
                    })
                }
            </p>
            <p>
            Question pool:
                { questionPool.map((character) => {
                    return (
                        <span key={character}>
                            {character}
                        </span>
                    )
                })}
            </p>
        </>
    )
}


export default QuestionFilter;
