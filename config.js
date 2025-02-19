const menuItems = [
    //// เมนูแนะนำ
    {
        name: "1. สเต็กเนื้อริบอาย",
        price: "170 บาท",
        category: "เมนูแนะนำ",
        description: "เมนูแนะนำ",
    },
    {
        name: "2. สเต็กเนื้อทีโบน",
        price: "220 บาท",
        category: "เมนูแนะนำ",
        description: "เมนูแนะนำ",
    },
    {
        name: "3. บาบุ้งเนื้อ",
        price: "50 บาท",
        category: "เมนูแนะนำ",
        description: "เมนูแนะนำ",
    },
    {
        name: "4. ก๋วยจั๊บญวนปลาช่อน",
        price: "60 บาท",
        category: "เมนูแนะนำ",
        description: "เมนูแนะนำ",
    },

        {
        name: "5. เนื้อพวง",
        price: "100 บาท",
        category: "เมนูแนะนำ",
        description: "เมนูแนะนำ",
    },
    {
        name: "6. ไก่โอ่ง",
        price: "160 บาท",
        category: "เมนูแนะนำ",
        description: "เมนูแนะนำ",
    },
    {
        name: "7. เนื้อย่าง-ตับย่างน้ำจิ้มแจ่ว",
        price: "120 บาท",
        category: "เมนูแนะนำ",
        description: "เมนูแนะนำ",
    },

    //// เมนูอาหารจานเดียว
    {
        name: "1. ข้าวหมกไก่",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "2. ข้าวหมกแพะ",
        price: "80 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "3. ข้าวมันไก่",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "4. ข้าวเนื้อแดง",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "5. ข้าวผัดกุ้ง",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "6. ข้าวผัดปู",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "7. ข้าวคลุกกะปิ",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "8. ข้าวยำไก่แซ่บ",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "9. ข้าวหน้าเป็ด",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "10. หมี่หยกเป็ด",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "11. ก๋วยเตี๋ยวเป็ด",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "12. ข้าวยำแหนม",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "13. ข้าวขาวัว",
        price: "100 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "14. ข้าต้มทะเล",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "15. ข้าวซอยเนื้อ",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "16. ข้าวซอยไก่",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "17. ก๋วยเตี๋ยวแกง",
        price: "70 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "18. ราดหน้าหมี่กรอบ",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "19. ก๋วยเตี๋ยวเนื้อตุ๋น/เนื้อสไลด์",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "20. ก๋วยเตี๋ยวเย็นตาโฟ",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "21. ก๋วยเตียวเครื่องใน",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "22. ต้มเครื่องใน",
        price: "70 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "23. บะหมี่เกี๋ยวน้ำ",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "24. สุกี้ทะเล",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "25. กระเพาะปลา",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "26. หอยกระทะร้อน",
        price: "50 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "27. ข้าวเนื้อย่าง",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "28. ข้าวตับย่าง",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "29. ข้าวกะเพราเนื้อย่าง",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "30. ข้าวกะเพราตับย่าง",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "31. ข้าวกะเพราเนื้อตุ๋น",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "32. สปาเก็ตตี้ราดซอส",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "33. สปาเก็ตตี้คาโบนาร่า",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    {
        name: "34. สปาเก็ตตี้ขี้เมาทะเล",
        price: "60 บาท",
        category: "เมนูอาหารจานเดียว",
        description: "เมนูอาหารจานเดียว",
    },
    


    //// เมนูกับข้าว

    {
        name: "1. เป็ดย่าง",
        price: "300/600 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "2. ทอดมันทอด",
        price: "50 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "3. ทอดมันสด",
        price: "100/200 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "4. ซุปกีบวัว",
        price: "100 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "5. ห่อหมก",
        price: "50 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "6. แกงส้มแป๊ะซะ",
        price: "170 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "7. ปลานึ่งมะนาว",
        price: "200 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "8. ปลาทอดสมุนไพร",
        price: "200 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "9.ยำปลาดุกฟู",
        price: "50 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "10. เนื้อสะเต๊ะ",
        price: "100 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "11. กะเพราเนื้อย่าง",
        price: "100 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "12. กะเพราตับย่าง",
        price: "100 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "13. กะเพราเนื้อตุ๋น",
        price: "100 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "14. เนื้อย่างน้ำจิ้มแจ่ว",
        price: "120 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "15. ตับย่างน้ำจิ้มแจ่ว",
        price: "120 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "16. เนื้อย่าง-ตับย่างน้ำจิ้มแจ่ว",
        price: "120 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    {
        name: "17. ไก่โอง",
        price: "160 บาท",
        category: "เมนูกับข้าว",
        description: "เมนูกับข้าว",
    },
    //// เมนูของแซ่บ
    {
        name: "1. น้ำตก",
        price: "100 บาท",
        category: "เมนูของแซ่บ",
        description: "เมนูของแซ่บ",
    },
    {
        name: "2. ตับหวาน",
        price: "100 บาท",
        category: "เมนูของแซ่บ",
        description: "เมนูของแซ่บ",
    },
    {
        name: "3. ส้มตำถาด",
        price: "120 บาท",
        category: "เมนูของแซ่บ",
        description: "เมนูของแซ่บ",
    },
    {
        name: "4. ตำเส้นเล็กทะเลรวม",
        price: "120 บาท",
        category: "เมนูของแซ่บ",
        description: "เมนูของแซ่บ",
    },
    {
        name: "5. ตำไทย",
        price: "50 บาท",
        category: "เมนูของแซ่บ",
        description: "เมนูของแซ่บ",
    },
    {
        name: "6. ตำปูปลาร้า",
        price: "50 บาท",
        category: "เมนูของแซ่บ",
        description: "เมนูของแซ่บ",
    },
    {
        name: "7. ยำรวมมิตร",
        price: "80 บาท",
        category: "เมนูของแซ่บ",
        description: "เมนูของแซ่บ",
    },
    {
        name: "8. เนื้อพวง",
        price: "100 บาท",
        category: "เมนูของแซ่บ",
        description: "เมนูของแซ่บ",
    },
    //// เมนูทานเล่น 
    {
        name: "1. สาคู/ข้าวเกรียบปากหม้อ",
        price: "40 บาท",
        category: "เมนูทานเล่น",
        description: "เมนูทานเล่น",
    },
    {
        name: "2. ลูกชิ้น/ฮอทดอก/เนื้อย่าง",
        price: "10/20/30 บาท",
        category: "เมนูทานเล่น",
        description: "เมนูทานเล่น",
    },
    {
        name: "3. ปอเปี๊ยะทอด",
        price: "35 บาท",
        category: "เมนูทานเล่น",
        description: "เมนูทานเล่น",
    },
    {
        name: "4. นักเก็ต/เฟรนฟราย",
        price: "40 บาท",
        category: "เมนูทานเล่น",
        description: "เมนูทานเล่น",
    },
    {
        name: "5. เต้าหู้ทอด/เผือกทอด/ข้าวโพ/หัวไชเท้าทอด",
        price: "35 บาท",
        category: "เมนูทานเล่น",
        description: "เมนูทานเล่น",
    },
    {
        name: "6. บาบีคิว(BBQ) เนื้อ/ไก่",
        price: "20 บาท",
        category: "เมนูทานเล่น",
        description: "เมนูทานเล่น",
    },
    {
        name: "7. ขนมจีบ",
        price: "50 บาท",
        category: "เมนูทานเล่น",
        description: "เมนูทานเล่น",
    },
    //// เมนูสเต็ก 
    {
        name: "1. สเต็กเนื้อริบอาย",
        price: "170 บาท",
        category: "เมนูสเต็ก",
        description: "เมนูสเต็ก",
    },
    {
        name: "2. สเต็กเนื้อทีโบน",
        price: "220 บาท",
        category: "เมนูสเต็ก",
        description: "เมนูสเต็ก",
    },
    {
        name: "3. สเต็กไก่",
        price: " บาท",
        category: "เมนูสเต็ก",
        description: "เมนูสเต็ก",
    },
    {
        name: "4. ผัดไทย",
        price: "60 บาท",
        category: "เมนูสเต็ก",
        description: "เมนูสเต็ก",
    },
    //// เมนูของหวาน 
    {
        name: "1. มะตะบะหวาน",
        price: "50 บาท",
        category: "เมนูของหวาน",
        description: "เมนูของหวาน",
    },
    {
        name: "2. มะตะบะเค็ม",
        price: "50 บาท",
        category: "เมนูของหวาน",
        description: "เมนูของหวาน",
    },
    {
        name: "3. สาหริ่ม/ทับทิมกรอบ",
        price: "35 บาท",
        category: "เมนูของหวาน",
        description: "เมนูของหวาน",
    },
    {
        name: "4. บัวลอยไข่หวาน",
        price: "35 บาท",
        category: "เมนูของหวาน",
        description: "เมนูของหวาน",
    },
    {
        name: "5. เฉาก๊วย",
        price: "30 บาท",
        category: "เมนูของหวาน",
        description: "เมนูของหวาน",
    },
    {
        name: "6. ขนมปังสังขยา",
        price: "40 บาท",
        category: "เมนูของหวาน",
        description: "เมนูของหวาน",
    },
    {
        name: "7. ทองม้วน",
        price: "35 บาท",
        category: "เมนูของหวาน",
        description: "เมนูของหวาน",
    },
    {
        name: "8. ทองพับ",
        price: "35 บาท",
        category: "เมนูของหวาน",
        description: "เมนูของหวาน",
    },
    {
        name: "9. ทองม้วนสด",
        price: "35 บาท",
        category: "เมนูของหวาน",
        description: "เมนูของหวาน",
    },
    {
        name: "10. ข้าวเหนียวมะม่วง",
        price: "60 บาท",
        category: "เมนูของหวาน",
        description: "เมนูของหวาน",
    },
    //// เมนูอาหารเวียดนาม 
    {
        name: "1. ก๋วยจั๊บญวนปลาช่อน",
        price: "60 บาท",
        category: "เมนูอาหารเวียดนาม",
        description: "เมนูอาหารเวียดนาม",
    },
    {
        name: "2. บาบุ้งเนื้อ",
        price: "65 บาท",
        category: "เมนูอาหารเวียดนาม",
        description: "เมนูอาหารเวียดนาม",
    },
    {
        name: "3. ปากหม้อญวน",
        price: "50 บาท",
        category: "เมนูอาหารเวียดนาม",
        description: "เมนูอาหารเวียดนาม",
    },
    {
        name: "4. แหนมเนือง",
        price: "170 บาท",
        category: "เมนูอาหารเวียดนาม",
        description: "เมนูอาหารเวียดนาม",
    },
    //// เมนูเครื่องดื่ม 
    {
        name: "1. น้ำเก๊กฮวย",
        price: "20 บาท",
        category: "เมนูเครื่องดื่ม",
        description: "เมนูเครื่องดื่ม",
    },
    {
        name: "2. น้ำชาดำเย็น",
        price: "20 บาท",
        category: "เมนูเครื่องดื่ม",
        description: "เมนูเครื่องดื่ม",
    },
    {
        name: "3. น้ำบลูเลม่อน",
        price: "20 บาท",
        category: "เมนูเครื่องดื่ม",
        description: "เมนูเครื่องดื่ม",
    },
    {
        name: "4. น้ำลิ้นจี่",
        price: "20 บาท",
        category: "เมนูเครื่องดื่ม",
        description: "เมนูเครื่องดื่ม",
    },
    {
        name: "5. น้ำองุ่น",
        price: "20 บาท",
        category: "เมนูเครื่องดื่ม",
        description: "เมนูเครื่องดื่ม",
    },
    {
        name: "6. น้ำเปล่า",
        price: "10 บาท",
        category: "เมนูเครื่องดื่ม",
        description: "เมนูเครื่องดื่ม",
    },
    {
        name: "7. น้ำอัดลม",
        price: "30 บาท",
        category: "เมนูเครื่องดื่ม",
        description: "เมนูเครื่องดื่ม",
    },
    {
        name: "8. น้ำแข็งเปล่า",
        price: "2แก้ว5 บาท",
        category: "เมนูเครื่องดื่ม",
        description: "เมนูเครื่องดื่ม",
    },
    {
        name: "9. ชาชีส",
        price: "30 บาท",
        category: "เมนูเครื่องดื่ม",
        description: "เมนูเครื่องดื่ม",
    },
 

];
