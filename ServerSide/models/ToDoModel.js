const { model, Schema } = require("mongoose");

const todoSchema = new Schema({
    content: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now
    },
  },
  { timestamps: true }
);
module.exports = model('TodoTask',todoSchema);
