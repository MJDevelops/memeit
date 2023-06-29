import styled from 'styled-components';
import PropTypes from 'prop-types'

const GameOver = ({ handleGameOver }) => {
  return (
    <StyledGameOver>
      <h1>Game over! You clicked the same meme twice.</h1>
      <button onClick={() => handleGameOver(false)}>Retry</button>
    </StyledGameOver>
  )
}

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
}

export default GameOver;