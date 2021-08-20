import axios from "axios";

type ResponseType<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
};

export const requestAPI = {
  post(success: boolean) {
    return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {
      success,
    });
  },
};
