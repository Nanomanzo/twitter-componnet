import React from 'react';
import viteLogo from '/vite.svg'

const Card = ({name, description, price}) => {
  return (
    <div className='card bg-black rounded-2xl flex flex-col justify-center items-center p-8 gap-8'>
      <div className='card-container_img w-full flex justify-center items-center'>
        <img src={viteLogo} alt=""  className='w-full max-w-40'/>
      </div>
      <div className='card-container_text flex flex-col flex-wrap content-start items-start w-full gap-3'>
        <p className='card-container_text_title text-4xl font-bold'>{name}</p>
        <p className='card-container_text_description'>{description}</p>
        <p className='card-container_text_price'>${price}</p>
      </div>
    </div>
  );
};

export default Card;
