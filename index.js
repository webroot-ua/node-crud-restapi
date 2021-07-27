import express from 'express'
import mongoose from 'mongoose'
import router from './routes/router.js'

const PORT = 5000
// const DB_URL = `mongodb+srv://user:userpass@cluster0.0fmmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const DB_URL = `mongodb+srv://user:userpass@cluster0.0fmmi.mongodb.net/nodeCrudRestapi`

const app = express()

app.use(express.json())

app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Server has been started on port ' + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()