const _baseURL = 'https://delphai-api.azure-api.net';

const options = {
  method: 'GET',
  headers: {
    "X-Subscription-Key": "b6ef068dbdca4c8480976ceaa386e6f5"
  }
}

interface IQuery {
  [key:string]: string;
}

export const getAllCompanies = async (query: IQuery) => {
  const params = new URLSearchParams(query).toString();
  const res = await fetch(`${_baseURL}/case-study/companies?${params}`, options);
  return res.json();
}

export const getCompany = async (id: string) => {
  const res = await fetch(`${_baseURL}/case-study/companies/${id}`, options);
  return res.json();
}