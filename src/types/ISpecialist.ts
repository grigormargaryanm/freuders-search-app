export interface ISpecialist {
  userId: string
  name: string
  sex: number
  age: number
  birthDate: string
  photoUrl: string
  avatarId: string
  level: number
  rating: number
  hasVideo: boolean
  defaultSubjectName: string
  subjectsCount: number
  isFavorite: boolean
  onlineStatus: number
  lastActivityTime: string
}

export interface ISpecialistsResponse {
  items: ISpecialist[]
  totalCount: number
  merged: boolean
}

type Level = 0 | 1
type SexAndSpeciality = 1 | 2
export interface ISpecialistsRequest {
  limit: number
  offset: number
  level?: Level
  sex?: SexAndSpeciality
  subjectId?: string
  profSpeciality?: SexAndSpeciality
  isCertified?: boolean
  ratingFrom?: string
  ratingTo?: string
  ageFrom?: number
  ageTo?: number
}

export enum OnlineStatuses {
  OFFLINE = 1,
  ONLINE = 2,
}

export enum SexEnum {
  MEN = 1,
  WOMEN = 2,
}
