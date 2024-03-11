// Provided data for Type I and Type II drills
const type1Drills = [
  "Pick your Type I",

  " Kneeling Throws P6",
  " Skips P6",
  " Squatted Throws P5.5-6",
  " Walking Line Throw P 3-4-5-6",
  " Drop In Step Down- P2.5-3-4-5-6",
  " HINGE-OPEN STEP THROW P1-6",
  " WIND-UP 1 - P1-6",
  " FULL THROW- Putting It Together P1-6",
  " Walking Skips P6",
  " Kneeling Throw. P6",
  " JABS - P6",
  " Punches (PreLoaded & Kneeling)",
  " Squatted Throw. P6",
  " Drop-in Step Down Pillar - P2.5-3-4-5-6",
  " Kneeling Throws. P6",
  " Punches (Preloaded & Kneeling) -P6",
  " Up & Over - P5-6",
  " Pulls (Kneeling & PreLoaded ) P6",
  " Dynamic Stand P 5-6",
  " Walk Around Wrap P 4-5-6",
  " Dynamic Wheel P 3-4-5-6",
  " SOUTH AFRICAN-A P2.5-6",
  " WIND-UP 1 STATIC P1-6",
  " Walking Punches - P6",
  " Static Stand P 5-6",
  " Walk Around Throw- P4-5-6",
  " Dynamic Wheel. P4-5-6",
  " Static Wind-up 1 P 1-2-3-4-5-6",
  " Squatted Throws. - P6",
  " Pre-Loaded Throws P5-6",
  " Static Wheel P3-4-5-6",
  " SOUTH AFRICAN-B P2.5-6",
  " PILLAR 2 START P2-6",
  " Preloaded Throws. P6",
  " Stand Throw. P5-6",
  " Static Wheel. P 4-5-6",
  " Stretch Back & Throw - P4-5-6",
  " Single Leg Step Back - P3-4-5-6",
];

