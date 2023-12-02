import EventContent from "@/components/events-detail/EventContent";
import { filterDetail } from "@/providers/EventRepository";
import { useRouter } from "next/router";

function EventDetailPage() {
  const router = useRouter();
  const filteredData = router.query.slug; // Assuming slug is an array of strings

  // If slug is an array, pass it to filterDetail
  const filteredDetail =
    Array.isArray(filteredData) ? filterDetail(filteredData) : [];

  console.log(filteredDetail);

  return <EventContent items={filteredDetail} />;
}

export default EventDetailPage;
