// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

//import {PrismaClient} from '@prisma/client'
//const prisma = new PrismaClient()

import prisma from 'lib/prisma'

type Data = {
    id: number
    name: string
    slug: string
    user: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    const accounts = await prisma.user.findMany()
    res.status(200).json(accounts)
}
