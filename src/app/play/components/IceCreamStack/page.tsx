'use client';

import * as Tooltip from "@radix-ui/react-tooltip";
import styles from "./IceCreamStack.module.css";
const IceCreamStack = () => {
    const iceCreamScoops = [
        // todo: change temporary icecream scoops array to prop from parent component (and probably inject initial data from DB)
        {
            name: "うなぎ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249747/hiragana_game/icecream_scoops/%E3%81%86%E3%81%AA%E3%81%8D%E3%82%99_hejix5.png"
        },
        {
            name: "ぶどう（葡萄）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530773/hiragana_game/icecream_scoops/%E3%81%B5%E3%82%99%E3%81%A8%E3%82%99%E3%81%86_mwrc42.png"
        },        {
            name: "ぶどう（葡萄）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530773/hiragana_game/icecream_scoops/%E3%81%B5%E3%82%99%E3%81%A8%E3%82%99%E3%81%86_mwrc42.png"
        },        {
            name: "ぶどう（葡萄）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530773/hiragana_game/icecream_scoops/%E3%81%B5%E3%82%99%E3%81%A8%E3%82%99%E3%81%86_mwrc42.png"
        },
    ]

    return (
        <aside className={styles.scoreContainer}>
        <ul className={styles.iceCreamContainer} style={{marginBlockStart: 150}}>
            <li>
                <Tooltip.Provider delayDuration={1500}>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            {/* Icecream cone*/}
                            <img
                                alt=""
                                className={styles.iceCreamCone}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1684298737/hiragana_game/icecream_scoops/Cone_ncndkh.png"/>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Content sideOffset={0} className={styles.iceCreamHoverPanel}>
                                コーンだよ。
                                <Tooltip.Arrow/>
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </Tooltip.Provider>

            </li>
            {iceCreamScoops?.map((icecream, index) => {
                return (
                    <>
                        <li key={index} className={styles.iceCreamListContainer} style={{zIndex: index + 1}}>
                            <Tooltip.Provider delayDuration={30}>
                                <Tooltip.Root>
                                    <Tooltip.Trigger asChild>
                                        {/*image of scoop*/}
                                        {/*TODO: confirm if <button> tag is recommended over <img> tag in radix*/}
                                        <img className={styles.iceCreamScoop} alt={`${icecream.name}`}
                                             src={icecream.imgURL}/>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content sideOffset={-15} className={styles.iceCreamHoverPanel}>
                                            {icecream.name}
                                            <Tooltip.Arrow/>
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip.Root>
                            </Tooltip.Provider>
                        </li>
                    </>
                )
            })}
        </ul>
    </aside>
    );
}

export default IceCreamStack;
