import React from 'react';

const Timeline = ({ chirps }) => {
    return (
        <ul className="list-group">
            {chirps.map((chirp) => (
                <li 
                    key={chirp.id}
                    className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{chirp.username}:</span>
                        <span>{chirp.message}</span>
                    </li>
            ))}
        </ul>
    )
};

export default Timeline;