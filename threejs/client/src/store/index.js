import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
    currentItem: "/shirt_baked.glb",
    rotation: 0,
    size : 1,
    logo_position: {
        x: 0,
        y: 0.04,
        z: 0.075,
    },
    logo_size: 0.15,
})

export default state;