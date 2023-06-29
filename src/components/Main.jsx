import styled from 'styled-components';
import CardGrid from './CardGrid';
import GameOver from './GameOver';
import Score from './Score';
import RoundWon from './RoundWon';
import { shuffleArray } from '../utils';
import { useState, useEffect } from 'react';

const Main = () => {
  const [memes, setMemes] = useState([]);
  const [clickedMemes, setClickedMemes] = useState([]);
  const [isRoundOver, setIsRoundOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [round, setRound] = useState(1);
  const [roundWon, setRoundWon] = useState(false);

  const resetMemes = () => {
    setMemes([]);
  };

  const resetClickedMemes = () => {
    setClickedMemes([]);
  };

  const handleClickedMeme = (id) => {
    if (clickedMemes.includes(id)) {
      resetMemes();
      resetClickedMemes();
      setIsRoundOver(true);
      setRound(1);
      setScore(0);
    } else {
      setClickedMemes([...clickedMemes, id]);
      setScore(score + 1);
    }
  };

  const handleSetRound = () => {
    setRound(round + 1);
    setIsRoundOver(false);
    setRoundWon(false);
  }

  useEffect(() => {
    if (memes.length === 0 && !isRoundOver) {
      const fetchMemes = async () => {
        const memes = await fetch(`https://meme-api.com/gimme/dankmemes/${7 + round}`);
        const memesJSON = await memes.json();

        return memesJSON['memes'].map((meme, index) => (
          { id: index, memeURL: meme.url }
        ));
      };

      fetchMemes().then((arr) => setMemes(arr));
    }
  }, [memes, isRoundOver]);

  useEffect(() => {
    if (memes.length !== 0) {
      setMemes(shuffleArray(memes));
      
      if (clickedMemes.length === memes.length) {
        resetMemes();
        resetClickedMemes();
        setIsRoundOver(true);
        setRoundWon(true);
      }
      
      if (score > highScore) {
        setHighscore(score);
      }
    }
    
  }, [clickedMemes, score]);

  return (
    <StyledMain>
      {
        isRoundOver 
        ? roundWon
          ? <RoundWon round={round} handleSetRound={handleSetRound} />
          : <GameOver handleGameOver={setIsRoundOver} />
        : 
        <> 
          <Score
            currentScore={score}
            highScore={highScore}
          />
          <CardGrid
            clickedMemesArr={clickedMemes}
            memesArr={memes}
            handleClickedMeme={handleClickedMeme}
          />
        </>
      }
    </StyledMain>
  );
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default Main;
