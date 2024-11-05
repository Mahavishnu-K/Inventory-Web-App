import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import '@/styles/leaderboard.css'

const Leaderboard = () => {

    const initialData = [
        { supplierName: 'Supplier A', trustPoints: 950 },
        { supplierName: 'Supplier B', trustPoints: 850 },
        { supplierName: 'Supplier C', trustPoints: 800 },
        { supplierName: 'Supplier D', trustPoints: 750 },
        { supplierName: 'Supplier E', trustPoints: 780 },
        { supplierName: 'Supplier F', trustPoints: 730 },
        { supplierName: 'Supplier G', trustPoints: 710 },
        { supplierName: 'Supplier H', trustPoints: 690 },
        { supplierName: 'Supplier I', trustPoints: 670 },
        { supplierName: 'Supplier J', trustPoints: 650 },
    ];

    const [leaderboardData, setLeaderboardData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setLeaderboardData((prevData) => {
                const updatedData = prevData.map(entry => ({
                    ...entry,
                    trustPoints: entry.trustPoints,
                }));

                updatedData.sort((a, b) => sortOrder === 'asc' ? a.trustPoints - b.trustPoints : b.trustPoints - a.trustPoints);

                return updatedData.map((entry, index) => ({
                    ...entry,
                    position: index + 1,
                }));
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [sortOrder]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    const filteredData = leaderboardData.filter(entry =>
        entry.supplierName.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return(
        <>
            <div style={{ display: 'flex' }}>
                <Navbar/>
                <div style={{ flex: 1, padding: '20px' }}>
                    <h1 className="leaderboard-title">Leader Board</h1>

                    <div className="leaderboard-controls">
                            <input
                                type="text"
                                placeholder="Search Supplier"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="leaderboard-search"
                            />
                            <select
                                value={sortOrder}
                                onChange={handleSortOrderChange}
                                className="leaderboard-sort"
                            >
                                <option value="" disabled>Sort by</option>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>

                        </div>
                    <div className="leaderboard-container">

                        <table className="leaderboard-table">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Position</th>
                                    <th>Supplier Name</th>
                                    <th>Trust Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((entry, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{entry.position}</td>
                                        <td>{entry.supplierName}</td>
                                        <td>{entry.trustPoints}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leaderboard