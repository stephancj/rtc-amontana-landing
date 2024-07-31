import pb from './base.service';

export const getAllMembers = async () => {
    const members = await pb.collection('members').getFullList();
    return members;
}