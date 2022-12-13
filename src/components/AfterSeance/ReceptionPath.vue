<template>
  <div class="flex q-mt-lg">
    <div>
      <p>Путь приема</p>
      <div class="flex no-wrap">
        <q-input
          placeholder="Спр. 'Приема'"
          outlined
          v-model="store.receptionPath"
        />
        <q-btn
          @click="modaPath = true"
          padding="10px 5px"
          icon="list"
          class="q-ml-lg q-mr-lg"
        />
      </div>
      <q-dialog v-model="modaPath">
        <q-card style="width: 600px; max-width: 80vw">
          <q-card-section>
            <div class="text-h6">Путь приема</div>
          </q-card-section>
          <q-card-actions align="left" class="bg-white text-black">
            <q-btn
              color="white"
              text-color="black"
              label="Закрыть"
              v-close-popup
            />
          </q-card-actions>
          <div class="flex no-wrap">
            <q-input
              style="width: 540px"
              placeholder="Поиск позиции по первым символам"
              filled
              type="search"
            >
            </q-input>
            <q-btn icon="search" />
          </div>
          <div class="flex no-wraps">
            <q-input
              style="width: 540px"
              v-model="newPath"
              placeholder="Добавить новую запись"
              filled
              type="text"
            >
            </q-input>
            <q-btn @click="store.addNewPath(newPath)" icon="add" />
          </div>
          <q-card-actions
            vertical
            align="left"
            v-for="path in store.receptionPaths"
            :key="path.id"
          >
            <div class="flex items-center">
              <span @click="store.choicePath(path.name)" flat
                >{{ path.name }}
              </span>
              <q-btn
                @click="store.deleteReceptionPath(path.id)"
                flat
                icon="delete"
              />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div>
      <p>Дозировка</p>
      <div class="flex no-wrap">
        <q-input placeholder="Спр. 'Дозы'" outlined v-model="store.dosage" />
        <q-btn
          @click="modaDosage = true"
          padding="10px 5px"
          icon="list"
          class="q-ml-lg q-mr-lg"
        />
      </div>
      <q-dialog v-model="modaDosage">
        <q-card style="width: 600px; max-width: 80vw">
          <q-card-section>
            <div class="text-h6">Дозы</div>
          </q-card-section>
          <q-card-actions align="left" class="bg-white text-black">
            <q-btn
              color="white"
              text-color="black"
              label="Закрыть"
              v-close-popup
            />
          </q-card-actions>
          <div class="flex no-wrap">
            <q-input
              style="width: 540px"
              placeholder="Поиск позиции по первым символам"
              filled
              type="search"
            >
            </q-input>
            <q-btn icon="search" />
          </div>
          <div class="flex no-wrap">
            <q-input
              v-model="newdDosage"
              style="width: 540px"
              placeholder="Добавить новую запись"
              filled
              type="text"
            >
            </q-input>
            <q-btn @click="store.addNewDosage(newdDosage)" icon="add" />
          </div>
          <q-card-actions
            vertical
            align="left"
            v-for="dosage in store.dosages"
            :key="dosage.id"
          >
            <div class="flex items-center no-warap">
              <span
                class="cursor-pointer"
                @click="store.choiceDosage(dosage.name)"
                flat
                >{{ dosage.name }}
              </span>
              <q-btn @click="store.deleteDosa(dosage.id)" flat icon="delete" />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAfterSeanceStore } from '@/store/AfterSeanceStore'
import { ref } from '@vue/reactivity'

const store = useAfterSeanceStore()
const modaPath = ref<boolean>(false)
const modaDosage = ref<boolean>(false)
const newPath = ref<string>('')
const newdDosage = ref<string>('')
</script>

<style></style>
