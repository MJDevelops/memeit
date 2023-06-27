import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <h1>MemeIt</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`    
  @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;700;900&display=swap');

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  border-bottom: 1px solid black;
  font-family: 'Bitter', serif;
  font-weight: 900;
`;

export default Header;
