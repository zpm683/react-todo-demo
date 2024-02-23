declare module "models.todos" {
  type State = "TODO" | "DOING" | "DONE";

  interface TodoInfo {
    id: string;
    value: string;
    state: State;
  }

  interface AddTodoPayload {
    value: string;
  }

  interface AddTodoRes {
    id: string;
  }

  interface DeleteTodoPayload {
    id: string;
  }

  interface UpdateTodoPayload {
    id: string;
    state: State;
  }
}
