import { swatch, fileIcon, ai, logoShirt, stylishShirt, down, up, left, right } from "../assets";

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
  }
];

export const ClothesTabs = [
  {
    name: "shirt",
    icon: logoShirt,
    object: "/shirt_baked.glb",
    rotation: 0,
    size : 1,
    logo_position : {
      x : 0,
      y : 0.04,
      z : 0.07,
    },
    logo_size: 0.15
  },
  {
    name: "shirtWithoutHands",
    icon: stylishShirt,
    object: "/shirt_without_hands.glb",
    rotation: 0,
    size : 1,
    logo_position : {
      x : 0,
      y : 0.04,
      z : 0.15,
    },
    logo_size: 0.15
  },
  {
    name: "hoodie",
    icon: stylishShirt,
    object: "/sweater_25.glb",
    rotation: 0,
    size : 0.007,
    logo_position : {
      x : 0,
      y : 10,
      z : 5,
    },
    logo_size: 20
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
