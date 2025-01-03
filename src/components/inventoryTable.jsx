import React from "react";
import "@/components/inventoryTable.css";

const InventoryTable = ({ products }) => {
  return (
    <div className="table-container">
      <div className="table-scrollable">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Quantity</th>
              <th>Exp. Date</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.productId || `product-${index}`}>
                <td>{product.serialNo}</td>
                <td>{product.productName}</td>
                <td>{product.productId}</td>
                <td>{product.quantity}</td>
                <td>{new Date(product.expiryDate).toLocaleDateString()}</td>
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
