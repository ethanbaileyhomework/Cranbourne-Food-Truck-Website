export default function TallyEmbed({ url }: { url?: string }) {
  if (!url) return null;
  return (
    <iframe
      src={url}
      title="Volunteer Expression of Interest"
      width="100%"
      height="600"
      style={{ border: 0, borderRadius: "1rem" }}
      className="shadow-subtle"
      loading="lazy"
      aria-label="Tally.so Volunteer Form"
    />
  );
}