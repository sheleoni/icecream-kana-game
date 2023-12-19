import PlayArea from "@/app/play/components/PlayArea/PlayArea";
import {getServerSession} from "next-auth";
import getUserTideLevel from "@/app/controllers/getUserTideLevel";

const GamePage = async () => {
    const session = await getServerSession();
    const userTideLevel = await getUserTideLevel();
    console.log(userTideLevel, '❤️ON SERVER /PLAY USERRR TIDE LEVELLLLL')
    await userTideLevel.map((character: object): void => {
        // todo: note - this won't work and will
        console.log(character, 'this is a character')
        console.log(character.level, 'level')
        console.log(character.kana, 'kana')

        // console.log(character, 'character before stringify!') // { kana: 'ヲ', level: 0, _id: new ObjectId("657c9cc23bd4dc5768c14091") } character before stringify!
        // const characterString = JSON.stringify(character); // {"kana":"ワ","level":0,"_id":"657c9cc23bd4dc5768c1408e"} CHARACTER STRING!!! AFTER STRINGIFY
        //
        // // todo: this worked, find out why
        // console.log(characterString, 'CHARACTER STRING!!! AFTER STRINGIFY removes new ObjectId() from _id and just takes the _id value!')
        //
        // const characterParsed = JSON.parse(characterString);
        // console.log(characterParsed.level, 'level after JSON parse');
        // console.log(characterParsed.kana, 'kana');
    })
    return (
        <>
        <h1>
            Hello game page, this is server-rendered
            <PlayArea />
        </h1>
        </>
    )
}

export default GamePage;
