interface IClassifications {
  sector: string;
  size: string;
  structure: string;
}

interface IEmployeeCount {
  exact: number | null;
  min: number | null;
  max: number | null;
}

interface IHeadquarters {
  city: string;
  continent: string;
  country: string;
  latitude: number;
  longitude: number;
  state: string;
  zipCode: any;
}

interface IRevenue {
  totalRevenue: number;
  currency: string;
}

interface IRevenueData {
  2017: IRevenue;
  2018: IRevenue;
  2019: IRevenue;
  2020: IRevenue;
  2021: IRevenue;
}

interface ISocialMedia {
  facebook: string;
  linkedin: string;
  twitter: string;
}

export interface ICompany {
  categories: string[];
  companyProducts: string[];
  classifications: IClassifications;
  employeeCount: IEmployeeCount;
  headquarters: IHeadquarters;
  revenueData: IRevenueData;
  socialMedia: ISocialMedia;
  companyId: string;
  companyType: string;
  description: string;
  shortDescription: string;
  name: string;
  url: string;
}