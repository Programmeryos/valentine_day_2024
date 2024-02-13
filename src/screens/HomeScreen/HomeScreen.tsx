import React from "react"

// Components
import { DmText, DmView } from "components/UI"
import Sound from "react-native-sound"

// Hooks & Redux

// Helpers & Types
import { RootStackScreenProps } from "navigation/types"

// Libs & Utils

// Styles & Assets
import clsx from "clsx"
import styles from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { ImageBackground } from "react-native"
import bgImg from "assets/images/bg.png"
import happyPig from "assets/images/happy-pig.gif"
import FastImage from "react-native-fast-image"

type Props = RootStackScreenProps<"welcome">

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // Props
  // State
  // Global Store
  // Variables
  const sound = new Sound("happy-pig.mp3", Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.error("Не вдалося завантажити звук", error)
    } else {
      // Звук готовий до відтворення
      sound.play(() => sound.release()) // Відтворити звук та звільнити ресурси після завершення
    }
  })
  // Refs
  // Methods
  // Handlers
  // Hooks
  // Listeners
  // Render Methods

  return (
    <ImageBackground className="flex-1" source={bgImg}>
      <SafeAreaView className="flex-1 items-center justify-center px-[24]">
        <FastImage
          source={happyPig}
          style={{ width: 200, height: 200 }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen
