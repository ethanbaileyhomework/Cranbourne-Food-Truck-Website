export default function ServiceInfo({
  days,
  times,
  location,
  whatToExpect,
  phone,
  email
}: {
  days?: string;
  times?: string;
  location?: string;
  whatToExpect?: string;
  phone?: string;
  email?: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-subtle p-6 max-w-3xl mx-auto flex flex-col gap-3">
      <div className="flex flex-col md:flex-row md:items-center md:gap-4">
        <div className="flex-1">
          <h2 className="font-bold text-2xl mb-2">Service Details</h2>
          <div><strong>Days:</strong> {days || "e.g. Wednesdays"}</div>
          <div><strong>Time:</strong> {times || "e.g. 6–7pm"}</div>
          <div><strong>Location:</strong> {location || "e.g. 123 Main Rd, Cranbourne"}</div>
          <div className="mt-2 text-neutral-700">{whatToExpect || "Hot meal, pantry bags, friendly faces!"}</div>
        </div>
        <div className="flex flex-row gap-2 mt-4 md:mt-0">
          <a href={`tel:${phone}`} className="bg-primary text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#a9302e] transition" aria-label="Call us">Call</a>
          <a href={`mailto:${email}`} className="bg-neutral-200 text-charcoal px-4 py-2 rounded-xl font-semibold hover:bg-neutral-300 transition" aria-label="Email us">Email</a>
        </div>
      </div>
    </div>
  );
}