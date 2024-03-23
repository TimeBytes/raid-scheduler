const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// Character Schema
const characterSchema = new Schema({
  characterId: { type: String, required: true },
  ign: { type: String, required: true },
});

// RaidParty Schema
const raidPartySchema = new Schema({
  raidPartyId: { type: String, required: true },
  partyName: { type: String, required: true },
  size: { type: Number, required: true },
  pendingMembers: [{ type: Schema.Types.ObjectId, ref: "Pending" }],
  partyMembers: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  availability: [
    {
      characterId: {
        type: Schema.Types.ObjectId,
        ref: "Character",
        required: true,
      },
      dayOfWeek: {
        type: String,
        enum: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        required: true,
      },
      startTime: { type: String, required: true },
      endTime: { type: String, required: true },
    },
  ],
});

// Pending Schema
const pendingSchema = new Schema({
  characterId: {
    type: Schema.Types.ObjectId,
    ref: "Character",
    required: true,
  },
  status: { type: String, required: true },
});

// User Schema
const userSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: require("mongoose").Types.ObjectId,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Must use a valid email address",
      ],
    },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
    raidParties: [{ type: Schema.Types.ObjectId, ref: "RaidParty" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Pre-save hook to hash password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// User Model
const User = model("User", userSchema);
const Character = model("Character", characterSchema);
const RaidParty = model("RaidParty", raidPartySchema);
const Pending = model("Pending", pendingSchema);

module.exports = { User, Character, RaidParty, Pending };
