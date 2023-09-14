'use client'

import QuestionWord from "@/components/QuestionWord";
import Bubbles from "@/components/Bubbles";
import Hexagons from "@/components/Hexagons";
import IceCreamStack from "@/components/IceCreamStack";
import characterList from "@/letterData/characterList";

const Play = () => {

    const generateQuestion = () => {
        const randomIndex = Math.floor(Math.random() * characterList.length);
        return characterList[randomIndex]
    }

    const currentQuestionLetter = generateQuestion();
    console.log(currentQuestionLetter, `current question`)

    return (
        <>
            <p>
                <QuestionWord currentQuestionLetter={currentQuestionLetter} />
            </p>
                <p>
                <Bubbles />
            </p>
            <p>
                <Hexagons />
            </p>
            <p>
                <IceCreamStack />
            </p>
        </>
    )
}

export default Play;
