const Category = {
  animals: (parent, args, { animals }, info) => {
    const { id: categoryID } = parent
    const data = animals.filter((item) => item.category == categoryID)
    return data
  },
}
module.exports = Category
