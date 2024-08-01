import pb from './base.service';

export const getAllEvents = async () => {
    const events = await pb.collection('events').getFullList();
    return events;
}

export const getEvent = async (id) => {
    console.log('getEvent', id);
    const event = await pb.collection('events').getOne(`${id}`);
    console.log(event);
    return event;
}