const type2Drills = [
  "Pick up your Type II",
  "P1 - 6 POSITIONS SEQUENCE",
  "P1 - KNEELING ARM SWINGS",
  "P1 - SIDE TO SIDE STACK",
  "P1 - Stack & Twist",
  "P1 - STACK & SWING",
  "P1 - POSITION 2-3 REPEATS",
  "P1 - POSITION 3-4 REPEATS",
  "P1 - ARM SHOULDER WINDS",
  "P1 - WIND-UP 1",
  "P1 - KNEELING 1-2-3-4",
  "P1 - KNEELING 2-3, 3-4",
  "P1 - POSITION 2-3-4 REPEATS",
  "P1 - WIND-UP 2",
  "P1 - POSITION 4-5 REPEATS",
  "P1 - STRETCH & WIND",
  "P1 - SHOULDER STRETCH",
  "P1 - SINGLE LEG WIND-UP 1",
  "P1 - 90 degree fold",
  "P1 - WIND-UP 2 (ENTRY AXIS)",
  "P1 - HINGE",
  "P2 - THE HINGE (ENTRY/sprint LEG)",
  "P2 - HINGE T",
  "P2 - CENTER OF MASS SHIFT",
  "P2 - ENTRY ARM EXTENSION W/ CM SHIFT (BANDS)",
  "P2 - KNEE HUG",
  "P2 - HINGE - HINGE",
  "P2 - HINGE HINGE STEP",
  "P2 - HINGE SHIFT STEP",
  "P2 - 90º WALK AROUND",
  "P2 - 180º - 360",
  "P2 - HINGE & PUSH OUT",
  "P2 - SWEEP LEG KICK",
  "P2 - HINGE & COUNTER",
  "P2 - HINGE & FORWARD",
  "P2 - ARM CAST - MIDLINE",
  "P2 - OPEN - CLOSE - Cast",
  "P2 - CAST & SWEEP",
  "P2 - DROP - IN",
  "P2 - PILLAR 2 WINDS & 270",
  "P2 - HINGES (ENTRY LEG)",
  "P2 - CASTER VS OPENER",
  "P2 - HINGE & SHIFT WITH ENTRY ARM",
  "P2 - PILLAR 2 T",
  "P2 - ARM OPEN",
  "P2 - CENTER OF MASS SHIFT & STEP",
  "P2 - HINGE & OPEN",
  "P2 - OPEN-CLOSE-OPEN",
  "P3 - PUDDLE JUMP 1-2-3",
  "P3 - SPRINT COUNTER",
  "P3 - SWEEP STEP",
  "P3 - KNEE PULL",
  "P3 - PUSH - PULL",
  "P3 - 3-4 T",
  "P3 - Drop-in & STep",
  "P3 - DROP DOWNS = FORMALLY STEP DOWN",
  "P3 - PUDDLE 3",
  "P3 - SQUAT & TWIST",
  "P3 - STRETCH & DROP",
  "P3 - Push, Squat & Turn",
  "P3 - 270º STEP DOWN",
  "P3 - PUDDLE JUMP 1-2-3",
  "P3 - STEP DOWNS",
  "P3 - STRETCH & SQUEEZE",
  "P3 - PUSH - PULL DRILL",
  "P3 - PUDDLE 3 (PC 3-4)",
  "P3 - WALKING LINE",
  "P3 - PILLAR 3-4 T",
  "P3 - PUSH SQUAT & TURN",
  "P4 - WALK AROUND T (WRAP 101) W/ BAND",
  "P4 - WHEEL PIVOT",
  "P4 - T WRAP",
  "P4 - T WRAP TWIST",
  "P4 - WALKING LINE DRILL",
  "P4 - MODIFIED WHEEL",
  "P4 - WHEEL PIVOT PUSH -PULL & OPEN-",
  "P4 - TWIST & WRAP",
  "P4 - SQUAT & TURN",
  "P4 - STEP DOWN - SWEEP KNEE LIFT",
  "P4 - SHOULDER STRETCH",
  "P4 - STRETCH & SQUEEZE",
  "P4 - REACH & HIGH POINT",
  "P4 - TWIST & DROP",
  "P4 - SWEEP LEG KNEE LIFT",
  "P4 - PUSH OPEN & WRAP",
  "P4 - OPEN & T WRAP",
  "P4 - Push Pull Open",
  "P4 - PUSH PULL WRAP & OPEN",
  "P4 - PUDDLE 3 & WRAP",
  "P4 - WALK AROUND (WRAP 101)",
  "P4 - BLOCK ARM WRAP",
  "P4 - Stretch & Wrap",
  "P4 - PUSH-OPEN & WRAP",
  "P4 - STRETCH & OPEN",
  "P4 - WHEEL PIVOT PUSH -PULL & OPEN",
  "P4 - WRAP & Open",
  "P4 - PUSH-PULL OPEN & WRAP",
  "P4 - Open & Stop",
  "P4 - OPEN & WRAP",
  "P5 - PILLAR 5 T",
  "P5 - STACK & ANGLE",
  "P5 - STACK COUNTERS",
  "P5 - ELEVATOR DROP",
  "P5 - UP-DOWN",
  "P5 - SQUAT & CAST",
  "P5 - DRILL DOWN",
  "P5 - HEEL UP, PUSH DRILL DOWN",
  "P5 - OPEN & STOP",
  "P5 - HEEL UP - PUSH",
  "P5 - PUSH AROUND DRILL",
  "P5 - SINGLE LEG HEEL UP & PUSH",
  "P5 - Single LEG PUSH DOWN",
  "P5 - FOLD & OPEN",
  "P5 - SQUATTED WINDS w/ DRILL CAST",
  "P5 - Push-Down",
  "P5 - Single Leg Drill Down.",
  "P5 - Push-Around",
  "P5 - Wind & Cast",
  "P5 - SINGLE LEG HIP & SQUAT",
  "P6 BL ACTIVATION. & TWIST",
  "P6 - BLOCK LEG ACT. STOPS",
  "P6 - HIP TWIST REPEAT",
  "P6 - DELIVERY T",
  "P6 - BLOCK DOWNS",
  "P6 - TWIST THROUGHS",
  "P6 - BLOCK LEG EXTENSION STOPS",
  "P6 - BLOCK LEG COUNTER .",
  "P6 - BLOCK ARM STOPS",
  "P6 - WALL BLOCK",
  "P6 - PRE-LOADED WINDS",
  "P6 - SW TO BLAT",
  "P6 - REVERSE VS NONREVERSE",
  "P6 - PLW TO BLAT",
  "P6 - THE REVERSE",
  "P6 - REVERSE BLOCK LEG COUNTER EXT.",
  "P6 - DOWN-DOWN",
  "P6 - 1in JUMP",
  "P6 - SQUATTED THROW",
  "P6 - BLOCK LEG ACTIVATION & HIP TWIST",
  "P6 - BLOCK LEG EXTENSION & TWIST",
  "P6 - BLOCK LEG EXTENSION",
  "P6 - BLOCK ARM/SHOULDER STOPS",
  "P6 - SQUATTED WINDS",
  "P6 - PLW TO BLET",
  "P6 - SW TO BLET",
  "P6 - REVERSE BLOCK LEG COUNTER EXT.",
  "P6 - BLOCK LEG COUNTER EXTENSION",
];
const type2DrillsP0 = [
  "L GRIP 101 (FS)",
  "L GRIP & POINT (FS)",
  "L GRIP SIDE RAISE (FS)",
  "L GRIP T FLY (FS)",
  "WRIST WINDERS (WW) (FS)",
  "WALKING WW (FS)",
  "SWINGS (FS)",
  "SWINGS & POINT (FS)",
  "STEP & LIFT (FS)",
  "BOWLS (FS)",
  "TOSSES (HI) (FS)",
  "TOSSES (LO) (FS)",
  "WINDS (MINIMAL CUPPING) (FS)",
  "INFINITIES (FS)",
  "PRESSERS (FS)",
  "FRONT RAISE (FS)",
  "FIGURE 8'S (FS)",
  "LIFT & WIND (FS)",
  "SLAP SKIP (FS)",
  "SKIPS (FS)",
  "WALKING SKIPS (FS)",
  "HOLD 101 (SS)",
  "GRIP F&E (SS)",
  "HOLD & ROLL (SS)",
  "PRESS & ROLL (SS)",
  "PULL BACKS/PULL DOWN (SS)",
  "PULL & PUSH (SS)",
  "PUSH & LIFT (SS)",
  "FLICKS (SS)",
  "DRIVERS (SS)",
  "OH TOSSES (SS)",
  "JABS (SS)",
  "PUNCH (SS)",
  "WALKING PUNCH (SS)",
];
const type2DrillsGroups = [
  type2DrillsP0,
  type2Drills.filter((el) => el.startsWith("P1")),
  type2Drills.filter((el) => el.startsWith("P2")),
  type2Drills.filter((el) => el.startsWith("P3")),
  type2Drills.filter((el) => el.startsWith("P4")),
  type2Drills.filter((el) => el.startsWith("P5")),
  type2Drills.filter((el) => el.startsWith("P6")),
];
let recordsArr = [];
let templateTitle = "";
let type1TotalActive = 0;
let type2TotalActive = 0;
let type1TotalFinal = 0;
let type2TotalFinal = 0;

