const getSearchQuery = (params) => {
  let query = ''
  params.forEach(param => {
    Object.keys(param).forEach(key => {
      const value = encodeURIComponent(`${param[key]}`)
      query += `&${key}=${value}`
    })
  })
  
  return query
}

export { getSearchQuery }
