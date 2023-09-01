import {headers} from "next/headers";

export default async function getUserIceCream () {
    try {
        const response = await fetch('http://localhost:3000/api/user/userCollection', {
            method: 'GET',
            headers: headers()
        });
        const iceCream = await response.json();
        return iceCream;
    } catch (error) {
        console.error(`An error occurred while fetching ice cream: ${error}`);
    }
}
