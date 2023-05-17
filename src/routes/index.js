import Router from 'koa-router'
import getHealth from './health/health'
import dataset from './history/historicalRepository'

const router = new Router()

router.get('/health', getHealth)

// Question 1

router.get('/history/:ocurrence', dataset.getAllHistoricalDataFromEra)

// Question 2

router.post('/history', dataset.getAllHistoricalDataFromDescription)

// Question 3

router.get('/history/sort/:order/:limit', dataset.getAllDataByOrderWithLimit)

export default router
