/*/*
  Author: Selin Elmas 10/30/2025
  Final Project: JavaScript Calculator
*/

const $ = (q) => document.querySelector(q);

function fetchUserNumber() {
  // coerce to number; default to 0 if empty
  const raw = $("#num").value;
  return raw === "" ? 0 : Number(raw);
}

function makeAdditions(wish) {
  let ledger = "";
  for (let step = 1; step <= 10; step++) {
    ledger += `${step} + ${wish} = ${step + wish}\n`;
  }
  $("#addition").textContent = ledger.trim();
}

function makeSubtractions(wish) {
  let slip = "";
  let tick = 1;
  while (tick <= 10) {
    slip += `${tick} - ${wish} = ${tick - wish}\n`;
    tick++;
  }
  $("#subtraction").textContent = slip.trim();
}

function makeProducts(wish) {
  let tape = "";
  let multiplier = 1;
  do {
    tape += `${multiplier} * ${wish} = ${multiplier * wish}\n`;
    multiplier++;
  } while (multiplier <= 10);
  $("#multiplication").textContent = tape.trim();
}

function makeQuotients(wish) {
  let page = "";
  if (wish === 0) {
    $("#division").textContent = "division\nCannot divide by 0.";
    return;
  }
  for (let part = 1; part <= 10; part++) {
    const q = (part / wish).toFixed(2);
    page += `${part} / ${wish} = ${q}\n`;
  }
  $("#division").textContent = page.trim();
}


function runAll() {
  const target = fetchUserNumber();
  makeAdditions(target);
  makeSubtractions(target);
  makeProducts(target);
  makeQuotients(target);
}


document.addEventListener("DOMContentLoaded", () => {
  $("#goBtn").addEventListener("click", runAll);
});
