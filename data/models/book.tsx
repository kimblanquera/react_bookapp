import ProgressDto from "./progress";

export default interface BookDto {
    id: string,
    title: string,
    authors: string[],
    images: BookImageDto,
    description?: string,
    pageCount?: number,
    publishedDate?: Date,
    categories?: string[],
    rating?: number,
    shelves?: string[],
    dateRead?: Date,
    dateAdded?: Date,
    owned?: boolean,
    progress?: ProgressDto[],
    lists?: string[]
}

export interface BookImageDto {
    smallThumbnail?: string,
    thumbnail?: string,
    small?: string,
    medium?: string,
    large?: string,
    extraLarge?: string
}