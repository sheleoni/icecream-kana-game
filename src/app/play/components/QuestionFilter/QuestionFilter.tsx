'use client';

import * as Checkbox from "@radix-ui/react-checkbox";
import styles from './QuestionFilter.module.css';
import {useState} from "react";
import {FilterOptions as InitialFilterOptionsData} from "@/app/play/components/QuestionFilter/FilterOptions";


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

    const filterEntries = Object.entries(filterOptions[filterMode]);
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
                <li className={styles.checkboxContainer}>
                    { filterEntries.map(([character, isChecked]) => {
                        return (
                                <ul key={character}>
                                    <Checkbox.Root
                                        className={`${styles.CheckboxRoot} ${styles.button}`}
                                        id={character}
                                        checked={isChecked}
                                        onCheckedChange={() => handleCheckedChange(character, isChecked)}
                                    >
                                        <Checkbox.Indicator>
                                            ✔
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <label className={styles.Label} htmlFor={character}>
                                        {character}
                                    </label>
                                </ul>
                        )
                    })}
                    <ul>
                    <Checkbox.Root className={`${styles.CheckboxRoot} ${styles.button}`} id={"foo"}>
                        <Checkbox.Indicator>
                           ✔
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label className={styles.Label} htmlFor={"foo"}>
                        HELLO
                    </label>
                    </ul>
                </li>
            </aside>
        </>
    )
}


export default QuestionFilter;
