<template>
  <div class="q-mt-xl">
    <h6>Лечение на дому</h6>
    <MedicinalProduct />
    <ReceptionPath />
    <MultiplicityReception />

    <q-btn class="q-mt-lg"
      color="white"
      text-color="black"
      label="Добавить"
      @click="store.add"
    />
    <ul class="q-mt-lg">
      <p>Лечение на дому</p>
      <li class="info" v-for="home in store.atHome" :key="home">
        <span class="q-mr-lg">{{ home.med }}</span>
        <span class="q-mr-lg">{{ home.path }}</span>
        <span class="q-mr-lg">{{ home.dosage }}</span>
        <span class="q-mr-lg">{{ home.multiplicity }}</span>
        <span class="q-mr-lg">c {{ home.start }} по {{home.end}}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useHomeTreatmentStore } from '@/store/HomeTreatmentStore'
import MedicinalProduct from './MedicinalProduct.vue'
import MultiplicityReception from './MultiplicityReception.vue'
import ReceptionPath from './ReceptionPath.vue'

const store = useHomeTreatmentStore()
</script>

<style scoded>
.info {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
