import { Model } from './Helpers';

export interface IAppState {
  jobs?: any;
  materials?: any;
}

export const AppStateModel = Model<IAppState>({
  jobs: null,
  materials: null
});

export class AppState extends AppStateModel {
  public static UTILITY = 'utility';
  public jobs: any;
  public materials: any;
}
