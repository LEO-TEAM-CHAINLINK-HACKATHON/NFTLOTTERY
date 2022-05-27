import LotteryButton from "./lotteryButton";

<<<<<<< HEAD
const EntryButton = ({enterRaffle}) => {
    return (
        <LotteryButton enterRaffle={enterRaffle} />
=======
const EntryButton = ({enterRaffle, getRecentWinner}) => {
    return (
        <LotteryButton enterRaffle={enterRaffle} getRecentWinner={getRecentWinner} />
>>>>>>> 2451ae099300f79825e98e6adc3f57496862a773
    )
}

export default EntryButton;