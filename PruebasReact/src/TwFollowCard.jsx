import { useState } from 'react'
import './App.css';

export function TwitterFollowCard({userName, children, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className= 'tw-followCard-header'>
                <img 
                className='tw-followCard-headerUser' 
                src={`https://unavatar.io/${userName}`}
                alt ='avatar dev'/>
                <div className= 'tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{addAt(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}