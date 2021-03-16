import express from "express"
import dotenv from "dotenv"
import ingredients from "./data/ingr.js"

dotenv.config()

const app = express()

app.get("/", (req, res) => {
  res.send("API is running")
})

app.get("/api/ingredients", (req, res) => {
  res.json(ingredients)
})

app.get("/api/ingredients/:id", (req, res) => {
  const ingredient = ingredients[req.params.id]
  res.json(ingredient)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
