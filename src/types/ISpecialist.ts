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
}
export interface ISpecialistsRequest {
  limit: number
  offset: number
}
