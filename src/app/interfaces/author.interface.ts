export interface Author {
    id?: number,
    name: string,
    surname: string,
    phoneNumber: string,
    email: string,
    sex?: string,
    personalNumber: string,
    birthDate: string | Date,
    country?: string,
    city?: string,
    sexId: number,
    countryId: number,
    cityId: number
}