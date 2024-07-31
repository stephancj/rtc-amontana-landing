import pb from '../api/base';

export const getAllEvents = async () => {
    const events = await pb.collection('events').getFullList();
    return events;
}