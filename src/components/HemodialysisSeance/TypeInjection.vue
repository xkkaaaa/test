<template>
  <div class="q-mt-lg">
    <p>Тип инъекции</p>
    <div class="q-pa-md">
      <q-btn-toggle
        @click="store.chooseType(option.value)"
        v-model="store.acticeTypeInjection"
        toggle-color="green"
        :options="[
          { label: 'Игла', value: 'Игла' },
          { label: 'Катетер', value: 'Катетер' },
        ]"
      />
    </div>
  </div>
  <Needles />
  <Catheter />
</template>

<script setup lang="ts">
import { useHemodialysisStore } from '@/store/HemodialysisStore'
import { ref } from '@vue/reactivity'
import Needles from './Needles.vue'
import Catheter from './Catheter.vue'

const store = useHemodialysisStore()
</script>

<style></style>
