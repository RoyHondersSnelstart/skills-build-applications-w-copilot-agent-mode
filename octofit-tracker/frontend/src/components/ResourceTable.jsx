import { useEffect, useState } from 'react'
import { normalizeCollection } from '../api.js'

function formatValue(value) {
  if (value === null || value === undefined || value === '') {
    return 'Not set'
  }

  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (typeof value === 'object') {
    return JSON.stringify(value)
  }

  return String(value)
}

function ResourceTable({ title, eyebrow, endpoint, columns }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadRecords() {
      try {
        setStatus('loading')
        const response = await fetch(endpoint, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const payload = await response.json()
        setRecords(normalizeCollection(payload))
        setError('')
        setStatus('ready')
      } catch (requestError) {
        if (requestError.name === 'AbortError') {
          return
        }

        setError(requestError.message)
        setStatus('error')
      }
    }

    loadRecords()

    return () => controller.abort()
  }, [endpoint])

  return (
    <section className="resource-view">
      <div className="resource-header">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
      </div>

      {status === 'loading' && <div className="state-message">Loading {title.toLowerCase()}...</div>}
      {status === 'error' && <div className="state-message error">{error}</div>}
      {status === 'ready' && records.length === 0 && (
        <div className="state-message">No records found.</div>
      )}

      {status === 'ready' && records.length > 0 && (
        <div className="table-wrap">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record._id ?? record.id ?? JSON.stringify(record)}>
                  {columns.map((column) => (
                    <td key={column.key}>{formatValue(record[column.key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ResourceTable