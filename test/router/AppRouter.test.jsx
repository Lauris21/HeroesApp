import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router";

describe("Pruebas en <AppRoute/>", () => {
  test("Debe mostrar el login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("Debe mostrar <Search/> si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "123",
        name: "Laura",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Search").length).toBeGreaterThanOrEqual(1);
  });
});
