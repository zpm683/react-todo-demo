declare module "models.todos" {
  interface TodoInfo {
    id: string;
    content: string;
    state: "todo" | "done" | "deleted";
  }
}
