import styled from 'styled-components';
import githubLogo from '../assets/github-mark.svg';

const Footer = () => {
  return (  
    <FooterWrapper>
      <p>&#169; MJP</p> 
      <a href="https://github.com/MJProgramming">
        <GithubImg src={githubLogo} alt="Github Logo" />
      </a>
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
