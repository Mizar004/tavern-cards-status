<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from './store';
import StatPanel from './components/StatPanel.vue';

const store = useDataStore();

const shioriName = computed(() => '星野诗织');

const affectionColor = computed(() => {
  const v = store.stat_data?.诗织?.好感度 ?? 0;
  if (v >= 80) return '#e91e63';
  if (v >= 60) return '#ff6b81';
  if (v >= 40) return '#ffb347';
  return '#95a5a6';
});

const stageLabel = computed(() => {
  const s = store.stat_data?.诗织?.亲密度阶段 ?? '';
  const map: Record<string, string> = {
    '同居适应期': '🏠 同居适应期',
    '界限模糊期': '🫧 界限模糊期',
    '暧昧期': '💗 暧昧期',
    '恋人': '💞 恋人',
  };
  return map[s] ?? s;
});

const stateEmoji = computed(() => {
  const s = store.stat_data?.诗织?.状态 ?? '';
  const map: Record<string, string> = {
    '正常': '☀️',
    '课堂模式': '📚',
    '醉酒': '🍺',
    '疲惫': '😴',
    '生病': '🤒',
    '害羞': '😳',
  };
  return map[s] ?? '☀️';
});

const secretLevel = computed(() => {
  const v = store.stat_data?.关系?.同居秘密暴露度 ?? 0;
  if (v >= 80) return { label: '⚠️ 即将暴露', color: '#e74c3c' };
  if (v >= 40) return { label: '🔍 有嫌疑', color: '#f39c12' };
  if (v >= 10) return { label: '🤫 微痕', color: '#95a5a6' };
  return { label: '🔒 安全', color: '#27ae60' };
});
</script>

<template>
  <div class="sb-root">
    <div class="sb-grid">
      <!-- Shiori Panel -->
      <StatPanel class="sb-main">
        <template #header>
          <div class="sb-char-row">
            <span class="sb-char-name">{{ shioriName }}</span>
            <span class="sb-char-state">{{ stateEmoji }}{{ store.stat_data?.诗织?.状态 ?? '…' }}</span>
          </div>
        </template>
        <template #body>
          <div class="sb-row">
            <span class="sb-label">好感度</span>
            <span class="sb-value" :style="{ color: affectionColor }">{{ store.stat_data?.诗织?.好感度 ?? '…' }}</span>
          </div>
          <div class="sb-row">
            <span class="sb-label">阶段</span>
            <span class="sb-value">{{ stageLabel }}</span>
          </div>
          <div class="sb-row">
            <span class="sb-label">睡眠</span>
            <span class="sb-value">{{ store.stat_data?.诗织?.前日睡眠质量 ?? '…' }}</span>
          </div>
        </template>
      </StatPanel>

      <!-- World Panel -->
      <StatPanel class="sb-side">
        <template #header>
          <div class="sb-section-label">📍 环境</div>
        </template>
        <template #body>
          <div class="sb-row">
            <span class="sb-label">日期</span>
            <span class="sb-value">{{ store.stat_data?.系统?.日期 ?? '…' }}</span>
          </div>
          <div class="sb-row">
            <span class="sb-label">时间</span>
            <span class="sb-value">{{ store.stat_data?.系统?.时间段 ?? '…' }}</span>
          </div>
          <div class="sb-row">
            <span class="sb-label">场景</span>
            <span class="sb-value">{{ store.stat_data?.系统?.当前场景 ?? '…' }}</span>
          </div>
          <div class="sb-row">
            <span class="sb-label">位置</span>
            <span class="sb-value">{{ store.stat_data?.系统?.当前位置 ?? '…' }}</span>
          </div>
          <div class="sb-divider" />
          <div class="sb-row">
            <span class="sb-label">秘密</span>
            <span class="sb-value" :style="{ color: secretLevel.color }">{{ secretLevel.label }}</span>
          </div>
          <div class="sb-row">
            <span class="sb-label">校内互动</span>
            <span class="sb-value">{{ store.stat_data?.关系?.学校互动次数 ?? 0 }}</span>
          </div>
        </template>
      </StatPanel>
    </div>
  </div>
</template>
