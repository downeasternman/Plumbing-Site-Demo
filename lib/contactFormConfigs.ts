export type ContactFormConfig = {
  serviceMap: Record<string, string>;
  templatesBySlug: Record<string, string>;
  emergencySlug: string | null;
  phone: string;
  regionLine: string;
};

export const plumbingContactConfig: ContactFormConfig = {
  serviceMap: {
    "emergency-plumbing": "Emergency Plumbing",
    "water-heater-repair-replacement": "Water Heater",
    "drain-cleaning": "Drain Cleaning",
    "leak-repair": "Leak Repair",
    "fixture-installations": "Fixture Installation",
    "well-pump-pressure": "Well Pump and Pressure Support",
  },
  templatesBySlug: {
    "emergency-plumbing":
      "Hi, I'm dealing with an active plumbing emergency. The issue started (today/yesterday), and the location is (kitchen/bath/basement).",
    "water-heater-repair-replacement":
      "Hi, my water heater has an issue. I'm noticing (no hot water/low hot water/leaking), and the problem started (date).",
    "drain-cleaning":
      "Hi, I need drain cleaning. The clog is in (kitchen/bath/main line), and water drains slowly or backs up (when).",
    "leak-repair":
      "Hi, I need a leak repair. I've noticed moisture/dripping near (location), and it seems to happen (constantly/after use).",
    "fixture-installations":
      "Hi, I need a fixture installation. I'd like help with (toilet/faucet/shower/disposal), and I can share measurements if needed.",
    "well-pump-pressure":
      "Hi, my well pump or water pressure is acting up. I'm seeing (low pressure/irregular flow), and it started around (date).",
  },
  emergencySlug: "emergency-plumbing",
  phone: "207-555-0147",
  regionLine: "Washington County",
};

export const hvacContactConfig: ContactFormConfig = {
  serviceMap: {
    "no-heat-no-ac": "No Heat / No AC (Urgent)",
    "heat-pump-tune-up": "Heat Pump Tune-Up",
    "ac-repair": "AC Repair",
    "furnace-service": "Furnace Service",
    "ductless-mini-split": "Ductless / Mini-Split",
    "air-quality": "Indoor Air Quality",
    "maintenance-plan": "Maintenance Plan",
  },
  templatesBySlug: {
    "no-heat-no-ac":
      "Hi, I have an urgent comfort issue: no heat or no AC. Started (when). Thermostat reads (temp). Please call back ASAP.",
    "heat-pump-tune-up":
      "Hi, I'd like to schedule a heat pump tune-up. My system is (brand/model if known) and last service was (approx date).",
    "ac-repair":
      "Hi, I need AC repair. The issue is (not cooling / weak airflow / strange noise) and it started (when).",
    "furnace-service":
      "Hi, I need furnace service. I'm noticing (noise / smell / short cycling / no heat) since (when).",
    "ductless-mini-split":
      "Hi, I'd like help with a ductless or mini-split system. The room/zone is (location) and the problem is (describe).",
    "air-quality":
      "Hi, I'm interested in indoor air quality options (filters, humidifier, purification). Home built around (era).",
    "maintenance-plan":
      "Hi, I'd like info on an annual maintenance plan for my (heat pump / furnace / both).",
  },
  emergencySlug: "no-heat-no-ac",
  phone: "207-555-0199",
  regionLine: "Downeast Maine",
};

export const septicContactConfig: ContactFormConfig = {
  serviceMap: {
    "tank-pumping": "Septic Tank Pumping",
    inspection: "Septic Inspection",
    "repair-replace": "Repair / Baffle / Risers",
    "real-estate": "Real Estate / Inspection Letter",
    "grease-trap": "Grease Trap Pumping",
    "septic-emergency": "Backup / Emergency",
  },
  templatesBySlug: {
    "tank-pumping":
      "Hi, I need septic tank pumping. Tank last pumped about (years ago). Property is (address/town).",
    inspection:
      "Hi, I need a septic inspection. Reason: (sale/concern/routine). Any wet spots or odors: (yes/no/where).",
    "repair-replace":
      "Hi, I may need a repair or component replacement. Issue noticed: (describe). Tank location: (general).",
    "real-estate":
      "Hi, I need septic documentation for a real estate transaction. Closing timeframe: (date). Town: (town).",
    "grease-trap":
      "Hi, I need grease trap pumping for a (home/commercial) property. Approx tank size if known: (size).",
    "septic-emergency":
      "Hi, I have a backup or overflow situation. Started (when). Location of alarm or surfacing: (describe). Please call urgently.",
  },
  emergencySlug: "septic-emergency",
  phone: "207-555-0188",
  regionLine: "coastal Maine",
};

export const electricContactConfig: ContactFormConfig = {
  serviceMap: {
    "emergency-electrical": "Emergency Electrical",
    "panel-upgrade": "Panel Upgrade / Safety",
    "ev-charger": "EV Charger Install",
    lighting: "Lighting / Fixtures",
    generator: "Generator Hookup",
    "same-day-repair": "Same-Day Repair",
  },
  templatesBySlug: {
    "emergency-electrical":
      "Hi, I have an electrical emergency. Symptoms: sparks, smoke, partial power, or outlet damage. Started (when). Please advise.",
    "panel-upgrade":
      "Hi, I'm interested in a panel upgrade. Home built (year). Main panel is (brand/size if known). Adding (EV/heat pump/basement finish).",
    "ev-charger":
      "Hi, I'd like an EV charger installed. Vehicle (make). Garage or exterior mount. Panel distance estimate if known.",
    lighting:
      "Hi, I need lighting help (fixture swap, recessed, under cabinet, outdoor). Room or area: (describe).",
    generator:
      "Hi, I need generator transfer switch or hookup help. Generator size (kW) and fuel type (propane/gas).",
    "same-day-repair":
      "Hi, I need same-day repair for (describe issue). Affected circuits or rooms: (list).",
  },
  emergencySlug: "emergency-electrical",
  phone: "207-555-0177",
  regionLine: "Washington County and nearby",
};
