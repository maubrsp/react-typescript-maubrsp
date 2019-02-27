import { match } from 'react-router';

export interface IApplicationProps {
  fetchJobs: (context?: any) => any;
  fetchOpportunitys: (context?: any, actions?: any) => any;
  createMaterial: (content: any) => any;
  getMaterial: (id: any) => any;
  fetchMaterials: (context?: any) => any;
  updateMaterial: (context: any) => any;
  deleteMaterial: (context: any) => any;
  match: match<any>;
  location: any;
  history: any;
  jobs: any;
  materials: any;
  opportunity: any;
}
