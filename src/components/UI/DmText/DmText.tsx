import React from "react"

// Components
import { Pressable, Text, TextProps } from "react-native"

// Styles & Assets
import clsx from "clsx"
import styles from "./styles"

interface Props extends TextProps {
  onPress?: () => void
}

const DmText: React.FC<Props> = ({
  onPress,
  className,
  children,
  ...restProps
}) => {
  const Wrapper = onPress ? Pressable : React.Fragment

  return (
    <Wrapper>
      <Text
        {...restProps}
        className={clsx("text-14 text-blackText font-rubik400", className)}
      >
        {children}
      </Text>
    </Wrapper>
  )
}

export default DmText
