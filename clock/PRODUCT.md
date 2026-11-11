# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS in a single file (`clock/index.html`), no build step and no backend. Also published as a claude.ai Artifact for opening directly on the iPad.

## Users

A teacher who sets an iPad in landscape at the front of a classroom. Two audiences read it:

- **Students** across the room, who only read it: the current time and the next class milestone.
- **The teacher**, who operates it: adds, toggles and removes reminders, and dismisses the alert when it rings.

## Product Purpose

A wall clock for the classroom that can also announce class and work milestones at set times: end of class, hand-in time, the switch between activities. Success means a student at the back of the room can read the time and the next milestone at a glance. When a milestone arrives, the whole room notices it without the teacher watching the clock.

## Positioning

It runs on an iPad the classroom already has, as one page that needs no app install, account, or backend. The alert covers the whole screen, so the room can see it as well as hear it.

## Operating Context

- iPad in landscape, propped on a podium or desk, often viewed from 3 m or more.
- The screen stays on and the page stays in the foreground for the whole lesson.
- The teacher sets reminders before or during class, usually with a short label (for example 下課 or 交作業).
- The classroom network may be unavailable, so the clock must keep working offline.
- Interface language is Traditional Chinese (zh-Hant-TW).

## Capabilities and Constraints

- Reminders: a time (HH:MM), an optional label of up to 24 characters, and a repeat setting of daily or once. Each can be toggled or deleted, and a ringing reminder can be snoozed for 5 minutes. Reminders are saved in the browser's localStorage on that iPad only.
- Alert: a full-screen takeover with a repeating Web Audio chime. It stops automatically after 3 minutes.
- 24-hour and 12-hour display.
- iPadOS platform limits:
  - The first tap on the page unlocks audio and requests a screen wake lock.
  - Reminders cannot ring while Safari is in the background or the screen is locked.
- **Offline gap:**
  - **Fonts:** Archivo and Noto Sans TC currently load from Google Fonts, and the published Artifact needs a network connection to open at all.
  - **Status:** True offline use requires self-hosted fonts plus a service worker or Add-to-Home-Screen install path. This is not yet built.
- **Undecided:** whether a countdown mode is needed alongside clock-time reminders.

## Product Principles

1. **Legible from the back row.** Time and the next milestone must read at distance; nothing essential is small.
2. **Ambient until it matters.** The clock is calm during the lesson, and a reminder is unmistakable when it fires.
3. **Teacher controls stay out of students' view.** Setup lives in a sheet the teacher opens; the resting screen shows only what the room needs.
4. **Works without the network.** No feature may depend on a connection during class.

## Accessibility & Inclusion

- **Distance reading:** students read the time and the next milestone from 3 m or more, so every resting-screen element is large text.
- **Contrast:** large text must meet at least 3:1 against the orange ground.
- **Audible and visual alerts:** an alert must work in a quiet or noisy room, so it is both seen and heard.
