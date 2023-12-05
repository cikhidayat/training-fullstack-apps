import EventContent from "@/components/events-detail/EventContent";
import { filterDetail } from "@/providers/EventRepository";
import { useRouter } from "next/router";

function EventDetailPage() {
  const router = useRouter();
  const filteredData = router.query.id as string;

  const filteredDetail = filterDetail(filteredData)

  return <EventContent items={filteredDetail} />;
}

export default EventDetailPage;