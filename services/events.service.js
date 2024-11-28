import pb from './base.service';

export const getAllEvents = async () => {
    const events = await pb.collection('events').getFullList({sort: '-date'});
    return events;
}

export const getEvent = async (id) => {
    const event = await pb.collection('events').getOne(`${id}`);
    return event;
}

export const getEventBySlug = async (slug) => {
    const event = await pb.collection('events').getOne(`slug == "${slug}"`);
    return event;
}

export const getPreviousEvent = async (date) => {
    const event = await pb.collection('events').getFirstListItem('date < "date"');
    return event;
}

export const getNextEvent = async (date) => {
    const event = await pb.collection('events').getFirstListItem('date > "date"');
    return event;
}