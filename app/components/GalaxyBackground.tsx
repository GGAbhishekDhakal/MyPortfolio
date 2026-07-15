"use client";

import { ReactNebula } from "@flodlc/nebula";

export default function GalaxyBackground() {
  return (
    <div className="galaxy-container">
      <ReactNebula
        config={{
          starsCount: 400,
          starsRotationSpeed: 2,
          nebulasIntensity: 12,
          cometFrequence: 10,
          sunScale: 1,
          planetsScale: 1,
          solarSystemOrbite: 75,
          solarSystemSpeedOrbit: 80,
        }}
      />
    </div>
  );
}
