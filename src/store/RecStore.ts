import { IDestination } from '@/models/IDestination'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const UseRecStore = defineStore('RecStore', () => {

  const recommendation = ref([{}])
  const destination = ref<IDestination[]>([])

  const text = ref<string>('')
  const activeDate = ref<string>('')
  const activeTime = ref<string>('')
  const activeName = ref<string>('')
  const activeProf = ref<string>('')

  const addText = (payload: string) => {
    recommendation.value.push({
      text: payload,
    })
    text.value = ''
  }
  const save = () => {
    destination.value.push({
      date: activeDate.value,
      time: activeTime.value,
      name: activeName.value,
      prof: activeProf.value,
    })

    activeDate.value = ''
    activeTime.value = ''
    activeName.value = ''
    activeProf.value = ''

    console.log(destination)
  }

  return {
    save,
    activeProf,
    activeName,
    activeTime,
    activeDate,
    text,
    addText,
    recommendation,
  }
})