// Function to initialize dropdowns with drill options
function initDropdowns() {
  // Initialize Type I dropdown
  const type1Dropdown = document.getElementById("type1Drill");
  type1Drills.forEach((drill, i) => {
    let option = document.createElement("option");
    if (i != 0) {
      option.value = drill;
    } else {
      option.value = "";
    }
    option.text = drill;
    type1Dropdown.appendChild(option);
  });

  // Initialize Type II dropdowns
  const type2DrillsAmountInput = document.getElementById("type2Drills");
  const type2DrillsAmount = parseInt(type2DrillsAmountInput.value) || 0;

  // Clear existing options in Type II dropdowns
  for (let i = 1; i <= 3; i++) {
    // Assuming there are 3 Type II dropdowns (modify as needed)
    const type2Dropdown = document.getElementById(`type2Drill${i}`);
    if (type2Dropdown) {
      type2Dropdown.innerHTML = ""; // Clear existing options

      // Populate Type II dropdowns based on the database
      type2Drills.forEach((drill, i) => {
        let option = document.createElement("option");
        if (i != 0) {
          option.value = drill;
        } else {
          option.value = "";
        }
        option.text = drill;
        type2Dropdown.appendChild(option);
      });
    }
  }
}

// Call the function to initialize dropdowns when the page loads
window.onload = initDropdowns;

// Update dropdowns when the "Amount of Drills (Type II)" input changes
document.getElementById("type2Drills").addEventListener("input", initDropdowns);

