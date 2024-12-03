import Entry from "./component/Entry"
import Header from "./component/Header"
import data from "./data"
export default function App(){
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })
    return(
        <>
        <Header/>
        <main className="container">
        {entryElements}
        </main>
        </>
    )
}