import React from 'react';
import { render } from "@testing-library/react"
import Header from "../src/components/Header";
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
})

test("displays the title", () => {
  const { getByText } = render(<Header />);
  getByText(/Women's World Cup Players Google Search Results/i);
});


test("Dark Mode Button", () => {
  const { getByTestId } = render(<App />);
  getByTestId("button");
});

test("toggle", () => {
  const { getByTestId } = render(<App/>);
  getByTestId("toggle");
})