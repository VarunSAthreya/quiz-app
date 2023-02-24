import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ message }) => {
    return (
        <>
            <Spinner animation="grow" />
            <p>{message}</p>
        </>
    );
};
export default Loading;
