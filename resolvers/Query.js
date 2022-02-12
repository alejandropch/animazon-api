const Query = {
  animal: (parent, args, { animals }, info) => {
    const { slug } = args
    const data = animals.find((item) => item.slug === slug)
    return data
  },
  animals: (parent, args, { animals }, info) => animals,
  categories: (parent, args, { categories }, info) => categories,
  category: (parent, args, { categories }, info) => {
    const { slug } = args
    const category = categories.find((item) => item.slug == slug)
    return category
  },
  getOneAnimalById: (parent, args, { animals }, info) => {
    const { id } = args
    const data = animals.find((item) => item.id === id)
    return data
  },
  mainCards: (parent, args, { mainCards }, info) => mainCards,
}

module.exports = Query
