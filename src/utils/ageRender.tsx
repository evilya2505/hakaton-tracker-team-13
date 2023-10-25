export default function ageRender(age: number) {
    const lastDigit: number = age % 10;
    if (lastDigit === 1) return `${age} год`;
    if ([2, 3, 4].includes(lastDigit)) return `${age} года`;
    if ([5, 6, 7, 8, 9, 0].includes(lastDigit)) return `${age} лет`;
  }