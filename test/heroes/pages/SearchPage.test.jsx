import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Pruebas en <SearchPage />", () => {
  beforeEach(() => jest.clearAllMocks());

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

    expect(screen.getByRole("textbox").value).toBe("batman");

    expect(screen.getByRole("img").src).toContain(
      "/assets/heroes/dc-batman.jpg"
    );
  });

  test('Debe mostrar otro componente si no se encuentra el hero "Batman123"', () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("alert")).toBeTruthy();
  });

  test("Debe llamar el navigate a la pantalla nueva", () => {
    const valueSearch = "h";
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: valueSearch } });

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${valueSearch}`);
  });
});
