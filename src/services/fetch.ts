import { cards } from "../data";
import { getRandom } from ".";

export const fetchRandomCard = async () => {
  try {
    return getRandom(cards);
  } catch (e) {
    console.log(e);
  }
};
