// 1
const { PrismaClient } = require("@prisma/client")

// 2
const prisma = new PrismaClient()

//3
async function main() {
//   const allLinks = await prisma.link.findMany()
  const newPet = await prisma.pet.upsert({
    where: {userid: 2},
    name: "Claude",
    type: "Cat",



  });

  console.log(allLinks)
}

//4
main()
  .catch(e => {
    throw e
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })
