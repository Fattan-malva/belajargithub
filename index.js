const port=666;
    express = require("express");
app = express();
app.get("/", (req, res)=>{
    console.log(`request received at:${req.url}`);
    res.send("Hello World");
});
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});
