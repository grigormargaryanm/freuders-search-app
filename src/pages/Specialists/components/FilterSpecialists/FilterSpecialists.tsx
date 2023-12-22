import { FC } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from '../../../../hooks'
import { age, profSpeciality, rating, sex } from '../../../../constants/filtervalues'
import { ISpecialistsRequest } from '../../../../types/ISpecialist'
import { Button, FormSelect } from '../../../../ui/components'
import { ButtonWrapper, FieldsWrapper, AgeWrapper } from './styles'

type FilterProps = {
  handleFilterData: (data: FieldValues) => void
  filter: ISpecialistsRequest
}
const FilterSpecialists: FC<FilterProps> = ({ handleFilterData, filter }) => {
  const { topics } = useAppSelector((state) => state.specialists)
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleFilterData(data)
  }

  const { handleSubmit, control } = useForm<FieldValues>({
    defaultValues: {
      sex: filter.sex || '',
      ageFrom: filter.ageFrom || 18,
      ageTo: filter.ageTo || 99,
      profSpeciality: filter.profSpeciality || '',
      subjectId: filter.subjectId || '',
      ratingRange:
        filter?.ratingFrom && filter?.ratingTo ? `${filter?.ratingFrom}-${filter?.ratingTo}` : '',
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
        <AgeWrapper>
          <FormSelect control={control} name='ageFrom' label='В возрасте' prefix='От'>
            {renderAgeOptions}
          </FormSelect>
          <FormSelect control={control} name='ageTo' prefix='До'>
            {renderAgeOptions}
          </FormSelect>
        </AgeWrapper>
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
        <FormSelect control={control} name='ratingRange' placeholder='Любая тема' label='Тема'>
          {rating.map(({ title, value }) => (
            <option value={value} key={value}>
              {title}
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
