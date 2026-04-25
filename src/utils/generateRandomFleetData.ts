export const generateRandomFleetData = (days = 30) => {
  const data = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // Random counts for each fleet type
    const sedan = Math.floor(Math.random() * 6); // 0-5
    const sprinter = Math.floor(Math.random() * 5); // 0-4
    const suv = Math.floor(Math.random() * 4); // 0-3
    const limosine = Math.floor(Math.random() * 2); // 0-1

    // Amount could be a weighted sum of fleet counts
    const amount = sedan * 500 + sprinter * 700 + suv * 800 + limosine * 1200;

    data.push({
      lastUpdatedDate: date.toISOString(),
      amount,
      sedan,
      sprinter,
      suv,
      limosine,
    });
  }

  return data;
};
////// the is the sample data structure that the above function generates, you can adjust the randomization logic as needed to better fit your use case
// const generateRandomFleetData = [
//   {
//     lastUpdatedDate: "2025-06-23T10:30:00Z",
//     amount: 2186,
//     sedan: 2,
//     sprinter: 1,
//     suv: 3,
//     limosine: 0,
//   },
//   {
//     lastUpdatedDate: "2025-06-24T10:30:00Z",
//     amount: 3186,
//     sedan: 3,
//     sprinter: 2,
//     suv: 1,
//     limosine: 1,
//   },
//   {
//     lastUpdatedDate: "2025-06-25T10:30:00Z",
//     amount: 4186,
//     sedan: 4,
//     sprinter: 3,
//     suv: 2,
//     limosine: 0,
//   },
//   {
//     lastUpdatedDate: "2025-06-26T10:30:00Z",
//     amount: 5186,
//     sedan: 5,
//     sprinter: 4,
//     suv: 3,
//     limosine: 2,
//   },
// ];
