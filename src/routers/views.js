 

const express = require('express')
const router = express.Router()

const viewsController = require('../app/controllers/SiteControllers')


router.get('/:slug', viewsController.show)
router.get('/', viewsController.index) 

module.exports = router;


