import pb from './base.service';

export const getAllUpcomingEvents = async () => {
    const upcomingEvents = await pb.collection('upcoming').getFullList({sort: '-date'});
    return upcomingEvents;
}

export const getUpcomingEvent = async (id) => {
    const upcomingEvent = await pb.collection('upcoming').getOne(`${id}`);
    return upcomingEvent;
}