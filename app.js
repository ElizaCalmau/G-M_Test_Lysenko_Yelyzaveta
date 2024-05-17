console.log("hello world");
const cardsInfo = [
  {
    0: "Install / Replace a Toilet",
    1: "Install / Replace a Faucet",
    2: "Fix a Leaking",
    3: "Install / Replace a Sink",
    4: "Repair Under Sink Plumbing",
  },
  {
    0: "Install Drywall",
    1: "Patch and Paint Drywall",
    2: "Paint a Wall / Trim",
    3: "Paint or Stain A Fence",
    4: "Paint a Cabinet Door",
  },
  {
    0: "Assemble Fitness Equipment",
    1: "Assemble - Custom Request",
    2: "Assemble a TV Stand",
    3: "Assemble Pet Furniture",
    4: "Assemble a Bar Cabinet",
  },
  {
    0: "Install / Replace a Ceiling Fan",
    1: "Replace Switch & Outlet Faceplate",
    2: "Upgrade to a Video Doorbell",
    3: "Install / Replace an Bathroom Exhaust Fan",
  },
  {
    0: "Install / Replace New Door",
    1: "Install / Replace a Screen Door",
    2: "Install / Replace a Window Screen",
    3: "Repair a Door Frame",
  },
  {
    0: "Mount a TV",
    1: "Remove a TV Mount from Wall",
    2: "Mount and Hang a Projector Screen",
    3: "Hang a Bathroom Fixture",
  },
  {
    0: "Replace an Existing Dishwasher",
    1: "Replace an Existing Microwave",
    2: "Replace an Existing Oven",
  },
  {
    0: "Install a Smart Lock",
    1: "Install a Smart Home Security Camera",
    2: "Mount a Baby Monitor Camera on the Wall",
    3: "Install an Under Sink Water Filtration System",
  },
  {
    0: "Assemble an Outdoor Trampoline",
    1: "Hang a Garage Shelving Unit",
    2: "Install Outdoor Decorative Exterior Window Shutters",
    3: "Install a Storm Door",
  },
];

const cardsTitle = [
  "Plumbing",
  "Drywall & painting",
  "Furniture assembly",
  "Electircal",
  "Doors and windows",
  "Hanging & mounting",
  "Appliance installation",
  "Smart home",
  "Outdoor",
];

const mainContainer = document.querySelector("#root");

function createCard() {
  for (let i = 0; i < cardsTitle.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    mainContainer.append(card);
  }
}
createCard();
const cardsArr = document.querySelectorAll(".card");

function fillCardTitle() {
  for (let i = 0; i < cardsTitle.length; i++) {
    const h2 = document.createElement("h2");
    h2.innerText = cardsTitle[i % cardsTitle.length];
    cardsArr[i].appendChild(h2);
  }
}

function fillCardInfo() {
  for (let i = 0; i < cardsArr.length; i++) {
    const ul = document.createElement("ul");
    const cardInfo = cardsInfo[i % cardsInfo.length];
    for (let key in cardInfo) {
      const li = document.createElement("li");
      li.innerText = cardInfo[key];
      ul.append(li);
    }
    cardsArr[i].append(ul);
  }
}
function createIcon() {
  for (let i = 0; i < cardsArr.length; i++) {
    const icon = document.createElement("div");
    icon.classList.add("icon");
    const backgroundPositionY = -83 * i + "px";
    icon.style.backgroundPositionY = backgroundPositionY;
    cardsArr[i].appendChild(icon);
  }
}
function addLink() {
  for (let i = 0; i < cardsArr.length; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.innerText = "View more";
    cardsArr[i].append(link);
  }
}
function addColoredBorders() {
  for (let i = 0; i < cardsArr.length; i += 4) {
    const card = cardsArr[i];
    card.classList.add("green");
  }
  for (let i = 1; i < cardsArr.length; i += 4) {
    const card = cardsArr[i];
    card.classList.add("blue");
  }
  for (let i = 2; i < cardsArr.length; i += 4) {
    const card = cardsArr[i];
    card.classList.add("yellow");
  }
  for (let i = 3; i < cardsArr.length; i += 4) {
    const card = cardsArr[i];
    card.classList.add("red");
  }
}

createIcon();
fillCardTitle();
fillCardInfo();
addLink();
addColoredBorders();
