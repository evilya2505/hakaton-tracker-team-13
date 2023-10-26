type award = { emoji: string; title: string };

export const awardsList: { winner: award; more10Responses: award } = {
  winner: {
    emoji: "🏆",
    title: "Победитель хакатона",
  },
  more10Responses: {
    emoji: "🔥",
    title: "10 откликов в неделю",
  },
};
