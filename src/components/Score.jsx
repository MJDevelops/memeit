import styled from 'styled-components';
import PropTypes from 'prop-types';

const Score = ({ currentScore, highScore }) => {
  return (
    <StyledScore>
      <p>Score: {currentScore}</p>
      <p>Highscore: {highScore}</p>
    </StyledScore>
  );
};

const StyledScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

Score.propTypes = {
  children: PropTypes.any,
  currentScore: PropTypes.number,
  highScore: PropTypes.number
}

export default Score;