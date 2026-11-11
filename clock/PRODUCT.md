# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS in a single file (`clock/index.html`), no build step and no backend. Also published as a claude.ai Artifact for opening directly on the iPad.

## Users

A class running a stall at a school fair (園遊會), with one iPad propped up in landscape at the stall. Two audiences use it:

- **The teacher and students running the stall**: they set reminders for milestones such as shift changes, restocking and closing time. They also edit the price notice.
- **Customers** (students, parents, visitors) at the stall front: they only read it. They swipe to, or are shown, the price notice and read item prices from a distance.

## Product Purpose

One iPad serves as both the stall's clock-and-reminder and its price board. Success means:

- A customer can read every item and price at a glance from a few metres away.
- The stall crew never misses a milestone while busy serving.

## Positioning

It runs on an iPad the class already has, as one page with no app install, account or backend. The clock and the price board are a single swipe apart. Reminders cover the whole screen, so a busy crew sees them as well as hears them.

## Operating Context

- **Viewing:** an iPad in landscape at the stall front, often read from 3 m or more, in a busy and possibly outdoor setting.
- **Switching views:** swipe left or right between the clock and the price notice. The dots at the bottom and the arrow keys also switch.
- **Editing:** the crew edits reminders and the price notice in the settings sheet, before or during the fair.
- **Network:** may be unavailable at the venue, so the page must keep working offline.
- **Language:** Traditional Chinese (zh-Hant-TW).

## Capabilities and Constraints

- **Reminders:**
  - Each has a time (HH:MM), an optional label of up to 24 characters, and a repeat setting: daily or once.
  - Each can be toggled or deleted, and a ringing reminder can be snoozed for 5 minutes.
- **Alert:** a full-screen takeover with a repeating Web Audio chime that stops automatically after 3 minutes.
- **Price notice:**
  - Content: an editable title, up to 12 items (name plus price), and an optional note of up to 60 characters.
  - Prices: a whole number is shown with 元. Free text such as 2 杯 35 is shown as typed.
  - Layout: items switch to two columns above 6, and type size fits the screen.
  - Order: items can be moved up.
- **Storage:** all settings are saved in localStorage on that iPad only.
- **Display:** 24-hour or 12-hour time.
- **iPadOS platform limits:**
  - The first tap unlocks audio and requests a screen wake lock.
  - Reminders cannot ring while Safari is in the background or the screen is locked.
- **Offline gap (not yet built):**
  - Fonts currently load from Google Fonts, and the published Artifact needs a network connection to open.
  - True offline use needs self-hosted fonts plus a service worker or Add-to-Home-Screen install path.
- **Undecided:** whether a countdown mode is needed alongside clock-time reminders.

## Evidence on Hand

- **Prices:** none supplied. The crew enters real items and prices on the iPad, and future work must not ship invented prices as real ones.

## Product Principles

1. **Legible from the front of the stall.** Prices and time read at distance; nothing a customer needs is small.
2. **One swipe between jobs.** The clock and the notice are equal pages, never buried in menus.
3. **Ambient until it matters.** The display is calm, and a reminder is unmistakable when it fires.
4. **Crew controls stay out of customers' view.** Editing lives in a sheet the crew opens; the resting screens show only what visitors need.
5. **Works without the network.** No feature may depend on a connection at the venue.

## Accessibility & Inclusion

- **Distance reading:** every resting-screen element is large text, readable from 3 m or more.
- **Contrast:** at least 3:1 against the orange ground.
- **Alerts:** both seen and heard, for a noisy stall.
