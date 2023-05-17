import { db } from "../database/database.js"
import dayjs from "dayjs"

export async function getRentals(req, res) {
    try {

        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function createRental(req, res) {

    try {
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function finishRental(req, res) {

    try {
        res.sendStatus(200)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteRental(req, res) {

    try {
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
} 