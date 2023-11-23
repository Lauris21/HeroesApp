import { authReducer } from "../../../src/auth/context/authReducer";

describe("Pruebas en authReducer", () => {
  const initialState = {
    logged: false,
    user: {
      id: "123",
      name: "",
    },
  };
  test("Debe retornar el estado inicial", () => {
    const newState = authReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test("Debe el login autenticar y establecer el user", () => {
    const user = {
      id: "123",
      name: "Laura",
    };

    const action = {
      type: "[Auth] Login",
      payload: user,
    };

    const newState = authReducer(initialState, action);

    expect(newState.logged).toBeTruthy();
    expect(newState.user).toEqual(user);
  });

  test("Debe el logout borrar el name del usuario y logged en false", () => {
    const action = {
      type: "[Auth] Logout",
    };

    const newState = authReducer(initialState, action);

    expect(newState.logged).toBeFalsy();
  });
});
