<template>
  <div class="q-mt-lg">
    <p>Лекарственные препараты</p>
    <div class="flex no-wrap">
      <q-input
        outlined
        style="width: 350px"
        placeholder="Спр. 'Препараты'"
        v-model="store.medProduct"
      />
      <q-btn
        @click="modalMedProd = true"
        padding="10px 5px"
        icon="list"
        class="q-ml-lg"
      />
      <q-dialog v-model="modalMedProd">
        <q-card style="width: 750px; max-width: 80vw">
          <q-card-section>
            <div class="text-h6">Лекарственные препараты</div>
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
              style="width: 670px"
              placeholder="Поиск позиции по первым символам"
              filled
              type="search"
              v-model="serachProd"
            >
            </q-input>
            <q-btn @click="store.serachProd(serachProd)" icon="search" />
          </div>
          <div class="flex no-wrap">
            <q-input
              style="width: 670px"
              v-model="newMedProd"
              placeholder="Добавить новую запись"
              filled
              type="text"
            >
            </q-input>
            <q-btn @click="store.addNewMedProd(newMedProd)" icon="add" />
          </div>

          <q-card-actions
            vertical
            align="left"
            v-for="medProd in store.medProds"
            :key="medProd.id"
          >
            <div class="flex">
              <div class="flex items-center no-wrap">
                <span @click="store.choiceMedProd(medProd.name)" flat
                  >{{ medProd.name }}
                </span>
                <q-btn
                  @click="store.deleteMedProd(medProd.id)"
                  flat
                  icon="delete"
                />
              </div>
              <div
                v-for="dosage in store.dosages"
                :key="dosage.id"
                class="flex items-center no-warap"
              >
                <span @click="store.choiceDosage(dosage.name)" flat
                  >{{ dosage.name }} /
                </span>
              </div>
              <div
                v-for="path in store.receptionPaths"
                :key="path.id"
                class="flex items-center q-ml-sm"
              >
                <span @click="store.choicePath(path.name)" flat
                  >{{ path.name }} /
                </span>
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeTreatmentStore } from '@/store/HomeTreatmentStore'
import { ref } from '@vue/reactivity'

const store = useHomeTreatmentStore()

const modalMedProd = ref<boolean>(false)
const newMedProd = ref<string>('')
const serachProd = ref<string>('')
</script>

<style></style>
