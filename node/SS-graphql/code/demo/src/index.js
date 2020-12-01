const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
// 1


// 2
const resolvers = {
    Query: {
      pets: () => {
        return pets
      },

    },
    Mutation: {
        newPet()
    }
  }

// 3
const prisma = new PrismaClient()

const server = new GraphQLServer({
  resolvers,
  context: {
    prisma,
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))