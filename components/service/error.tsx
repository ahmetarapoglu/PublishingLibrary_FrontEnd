import React from 'react';
interface DataType {
    code: number;
    title: string;
    description: any;
}


const Error = ({ code, title, description }: DataType) => {
    description = typeof description == 'string' ? [description] : description
    console.info("code", code)
    return (

        <div className='error' style={{ opacity: code == 401 || code == 400 ? 1 : 0 }}>
            {code != 200 && (<>
                <div className='side'></div>
                <h3 className='title-text'>{title} - {code}</h3>
                {description?.map((item: string, index: number) =>
                    <div key={index} className='description'>{item}</div>
                )}
            </>)}

        </div >
    );
};

export default Error;