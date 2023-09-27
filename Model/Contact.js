import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema(
    {
        cname: {
          type: String
        },
        cemail: {
          type: String
        },
        cnumber: {
          type: String
        },
        cmessage: {
          type: String 
        }

    } , { timestamps: true }
    );
    
export default mongoose.model("Contact", ContactSchema);