exports.pageNotFoundError = (req, res) => {
    res.render("/html/error.html");
};
exports.internalServerError = (req, res, next) => {
    console.log(`Error occurred: ${error.stack}`);
    res.render("/html/error.html");
};