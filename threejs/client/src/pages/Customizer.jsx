import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes, ClothesTabs, ChangeSizeTabs  } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');

  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  })

  const [activeClothesTab, setActiveClothesTab] = useState({
    t_shirt: true,
    sweater: false,
    sleeveless_t_shirt: false,
    dress: false,
  })

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case "aipicker":
        return <AIPicker 
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />
      default:
        return null;
    }
  }

  const handleSubmit = async (type) => {
    if(!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await fetch('http://localhost:8080/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt,
        })
      })

      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
          state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  const handleChangeLogoSizeTab = (tabName) => {
    const position_coefficient = state.logo_size / 7;
    const size_coefficient = 0.01 / state.size;
    // const size_coefficient = ;
    switch (tabName) {
      case "up":
          state.logo_position.y += position_coefficient;
        break;
      case "down":
          state.logo_position.y -= position_coefficient;
        break;
      case "left":
        state.logo_position.x -= position_coefficient;
        break;
      case "right":
        state.logo_position.x += position_coefficient;
        break;
      case "plus":
        //state.logo_position.z += coefficient;
        state.logo_size += size_coefficient;
        state.logo_position.z = state.logo_size/2;
      break;5
      case "minus":
        let temp_size = state.logo_size - size_coefficient;
        if(temp_size >= (0.15 / state.size)){
          state.logo_size -= size_coefficient;
          state.logo_position.z = state.logo_size/2;
        }
      break;
      default:
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {
                      if(activeEditorTab != tab.name){
                        setActiveEditorTab(tab.name)
                      } else {
                        setActiveEditorTab("");
                      }
                    }}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 z-10"
            {...slideAnimation('right')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {ChangeSizeTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => handleChangeLogoSizeTab(tab.name)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className='changeitems-container'
            {...slideAnimation("down")}
          >
            {ClothesTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeClothesTab[tab.name]}
                handleClick={() => {
                  state.currentItem = tab.object,
                  state.rotation = tab.rotation,
                  state.size = tab.size,
                  state.logo_position = tab.logo_position,
                  state.logo_size = tab.logo_size,
                  setActiveClothesTab({
                    t_shirt: tab.name === 't_shirt',
                    sweater: tab.name === 'sweater',
                    sleeveless_t_shirt: tab.name === 'sleeveless_t_shirt',
                    dress: tab.name === 'dress',
                  });
                }}
              />
            ))}
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          
          <motion.div
            className='filtertabs-container'
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer