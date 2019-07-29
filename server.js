const express     = require('express')
const graphqlHTTP = require('express-graphql')
const schema      = require('./schema')

const path = require('path')

const app = express()
// allow cross-origin

if (process.env.NODE_ENV !== 'production') {
  const cors = require('cors')
  app.use(cors())
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))