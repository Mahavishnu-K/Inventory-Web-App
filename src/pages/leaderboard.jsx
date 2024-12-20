import React, { useState } from 'react';
import Navbar from "../components/navbar";
import '../styles/leaderboard.css'

const Leaderboard = () => {
    const initialData = [
        { supplierName: 'Global Trade Co.', trustPoints: 950 },
        { supplierName: 'Prime Wholesale Ltd.', trustPoints: 850 },
        { supplierName: 'EcoSupply Partners', trustPoints: 800 },
        { supplierName: 'NextGen Distributors', trustPoints: 750 },
        { supplierName: 'Greenfield Supplies', trustPoints: 780 },
        { supplierName: 'Metro Logistics', trustPoints: 730 },
        { supplierName: 'Alliance Goods Co.', trustPoints: 710 },
        { supplierName: 'BlueSky Procurement', trustPoints: 690 },
        { supplierName: 'Urban Supply Chain', trustPoints: 700 },
        { supplierName: 'Continental Imports', trustPoints: 650 },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState(''); 

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortedDataWithPosition = initialData
        .sort((a, b) => 
            sortOrder === 'asc' ? a.trustPoints - b.trustPoints : b.trustPoints - a.trustPoints
        )
        .map((entry, index) => ({
            ...entry,
            position: sortOrder === 'asc' ? initialData.length - index : index + 1,
        }));

    const filteredData = sortedDataWithPosition.filter(entry => 
        entry.supplierName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Navbar/>
                <div style={{ flex: 1, padding: '20px' }}>
                    <div className='leaderPage'>
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
                                <option value="desc">Descending</option>
                                <option value="asc">Ascending</option>
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
            </div>
        </>
    );
};

export default Leaderboard;
