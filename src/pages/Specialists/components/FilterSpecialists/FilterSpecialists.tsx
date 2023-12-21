import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from '../../../../hooks'
import { age, profSpeciality, sex } from '../../../../constants/filtervalues'
import { FormSelect } from '../../../../ui/components'

const Specialists = () => {
  const { topics } = useAppSelector((state) => state.specialists)
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  const { handleSubmit, control } = useForm<FieldValues>({
    defaultValues: {
      sex: '',
      ageFrom: 18,
      ageTo: 99,
    },
  })

  const renderAgeOptions = age.map((item) => (
    <option value={item} key={item}>
      {item}
    </option>
  ))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormSelect control={control} name='sex' placeholder='Любого пола' label='Я ищу психолога'>
          {sex.map(({ value, title }) => (
            <option value={value} key={value}>
              {title}
            </option>
          ))}
        </FormSelect>
        <FormSelect control={control} name='ageFrom' label='В возрасте'>
          {renderAgeOptions}
        </FormSelect>
        <FormSelect control={control} name='ageTo'>
          {renderAgeOptions}
        </FormSelect>
        <FormSelect control={control} name='topics' placeholder='Любая тема' label='Тема'>
          {topics.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </FormSelect>
        <FormSelect
          control={control}
          name='profSpeciality'
          placeholder='Все варианты'
          label='Квалификация'
        >
          {profSpeciality.map(({ value, title }) => (
            <option value={value} key={value}>
              {title}
            </option>
          ))}
        </FormSelect>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Specialists
