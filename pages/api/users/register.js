import users from "../../../models/users";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
  console.log(res.body);
  if (req.method == "POST") {
    try {
      let temp = new users({
        userid: (parseInt(Math.random()*100000000).toString()),
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
      });
      const response = await temp.save();
      res.status(201).json(response);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Method not allwoed" });
  }
};

export default connectDb(handler);
