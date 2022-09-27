import { describe, expect, it } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"

import NotificationSingle from "../components/notifications/notification-single"

const notification = {
  message: "Notified!",
  isErrorMessage: false,
  persistUntilClick: false,
  id: 1
}

const errorMessage = {
  message: "Error",
  isErrorMessage: true,
  persistUntilClick: true,
  id: 2
}

describe("NotificationContainer Component", () => {

  it("the notification is visible", () => {
    render(<NotificationSingle notification={notification} />)
    const notificationMessage = screen.getByText("Notified!");
    screen.debug(notificationMessage);
    expect(screen.getByText("Notified!")).toBeInTheDocument();
  });

  test('the error stays visible', async () => {
    const { queryByText } = render(<NotificationSingle notification={errorMessage} />);

    await waitFor(() => {
      expect(queryByText("Error")).toBeInTheDocument()
    }, { timeout: 5000 })
  })
});