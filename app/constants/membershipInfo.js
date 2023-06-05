'use client';
import { useState } from 'react';

export const memberships = [
  {
    mainTitle: 'Always Free',
    subtitleText: '– Participate –',
    price: '$0',
    description:
      'View all of YOURHEAD&apos;s public art and music. Request to be a participant in Painting Real People.',
    checks: [
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--chartreuse-light',
    // alwaysFree
  },
  {
    mainTitle: 'Eye Contact',
    subtitleText: '– Podcast Access –',
    price: '$1/month',
    description:
      'Gain access to Access to the Sessions of Painting Real People Podcast',
    checks: [
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--blue-light',
    // eyeContact
  },
  {
    mainTitle: 'Handshake',
    subtitleText: '– Vlog Access –',
    price: '$2/month',
    description:
      'Gain access to Access to the Sessions of Painting Real People Vlog – plus everything in Eye Contact',
    checks: [
      'Access to the Sessions of Painting Real People Vlog',
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--purple-light',
    // handshake
  },
  {
    mainTitle: 'Fist Bump',
    subtitleText: '– Stream of Consciousness Access –',
    price: '$5/month',
    description:
      'Gain access to YOURHEAD’s Stream of Consciousness, containing unreleased music, unused lyrics, and random drawings and sketches – plus everything in Handshake',
    checks: [
      'Access to the YOURHEAD’s Stream of Consciousness',
      'Access to the Sessions of Painting Real People Vlog',
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--orange-light',
    // fistBump
  },
  {
    mainTitle: 'Inside Joke',
    subtitleText: '– Free monthly digital download –',
    price: '$10/month',
    description:
      'Get a new digital download every month that you can print – or just save in your computer&apos;s pocket for later – plus everything in Fist Bump',
    checks: [
      'A new digital download every month',
      'Access to the YOURHEAD’s Stream of Consciousness',
      'Access to the Sessions of Painting Real People Vlog',
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--yellow-light',
    // insideJoke
  },
  {
    mainTitle: 'Hangout',
    subtitleText: '– 10% off everything –',
    price: '$15/month',
    description:
      'A super special 10% discount on all of YOURHEAD&apos;s atrwork and merch – plus everything in Inside Joke',
    checks: [
      '10% off everything',
      'A new digital download every month',
      'Access to the YOURHEAD’s Stream of Consciousness',
      'Access to the Sessions of Painting Real People Vlog',
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--blue-light',
    // hangout
  },
  {
    mainTitle: 'Hug',
    subtitleText: '– Free monthly print –',
    price: '$21/month',
    description:
      'Get a new, original, limited-edition print from YOURHEAD every month, as well as 15% off all commissioned paintings and 4 uses of a 13% off discount – plus everything in Hangout',
    checks: [
      'Free monthly print, delivered to your door',
      '15% off commissioned original paintings',
      '13% off everything else – 4 uses per month',
      '10% off everything',
      'A new digital download every month',
      'Access to the YOURHEAD’s Stream of Consciousness',
      'Access to the Sessions of Painting Real People Vlog',
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--pink-light',
    // hug
  },
  {
    mainTitle: 'Sleepover',
    subtitleText: '– A curious surprise –',
    price: '$39/month',
    description:
      'A curious surprise, delivered to your door every month, as well as 20% off commissioned originals and 4 uses of a 16% off discount – plus everything in Hug',
    checks: [
      'A new "Curious Surprise Box" shipped to you every month',
      '20% off commissioned original paintings',
      '16% off everything else – 4 uses per month',
      'Free monthly print, delivered to your door',
      '10% off everything',
      'A new digital download every month',
      'Access to the YOURHEAD’s Stream of Consciousness',
      'Access to the Sessions of Painting Real People Vlog',
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--red-light',
    // sleepover
  },
  {
    mainTitle: 'Best Friends',
    subtitleText: '– Choose Artist or Collector&apos;s Box –',
    price: '$69/month',
    description:
      'Get another box delivered to your door every month – the Artist Box or the Collector&apos;s Box – as well as 30% off commissioned originals and 4 uses of a 20% off discount – plus everything in Sleepover',
    checks: [
      'A new "Artist Box" or "Collector&apos;s Box" shipped to you every month',
      '30% off commissioned original paintings',
      '20% off everything else – 4 uses per month',
      'A new "Curious Surprise Box" shipped to you every month',
      'Free monthly print, delivered to your door',
      '10% off everything',
      'A new digital download every month',
      'Access to the YOURHEAD’s Stream of Consciousness',
      'Access to the Sessions of Painting Real People Vlog',
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--chartreuse-light',
    // bestFriends
  },
  {
    mainTitle: 'Secret Handshake',
    subtitleText: '– 6 uses of 30% off –',
    price: '$99/month',
    description:
      'Get 40% off all commissioned originals and 6 uses of a 30% off discount – plus everything in Best Friends',
    checks: [
      '40% off commissioned original paintings',
      '30% off everything else – 6 uses per month',
      'A new "Artist Box" or "Collector&apos;s Box" shipped to you every month',
      'A new "Curious Surprise Box" shipped to you every month',
      'Free monthly print, delivered to your door',
      '10% off everything',
      'A new digital download every month',
      'Access to the YOURHEAD’s Stream of Consciousness',
      'Access to the Sessions of Painting Real People Vlog',
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--pink-light',
    // secretHandshake
  },
  {
    mainTitle: 'Emotional Rollercoasters',
    subtitleText: '– Bi-monthly workshop sessions via Zoom –',
    price: '$299/month',
    description:
      'Workshop sessions about your art or project via Zoom, as well as 50% off commissioned originals and 9 uses of a 40% off discount – plus everything in Secret Handshake',
    checks: [
      'Bi-monthly workshop sessions via Zoom',
      '50% off commissioned original paintings',
      '40% off everything else – 9 uses per month',
      'A new "Artist Box" or "Collector&apos;s Box" shipped to you every month',
      'A new "Curious Surprise Box" shipped to you every month',
      'Free monthly print, delivered to your door',
      '10% off everything',
      'A new digital download every month',
      'Access to the YOURHEAD’s Stream of Consciousness',
      'Access to the Sessions of Painting Real People Vlog',
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--yellow-light',
    // emotionalRollercoasters
  },
  {
    mainTitle: 'All the Secrets',
    subtitleText: '– Hands-on assistance for your project –',
    price: 'Price Negotiable',
    description:
      'Active assistance in your venture via design, development, and planning – plus everything in Secret Handshake',
    checks: [
      'Hands-on assistance for your project',
      'Bi-monthly workshop sessions via Zoom',
      '50% off commissioned original paintings',
      '40% off everything else – 9 uses per month',
      'A new "Artist Box" or "Collector&apos;s Box" shipped to you every month',
      'A new "Curious Surprise Box" shipped to you every month',
      'Free monthly print, delivered to your door',
      '10% off everything',
      'A new digital download every month',
      'Access to the YOURHEAD’s Stream of Consciousness',
      'Access to the Sessions of Painting Real People Vlog',
      'Access to the Sessions of Painting Real People Podcast',
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a participant',
      'Receive updates about art & music',
    ],
    backgroundColor: '--blue-light',
    // allTheSecrets
  },
];
