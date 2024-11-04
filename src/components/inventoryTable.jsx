import React, { useEffect, useState } from "react";
import "@/components/inventoryTable.css"

const InventoryTable = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {

        const mockData = [
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "In Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "In Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "In Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "In Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "Out of Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "In Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "In Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "Out of Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "In Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "In Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "Out of Stock" },
            { name: "Product name", productId: "23102023", quantity: 5, expDate: "10/07/2024", category: "Electronics", status: "In Stock" },
          ];

        fetch("") 
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching data:", error));

        setTimeout(() => {
            setProducts(mockData);
          }, 500); 
    }, []);
  
    return (
        <div className="table-container">
        <div className="table-scrollable">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product name</th>
                <th>Product ID</th>
                <th>Quantity</th>
                <th>Exp. Date</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.productId}</td>
                  <td>{product.quantity}</td>
                  <td>{product.expDate}</td>
                  <td>{product.category}</td>
                  <td className={product.status === "In Stock" ? "in-stock" : "out-of-stock"}>
                    {product.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default InventoryTable;