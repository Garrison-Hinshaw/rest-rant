const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        name: 'Bone on the Cobb',
        city: 'Kansas City',
        state: 'Missouri',
        cuisine: 'Corn related dishes with bones',
        picture: 'https://place-puppy.com/200x200'
        
    },
    {
        name: 'Backstreet Burgers',
        city: 'St. Louis',
        state: 'Missouri',
        cuisine: 'Street food',
        picture: 'https://place-puppy.com/200x200'
    }]
    res.render('./places/index', { places })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
module.exports = router

