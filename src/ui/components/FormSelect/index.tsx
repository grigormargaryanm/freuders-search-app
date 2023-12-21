import { FC, ReactNode } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

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
    <>
      {label && <label htmlFor='selectField'>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select {...field}>
            {placeholder && <option value=''>{placeholder}</option>}
            {children}
          </select>
        )}
      />
    </>
  )
}

export default FormSelect
