import Hexagon from "@/app/play/components/Hexagons/Hexagon/page";
import styles from './Hexagons.module.css';

const Hexagons = () => {
    const tempHexagonTideLevelsObject = {
        'あ': 3,
        'い': 4,
        'う': 1,
        'え': 2,
        'お': 5,
    }
    const tempHexagonTideLevelsArray = Object.entries(
        tempHexagonTideLevelsObject
    )
    // ↑ transform tide level object to [['あ', 3], ['い', 4]] and so on, for easier mapping in JSX.

    return (
        <>
            <ol className={styles.hexagonsContainer}>
            {
                tempHexagonTideLevelsArray.map(([character, tideLevel]: [string, number]) => {
                    return (
                            <li key={character} className={styles.hexagon}>
                                <Hexagon
                                    character={character}
                                    tideLevel={tideLevel} />
                            </li>)
                })
            }
            </ol>
            {/*<Hexagon textCharacter={character} />*/}
        </>
    )
}

export default Hexagons;
