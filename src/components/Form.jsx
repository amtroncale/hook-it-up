import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ addChirp }) => {
    const [username, setUsername] = React.useState('');
    const [message, setMessage] = React.useState('');

    const submitChirp = (e) => {
        e.preventDefault();
        addChirp({ id: uuidv4(), username, message });
        setUsername('');
        setMessage('');
    }

    return (
        <form className="form-group border rounded-lg p-3">
            <input
                value={username}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Who chirps?"
                className="form-control shadow-md"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What chirps?"
                rows={7}
                className="form-control shadow-md"
            />
            <button onClick={submitChirp} className="btn btn-secondary btn-block mt-3">
                Chirp
            </button>
        </form>
    )
};

export default Form;