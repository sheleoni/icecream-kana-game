type Props = {
    score: Number
}

const Score = ({ score }: Props) =>  {
    // todo: maybe POST data on score increase (on clicking correct bubble)
    // todo: pass setScore to <Bubble /> component. Meaning that score has to be a state in play/page.tsx
    return (
        <>
            Score!! You have: {score}
        </>
    )
}

export default Score;
