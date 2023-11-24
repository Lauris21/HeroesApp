import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";

describe("Pruebas en <SearchPage />", () => {
  test("Debe mostrarse correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar a Batman y el input con el valor del query", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Batman")).toBeTruthy();

    screen.debug();
  });
});
