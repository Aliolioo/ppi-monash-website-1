// ============================================================================
// Event helpers — shared by the Events listing, EventDetail page, and the
// Home page event teaser so the upcoming/past split and sorting logic only
// lives in one place.
// ============================================================================

export const UPCOMING_STATUSES = ["upcoming", "open", "closed"];
export const PAST_STATUSES = ["completed", "archived"];

export function isUpcomingEvent(event) {
  return UPCOMING_STATUSES.includes(event.status);
}

export function isPastEvent(event) {
  return PAST_STATUSES.includes(event.status);
}

export function sortByDateAsc(events) {
  return [...events].sort((a, b) => a.date.localeCompare(b.date));
}

export function sortByDateDesc(events) {
  return [...events].sort((a, b) => b.date.localeCompare(a.date));
}

// Groups events by the year in their ISO date, newest year first.
// Returns an array of [year, events[]] pairs (events within a year keep
// whatever order they were passed in, so sort before grouping).
export function groupByYear(events) {
  const groups = new Map();
  events.forEach((event) => {
    const year = event.date.slice(0, 4);
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(event);
  });
  return [...groups.entries()].sort((a, b) => b[0].localeCompare(a[0]));
}

export function findEventById(events, id) {
  return events.find((event) => event.id === id);
}

export function getRelatedEvents(event, allEvents, count = 3) {
  return sortByDateDesc(
    allEvents.filter((e) => e.id !== event.id && e.category === event.category)
  ).slice(0, count);
}
