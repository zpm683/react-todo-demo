import type { ButtonType } from "antd/es/button";
import { State } from "models.todos";

const MAIN_TITLE = "TODO - LIST";

// TodoItem中按钮的配色方案
const BUTTON_TYPE: Record<State, ButtonType> = {
  TODO: "default",
  DOING: "primary",
  DONE: "dashed",
};

export { MAIN_TITLE, BUTTON_TYPE };
