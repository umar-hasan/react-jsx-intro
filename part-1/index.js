const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Someone"/>
        </div>
    )
}

const FirstComponent = () => {
    return (
        <h1>My very first component.</h1>
    )
}

const NamedComponent = (props) => {
    return (
        <p>My name is {props.name}.</p>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))