const port = 666,
  express = require("express");
layouts = require("express-ejs-layouts");
app = express();
const path = require("path");

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use("/html", express.static("./public"));
app.set("view engine", "ejs");
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const staticAppController = require("./controller/staticAppController");
const errorController = require("./controller/errorController");
app.get("/", staticAppController.Dashboard);

app.get("/investor", staticAppController.getHomeInvestor);
app.get("/tambah_investor", staticAppController.getTambahInvestor);
app.post("/tambah_investor", staticAppController.saveInvestasi);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);
app.listen(port, () => {
  console.log(`The express.js server has started and listening on port number: ${port}`);
});
