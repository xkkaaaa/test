<template>
  <div class="flex q-mt-lg">
    <div>
      <p>Кратность приема</p>
      <div class="flex no-wrap">
        <q-input
          placeholder="Спр. 'Кр-ть приема'"
          outlined
          v-model="store.multiplicity"
        />
        <q-btn
          @click="modal = true"
          padding="10px 5px"
          icon="list"
          class="q-ml-lg q-mr-lg"
        />
      </div>
      <q-dialog v-model="modal">
        <q-card style="width: 600px; max-width: 80vw">
          <q-card-section>
            <div class="text-h6">Кратность</div>
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
              v-model="newMultiplicity"
              style="width: 540px"
              placeholder="Добавить новую запись"
              filled
              type="text"
            >
            </q-input>
            <q-btn
              @click="store.addNewMultiplicity(newMultiplicity)"
              icon="add"
            />
          </div>
          <q-card-actions
            vertical
            align="left"
            v-for="multiplicity in store.multiplicitys"
            :key="multiplicity.id"
          >
            <div class="flex items-center no-warap">
              <span
                class="cursor-pointer"
                @click="store.choiceMulti(multiplicity.name)"
                flat
                >{{ multiplicity.name }}
              </span>
              <q-btn
                @click="store.deleteMulti(multiplicity.id)"
                flat
                icon="delete"
              />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div class="flex">
      <div style="max-width: 160px" class="q-mr-lg">
        <p>Начало приёма</p>
        <q-input v-model="store.satrtDate" filled type="date" />
      </div>

      <div style="max-width: 160px" class="q-mr-lg">
        <p>Конец приёма</p>
        <q-input v-model="store.endDate" filled type="date" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeTreatmentStore } from '@/store/HomeTreatmentStore'
import { ref } from '@vue/reactivity'

const store = useHomeTreatmentStore()
const modal = ref<boolean>(false)

const newMultiplicity = ref<string>('')
</script>

<style></style>
