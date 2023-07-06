import styled from "styled-components";
import PropTypes from "prop-types";
import { useStore } from "../store";

const GameOver = () => {
  const setNewGame = useStore((state) => state.setNewGame);

  return (
    <StyledGameOver>
      <h1>Game over! You clicked the same meme twice.</h1>
      <button onClick={setNewGame}>Retry</button>
    </StyledGameOver>
  );
};

const StyledGameOver = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

GameOver.propTypes = {
  children: PropTypes.any,
  handleGameOver: PropTypes.func,
};

export default GameOver;
