<template>
  <div class="flex q-mt-lg">
    <div style="max-width: 160px" class="q-mr-lg">
      <p>Начало приёма</p>
      <q-input v-model="store.satrtDate" filled type="date" />
    </div>

    <div style="max-width: 160px" class="q-mr-lg">
      <p>Конец приёма</p>
      <q-input v-model="store.endDate" filled type="date" />
    </div>

    <p>Количество сеансов: {{ store.numbers.length }}</p>
  </div>
</template>

<script setup lang="ts">
import { useAfterSeanceStore } from '@/store/AfterSeanceStore'
const store = useAfterSeanceStore()
</script>
