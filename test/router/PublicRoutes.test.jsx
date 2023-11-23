import { render, screen } from "@testing-library/react";
import { PublicRoutes } from "../../src/router/PublicRoutes";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en <PublicRoutes />", () => {
  test("Debe mostrar el children sino esta autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoutes>
          <h1>Ruta Pública</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta Pública")).toBeTruthy();
  });

  test("Debe navegar si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "123",
        name: "Laura",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoutes>
                  <h1>Ruta Pública</h1>
                </PublicRoutes>
              }
            />
            <Route path="/search" element={<h1>Página Search</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Página Search")).toBeTruthy();
  });
});
