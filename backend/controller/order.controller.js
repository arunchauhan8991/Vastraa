import Order from "../model/order.model.js"
import User from "../model/user.model.js";




export const placeOrder = async (req, res) => {
    try {
      const { items, amount, address } = req.body;
      const userId = req.userId;
      const orderData = {
        items,
        amount,
        userId,
        address,
        paymentMethod: "COD",
        payment: false,
        date: Date.now(),
      };

      const newOrder = new Order(orderData);
      await newOrder.save();

      await User.findByIdAndUpdate(userId, { cartData: {} }); //cart updated  now empty

      return res.status(201).json({ message: "Order Place" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Order Place error" });
    }
}

export const userOrders = async (req, res) => {
  try {
    const userId = req.userId;
    const orders = await Order.find({ userId });
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "userOrders error" });
  }
};