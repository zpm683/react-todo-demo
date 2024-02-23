import { TodoInfo } from "models.todos";

import { axiosInstance } from "shared/utils";

const URL = "/query";

const queryTodoAPI = async () => {
  return await axiosInstance.get<TodoInfo[]>(URL);
};

export { queryTodoAPI };
