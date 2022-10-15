import express from 'express'
import { MySQL } from '../database'
import { successResponse } from '../utils'

const { Models } = MySQL
export default () => {
  const router = express.Router()

  router.post('/', async (req, res, next) => {
    try {
      const { products, userId } = req.body

      const order = await Models.Orders.createOrder({
        products,
        userId,
      })
      res.send(successResponse(order))
    } catch (error) {
      next(error)
    }
  })

  router.get('/users/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params

      const order = await Models.Orders.getOrderByUser(userId)
      res.send(successResponse(order))
    } catch (error) {
      next(error)
    }
  })

  router.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      const order = await Models.Orders.getOrderById(id)
      res.send(successResponse(order))
    } catch (error) {
      next(error)
    }
  })

  router.put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      const { orderStatus } = req.body
      const order = await Models.Orders.updateOrder({ orderStatus }, id)
      res.send(successResponse(order))
    } catch (error) {
      next(error)
    }
  })

  return router
}