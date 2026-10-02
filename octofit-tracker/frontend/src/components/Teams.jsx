import ResourceTable from './ResourceTable.jsx'

function Teams() {
  return (
    <ResourceTable
      eyebrow="Groups"
      title="Teams"
      resource="teams"
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'description', label: 'Description' },
        { key: 'memberCount', label: 'Members' },
        { key: 'captainUsername', label: 'Captain' },
      ]}
    />
  )
}

export default Teams