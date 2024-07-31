import pb from '../api/base';

export const getAllMembers = async () => {
    const members = await pb.collection('members').getFullList();
    return members;
}