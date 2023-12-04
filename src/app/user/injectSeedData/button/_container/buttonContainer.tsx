'use client'

type Props = {
    Tag: string,
    children: HTMLElement
}
export const FetchContainer = ({ Tag, children }: any) => {

    const fetchFromRouteHandler = async () => {
        const response = await fetch(`/api/injectSeedData`, { method: 'GET'});
        console.log(response)
    }

    return (
        <Tag onClick={fetchFromRouteHandler}>
            {children}
        </Tag>
    )
}
