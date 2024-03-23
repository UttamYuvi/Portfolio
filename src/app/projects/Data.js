export const Data = [
  {
    project: "DocXvision",
    heading: "Freelancing Project",
    subData:
      "This is a Freelancing Project of Dynamic Document Data extraction and Analysis. We worked in a team with 2 years of experience and I was handling the front-end and connectivity of the project.",
    image: "docxvision.png",
    link: "https://docxvision.com/",
  },
  {
    project: "TUG",
    heading: "TUG-The Ultimate Garments an E-Commarce Website",
    subData:
      "This is the E-commerce website a full stack website built in React named (TUG - The Ultimate Garments). I developed and implemented JavaScript React functional components, resulting in a 40% improvement in website load time and enhanced user experience.",
    image: "tug.png",
    link: "https://nimble-pithivier-24f485.netlify.app/",
  },
  {
    project: "Restaurant",
    heading: "Restaurant Management System POS",
    subData:
      "A POS (Point Of Sales) system for any restaurant to manage there foods category, servants data, billing printout and scan to order food on your table and bill out to you mobile directly.",
    image: "restaurant.png",
    link: "https://github.com/UttamYuvi/ServeHub-Restaurenting",
  },
];

const [DocXvision, TUG, Restaurant] = Data;
export const initialTabs = [DocXvision, TUG, Restaurant];

function getNextIngredient(eduData) {
  const existing = new Set(eduData);
  return Data.find((data) => !existing.has(data));
}