// Function to update the Type II dropdowns based on the amount input
function updateType2Dropdowns() {
  const type2DrillsAmount =
    parseInt(document.getElementById("type2Drills").value) || 0;
  const type2DropdownsContainer = document.getElementById("type2Dropdowns");

  // Clear existing dropdowns
  type2DropdownsContainer.innerHTML = "";

  // Create new dropdowns based on the amount
  if (type2DrillsAmount > 0) {
    for (let i = 0; i < type2DrillsAmount; i++) {
      const groupSelectEl = document.createElement("select");
      const groupSelectValueEl = document.createElement("select");

      groupSelectValueEl.id = `type2Drill${i}`;
      groupSelectValueEl.style.display = "none";

      groupSelectEl.innerHTML +=
        '<option value="" selected>Select type II Drills group</option>';
      type2DrillsGroups.forEach((el, i) => {
        groupSelectEl.innerHTML +=
          '<option value="' + i + '">P' + i + "</option>";
      });
      // Add the new dropdowns
      type2DropdownsContainer.appendChild(groupSelectEl);
      type2DropdownsContainer.appendChild(groupSelectValueEl);

      groupSelectEl.addEventListener("input", function () {
        if (groupSelectEl.value) {
          let index = Number(groupSelectEl.value);
          let valueArr = type2DrillsGroups[index];
          groupSelectValueEl.style.display = "";
          groupSelectValueEl.innerHTML = "";
          valueArr.forEach((val) => {
            groupSelectValueEl.innerHTML +=
              '<option value="' + val + '" >' + val + "</option>";
          });
        } else {
          groupSelectValueEl.style.display = "none";
        }
      });
    }
  }
}

// Call the function to update Type II dropdowns when the page loads
window.onload = updateType2Dropdowns;

// Update dropdowns when the "Amount of Drills (Type II)" input changes
document
  .getElementById("type2Drills")
  .addEventListener("input", updateType2Dropdowns);

// Function to update the combined total throws
function updateCombinedTotalThrows() {
  const type1TotalCombinedEl = document.getElementById("type1TotalCombined");
  const type2TotalEl = document.getElementById("type2Total");
  const totalRepsCombinedEl = document.getElementById("totalRepsCombined");
  const workout_levelEl = document.getElementById("workout_level");
  type1TotalFinal = recordsArr.reduce((a, b) => a + b.throws, 0);
  type2TotalFinal = recordsArr.reduce((a, b) => a + b.drills, 0);
  let total1 = type1TotalFinal + type1TotalActive;
  let total2 = type2TotalFinal + type2TotalActive;

  templateTitle = workout_levelEl.value;

  type1TotalCombinedEl.innerText = total1;
  type2TotalEl.innerText = total2;
  totalRepsCombinedEl.innerText = total1 + total2;
}

// Update dropdowns when the "Amount of Drills (Type II)" input changes
document.getElementById("type2Drills").addEventListener("input", function () {
  initDropdowns();
  updateType2Dropdowns();
});

// ... (Remaining

function resetForm() {
  document
    .querySelectorAll("select#type1Drill,select[id^='type2Drill']")
    .forEach((el) => {
      const option = el.querySelector("option:first-child");
      if (option) {
        option.selected = true;
      }
    });

  document.querySelector("#type1Throws").value = "";
  document.querySelector("#type2Drills").value = "";
  document.querySelector("#onePlusTenFormula").value = "";
  document.querySelector("#onePlusTenFormula2").value = "";

  document.querySelector("#type2Dropdowns").innerHTML = "";
  document.querySelector("#type1Total").innerHTML = 0;
  document.querySelector("#totalDrills").innerHTML = 0;
  document.querySelector("#totalReps").innerHTML = 0;
}
function addDrillSet() {
  const targetSelectEls = document.querySelectorAll(
    "select#type1Drill,select[id^='type2Drill']"
  );
  const drillArr = [];
  let type1Vals = Array.from(
    document.querySelectorAll("select#type1Drill")
  ).map((el) => el.value);
  let type2Vals = Array.from(
    document.querySelectorAll("select[id^='type2Drill']")
  ).map((el) => el.value);
  targetSelectEls.forEach((el) => {
    if (el.value) {
      drillArr.push(el.value);
    }
  });

  if (targetSelectEls.length === drillArr.length) {
    if (type1TotalActive === 0 || type2TotalActive === 0) {
      alert("Please Enter the Amount of Throws and click the button to update");
      return false;
    }
    const selectedDrillsListEl = document.querySelector("#selectedDrillsList");

    let id = recordsArr[recordsArr.length - 1]
      ? recordsArr[recordsArr.length - 1]["id"] + 1
      : 1;
    let htmlCode = `
    <div class="drill-set" data-id="${id}">
    <button class="btn-delete" onclick="deleteItem(event)" data-id="${id}">&times;</button>
    <button class="btn-edit" onclick="editItemOpen(event)" data-id="${id}">&#9998;</button>
    <h5>Set ${id}</h5>
    <ul>
     ${drillArr.map((value) => "<li>" + value + "</li>").join("")}
    </ul>
    <div class="drill-set_totals">
      <p>Throws - Type I: ${type1TotalActive}</p>
      <p>Drills - Type II: ${type2TotalActive}</p>
      <p>Total Reps: ${type1TotalActive + type2TotalActive}</p>
    </div>
  </div>
    `;
    selectedDrillsListEl.innerHTML += htmlCode;
    type1TotalFinal += type1TotalActive;
    type2TotalFinal += type2TotalActive;

    let formula =
      document.getElementById("onePlusTenFormula").value +
      "+" +
      document.getElementById("onePlusTenFormula2").value;
    recordsArr.push({
      id,
      type1Vals,
      type2Vals,
      throws: type1TotalActive,
      drills: type2TotalActive,
      reps: type1TotalActive + type2TotalActive,
      formula,
    });

    type1TotalActive = 0;
    type2TotalActive = 0;

    resetForm();
  } else {
    alert("Please pick an option for every available dropdown!");
  }
}

