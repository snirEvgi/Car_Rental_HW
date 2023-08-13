import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';
import { ICar } from '../api';


export default function CarsTable(props: { cars: Array<ICar>}) {
    if (!props.cars[0]) return null;
    return <div>
        <div className="card">
            <DataTable value={props.cars} tableStyle={{ minWidth: '50rem' }}>
            {Object.keys(props.cars[0]).map((key) => {
              if (key === 'image') {
                return (
                  <Column
                    key={key}
                    field={key}
                    header={key}
                    body={(body: ICar) => (
                      <Avatar image={body.image} shape="circle" size="large" />
                    )}
                  />
                );
              } else {
                return <Column key={key} field={key} header={key} />;
              }
            })}
            </DataTable>
        </div>
    </div>
} 