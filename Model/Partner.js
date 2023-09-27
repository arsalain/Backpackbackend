import mongoose from "mongoose";
const PartnerSchema = new mongoose.Schema(
    {
        pname: {
          type: String
        },
        pemail: {
          type: String
        },
        pnumber: {
          type: String
        },
        pmessage: {
          type: String 
        }

    } , { timestamps: true }
    );
    
export default mongoose.model("Partner", PartnerSchema);