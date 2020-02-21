import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [ value, setValue ] = useState(0);
    const [ visible, setVisible ] = useState(true);
    if (visible) {
        return (
            <div>
                <button onClick={() => setValue(v => v + 1)}>+</button>
                <button onClick={() => setVisible(false)}>Hide</button>
                <HookCounter value={value} />
                <Notification/>
            </div>
        );
    }

    else {
        return (
            <button onClick={() => setVisible(true)}>Show</button>
        );
    }

};

const HookCounter = ({ value }) => {
    useEffect(() => console.log('mount'), []);

    useEffect(() => console.log('update'));

    useEffect(() => () => console.log('unmount'), []);

    return <p>{value}</p>;
};

const Notification = () => {
    const [ visible, setVisible ] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => setVisible(false), 1500);
        return () => clearTimeout(timerId);
    }, []);

    return visible ? <div><p>Hello!</p></div> : null;
};

ReactDOM.render(<App />, document.getElementById('root'));
