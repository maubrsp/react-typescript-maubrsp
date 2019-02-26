import * as React from 'react';

interface IJobProps {
  match?: any;
  location?: any;
  classes?: any;
  vaga: any;
}

export class JobPage extends React.Component<IJobProps, {}> {
  // TODO

  public render(): JSX.Element {
    return (
      <div>
        <h1>Titlo da Vaga + Emrpesa</h1>
        <p>decrição</p>
      </div>
    );
  }
}
