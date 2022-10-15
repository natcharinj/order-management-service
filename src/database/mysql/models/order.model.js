import { Schemas } from "../setup";
import { formatDate, toPlain } from "../../../utils";
export const formatOrderLine = (order) => {
    return {
        id: order.id,
        productId: order.productId,
        name: order.name,
        price: order.price,
        quantity: order.quantity
    }
}
export const formatOrder = (_order) => {
    const order = toPlain(_order)
    return {
        id: order.id,
        totalAmount: order.totalAmount,
        orders: order.orders?.map(o => formatOrderLine(o)),
        status: order.order_status?.name,
        createdAt: formatDate(order.createdAt),
        updatedAt: formatDate(order.updatedAt),
    }
}

export const getOrderById = async (id) => {
    const orders = await Schemas.Orders.findOne({ where: { id }, include: [{ model: Schemas.OrderLines, as: 'orders' }, Schemas.OrderStatus] })
    return orders ? formatOrder(orders) : null
}
export const createOrder = async ({ products = [], userId = 0 }) => {

    let totalAmount = products.reduce((prev, curr) => prev += (curr.price * curr.quantity), 0)

    const orderCreated = await Schemas.Orders.create({
        userId,
        totalAmount,
        orderStatus: 1
    })

    let orderLines = products.map(p => Schemas.OrderLines.create({
        orderId: orderCreated.id,
        productId: p.id,
        name: p.name,
        price: p.price,
        quantity: p.quantity
    }))

    await Promise.all(orderLines)

    const order = await getOrderById(orderCreated.id)
    return order
}
export const getOrderByUser = async (userId) => {
    const orders = await Schemas.Orders.findAll({ where: { userId }, include: [{ model: Schemas.OrderLines, as: 'orders' }, Schemas.OrderStatus] })
    return orders?.map(o => formatOrder(o))
}



export const updateOrder = async (option = {}, id) => {
    await Schemas.Orders.update({ ...option }, { where: { id } })
    const order = await getOrderById(id)
    return order
}