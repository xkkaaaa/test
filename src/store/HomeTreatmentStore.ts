import { IHome } from '@/models/IHome'
import { INames } from '@/models/INames'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeTreatmentStore = defineStore('HomeTreatmentStore', () => {
  // active element
  const activeMedProduct = ref<string>('')
  const activeReceptionPath = ref<string>('')
  const activeDosage = ref<string>('')
  const activeMulti = ref<string>('')
  const activeSatrtDate = ref<string>('')
  const activeEndDate = ref<string>('')

  // choised element
  const medProduct = ref<string>('')
  const receptionPath = ref<string>('')
  const dosage = ref<string>('')
  const multiplicity = ref<string>('')
  const satrtDate = ref<string>('')
  const endDate = ref<string>('')

  // arrays
  const medProds = ref<INames[]>([
    { id: 1, name: 'Лекарственный препарат No1' },
    { id: 2, name: 'Лекарственный препарат No2' },
    { id: 3, name: 'Лекарственный препарат No3' },
    { id: 4, name: 'Лекарственный препарат No4' },
  ])
  const receptionPaths = ref<INames[]>([
    { id: 1, name: 'Перорально' },
    { id: 2, name: 'Подкожно' },
    { id: 3, name: 'Апрериально' },
  ])
  const dosages = ref<INames[]>([
    { id: 1, name: '20 мг' },
    { id: 2, name: '10 мл' },
    { id: 3, name: '30 мкг' },
  ])
  const multiplicitys = ref<INames[]>([
    { id: 1, name: '1 раза в день' },
    { id: 2, name: '2 раза в день' },
    { id: 3, name: '3 раза в день' },
  ])

  // choice func element
  const choiceMedProd = (payload: string) => {
    medProduct.value = payload
  }
  const choicePath = (payload: string) => {
    receptionPath.value = payload
  }
  const choiceDosage = (payload: string) => {
    dosage.value = payload
  }
  const choiceMulti = (payload: string) => {
    multiplicity.value = payload
  }

  // add new element
  const addNewMedProd = (payload: string) => {
    medProds.value.push({
      id: Date.now(),
      name: payload,
    })
  }
  const addNewPath = (payload: string) => {
    receptionPaths.value.push({
      id: Date.now(),
      name: payload,
    })
  }
  const addNewDosage = (payload: string) => {
    dosages.value.push({
      id: Date.now(),
      name: payload,
    })
  }
  const addNewMultiplicity = (payload: string) => {
    multiplicitys.value.push({
      id: Date.now(),
      name: payload,
    })
  }

  // delete element
  const deleteMedProd = (id: number) => {
    const update = medProds.value.filter((el) => el.id !== id)
    medProds.value = update
  }
  const deleteReceptionPath = (id: number) => {
    const update = receptionPaths.value.filter((el) => el.id !== id)
    receptionPaths.value = update
  }
  const deleteDosa = (id: number) => {
    const update = dosages.value.filter((el) => el.id !== id)
    dosages.value = update
  }
  const deleteMulti = (id: number) => {
    const update = multiplicitys.value.filter((el) => el.id !== id)
    multiplicitys.value = update
  }

  // add
  const atHome = ref<IHome[]>([])
  const add = () => {
    activeMedProduct.value = medProduct.value
    activeReceptionPath.value = receptionPath.value
    activeDosage.value = dosage.value
    activeMulti.value = multiplicity.value
    activeSatrtDate.value = satrtDate.value
    activeEndDate.value = endDate.value

    atHome.value.push({
      med: activeMedProduct.value,
      path: activeReceptionPath.value,
      dosage: activeDosage.value,
      multiplicity: activeMulti.value,
      end: activeEndDate.value,
      start: activeSatrtDate.value,
    })

    medProduct.value = ''
    receptionPath.value = ''
    dosage.value = ''
    multiplicity.value = ''
    endDate.value = ''
    satrtDate.value = ''
  }

  return {
    satrtDate,
    endDate,
    deleteMulti,
    choiceMulti,
    atHome,
    addNewMultiplicity,
    multiplicity,
    choiceDosage,
    choicePath,
    dosage,
    receptionPath,
    addNewPath,
    addNewDosage,
    medProduct,
    medProds,
    choiceMedProd,
    addNewMedProd,
    deleteMedProd,
    deleteReceptionPath,
    deleteDosa,
    receptionPaths,
    dosages,
    multiplicitys,
    add,
  }
})
