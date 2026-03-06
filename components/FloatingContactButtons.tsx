"use client";

export default function FloatingContactButtons() {
  const phoneDisplay = "(252) 582-6094";
  const phoneHref = "tel:+12525826094";

  const textMessage = encodeURIComponent(
    "Hi, I'm interested in a quote for concrete cutting / demolition."
  );
  const smsHref = `sms:+12525826094?body=${textMessage}`;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 md:hidden">
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-black/10 bg-white p-3 shadow-xl">
        <a
          href={phoneHref}
          className="flex items-center justify-center rounded-xl bg-[#c1121f] px-4 py-3 text-sm font-semibold text-white"
        >
          Call {phoneDisplay}
        </a>

        <a
          href={smsHref}
          className="flex items-center justify-center rounded-xl border border-black/15 bg-white px-4 py-3 text-sm font-semibold text-black"
        >
          Text Us
        </a>
      </div>
    </div>
  );
}