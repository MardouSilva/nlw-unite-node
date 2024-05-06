import { faker } from '@faker-js/faker';
import { prisma } from "../../src/lib/prisma";

interface SeedAttendeeTypes{
    eventId: string
    quantity: number
}


export async function seedAttendee({ eventId, quantity }: SeedAttendeeTypes) {
    try{
        const name = faker.person.fullName();
        const email = faker.internet.email();

        const attendee = await prisma.attendee.create({
            data: {
                name,
                email,
                eventId
            }
        });

        if(Math.ceil(Math.random() * (2 - 0) + 0) === 1){
            prisma.checkIn.create({
                data:{
                    attendeeId: attendee.id,
                    createdAt: faker.date.recent({days: 10})
                }
            })
        }
    }catch(error){
        console.log('Ocorreu um erro ao registrar participantes!', error)
    }
}