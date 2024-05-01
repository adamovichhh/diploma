import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#5755FE',
    isLogoTexture: false,
    isFullTexture: false,
    logoDecal: './bsuir_logo.png',
    fullDecal: './texture.jpg',
    currentItem: "/t-shirt.glb",
    rotation: 0,
    size : 1,
    logo_position: {
        x: 0,
        y: 0.04,
        z: 0.075,
    },
    logo_size: 0.15,
    texture_size: 0.65,
    texture_position: {
      x: 0,
      y: -0.0,
      z: 0,
    },
})

export default state;