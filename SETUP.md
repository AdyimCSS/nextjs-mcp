# Next.js MCP with Figma Code Connect

โปรเจกต์นี้เป็นตัวอย่างการเชื่อมต่อ React components กับ Figma design โดยใช้ Figma Code Connect

## คุณสมบัติ

- ✅ Next.js 14 with TypeScript
- ✅ Figma Code Connect integration
- ✅ Button component พร้อม variants และ sizes
- ✅ Tailwind CSS สำหรับ styling

## การติดตั้ง

1. ติดตั้ง dependencies:
```bash
npm install
```

2. สร้างไฟล์ `.env.local` และเพิ่ม environment variables:
```env
PERSONAL_ACCESS_TOKEN=####
FIGMA_FILE_KEY=###
NODE_ID=##:##
```

## การรันโปรเจกต์

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

## โครงสร้างโปรเจกต์

```
nextjs-mcp/
├── app/                    # Next.js App Router
│   ├── page.tsx           # หน้าแรกแสดงตัวอย่าง Button
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Button.tsx         # Button component พร้อม Figma Code Connect
│   └── Button.module.css  # CSS styles สำหรับ Button
├── code-connect.json      # Figma Code Connect configuration
├── package.json
└── tsconfig.json
```

## Figma Code Connect

### Button Component

Button component ถูกเชื่อมต่อกับ Figma design ผ่าน:
- **Figma URL**: https://www.figma.com/design/J2LLnfBQi1MCjF2DREqdrD/nextjs-mcp?node-id=0-1
- **Node ID**: `0:1`

### การใช้งาน Button

```tsx
import Button from '@/components/Button';

// Primary button
<Button label="Click Me" variant="primary" />

// Secondary button
<Button label="Secondary" variant="secondary" />

// Outline button
<Button label="Outline" variant="outline" />

// Different sizes
<Button label="Small" size="small" />
<Button label="Medium" size="medium" />
<Button label="Large" size="large" />

// With click handler
<Button 
  label="Click Me" 
  onClick={() => console.log('Clicked!')} 
/>

// Disabled state
<Button label="Disabled" disabled />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | required | ข้อความที่แสดงบนปุ่ม |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | สไตล์ของปุ่ม |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | ขนาดของปุ่ม |
| `onClick` | `() => void` | - | ฟังก์ชันที่เรียกเมื่อคลิก |
| `disabled` | `boolean` | `false` | สถานะ disabled |

## การเชื่อมต่อกับ Figma

1. เปิด Figma และไปที่ design file
2. เลือก component ที่ต้องการเชื่อมต่อ
3. คัดลอก node ID จาก URL
4. เพิ่ม component ใน `code-connect.json`
5. เพิ่ม `@figma` annotation ใน component file

## License

MIT
