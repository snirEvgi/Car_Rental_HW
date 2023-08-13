import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IRent } from '../api';


export default function RentsTable(props: { rents: Array<IRent>}) {
    if (!props.rents[0]) return null;
    return <div>
        <div className="card">
            <DataTable value={props.rents}  tableStyle={{ minWidth: '50rem' }}>
                {
                    Object.keys(props.rents[0]).map(key => {
                        return <Column key={key} field={key} header={key}></Column>
                    })
                    
                }
            </DataTable>
        </div>
    </div>
} 