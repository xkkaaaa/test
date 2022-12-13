<template>
  <h6>Сеанс гемодиализа</h6>
  <h6 class="q-mt-lg">Назначения сеанса гемодиализа</h6>
  <p class="q-mt-md">Программа аппарата</p>
  <ul class="flex">
    <li class="q-mr-lg" v-for="item in store.apparats" :key="item.value">
      <q-btn @click="store.choiceApparat(item.value)">
        {{ item.name }}
      </q-btn>
    </li>
  </ul>

  <Dialyzer />
  <Concentrator />
  <TypeInjection />
  <Bicarbonate />

  <q-btn
    style="width: 200px"
    class="q-mt-lg"
    color="white"
    text-color="black"
    label="Сформировать cеанс"
    @click="seance = true"
  />

  <q-card v-show="seance" class="my-card q-mt-lg">
    <q-card-section class="text-bold">
      <p>Назначения сеанса гемодиализа</p>
      <q-icon name="computer" />
      <span class="q-mr-xl">{{ store.activeApparat }}</span>
      <span class="q-mr-xl">{{ store.activeDialyzer }}</span>
      <span class="q-mr-xl"> {{ store.activeConcentrator }}</span>
      <span class="q-mr-xl"> {{ store.activeVolumeL }} л.</span>
      <span class="q-mr-xl"> {{ store.acticeTypeInjection }}</span>
      <span class="q-mr-xl"> {{ store.activeNeedleSize }}</span>
      <span class="q-mr-xl"> {{ store.activeNeedleType }}</span>
      <span class="q-mr-xl"> {{ store.activeCatheterSize }}</span>
      <span class="q-mr-xl"> {{ store.activeCatheterType }}</span>
      <span class="q-mr-xl"> {{ store.activeBicarbonate }}</span>
      <span class="q-mr-xl"> {{ store.dryWeight }} кг.</span>
      <span class="q-mr-xl"> {{ store.activeAnti }}</span>
      <span class="q-mr-xl"> {{ store.activeVolumeEd }} ед.</span>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useHemodialysisStore } from '@/store/HemodialysisStore'
import { ref } from 'vue'
import Dialyzer from './Dialyzer.vue'
import Concentrator from './Concentrator.vue'
import TypeInjection from './TypeInjection.vue'
import Bicarbonate from './Bicarbonate.vue'

const store = useHemodialysisStore()
const seance = ref<boolean>(false)
</script>

<style scoped lang="scss">
button {
  width: 100px;
}

.active {
  background-color: green;
}
</style>
