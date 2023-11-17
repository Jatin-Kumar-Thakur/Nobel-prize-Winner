import React from 'react';
import './TopWinner.css';

export default function TopWinner(prop) {
    // const data = prop.data;

    return (
        <div className='winner-container'>
            <h1>Top Winners Name</h1>
            <div className="winner-name">
                <p>Frederick Sanger</p>
                <p>Linus Pauling</p>
                <p>John Bardeen</p>
                <p>Marie Curie.</p>
            </div>
        </div>
    );
}
