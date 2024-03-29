import { v4 as uuidv4 } from "uuid";

const createProductWithID = (product, source) => {
  return {
    ...product,
    source,
    id: uuidv4(),
  };
};

export default createProductWithID;
