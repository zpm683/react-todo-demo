import { TodoInfo } from "models.todos";

import { createImmerStore } from "shared/utils";

type GlobalStore = {
  name: string;
  token: string;
  todos: TodoInfo[];
  setName: (name: string) => void;
  setToken: (token: string) => void;
  setTodos: (todos: TodoInfo[]) => void;
};

const useGlobalStore = createImmerStore<GlobalStore>((set) => ({
  name: "小张",
  token: "666666",
  todos: [],

  setName: (name) =>
    set((s) => {
      s.name = name;
    }),

  setToken: (token) =>
    set((s) => {
      s.token = token;
    }),

  setTodos: (todos) =>
    set((s) => {
      s.todos = todos;
    }),
}));

export { useGlobalStore };
export type { GlobalStore };
