

import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();


async function main() {
    try {
        await database.category.createMany({


            data: [
                { name: "Intermediate" },
                { name: "Advanced" },
                { name: "For Trainers" },
                { name: "Training gear" },
                { name: "Dribbling" },
                { name: "Shooting" },
                { name: "Explosive Workouts" },
                { name: "Layups" },
            ]
        })
          console.log("Success");
    }

    catch (error) {

        console.log("Error seeding the database categories", error);
    }

    finally {
        await database.$disconnect();
    }
}


main()