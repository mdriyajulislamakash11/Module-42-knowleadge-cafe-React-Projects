import React from 'react';

const BookMark = ({bookMark}) => {
    const {title} = bookMark;

    return (
        <div className='border bg-gray-300 text-start m-2'>
            <h3 className='text-2xl p-2'>{title}</h3>
        </div>
    );
};

export default BookMark;