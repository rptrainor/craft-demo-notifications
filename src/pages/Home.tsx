import { useAtom } from 'jotai';

import { addNotificationAtom, addErrorNotificationAtom } from '../utils/store'

export default function Home() {
  // HOOK THAT TRIGGERS A NOTIFICATION TO BE ADDED
  const [_, addNotification] = useAtom(addNotificationAtom);
  // HOOK THAT TRIGGERS AN ERROR NOTIFICATION TO BE ADDED
  const [__, addErrorNotification] = useAtom(addErrorNotificationAtom);

  return (
    <div className="space-y-4">
      <p>
        This button should trigger a notification with the text
        &ldquo;Notified!&rdquo; which disappears in 5 seconds. Repeated presses
        produce more notifications!
      </p>
      <p>
        <button onClick={() => addNotification()}>Notify</button>
      </p>
      <p>
        And <em>this</em> should trigger an error notificaiton with
        the text &ldquo;Error&rdquo;that the user has to dismiss.
      </p>
      <p>
        <button onClick={() => addErrorNotification()}>Trigger Error</button>
      </p>
    </div>
  );
}
