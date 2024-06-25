import User from "../model/userModel.js";

export const create = async(req, res)=>{
    try {
        const userData = new User(req.body);
        if (!userData) {
            return res.status(404).json({msg: "User data not found"});
        }
        const savedData = await userData.save();
        res.status(200).json({msg: "New Record add in data is successfully"})
    } catch (error) {
        res.status(500).json({error: error});        
    }
} 

export const getAll = async(req, res)=>{
    try {
        const userData = await User.find();
        if (!userData) {
            res.status(404).json({msg: "User data is not found"})
        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getone = async(req, res)=>{
    try {
        const id = req.params.id;
        const userData = await User.findById(id);
        if (!userData) {
            res.status(404).json({msg: "User data is not found"})
        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const update = async(req, res)=>{
    try {
        const id = req.params.id
        const userData = await User.findById(id);
        if (!userData) {
            res.status(404).json({msg: "User data is not found"})
        }
        const updatedata = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "User data Updated"});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const deleteuser = async(req, res)=>{
    try {
        const id = req.params.id
        const userData = await User.findById(id);
        if (!userData) {
           return res.status(404).json({msg: "User data is not found"})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "user delete successfully"});
    } catch (error) {
        res.status(500).json({error: error});
    }
}