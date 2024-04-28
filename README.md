# diploma

npm create vite@latest -- --template react client

npm install three @react-three/fiber @react-three/drei maath valtio react-color framer-motion

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

//////////// in tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

////////// in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;


/////////////////////////////////BACKEND//////////////////////////
npm install cloudinary cors dotenv express mongoose nodemon openai

Create a tiger skin shirt pattern that closely resembles the texture and color of a real tiger's skin. The pattern should feature orange and black stripes that are approximately two inches wide and spaced about an inch apart. The overall pattern should be large enough to cover the front and back of a shirt. Please ensure that the pattern is beautifully color-graded with vivid colors, and includes intricate and hyper-detailed details to make it look as realistic as possible.

{
    name: "temp",
    icon: stylishShirt,
    object: "/last_hoodie_45.glb",
    rotation: [0,-Math.PI / 2,0],
    size : [1,1,1],
    logo_position: [-0.1, 0.07, 0.15]
  },

  {
    name: "temp",
    icon: stylishShirt,
    object: "/dress_new.glb", - красивое платье 
    rotation: [0,0,0],
    size : [0.002,0.002,0.002],
    logo_position: [20, 0.07, 0.15],
    logo_size: 149
  },


  {
    name: "temp",
    icon: stylishShirt,
    object: "/last_dress.glb", - простое платье с длинным руковом, вверх вниз по z
    rotation: [-Math.PI / 2, 0 ,0],
    size : [0.2,0.2,0.2],
    logo_position: [0, 0.1, 0.15],
    logo_size: 1.4
  },