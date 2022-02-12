const uuid = require("uuid")
const Mutation = {
  addAnimal: (parent, { data }, { animals }, info) => {
    const newAnimal = {
      id: uuid.v4(),
      ...data,
    }
    animals.push(newAnimal)
    return newAnimal
  },
  updateAnimal: (parent, { id, data }, { animals }, info) => {
    const index = animals.findIndex((item) => item.id === id)
    const oldData = animals[index]

    const animalUpdated = {
      ...oldData,
      ...data,
    }
    animals[index] = animalUpdated
    return animalUpdated
  },
  deleteAnimal: (parent, { id }, { animals }, info) => {
    const index = animals.findIndex((item) => item.id == id)
    animals.splice(index, 1)
    return animals
  },
}
module.exports = Mutation
