import { useState } from 'react'
import './App.css';
import { TwitterFollowCard } from './TwFollowCard.jsx';

export function FollowCard() {
    // Comentarios de toda la vida de Dios en Javascript
    return (
        <section className='app'>
            <TwitterFollowCard userName='Drake'>
                Drake
            </TwitterFollowCard>
            <TwitterFollowCard userName='Naruto'>
                Naruto
            </TwitterFollowCard>
        </section>
    )
}