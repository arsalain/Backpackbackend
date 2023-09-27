import Contact from "../Model/Contact.js";
import Career from "../Model/Career.js";
import Partner from "../Model/Partner.js";

export const createContact = async (req, res, next) => {
  
    const ContactData = {cname:req.body.cname ,
        cemail: req.body.cemail,
        cnumber: req.body.cnumber,
        cmessage: req.body.cmessage,
    }
        try {
            const newContact = new Contact(ContactData);
            await newContact.save();
        
            res.json({
                data: newContact
            });
        } catch (err) {
            res.status(500).send('Error saving to MongoDB:', err);
        }
    } 

    export const createCareer = async (req, res, next) => {
  
        const CareerData = {caname:req.body.caname ,
            caemail: req.body.caemail,
            canumber: req.body.canumber,
            camessage: req.body.camessage,
        }
            try {
                const newCareer = new Career(CareerData);
                await newCareer.save();
            
                res.json({
                    data: newCareer
                });
            } catch (err) {
                res.status(500).send('Error saving to MongoDB:', err);
            }
        } 
        export const createPartner = async (req, res, next) => {
  
            const PartnerData = {pname:req.body.pname ,
                pemail: req.body.pemail,
                pnumber: req.body.pnumber,
                pmessage: req.body.pmessage,
            }
                try {
                    const newPartner = new Partner(PartnerData);
                    await newPartner.save();
                
                    res.json({
                        data: newPartner
                    });
                } catch (err) {
                    res.status(500).send('Error saving to MongoDB:', err);
                }
            } 