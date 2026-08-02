export type FlashcardWord = {
  word: string;
  pinyin: string;
  meaning: string;
};

export const basicsDeck: FlashcardWord[] = [
  { word: "你好", pinyin: "nǐ hǎo", meaning: "hello" },
  { word: "再見", pinyin: "zài jiàn", meaning: "goodbye" },
  { word: "早安", pinyin: "zǎo ān", meaning: "good morning" },
  { word: "晚安", pinyin: "wǎn ān", meaning: "goodnight" },
  { word: "謝謝", pinyin: "xiè xie", meaning: "thank you" },
  { word: "對不起", pinyin: "duì bù qǐ", meaning: "sorry" },
  { word: "沒關係", pinyin: "méi guān xi", meaning: "it's okay / no problem" },
  { word: "我愛你", pinyin: "wǒ ài nǐ", meaning: "I love you" },
  { word: "水", pinyin: "shuǐ", meaning: "water" },
  { word: "茶", pinyin: "chá", meaning: "tea" },
  { word: "吃飯", pinyin: "chī fàn", meaning: "to eat (a meal)" },
  { word: "喝", pinyin: "hē", meaning: "to drink" },
  { word: "睡覺", pinyin: "shuì jiào", meaning: "to sleep" },
  { word: "請", pinyin: "qǐng", meaning: "please" },
  { word: "好", pinyin: "hǎo", meaning: "good / okay" },
];

export function shuffleDeck<T>(deck: T[]): T[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
