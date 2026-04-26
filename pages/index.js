export default function Home() {
  const services = [
    "Drywall Repair",
    "TV Mounting",
    "Ceiling Fan Installation",
    "General Repairs",
    "Landscaping",
    "Grass Cutting",
    "Mulching",
    "Rental Property Maintenance",
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      <section style={{ background: "#0f172a", color: "white", padding: "50px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", marginBottom: "15px" }}>
          JIF Handyman Services
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto 25px" }}>
          Handyman, landscaping, grass cutting, mulching, and home repair services in Frederick County, MD.
        </p>
        <a
          href="tel:14108317785"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "15px 25px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Call Now: (410) 831-7785
        </a>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginTop: "25px" }}>
          {services.map((service) => (
            <div key={service} style={{ border: "1px solid #ddd", borderRadius: "14px", padding: "22px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
              <h3>{service}</h3>
              <p>Reliable, clean, and professional service throughout Frederick County.</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "40px 20px", textAlign: "center" }}>
        <h2>Serving Frederick County</h2>
        <p style={{ maxWidth: "700px", margin: "auto" }}>
          Frederick, Urbana, Walkersville, Ballenger Creek, New Market, Middletown, Brunswick, Thurmont, Mount Airy, and nearby areas.
        </p>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "700px", margin: "auto" }}>
        <h2 style={{ textAlign: "center" }}>Request a Free Estimate</h2>

        <form action="https://formspree.io/f/xojyzvob" method="POST" style={{ display: "grid", gap: "12px" }}>
          <input name="name" required placeholder="Full Name" style={inputStyle} />
          <input name="phone" required placeholder="Phone Number" style={inputStyle} />
          <input name="email" type="email" placeholder="Email Address" style={inputStyle} />

          <select name="service" required style={inputStyle}>
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>

          <textarea name="message" required placeholder="Describe the job" style={{ ...inputStyle, minHeight: "120px" }} />

          <button type="submit" style={{ background: "#2563eb", color: "white", padding: "15px", border: 0, borderRadius: "10px", fontWeight: "bold", fontSize: "16px" }}>
            Send Estimate Request
          </button>
        </form>
      </section>

      <footer style={{ background: "#0f172a", color: "white", textAlign: "center", padding: "25px" }}>
        <strong>JIF Handyman Services</strong>
        <br />
        Frederick County, MD • (410) 831-7785
      </footer>
    </main>
  );
}

const inputStyle = {
  padding: "14px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  fontSize: "16px",
  width: "100%",
};