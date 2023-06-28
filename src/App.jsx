import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import Main from './components/Main';
import GlobalStyle from './globalStyles';

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default App;
