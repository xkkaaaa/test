<template>
  <div class="flex q-mt-lg q-mr-xl">
    <div class="q-mr-lg">
      <p>Бикарбонат</p>
      <div class="flex no-wrap">
        <q-input
          placeholder="XXX гр/мл"
          outlined
          v-model="store.activeBicarbonate"
        />
        <q-btn
          @click="modaBicarbonate = true"
          padding="10px 5px"
          icon="list"
          class="q-ml-lg"
        />
      </div>
      <q-dialog v-model="modaBicarbonate">
        <q-card style="width: 600px; max-width: 80vw">
          <q-card-section>
            <div class="text-h6">Бикарбонат</div>
          </q-card-section>
          <q-card-actions align="left" class="bg-white text-black">
            <q-btn
              color="white"
              text-color="black"
              label="Закрыть"
              v-close-popup
            />
          </q-card-actions>

          <q-card-actions
            vertical
            align="left"
            v-for="bicarbonate in store.bicarbonates"
            :key="bicarbonate.name"
          >
            <div class="flex items-center">
              <span @click="store.choiseBicorbanate(bicarbonate.value)" flat
                >{{ bicarbonate.name }}
              </span>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div class="q-mr-xl">
      <p>Сухой Вес пациента</p>
      <q-input
        style="max-width: 90px"
        suffix=" кг."
        placeholder="XXX кг."
        outlined
        v-model="store.dryWeight"
        type="number"
      />
    </div>

    <div>
      <p>Антикоагуляция</p>
      <div class="flex no-wrap">
        <q-input
          placeholder="Наименование"
          outlined
          v-model="store.activeAnti"
        />
        <q-btn
          @click="modalAnti = true"
          padding="10px 5px"
          icon="list"
          class="q-ml-lg q-mr-lg"
        />
        <q-dialog v-model="modalAnti">
          <q-card style="width: 600px; max-width: 80vw">
            <q-card-section>
              <div class="text-h6">Антикоагуляция</div>
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
                v-model="newAnti"
                placeholder="Добавить новую запись"
                filled
                type="text"
              >
              </q-input>
              <q-btn @click="store.addNewAnti(newAnti)" icon="add" />
            </div>

            <q-card-actions
              vertical
              align="left"
              v-for="anticoagulation in store.anticoagulations"
              :key="anticoagulation.id"
            >
              <div class="flex items-center">
                <span @click="store.choiceAnti(anticoagulation.name)" flat
                  >{{ anticoagulation.name }}
                </span>
                <q-btn
                  @click="store.deleteAnticoagulation(anticoagulation.id)"
                  flat
                  icon="delete"
                />
              </div>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>

    <div>
      <p>Объем</p>
      <q-input
        style="max-width: 90px"
        suffix=" ед."
        placeholder="XXX ед."
        outlined
        v-model="store.activeVolumeEd"
        type="number"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHemodialysisStore } from '@/store/HemodialysisStore'
import { ref } from '@vue/reactivity'

const store = useHemodialysisStore()
const modaBicarbonate = ref<boolean>(false)
const modalAnti = ref<boolean>(false)
const newAnti = ref<string>('')
</script>

<style></style>
