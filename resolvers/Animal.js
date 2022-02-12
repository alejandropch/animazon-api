const Animal = {
  category: (parent, args, { categories }, info) => {
    const data = categories.find((item) => item.id === parent.category)
    return data
  },
}
module.exports = Animal
