import { UserType } from "./../HW8";

type ActionsType = ActionSortType | ActionCheckType;

export type ActionSortType = {
  type: "SORT";
  payload: "up" | "down";
};

export type ActionCheckType = {
  type: "CHECK";
  payload: number;
};

export const homeWorkReducer = (
  state: UserType[],
  action: ActionsType
): UserType[] => {
  switch (action.type) {
    case "SORT": {
      if (action.payload === "up") {
        return [...state].sort((a, b) => (a.name < b.name ? -1 : 1));
      } else if (action.payload === "down") {
        return [...state].sort((a, b) => (a.name > b.name ? -1 : 1));
      }
      return state;
    }
    case "CHECK": {
      return state.filter((u) => u.age >= action.payload);
    }
    default:
      return state;
  }
};
