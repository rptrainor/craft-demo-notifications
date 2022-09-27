import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import NotificationContainer from "../components/notifications/notification-container"

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => ({}),
    removeListener: () => ({}),
    addEventListener: () => ({}),
    removeEventListener: () => ({}),
    dispatchEvent: () => ({}),
  }),
});

describe("NotificationContainer Component", () => {

  it("notification list should be present", () => {
    render(<NotificationContainer />)
    const notificationContainer = screen.getByTestId('notification-list');

    screen.debug(notificationContainer);

    expect(screen.getByTestId('notification-list')).toBeInTheDocument();

  });
});