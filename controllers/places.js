const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        name: 'Bone on the Cobb',
        city: 'Kansas City',
        state: 'Missouri',
        cuisine: 'Corn related dishes with bones',
        picture: 'https://place-puppy.com/300x300'
    },
    {
        name: 'Backstreet Burgers',
        city: 'St. Louis',
        state: 'Missouri',
        cuisine: 'Street food',
        picture: 'https://place-puppy.com/300x300'
    }]
    res.render('./places/index', { places })
})

module.exports = router

