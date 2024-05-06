import { prisma } from "../../src/lib/prisma";
import { generateSlug } from "../../src/utils/generete-slug"
import { faker } from '@faker-js/faker';

export async function seedEvent() {
    try{
        const title = faker.company.catchPhrase();
        const details = faker.lorem.paragraph();
        const maximumAttendees = faker.number.int({ min: 50, max: 200 });
        const slug = generateSlug(title);

        const event = await prisma.event.create({
            data: {
                title,
                slug,
                details,
                maximumAttendees
            }
        });

        return event
    } catch (error) {
        console.error('Erro ao criar evento', error);
    }
}