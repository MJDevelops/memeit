import MemeCard from "./MemeCard";
import styled from "styled-components";
import { useStore } from "../store";
import { useEffect } from "react";

const CardGrid = () => {
  const memes = useStore((state) => state.memes);
  const fetchMemes = useStore((state) => state.fetchMemes);
  const resetMemes = useStore((state) => state.resetMemes);

  useEffect(() => {
    fetchMemes();

    return () => {
      resetMemes();
    };
  }, []);

  return (
    <StyledCardGrid>
      {memes.map((img) => (
        <MemeCard key={img.id} image={img} />
      ))}
    </StyledCardGrid>
  );
};

const StyledCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  align-self: center;
  justify-self: center;
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default CardGrid;
