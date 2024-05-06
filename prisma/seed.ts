import { prisma } from '../src/lib/prisma'
import { generateSlug } from '../src/utils/generete-slug'

async function seed(){
    await Promise.all([
        prisma.event.create({
            data: {
                id: '1c692ddc-6256-4e9f-bc44-7f9b2b3edc93',
                title: 'Unite Summit',
                slug: generateSlug('Unite Summit'),
                details: 'Um evento para devs apaixonados(as) por códigos!',
                maximumAttendees: 120
            }
        }),
        prisma.attendee.create({
            data: {
                id: 1,
                name: 'Marcos Douglas',
                email: 'mardousilva@gmail.com',
                eventId: '1c692ddc-6256-4e9f-bc44-7f9b2b3edc93'
            }
        })
    ])
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})