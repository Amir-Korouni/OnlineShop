import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Signin from "../Pages/Signin";

describe("Login", () => {
  it("allows user to login", async () => {
    const user = userEvent.setup();

    render(<Signin />);

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    await user.type(emailInput, "amir@gmail.com");

    await user.type(passwordInput, "123456789");

    await user.click(screen.getByRole("button", { name: "/signin/i" }));

    expect(?);
  });
});
