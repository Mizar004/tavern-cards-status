<script setup lang="ts">
</script>

<template>
  <div class="stat-panel">
    <div class="panel-header">
      <slot name="header" />
    </div>
    <div class="panel-body">
      <slot name="body" />
    </div>
  </div>
</template>
