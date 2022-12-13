import products from "../../../../models/products";
import connectDb from "../../../../middleware/mongoose";

// passing dynamic data for getting particular data
const handler = async (req, res) => {
    const {id} = req.query;
    console.log('id',id);
    const data = await products.findOne({id:id});
    res.status(200).json(data);
};


export default connectDb(handler);