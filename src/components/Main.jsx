import styled from 'styled-components';
import CardGrid from './CardGrid';
import GameOver from './GameOver';
import Score from './Score';
import { shuffleArray } from '../utils';
import { useState, useEffect } from 'react';

const Main = () => {
  const [memes, setMemes] = useState([]);
  const [clickedMemes, setClickedMemes] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighscore] = useState(0);

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
      setIsGameOver(true);
    } else {
      setClickedMemes([...clickedMemes, id])
    }
  };

  useEffect(() => {
    if (memes.length === 0 && !isGameOver) {
      const fetchMemes = async () => {
        const memes = await fetch('https://meme-api.com/gimme/dankmemes/8');
        const memesJSON = await memes.json();

        return memesJSON['memes'].map((meme, index) => (
          { id: index, memeURL: meme.url }
        ));
      };

      fetchMemes().then((arr) => setMemes(arr));
    }
  }, [memes, isGameOver]);

  useEffect(() => {
    setMemes(shuffleArray(memes));
    setScore(clickedMemes.length);

    if (score > highScore) {
      setHighscore(score);
    }
  }, [clickedMemes, score]);

  return (
    <StyledMain>
      {
        isGameOver 
        ? <GameOver handleGameOver={setIsGameOver} /> 
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
