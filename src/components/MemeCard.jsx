import styled from 'styled-components';
import PropTypes from 'prop-types';

const MemeCard = ({ image }) => {
  return (
    <CardWrapper>
      <img style={{width: '100%', height: '100%'}} src={image} />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 60%;
  flex-direction: column;
  border: 2px solid black;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

MemeCard.propTypes = {
  children: PropTypes.any,
  image: PropTypes.string,
};

export default MemeCard;
