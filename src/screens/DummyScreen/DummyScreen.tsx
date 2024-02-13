import React from "react"

// Components
import { DmText, DmView } from "components/UI"

// Hooks & Redux

// Helpers & Types
import { RootStackScreenProps } from "navigation/types"

// Libs & Utils

// Styles & Assets
import clsx from "clsx"
import styles from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"

type Props = RootStackScreenProps<"welcome">

const DummyScreen: React.FC<Props> = ({ navigation }) => {
  // Props
  // State
  // Global Store
  // Variables
  // Refs
  // Methods
  // Handlers
  // Hooks
  // Listeners
  // Render Methods

  return (
    <SafeAreaView className="flex-1">
      <DmText>DummyScreen</DmText>
    </SafeAreaView>
  )
}

export default DummyScreen
