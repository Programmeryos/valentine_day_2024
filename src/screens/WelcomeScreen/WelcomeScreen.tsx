import React, { useEffect, useState } from "react"

// Components
import { ActionBtn, DmText, DmView } from "components/UI"
import { ImageBackground } from "react-native"
import FastImage from "react-native-fast-image"
import { SafeAreaView } from "react-native-safe-area-context"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated"

// Hooks & Redux
import { useIsFocused } from "@react-navigation/native"

// Helpers & Types
import { RootStackScreenProps } from "navigation/types"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "helpers/helpers"

// Libs & Utils

// Styles & Assets
import clsx from "clsx"
import styles from "./styles"
import bgImg from "assets/images/bg.png"
import pigGif from "assets/images/pig-gif.gif"
import andryPig from "assets/images/angry-pig.gif"
import Sound from "react-native-sound"

type Props = RootStackScreenProps<"welcome">

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  // Props
  // State
  const [isNo, setNo] = useState(false)
  const [audio, setAudio] = useState<Sound>()
  // Global Store
  // Variables
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const isFocused = useIsFocused()

  const createSound = async () => {
    const sound = await new Sound("say-no.mp3", Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.error("Не вдалося завантажити звук", error)
      } else {
        setAudio(sound)
        sound.play()
      }
    })
  }

  const anim = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(translateX.value) },
        { translateY: withTiming(translateY.value) },
      ],
    }
  })
  // Refs
  // Methods
  // Handlers
  const handleYes = () => {
    audio?.stop(() => {
      setAudio(undefined)
      navigation.navigate("home")
    })
  }

  const handleNo = () => {
    translateX.value = Math.floor(Math.random() * (SCREEN_WIDTH / 8 - 0) + 0)
    translateY.value = Math.floor(Math.random() * (SCREEN_HEIGHT / 8 - 0) + 0)
    setNo(true)
  }

  useEffect(() => {
    if (isNo) {
      createSound()
      return () => {
        audio?.release()
      }
    }
  }, [isNo])

  // Hooks
  // Listeners
  // Render Methods

  return (
    <ImageBackground className="flex-1" source={bgImg}>
      <SafeAreaView className="flex-1 items-center justify-center px-[24]">
        <DmView
          className={clsx(
            "items-center w-[250] h-[250] bg-pink rounded-full overflow-hidden items-center justify-center",
            isNo && "bg-white"
          )}
        >
          <FastImage
            source={isNo ? andryPig : pigGif}
            style={{ width: 200, height: 200 }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </DmView>
        <DmView className="mt-[12] self-auto py-[6] px-[16] bg-pink rounded-xl">
          <DmText className="text-white text-22 text-center">
            {isNo ? "Непослушная кабила" : "А ти Свін"}, будеш моєю валентикою ?
          </DmText>
        </DmView>
        <DmView className="mt-[48] w-full flex-row items-center justify-around">
          <ActionBtn title="Так" onPress={handleYes} className="w-[30%]" />
          <Animated.View style={anim} className="w-[30%]">
            <ActionBtn title="Ні" onPress={handleNo} className="w-full" />
          </Animated.View>
        </DmView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default WelcomeScreen
