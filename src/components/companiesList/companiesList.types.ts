export interface ICompaniesList {
  companyId: string;
  description: string;
  employeeCount: string;
  headquarters: string;
  name: string;
  reference: string;
  revenue: string;
  url: string;
  founded: number;
  score: number;
}

export interface CompaniesListProps {
  companiesList: ICompaniesList[];
}