import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>MemeIt</h1>
      <h4 style={{marginTop: '-10px'}}>A memory card game using memes, built with React</h4>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  font-family: 'Bitter', serif;
  font-weight: 900;
`;

export default Header;
