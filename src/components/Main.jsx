import styled from 'styled-components';
import CardGrid from './CardGrid';
import { useState, useEffect } from 'react';

const Main = () => {
  const [memes, setMemes] = useState([]);
/*   const [clickedMemes, setClickedMemes] = useState([]); */

  useEffect(() => {
    const fetchMemes = async () => {
      const memes = await fetch('https://meme-api.com/gimme/8');
      const memesJSON = await memes.json();

      setMemes(memesJSON['memes'].map((meme, index) => {
        return {id: index, memeURL: meme.url};
      }));
    };

    fetchMemes();
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
`;

export default Main;