// accelerationFormula
function accelerationFormula() {
  const onePlusTenFormulaEl = document.getElementById("onePlusTenFormula");
  const onePlusTenFormula2El = document.getElementById("onePlusTenFormula2");
  const type1ThrowsEl = document.getElementById("type1Throws");
  const type2DrillsEl = document.getElementById("type2Drills");

  if (!type1ThrowsEl.value.length) {
    return type1ThrowsEl.focus();
  } else if (!onePlusTenFormulaEl.value.length) {
    return onePlusTenFormulaEl.focus();
  } else if (!onePlusTenFormula2El.value.length) {
    return onePlusTenFormula2El.focus();
  } else if (!type2DrillsEl.value.length) {
    return type2DrillsEl.focus();
  }

  let type2DrillsAmount = Number(type2DrillsEl.value);
  let type1ThrowsAmount = Number(type1ThrowsEl.value);
  let onePlusTenFormulaValue = Number(onePlusTenFormulaEl.value);
  let onePlusTenFormulaValue2 = Number(onePlusTenFormula2El.value);
  // Perform the calculation (multiply the formula value with the amount of Type II drills)

  let accelerationFormulaValue =
    (type1ThrowsAmount / onePlusTenFormulaValue) *
    onePlusTenFormulaValue2 *
    type2DrillsAmount;
  accelerationFormulaValue = Math.round(accelerationFormulaValue);
  let totalReps = accelerationFormulaValue + type1ThrowsAmount;

  type1TotalActive = type1ThrowsAmount;
  type2TotalActive = accelerationFormulaValue;

  // Update the displayed result
  document.getElementById("totalDrills").innerText = accelerationFormulaValue;
  document.getElementById("totalReps").innerText = totalReps;
  document.getElementById("type1Total").innerText = type1ThrowsAmount;

  // Update the combined total throws only when the button is clicked for Type II calculations
  const targetSelectEls = document.querySelectorAll(
    "#workout_level,select#type1Drill,#type2Dropdowns select"
  );

  for (let i = 0; i < targetSelectEls.length; i++) {
    const el = targetSelectEls[i];
    if (!el.value) {
      return el.focus();
    }
  }
  updateCombinedTotalThrows();
  addDrillSet();
}
function updateRecordsHTML(arr) {
  const setCards_wrapperEl = document.getElementById("set-cards_wrapper");
  const totalCard_wrapperEl = document.getElementById("total-card_wrapper");
  const workout_level_titleEl = document.getElementById("workout_level_title");
  const workout_level_subEl = document.getElementById("workout_level_sub");
  setCards_wrapperEl.innerHTML = "";
  let throwsTotal = 0;
  let drillsTotal = 0;
  let repsTotal = 0;
  labelsBytype1HTML = "";
  labelsBytype2HTML = "";
  workout_level_titleEl.innerHTML = templateTitle;
  workout_level_subEl.innerHTML = document.getElementById(
    "workout_level_sub_input"
  ).value;
  arr.forEach((item, i) => {
    const htmlCode = `
   <div class="col-md-4 mb-3">
   <div class="card set pb-3">
     <div class="card-header">
       <h2>set ${i + 1}</h2>
     </div>
     <div class="card-body">
       <div class="type1-wrapper">
         <h3>Type I Drills:</h3>
         <ul>
         ${item.type1Vals.map((val) => "<li>" + val + "</li>").join("")}
         </ul>
       </div>
       <div class="type2-wrapper">
        ${item.type2Vals.length ? "<h3>Type II Drills:</h3>" : ""}
         <ul>
         ${item.type2Vals.map((val) => "<li>" + val + "</li>").join("")}
          
         </ul>
       </div>
       <div class="totals-wrapper">
         <ul class="mb-0">
           <li>
             <strong>Amount of Throws: <span>${item.throws}</span></strong>
           </li>
           <li>
             <strong>Amount of Drills: <span>${item.drills}</span></strong>
           </li>
           <li>
             <strong>Amount of Reps: <span>${item.reps}</span></strong>
           </li>
         </ul>
       </div>
     </div>
   ${
     item.type2Vals.length
       ? `
    <div class="card-footer">
    <h3>Formula Used:</h3>
    <p>${item.formula} Formula</p>
  </div>
    `
       : ""
   }
   </div>
 </div>
   `;
    setCards_wrapperEl.innerHTML += htmlCode;

    throwsTotal += item.throws;
    drillsTotal += item.drills;
    repsTotal += item.reps;
    if (item.type1Vals.length) {
      labelsBytype1HTML += `
  <h5>set ${i + 1}</h5>
  <ul>
  ${item.type1Vals.map((el) => "<li>" + el + "</li>").join("")}
  </ul>
  `;
    }
    if (item.type2Vals.length) {
      labelsBytype2HTML += `
  <h5>set ${i + 1}</h5>
  <ul>
  ${item.type2Vals.map((el) => "<li>" + el + "</li>").join("")}
  </ul>
  `;
    }
  });

  totalCard_wrapperEl.innerHTML = `
  <div class="card total">
  <div class="card-header">
    <h2>total work</h2>
  </div>
  <div class="card-body">
    <div class="type1-wrapper">
      <h3>Type I Drills:</h3>
      ${labelsBytype1HTML}
   
    </div>
    <div class="type2-wrapper">
      <h3>Type II Drills:</h3>
    ${labelsBytype2HTML}
    </div>
    <div class="totals-wrapper">
      <ul class="mb-0">
        <li>
          <strong>Amount of Throws: <span>${throwsTotal}</span></strong>
        </li>
        <li>
          <strong>Amount of Drills: <span>${drillsTotal}</span></strong>
        </li>
        <li>
          <strong>Amount of Reps: <span>${repsTotal}</span></strong>
        </li>
      </ul>
    </div>
  </div>
</div>
  `;
}

