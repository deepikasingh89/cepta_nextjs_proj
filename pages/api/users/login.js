import users from "../../../models/users";
import connectDb from "../../../middleware/mongoose";
//connection with db

// passing dynamic data for getting particular data
const handler = async (req, res) => {
    if (req.method == "POST") {
      try {
        let data = await users.findOne({email:req.body.email});
        console.log('data',data);
         if (data !== null) {
           //match password
           if (data.password === req.body.password) {
             res.status(200).json(data);
           } else {
             res.status(400).json({ message: "invalid password" });
           }
         } else {
           res.status(400).json({ message: "user not found" });
         }
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } else {
      res.status(400).json({ message: "Method not allwoed" });
    }
};


export default connectDb(handler);

//find- return an array - find lenght of array
//findone-return object - 