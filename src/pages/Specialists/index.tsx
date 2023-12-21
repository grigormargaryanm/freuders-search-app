import React, { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FieldValues } from 'react-hook-form'
import { getSpecialists, getTopics } from '../../redux/specialists/hook'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { ISpecialist } from '../../types/ISpecialist'
import { Button } from '../../ui/components'
import FilterSpecialists from './components/FilterSpecialists/FilterSpecialists'
import SpecialistCard from './components/SpecialistCard/SpecialistCard'
import NotFound from './components/NotFound'
import { ButtonWrapper, PageWrapper, SpecialistWrapper } from './styles'

const PAGE_LIMIT = 12
const PAGE_OFFSET = 0
const Specialists: FC = () => {
  const dispatch = useAppDispatch()
  const { specialists, totalCount } = useAppSelector((state) => state.specialists)
  const [filter, setFilter] = useState({ limit: PAGE_LIMIT, offset: PAGE_OFFSET })
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    dispatch(getSpecialists({ data: filter, merged: !!filter.offset }))
  }, [filter])

  useEffect(() => {
    dispatch(getTopics())
  }, [])

  useEffect(() => {
    const queryParams = searchParams
    const allParams: Record<string, string> = {}
    queryParams.forEach((value, key) => {
      allParams[key] = value
    })
    if (Object.keys(allParams).length) {
      setFilter({ ...filter, ...allParams })
    }
  }, [])

  const handleFilterData = (data: FieldValues) => {
    const nonEmptyData = Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== ''),
    )
    setSearchParams(nonEmptyData)
    setFilter({ ...filter, ...data, offset: PAGE_OFFSET })
  }

  const handleMoreSpecialists = () => {
    setFilter({ ...filter, offset: filter.offset + PAGE_LIMIT })
  }

  return (
    <PageWrapper>
      <FilterSpecialists handleFilterData={handleFilterData} />
      {specialists ? (
        <>
          <SpecialistWrapper>
            {specialists.map((specialist: ISpecialist) => (
              <SpecialistCard key={specialist.userId} specialist={specialist} />
            ))}
          </SpecialistWrapper>
          {totalCount > filter.offset && totalCount > PAGE_LIMIT && (
            <ButtonWrapper>
              <Button type='button' text='Показать еще' onClick={handleMoreSpecialists} />
            </ButtonWrapper>
          )}
        </>
      ) : (
        <NotFound />
      )}
    </PageWrapper>
  )
}

export default Specialists
