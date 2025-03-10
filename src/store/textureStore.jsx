import { create } from 'zustand';

export const useTextureStore = create((set) => ({
  texture: null, //TODO (maybe start with a predefined texture)
  addTextureFromButton: (texturePath) => set({ texture: texturePath }),
}));