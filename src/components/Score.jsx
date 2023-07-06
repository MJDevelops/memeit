import styled from "styled-components";
import { useStore } from "../store";

const Score = () => {
  const currentScore = useStore((state) => state.score);
  const highScore = useStore((state) => state.highScore);

  return (
    <StyledScore>
      <ScoreWrapper>
        <p>Score: {currentScore}</p>
        <p>Highscore: {highScore}</p>
      </ScoreWrapper>
    </StyledScore>
  );
};

const StyledScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const ScoreWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  padding: 10px;
  border-radius: 23px;
  background: #c7c7c7;
  box-shadow: 17px 17px 33px #505050, -17px -17px 33px #ffffff;
`;

export default Score;
