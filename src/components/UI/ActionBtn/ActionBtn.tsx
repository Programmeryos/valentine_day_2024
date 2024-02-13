import React from "react"

import { DmText, DmView } from "components/UI"

import styles from "./styles"
import clsx from "clsx"

interface Props {
  title: string
  onPress: () => void
  className?: string
}

const ActionBtn: React.FC<Props> = ({ title, onPress, className }) => {
  return (
    <DmView
      className={clsx("bg-pink px-[16] py-[8] rounded-xl ", className)}
      onPress={onPress}
    >
      <DmText className="text-white text-18 font-bold text-center">
        {title}
      </DmText>
    </DmView>
  )
}

export default ActionBtn
