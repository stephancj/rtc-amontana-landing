


// const PocketBase = require('pocketbase');

// const pb = new PocketBase(API_BASE_URL);
const axios = require('axios');


const getAllEvents = async () => {
    // const events = await pb.collection('events').getFullList({sort: '-date'});
    const events = await axios.get(`${'https://rtc-amontana.pockethost.io'}/api/collections/events/records?sort=-date`)
    return events.data.items;
}

const getAllActions = async () => {
    // return await pb.collection('actions').getFullList({expand: 'aof', sort: '-date'});
    return (await axios.get(`${'https://rtc-amontana.pockethost.io'}/api/collections/actions/records?sort=-date&expand=aof`)).data.items
}

const getAllUpcomingEvents = async () => {
    // const upcomingEvents = await pb.collection('upcoming').getFullList({sort: '-date'});
    const upcomingEvents = await axios.get(`${'https://rtc-amontana.pockethost.io'}/api/collections/upcoming/records?sort=-date`)
    return upcomingEvents.data.items;
}

const getAllMembers = async () => {
    // const members = await pb.collection('members').getFullList({sort: 'fullname'});
    const members = await axios.get(`${'https://rtc-amontana.pockethost.io'}/api/collections/members/records?sort=fullname`)
    return members.data.items;
}
const siteUrl = 'https://rotaractamontana.org';

const config = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,

  additionalPaths: async () => {
    const paths = [];

    // Events: /events/[slug]/details
    const events = await getAllEvents();
    console.log('events', events)
    events.forEach((event) => {
      paths.push({
        loc: `/events/${event.slug}/details`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    });

    // Actions: /actions/[slug]/details
    const actions = await getAllActions();
    actions.forEach((action) => {
      paths.push({
        loc: `/actions/${action.slug}/details`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    // Upcoming events: /upcoming/[slug]/details
    const upcoming = await getAllUpcomingEvents();
    upcoming.forEach((upcomingEvent) => {
      paths.push({
        loc: `/upcoming/${upcomingEvent.slug}/details`,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      });
    });

    // Members: /team/[slug]
    const members = await getAllMembers();
    members.forEach((member) => {
      paths.push({
        loc: `/team/${member.slug}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      });
    });

    return paths;
  },
};

module.exports = config;
