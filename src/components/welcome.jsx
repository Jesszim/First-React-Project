import Bio from "./bio"

const Welcome=({user, username})=>{
    return (
        <>
        <h1 id="welcome">Welcome to my page {username}!</h1>
        <Bio user={user} />
        </>
    )
}
export default Welcome