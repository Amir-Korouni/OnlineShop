import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "@/Reduxs/store";
import Signin from "../Pages/Signin";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

// I want to specify group test. my group test is a Login.
describe("Login", () => {
  // specify a behavor.
  it("allows user to login", async () => {
    // This fuction said, i monitoring and access to manage behavior of Login test.
    // we mock api and we want to use it. mock(without any connection with outside.)
    vi.spyOn(window, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        token: "fake-token",
        data: {
          userName: "Amir",
          email: "amir@gmail.com",
        },
      }),
    } as Response);

    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <Signin />
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>,
    );

    screen.debug();

    const emailInput = screen.getByPlaceholderText("email...");
    const passwordInput = screen.getByPlaceholderText("password...");
    const loginButton = screen.getByRole("button", {
      name: /sign in/i,
    });

    await user.type(emailInput, "amir@gmail.com");
    await user.type(passwordInput, "123456789");
    await user.click(loginButton);

    expect(localStorage.getItem("token")).toBe("fake-token");
  });
});
