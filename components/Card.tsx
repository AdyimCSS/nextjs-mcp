import { figma } from '@figma/code-connect'

export interface CardProps {
  title: string
  description: string
  imageUrl?: string
  onClick?: () => void
}

/**
 * Card component with Figma Code Connect integration
 * 
 * @figma https://www.figma.com/file/YOUR_FILE_KEY/Design?node-id=YOUR_NODE_ID
 */
export function Card({ title, description, imageUrl, onClick }: CardProps) {
  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
        }
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
        />
      )}
      <div style={{ padding: '1.5rem' }}>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
            color: '#1a1a1a',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            color: '#666',
            lineHeight: '1.5',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

// Figma Code Connect mapping
figma.connect(Card, {
  figmaNodeUrl: 'https://www.figma.com/file/YOUR_FILE_KEY/Design?node-id=YOUR_NODE_ID',
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
    imageUrl: figma.string('Image URL'),
  },
  example: (props) => <Card {...props} />,
})

