import {
  AddTodoPayload,
  AddTodoRes,
  DeleteTodoPayload,
  UpdateTodoPayload,
} from "models.todos";

import { axiosInstance } from "shared/utils";

const URL = "/mutation";

const addTodoAPI = async (payload: AddTodoPayload) => {
  return axiosInstance.post<AddTodoRes>(URL, payload);
};

const deleteTodoAPI = async (payload: DeleteTodoPayload) => {
  return axiosInstance.post<void>(URL, payload);
};

const updateTodoAPI = async (payload: UpdateTodoPayload) => {
  return axiosInstance.post<void>(URL, payload);
};

export { addTodoAPI, deleteTodoAPI, updateTodoAPI };
