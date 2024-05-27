import { proxy } from "valtio";

const state = proxy({
    intro: true,

    color: '#5755FE',
    currentItem: "/t-shirt.glb",
    rotation: 0,
    size : 1,

    isLogoTexture: false,
    logoDecal: './bsuir_logo.png',
    logo_size: 0.15,
    logo_position: {
      x: 0,
      y: 0.04,
      z: 0.075,
    },

    isFullTexture: false,
    fullDecal: './texture.jpg',
    texture_size: 0.65,
    texture_position: {
      x: 0,
      y: -0.05,
      z: 0,
    },
})

export default state;