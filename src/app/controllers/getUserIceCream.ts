import {headers} from "next/headers";

export default async function getUserIceCream () {
    try {
        const response = await fetch('http://localhost:3000/api/user/userCollection', {
            method: 'GET',
            headers: headers(), // todo: solve header problem
            // headers: {
            //     'Cache-Control': 'no-cache',
            // },
        });
        // console.log(headers(), `headers()!!`)
        // const iceCream = await response.json();
        // return iceCream;
        console.log('Headers:', headers());
        const responseText = await response.text();
        console.log('Response text:', responseText);
        return JSON.parse(responseText);
    } catch (error) {
        console.log(error, `getUserIceCream error`)
        console.error(`An error occurred while fetching ice cream: ${error}`);
    }
}
