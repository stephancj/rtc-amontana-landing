import pb from './base.service';

export const getAllEvents = async () => {
    const events = await pb.collection('events').getFullList({sort: '-date'});
    return events;
}

export const getEvent = async (id) => {
    console.log('getEvent', id);
    const event = await pb.collection('events').getOne(`${id}`);
    console.log(event);
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