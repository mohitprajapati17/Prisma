import 'dotenv/config'
import { PrismaClient } from './generated/prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter });

async function addUser() {
    await prisma.user.create({
        data: {
            name: "John Doe",
            email: "[EMAIL_ADDRESS",
            password: "password123",
        },
    })
    console.log("User added successfully");
}

addUser();
