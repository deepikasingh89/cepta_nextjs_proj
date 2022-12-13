import products from "../../../models/products";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
    console.log(res.body);
  if (req.method == "POST") {
    try {
      let temp = new products({
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
      });
      const response = await temp.save();
      res.status(201).json(response);
    } catch(err) {
        res.status(400).json({message:err.message});
    }
  } else {
    res.status(400).json({ message: "Method not allwoed" });
  }
};

export default connectDb(handler);
