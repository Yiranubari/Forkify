export const getJSON = async function (url) {
  const res = await fetch(
    // 'https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e8673'
    `${API_URL}/${id}`
  );
  const data = await res.json();
  if (!res.ok) throw new Error(`${data.message} (${res.status})`);
};
