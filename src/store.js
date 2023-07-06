import { create } from "zustand";

export const useStore = create((set, get) => ({
  memes: [],
  clickedMemes: [],
  isRoundOver: false,
  isRoundWon: false,
  score: 0,
  highScore: 0,
  currentRound: 1,
  setNewGame: () => set({ isRoundOver: false }),
  setMemes: (memes) => {
    set({ memes: memes });
  },
  resetMemes: () => set({ memes: [] }),
  setHighscore: (newScore) => set({ highScore: newScore }),
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  handleRoundLoss: () => {
    set({
      memes: [],
      clickedMemes: [],
      isRoundOver: true,
      score: 0,
      currentRound: 1,
    });
  },
  handleRoundWon: () => {
    set({
      memes: [],
      clickedMemes: [],
      isRoundOver: true,
      isRoundWon: true,
    });
  },
  addToClickedMemes: (id) =>
    set((state) => ({
      clickedMemes: [...state.clickedMemes, id],
    })),
  setNextRound: () => {
    set((state) => ({
      isRoundOver: false,
      isRoundWon: false,
      currentRound: state.currentRound + 1,
    }));
  },
  fetchMemes: async () => {
    const round = get().currentRound;
    const memes = await fetch(
      `https://meme-api.com/gimme/dankmemes/${7 + round}`
    );
    const memesJSON = await memes.json();
    const arr = memesJSON["memes"].map((meme, index) => ({
      id: index,
      memeURL: meme.url,
    }));

    set({ memes: arr });
  },
}));
