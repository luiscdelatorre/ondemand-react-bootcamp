const getSearchQuery = (params) => {
  const query = params.reduce((previousParam, param) => {
    const currentParam = Object
      .entries(param)
      .reduce((previousValue, [key, rawValue]) => {
        const value = encodeURIComponent(`${rawValue}`)
        return previousValue + `&${key}=${value}`
      }, '')
    return previousParam + currentParam
  }, '')

  return query
}

export { getSearchQuery }
