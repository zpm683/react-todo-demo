// 导入必要的模块
import z from "zod";

import { STATE } from "../constant/state.constant.mjs";

// 定义待办事项模式
const Schema = z.object({
  id: z.string().nullish(), // ID 可以为空
  value: z.string().nullish(), // 值可以为空
  state: z.enum(Object.keys(STATE)).nullish(), // 状态可以为空，并且必须是 STATE 常量中的一个值
});

// 验证待办事项的有效性
const validateMutationPayload = (payload) => {
  // 使用模式验证有效性
  const validationResult = Schema.safeParse(payload);

  // 返回验证结果
  return validationResult.success;
};

// 导出验证函数
export { validateMutationPayload };
