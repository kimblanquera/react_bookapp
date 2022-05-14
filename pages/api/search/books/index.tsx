import { NextApiRequest, NextApiResponse } from "next";
import { searchBooks } from "../../../../lib/googleBooksApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const query: string = req.body.query;
    const pageIndex: number = parseInt(req.body.pageIndex);
    const result = await searchBooks(query, pageIndex);
    if(result) {
        return res.status(200).json(result);
    }
    else {
        return res.status(500);
    }
    
}