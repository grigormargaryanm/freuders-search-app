import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import { SexEnum } from '../../../../types/ISpecialist'

dayjs.extend(updateLocale)
dayjs.extend(relativeTime)
export function getLastActiveTime(lastActivityTime: string, sex: number) {
  const genderText = sex === SexEnum.MEN ? 'Был' : 'Была'
  dayjs.updateLocale('en', {
    relativeTime: {
      future: 'в %s',
      past: `${genderText} %s назад`,
      s: 'несколько секунд',
      m: 'минуту назад',
      mm: '%d минуты',
      h: 'час назад',
      hh: '%d часы',
      d: 'день назад',
      dd: (number: number) => {
        return `${number > 4 ? `${number} дней` : `${number} дня`} `
      },
      M: 'месяц назад',
      MM: '%d месяцы',
      y: 'год назад',
      yy: '%d годы',
    },
  })

  const pastDate = dayjs(lastActivityTime)

  return pastDate.fromNow()
}
