const {username,password}=process.env;
export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.y286ntl.mongodb.net/productcDB?retryWrites=true&w=majority"