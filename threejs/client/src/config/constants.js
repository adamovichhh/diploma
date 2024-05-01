import {
  swatch,
  fileIcon,
  ai,
  logoShirt,
  stylishShirt,
  down,
  up,
  left,
  right,
  plus,
  minus,
  t_shirt,
  dress,
  sleeveless_t_shirt,
  sweater
} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const ChangeSizeTabs = [
  {
    name: "up",
    icon: up,
  },
  {
    name: "down",
    icon: down,
  },
  {
    name: "left",
    icon: left,
  },
  {
    name: "right",
    icon: right,
  },
  {
    name: "plus",
    icon: plus,
  },
  {
    name: "minus",
    icon: minus,
  },
];

export const ClothesTabs = [
  {
    name: "t_shirt",
    icon: t_shirt,
    object: "/t-shirt.glb",
    rotation: 0,
    size: 1,
    logo_position: {
      x: 0,
      y: 0.04,
      z: 0.075,
    },
    logo_size: 0.15,
    texture_size: 0.62,
    texture_position: {
      x: 0,
      y: -0.05,
      z: 0,
    },
  },
  {
    name: "sweater",
    icon: sweater,
    object: "/sweater.glb",
    rotation: 0,
    size: 0.007,
    logo_position: {
      x: 0,
      y: 10,
      z: 6,
    },
    logo_size: 18,
    texture_size: 147,
    texture_position: {
      x: 0,
      y: -10,
      z: 0,
    }, 
  },
  {
    name: "sleeveless_t_shirt",
    icon: sleeveless_t_shirt,
    object: "/sleeveless-t-shirt.glb",
    rotation: 0,
    size: 1,
    logo_position: {
      x: 0,
      y: 0.04,
      z: 0.075,
    },
    logo_size: 0.15,
    texture_size: 0.62,
    texture_position: {
      x: 0,
      y: -0.05,
      z: 0,
    },
  },
  {
    name: "dress",
    icon: dress,
    object: "/dress.glb",
    rotation: 0,
    size: 0.002,
    logo_position: {
      x: 0,
      y: 0,
      z: 60,
    },
    logo_size: 149,
    texture_size: 345,
    texture_position: {
      x: 0,
      y: -35,
      z: 0,
    },
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
