import { useState } from "react";
import { shows } from "../data/shows";
import type { Show } from "../data/shows";

// Helper: format date nicely
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// Reusable PaginatedList with fade transition
function PaginatedList({
  shows,
  pageSize = 5,
  showTickets = false,
}: {
  shows: Show[];
  pageSize?: number;
  showTickets?: boolean;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false); // fade state
  const totalPages = Math.ceil(shows.length / pageSize);

  const currentShows = shows.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const goToPage = (page: number) => {
    setFade(true);               // start fade-out
    setTimeout(() => {
      setCurrentPage(page);       // change page
      setFade(false);             // fade-in
    }, 150);                      // duration matches transition
  };

  return (
    <div>
      <div
        style={{
          opacity: fade ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {currentShows.map((show, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #333",
              paddingBottom: "10px",
              display: "flex",
              flexDirection: "column", // stack all elements vertically
              gap: "4px",              // small spacing between elements
              opacity: showTickets ? 1 : 0.6, // faded for past shows
            }}
          >
            <strong>{formatDate(show.date)}</strong>
            <span>{show.city}, {show.country}</span>
            <span>{show.venue}</span>
            {showTickets && show.ticketLink && (
              <a
                href={show.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ff00ff" }}
              >
                More Info
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      {totalPages > 1 && (
      <div
        style={{
          marginTop: "15px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))",
          gap: "10px",
          maxWidth: "300px", // 👈 keeps it compact and centered
        }}
  >
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            style={{
              padding: "6px 0",
              backgroundColor: currentPage === i + 1 ? "#fff" : "#222",
              color: currentPage === i + 1 ? "#000" : "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%", // 👈 fills grid cell
          }}
        >
        {i + 1}
      </button>
    ))}
  </div>
)}
    </div>
  );
}

// Main Shows component
export function Shows() {
  const now = new Date();

  // Split + sort shows
  const upcoming: Show[] = shows
    .filter((show) => new Date(show.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const past: Show[] = shows
    .filter((show) => new Date(show.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section style={{ padding: "60px 40px", backgroundColor: "#111" }}>
      <h2 style={{ marginBottom: "40px", textAlign: "center" }}>Shows</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        {/* UPCOMING */}
        <div>
          <h3 style={{ marginBottom: "20px" }}>Upcoming</h3>
          {upcoming.length === 0 ? (
            <p>No upcoming shows</p>
          ) : (
            <PaginatedList shows={upcoming} showTickets={true} pageSize={5} />
          )}
        </div>

        {/* PAST */}
        <div>
          <h3 style={{ marginBottom: "20px" }}>Past</h3>
          {past.length === 0 ? (
            <p>No past shows</p>
          ) : (
            <PaginatedList shows={past} showTickets={false} pageSize={5} />
          )}
        </div>
      </div>
    </section>
  );
}