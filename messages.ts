import { getRandomNumber } from "./helpers";

const emojis = [
  "🤖",
  "🤠",
  "🥸",
  "🤓",
  "🗣",
  "🕺",
  "💃",
  "✨",
  "🥂",
  "🗿",
  "🕰",
  "⏰",
  "🕰",
  "❗️",
  "⚠️",
  " 📢",
  "🫵",
];

export default function generateTimeReportMessage() {
  const emoji1 = getRandomNumber(0, emojis.length - 1);
  const emoji2 = getRandomNumber(0, emojis.length - 1);
  return {
    text: `${emojis[emoji1]} Kära Qreware, nu är det dags att tidsrapportera igen! Var snälla och gör det innan sista dagen i månaden så blir jag en glad bot ${emojis[emoji2]}`,
  };
}
