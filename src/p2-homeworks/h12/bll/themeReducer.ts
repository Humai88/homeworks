const initState: ThemeStateType = {
  value: "dark",
};
export type ThemeStateType = {
  value: string;
};
export const themeReducer = (
  state = initState,
  action: ActionType
): ThemeStateType => {
  switch (action.type) {
    case "SET_THEME": {
      return {
        value: action.payload.value,
      };
    }
    default:
      return state;
  }
};

type ActionType = ReturnType<typeof changeThemeAC>;
export const changeThemeAC = (value: string) => {
  return {
    type: "SET_THEME",
    payload: {
      value,
    },
  } as const;
};
