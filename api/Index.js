const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require('./routes/Auth');
const userRoute = require('./routes/Users');
const postRoute = require('./routes/Posts');
const categoryRoute = require('./routes/Categories');
const multer = require("multer");
const path = require("path");
const cors = require("cors")

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")))

const port = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null,"images");
    },
    filename:(req,file,cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
})

app.use("/api/Auth", authRoute);
app.use("/api/Users", userRoute);
app.use("/api/Posts", postRoute);
app.use("/api/Categories", categoryRoute);

app.listen(port, ()=>{
    console.log("Backend is running.")
})