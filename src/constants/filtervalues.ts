export const sex = [
  { title: 'мужчина', value: 1 },
  { title: 'женщина', value: 2 },
]

export const profSpeciality = [
  { title: 'консультант', value: 1 },
  { title: 'сексолог', value: 2 },
  { title: 'коуч', value: 3 },
]

export const rating = [
  { title: 'новые', value: '0-40' },
  { title: 'от 100 до 80', value: '80-100' },
  { title: 'от 79 до 60', value: '79-60' },
  { title: 'от 59 до 40', value: '40-59' },
]

const minValue = 18
const maxValue = 99
export const age = Array.from({ length: maxValue - minValue + 1 }, (_, index) => index + minValue)
