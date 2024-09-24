import React from 'react';
import { useState } from 'react'

const TwitterCard = ({ formatUserName, userName, children, initialIsFollowing }) => {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }


  const textButton = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`} alt="avatar"
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{textButton}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterCard;
