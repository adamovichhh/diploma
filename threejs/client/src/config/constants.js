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
    object: "/shirt_baked.glb",
    rotation: 0,
    size: 1,
    logo_position: {
      x: 0,
      y: 0.04,
      z: 0.075,
    },
    logo_size: 0.15,
  },
  {
    name: "sweater",
    icon: sweater,
    object: "/sweater_25.glb",
    rotation: 0,
    size: 0.007,
    logo_position: {
      x: 0,
      y: 10,
      z: 6,
    },
    logo_size: 18,
  },
  {
    name: "sleeveless_t_shirt",
    icon: sleeveless_t_shirt,
    object: "/shirt_without_hands.glb",
    rotation: 0,
    size: 1,
    logo_position: {
      x: 0,
      y: 0.04,
      z: 0.075,
    },
    logo_size: 0.15,
  },
  {
    name: "dress",
    icon: dress,
    object: "/dress_new.glb",
    rotation: 0,
    size: 0.002,
    logo_position: {
      x: 20,
      y: 0.07,
      z: 0.15,
    },
    logo_size: 149,
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
