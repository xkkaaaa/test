<template>
  <div class="q-mt-xl">
    <h6>Назначения после сеанса</h6>
    <MedicinalProduct />
    <ReceptionPath/>
    <NumberSeances />
    <StartEndReception />

    <q-btn
      class="q-mt-lg"
      color="white"
      text-color="black"
      label="Сформировать"
      @click="store.shapeAfterSeance"
    />
    <q-table
    class="q-mt-xl"
      title="Список назначений после сеансов"
      :rows="store.rows"
      :columns="columns"
      row-key="name"
      :separator="separator"
      hide-bottom
    />
  </div>
</template>

<script setup lang="ts">
import { useAfterSeanceStore } from '@/store/AfterSeanceStore'
import { ref } from '@vue/reactivity'
import StartEndReception from './StartEndReception.vue'
import MedicinalProduct from './MedicinalProduct.vue'
import NumberSeances from './NumberSeances.vue'
import ReceptionPath from './ReceptionPath.vue'
const separator = ref('vertical')
const store = useAfterSeanceStore()

const columns = ref([
  {
    name: 'name',
    field: 'name',
    label: 'Лекарственный препарат',
    align: 'left',
  },
  {
    name: 'receptionPath',
    field: 'receptionPath',
    align: 'center',
    label: 'Путь приема',
  },
  { name: 'dosage', field: 'dosage', label: 'Дозировка' },
  { name: 'startReception', field: 'startReception', label: 'Начало приема' },
  { name: 'endReception', field: 'endReception', label: 'Конец приема' },
  { name: 'numSeance', field: 'numSeance', label: 'Номер сеанса' },
  { name: 'days', field: 'days', label: 'Дней' },
])
</script>

<style></style>
