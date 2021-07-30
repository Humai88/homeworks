export type LoadingStateType = {
  isLoading: boolean;
};

const initState: LoadingStateType = {
  isLoading: false,
};

export const loadingReducer = (
  state = initState,
  action: ActionType
): LoadingStateType => {
  switch (action.type) {
    case "SET_LOADING": {
      return { isLoading: action.payload.loading };
    }
    default:
      return state;
  }
};

type ActionType = ReturnType<typeof loadingAC>;
export const loadingAC = (loading: boolean) => {
  return {
    type: "SET_LOADING",
    payload: {
      loading,
    },
  } as const;
};
