import PlayArea from "@/app/play/components/PlayArea/PlayArea";
import {getServerSession} from "next-auth";
import getUserTideLevel from "@/app/controllers/getUserTideLevel";

const GamePage = async () => {
    const userTideLevelData = await getUserTideLevel();
    const stringifiedUserTideLevel = JSON.stringify(userTideLevelData);
    const userTideLevelArray = JSON.parse(stringifiedUserTideLevel);

    return (
        <>
        <h1>
            Hello game page, this is server-rendered
            {userTideLevelArray.map((character: object): ReactNode => {
                return (
                    <>
                        <p>
                            Kana: {character.kana}
                            Level: {character.level}
                        </p>
                    </>
                )
            })}
            <PlayArea userTideLevel={userTideLevelArray} />
        </h1>
        </>
    )
}

export default GamePage;
