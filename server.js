const express = require("express");
var cors = require("cors");

const path = require("path");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
var tournsMethods = require("./models/tournsMethods");
var Tourns = require("./models/tourns");
var casinoMethods = require("./models/casinoMethods");
var Casinos = require("./models/casinos");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',express.static(path.join(__dirname, '/client/build',)))
// app.engine("html", require("ejs").renderFile);

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "./client/public"));
// app.use(express.static(path.join(__dirname, "client/build")));
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", function (req, res) {
  res.render("/client/index", {});
});
app.get("/api", (req, res, next) => {
  tournsMethods
    .getAll()
    .then((items) => {
      // res.sendFile("home", { wines: JSON.stringify(items) });
      res.send({ express: items });
    })
    .catch((err) => {
      return next(err);
    });
});
app.get("/api/casinos", (req, res, next) => {
  casinoMethods
    .getAll()
    .then((items) => {
      // res.sendFile("home", { wines: JSON.stringify(items) });
      res.send({ express: items });
    })
    .catch((err) => {
      return next(err);
    });
});
app.get("/api/get", (req, res, next) => {
  tournsMethods
    .getOne(req.query._id)
    .then((items) => {
      res.send({ express: items });
    })
    .catch((err) => {
      return next(err);
    });
});

// app.get("/api/delete", (req, res, next) => {
//   tournsMethods
//     .killOne(req.query._id)
//     .then((items) => {
//       res.send({ express: items });
//     })
//     .catch((err) => {
//       return next(err);
//     });
// });

app.post("/api/add", (req, res, next) => {
  if (!req.body._id) {
    let tourn = new Tourns({
      name: req.body.name,
      casino: req.body.casino,
      startingStack: req.body.startingStack,
      roundLength: req.body.roundLength,
      resultLength: req.body.resultLength,
      score: req.body.score,
      buyIn: req.body.buyIn,
      perDollar: req.body.perDollar,
      country: req.body.country,
      region: req.body.region,
      area: req.body.area,
      city: req.body.city,
      occurrence: req.body.occurrence,
      occurrenceExtra:req.body.occurrenceExtra,
      startTime: req.body.startTime,
      notes:req.body.notes,
      level:req.body.level,
      allBlinds:req.body.allBlinds,
      rebuy:req.body.rebuy,
      rebuyLevel:req.body.rebuyLevel,
      reentry:req.body.reentry,
      reentryLevel:req.body.reentryLevel,
      communitySubmitted:req.body.communitySubmitted,
      bounties:req.body.bounties,
      bountiesAmount:req.body.bountiesAmount,
      deductions:req.body.deductions,
      guarantee:req.body.guarantee,
      breakFreq:req.body.breakFreq,
      breakLength:req.body.breakLength,
      lateReg:req.body.lateReg,
      realMoneyStart:req.body.realMoneyStart,
      perDollarReal:req.body.perDollarReal,
      dateAdded:Date.now(),
      forDeletion:req.body.forDeletion,
      anteType:req.body.anteType,
      linkToDocument:req.body.linkToDocument,
      addOnNotes:req.body.addOnNotes,
      user:req.body.user,
      editedBy:req.body.editedBy,
      // dailyDays:req.body.dailyDays
      
    });

    tourn.save((err, newTourn) => {
      if (err) return next(err);
      return res.json({ updated: 0, _id: newTourn._id });
    });
  } else {
    Tourns.updateOne(
      { _id: req.body._id },
      {
        name: req.body.name,
        casino: req.body.casino,
        startingStack: req.body.startingStack,
        roundLength: req.body.roundLength,
        resultLength: req.body.resultLength,
        score: req.body.score,
        buyIn: req.body.buyIn,
        perDollar: req.body.perDollar,
        country: req.body.country,
        region: req.body.region,
        area: req.body.area,
        city: req.body.city,
        occurrence: req.body.occurrence,
        occurrenceExtra:req.body.occurrenceExtra,
        startTime: req.body.startTime,
        notes:req.body.notes,
        level:req.body.level,
        allBlinds:req.body.allBlinds,
        rebuy:req.body.rebuy,
        rebuyLevel:req.body.rebuyLevel,
        reentry:req.body.reentry,
        reentryLevel:req.body.reentryLevel,
        communitySubmitted:req.body.communitySubmitted,
        bounties:req.body.bounties,
        bountiesAmount:req.body.bountiesAmount,
        deductions:req.body.deductions,
        guarantee:req.body.guarantee,
        breakFreq:req.body.breakFreq,
        breakLength:req.body.breakLength,
        lateReg:req.body.lateReg,
        realMoneyStart:req.body.realMoneyStart,
        perDollarReal:req.body.perDollarReal,
        dateAdded:Date.now(),
        forDeletion:req.body.forDeletion,
        anteType:req.body.anteType,
        linkToDocument:req.body.linkToDocument,
        addOn:req.body.addOn,
        addOnType:req.body.addOnType,
        addOnAmountChips:req.body.addOnAmountChips,
        addOnAmountMoney:req.body.addOnAmountMoney,
        addOnLevel:req.body.addOnLevel,
        addOnNotes:req.body.addOnNotes,
        user:req.body.user,
        editedBy:req.body.editedBy,
        // dailyDays:req.body.dailyDays

      },
      (err, result) => {
        if (err) return next(err);
        res.json({ updated: result.nModified, _id: req.body._id });
      }
    );
  }
});
