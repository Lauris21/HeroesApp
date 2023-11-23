import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "../../../src/ui/components/NavBar";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <NavBar />", () => {
  const contextValue = {
    logged: true,
    user: {
      id: "123",
      name: "Laura",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("Debe mostrar el nombre del user loggeado", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <NavBar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  test("Debe llamar al logout y al navigate cuando se hace click en el botón", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <NavBar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
