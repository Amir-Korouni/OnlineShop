import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import { store } from "@/Reduxs/store";
import { Provider } from "react-redux";
import Cart from "@/Pages/Cart";

describe("Cart", () => {
  it("Allows to test cart", async () => {
    vi.spyOn(window, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          items: [
            {
              id: 1,
              quantity: 1,
              product: {
                id: 1,
                name: "AirPods",
                price: 200,
              },
            },
          ],
        },
      }),
    } as Response);

    const user = userEvent.setup();

    const queryClient = new QueryClient();
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <Cart />
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>,
    );

    const increaseButton = await screen.findByRole("button", {
      name: /increase quantity/i,
    });

    await user.click(increaseButton);

    const increaseCart = screen.getByText("2");
    expect(increaseCart).toBeInTheDocument();
  });
});
