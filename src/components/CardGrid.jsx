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
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  border: 1px solid black;
`;

CardGrid.propTypes = {
  children: PropTypes.any,
  memesArr: PropTypes.array,
  handleClickedMeme: PropTypes.func,
  clickedMemesArr: PropTypes.array,
};

export default CardGrid;
