export const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("ru", {
    month: "long",
    year: "numeric",
  });
  return formatter.format(date);
};
