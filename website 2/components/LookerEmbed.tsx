export default function LookerEmbed({ url }: { url?: string }) {
  if (!url) return null;
  return (
    <iframe
      src={url}
      title="Cranbourne Food Truck Stats Dashboard"
      width="100%"
      height="700"
      style={{ border: 0, borderRadius: "1rem" }}
      loading="lazy"
      allowFullScreen
      aria-label="Looker Studio Dashboard"
    />
  );
}