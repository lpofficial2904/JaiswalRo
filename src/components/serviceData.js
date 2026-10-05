export const services = [
  {
    slug: 'service',
    title: 'RO Service',
    kicker: 'PREVENTIVE CARE',
    icon: 'sliders',
    description: 'Complete RO water purifier service in Jaipur with inspection, cleaning, TDS check and performance testing at your doorstep.',
    note: '₹199 · One-time',
    plans: [
      { name: 'RO Service', price: '199', unit: 'one-time', subtitle: 'Complete routine RO maintenance in Jaipur', features: ['Full RO inspection', 'Filter cleaning', 'TDS and water-flow check', 'Leakage inspection', 'Membrane performance check', 'Basic purifier cleaning'] },
    ],
  },
  {
    slug: 'repair',
    title: 'RO Repair',
    kicker: 'EXPERT DIAGNOSIS',
    icon: 'wrench',
    description: 'Expert RO water purifier repair in Jaipur for water leakage, low flow, bad taste, noise, pump, SMPS and other purifier faults.',
    note: '₹199 · Same day',
    plans: [
      { name: 'RO Repair', price: '199', subtitle: 'Expert diagnosis and repair visit', features: ['Technician visit and fault diagnosis', 'Clear repair estimate before work', '45-day workmanship support'] },
    ],
  },
  {
    slug: 'installation',
    title: 'RO Installation',
    kicker: 'READY FROM DAY ONE',
    icon: 'sparkles',
    description: 'Professional RO installation service in Jaipur with secure wall mounting, inlet connection and purified-water quality check.',
    note: '₹349 · Warranty included',
    plans: [
      { name: 'RO Installation', price: '349', subtitle: 'Neat setup at your water point', features: ['Wall mounting at an existing point', 'Inlet and outlet connection check', 'Basic operation handover'] },
    ],
  },
  {
    slug: 'uninstallation',
    title: 'RO Uninstallation',
    kicker: 'CAREFUL REMOVAL',
    icon: 'package',
    description: 'Safe RO uninstallation in Jaipur for home shifting, relocation or purifier replacement, with careful disconnection, removal and reinstallation support.',
    note: '₹199 · Clear upfront quote',
    plans: [
      { name: 'RO Uninstallation', price: '199', subtitle: 'Safe, careful purifier removal', features: ['Safe water and power disconnection', 'Careful purifier removal', 'Area left tidy after the visit'] },
    ],
  },
  {
    slug: 'filter-replacement',
    title: 'RO Filter Replacement',
    kicker: 'GENUINE FILTERS',
    icon: 'sparkles',
    description: 'RO filter replacement in Jaipur for sediment, carbon, membrane and post-carbon filters, fitted by an experienced technician after a condition check.',
    note: '₹349 · Installation',
    plans: [
      { name: 'RO Filter Replacement', price: '349', unit: 'installation', subtitle: 'Expert RO filter change visit in Jaipur', features: ['Compatible replacement filters', 'Expert fitting', 'TDS and leakage check', 'Filter-life guidance', 'Purifier performance test', 'Clear parts estimate'] },
    ],
  },
  {
    slug: 'amc-plan',
    title: 'RO AMC Plan',
    kicker: 'ANNUAL CARE',
    icon: 'verified',
    description: 'Choose an RO AMC plan in Jaipur for scheduled maintenance, filter care and priority doorstep water purifier support.',
    note: '₹2,499–₹4,999 · Per year',
    plans: [
      { name: 'AMC Plan', price: '2,499–₹4,999', unit: 'year', subtitle: 'Annual maintenance pricing varies by RO model', features: ['3–4 free services/year', 'Filter cleaning & replacement', 'Priority doorstep support'] },
    ],
  },
]

export const getService = (slug) => services.find((service) => service.slug === slug)
