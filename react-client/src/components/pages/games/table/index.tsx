import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IGame } from '../api';


export default function GamesTable(props: { games: Array<IGame>}) {
    if (!props.games[0]) return null;
    return <div>
        <div className="card">
            <DataTable value={props.games} tableStyle={{ minWidth: '50rem' }}>
                {
                    Object.keys(props.games[0]).map(key => {
                        return <Column field={key} header={key}></Column>
                    })
                    
                }
            </DataTable>
        </div>
    </div>
} 