function downloadPDF(event) {
  if (!recordsArr.length) {
    alert("There is no set to download!");
    return false;
  }
  event.target.disabled = true;
  updateRecordsHTML(recordsArr);
  const doc = new jspdf.jsPDF();
  const el = document.querySelector(".output");
  el.style.display = "block";
  doc.html(el, {
    callback: function (doc) {
      el.style = "";
      event.target.disabled = false;
      doc.save();
    },
    x: 10,
    y: 10,
    width: 190,
    windowWidth: 950,
  });
}
function downloadImportFile(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

function saveData() {
  if (recordsArr.length) {
    downloadImportFile(
      JSON.stringify({
        templateTitle,
        recordsArr,
      }),
      "Throw_Work_save_" + new Date().toLocaleString() + ".txt",
      "text/plain"
    );
  } else {
    alert("This Workout is currently empty!");
  }
}
function loadData(data) {
  if (!data) return false;
  const selectedDrillsListEl = document.querySelector("#selectedDrillsList");
  templateTitle = data.templateTitle;
  document.getElementById("workout_level").value = templateTitle;
  selectedDrillsListEl.innerHTML = "";
  type1TotalFinal = 0;
  type2TotalFinal = 0;
  data.recordsArr.forEach((item, i) => {
    let htmlCode = `
    <div class="drill-set" data-id="${item.id}">
    <button class="btn-delete" onclick="deleteItem(event)" data-id="${
      item.id
    }">&times;</button>
    <button class="btn-edit" onclick="editItemOpen(event)" data-id="${
      item.id
    }">&#9998;</button>
    <h5>Set ${item.id}</h5>
    <ul>
     ${[...item["type1Vals"], ...item["type2Vals"]]
       .map((value) => "<li>" + value + "</li>")
       .join("")}
    </ul>
    <div class="drill-set_totals">
      <p>Throws - Type I: ${item.throws}</p>
      <p>Drills - Type II: ${item.drills}</p>
      <p>Total Reps: ${item.reps}</p>
    </div>
  </div>
    `;
    selectedDrillsListEl.innerHTML += htmlCode;

    type1TotalFinal += item.throws;
    type2TotalFinal += item.drills;
    document.getElementById("type1TotalCombined").innerHTML = type1TotalFinal;
    document.getElementById("type2Total").innerHTML = type2TotalFinal;
    document.getElementById("totalRepsCombined").innerHTML =
      type1TotalFinal + type2TotalFinal;
  });
  recordsArr.splice(0, recordsArr.length);
  recordsArr.push(...data.recordsArr);
}
function calculateResult() {
  const targetEls = document.querySelectorAll(
    "#workout_level,#type1Throws,select#type1Drill"
  );
  for (let i = 0; i < targetEls.length; i++) {
    const el = targetEls[i];
    if (!el.value) {
      return el.focus();
    }
  }
  const type1ThrowsEl = document.querySelector("#type1Throws");
  const selectedDrillsListEl = document.querySelector("#selectedDrillsList");

  type1TotalActive = Number(type1ThrowsEl.value);
  let type1Vals = [document.getElementById("type1Drill").value];
  let id = recordsArr[recordsArr.length - 1]
    ? recordsArr[recordsArr.length - 1]["id"] + 1
    : 1;
  let htmlCode = `
    <div class="drill-set" data-id="${id}">
    <button class="btn-delete" onclick="deleteItem(event)" data-id="${id}">&times;</button>
    <button class="btn-edit" onclick="editItemOpen(event)" data-id="${id}">&#9998;</button>
    <h5>Set ${id}</h5>
    <ul>
     ${type1Vals.map((value) => "<li>" + value + "</li>").join("")}
    </ul>
    <div class="drill-set_totals">
      <p>Throws - Type I: ${type1TotalActive}</p>
      <p>Total Reps: ${type1TotalActive}</p>
    </div>
  </div>
    `;
  selectedDrillsListEl.innerHTML += htmlCode;
  type1TotalFinal += type1TotalActive;

  recordsArr.push({
    id,
    type1Vals,
    type2Vals: [],
    throws: type1TotalActive,
    drills: 0,
    reps: type1TotalActive,
    formula: "",
  });

  type1TotalActive = 0;
  updateCombinedTotalThrows();
  resetForm();
}
function deleteItem(event) {
  let index = Number(event.target.getAttribute("data-id"));
  event.target.closest(".drill-set").remove();
  if (!recordsArr[index]) return false;
  recordsArr = recordsArr.filter((el) => el.id != index);
  type1TotalFinal = recordsArr.reduce((a, b) => a + b.throws, 0);
  type2TotalFinal = recordsArr.reduce((a, b) => a + b.drills, 0);
  updateCombinedTotalThrows();
}
const calc_wrapperEl = document.getElementById("calc_wrapper");
const type1ThrowsEl = document.getElementById("type1Throws");
const type1DrillEl = document.getElementById("type1Drill");
const input_disable_type2El = document.getElementById("input_disable_type2");
const onePlusTenFormulaEl = document.getElementById("onePlusTenFormula");
const onePlusTenFormula2El = document.getElementById("onePlusTenFormula2");
const type2DrillsEl = document.getElementById("type2Drills");
const btnEdit_saveEl = document.getElementById("btn-edit_save");
function editItemOpen(event) {
  const id = event.target.getAttribute("data-id");
  const index = recordsArr.findIndex((el) => el.id == id);
  type1ThrowsEl.value = recordsArr[index].throws;
  type1DrillEl.value = recordsArr[index].type1Vals[0];
  if (recordsArr[index].type2Vals.length) {
    input_disable_type2El.checked = false;
    calc_wrapperEl.classList.remove("type2_disabled");
    type2DrillsEl.value = recordsArr[index].type2Vals.length;
    type2DrillsEl.dispatchEvent(new Event("change"));
    onePlusTenFormulaEl.value = recordsArr[index].formula.split("+")[0];
    onePlusTenFormula2El.value = recordsArr[index].formula.split("+")[1];
  } else {
    disable_type2();
  }

  calc_wrapperEl.classList.add("edit-mode");
  btnEdit_saveEl.onclick = () => {
    editItemSave(index, id);
  };
}
function editItemSave(index, id) {
  const drill_setEl = document.querySelector(
    ".drill-set[data-id='" + id + "']"
  );
  const type2Dropdowns = document.querySelectorAll(
    "#type2Dropdowns select[id^='type2Drill']"
  );
  let throws = Number(type1ThrowsEl.value);
  let drills = Number(type2DrillsEl.value);
  let reps = throws + drills;
  let formula = "";
  if (input_disable_type2El.checked) {
    const arr = [type1ThrowsEl, type1DrillEl];
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].value) {
        return arr[i].focus();
      }
    }
    drills = 0;
    reps = throws;
    drill_setEl.innerHTML = `
    <button class="btn-delete" onclick="deleteItem(event)" data-id="${id}">&times;</button>
    <button class="btn-edit" onclick="editItemOpen(event)" data-id="${id}">&#9998;</button>
    <h5>Set ${id}</h5>
    <ul>
     <li>${type1DrillEl.value}</li>
    </ul>
    <div class="drill-set_totals">
      <p>Throws - Type I: ${throws}</p>
      <p>Drills - Type II: 0</p>
      <p>Total Reps: ${reps}</p>
    </div>
  `;
    recordsArr[index].type2Vals = [];
  } else {
    const arr = [
      type1ThrowsEl,
      type1DrillEl,
      onePlusTenFormulaEl,
      onePlusTenFormula2El,
      type2DrillsEl,
      ...document.querySelectorAll("#type2Dropdowns select"),
    ];
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].value) {
        return arr[i].focus();
      }
    }
    drills = Math.round(
      (throws / Number(onePlusTenFormulaEl.value)) *
        Number(onePlusTenFormula2El.value) *
        drills
    );
    reps = drills + throws;
    drill_setEl.innerHTML = `
    <button class="btn-delete" onclick="deleteItem(event)" data-id="${id}">&times;</button>
    <button class="btn-edit" onclick="editItemOpen(event)" data-id="${id}">&#9998;</button>
    <h5>Set ${id}</h5>
    <ul>
    <li>${type1DrillEl.value}</li>
    ${[...type2Dropdowns].map((el) => "<li>" + el.value + "</li>").join("")}
    </ul>
    <div class="drill-set_totals">
      <p>Throws - Type I:  ${throws}</p>
      <p>Drills - Type II: ${drills}</p>
      <p>Total Reps: ${reps}</p>
    </div>
  `;
    recordsArr[index].type2Vals = [...type2Dropdowns].map((el) => el.value);
    formula =
      Number(onePlusTenFormulaEl.value) +
      "+" +
      Number(onePlusTenFormula2El.value);
  }

  recordsArr[index].throws = throws;
  recordsArr[index].drills = drills;
  recordsArr[index].formula = formula;
  recordsArr[index].reps = reps;
  recordsArr[index].type1Vals[0] = type1DrillEl.value;

  calc_wrapperEl.classList.remove("edit-mode");
  resetForm();
  updateCombinedTotalThrows();
}
function editItemCancel() {
  calc_wrapperEl.classList.remove("edit-mode");
  resetForm();
}
document
  .getElementById("load-file")
  .addEventListener("change", async function (event) {
    const file = event.target.files.item(0);
    const data = JSON.parse(await file.text());

    loadData(data);
  });

function disable_type2() {
  const parentEl = document.getElementById("calc_wrapper");
  parentEl.classList.add("type2_disabled");
  document.getElementById("input_disable_type2").checked = true;
}
document
  .getElementById("input_disable_type2")
  .addEventListener("change", (e) => {
    if (e.target.checked) {
      disable_type2();
    } else {
      calc_wrapperEl.classList.remove("type2_disabled");
    }
  });
// Call the function to update the "Drills Used on Workout" box when the page loads
window.onload = function () {
  initDropdowns();
  updateType2Dropdowns();

  document.getElementById("selectedDrillsList").innerHTML = "";
};
