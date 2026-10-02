import ResourceTable from './ResourceTable.jsx'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <ResourceTable
      eyebrow="Profiles"
      title="Users"
      endpoint={usersEndpoint}
      columns={[
        { key: 'displayName', label: 'Name' },
        { key: 'username', label: 'Username' },
        { key: 'teamName', label: 'Team' },
        { key: 'fitnessGoal', label: 'Goal' },
      ]}
    />
  )
}

export default Users