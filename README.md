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