export const API_BASE_URL = 'https://rtc-amontana.pockethost.io';
export const FILE_URL = (collectionId, id, filename) => `${API_BASE_URL}/api/files/${collectionId}/${id}/${filename}`;