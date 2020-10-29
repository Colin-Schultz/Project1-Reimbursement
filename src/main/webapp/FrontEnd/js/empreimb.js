
async function asyncFetch(url, expression){
  const response = await fetch(url);
  const json = await response.json();
  expression(json);
}




function renderPendingTable(reimbs) {
  console.log("Rendering Pending Table");
  console.log(reimbs);
  for (const reimb of reimbs) {
    const tr = document.createElement("tr");
    const idTD = document.createElement("td");
    const amountTD = document.createElement("td");
    const submittedTD = document.createElement("td");
    const descriptionTD = document.createElement("td");
    const typeTD = document.createElement("td");
    idTD.innerText = reimb.reimbID;
    amountTD.innerText = reimb.reimbAmount;
    reimb.submitted = new Date(reimb.submitted);
    reimb.submitted.toDateString()

    submittedTD.innerText = reimb.submitted;
    descriptionTD.innerText = reimb.description;
    typeTD.innerText = reimb.typeID;
    tr.append(idTD, amountTD, submittedTD, descriptionTD, typeTD);

    document.getElementById("pendingReimbursements").append(tr);
  }
}

function renderResolvedTable(reimbs) {
  console.log("Rendering Resolved Table");
  console.log(reimbs);
  for (const reimb of reimbs) {
    const tr = document.createElement("tr");
    const idTD = document.createElement("td");
    const amountTD = document.createElement("td");
    const submittedTD = document.createElement("td");
    const resolvedTD = document.createElement("td");
    const descriptionTD = document.createElement("td");
    const typeTD = document.createElement("td");
    const statusTD = document.createElement("td");
    const resolverTD = document.createElement("td");

    idTD.innerText = reimb.reimbID;
    amountTD.innerText = reimb.reimbAmount;
    reimb.submitted = new Date(reimb.submitted);
    reimb.submitted.toDateString()
    reimb.resolved = new Date(reimb.resolved);
    reimb.resolved.toDateString()

    submittedTD.innerText = reimb.submitted;
    resolvedTD.innerText = reimb.resolved;
    descriptionTD.innerText = reimb.description;
    if(reimb.statusTD == 2){
      statusTD.innerText = "Approved";
    }
    else{
      statusTD.innerText = "Denied";
    }
    resolverTD.innerText = reimb.resolverID;
    typeTD.innerText = reimb.typeID;
    tr.append(idTD, amountTD, submittedTD, resolvedTD, descriptionTD, typeTD, statusTD, resolverTD);

    document.getElementById("resolvedReimbursements").append(tr);
  }
}


asyncFetch("http://localhost:8080/Reimbursement/userPending.json", renderPendingTable);
asyncFetch("http://localhost:8080/Reimbursement/userResolved.json", renderResolvedTable);


 