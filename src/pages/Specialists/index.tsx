import React, { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FieldValues } from 'react-hook-form'
import { getSpecialists, getTopics } from '../../redux/specialists/hook'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { ISpecialist, ISpecialistsRequest } from '../../types/ISpecialist'
import { Button, Spinner } from '../../ui/components'
import FilterSpecialists from './components/FilterSpecialists/FilterSpecialists'
import SpecialistCard from './components/SpecialistCard/SpecialistCard'
import NotFound from './components/NotFound'
import { ButtonWrapper, PageWrapper, SpecialistWrapper } from './styles'

const PAGE_LIMIT = 12
const PAGE_OFFSET = 0
const Specialists: FC = () => {
  const dispatch = useAppDispatch()
  const { specialists, totalCount, isLoading } = useAppSelector((state) => state.specialists)
  const [filter, setFilter] = useState<ISpecialistsRequest>({} as ISpecialistsRequest)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (Object.keys(filter).length) {
      dispatch(getSpecialists({ data: filter, merged: !!filter.offset }))
    }
  }, [filter])

  useEffect(() => {
    dispatch(getTopics())
  }, [])

  useEffect(() => {
    const filterData = { limit: PAGE_LIMIT, offset: PAGE_OFFSET }
    const queryParams = searchParams
    const allParams: Record<string, string> = {}
    queryParams.forEach((value, key) => {
      allParams[key] = value
    })
    setFilter({ ...filterData, ...allParams })
  }, [])

  const handleFilterData = (data: FieldValues) => {
    const filterData = { ...filter, ...data, offset: PAGE_OFFSET }
    const nonEmptyData = Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== ''),
    )
    if (data.ratingRange) {
      const [ratingFrom, ratingTo] = data.ratingRange.split('-')
      nonEmptyData.ratingFrom = ratingFrom
      nonEmptyData.ratingTo = ratingTo
      filterData.ratingFrom = ratingFrom
      filterData.ratingTo = ratingTo
      delete nonEmptyData.ratingRange
      delete data.ratingRange
    } else {
      filterData.ratingFrom = ''
      filterData.ratingTo = ''
    }
    setSearchParams(nonEmptyData)
    setFilter({ ...filter, ...filterData, offset: PAGE_OFFSET })
  }

  const handleMoreSpecialists = () => {
    setFilter({ ...filter, offset: filter.offset + PAGE_LIMIT })
  }

  return (
    <PageWrapper>
      {Object.keys(filter).length && (
        <FilterSpecialists handleFilterData={handleFilterData} filter={filter} />
      )}
      <div style={{height:'100%'}}>
      {specialists.length ? (
        <>
          <SpecialistWrapper>
            {specialists.map((specialist: ISpecialist) => (
              <SpecialistCard key={specialist.userId} specialist={specialist} />
            ))}
            {isLoading && <Spinner />}
          </SpecialistWrapper>
          {totalCount > filter.offset + PAGE_LIMIT && (
            <ButtonWrapper>
              <Button type='button' text='Показать еще' onClick={handleMoreSpecialists} />
            </ButtonWrapper>
          )}
        </>
      ) : !isLoading ? (
        <NotFound />
      ) : null}
      </div>
    </PageWrapper>
  )
}

export default Specialists
