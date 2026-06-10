
// ----------------------------------------------------------------
const themeBtn = document.querySelector("#theme-toggle");

themeBtn.addEventListener("click", () => {
  // toggle gibt true zurück, wenn die Klasse jetzt VORHANDEN ist
  const istDunkel = document.body.classList.toggle("dunkel");
  themeBtn.innerText = istDunkel ? "☀️ Hell" : "🌙 Dunkel";
});


const interessen = [
  { emoji: "🎮", text: "Gaming" },
  { emoji: "💻", text: "Programmieren" },
  { emoji: "🎤", text: "Rap" },
  { emoji: "🎬", text: "Filme & Serien" },
  { emoji: "🐱", text: "Katzen" },
];

const tagContainer = document.querySelector("#interest-tags");

interessen.forEach((eintrag) => {
  const span = document.createElement("span");
  span.className = "tag";
  span.innerText = `${eintrag.emoji} ${eintrag.text}`;
  tagContainer.appendChild(span);
});

const geburtstag = new Date(2005, 1, 13); // Monat ist 0-basiert: 1 = Februar
const heute = new Date();

let alter = heute.getFullYear() - geburtstag.getFullYear();

const hatteGeburtstag =
  heute.getMonth() > geburtstag.getMonth() ||
  (heute.getMonth() === geburtstag.getMonth() &&
    heute.getDate() >= geburtstag.getDate());
if (!hatteGeburtstag) alter--;

document.querySelector("#untertitel").innerText =
  `${alter} Jahre alt · Student`;


const karloBtn = document.querySelector("#karlo-btn");
const karloText = document.querySelector("#karlo-fakt");

async function ladeKatzenFakt() {
  karloBtn.disabled = true;
  karloText.innerText = "Lade …";

  try {
    const antwort = await fetch("https://catfact.ninja/fact");
    if (!antwort.ok) throw new Error(`HTTP-Fehler ${antwort.status}`);

    const daten = await antwort.json(); // { fact: "...", length: N }
    karloText.innerText = daten.fact;
  } catch (fehler) {
    karloText.innerText = "Konnte keinen Fakt laden 😿";
    console.error(fehler);
  } finally {
    karloBtn.disabled = false;
  }
}

karloBtn.addEventListener("click", ladeKatzenFakt);
