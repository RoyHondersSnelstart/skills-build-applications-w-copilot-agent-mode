import ResourceTable from './ResourceTable.jsx'

function Users() {
  return (
    <ResourceTable
      eyebrow="Profiles"
      title="Users"
      resource="users"
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