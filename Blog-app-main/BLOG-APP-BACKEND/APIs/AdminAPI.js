import exp from 'express'
import { UserTypeModel } from '../models/UserModel.js';
export const adminRoute=exp.Router()

//read all articles
//block the user
adminRoute.put("/users",async (req, res) => {

    let {author}=req.body

    // Find article and soft delete in ONE step
    const blockuser  = await UserTypeModel.findOneAndUpdate(
      { _id: author },
      { $set: { isActive: false } },
      { new: true } // return updated document
    );
    // If user not found
    if (!blockuser) {
      return res.status(400).json({ message: "user not found" });
    }
    // Send response
    res.status(200).json({message: "user blocked successfull",payload: blockuser});
  });


// or unclock user routs
adminRoute.put("/users/unblock",async (req, res) => {

    let {author}=req.body

    // Find article and soft delete in ONE step
    const blockuser  = await UserTypeModel.findOneAndUpdate(
      { _id: author },
      { $set: { isActive: true } },
      { new: true } // return updated document
    );
    // If user not found
    if (!blockuser) {
      return res.status(400).json({ message: "user not found" });
    }
    // Send response
    res.status(200).json({message: "user unblocked successfull",payload: blockuser});
  });