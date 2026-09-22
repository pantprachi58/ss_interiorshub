"use client";
import { useEffect, useState } from "react";

const PRELOADER_MARKUP = `<div class="preloader overflow-hidden">
            <div class="site-name"><span>SS Interiorshub</span></div>
            <div class="preloader-gutters">
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
            </div>
            <div class="preloader-text">
                <div class="percent">0</div>
                <span>%</span>
            </div>
        </div>`;

// How long to wait after the window load event before taking the overlay down
// ourselves. main.js normally clears it ~3s after load, so this only ever fires
// when something in that chain didn't run.
const SAFETY_DELAY_MS = 4500;
// Absolute cap measured from mount, in case the load event never arrives.
const HARD_CAP_MS = 9000;

export default function Preloader() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // The preloader is a fixed, full-screen panel at z-index 999, and the only
    // thing that removes it is the GSAP timeline in main.js, which runs once
    // per document load. If that chain breaks for any reason the whole page is
    // hidden behind a black panel, so tear it down from here as well.
    let cleared = false;
    const timers = [];

    const dismiss = () => {
      if (cleared) return;
      cleared = true;

      // The hero slider stays opacity:0 until the preloader hands over, so
      // reveal it too rather than swapping one blank screen for another.
      const slider = document.querySelector(".slider-section");
      if (slider && !slider.classList.contains("slider-ready")) {
        if (typeof window.startSliderAfterPreload === "function") {
          window.startSliderAfterPreload();
        }
        slider.classList.add("slider-ready");
      }

      setDismissed(true);
    };

    const armSafetyNet = () => timers.push(setTimeout(dismiss, SAFETY_DELAY_MS));

    if (document.readyState === "complete") {
      armSafetyNet();
    } else {
      window.addEventListener("load", armSafetyNet, { once: true });
    }
    timers.push(setTimeout(dismiss, HARD_CAP_MS));

    return () => {
      window.removeEventListener("load", armSafetyNet);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: PRELOADER_MARKUP }}
    />
  );
}
