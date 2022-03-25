const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

router.get('/', (req, res)=>{
    const URL = 'https://api.sampleapis.com/beers/ale'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('beers', {
                title: 'Beers',
                name: 'The Beerporium!',
                data
            })
        })
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    const URL = `https://api.sampleapis.com/beers/ale/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('beerSingle', {
                title: `${data.name}`,
                name: `${data.name}`,
                data
            })
        })
})


module.exports = router