import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookMarks}) => {


    return (
        <div className='md:w-1/3'>
            <h2 className='text-2xl font-bold  text-center'>book marks blogs: {bookMarks.length}</h2>

        
                {
                    bookMarks.map((bookMark, indx) => <BookMark  
                    key={indx} 
                    bookMark={bookMark} 
                    />)
                }

        </div>
    );
};

export default BookMarks;