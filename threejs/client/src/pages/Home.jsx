import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {useSnapshot } from 'valtio'

import state from '../store'
import CustomButton from '../components'
import {
    headTextAnimation,
    headContentAnimation,
    headContainerAnimation,
    slideAnimation
} from '../config/motion'

const Home = () => {
  
  const snap = useSnapshot(state)
  
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img 
                        src='./threejs.png'
                        alt='logo'
                        className='w-8 h-8 object-contain'
                    />
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            Let's <br className='x1:block hidden'/>
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                        Internal server error: <strong>/home/egor/diploma/threejs/client/src/pages/Home.jsx:</strong> Unexpected token, expecte
                        </p>

                        <CustomButton
                            type='filled'
                            title="Customized It"
                            handleClick= {() => state.intro = false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home