import fs from 'fs/promises';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: { bodyParser: false }, // Обязательно отключаем для загрузки файлов
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // Настройка папки загрузки
  const uploadDir = path.join(process.cwd(), 'public/photos');
  await fs.mkdir(uploadDir, { recursive: true });

  const form = formidable({
    uploadDir,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Formidable error:", err);
      return res.status(500).json({ error: "Ошибка загрузки файла" });
    }

    try {
      // В Formidable v3 поля — это массивы: [ 'значение' ]
      // В форме у вас <input name="name">, значит берем fields.name
      const name = fields.name ? fields.name[0] : "Без названия";

      // В форме у вас <input name="countryName">, значит берем fields.name
      const countryName = fields.countryName ? fields.countryName[0] : "International";
      // В форме у вас <input name="description">, значит берем fields.name
      const description = fields.description ? fields.description[0] : "No description";
      // В форме у вас <input name="fullDetails">, значит берем fields.name
      const fullDetails = fields.fullDetails ? fields.fullDetails[0] : "No details";
      // В форме у вас <input name="price">, значит берем fields.name
      const price = fields.price ? fields.price[0] : 0;
      // В форме у вас <input name="currency">, значит берем fields.name
      const currency = fields.currency ? fields.currency[0] : "$";
      // В форме у вас <input name="duration">, значит берем fields.name
      const duration = fields.duration ? fields.duration[0] : "No duration";
      // В форме у вас <input name="time">, значит берем fields.name
      const time = fields.time ? fields.time[0] : "days";
      // В форме у вас <input name="isHide">, значит берем fields.name
      const isHide = fields.isHide ? fields.isHide[0] : 1;
      // В форме у вас <input name="isBest">, значит берем fields.name
      const isBest = fields.isBest ? fields.isBest[0] : 0;
      // В форме у вас <input name="isBest">, значит берем fields.name
      const alt = fields.alt ? fields.alt[0] : "";
      
      // Файлы тоже массивы. В форме <input name="image">
      const imageFile = files.image ? files.image[0] : null;
      
      if (!imageFile) {
        return res.status(400).json({ error: "Файл не найден" });
      }

      // Путь для сохранения в JSON (то, как браузер будет видеть картинку)
      const imageUrl = `/photos/${imageFile.newFilename}`;

      // Работа с БД
      const dbPath = path.join(process.cwd(), 'database/db.json');
      const fileData = await fs.readFile(dbPath, 'utf8');
      const db = JSON.parse(fileData);

      // Добавляем новую запись
      db.tours.push({ 
        id: Date.now(), 
        name: name, 
        countryName: countryName,
        description: description,
        fullDetails: fullDetails,
        img: imageUrl,
        price: price,
        currency: currency,
        duration: duration,
        time: time,
        isHide: isHide,
        isBest: isBest,
        alt: alt

      });

      await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
      
      res.status(200).json({ success: true, path: imageUrl });
    } catch (error) {
      console.error("DB error:", error);
      res.status(500).json({ error: "Ошибка сохранения в базу данных" });
    }
  });
}