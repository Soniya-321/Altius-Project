import React, {useState} from 'react'
import InvoiceListComponent from './components/InvoiceListComponent'
import InvoiceDetailComponent from './components/InvoiceDetailComponent'

const App = () => {
  const [invoices, setInvoices] = useState([])
  const [selectedInvoice, setSelectedInvoice] = useState(null)

  const addInvoice = invoice => {
    setInvoices([...invoices, {...invoice, id: Date.now().toString()}])
  }

  const updateInvoice = updatedInvoice => {
    setInvoices(
      invoices.map(inv =>
        inv.id === updatedInvoice.id ? updatedInvoice : inv,
      ),
    )
  }

  const deleteInvoice = id => {
    setInvoices(invoices.filter(inv => inv.id !== id))
  }

  return (
    <div>
      {!selectedInvoice ? (
        <InvoiceListComponent
          invoices={invoices}
          onAdd={() => setSelectedInvoice({})}
          onEdit={invoice => setSelectedInvoice(invoice)}
          onDelete={deleteInvoice}
        />
      ) : (
        <InvoiceDetailComponent
          invoice={selectedInvoice}
          onSave={invoice => {
            if (invoice.id) {
              updateInvoice(invoice)
            } else {
              addInvoice(invoice)
            }
            setSelectedInvoice(null)
          }}
          onCancel={() => setSelectedInvoice(null)}
        />
      )}
    </div>
  )
}

export default App
