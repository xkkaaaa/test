<template>
  <div class="flex no-wrap">
    <q-input
      placeholder="Спр. 'Иглы'"
      outlined
      v-model="store.activeNeedleSize"
      :disable="store.acticeTypeInjection !== 'Игла'"
    />
    <q-btn
      @click="modaNeedleSize = true"
      padding="10px 5px"
      icon="list"
      class="q-ml-lg q-mr-lg"
      :disable="store.acticeTypeInjection !== 'Игла'"
    />

    <q-dialog v-model="modaNeedleSize">
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
          >
          </q-input>
          <q-btn icon="search" />
        </div>
        <div class="flex">
          <q-input
            v-model="newNeedleSeze"
            placeholder="Добавить новую запись"
            filled
            type="text"
          >
          </q-input>
          <q-btn @click="store.addNewNeedle(newNeedleSeze)" icon="add" />
        </div>

        <q-card-actions
          vertical
          align="left"
          v-for="needle in store.needleSizes"
          :key="needle.id"
        >
          <div class="flex items-center">
            <span @click="store.choiceNeedleSize(needle.name)" flat
              >{{ needle.name }}
            </span>
            <q-btn
              @click="store.deleteNeedleSize(needle.id)"
              flat
              icon="delete"
            />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-input
      placeholder="Спр. 'Типы иглы'"
      outlined
      v-model="store.activeNeedleType"
      :disable="store.acticeTypeInjection !== 'Игла'"
    />
    <q-btn
      @click="modaNeedleType = true"
      class="q-ml-lg"
      padding="10px 5px"
      icon="list"
      :disable="store.acticeTypeInjection !== 'Игла'"
    />

    <q-dialog v-model="modaNeedleType">
      <q-card style="width: 600px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Иглы</div>
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
          >
          </q-input>
          <q-btn icon="search" />
        </div>
        <div class="flex">
          <q-input
            v-model="newNeedle"
            placeholder="Добавить новую запись"
            filled
            type="text"
          >
          </q-input>
          <q-btn @click="store.addNewNeedleType(newNeedle)" icon="add" />
        </div>

        <q-card-actions
          vertical
          align="left"
          v-for="needle in store.needleTypes"
          :key="needle.id"
        >
          <div class="flex items-center">
            <span @click="store.choiseNeedleType(needle.name)" flat
              >{{ needle.name }}
            </span>
            <q-btn
              @click="store.deleteNeedleType(needle.id)"
              flat
              icon="delete"
            />
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
const modaNeedleSize = ref<boolean>(false)
const modaNeedleType = ref<boolean>(false)
const newNeedleSeze = ref('')
</script>

<style></style>
