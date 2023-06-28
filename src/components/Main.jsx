import styled from 'styled-components';
import CardGrid from './CardGrid';
import { useState, useEffect } from 'react';

const Main = () => {
  const [memes, setMemes] = useState([]);
/*   const [clickedMemes, setClickedMemes] = useState([]); */

  useEffect(() => {
    const fetchMemes = async () => {
      const memes = await fetch('https://meme-api.com/gimme/dankmemes/8');
      const memesJSON = await memes.json();

      return memesJSON['memes'].map((meme, index) => (
        { id: index, memeURL: meme.url }
      ));
    };

    fetchMemes().then((arr) => setMemes(arr));
  }, []);

  return (
    <MainWrapper>
      <CardGrid images={memes}/>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default Main;
