import React from "react";
import { render, screen } from "@testing-library/react";
import KPICard from "../widgets/KPICard";

test("renders KPI card with correct props", () => {
  render(<KPICard title="Revenue" value="$10,000" growth="+5%" />);
  expect(screen.getByText(/Revenue/i)).toBeInTheDocument();
  expect(screen.getByText(/\$10,000/i)).toBeInTheDocument();
  expect(screen.getByText(/\+5%/i)).toBeInTheDocument();
});
