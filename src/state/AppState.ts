import { Model } from './Helpers';

export interface IAppState {
  opportunity?: any;
  jobs?: any;
  materials?: any;
}

export const AppStateModel = Model<IAppState>({
  jobs: null,
  opportunity: null,
  materials: null
});

export class AppState extends AppStateModel {
  public static UTILITY = 'utility';
  public jobs: any;
  public materials: any;
  public opportunity: any;
}
