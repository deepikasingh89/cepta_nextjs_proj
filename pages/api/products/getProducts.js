import products from "../../../models/products";
import connectDb from "../../../middleware/mongoose";
//connection with db 

const handler=async(req, res) =>{
  const data = await products.find();
  res.status(200).json(data);
}

export default connectDb(handler);