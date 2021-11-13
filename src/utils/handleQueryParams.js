exports.getExpandAssociations = (expandString) => {
  if (!expandString.length) {
    return []
  }

  let expandAssociations = expandString.split(',')
  expandAssociations = expandAssociations.map(item => {
    return {
      association: item,
    }
  })

  return expandAssociations
}