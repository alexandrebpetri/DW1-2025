let score = { A: 0, B: 0 };
let sets = { A: 0, B: 0 };
const maxSets = 5;

function startMatch() {
  const nameA = document.getElementById('teamAName').value || "Time A";
  const nameB = document.getElementById('teamBName').value || "Time B";

  document.getElementById('displayTeamA').textContent = nameA;
  document.getElementById('displayTeamB').textContent = nameB;

  document.getElementById('config').classList.add('hidden');
  document.getElementById('scoreboard').classList.remove('hidden');

  enableButtons();
}

function changePoints(team, value) {
  if (isMatchOver()) {
    return;
  }

  if (value < 0) {
    if (score[team] === 0) {
      return;
    } else {
      score[team] -= 1;
    }
  } else {
    score[team] += 1;
  }

  document.getElementById('points' + team).textContent = score[team];
  addToHistory(team, value);
  checkSet(team);
}

function resetPoints(team) {
  if (isMatchOver()) {
    return;
  }

  score[team] = 0;
  document.getElementById('points' + team).textContent = 0;
  addToHistory(team, 'zerou');
}

function checkSet(team) {
  const opponent = team === 'A' ? 'B' : 'A';
  const totalSets = sets.A + sets.B;
  const finalSet = totalSets === 4;
  let limit = 25;

  if (finalSet) {
    limit = 15;
  }

  if (score[team] >= limit) {
    if ((score[team] - score[opponent]) >= 2) {
      sets[team] += 1;
      document.getElementById('sets' + team).textContent = sets[team];
      addToHistory(team, 'venceu o set');

      if (sets[team] === 3) {
        declareWinner(team);
      } else {
        score.A = 0;
        score.B = 0;
        document.getElementById('pointsA').textContent = 0;
        document.getElementById('pointsB').textContent = 0;
      }
    }
  }
}

function declareWinner(team) {
  let teamName = "";

  if (team === 'A') {
    teamName = document.getElementById('displayTeamA').textContent;
  } else {
    teamName = document.getElementById('displayTeamB').textContent;
  }

  const message = "🏆 " + teamName + " venceu a partida!";
  alert(message);

  const entry = document.createElement('li');
  entry.textContent = message;
  const history = document.getElementById('history');
  history.insertBefore(entry, history.firstChild);
}

function resetMatch() {
  score = { A: 0, B: 0 };
  sets = { A: 0, B: 0 };

  document.getElementById('pointsA').textContent = 0;
  document.getElementById('pointsB').textContent = 0;
  document.getElementById('setsA').textContent = 0;
  document.getElementById('setsB').textContent = 0;

  document.getElementById('teamAName').value = "";
  document.getElementById('teamBName').value = "";
  document.getElementById('displayTeamA').textContent = "Time A";
  document.getElementById('displayTeamB').textContent = "Time B";

  const buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent !== "Iniciar Partida") {
      buttons[i].disabled = true;
    }
  }
}

function isMatchOver() {
  if (sets.A === 3 || sets.B === 3) {
    return true;
  } else {
    return false;
  }
}

function addToHistory(team, action) {
  let teamName = "";

  if (team === 'A') {
    teamName = document.getElementById('displayTeamA').textContent;
  } else {
    teamName = document.getElementById('displayTeamB').textContent;
  }

  const timestamp = new Date().toLocaleString();
  let text = "[" + timestamp + "] " + teamName + " ";

  if (typeof action === 'string') {
    text += action;
  } else {
    if (action > 0) {
      text += "+" + action;
    } else {
      text += action;
    }
  }

  const entry = document.createElement('li');
  entry.textContent = text;

  const history = document.getElementById('history');
  history.insertBefore(entry, history.firstChild);
}

function clearHistory() {
  document.getElementById('history').innerHTML = "";
}

function toggleHistory() {
  const container = document.getElementById('history-container');
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
  }
}