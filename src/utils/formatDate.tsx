export const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("ru", {
    month: "long",
    year: "numeric",
  });
  console.log(formatter.format(date))
  return formatter.format(date);
};

export const formatFullDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("ru", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date);
}
