export const fetchData = async (setData, collection) => {
  const response = await fetch(`/api/${collection}`);
  const data = await response.json();
  setData(data);
}