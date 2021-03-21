var Tourns = require("../models/tourns.js");
const { getOne } = require("./casinoMethods.js");

exports.getAll = () => {
  return Tourns.find({}, (err, result) => {
    if (err) {
      return err;
    }

    // console.log(result);

    return result;
  });
};

exports.getOne = (tourns1) => {
  return Tourns.findOne({ _id: tourns1 }, (err, result) => {
    if (err) {
      return err;
    }
    console.log(result);
    return result;
  });
};


exports.addOne = (
  casino1,
  name1,
  startingStack1,
  roundLength1,
  resultLength1,
  score1,
  buyIn1,
  perDollar1,
  country1,
  region1,
  area1,
  city1,
  occurrence1,
  occurrenceExtra1,
  startTime1,
  notes1,
  level1,
  allBlinds1,
  rebuy1,
  rebuyLevel1,
  reentry1,
  reentryLevel1,
  communitySubmitted1,
  bounties1,
  bountiesAmount1,
  deductions1,
  guarantee1,
  breakFreq1,
  breakLength1,
  lateReg1,
  realMoneyStart1,
  perDollarReal1,
  dateAdded1,
  forDeletion1,
  anteType1,
  linkToDocument1,
  addOn1,
  addOnType1,
  addOnAmountChips1,
  addOnAmountMoney1,
  addOnLevel1,
  addOnNotes1,
  user1,
  editedBy1,
  dailyDays1
) => {
  return Tourns.create(
    {
      casino: casino1,
      name: name1,
      startingStack: startingStack1,
      roundLength: roundLength1,
      resultLength: resultLength1,
      score: score1,
      buyIn: buyIn1,
      perDollar: perDollar1,
      country: country1,
      region: region1,
      area: area1,
      city: city1,
      occurrence: occurrence1,
      occurrenceExtra: occurrenceExtra1,
      startTime: startTime1,
      notes:notes1,
      level:level1,
      allBlinds:allBlinds1,
      rebuy:rebuy1,
      rebuyLevel:rebuyLevel1,
      reentry:reentry1,
      reentryLevel:reentryLevel1,
      communitySubmitted:communitySubmitted1,
      bounties:bounties1,
      bountiesAmount:bountiesAmount1,
      deductions:deductions1,
      guarantee:guarantee1,
      breakFreq:breakFreq1,
      breakLength:breakLength1,
      lateReg:lateReg1,
      realMoneyStart:realMoneyStart1,
      perDollarReal:perDollarReal1,
      dateAdded:dateAdded1,
      forDeletion:forDeletion1,
      anteType:anteType1,
      linkToDocument:linkToDocument1,
      addOn:addOn1,
      addOnType:addOnType1,
      addOnAmountChips:addOnAmountChips1,
      addOnAmountMoney:addOnAmountMoney1,
      addOnLevel:addOnLevel1,
      addOnNotes:addOnNotes1,
      user:user1,
      editedBy:editedBy1,
      dailyDays:dailyDays1

    },
    (err, result) => {
      if (err) throw err;
      return result;
    }
  );
};

exports.killOne = (tourns1) => {
  return Tourns.findOne({ _id: tourns1 }, (err, result) => {
    if (err) throw err;

    result.remove(function (err) {
      if (err) throw err;
      //console.log(tourns1);
    });
  });
};
