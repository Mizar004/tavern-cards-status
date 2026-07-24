export const Schema = z.object({
  系统: z.object({
    日期: z.string(),
    时间段: z.string(),
    当前场景: z.string(),
    当前位置: z.string(),
  }),
  诗织: z.object({
    好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
    状态: z.string(),
    亲密度阶段: z.enum(['同居适应期', '界限模糊期', '暧昧期', '恋人']),
    前日睡眠质量: z.enum(['良好', '一般', '差']),
  }),
  关系: z.object({
    同居秘密暴露度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
    学校互动次数: z.coerce.number().transform(v => _.clamp(v, 0, 20)),
  }),
});

export type Schema = z.output<typeof Schema>;
