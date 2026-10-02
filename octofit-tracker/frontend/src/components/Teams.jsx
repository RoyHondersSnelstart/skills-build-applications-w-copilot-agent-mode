import ResourceTable from './ResourceTable.jsx'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  return (
    <ResourceTable
      eyebrow="Groups"
      title="Teams"
      endpoint={teamsEndpoint}
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