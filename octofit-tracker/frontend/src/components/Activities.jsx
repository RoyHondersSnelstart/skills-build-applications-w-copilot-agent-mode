import ResourceTable from './ResourceTable.jsx'

function Activities() {
  return (
    <ResourceTable
      eyebrow="Training log"
      title="Activities"
      resource="activities"
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