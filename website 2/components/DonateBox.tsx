export default function DonateBox({
  bank,
  paypal,
  stripe
}: {
  bank: { name: string; bsb: string; number: string; reference: string };
  paypal: string;
  stripe: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-subtle p-6 mt-6 flex flex-col gap-4">
      <div>
        <h2 className="font-bold text-lg mb-1">Bank Transfer</h2>
        <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-sm">
          <span>Account Name:</span><span>{bank.name || "Your Org Name"}</span>
          <span>BSB:</span><span>{bank.bsb || "000-000"}</span>
          <span>Account No:</span><span>{bank.number || "00000000"}</span>
          <span>Reference:</span><span>{bank.reference || "e.g. Your Name"}</span>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <a href={paypal || "#"} className="bg-primary text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#a9302e] transition" target="_blank" rel="noopener">PayPal Donate</a>
        <a href={stripe || "#"} className="bg-neutral-800 text-white px-6 py-2 rounded-xl font-semibold hover:bg-neutral-700 transition" target="_blank" rel="noopener">Stripe Donate</a>
      </div>
    </div>
  );
}