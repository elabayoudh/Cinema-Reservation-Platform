import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const { createdb } = require('mysql')

const db = createdb({
  host: "localhost",
  user: "root",
  password: "",
  database: "cinemaDB",
  connectionLimit: 10
})


async function main() {
    // you will write your prisma client queries here 

      const user = await prisma.user.create({
        data:{
          user_id:102, 
          nom : "AAA",
          prenom : "CCC",
          role:"utilisateur",
          email :"test02@prisma.com" , 
        },
      })

      /*const reservation = await prisma.reservation.create({
        data:{
          idRES:01,

        },
      })*/
      
} 

main()
    .catch(e => {
        console.error(e.message)
    }) 
    .finally(async() => {
      await prisma.$disconnect() 
    })

   