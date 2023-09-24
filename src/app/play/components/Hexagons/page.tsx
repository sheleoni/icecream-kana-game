import Hexagon from "@/app/play/components/Hexagons/Hexagon/page";

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
            {
                tempHexagonTideLevelsArray.map(([character, tideLevel]: [string, number]) => {
                    return (
                        <>
                            <p>
                                <Hexagon
                                    character={character}
                                    tideLevel={tideLevel} />
                            </p>
                        </>
                    )
                })
            }
            {/*<Hexagon textCharacter={character} />*/}
        </>
    )
}

export default Hexagons;
