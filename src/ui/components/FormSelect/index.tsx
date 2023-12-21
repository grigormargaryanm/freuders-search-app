import { FC, ReactNode } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { Label, Select, SelectWrapper } from './styles'

/* eslint-disable  @typescript-eslint/no-explicit-any */
type SelectPropsType = {
  control: Control<FieldValues, any>
  name: string
  label?: string
  placeholder?: string
  children: ReactNode
}
const FormSelect: FC<SelectPropsType> = ({ control, name, label, placeholder = '', children }) => {
  return (
    <SelectWrapper>
      {label && <Label htmlFor='selectField'>{label}</Label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field}>
            {placeholder && <option value=''>{placeholder}</option>}
            {children}
          </Select>
        )}
      />
    </SelectWrapper>
  )
}

export default FormSelect
