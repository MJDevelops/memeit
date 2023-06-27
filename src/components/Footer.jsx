import styled from 'styled-components';
import githubLogo from '../assets/github-mark.svg';

function Footer() {
  return (  
    <FooterWrapper>
      <GithubImg src={githubLogo} alt="Github Logo" />
      <p>&#169; MJP</p> 
    </FooterWrapper>
  );
}

const GithubImg = styled.img`
  width: 30px;
  height: auto;
`;

const FooterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  align-items: center;
  justify-content: center;
  width: 100vw;
  border: 2px solid black;
`;

export default Footer;
