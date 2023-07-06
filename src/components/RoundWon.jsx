import styled from "styled-components";
import { useStore } from "../store";

const RoundWon = () => {
  const nextRound = useStore((state) => state.setNextRound);
  const round = useStore((state) => state.currentRound);

  return (
    <StyledRoundWon>
      <p>You won Round {round}!</p>
      <button onClick={nextRound}>Next Round</button>
    </StyledRoundWon>
  );
};

const StyledRoundWon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default RoundWon;
