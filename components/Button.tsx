import { figma } from '@figma/code-connect'

export interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
  onClick?: () => void
}

/**
 * Button component with Figma Code Connect integration
 * 
 * @figma https://www.figma.com/file/YOUR_FILE_KEY/Design?node-id=YOUR_NODE_ID
 */
export function Button({ label, variant = 'primary', disabled = false, onClick }: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '16px',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.5 : 1,
  }

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: '#0070f3',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#0070f3',
      border: '2px solid #0070f3',
    },
  }

  return (
    <button
      style={{ ...baseStyles, ...variantStyles[variant] }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.opacity = '0.8'
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.opacity = '1'
        }
      }}
    >
      {label}
    </button>
  )
}

// Figma Code Connect mapping
figma.connect(Button, {
  figmaNodeUrl: 'https://www.figma.com/file/YOUR_FILE_KEY/Design?node-id=YOUR_NODE_ID',
  props: {
    label: figma.string('Label text'),
    variant: figma.enum('Variant', {
      primary: figma.boolean('Primary'),
      secondary: figma.boolean('Secondary'),
      outline: figma.boolean('Outline'),
    }),
    disabled: figma.boolean('Disabled'),
  },
  example: (props) => <Button {...props} />,
})

