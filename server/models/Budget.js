const { Schema, model } = require("mongoose");

//TODO: wait feature

const BudgetSchema = new Schema(
  {
    category: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Budget = model("Budgets", BudgetSchema);

module.exports = Budget;
