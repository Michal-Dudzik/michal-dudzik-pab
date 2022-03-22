import express from 'express'
import {Request, Response} from 'express'
import {Note} from './note'

const app = express()

// app.use(express.json())

// app.get('/', function (req: Request, res: Response) {
//   res.send('GET Hello World')
// })
// app.post('/', function (req: Request, res: Response) {
//   console.log(req.body) // e.x. req.body.title 
//   res.sendStatus(200).send('POST Hello World')
// })


const notes: Note[] = []

let note = notes.find(note => note.id ===10)
app.use(express.json())

app.get('/', function(req: Request, res: Response)
{
  const note = {title: "asd"}
  res.send(note)
})

app.post('/', function(req: Request, res: Response)
{
  res.status(200).send('asd')
})

app.listen(3000)