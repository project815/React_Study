import React from 'react'
import './SingleCard.css';

export default function SingleCard({card, choiceHandler, flipped}) {

    const SelectCard = ()=>{
        // console.log(card);
        choiceHandler(card);
    }
  return (
    <div className='card'>
        <div className={flipped? 'flipped' : ''}>
            <img className='front' src={card.src} alt='card front'></img>
            <img className='back' src='/img/cover.png' alt='card back' onClick={SelectCard}></img>
        </div>
    </div>
  )
}
