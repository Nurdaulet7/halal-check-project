export default function sortDataByCode(data) {
  const sortedData = [...data];

  const compareCodes = (a, b) => {
    const codeA = a.code.toLowerCase();
    const codeB = b.code.toLowerCase();
    if (codeA < codeB) {
      return -1;
    }
    if (codeA > codeB) {
      return 1;
    }
    return 0;
  };

  sortedData.sort(compareCodes);

  return sortedData;
}
