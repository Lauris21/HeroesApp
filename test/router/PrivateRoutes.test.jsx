import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoutes } from "../../src/router/PrivateRoutes";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en <PrivateRoutes />", () => {
  test("Sino estas autenticado navegar a login", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/search"
              element={
                <PrivateRoutes>
                  <h1>Ruta Privada</h1>
                </PrivateRoutes>
              }
            />
            <Route path="/login" element={<h1>Login</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Login")).toBeTruthy();
  });

  test("Debe mostrar el children si esta autenticado", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "1234",
        name: "Laura",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <PrivateRoutes>
            <h1>Ruta privada</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
  });
});
