# Figma Code Connect Guide

## วิธีหา FIGMA_COMPONENT_ID

### วิธีที่ 1: ใช้ Figma URL (แนะนำ - ง่ายที่สุด)

1. เปิด Figma Desktop app หรือ Figma Web
2. เลือก component ที่ต้องการเชื่อมต่อ
3. คลิกขวาที่ component → เลือก **"Copy link"** หรือ **"Copy/Paste as" → "Copy link"**
4. วางลิงก์ที่ได้ จะมีรูปแบบดังนี้:
   ```
   https://www.figma.com/file/FILE_ID/FILE_NAME?node-id=123%3A456
   ```
   หรือ
   ```
   https://www.figma.com/design/FILE_ID/FILE_NAME?node-id=123-456
   ```

5. คัดลอกส่วน `node-id` จาก URL:
   - หากเป็น `123%3A456` ให้แปลงเป็น `123:456` (เปลี่ยน `%3A` เป็น `:`)
   - หากเป็น `123-456` ให้แปลงเป็น `123:456` (เปลี่ยน `-` เป็น `:`)

### วิธีที่ 2: ใช้ Browser DevTools (สำหรับ Figma Web)

1. เปิด Figma Web และเลือก component
2. กด F12 เพื่อเปิด DevTools
3. ไปที่ tab **Console**
4. เปิด **Layers Panel** ใน Figma และเลือก component
5. ใน Console พิมพ์:
   ```javascript
   figma.currentPage.selection[0].id
   ```
   หรือ
   ```javascript
   figma.getNodeByIdAsync(figma.currentPage.selection[0].id)
   ```

### วิธีที่ 3: ใช้ Figma Plugin

1. เปิด Figma
2. ไปที่ **Plugins** → **Browse all plugins**
3. ค้นหา plugin ชื่อ **"Component ID"** หรือ **"Copy ID"**
4. ติดตั้งและใช้งาน plugin เพื่อคัดลอก Component ID

### ตัวอย่างการใช้งาน

หลังจากได้ Component ID แล้ว ให้ใส่ในไฟล์ `.figma.tsx`:

```typescript
/**
 * @figmaId 123:456
 * @component Button
 */
import * as React from "react";
import { Button } from "../ui/button";

export default function ButtonFigma(props: {
  // ... props
}) {
  // ...
}
```

### หมายเหตุ

- Component ID จะมีรูปแบบ `เลข:เลข` เช่น `123:456`
- Instance ID จะไม่เหมือนกัน ต้องใช้ Component ID จาก main component
- ถ้าหา component ใน file ที่ซับซ้อน ให้ใช้ **Layers Panel** เพื่อหาได้ง่ายขึ้น

