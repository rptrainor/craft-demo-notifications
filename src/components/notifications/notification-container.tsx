import React from 'react'
import { useAtom } from "jotai";
import { useAutoAnimate } from '@formkit/auto-animate/react'

//* STYLE IMPORTS
import styles from '../../styles/Notification.module.css'

//* COMPONENT IMPORTS
import NotificationSingle from './notification-single'

//* STATE IMPORTS
import { notificationsAtom } from '../../utils/store'

const NotificationContainer: React.FC = () => {
  // HOOK TO GET NOTIFICATIONS FROM STATE
  const [notifications] = useAtom(notificationsAtom)
  // HOOK TO GET AUTO-ANIMATE FUNCTION AND ANIMATES THE LIST OF NOTIFICATIONS
  const [animationParent] = useAutoAnimate<HTMLDivElement>()

  return (
    <div ref={animationParent} className={styles.notication_container}>
      {notifications.map((notification) => (
        <NotificationSingle notification={notification} key={notification.id?.toString()} />
      ))}
    </div>
  );
}

export default NotificationContainer