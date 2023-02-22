import { useCallback } from "react";

import { WordListTypes } from "data/words";

interface Response {
  pickWord: (category: string) => string;
  pickCategory: () => string;
}

export default function usePickWordAndCategory(words: WordListTypes): Response {
  const pickWord = useCallback(
    (category: string) => {
      const word =
        words[category][Math.floor(Math.random() * words[category].length)];

      return word;
    },
    [words]
  );

  const pickCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    return category;
  }, [words]);

  return { pickWord, pickCategory };
}
