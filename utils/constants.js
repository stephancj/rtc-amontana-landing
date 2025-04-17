export const API_BASE_URL = 'https://rtc-amontana.pockethost.io';
export const NEXT_PUBLIC_URL = 'https://rotaractamontana.vercel.app';
export const FILE_URL = (collectionId, id, filename) => `${API_BASE_URL}/api/files/${collectionId}/${id}/${filename}`;
export const BASIN_URL = 'https://usebasin.com/f/6ad3ce166881';


export const SHARE_TO_FACEBOOK = (url) => `https://www.facebook.com/sharer.php?u=${url}`;
export const SHARE_TO_X = (url) => `https://x.com/intent/post?url=${url}`;
export const SHARE_TO_THREADS = (url) => `https://threads.net/intent/post?url=${url}`;
export const SHARE_TO_LINKEDIN = (url) => `https://www.linkedin.com/feed/?shareActive=true&view=post&shareUrl=${url}`;