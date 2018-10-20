let lol = "";

class Fighter {
  constructor(obj) {
    this.createdAt = obj.createdAt;
    this.dimensions = obj.dimensions;
    this.hp = obj.hp;
    this.name = obj.name;
    this.faction = obj.faction;
    this.weapons = obj.weapons;
    this.language = obj.language;
    // Status: Status of fighter
    this.status = "NORMAL";
    // statusTime: Number of turns fighter is affected by status
    this.statusTime = 0;
  }
}

class IO {
  constructor(ioType) {
    this.ioType = ioType;
    this.keyInput = document.querySelector(".container .console .input");
    this.keyOutput = document.querySelector(".container .console .output");
  }

  // io.outputs a string
  output(str, fighter, villian) {
    if (this.ioType == "console") console.log(str);
    else if (this.ioType === "window") {
      // Put io.output to DOM code here
      document.querySelector(".container .console .output").innerHTML += str;
    }
  }

  input(str) {
    if (this.ioType == "console") return readline.question(str);

    else if (this.ioType === "window") {
      // put input from DOM here
      if (start && str.code === 'Enter') {
        start = false;
        io.output('<br>output:&nbsp;you are now playing please name your character.')
        this.keyInput.innerHTML = "input:&nbsp;";
      } else {
        if (
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ \n".includes(
            str.key
          )
        )
          this.keyInput.innerHTML += str.key;
        if (str.code === "Backspace") this.keyInput.innerHTML = "input:&nbsp;";
        if (str.code === "Space") this.keyInput.innerHTML += "&nbsp";
        if (str.code === "Enter") {
          this.keyOutput.innerHTML += "<br>output:" + this.keyInput.innerHTML.slice(6);;
          this.keyInput.innerHTML = "input:&nbsp;";
        }
      }
    }
  }
}

let io = new IO("window");

let hero = new Fighter({
  createdAt: new Date(),
  dimensions: 3,
  name: "Hero",
  hp: 100,
  faction: "hordes",
  weapons: "Machete",
  language: "unknown"
});

function consoleCall(str, cb) {
  cb.output(str);
  //setTimeout(consoleCall, 2000);
}

// consoleCall("this is a test", io);
// consoleCall("die", io);

//io.output("Welcome to my game. Please create a character.\n");

//io.output("Fight until you die!");

let setState = "input";
let start = true;
//create character;

let objLine = {
  count: 0
};

let whichLine = [
  "calling this line",
  "Welcome to my game. Please create a character."
];

function callLine(obj) {
  obj.count++;
  if (obj.count > 2) obj.count = 0;
}

window.addEventListener("keydown", key => {
  if (setState === "input") {
    io.input(key);
  }
  //   if (key.keyCode == "13") {
  //     io.output(whichLine[objLine.count], hero);
  //     callLine(objLine);
  //   }
});

