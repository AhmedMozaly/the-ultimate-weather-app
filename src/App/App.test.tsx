import { render, screen, fireEvent, waitFor } from "../test-utils";
import App from "./App";

describe("[Black box] App", () => {
  it("renders empty state", () => {
    render(<App />);
    const emptyState = screen.getByText(/No city is selected/i);
    expect(emptyState).toBeInTheDocument();
  });

  it("renders a list of cities", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Search the location.../i);
    fireEvent.change(input, { target: { value: "London" } });
    await waitFor(() => {
      expect(screen.getByText("London, GB")).toBeInTheDocument();
    });
  });
});
