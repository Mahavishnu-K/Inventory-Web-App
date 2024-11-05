import Navbar from "../components/navbar";

function Dashboard(){

    return(
        <>
            <div style={{ display: 'flex' }}>
                <Navbar/>
                <div style={{ flex: 1, padding: '20px' }}>
                </div>
            </div>
        </>
    )
}

export default Dashboard