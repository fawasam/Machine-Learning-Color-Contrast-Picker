config = {
  //   hiddenLayers: [3],
};

const net = new brain.NeuralNetwork(config);
// net.train([
//   { input: [0, 0], output: [0] },
//   { input: [0, 1], output: [1] },
//   { input: [1, 0], output: [1] },
//   { input: [1, 1], output: [0] },
// ]);

const data = [
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.05278443821393508,
      g: 0.5939711291224983,
      b: 0.8269136279085132,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5927266906986346,
      g: 0.43410958870230765,
      b: 0.6229438073430873,
    },
    output: [1],
  },
  {
    input: {
      r: 0.055026530431401044,
      g: 0.8054653850226374,
      b: 0.5551518566112745,
    },
    output: [1],
  },
  {
    input: {
      r: 0.13744001230941771,
      g: 0.3277295822470676,
      b: 0.02046399840817248,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4929621410153271,
      g: 0.1326157278322424,
      b: 0.22455649391754484,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5215373770568521,
      g: 0.6420586223873357,
      b: 0.42617682217577135,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3449124773184393,
      g: 0.6070861435658113,
      b: 0.16706143779669058,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3418153404129185,
      g: 0.6308659151071585,
      b: 0.37587435088140664,
    },
    output: [0],
  },
  {
    input: {
      r: 0.6300504659079462,
      g: 0.27440661531786104,
      b: 0.10311579567638485,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5953138788392729,
      g: 0.13950260063124675,
      b: 0.8753400276293177,
    },
    output: [0],
  },
  {
    input: {
      r: 0.10227642653366087,
      g: 0.7320887154543712,
      b: 0.9101733305827591,
    },
    output: [1],
  },
  {
    input: {
      r: 0.31708538684983334,
      g: 0.36176346460939146,
      b: 0.7946898670648503,
    },
    output: [1],
  },
  {
    input: {
      r: 0.0037298906108180763,
      g: 0.266837544644037,
      b: 0.7779356854115311,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7992747202310468,
      g: 0.5134606998356288,
      b: 0.8786203484087949,
    },
    output: [1],
  },
  {
    input: {
      r: 0.726912957400913,
      g: 0.6998604432766655,
      b: 0.8076278902523011,
    },
    output: [1],
  },
  {
    input: {
      r: 0.643902128875272,
      g: 0.5916732615708535,
      b: 0.10177745375981306,
    },
    output: [1],
  },
  {
    input: {
      r: 0.06316776448959005,
      g: 0.3261479555435385,
      b: 0.9494785891229989,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8578202109586297,
      g: 0.788427100220944,
      b: 0.10474360390107185,
    },
    output: [1],
  },
  {
    input: {
      r: 0.562552602505511,
      g: 0.42744623485180044,
      b: 0.08348666513018221,
    },
    output: [1],
  },
  {
    input: {
      r: 0.10113601472094125,
      g: 0.11758829030656703,
      b: 0.8357758308032766,
    },
    output: [1],
  },
  {
    input: {
      r: 0.041648477909346227,
      g: 0.49526496305383305,
      b: 0.7462579959141029,
    },
    output: [1],
  },
  {
    input: {
      r: 0.35477275916752515,
      g: 0.57957129996449,
      b: 0.10224233038071229,
    },
    output: [1],
  },
  {
    input: {
      r: 0.022656744227499637,
      g: 0.2314572504849295,
      b: 0.36944715683072227,
    },
    output: [1],
  },
  {
    input: {
      r: 0.31151535102176897,
      g: 0.6917312891422065,
      b: 0.11111496521389808,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6212114330276841,
      g: 0.5504177881482386,
      b: 0.999645939110184,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7999705969305282,
      g: 0.29597562220990836,
      b: 0.4384988505897236,
    },
    output: [1],
  },
  {
    input: {
      r: 0.16804290586283965,
      g: 0.8268219870208173,
      b: 0.3055320636365353,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7944213555942812,
      g: 0.8556596480278527,
      b: 0.05311573939120384,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9522718365115104,
      g: 0.2595259827228069,
      b: 0.9738034349632827,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5121188425127927,
      g: 0.6156958228950069,
      b: 0.9642704615223965,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9570079593579288,
      g: 0.7068606274274647,
      b: 0.21616488292804492,
    },
    output: [0],
  },
  {
    input: {
      r: 0.03048092333413388,
      g: 0.8410233146684645,
      b: 0.5762441470360513,
    },
    output: [0],
  },
  {
    input: {
      r: 0.08347121700272209,
      g: 0.6300041860037382,
      b: 0.8417609200775191,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3124231369013004,
      g: 0.7670622304307126,
      b: 0.9967535084865613,
    },
    output: [0],
  },
  {
    input: {
      r: 0.42400471493331415,
      g: 0.5814482008448572,
      b: 0.8434767945368331,
    },
    output: [0],
  },
  {
    input: {
      r: 0.43954648994609324,
      g: 0.24352855666022766,
      b: 0.7072287778667867,
    },
    output: [0],
  },
  {
    input: {
      r: 0.12833054899432783,
      g: 0.9817302060580158,
      b: 0.9250156304225945,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8654305683806514,
      g: 0.6427493792910548,
      b: 0.7143896594168633,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8908755734908471,
      g: 0.9394261401835453,
      b: 0.6934256134155554,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3924060042753905,
      g: 0.17777371054778301,
      b: 0.8832653369384083,
    },
    output: [0],
  },
];
net.train(data);
const diagram = document.getElementById("diagram");
diagram.innerHTML = brain.utilities.toSVG(net);

const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");

let color;
setRandomColor();

whiteButton.addEventListener("click", () => {
  chooseColor(1);
});

blackButton.addEventListener("click", () => {
  chooseColor(0);
});
printButton.addEventListener("click", print);

function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });
  setRandomColor();
}

function print() {
  console.log(JSON.stringify(data));
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };
  const guess = net.run(color)[0];
  guessEl.style.color = guess > 0.5 ? "#FFF" : "#000";
  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
    color.b * 255
  })`;
}

// const output = net.run({ r: 1, g: 1, b: 0 });
// console.log(output);
