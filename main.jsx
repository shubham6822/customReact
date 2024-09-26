function App() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Hello, JSX!</h1>
            <p>This is a simple React component using JSX in an HTML project.</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

// Render the App component into the root div
ReactDOM.render(<App />, document.getElementById('root'));
