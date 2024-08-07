const Bio =({user})=>{
    let firstName="Jessica"
    let lastName="Zimmerman"
    return (
    <div id='container' > 
        <h2>My name is {firstName} {lastName}</h2>
        <h3>I'm a developer and I love coding!!</h3>
        <br />
        <h3>Thank you for visiting, {user}</h3>
    </div>
    )
}
export default Bio