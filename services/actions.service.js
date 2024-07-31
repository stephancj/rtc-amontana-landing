import pb from './base.service';

export const getAllActions = async () => {
    return await pb.collection('actions').getFullList({expand: 'aof'});
}