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
export interface ISpecialistsRequest {
  limit: number
  offset: number
  level?: number
  sex?: number
  subjectId?: number
  profSpeciality?: number
  isCertified?: boolean
  ratingFrom?: number
  ratingTo?: number
  ageFrom?: number
  ageTo?: number
  filterType?: number
}

export enum OnlineStatuses {
  OFFLINE = 1,
  ONLINE = 2,
}

export enum SexEnum {
  MEN = 1,
  WOMEN = 2,
}
