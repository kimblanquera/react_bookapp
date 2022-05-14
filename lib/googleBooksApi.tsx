import BookDto from "../data/models/book";

const apiUrl: string = process.env.GOOGLE_BOOKS_API_URL;
const apiKey: string = process.env.GOOGLE_BOOKS_API_KEY;
const urlKey: string = `&key=${apiKey}`;
const searchPrefix: string = process.env.GOOGLE_BOOKS_SEARCH_PREFIX;


async function fetchAPI(url: string) {
    const headers = { 'Content-Type': 'application/json' }

    const result: Response = await fetch(url, {
        method: 'GET',
        headers
    })

    if(result) {
        const json = await result.json();

        return json;
    }
    else {
        throw new Error('Failed to fetch API');
    }
    
    

}

export async function searchBooks(query: string, startIndex: number) {
    const url: string = `${apiUrl}${searchPrefix}${query.replace(/ /g, '%20')}&startIndex=${startIndex}${urlKey}`;
    const result = await fetchAPI(url);

    const processedResults = {
        totalItems: result.totalItems,
        items: [...result?.items?.map((item) => {
            return formatResult(item);
        })]
    }
    
    return processedResults;
}

export async function getBookById(id: string) {
    const url: string = `${apiUrl}/${id}?${urlKey}`;
    const result = await fetchAPI(url);

    if(result) {
        return formatResult(result);
    }
    else {
        throw new Error('No book found for ID');
    }

    
}

export function formatResult(item) {
    const book: BookDto = {
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        images: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks : {},
        description: item.volumeInfo.description ? item.volumeInfo.description : '',
        pageCount: item.volumeInfo.pageCount ? item.volumeInfo.pageCount : 0,
        publishedDate: item.volumeInfo.publishedDate
        //categories: item.volumeInfo.categories
    }
    return book;
}