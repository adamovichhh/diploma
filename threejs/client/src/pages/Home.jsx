import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headTextAnimation,
  headContentAnimation,
  headContainerAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./bsuir_logo.png"
              alt="logo"
              className="w-14 h-14 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                НЕ  БУДЬ <br className="xl:block hidden" /> КАК <br className="xl:block hidden" /> ВСЕ 
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            > 
              <p className="max-w-xl font-normal text-gray-600 text-base">
              Создайте свою уникальную и эксклюзивную одежду с помощью нашего 
              новейшего инструмента для 3D-персонализации. <strong>Дайте волю своему воображение</strong>{" "} 
              и определите свой собственный стиль.
              </p>

              <CustomButton
                type="filled"
                title="Редактировать"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
