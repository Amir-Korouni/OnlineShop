import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "@/Reduxs/store";
import Products from "../Pages/Products";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

describe("Product", () => {
  it("allows to test Product", async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <Products />
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>,
    );

    const titleProduct = await screen.findByText("Sony WH-1001XM5");
    expect(titleProduct).toBeInTheDocument();
  });
});
