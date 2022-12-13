<template>
  <div class="q-mt-lg">
    <p>Номера сеансов:</p>
    <ul class="flex">
      <li class="q-mr-sm" v-for="num in store.numSeances" :key="num.value">
        <q-btn @click="store.choiceNumSence(num.value)">{{ num.num }}</q-btn>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useAfterSeanceStore } from '@/store/AfterSeanceStore'
import { ref } from '@vue/reactivity'

const store = useAfterSeanceStore()

//const btnColor = ref<string>('white')

//const handleClick = () => {
//  btnColor.value = 'primary'
//}
</script>

<style></style>
