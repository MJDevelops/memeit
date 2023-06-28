import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>MemeIt</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`    
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  border-bottom: 1px solid black;
  font-family: 'Bitter', serif;
  font-weight: 900;
`;

export default Header;
