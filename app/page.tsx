import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Figma Code Connect Demo</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h2 style={{ marginBottom: '1rem' }}>Button Component</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary" label="Primary Button" />
            <Button variant="secondary" label="Secondary Button" />
            <Button variant="outline" label="Outline Button" />
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '1rem' }}>Card Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <Card
              title="Card Title 1"
              description="This is a description for card 1"
              imageUrl="https://via.placeholder.com/300x200"
            />
            <Card
              title="Card Title 2"
              description="This is a description for card 2"
              imageUrl="https://via.placeholder.com/300x200"
            />
            <Card
              title="Card Title 3"
              description="This is a description for card 3"
              imageUrl="https://via.placeholder.com/300x200"
            />
          </div>
        </section>
      </div>
    </main>
  )
}

