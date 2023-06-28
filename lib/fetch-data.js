export const fetchData = async (setData, collection,option) => {
  const response = await fetch(`/api/${collection}`);
  const data = await response.json();
  setData(data);
}