const { model, Schema } = require("mongoose");

const todoSchema = new mongoose.Schema({
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
module.exports = mongoose.model('TodoTask',todoSchema);