const express = require('express')

const app = express()

app.use(express.json())

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
]

app.get('/', (req, res)=>{const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
]

const authors = [
    { id: 1, name: 'Author 1', bio: 'Bio 1' },
    { id: 2, name: 'Author 2', bio: 'Bio 2' },
    { id: 3, name: 'Author 3', bio: 'Bio 3' }
]

app.get('/', (req, res)=>{
  res.send('Hello World')
})

app.get('/api/books', (req, res)=>{
    res.send(books)
})

app.get('/api/authors', (req, res)=>{
    res.send(authors)
})

app.get('/api/authors/:id', (req, res)=>{
    const author = authors.find(a => a.id === parseInt(req.params.id))
    if (!author) return res.status(404).send('Author not found')
    res.send(author)
})

app.post('/api/authors', (req, res)=>{
    const newAuthor = {
        id: authors.length + 1,
        name: req.body.name,
        bio: req.body.bio
    }
    authors.push(newAuthor)
    res.send(authors)
})

app.put('/api/authors/:id', (req, res)=>{
    const author = authors.find(a => a.id === parseInt(req.params.id))
    if (!author) return res.status(404).send('Author not found')

    author.name = req.body.name || author.name
    author.bio = req.body.bio || author.bio

    res.send(authors)
})

app.delete('/api/authors/:id', (req, res)=>{
    const authorIndex = authors.findIndex(a => a.id === parseInt(req.params.id))
    if (authorIndex === -1) return res.status(404).send('Author not found')

    authors.splice(authorIndex, 1)
    res.send(authors)
})

app.listen(8080, ()=>{
    console.log('Server is running on port 8080')
})
  res.send('Hello World')
})

app.get('/api/books', (req, res)=>{
    res.send(books)
  })


  app.get('/api/books/:id', (req, res)=>{
    const book = books.find(b => b.id === parseInt(req.params.id))
    if(!book) return res.status(404).send('Aucun livre trouvé avec cet ID')
    res.send(book)
  })

  // ajouter un livre
  app.post('/api/books', (req, res)=>{
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    }

    books.push(newBook)
    res.send(books)
  })

  // modifier le livre

  app.get('/api/books/:id', (req, res)=>{
    const book = books.find(b => b.id === req.params.id)
    if(!book) return res.status(404).send('Livre non trouvé')
        book.title = req.body.title || book.title
        book.author = req.body.author || book.author

        res.send(books)
  })


app.listen(8080, ()=>{
    console.log('server connecté sur le port 8080');
    
})