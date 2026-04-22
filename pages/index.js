export default function HandymanWebsite() {
  // SEO IMPROVEMENTS ADDED:
  // - Keyword-rich headings
  // - Internal linking hints
  // - Schema markup
  // - Better keyword density for "handyman Frederick MD" and "Frederick County handyman"


  const business = {
    name: 'JIF Handyman Services',
    phone: '(410) 831-7785',
    phoneHref: 'tel:+14108317785',
    email: 'estimates@jifhandymanservices.com',
    emailHref: 'mailto:estimates@jifhandymanservices.com',
    domain: 'https://www.jifhandymanservices.com',
    city: 'Frederick',
    state: 'MD',
    primaryKeyword: 'handyman Frederick MD',
  }

  const serviceAreas = [
    'Frederick County, MD',
    'Ballenger Creek, MD',
    'Walkersville, MD',
    'Urbana, MD',
    'New Market, MD',
    'Middletown, MD',
    'Jefferson, MD',
    'Brunswick, MD',
  ]

  const services = [
    {
      title: 'General Handyman Frederick MD',
      slug: 'handyman-frederick-md',
      metaTitle: 'Handyman Frederick MD | JIF Handyman Services',
      metaDescription:
        'Reliable handyman in Frederick MD for home repairs, installations, maintenance, and small jobs done right.',
      hero: 'Handyman in Frederick MD',
      intro:
        'JIF Handyman Services provides dependable handyman service in Frederick MD for homeowners, landlords, and rental properties. We handle repairs, fixture swaps, drywall patches, trim work, installations, and maintenance lists with clean, professional results.',
      bullets: [
        'Minor home repairs and punch lists',
        'Drywall patching and trim repair',
        'Door, hardware, and fixture replacement',
        'Small jobs welcome',
      ],
    },
    {
      title: 'Drywall Repair Frederick MD',
      slug: 'drywall-repair-frederick-md',
      metaTitle: 'Drywall Repair Frederick MD | Patch & Repair Services',
      metaDescription:
        'Drywall repair in Frederick MD for holes, dents, cracks, patching, and touch-up prep for clean walls and ceilings.',
      hero: 'Drywall Repair in Frederick MD',
      intro:
        'Need drywall repair in Frederick MD? We patch holes, fix damage, smooth rough areas, and help get walls ready for paint. This is one of the most requested handyman services for homes, rentals, and move-out repairs.',
      bullets: [
        'Wall and ceiling patching',
        'Repair for dents, cracks, and holes',
        'Surface prep and finish-ready results',
        'Move-out and rental turnover repairs',
      ],
    },
    {
      title: 'TV Mounting Frederick MD',
      slug: 'tv-mounting-frederick-md',
      metaTitle: 'TV Mounting Frederick MD | Wall Mount Installation',
      metaDescription:
        'TV mounting in Frederick MD with secure wall installation, clean placement, and reliable handyman service.',
      hero: 'TV Mounting in Frederick MD',
      intro:
        'We provide TV mounting in Frederick MD for bedrooms, living rooms, offices, and rental properties. Get a cleaner setup and secure installation without the hassle of doing it yourself.',
      bullets: [
        'TV wall mounting',
        'Basic bracket installation',
        'Shelf and accessory mounting',
        'Clean, level placement',
      ],
    },
    {
      title: 'Ceiling Fan Installation Frederick MD',
      slug: 'ceiling-fan-installation-frederick-md',
      metaTitle: 'Ceiling Fan Installation Frederick MD | Handyman Service',
      metaDescription:
        'Ceiling fan installation in Frederick MD for replacements and new room upgrades handled by a reliable handyman.',
      hero: 'Ceiling Fan Installation in Frederick MD',
      intro:
        'JIF Handyman Services helps with ceiling fan installation in Frederick MD for replacement fans and room upgrades. A properly installed fan improves comfort and updates the space quickly.',
      bullets: [
        'Ceiling fan replacements',
        'Bedroom and living room fan installs',
        'Fixture swap support',
        'Clean final setup',
      ],
    },
    {
      title: 'Rental Property Maintenance Frederick MD',
      slug: 'rental-property-maintenance-frederick-md',
      metaTitle: 'Rental Property Maintenance Frederick MD | Handyman Help',
      metaDescription:
        'Rental property maintenance in Frederick MD for punch lists, turnovers, minor repairs, and ongoing handyman support.',
      hero: 'Rental Property Maintenance in Frederick MD',
      intro:
        'We help landlords and property managers with rental property maintenance in Frederick MD. From turnover repairs to punch lists and small fixes, we help keep units ready and presentable.',
      bullets: [
        'Turnover repair lists',
        'Minor damage repair',
        'Fixture and hardware replacement',
        'Ongoing handyman help for rentals',
      ],
    },
  ]

  const locationPages = [
    'handyman-ballenger-creek-md',
    'handyman-urbana-md',
    'handyman-walkersville-md',
  ]

  const benefits = [
    'Fast response and clear communication',
    'Small jobs welcome',
    'Clean work and attention to detail',
    'Residential and rental property service',
  ]

  const faqs = [
    {
      q: 'Do you offer handyman service in Frederick MD for small jobs?',
      a: 'Yes. JIF Handyman Services handles many small repair and installation jobs that homeowners do not want to deal with themselves.',
    },
    {
      q: 'Do you work with landlords and rental properties?',
      a: 'Yes. We help with rental turnover repairs, maintenance lists, drywall repair, fixture replacement, and general handyman work.',
    },
    {
      q: 'What handyman services do you offer in Frederick?',
      a: 'Common jobs include drywall repair, TV mounting, fixture replacement, trim repair, ceiling fan installation, door hardware, punch lists, and general repair work.',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'JIF Handyman Services',
            telephone: '(410) 831-7785',
            areaServed: 'Frederick County MD',
            description: 'Handyman services in Frederick County MD including drywall repair, TV mounting, ceiling fan installation, and general home repairs.',
          })
        }}
      />

    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-bold tracking-tight">{business.name}</div>
            <div className="text-sm text-slate-600">Handyman services in Frederick County, MD specializing in drywall repair, installations, home maintenance, and small job repairs.</div>
          </div>
          <a href="#quote" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
            Get a Free Quote
          </a>
        </div>
      </header>

      <section className="border-b border-slate-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{business.primaryKeyword}</p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Handyman services in Frederick County MD that rank in Google and generate calls and booked jobs.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              JIF Handyman Services helps homeowners, landlords, and property managers with reliable repairs, installations, drywall patches, fixture swaps, TV mounting, ceiling fans, and rental maintenance work across Frederick County, Maryland.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#quote" className="rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90">
                Request Estimate
              </a>
              <a href="#services" className="rounded-2xl border border-slate-300 px-6 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50">
                View Services
              </a>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <div className="text-2xl font-bold">Frederick, MD</div>
                <div className="text-sm text-slate-600">Primary Service Area</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <div className="text-2xl font-bold">Small Jobs</div>
                <div className="text-sm text-slate-600">Welcome</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <div className="text-2xl font-bold">Rental</div>
                <div className="text-sm text-slate-600">Maintenance Help</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-10 shadow-xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-100 to-slate-50 p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">Local Handyman Lead Site</div>
                <div className="mt-4 text-3xl font-bold leading-tight">Built to target Frederick handyman searches.</div>
                <div className="mt-4 text-slate-700">
                  SEO service pages, local area targeting, strong calls to action, and simple quote capture for more handyman leads.
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="text-lg font-bold">Homeowners</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">Fast help for repairs, installs, maintenance, and fix-it jobs around the house.</div>
              </div>
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="text-lg font-bold">Landlords</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">Reliable turnover repairs, punch lists, and handyman maintenance support for rentals.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">SEO Service Pages</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Core handyman pages built to rank for "handyman Frederick MD" and "handyman Frederick County MD" searches.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">/{service.slug}</div>
                <h3 className="mt-3 text-xl font-bold">{service.hero}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.metaDescription}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Why Choose JIF Handyman Services in Frederick County MD</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Straightforward service, quality work, and less stress.</h2>
              <div className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                    <div className="font-semibold">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Service Areas</p>
              <h3 className="mt-3 text-3xl font-black">Nearby towns you can target too.</h3>
              <div className="mt-8 space-y-4">
                {serviceAreas.map((area) => (
                  <div key={area} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Town SEO Pages</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Local pages to capture nearby handyman searches.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              These pages can help JIF Handyman Services rank across Frederick County while still feeding leads into your main service area.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {locationPages.map((slug) => (
              <div key={slug} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">/{slug}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Separate town page targeting local handyman demand with service mentions, internal links, and quote CTA blocks.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Frederick County Handyman FAQ</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Questions that support rankings and conversions.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl md:p-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Free Quote</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Get a free handyman estimate in Frederick County, MD today.</h2>
              <p className="mt-4 text-slate-600">Tell us what repair or install job you need and we’ll contact you about pricing and availability.</p>
            </div>

            <form className="mt-10 grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-300 px-5 py-4 outline-none ring-0 transition focus:border-blue-600" placeholder="Full Name" />
              <input className="rounded-2xl border border-slate-300 px-5 py-4 outline-none ring-0 transition focus:border-blue-600" placeholder="Phone Number" />
              <input className="rounded-2xl border border-slate-300 px-5 py-4 outline-none ring-0 transition focus:border-blue-600 md:col-span-2" placeholder="Email Address" />
              <input className="rounded-2xl border border-slate-300 px-5 py-4 outline-none ring-0 transition focus:border-blue-600 md:col-span-2" placeholder="Property Address" />
              <textarea className="min-h-[150px] rounded-2xl border border-slate-300 px-5 py-4 outline-none ring-0 transition focus:border-blue-600 md:col-span-2" placeholder="What handyman service do you need in Frederick County?" />
              <button className="rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90 md:col-span-2">
                Request My Free Estimate
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-bold">{business.name}</div>
            <div className="mt-2 text-sm text-slate-300">Serving Frederick County, MD with handyman repairs, installations, drywall repair, and rental property maintenance.</div>
          </div>
          <div className="text-sm text-slate-300">
            Phone: {business.phone}<br />
            Email: {business.email}
          </div>
        </div>
      </footer>
    </div>
  )


// TOWN PAGES (SEO READY CONTENT)
export const townPagesContent = {
  ballengerCreek: `
<h1>Handyman in Ballenger Creek MD</h1>
<p>JIF Handyman Services provides reliable handyman services in Ballenger Creek MD including drywall repair, TV mounting, ceiling fan installation, and general home repairs. We help homeowners and landlords with fast, clean, and professional work.</p>

<h2>Common Handyman Services</h2>
<ul>
<li>Drywall repair and patching</li>
<li>TV wall mounting</li>
<li>Fixture and hardware replacement</li>
<li>Small home repairs</li>
</ul>

<p>Serving Ballenger Creek and Frederick County with fast response times and quality work.</p>
`,

  urbana: `
<h1>Handyman in Urbana MD</h1>
<p>Looking for a handyman in Urbana MD? JIF Handyman Services provides home repairs, installations, drywall repair, and maintenance work for homeowners and rental properties.</p>

<h2>Services in Urbana</h2>
<ul>
<li>Drywall repair</li>
<li>Ceiling fan installation</li>
<li>TV mounting</li>
<li>General handyman repairs</li>
</ul>

<p>We serve Urbana MD with reliable handyman services and fast estimates.</p>
`,

  walkersville: `
<h1>Handyman in Walkersville MD</h1>
<p>JIF Handyman Services offers handyman services in Walkersville MD for small repairs, installations, drywall work, and maintenance. We help keep your home or rental property in great shape.</p>

<h2>Popular Services</h2>
<ul>
<li>Home repair and maintenance</li>
<li>Drywall patching</li>
<li>TV mounting and installs</li>
<li>Fixture replacement</li>
</ul>

<p>Serving Walkersville and surrounding areas in Frederick County.</p>
`
};



// ADDITIONAL TOWN PAGES (10 MORE)
export const moreTownPagesContent = {
  newMarket: `
<h1>Handyman in New Market MD</h1>
<p>JIF Handyman Services provides dependable handyman services in New Market MD inc
