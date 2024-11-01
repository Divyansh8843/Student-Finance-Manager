
let budget = 0;
let expenses = [];
let totalExpenses = 0;
let savingsGoal = 0;


function setBudget() {
  budget = parseFloat(document.getElementById("budget-input").value);
  if (!isNaN(budget)) {
    document.getElementById("budget-display").innerText = `Budget: $${budget}`;
    document.getElementById("budget-input").value = ""; 
  } else {
    alert("Please enter a valid budget amount.");
  }
}


function addExpense() {
  const expenseName = document.getElementById("expense-name").value;
  const expenseAmount = parseFloat(
    document.getElementById("expense-amount").value
  );

  if (expenseName && !isNaN(expenseAmount)) {
    
    expenses.push({ name: expenseName, amount: expenseAmount });
    totalExpenses += expenseAmount;

    
    document.getElementById(
      "total-expenses"
    ).innerText = `Total Expenses: $${totalExpenses}`;

    
    updateExpenseList();

   
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
  } else {
    alert("Please enter a valid expense name and amount.");
  }
}


function updateExpenseList() {
  const expenseList = document.getElementById("expense-list");
  expenseList.innerHTML = ""; 


  expenses.forEach((expense) => {
    const listItem = document.createElement("div");
    listItem.className = "expense-list-item";
    listItem.innerText = `${expense.name}: $${expense.amount}`;
    expenseList.appendChild(listItem);
  });
}


function setSavingsGoal() {
  savingsGoal = parseFloat(document.getElementById("savings-goal").value);
  if (!isNaN(savingsGoal)) {
    document.getElementById(
      "savings-progress"
    ).innerText = `Goal: $${savingsGoal}`;
    document.getElementById("savings-goal").value = ""; 
  } else {
    alert("Please enter a valid savings goal.");
  }
}
