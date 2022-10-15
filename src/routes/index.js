import express from "express"
import OrderRoute from "./orders.route"
export default () => {
  const router = express.Router()
  router.use("/orders", OrderRoute())
  return router
}