import React, {useState, useEffect} from 'react'
import './index.css'
const InvoiceDetailComponent = ({invoice, onSave, onCancel}) => {
  const [form, setForm] = useState({
    id: '',
    invoiceNumber: '',
    customerName: '',
    billingAddress: '',
    shippingAddress: '',
  })

  useEffect(() => {
    if (invoice) {
      setForm(invoice)
    }
  }, [invoice])

  const handleChange = e => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <div>
      <h1>{form.id ? 'Edit Invoice' : 'Add Invoice'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Id:</label>
          <input
            type="text"
            name="id"
            value={form.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Invoice Number:</label>
          <input
            type="text"
            name="invoiceNumber"
            value={form.invoiceNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Billing Address:</label>
          <input
            type="text"
            name="billingAddress"
            value={form.billingAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Shipping Address:</label>
          <input
            type="text"
            name="shippingAddress"
            value={form.shippingAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Items:</label>
          <input
            type="text"
            name="items"
            value={form.items}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bill Sundry:</label>
          <input
            type="text"
            name="billsundry"
            value={form.billsundry}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Total Amount:</label>
          <input
            type="text"
            name="totalamount"
            value={form.totalamount}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default InvoiceDetailComponent
