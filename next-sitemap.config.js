const { NEXT_PUBLIC_URL } = require('./utils/constants');
const { getAllEvents } = require('./services/events.service');
const { getAllActions } = require('./services/actions.service')
const { getAllUpcomingEvents } = require('./services/upcomingEvents.service');
const { getAllMembers } = require('./services/members.service');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: NEXT_PUBLIC_URL || 'http://localhost:9220',
  generateRobotsTxt: true,
  sitemapSize: 7000,

  additionalPaths: async (config) => {
    const paths = [];

    // Events: /events/[slug]/details
    const events = await getAllEvents();
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
        changefreq: 'yearly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      });
    });

    return paths;
  },
};
