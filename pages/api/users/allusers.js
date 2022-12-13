import users from "../../../models/users";
import connectDb from "../../../middleware/mongoose";
//connection with db

const handler = async (req, res) => {
  const data = await users.find();
  res.status(200).json(data);
};

export default connectDb(handler);
