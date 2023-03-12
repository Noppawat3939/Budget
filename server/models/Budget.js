const { Schema, model } = require("mongoose");

//* main feature
// TODO: create income or expenses and add detail
// TODO: detail (categories , amount , timestamps , direction: income or expend, image cover)
// TODO: calculate balance and summary total (per month)

const BudgetSchema = new Schema(
  {
    categories: {
      income: {
        category: String,
        select: Boolean,
        direction: String,
        amount: String,
        detail: String,
        time: String,
        image: String,
      },
      invest: {
        category: String,
        select: Boolean,
        direction: String,
        amount: String,
        detail: String,
        time: String,
        image: String,
      },
      foodDrink: {
        category: String,
        select: Boolean,
        direction: String,
        amount: String,
        detail: String,
        time: String,
        image: String,
        cafe: {
          category: String,
          select: Boolean,
          direction: String,
          amount: String,
          detail: String,
          time: String,
          image: String,
        },
        bar: {
          category: String,
          select: Boolean,
          direction: String,
          amount: String,
          detail: String,
          time: String,
          image: String,
        },
      },
      shopping: {
        category: String,
        select: Boolean,
        direction: String,
        amount: String,
        detail: String,
        time: String,
        image: String,
      },
      transport: {
        category: String,
        select: Boolean,
        direction: String,
        amount: String,
        detail: String,
        time: String,
        image: String,
      },
    },
    calculate: {
      total: String,
      balance: String,
    },
  },
  { timestamps: true }
);

const Budget = model("Budgets", BudgetSchema);

module.exports = Budget;
