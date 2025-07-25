import pb from './base.service';

export const getAllFaqs = async () => {
    return await pb.collection('faqs').getFullList({
        sort: 'rank',
    });
}; 