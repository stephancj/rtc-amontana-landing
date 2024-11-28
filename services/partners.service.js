import pb from './base.service';

export const getPartners = async () => {
    const partners = await pb.collection('partners').getFullList({sort: 'name'});
    return partners;
}