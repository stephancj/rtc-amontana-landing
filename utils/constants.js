export const API_BASE_URL = 'https://rtc-amontana.pockethost.io';
export const FILE_URL = (collectionId, id, filename) => `${API_BASE_URL}/api/files/${collectionId}/${id}/${filename}`;
export const SHARE_TO_FACEBOOK = (url) => `https://www.facebook.com/sharer.php?u=${url}`;