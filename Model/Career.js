import mongoose from "mongoose";
const CareerSchema = new mongoose.Schema(
    {
        caname: {
          type: String
        },
        caemail: {
          type: String
        },
        canumber: {
          type: String
        },
        camessage: {
          type: String 
        }

    } , { timestamps: true }
    );
    
export default mongoose.model("Career", CareerSchema);