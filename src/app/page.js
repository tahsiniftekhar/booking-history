import {
  Breadcrumbs,
  FlightDetails,
  FlightHistoryCard,
} from "@/src/components";
import { Murecho } from "next/font/google";

const murecho = Murecho({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={murecho.className}>
      <nav className="bg-white p-10 mb-10"></nav>
      <div className="container mx-auto flex">
        <div className="w-1/5 bg-white rounded-lg p-24 me-10"></div>
        <div className="w-4/5">
          <Breadcrumbs />
          <FlightHistoryCard />
          <FlightDetails />
        </div>
      </div>
    </main>
  );
}
