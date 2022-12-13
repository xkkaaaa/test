<template>
  <div class="q-mt-xl">
    <h6>Рекомендации</h6>
    <div class="flex no-wrap q-mt-sm">
      <q-input
        v-model="store.text"
        outlined
        style="width: 570px"
        placeholder="Текст рекомендации пациенту"
      />
      <q-btn @click="store.addText(store.text)" icon="add" class="q-ml-lg" />
    </div>

    <div class="q-mt-sm">
      <q-scroll-area class="scroll" style="height: 200px; max-width: 650px">
        <div v-for="rec in store.recommendation" :key="rec" class="q-py-xs">
          {{ rec.text }}
        </div>
      </q-scroll-area>
    </div>

    <div class="flex">
      <q-input v-model="store.activeDate" type="date" class="q-mr-sm" />
      <q-input v-model="store.activeTime" type="time" class="q-mr-sm"/>
      <q-input v-model="store.activeName" type="text" placeholder="ФИО лечащего врача" />
      <q-input v-model="store.activeProf" type="text" placeholder="Должность" />

    </div>

     <q-btn class="q-mt-lg"
      color="white"
      text-color="black"
      label="Сохранить назначения"
      @click="store.save"
    />

  </div>
</template>

<script setup lang="ts">
import { UseRecStore } from '@/store/RecStore'


const store = UseRecStore()
</script>

<style scoped>
.scroll {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
