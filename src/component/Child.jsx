function Child({ onUpdate }) {
    console.log('输出参数', onUpdate);
    return <button onClick={() => onUpdate("New Data")}>Click Me</button>;
}

export default Child