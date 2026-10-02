import ResourceTable from './ResourceTable.jsx'

function Leaderboard() {
  return (
    <ResourceTable
      eyebrow="Competition"
      title="Leaderboard"
      resource="leaderboard"
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'username', label: 'User' },
        { key: 'teamName', label: 'Team' },
        { key: 'points', label: 'Points' },
      ]}
    />
  )
}

export default Leaderboard