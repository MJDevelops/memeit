import styled from 'styled-components';

function Main() {
  return (
    <MainWrapper>
      {data.map((item, index) => <CardWrapper key={index}>{item.text}</CardWrapper>)}
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

const data = [
  {text: 'Text 1'},
  {text: 'Text 2'},
  {text: 'Text 3'},
  {text: 'Text 4'},
  {text: 'Text 5'},
  {text: 'Text 6'},
  {text: 'Text 7'},
  {text: 'Text 8'}
];

export default Main;
