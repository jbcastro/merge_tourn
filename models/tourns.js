var mongoose = require("mongoose");
var connec = require("./connection");

var conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));

var connectionString = connec.connectionString2;
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

var mySchema = mongoose.Schema(
  {
    name: { type: String },
    casino: { type: String },
    startingStack: { type: Number },
    roundLength: { type: Number },
    resultLength: { type: Number },
    score: { type: String },
    buyIn: { type: Number },
    perDollar: { type: Number },
    country: { type: String },
    region: { type: String },
    area: { type: String },
    city: { type: String },
    occurrence: { type: String },
    occurrenceExtra: { type: Object||String },
    startTime: { type: String },
    notes:{type:String},
    level:{type:Number},
    allBlinds:{type:Object},
    rebuy:{type:Boolean},
    rebuyLevel:{type:Number},
    reentry:{type:Boolean},
    reentryLevel:{type:Number},
    communitySubmitted:{type:Boolean},
    bounties:{type:Boolean},
    bountiesAmount:{type:String},
    deductions:{type:Number},
    guarantee:{type:Number},
    breakFreq:{type:String},
    breakLength:{type:String},
    lateReg:{type:String},
    realMoneyStart:{type:Number},
    perDollarReal:{type:Number},
    dateAdded:{type:Date},
    forDeletion:{type:Boolean},
    anteType:{type:String},
    linkToDocument:{type:String},
    addOn:{type:Boolean},
    addOnType:{type:String},
    addOnAmountChips:{type:Number},
    addOnAmountMoney:{type:Number},
    addOnLevel:{type:Number},
    addOnNotes:{type:String},
    user:{type:String},
    editedBy:{type:String},
    dailyDays:{type:String}
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("tournamentdemos", mySchema);
// var Episodes = mongoose.model('Tourns', mySchema);
// Episodes.findOne({name: 'laura'}, (err,episodes)=> {
//   if (err) throw err;
// console.log(episodes);
// });
