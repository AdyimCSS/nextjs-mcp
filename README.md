# Next.js MCP - Figma Code Connect

โปรเจค Next.js ที่รวมการใช้งาน Figma Code Connect เพื่อเชื่อมต่อระหว่าง Figma design และ code components

## การติดตั้ง

```bash
npm install
```

## การใช้งาน

### 1. รัน development server

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

### 2. ติดตั้ง Figma Code Connect CLI

ใช้ผ่าน npx (แนะนำ):

```bash
npx @figma/code-connect
```

หรือติดตั้ง global (ต้องใช้ sudo):

```bash
sudo npm install -g @figma/code-connect
```

หลังจากติดตั้งแล้ว คุณสามารถใช้คำสั่ง `figma` ได้:

```bash
figma --version
```

### 3. ตั้งค่า Figma Code Connect

1. เปิด Figma และสร้างไฟล์ design ของคุณ
2. คัดลอก File Key จาก URL ของ Figma file (เช่น `https://www.figma.com/file/FILE_KEY/Design`)
3. แก้ไขไฟล์ `.figma/code-connect.json` และ component files (`components/Button.tsx`, `components/Card.tsx`) เพื่อเพิ่ม:
   - File Key ของ Figma file
   - Node ID ของ component ใน Figma

### 4. เชื่อมต่อกับ Figma

```bash
npm run code-connect
```

หรือ

```bash
npx @figma/code-connect
```

หรือถ้าติดตั้ง global แล้ว:

```bash
figma code-connect
```

### 5. ตรวจสอบสถานะการเชื่อมต่อ

```bash
figma --version
```

หรือ

```bash
npx @figma/code-connect --version
```

## Components

### Button
- อยู่ที่ `components/Button.tsx`
- รองรับ variants: primary, secondary, outline
- มี disabled state

### Card
- อยู่ที่ `components/Card.tsx`
- รองรับ title, description, และ image

## การเชื่อมต่อ Figma

1. เปิด Figma desktop app
2. ไปที่ Plugins > Code Connect
3. เลือก component ใน Figma เพื่อดู code ที่เชื่อมต่อ

## หมายเหตุ

- ต้องอัปเดต `YOUR_FILE_KEY` และ `YOUR_NODE_ID` ใน component files ด้วยค่าจริงจาก Figma
- ต้องมี Figma desktop app เพื่อใช้งาน Code Connect

