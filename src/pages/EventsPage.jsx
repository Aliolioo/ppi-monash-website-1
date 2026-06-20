import { Events } from "../components/Events";
import { EventFeedback } from "../components/EventFeedback";
import { Seo } from "../components/Seo";

export default function EventsPage() {
  return (
    <>
      <Seo
        title="Events"
        description="Upcoming and past events from PPI Monash Malaysia — cultural celebrations, academic sessions, sports, and community gatherings."
        path="/events"
      />
      <Events />
      <EventFeedback />
    </>
  );
}
