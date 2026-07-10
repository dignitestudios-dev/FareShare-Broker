export const formatToUSDate = (isoDateString) => {
  if (!isoDateString) return "";
  const date = new Date(isoDateString);
  if (Number.isNaN(date.getTime())) return "";

  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${month}/${day}/${year}`;
};
