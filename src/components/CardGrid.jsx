import MemeCard from './MemeCard';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardGrid = ({ images }) => {
  return (
    <CardGridWrapper>
      {images.map((img, index) => (
        <MemeCard key={index} image={img.memeURL} />
      ))}
    </CardGridWrapper>
  );
};

const CardGridWrapper = styled.div`
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
  images: PropTypes.array
};

export default CardGrid;
