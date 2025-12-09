import Image from 'next/image';

export const dynamic = "force-dynamic";


export default async function Dashboard() {
    const res = await fetch("https://api.github.com/users/techabbayi", {
        cache: "no-store" // SSR live fetching
    });
    const user = await res.json();

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
                border: '2px solid #10b981',
                borderRadius: '12px',
                padding: '40px',
                backgroundColor: '#1ea847ff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textAlign: 'center',
                width: '100%'
            }}>
                <h1 style={{ color: '#91de16ff', marginBottom: '20px' }}>Dynamic Page (SSR)</h1>
                <p style={{ color: '#666', marginBottom: '30px' }}><strong>Fetched at:</strong> {new Date().toISOString()}</p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: '20px',
                    padding: '20px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #ddd'
                }}>
                    <Image
                        src={user.avatar_url}
                        alt={user.login}
                        width={100}
                        height={100}
                        style={{
                            borderRadius: '50%',
                            border: '3px solid #10b981'
                        }}
                    />
                    <div style={{ textAlign: 'left' }}>
                        <h2 style={{ margin: '0 0 10px 0', color:'green' }}>{user.name}</h2>
                        <p style={{ margin: '5px 0', color: '#666' }}>@{user.login}</p>
                        <p style={{ margin: '5px 0', color: '#666' }}>{user.bio}</p>
                        <p style={{ margin: '5px 0', fontSize: '14px', color: '#888' }}>
                            {user.public_repos} repos • {user.followers} followers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
