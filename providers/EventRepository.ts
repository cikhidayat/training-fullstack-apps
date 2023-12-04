import data from "@/events-data.json"

export type Event = {
    id: string;
    title: string;
    description: string;
    image: string;
    location: string;
    date: string;
    isFeatured: boolean;
}

export function allEvents(): Event[] {
    return data;
}

export function filterEvent(year: number, month: string) {
    return data.filter((event) => {
        const eventDate = event.date.split(" "); // 2023-12-5 => [2023, 12, 5]
        return +eventDate[2] === year && eventDate[0] === month
    })
}

// export function filterDetail(idDetail: string) {
//     return data.filter((event) => {
//         return idDetail === event.id
//     })
// }

export function filterDetail(idDetails: string) {
    return data.filter((event) => {
      return idDetails === event.id;
    });
  }
  

export function featuredEvents(): Event[] {
    return data.filter((event) => event.isFeatured)
}