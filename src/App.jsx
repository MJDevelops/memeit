import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import Main from './components/Main';
import GlobalStyle from './globalStyles';

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default App;
