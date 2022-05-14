import { NextApiRequest, NextApiResponse } from "next";
import { getBookById } from "../../../../lib/googleBooksApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id: string = req.query.id.toString();
    if(id?.length) {
        const result = await getBookById(id);
        if(result) {
            return res.status(200).json(result);
        }
        else {
            return res.status(500);
        }
    }
}