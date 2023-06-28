import styled from 'styled-components';
import PropTypes from 'prop-types';

const MemeCard = ({ image }) => {
  return (
    <CardWrapper>
      <img style={{width: '100%', height: '100%'}} src={image} />
      <LayerEffect />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  position: relative;
  width: 60%;
  height: 60%;
  flex-direction: column;
  border: 2px solid black;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

const LayerEffect = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);

    &::before {
      color: white;
      content: "Choose";
    }
  }
`;

MemeCard.propTypes = {
  children: PropTypes.any,
  image: PropTypes.string,
};

export default MemeCard;
