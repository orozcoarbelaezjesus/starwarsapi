import React from 'react';

import './styles/Loader.css';

export default function Loader() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="lds-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
}