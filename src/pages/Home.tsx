// delete this line and implement the "notify" funciton any way you like
const notify = window.alert;

export default function Home() {
  return (
    <div className="space-y-4">
      <p>
        This button should trigger a notification with the text
        &ldquo;Notified!&rdquo; which disappears in 5 seconds. Repeated presses
        produce more notifications!
      </p>
      <p>
        <button onClick={() => notify('Notified!')}>Notify</button>
      </p>
      <p>
        And <em>this</em> should trigger an error notificaiton with
        the text &ldquo;Error&rdquo;that the user has to dismiss.
      </p>
      <p>
        <button onClick={() => notify('Error')}>Trigger Error</button>
      </p>
    </div>
  );
}
