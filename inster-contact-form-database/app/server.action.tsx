'use server'

import { db } from "./db";

export const contactAction = async (formData: FormData) => {
    const { firstName, lastName, email, message} = Object.fromEntries(formData.entries());

    await db.execute(`insert into contact (first_name, last_name, email, message) values (?, ?, ?, ?)`, [firstName, lastName, email, message])
}