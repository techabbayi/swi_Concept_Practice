export const revalidate = 60; // regenerate every 60 seconds

async function getNews() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    if (!res.ok) {
        throw new Error('Failed to fetch news');
    }
    return res.json();
}


export default async function NewsPage() {
    const news = await getNews();

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Hybrid Page (ISR)</h1>
            <p>Regenerates every 60s</p>
            <p><strong>Rendered at:</strong> {new Date().toISOString()}</p>

            <div style={{ marginTop: '30px' }}>
                <h2>Latest News</h2>
                {news.map((item) => (
                    <div key={item.id} style={{
                        border: '1px solid #ddd',
                        padding: '15px',
                        marginBottom: '15px',
                        borderRadius: '8px'
                    }}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <small style={{ color: '#666' }}>Post ID: {item.id}</small>
                    </div>
                ))}
            </div>
        </div>

    );
}
