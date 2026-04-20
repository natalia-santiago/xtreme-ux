"use client";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.78.72 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.24a2 2 0 0 1 2.11-.45c.83.35 1.71.6 2.61.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}

export default function FloatingContactButtons() {
  const phoneDisplay = "(252) 582-6094";
  const phoneHref = "tel:+12525826094";

  const textMessage = encodeURIComponent(
    "Hi, I'm interested in a quote for concrete cutting / demolition."
  );
  const smsHref = `sms:+12525826094?body=${textMessage}`;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.25rem)] max-w-md -translate-x-1/2 md:hidden">
      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-black/10 bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur">
        
        {/* CALL (PRIMARY) */}
        <a
          href={phoneHref}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#c1121f] px-4 py-3 text-sm font-semibold text-white transition active:scale-[0.97] active:opacity-90"
        >
          <PhoneIcon />
          Call
        </a>

        {/* TEXT (SECONDARY) */}
        <a
          href={smsHref}
          className="flex items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-4 py-3 text-sm font-semibold text-black transition active:scale-[0.97] active:bg-black/5"
        >
          <MessageIcon />
          Text
        </a>
      </div>
    </div>
  );
}