# 📋 Yearly Update Checklist

> Do this at the start of each new committee year.
> All changes are in `src/config/siteConfig.js` unless noted.

---

## 1. Update Committee Info

- [ ] Change `SITE_INFO.currentYear` to the new year
- [ ] Update `COMMITTEE` array:
  - [ ] Replace all names and roles with new committee
  - [ ] Set `photo: null` for everyone initially
  - [ ] Add photos as they become available
- [ ] Update any stats in `STATS` (years of community, total events, members)

## 2. Add New Events

- [ ] Add the year's welcome event to `EVENTS`
- [ ] Remove or archive very old events (keep last 2 years for social proof)
- [ ] Make sure Google Drive photo links are set to "Anyone with the link"

## 3. Update Links

- [ ] Check `SOCIAL_LINKS` — is the WhatsApp group the same?
- [ ] Instagram, TikTok, YouTube still correct?
- [ ] Email address still active?

## 4. Update FAQ

- [ ] Review existing FAQs — are the accommodation prices still accurate?
- [ ] Add any new common questions from the past year
- [ ] Remove outdated info (old accommodation contacts, etc.)

## 5. Articles

- [ ] Add any articles published during the year
- [ ] Update URLs to match the WordPress site

## 6. Photos

- [ ] Get committee group photo
- [ ] Get individual headshots (400×400px, square)
- [ ] Place in `src/assets/photos/{department}/` folder
- [ ] Update `photo` fields in `COMMITTEE` config

## 7. Final Check

- [ ] Open site on desktop — everything look right?
- [ ] Open site on phone — responsive?
- [ ] Click all links — social media, event photos, articles
- [ ] Ask a new student friend to try it — does the FAQ answer their questions?

---

## 🔄 Handoff to Next Committee

1. Share this entire `ppi-monash-website/` folder
2. Point them to `docs/HANDOFF.md` first
3. Tell them: "You only need to edit one file: `siteConfig.js`"
4. Bookmark this checklist for their first meeting
