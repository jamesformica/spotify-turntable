const isAlive = (name) => {
  const chars = name.split('')

  const charTotal = chars.reduce((agg, curr) => {
    const total = agg + curr.charCodeAt()
    return total
  }, 0)

  return charTotal % 2 === 0
}

const decideFate = (e, name, dispatch) => {
  e.preventDefault()

  const victim = name.trim()

  if (!victim) return null

  return isAlive(victim)
    ? dispatch({ type: 'ALIVE' })
    : dispatch({ type: 'DEAD' })
}

export default decideFate
