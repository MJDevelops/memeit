import styled from 'styled-components';
import PropTypes from 'prop-types';


const RoundWon = ({ round, handleSetRound }) => {
  return (
    <StyledRoundWon>
      <p>You won Round {round}!</p>
      <button onClick={handleSetRound}>Next Round</button>
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

RoundWon.propTypes = {
  children: PropTypes.any,
  round: PropTypes.number,
  handleSetRound: PropTypes.func,
};

export default RoundWon;