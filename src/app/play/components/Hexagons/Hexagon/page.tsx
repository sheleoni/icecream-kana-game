import styles from './Hexagon.module.css';
import Image from "next/image";

type Props = {
    character: string,
    tideLevel: number
}
const Hexagon = ({ character, tideLevel}: Props) => {

    const hexagonWidth = 180; // temporary hexagon dimension in px
    const hexagonHeight = 180; // temporary hexagon dimension in px


    const tideLevelToPixels = (tideLevel: number): number|void => {
        /* Tide levels corresponding to CSS margin values:
        *
        * tideLevel 0 (barely visible crests) -> 120px
        * tideLevel 1 -> 96px
        * tideLevel 2 -> 72px
        * tideLevel 3 -> 48px
        * tideLevel 4 -> 24px
        * tideLevel 5 (fully filled) -> 10px
        *
        * */
        switch (tideLevel) {
            case 0:
                return 120;
            case 1:
                return 96;
            case 2:
                return 72;
            case 3:
                return 48;
            case 4:
                return 24;
            case 5:
                return 10;
        }
    }
    const tideMarginPixels = tideLevelToPixels(tideLevel);

    return (
        <article className={styles.root}>
            =====
            <p>
                {character}, level: {tideLevel}
            </p>
            ====

            {/* todo: clear old code */}
            <span className={styles.hexagonWrapper}>
                <span className={styles.letter}>
                    {character}
                </span>
                {/* adds outline on topmost layer */}
                <Image
                    alt=""
                    className={styles.hexagonOutline}
                    src="https://res.cloudinary.com/dd1dw34dc/image/upload/hiragana_game/Hexagonal_aiueo_1_oqkh0a.png"
                    width={hexagonWidth}
                    height={hexagonHeight}
                />
                <div className={styles.hexagonBackgroundContainer}>
                    {/* adds beige background */}
                    {/*TODO: maybe change this img tag to button*/}
                    <Image
                        alt=""
                        className={`${styles.hexagonBackground} ${true ? styles.activeHexagon : ''}`}
                        src="https://res.cloudinary.com/dd1dw34dc/image/upload/hiragana_game/Hexagonal_aiueo_2_bmkrho.png"
                        width={hexagonWidth}
                        height={hexagonHeight}
                    />
                    <div className={styles.mask1}>
                        <div className={styles.waveWrapper}>
                            {/* continuous wave images */}
                            {/* todo: consider using SVG for crisper images (if possible). Added quality={100} but it doesn't seem to work. */}
                            <Image
                                alt=""
                                className={styles.movingWave}
                                style={{marginBlockStart: `${tideMarginPixels}px`}}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1683549981/wave_red_big_taller1_j1nqs4.png"
                                height={hexagonHeight}
                                width={hexagonWidth / 3}
                                quality={100}
                            />
                            <Image
                                alt=""
                                className={styles.movingWave}
                                style={{marginBlockStart: `${tideMarginPixels}px`}}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1683549981/wave_red_big_taller1_j1nqs4.png"
                                height={hexagonHeight}
                                width={hexagonWidth / 3}
                                quality={100}
                            />
                            <Image
                                alt=""
                                className={styles.movingWave}
                                style={{marginBlockStart: `${tideMarginPixels}px`}}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1683549981/wave_red_big_taller1_j1nqs4.png"
                                height={hexagonHeight}
                                width={hexagonWidth / 3}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </span>


        </article>
    )
}

export default Hexagon;
