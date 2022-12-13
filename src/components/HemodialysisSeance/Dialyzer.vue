<template>
  <div class="q-mt-lg">
    <p>Долизатор</p>
    <div class="flex no-wrap">
      <q-input
        class="dolizator"
        outlined
        placeholder="Спр. Диализаторы"
        v-model="store.activeDialyzer"
      />
      <q-btn
        @click="modalDialyzers = true"
        padding="10px 5px"
        icon="list"
        class="q-ml-lg"
      />
      <q-dialog v-model="modalDialyzers">
        <q-card style="width: 600px; max-width: 80vw">
          <q-card-section>
            <div class="text-h6">Спр. Диализаторы</div>
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
              v-model="newDialyzer"
              placeholder="Добавить новую запись"
              filled
              type="text"
            >
            </q-input>
            <q-btn @click="store.addNewDialyzer(newDialyzer)" icon="add" />
          </div>
          <q-card-actions
            vertical
            align="left"
            v-for="dialyzer in store.dialyzers"
            :key="dialyzer.id"
          >
            <div class="flex items-center">
              <span @click="store.choiceDialyzer(dialyzer.name)" flat
                >{{ dialyzer.name }}
              </span>
              <q-btn
                @click="store.deleteDialyzer(dialyzer.id)"
                flat
                icon="delete"
              />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHemodialysisStore } from '@/store/HemodialysisStore'
import { ref } from 'vue'

const store = useHemodialysisStore()
const newDialyzer = ref<string>('')
const modalDialyzers = ref<boolean>(false)
</script>

<style></style>
