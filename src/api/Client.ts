type apiType = {
  endPoint: string;
  option?: RequestInit;
};

const URL = import.meta.env.VITE_API_URL;

export async function apiCall({ endPoint, option }: apiType) {
  const response = await fetch(`${URL}${endPoint}`, option);

  if (!response) {
    throw new Error("Could not fetch any data.");
  }

  return response.json();
}
