import React from 'react';
import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className='flex justify-between items-center py-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl '>Knowleadge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;