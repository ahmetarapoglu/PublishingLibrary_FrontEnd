import React from 'react';
interface DataType {
    code: number;
    title: string;
    description: string;
}
const Error = ({ code, title, description }: DataType) => {
    return (
        <div className='error' style={{ opacity: code == 401 ? 1 : 0 }}>
            <div className='side'></div>
            <h3 className='title-text'>{title} - {code}</h3>
            <div className='description'>{description}</div>
        </div>
    );
};

export default Error;