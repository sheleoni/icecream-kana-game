import {FetchContainer} from "@/app/user/injectSeedData/button/_container/buttonContainer";
const ServerRenderedPage = () => {
    return (
        <>
        Hey we want to server-render a button that has fetches stuff from the client
        <p>
            <FetchContainer Tag={'button'}>
                Get some data!
            </FetchContainer>
        </p>
        </>
    )
}

export default ServerRenderedPage;
