import { atom } from 'jotai'

// DEFINED TYPE FOR NOTIFICATION
export interface Notification {
  message: string,
  isErrorMessage: boolean,
  persistUntilClick: boolean,
  id: number
}

// METHOD FOR HOW TO REMOVE A NOTIFICATION
export const removeNotification = (notifications: Notification[], id: number): Notification[] =>
  notifications.filter((notification) => notification.id !== id);

// METHOD FOR HOW TO ADD A NOTIFICATION
export const addNotification = (notifications: Notification[], message: string, isErrorMessage: boolean): Notification[] => [
  ...notifications,
  {
    id: Math.max(0, Math.max(...notifications.map(({ id }) => id))) + 1,
    message,
    persistUntilClick: isErrorMessage,
    isErrorMessage
  },
];

// ATOM FOR LIST OF NOTIFICATIONS
export const notificationsAtom = atom<Notification[]>([]);

// ATOM THAT TRIGGERS A NOTIFICATION TO BE ADDED
export const addNotificationAtom = atom(
  null,
  (get, set) => {
    set(notificationsAtom, addNotification(get(notificationsAtom), 'Notified!', false))
  });

// ATOM THAT TRIGGERS AN ERROR NOTIFICATION TO BE ADDED
export const addErrorNotificationAtom = atom(
  null,
  (get, set) => {
    set(notificationsAtom, addNotification(get(notificationsAtom), 'Error', true))
  }); 

// ATOM THAT TRIGGERS A NOTIFICATION TO BE REMOVED
export const removeNotificationAtom = atom(
  () => "",
  (get, set, id: number) => {
    set(notificationsAtom, removeNotification(get(notificationsAtom), id));
  }
);
