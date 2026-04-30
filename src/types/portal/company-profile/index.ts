export type CompanyStat = {
  label: string;
  value: number;
};
export type CompanyItems = {
  companyId: string;
  name: string;
  logo: string;
  location: string;
  website: string;
  email: string;
  stats: CompanyStat[];
  statusName: string;
};
