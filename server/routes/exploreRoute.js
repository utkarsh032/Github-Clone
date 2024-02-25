import express from 'express'
import { explorePopulorRepos } from '../controllers/exploreController.js'
const router = express.Router()

router.get('/repos/:language', explorePopulorRepos)


export default router