import Link from "next/link";


export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Next.js Rendering Modes Demo</h1>
      <p>This project demonstrates SSG, SSR, and ISR using the App Router.</p>

      <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>

        <Link
          href="/about"
          style={{
            padding: "12px 18px",
            background: "#372e9bff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "18px"
          }}
        >
           SSG Demo Page (Static Rendering)
        </Link>

        <Link
          href="/dashboard"
          style={{
            padding: "12px 18px",
            background: "#4397b8ff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "18px"
          }}
        >
         SSR Demo Page (Dynamic Rendering)
        </Link>

        <Link
          href="/news"
          style={{
            padding: "12px 18px",
            background: "#38a46aff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "18px"
          }}
        >
          ISR Demo Page (Hybrid Rendering)
        </Link>

      </div>
    </main>
  );
}
