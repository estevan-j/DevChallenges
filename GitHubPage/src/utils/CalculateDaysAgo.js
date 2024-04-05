export const calculateDaysAgo = (dateString) => {
  //I asked CHATGPT
  // Convert the given date string to a Date object
  const givenDate = new Date(dateString);
  // Get the current date
  const currentDate = new Date();
  // Calculate the difference in milliseconds between the current date and the given date
  const differenceMs = currentDate - givenDate;
  // Convert the difference from milliseconds to days
  const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

  return differenceDays;
};
