export const revalidate = false; // fully static, built at build-time

async function getData() {
    return {
        message: "This page is statically generated at build time",
        time: new Date().toISOString(),
        features: [
            "Built at compile time",
            "Fastest performance",
            "No server needed",
            "Perfect for SEO"
        ]
    }
}


export default async function AboutPage() {
    const data = await getData();
    return (
        <div style={{
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                border: '2px solid #0070f3',
                borderRadius: '12px',
                padding: '40px',
                backgroundColor: '#14597eff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textAlign: 'center',
                width: '100%'
            }}>
                <h1 style={{ color: '#0070f3', marginBottom: '20px' }}>Static Page (SSG)</h1>
                <p style={{ fontSize: '18px', marginBottom: '15px' }}>{data.message}</p>
                <p style={{ color: '#666', marginBottom: '30px' }}><strong>Build Time:</strong> {data.time}</p>


                <div style={{ marginTop: '30px' }}>
                    <h2 style={{ marginBottom: '20px' }}>Features</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {data.features.map((feature, index) => (
                            <li key={index} style={{
                                padding: '10px',
                                margin: '8px 0',
                                backgroundColor: 'green',
                                border: '1px solid #ddd',
                                borderRadius: '6px'
                            }}>
                                ✓ {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
