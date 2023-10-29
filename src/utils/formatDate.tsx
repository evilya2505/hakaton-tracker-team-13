export const formatDate = (date: Date) => {
  const d: Date = new Date(date);
  return d.toLocaleString("ru", {
    month: "long",
    year: "numeric",
  });
};

export const formatFullDate = (date: Date | undefined) => {
  if (date !== undefined) {
    const d: Date = new Date(date);
    return d.toLocaleString("ru", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
};
