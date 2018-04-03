
const MEETUP_API_URL = 'https://api.meetup.com';

export const getCommunityEvents = communityName => {
  return fetch(
    `${MEETUP_API_URL}/${communityName}/events?&sign=true&photo-host=public&page=20`,
    {mode: 'no-cors'}
  );

}

export const getEventRSVPS = ( communityName, eventId ) => {
  return fetch(
    `${MEETUP_API_URL}/${communityName}/events/${eventId}/rsvps?&sign=true&photo-host=public`,
    {mode: 'no-cors'}
  )
}
