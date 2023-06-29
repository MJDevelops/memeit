import styled from 'styled-components';
import githubLogo from '../assets/github-mark.svg';

const Footer = () => {
  return (  
    <StyledFooter>
      <p>&#169; MJP</p> 
      <a href="https://github.com/MJProgramming/memeit">
        <GithubImg src={githubLogo} alt="Github Logo" />
      </a>
    </StyledFooter>
  );
}

const GithubImg = styled.img`
  width: 30px;
  height: auto;
`;

const StyledFooter = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export default Footer;
