# Figma Code Connect Configuration

ไฟล์นี้ใช้สำหรับกำหนดค่า Figma Code Connect

## ไฟล์ `code-connect.json`

ไฟล์นี้กำหนดการเชื่อมต่อระหว่าง code components และ Figma components

### ตัวอย่างการตั้งค่า:

```json
{
  "name": "nextjs-mcp",
  "version": "1.0.0",
  "languages": [
    {
      "name": "typescript",
      "extension": ".tsx"
    }
  ],
  "components": [
    {
      "source": "components/Button.tsx",
      "target": "YOUR_FIGMA_FILE_KEY",
      "figmaNodeName": "Button"
    }
  ]
}
```

### วิธีการหา File Key:

1. เปิด Figma file ในเบราว์เซอร์
2. ดู URL: `https://www.figma.com/file/FILE_KEY/Design`
3. คัดลอก `FILE_KEY` มาใส่ใน `target` field

### วิธีการหา Node ID:

1. เปิด Figma desktop app
2. เลือก component ใน Figma
3. คลิกขวา > Copy/Paste as > Copy link to selection
4. Node ID จะอยู่ใน URL parameter `node-id=`

## การใช้งาน

หลังจากตั้งค่าแล้ว รัน:

```bash
npx @figma/code-connect
```

หรือ

```bash
figma code-connect
```

