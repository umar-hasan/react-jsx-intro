const App = () => {
    return (
        <div>
            <Tweet username="user1" name="Bob" date={(new Date().getHours() % 12).toString() + ":" + (new Date().getMinutes()).toString()} message="Something" />
            <Tweet username="user2" name="Billy" date={(new Date().getHours() % 12).toString() + ":" + (new Date().getMinutes()).toString()} message="Something" />
            <Tweet username="user3" name="Mike" date={(new Date().getHours() % 12).toString() + ":" + (new Date().getMinutes()).toString()} message="Something" />
        </div>
    )
}

const Tweet = ({ username, name, date, message }) => {
    return (
        <div>
            <div>
                <h3>{name} - <span>{username}</span> </h3>
            </div>

            <h6>{date}</h6>
            <p>{message}</p>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))