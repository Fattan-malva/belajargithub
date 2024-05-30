exports.Dashboard = (req, res) => {
    res.render("index");
  };

  const investasis = [];
  exports.getHomeInvestor = (req, res) => {
      res.render("investor", { myInvestasi: investasis });
  };
  exports.getTambahInvestor = (req, res) => {
      res.render("tambah_investor");
  };
  exports.saveInvestasi = (req, res) => {
      investasis.push(req.body);
      res.render("investor", { myInvestasi: investasis });
  };
  