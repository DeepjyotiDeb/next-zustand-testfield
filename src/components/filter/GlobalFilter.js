
export default function GlobalFilter({ filter, setFilter }) {
  return (
    <span>
        Search: {' '}
        <input value={filter||""}
        onChange={e => setFilter(e.target.value)}></input>
    </span>
    )
}