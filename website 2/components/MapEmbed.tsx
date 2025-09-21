export default function MapEmbed({ url }: { url?: string }) {
  if (!url) return null;
  return (
    <div className="mt-6 rounded-xl overflow-hidden shadow-subtle max-w-3xl mx-auto">
      <iframe
        src={url}
        title="Cranbourne Food Truck Location"
        width="100%"
        height="300"
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen
        aria-label="Google Map Embed"
      />
      <div className="text-right mt-1">
        <a href={url} target="_blank" rel="noopener" className="text-primary underline text-sm">Get Directions</a>
      </div>
    </div>
  );
}