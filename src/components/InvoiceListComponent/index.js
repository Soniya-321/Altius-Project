import React, {useState} from 'react'
import './index.css'

const InvoiceListComponent = ({invoices, onAdd, onEdit, onDelete}) => {
  const [listView, setListView] = useState(false)
  const onClickInvoice = () => {
    setListView(true)
  }
  return (
    <div className="app-container">
      <ul>
        <li onClick={onClickInvoice}>Invoices</li>
      </ul>
      {listView && (
        <div className="right-container">
          <button onClick={onAdd}>Add</button>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Invoice Number</th>
                <th>Customer Name</th>
                <th>Billing Address</th>
                <th>ShippingAddress</th>
                <th>GSTIN</th>
                <th>Items</th>
                <th>BillSundrys</th>
                <th>TotalAmount</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map(invoice => (
                <tr key={invoice.id}>
                  <td>{invoice.id || 'N/A'}</td>
                  <td>{invoice.date || 'N/A'}</td>
                  <td>{invoice.invoiceNumber || 'N/A'}</td>
                  <td>{invoice.customerName || 'N/A'}</td>
                  <td>{invoice.billingaddress || 'N/A'}</td>
                  <td>{invoice.shippingaddress || 'N/A'}</td>
                  <td>{invoice.gstin || 'N/A'}</td>
                  <td>{invoice.item || 'N/A'}</td>
                  <td>{invoice.billsudrys || 'N/A'}</td>
                  <td>{invoice.totalamount || 'N/A'}</td>
                  <td>
                    <button onClick={() => onEdit(invoice)}>Edit</button>
                    <button onClick={() => onDelete(invoice.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default InvoiceListComponent
