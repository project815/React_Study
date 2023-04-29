import './App.css';
import {useEffect, useState} from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
]

function App() {
  const [cards, setCard] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //카드 섞기
  const shuffleCard = ()=>{
    const shuffleCard = [...cardImages, ...cardImages]
    .sort(()=> Math.random() - 0.5)
    .map((card) => ({...card, id:Math.random()}))

    setChoiceOne(null);
    setChoiceTwo(null);
    setCard(shuffleCard);
    setTurn(0);
  }

  //카드 선택
  const choiceHandler = card =>{
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  //카드 비교
  useEffect(()=>{
    if(choiceOne && choiceTwo)
    {
      if(choiceOne.src === choiceTwo.src){
        setCard(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true};
            }else{
              return card;
            }
          })
        })
        resetTurn();
      } else{
        setTimeout(()=>resetTurn(), 1000);
        // resetTurn();
      }
    }

  }, [choiceOne, choiceTwo]);

  //게임 시작
  useEffect(()=>{
    shuffleCard();
  }, [])


  console.log(cards);

  //라샛
  const resetTurn = () =>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn(prevTurns => prevTurns + 1);
  }
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCard}>NewGame</button>

      <div className='card-grid'>
        {cards.map((card)=>(
          <SingleCard 
          key={card.id} 
          card={card} choiceHandler={choiceHandler}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))
        }
      </div>
      <p>Turn : {turn}</p>
    </div>
  );
}
export default App;
