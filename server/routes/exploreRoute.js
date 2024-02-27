import express from 'express'
import { explorePopulorRepos } from '../controllers/exploreController.js'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js'


const router = express.Router()

router.get('/repos/:language', ensureAuthenticated, explorePopulorRepos)


export default router