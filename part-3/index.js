const App = () => {
    return (
        <div>
            <Person name="Jonathan" age={17} hobbies={["soccer", "drawing"]} />
        </div>
    )
}

const Person = ({name, age, hobbies}) => {
    let over18 = <h3>{age >= 18 ? "Go vote!" : "You must be 18."}</h3>
    let n = <h2>{name.length >= 8 ? name.substring(0, 5) : name}</h2>
    return (
        <div>
            <p>Learn more.</p>
            {n}
            {over18}
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
        
    )
}


ReactDOM.render(<App />, document.getElementById("root"))