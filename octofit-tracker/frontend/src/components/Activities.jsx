import ResourceTable from './ResourceTable.jsx'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  return (
    <ResourceTable
      eyebrow="Training log"
      title="Activities"
      endpoint={activitiesEndpoint}
      columns={[
        { key: 'username', label: 'User' },
        { key: 'type', label: 'Activity' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'caloriesBurned', label: 'Calories' },
        { key: 'activityDate', label: 'Date' },
      ]}
    />
  )
}

export default Activities