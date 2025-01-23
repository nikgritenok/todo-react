import React from "react"
import icon_share from "../../../assets/icon/icon_share.svg"
import styles from "./shareButton.module.scss"

interface ShareButtonProps {
  onClick: () => void
}

export const ShareButton: React.FC<ShareButtonProps> = ({ onClick }) => {
  return (
    <button className={styles["share_button"]} onClick={onClick}>
      <img src={icon_share} alt="share" />
    </button>
  )
}
