import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Loading = ({ message }) => {
    return (
        <>
            <Spinner animation="grow" />
            <p>{message}</p>
        </>
    );
};
