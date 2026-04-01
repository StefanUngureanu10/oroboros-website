export function Music() {
  return (
    <section style={{ padding: "40px", backgroundColor: "#111" }}>
      <h2>Music</h2>
      <iframe 
            data-testid="embed-iframe" 
            style={{ borderRadius:"12px" }} 
            src="https://open.spotify.com/embed/album/1DtHgYFa6R49PWZ6lISDiU?utm_source=generator" 
            width="100%" 
            height="352"  
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
      </iframe>

    </section>
  );
}