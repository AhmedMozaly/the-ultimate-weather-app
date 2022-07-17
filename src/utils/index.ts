export const timestampToTime = (timestamp: number) => {
  if (!timestamp) return "";

  return new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
  }).format(new Date(timestamp * 1000));
};
