import { FC } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from '../../../../hooks'
import { age, profSpeciality, sex } from '../../../../constants/filtervalues'
import { Button, FormSelect } from '../../../../ui/components'
import { ButtonWrapper, FieldsWrapper } from './styles'

type FilterProps = {
  handleFilterData: (data: FieldValues) => void
}
const FilterSpecialists: FC<FilterProps> = ({ handleFilterData }) => {
  const { topics } = useAppSelector((state) => state.specialists)
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleFilterData(data)
  }

  const { handleSubmit, control } = useForm<FieldValues>({
    defaultValues: {
      sex: '',
      ageFrom: 18,
      ageTo: 99,
      profSpeciality: '',
      subjectId: '',
    },
  })

  const renderAgeOptions = age.map((item) => (
      <option value={item} key={item}>
        {item}
      </option>
  ))

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldsWrapper>
          <FormSelect control={control} name='sex' placeholder='Любого пола' label='Я ищу психолога'>
            {sex.map(({ value, title }) => (
                <option value={value} key={value}>
                  {title}
                </option>
            ))}
          </FormSelect>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
            <FormSelect control={control} name='ageFrom' label='В возрасте'>
              {renderAgeOptions}
            </FormSelect>
            <FormSelect control={control} name='ageTo'>
              {renderAgeOptions}
            </FormSelect>
          </div>
          <FormSelect control={control} name='subjectId' placeholder='Любая тема' label='Тема'>
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
          <FormSelect control={control} name='subjectId' placeholder='Любая тема' label='Тема'>
            {topics.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name}
                </option>
            ))}
          </FormSelect>
          <ButtonWrapper>
            <Button type='submit' text='Показать анкеты' />
          </ButtonWrapper>
        </FieldsWrapper>
      </form>
  )
}

export default FilterSpecialists
