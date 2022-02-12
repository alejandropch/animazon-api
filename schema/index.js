const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type MainCard {
    title: String
    image: String
    price: Float
  }
  type Animal {
    id: ID!
    title: String!
    image: String!
    price: String!
    desc: [String!]!
    stock: Int!
    onSale: Boolean
    slug: String
    category: Category
  }
  input AnimalInput {
    title: String
    image: String
    price: String
    desc: [String!]
    stock: Int
    onSale: Boolean
    slug: String
    category: String
  }
  type Category {
    id: ID!
    image: String
    category: String!
    slug: String!
    getAnimalsByCategory: [Animal!]!
  }
  type Mutation {
    addAnimal(data: AnimalInput!): Animal
    updateAnimal(id: ID!, data: AnimalInput!): Animal
    deleteAnimal(id: ID!): [Animal]
  }
  type Query {
    animals: [Animal]
    mainCards: [MainCard]
    getOneAnimalById(id: ID!): Animal
    animal(slug: String!): Animal
    category(slug: String!): Category!
    categories: [Category]
  }
`
module.exports = typeDefs
