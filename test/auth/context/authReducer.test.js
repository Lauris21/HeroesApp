import { authReducer, types } from "../../../src/auth";

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
      type: types.login,
      payload: user,
    };

    const newState = authReducer(initialState, action);

    expect(newState.logged).toBeTruthy();
    expect(newState.user).toEqual(user);
  });

  test("Debe el logout borrar el name del usuario y logged en false", () => {
    const state = {
      logged: true,
      user: {
        id: "123",
        name: "Laura",
      },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState.logged).toBeFalsy();

    expect(newState.user).toBeUndefined();
  });
});
