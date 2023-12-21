export const sex = [
  { title: 'мужчина', value: 1 },
  { title: 'женщина', value: 2 },
]

export const profSpeciality = [
  { title: 'консультант', value: 1 },
  { title: 'сексолог', value: 2 },
  { title: 'коуч', value: 3 },
]

const minValue = 18
const maxValue = 99
export const age = Array.from({ length: maxValue - minValue + 1 }, (_, index) => index + minValue)
