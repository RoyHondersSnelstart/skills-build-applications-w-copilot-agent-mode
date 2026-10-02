import ResourceTable from './ResourceTable.jsx'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourceTable
      eyebrow="Competition"
      title="Leaderboard"
      endpoint={leaderboardEndpoint}
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