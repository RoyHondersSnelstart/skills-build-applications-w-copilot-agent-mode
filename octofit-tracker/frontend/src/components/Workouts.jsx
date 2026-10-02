import ResourceTable from './ResourceTable.jsx'

function Workouts() {
  return (
    <ResourceTable
      eyebrow="Suggestions"
      title="Workouts"
      resource="workouts"
      columns={[
        { key: 'title', label: 'Workout' },
        { key: 'focusArea', label: 'Focus' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Minutes' },
      ]}
    />
  )
}

export default Workouts