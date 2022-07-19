import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Router>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
