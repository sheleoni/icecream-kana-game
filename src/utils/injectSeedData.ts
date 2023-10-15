import IceCream from "@/models/iceCream";
import userIceCreamStack from "@/models/userIceCreamStack";
import tideLevel from "@/app/play/data/tideLevel";
import userTideLevel from "@/models/userTideLevel";



export const addInitialFlavors = async () => {
    const initialFlavors = [
        { id: '1', name: 'Vanilla', imageURL: 'vanilla.png'},
        { id: '2', name: 'Chocolate', imageURL: 'chocolate.png'},
        { id: '3', name: 'Strawberry', imageURL: 'strawberry.png'},
        { id: '4', name: 'OrangeSorbet', imageURL: 'orangeSorbet.png'},
    ];

    for (const flavor of initialFlavors) {
        const existingFlavor = await IceCream.findOne({ id: flavor.id });
        if (!existingFlavor) {
            const iceCream = new IceCream(flavor);
            await iceCream.save();
            console.log(`Added ${flavor.name} ice-cream to collection!`)
        }
    }
}

// ice-cream stack
export const initialIceCreamStack = [
        {
            name: "オレンジ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533025/hiragana_game/icecream_scoops/%E3%82%AA%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%99_zpagsb.png"
        },
        {
            name: "べんとう（弁当）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530521/hiragana_game/icecream_scoops/%E3%81%B8%E3%82%99%E3%82%93%E3%81%A8%E3%81%86_vttt0q.png"
        },
        {
            name: "ソフトクリーム🍦",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533023/hiragana_game/icecream_scoops/%E3%82%BD%E3%83%95%E3%83%88%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0_cvkfn0.png"
        },
    ];

export const addInitialIceCreamStack = async () => {
    for (const iceCreamScoop of initialIceCreamStack) {
        const existingIceCreamScoop = await userIceCreamStack.findOne({ name: iceCreamScoop.name });
        if (!existingIceCreamScoop) {
            const newIceCreamScoop = new userIceCreamStack(iceCreamScoop);
            await newIceCreamScoop.save();
            console.log(`Added ${iceCreamScoop.name} scoop to stack!`)
        }
    }
}

// tide level

export const initialTideLevel = {... tideLevel};

export const addInitialTideLevel = async () => {
    const initialTideLevel = { ... tideLevel};
    for (const character in initialTideLevel) {
        const characterTideLevel = initialTideLevel[character as keyof typeof initialTideLevel];
        const existingTideLevel = await userTideLevel.findOne({ character });
        if (!existingTideLevel) {
            const newTideLevel = new userTideLevel({
                character,
                characterTideLevel
            })
            await newTideLevel.save();
            console.log(`added tide level ${characterTideLevel} with tide level ${existingTideLevel} to DB!`)
        } // todo: test this code
    }
}
