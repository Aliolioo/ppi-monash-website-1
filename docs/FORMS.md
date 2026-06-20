# Forms: Registration & Pre-Orders (PO) with QR Payment

This site is a **static app with no backend**, so it can't receive uploads,
store orders, or verify payments itself. The chosen approach is **link-out**:
the site shows a button that opens a hosted form in a new tab; that form handles
the QR payment display, the proof-of-payment upload, and response storage.

## Recommended form host

Use a service that allows **anonymous file uploads** (so buyers can attach a
payment screenshot without signing in):

- **Tally** or **Jotform** — free tiers, clean UI, can display your payment QR
  image inline, accept file uploads. **Recommended.**
- **Google Forms** — fine for simple registration, but its file-upload field
  forces respondents to sign into a Google account (annoying for payment proof).

Keep the form's responses **private** (not a public sheet) — payment proof
contains personal/financial info.

## The PO / payment flow

1. Build the order form on Tally/Jotform.
2. Inside the form, show your **DuitNow / bank-transfer QR** (just an image).
3. Add a **file-upload** field for the payment screenshot, plus the usual
   name / contact / item / quantity fields.
4. Buyer scans the QR → pays → uploads proof → submits. You review responses on
   the form dashboard.

## Wiring it into the site

Both registration and PO are **per-event** fields in the `EVENTS` array in
`src/config/siteConfig.js`:

```js
{
  // ...
  registrationLink: "https://forms.gle/your-registration-form", // "Register Now" button
  orderLink: "https://tally.so/r/your-po-form",                 // "Pre-Order / Buy" button
}
```

- `registrationLink` → renders the **Register Now** button (when the event
  status is upcoming/open).
- `orderLink` → renders the **Pre-Order / Buy** button (any status). Set to
  `null` or omit it if the event has no PO.

Both open in a new tab with `rel="noopener noreferrer"`. No CSP change is needed
for link-out (unlike embedding an iframe, which would require adding the form
host to `frame-src` in `index.html`).

There's a live placeholder on the **Indonesian Night Market** event — replace
the `tally.so/...placeholder` URL with your real form when ready.

## Standalone PO (not tied to an event)

The simplest path is to add an `EVENTS` entry for the PO (e.g. category
`"Collaboration"` or a new `"Merchandise"` category) with an `orderLink`. If you
end up running many standalone stores, tell me and we can add a dedicated
`/shop` listing instead.

## Privacy / security notes

- Collecting payment proof means handling sensitive data. The Privacy Policy
  should mention that registrations/orders run through external forms and may
  include proof-of-payment uploads, retained only as long as needed.
- Never share the response sheet/link publicly.
- If you later want **automatic** payment verification, that needs a payment
  gateway (Malaysia: ToyyibPay / Billplz / SenangPay) with a checkout redirect
  and a small backend/webhook — out of scope for the current static setup.
