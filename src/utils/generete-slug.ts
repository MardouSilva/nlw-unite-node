export function generateSlug(text: string){
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[\^w\s-]/g, '')
        .replace(/\s+/g, '-')
}