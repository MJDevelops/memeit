import MemeCard from './MemeCard';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardGrid = ({ memesArr, handleClickedMeme }) => {
  return (
    <StyledCardGrid>
      {memesArr.map((img) => (
        <MemeCard
          key={img.id}
          image={img}
          handleClickedMeme={handleClickedMeme}
        />
      ))}
    </StyledCardGrid>
  );
};

const StyledCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  align-self: center;
  justify-self: center;
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

CardGrid.propTypes = {
  children: PropTypes.any,
  memesArr: PropTypes.array,
  handleClickedMeme: PropTypes.func,
  clickedMemesArr: PropTypes.array,
};

export default CardGrid;
