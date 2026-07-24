import { defineMvuDataStore } from '@util/mvu';
import type { Schema } from '../../schema';

export const useDataStore = defineMvuDataStore<Schema>(
  {
    系统: {
      日期: '',
      时间段: '',
      当前场景: '',
      当前位置: '',
    },
    诗织: {
      好感度: 0,
      状态: '',
      亲密度阶段: '',
      前日睡眠质量: '',
    },
    关系: {
      同居秘密暴露度: 0,
      学校互动次数: 0,
    },
  },
  {
    type: 'message',
    message_id: getCurrentMessageId(),
  }
);
