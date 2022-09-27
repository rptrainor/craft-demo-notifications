import React from 'react'
import { useAtom } from 'jotai';

//* STYLE IMPORTS
import styles from '../../styles/Notification.module.css'

//* STATE IMPORTS
import { Notification, removeNotificationAtom } from '../../utils/store';

//* CONFIG IMPORTS
const DELAY = parseInt(process.env.NOTIFICATION_RENDER_TIMING ? process.env.NOTIFICATION_RENDER_TIMING : '3500');

const NotificationSingle: React.FC<{
  notification: Notification
}> = ({ notification }) => {
  // HOOK TO REMOVE NOTIFICATION FROM STATE
  const [_, remoteNotification] = useAtom(removeNotificationAtom);

  // MEMOIZED VALUE THAT SETS MESSAGE TEXT RED IF NOTIFICATION IS AN ERROR 
  const errorMessageStyles = React.useMemo(() => {
    return notification.isErrorMessage ? styles.error_text : '';
  }, [notification.isErrorMessage]);

  // HOOK THAT REMOVES NOTIFICATION FROM STATE AFTER DELAY IF NOTIFICATION IS TO NOT PERSISTENT
  React.useEffect(() => {
    if (notification.persistUntilClick) {
      return;
    }
    const timmerRef = window.setTimeout(() => {
      remoteNotification(notification.id);
    }, DELAY);

    return () => {
      window.clearTimeout(timmerRef);
    };
  }, [notification.persistUntilClick]);

  return (
    <div className={styles.notication}>
      <svg fill='#f8b729' className={styles.notication_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
      <div className={styles.notication_body}>
        <p className={errorMessageStyles}>
          {notification.message}
        </p>
      </div>
      <button className={styles.notication_button} onClick={() => remoteNotification(notification.id)}>
        <svg fill='#C2C6CA' className={styles.notication_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>
      </button>
    </div>
  );
}

export default NotificationSingle