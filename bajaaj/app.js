import './App.css';
import bajaj from './record.json'
function App(){
    return (
        <div className="App">
            <br></br>
            {
                bajaj && bajaj.map(record=>{
                    return(
                        <div className="box" key={record.id}>
                            <strong>{record.name}</strong>
                            {record.designation}
                            {record.projects &&record.projects.map( data =>{
                                return(
                                    <div key={record.id}>
                                        {data.name}
                                        {data.description}
                                        {data.teams}
                                    </div>
                                    
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}