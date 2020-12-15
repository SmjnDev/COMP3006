let db = require("./db");

async function listAllTransactions(request, response) {
    let transactions = await db.getTransactions();
    response.setHeader("content-type", "text/json");
    response.send({"Transactions": transactions});
}

async function pageListTransactions(request, response) {
    let transaction = await db.getTransactions(request.body.month, request.body.year);
    response.render("Finance", {"Transactions": transaction});
}

async function listAllUsers(request, response) {
    let users = await db.getUsers({});
    response.setHeader("content-type", "text/json");
    response.send({"Users": users});
}

module.exports.listAllTransactions = listAllTransactions;
module.exports.pageListTransactions = pageListTransactions;
module.exports.listAllUsers = listAllUsers;