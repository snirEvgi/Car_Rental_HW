// const express = require("express")
import express, { Request, Response, NextFunction } from "express"
import { carsRouter, rentRouter } from "./routes.index"
import { pool } from "./database"
import cors from "cors"
const port = 4100
const app = express();
app.use(express.json())
app.use(cors())
app.get("/health-check", function (req, res, next) {
    res.send(`API IS OK ${new Date().toISOString()}`)
})


app.use("/rentals", rentRouter)
app.use("/cars", carsRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send("Something went wrong")
})

app.listen(port, () => {
   console.log({ message: `Api is running on Port ${port}` })
})
