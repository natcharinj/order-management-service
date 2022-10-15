import { DataTypes } from 'sequelize'
import Orders from './order.schema'
import OrderLines from './orderLine.schema'
import OrderStatus from './orderStatus.schema'

export default (sequelize) => ({
  Orders: Orders(sequelize, DataTypes),
  OrderLines: OrderLines(sequelize, DataTypes),
  OrderStatus: OrderStatus(sequelize, DataTypes)
})
