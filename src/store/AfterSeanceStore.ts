import { INames } from '@/models/INames'
import { IRows } from '@/models/IRows'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAfterSeanceStore = defineStore('AfterSeanceStore', () => {
  // active element
  const activeMedProduct = ref<string>('')
  const activeReceptionPath = ref<string>('')
  const activeDosage = ref<string>('')
  const activeNumbers = ref<string[]>([])
  const activeSatrtDate = ref<string>('')
  const activeEndDate = ref<string>('')

  // choised element
  const medProduct = ref<string>('')
  const receptionPath = ref<string>('')
  const dosage = ref<string>('')
  const numbers = ref<string[]>([])
  const satrtDate = ref<string>('')
  const endDate = ref<string>('')

  // arrays
  const rows = ref<IRows[]>([])
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
  const numSeances = ref([
    { num: 1, value: '1,' },
    { num: 2, value: '2,' },
    { num: 3, value: '3,' },
    { num: 4, value: '4,' },
    { num: 5, value: '5,' },
    { num: 6, value: '6,' },
    { num: 7, value: '7,' },
  ])

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

  // searc
  const serachProd = (payload: string) => {
    const update = medProds.value.filter((el) => el.name.includes(payload))
    medProds.value = update
  }
  const serchPath = (payload: string) => {
    const update = receptionPaths.value.filter((el) => el.name.includes(payload))
    receptionPaths.value = update
  }
  const serchDosa = (payload: string) => {
    const update = dosages.value.filter((el) => el.name.includes(payload))
    dosages.value = update
  }



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
  const choiceNumSence = (payload: string) => {
    numbers.value.push(payload)
  }

  // add new element
  const addNewMedProds = (payload: string) => {
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

  ///
  const shapeAfterSeance = () => {
    activeMedProduct.value = medProduct.value
    activeReceptionPath.value = receptionPath.value
    activeDosage.value = dosage.value
    activeNumbers.value = numbers.value
    activeSatrtDate.value = satrtDate.value
    activeEndDate.value = endDate.value

    rows.value.push({
      name: activeMedProduct.value,
      dosage: activeDosage.value,
      receptionPath: activeReceptionPath.value,
      startReception: activeSatrtDate.value,
      endReception: activeEndDate.value,
      numSeance: activeNumbers.value,
      days: numbers.value.length,
    })

    medProduct.value = ''
    receptionPath.value = ''
    dosage.value = ''
    numbers.value = []
    satrtDate.value = ''
    endDate.value = ''
  }

  return {
    serachProd,
    serchPath,
    serchDosa,
    deleteMedProd,
    deleteReceptionPath,
    deleteDosa,
    rows,
    medProduct,
    medProds,
    choiceMedProd,
    addNewMedProds,
    shapeAfterSeance,
    receptionPath,
    receptionPaths,
    addNewPath,
    choicePath,
    dosage,
    dosages,
    addNewDosage,
    choiceDosage,
    numSeances,
    choiceNumSence,
    numbers,
    satrtDate,
    endDate,
  }
})
