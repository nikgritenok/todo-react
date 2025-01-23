import React, { useState } from "react"
import styles from "./taskActions.module.scss"
import { ShareButton } from "../Buttons/shareButton/shareButton"
import { EditButton } from "../Buttons/editButton/editButton"
import { InfoButton } from "../Buttons/infoButton/infoButton"
import { TaskProps } from "../../features/tasks/taskTypes"
import { EditTaskModal } from "../modals/editTaskModal/editTaskModal"
import { ShareModal } from "../modals/shareModal/shareModal"

export const TaskActions: React.FC<TaskProps> = ({ task }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  const openEditModal = () => setIsEditModalOpen(true)
  const closeEditModal = () => setIsEditModalOpen(false)

  const openShareModal = () => setIsShareModalOpen(true)
  const closeShareModal = () => setIsShareModalOpen(false)

  return (
    <div className={styles["task-actions"]}>
      <div className={styles["block-buttons"]}>
        <ShareButton onClick={openShareModal} />
        <InfoButton task={task} />
        <EditButton onClick={openEditModal} />
      </div>

      {isShareModalOpen && (
        <ShareModal isOpen={isShareModalOpen} onClose={closeShareModal} />
      )}
      {isEditModalOpen && (
        <EditTaskModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          task={task}
        />
      )}
    </div>
  )
}
