const {
    Schema,
    model
  } = require("mongoose");
  
  const MySchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description:{
        type: String,
    },
    contactNo:{
        type: String
    },
    email:{
        type:String,
    },
    location:{
        type:String,
    },
    deadline:{
        type: Date,
    },
    status:{
        type:String,
        default: "Active",
    },
    interest: [{
        type:String,
    }]
  });
  
  const Job = model("job", MySchema)
  
  module.exports = Job