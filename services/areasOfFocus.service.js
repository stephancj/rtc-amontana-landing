import pb from './base.service';

export const getAllAreasOfFocus = async () => {
    return await pb.collection('areas_of_focus').getFullList({sort: 'created'});
}