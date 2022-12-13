import { INames } from '@/models/INames'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHemodialysisStore = defineStore('HemodialysisStore', () => {
  // active elemts
  const activeApparat = ref<string>('')
  const activeDialyzer = ref<string>('')
  const activeConcentrator = ref<string>('')
  const activeVolumeL = ref<number>()
  const acticeTypeInjection = ref<string>('')
  const activeNeedleSize = ref<string>('')
  const activeNeedleType = ref<string>('')
  const activeCatheterSize = ref<string>('')
  const activeCatheterType = ref<string>('')
  const activeBicarbonate = ref<string>('')
  const dryWeight = ref<number>()
  const activeAnti = ref<string>('')
  const activeVolumeEd = ref<number>()


  // arrays
  const apparats = [
    { name: 'HD', value: 'HD' },
    { name: 'HDF', value: 'HDF' },
    { name: 'UF', value: 'UF' },
  ]
  const dialyzers = ref<INames[]>([
    { id: 1, name: 'Диализатор 1' },
    { id: 2, name: 'Диализатор 2' },
    { id: 3, name: 'Диализатор 3' },
    { id: 4, name: 'Диализатор 4' },
  ])
  const concentrators = ref<INames[]>([
    { id: 1, name: 'Концентратор 1' },
    { id: 2, name: 'Концентратор 2' },
    { id: 3, name: 'Концентратор 3' },
  ])
  const needleSizes = ref<INames[]>([
    { id: 1, name: 'Игла размер 1' },
    { id: 2, name: 'Игла размер 2' },
    { id: 3, name: 'Игла размер 3' },
    { id: 4, name: 'Игла размер 4' },
  ])
  const needleTypes = ref<INames[]>([
    { id: 1, name: 'Венозные' },
    { id: 2, name: 'Артериальные' },
  ])
  const catheterSizes = ref<INames[]>([
    { id: 1, name: 'катетер размер 1' },
    { id: 2, name: 'катетер размер 2' },
    { id: 3, name: 'катетер размер 3' },
  ])
  const catheterTypes = ref<INames[]>([
    { id: 1, name: 'Кататер Фолея' },
    { id: 2, name: 'Кататер Малеко' },
    { id: 3, name: 'Кататер Пеццера' },
    { id: 4, name: 'Кататер Тимана' },
    { id: 5, name: 'Кататер Нелатона' },
  ])
  const bicarbonates = ref([
    { id: 1, name: 'Жидкий', value: 'Жидкий мл.' },
    { id: 2, name: 'Твердый', value: 'Твердый г.' },
  ])
  const anticoagulations = ref<INames[]>([
    { id: 1, name: 'Наименование 1' },
    { id: 3, name: 'Наименование 2' },
    { id: 2, name: 'Наименование 3' },
  ])

  // choice element
  const choiceApparat = (payload: string) => {
    activeApparat.value = payload
  }
  const choiceDialyzer = (payload: string) => {
    activeDialyzer.value = payload
  }
  const choiceConcentrator = (payload: string) => {
    activeConcentrator.value = payload
  }
  const choiceType = (payload: string) => {
    acticeTypeInjection.value = payload
  }
  const choiceNeedleSize = (payload: string) => {
    activeNeedleSize.value = payload
  }
  const choiseNeedleType = (payload: string) => {
    activeNeedleType.value = payload
  }
  const choiceCatheterSize = (payload: string) => {
    activeCatheterSize.value = payload
  }
  const choiseCatheterType = (payload: string) => {
    activeCatheterType.value = payload
  }
  const choiseBicorbanate = (payload: string) => {
    activeBicarbonate.value = payload
  }
  const choiceAnti = (payload: string) => {
    activeAnti.value = payload
  }

  // add new element
  const addNewDialyzer = (payload: string) => {
    dialyzers.value.push({
      id: Date.now(),
      name: payload,
    })
  }
  const addNewConcentrator = (payload: string) => {
    concentrators.value.push({
      id: Date.now(),
      name: payload,
    })
  }
  const addNewNeedle = (payload: string) => {
    needleSizes.value.push({
      id: Date.now(),
      name: payload,
    })
  }
  const addNewNeedleType = (payload: string) => {
    needleTypes.value.push({
      id: Date.now(),
      name: payload,
    })
  }
  const addNewCatheterSize = (payload: string) => {
    catheterSizes.value.push({
      id: Date.now(),
      name: payload,
    })
  }
  const addNewCatheterType = (payload: string) => {
    catheterTypes.value.push({
      id: Date.now(),
      name: payload,
    })
  }
  const addNewAnti = (payload: string) => {
    anticoagulations.value.push({
      id: Date.now(),
      name: payload,
    })
  }

  // delete element
  const deleteDialyzer = (id: number) => {
    const update = dialyzers.value.filter((el) => el.id !== id)
    dialyzers.value = update
  }
  const deleteCon = (id: number) => {
    const update = concentrators.value.filter((el) => el.id !== id)
    concentrators.value = update
  }
  const deleteNeedleSize = (id: number) => {
    const update = needleSizes.value.filter((el) => el.id !== id)
    needleSizes.value = update
  }
  const deleteNeedleType = (id: number) => {
    const update = needleTypes.value.filter((el) => el.id !== id)
    needleTypes.value = update
  }
  const deleteCatheterSize = (id: number) => {
    const update = catheterSizes.value.filter((el) => el.id !== id)
    catheterSizes.value = update
  }
  const deleteCathaterType = (id: number) => {
    const update = catheterTypes.value.filter((el) => el.id !== id)
    catheterTypes.value = update
  }
  const deleteAnticoagulation = (id: number) => {
    const update = anticoagulations.value.filter((el) => el.id !== id)
    anticoagulations.value = update
  }

  // search
  const serchDol = (payload: string) => {
    const update = dialyzers.value.filter((el) => el.name.includes(payload))
    dialyzers.value = update
  }
  const serchCon = (payload: string) => {
    const update = concentrators.value.filter((el) => el.name.includes(payload))
    concentrators.value = update
  }
  const serchNeedleSize = (payload: string) => {
    const update = needleSizes.value.filter((el) => el.name.includes(payload))
    needleSizes.value = update
  }
  const serchNeedleType = (payload: string) => {
    const update = needleTypes.value.filter((el) => el.name.includes(payload))
    needleTypes.value = update
  }
  const serchCatheterSize = (payload: string) => {
    const update = catheterSizes.value.filter((el) => el.name.includes(payload))
    catheterSizes.value = update
  }
  const serchCatheterType = (payload: string) => {
    const update = catheterTypes.value.filter((el) => el.name.includes(payload))
    catheterTypes.value = update
  }
  const serchAnti = (payload: string) => {
    const update = anticoagulations.value.filter((el) => el.name.includes(payload))
    anticoagulations.value = update
  }

  return {
    serchAnti,
    serchCatheterType,
    serchCatheterSize,
    serchNeedleType,
    serchNeedleSize,
    serchCon,
    serchDol,
    deleteDialyzer,
    deleteCon,
    deleteNeedleSize,
    deleteNeedleType,
    deleteCatheterSize,
    deleteCathaterType,
    deleteAnticoagulation,
    apparats,
    activeApparat,
    activeDialyzer,
    dialyzers,
    concentrators,
    activeConcentrator,
    activeVolumeL,
    acticeTypeInjection,
    activeNeedleSize,
    needleSizes,
    needleTypes,
    activeNeedleType,
    activeCatheterSize,
    catheterSizes,
    activeCatheterType,
    catheterTypes,
    activeBicarbonate,
    bicarbonates,
    dryWeight,
    activeAnti,
    anticoagulations,
    activeVolumeEd,
    choiceApparat,
    choiceDialyzer,
    addNewDialyzer,
    addNewConcentrator,
    choiceConcentrator,
    choiceType,
    addNewNeedle,
    choiceNeedleSize,
    choiseNeedleType,
    addNewNeedleType,
    addNewCatheterSize,
    choiceCatheterSize,
    addNewCatheterType,
    choiseCatheterType,
    choiseBicorbanate,
    addNewAnti,
    choiceAnti,
  }
})
