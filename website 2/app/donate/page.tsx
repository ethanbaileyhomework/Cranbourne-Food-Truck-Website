import { getSiteSettings } from "../../lib/cms";
import DonateBox from "../../components/DonateBox";
import MarkdownRenderer from "../../components/MarkdownRenderer";

export default async function DonatePage() {
  const siteSettings = await getSiteSettings();
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Support Our Work</h1>
      <MarkdownRenderer content={siteSettings.donate_copy} />
      <DonateBox
        bank={{
          name: siteSettings.bank_account_name,
          bsb: siteSettings.bank_bsb,
          number: siteSettings.bank_account_number,
          reference: siteSettings.bank_reference
        }}
        paypal={siteSettings.paypal_link}
        stripe={siteSettings.stripe_link}
      />
      <div className="mt-6 text-neutral-600 text-sm">
        <em>Note: Donations $2 and over are tax-deductible. Receipt provided on request.</em>
      </div>
    </div>
  );
}