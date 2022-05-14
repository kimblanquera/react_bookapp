import BookDto from "./book";

export default interface ListDto {
    id: string,
    name: string,
    description?: string,
    totalItems: number,
    dateCreated: Date,
    books: BookDto[]
}