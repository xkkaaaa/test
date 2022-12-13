<template>
  <div class="flex q-mt-lg no-wrap">
    <q-input
      placeholder="Спр. 'Катетеры'"
      outlined
      v-model="store.activeCatheterSize"
      :disable="store.acticeTypeInjection !== 'Катетер'"
    />
    <q-btn
      @click="modaCatheterSize = true"
      padding="10px 5px"
      icon="list"
      class="q-ml-lg q-mr-lg"
      :disable="store.acticeTypeInjection !== 'Катетер'"
    />
    <q-dialog v-model="modaCatheterSize">
      <q-card style="width: 600px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Размер</div>
        </q-card-section>
        <q-card-actions align="left" class="bg-white text-black">
          <q-btn
            color="white"
            text-color="black"
            label="Закрыть"
            v-close-popup
          />
        </q-card-actions>

        <div class="flex">
          <q-input
            placeholder="Поиск позиции по первым символам"
            filled
            type="search"
            v-model="serchCatheterSize"
          >
          </q-input>
          <q-btn @click="store.serchCatheterSize(serchCatheterSize)" icon="search" />
        </div>
        <div class="flex">
          <q-input
            v-model="newCatheterSize"
            placeholder="Добавить новую запись"
            filled
            type="text"
          >
          </q-input>
          <q-btn
            @click="store.addNewCatheterSize(newCatheterSize)"
            icon="add"
          />
        </div>

        <q-card-actions
          vertical
          align="left"
          v-for="catheter in store.catheterSizes"
          :key="catheter.id"
        >
          <div class="flex items-center">
            <span @click="store.choiceCatheterSize(catheter.name)" flat
              >{{ catheter.name }}
            </span>
            <q-btn @click="store.deleteCatheterSize(catheter.id)" flat icon="delete" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-input
      placeholder="Спр. 'Типы кататеров'"
      outlined
      v-model="store.activeCatheterType"
      :disable="store.acticeTypeInjection  !== 'Катетер' "
    />
    <q-btn
      @click="modaCatheterType = true"
      class="q-ml-lg"
      padding="10px 5px"
      icon="list"
      :disable="store.acticeTypeInjection  !== 'Катетер' "
    />
    <q-dialog v-model="modaCatheterType">
      <q-card style="width: 600px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Катетеры</div>
        </q-card-section>
        <q-card-actions align="left" class="bg-white text-black">
          <q-btn
            color="white"
            text-color="black"
            label="Закрыть"
            v-close-popup
          />
        </q-card-actions>

        <div class="flex">
          <q-input
            placeholder="Поиск позиции по первым символам"
            filled
            type="search"
            v-model="serchCatheterType"
          >
          </q-input>
          <q-btn @click="store.serchCatheterType(serchCatheterType)" icon="search" />
        </div>
        <div class="flex">
          <q-input
            v-model="newCatheterType"
            placeholder="Добавить новую запись"
            filled
            type="text"
          >
          </q-input>
          <q-btn
            @click="store.addNewCatheterType(newCatheterType)"
            icon="add"
          />
        </div>

        <q-card-actions
          vertical
          align="left"
          v-for="catheter in store.catheterTypes"
          :key="catheter.id"
        >
          <div class="flex items-center">
            <span @click="store.choiseCatheterType(catheter.name)" flat
              >{{ catheter.name }}
            </span>
            <q-btn @click="store.deleteCathaterType(catheter.id)" flat icon="delete" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { useHemodialysisStore } from '@/store/HemodialysisStore'
import { ref } from '@vue/reactivity'

const store = useHemodialysisStore()
const modaCatheterSize = ref<boolean>(false)
const modaCatheterType = ref<boolean>(false)
const newCatheterSize = ref<string>('')
const newCatheterType = ref<string>('')
const serchCatheterSize = ref<string>('')
const serchCatheterType = ref<string>('')
</script>

<style></style>
