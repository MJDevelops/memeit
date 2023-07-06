import styled from "styled-components";
import CardGrid from "./CardGrid";
import GameOver from "./GameOver";
import Score from "./Score";
import RoundWon from "./RoundWon";
import { shuffleArray } from "../utils";
import { useEffect } from "react";
import { useStore } from "../store";

const Main = () => {
  const clickedMemes = useStore((state) => state.clickedMemes);
  const highScore = useStore((state) => state.highScore);
  const score = useStore((state) => state.score);
  const memes = useStore((state) => state.memes);
  const setMemes = useStore((state) => state.setMemes);
  const handleRoundWon = useStore((state) => state.handleRoundWon);
  const setHighscore = useStore((state) => state.setHighscore);
  const isRoundOver = useStore((state) => state.isRoundOver);
  const roundWon = useStore((state) => state.isRoundWon);

  useEffect(() => {
    if (memes.length !== 0) {
      setMemes(shuffleArray(memes));
      if (clickedMemes.length === memes.length) {
        handleRoundWon();
      }

      if (score > highScore) {
        setHighscore(score);
      }
    }
  }, [memes, clickedMemes]);

  return (
    <StyledMain>
      {isRoundOver ? (
        roundWon ? (
          <RoundWon />
        ) : (
          <GameOver />
        )
      ) : (
        <>
          <Score />
          <CardGrid />
        </>
      )}
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default Main;
