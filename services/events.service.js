import pb from './base.service';

export const getAllEvents = async () => {
    const events = await pb.collection('events').getFullList();
    return events;
}