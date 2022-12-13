<template>
  <div class="flex items-center no-wrap">
    <div class="q-mt-lg ">
      <p>Концентратор</p>
      <div class="flex no-wrap">
        <q-input
          outlined
          placeholder="Спр. Концентраторы"
          v-model="store.activeConcentrator"
        />
        <q-btn
          @click="modalConcentrators = true"
          padding="10px 5px"
          icon="list"
          class="q-ml-lg"
        />

        <q-dialog v-model="modalConcentrators">
          <q-card style="width: 600px; max-width: 80vw">
            <q-card-section>
              <div class="text-h6">Спр. Концентратор</div>
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
                v-model="serchCon"
              >
              </q-input>
              <q-btn @click="store.serchCon(serchCon)" icon="search" />
            </div>
            <div class="flex">
              <q-input
                v-model="newConcentrator"
                placeholder="Добавить новую запись"
                filled
                type="text"
              >
              </q-input>
              <q-btn
                @click="store.addNewConcentrator(newConcentrator)"
                icon="add"
              />
            </div>

            <q-card-actions
              vertical
              align="left"
              v-for="concentrator in store.concentrators"
              :key="concentrator.id"
            >
              <div class="flex items-center">
                <span @click="store.choiceConcentrator(concentrator.name)" flat
                  >{{ concentrator.name }}
                </span>
                <q-btn @click="store.deleteCon(concentrator.id)" flat icon="delete" />
              </div>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
    <div class="q-mt-lg q-ml-xl">
      <p>Объем л.</p>
      <q-input
        type="number"
        outlined
        v-model="store.activeVolumeL"
        style="max-width: 90px"
        suffix= ' л.'
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHemodialysisStore } from '@/store/HemodialysisStore'
import { ref } from 'vue'

const store = useHemodialysisStore()
const newConcentrator = ref<string>('')
const modalConcentrators = ref<boolean>(false)
</script>

<style scoped>
input {
  margin-top: 20px;
  width: 55px;
  height: 55px;
}
</style>
