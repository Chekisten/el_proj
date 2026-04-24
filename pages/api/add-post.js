// pages/api/add-post.js
import fs from 'fs/promises';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: { bodyParser: false }, // Отключаем стандартный парсер для работы с файлами
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // 1. Настройка папки для фото
  const uploadDir = path.join(process.cwd(), 'public', 'photos');
  await fs.mkdir(uploadDir, { recursive: true });

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    multiples: false,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Ошибка загрузки файла" });

    try {
      // 2. Извлекаем данные
      const contentType = fields.contentType[0]; // tours или blogs
      //const imageFile = files.image[0];
      
      // Собираем все текстовые поля в один объект
      const contentData = {};
      Object.keys(fields).forEach(key => {
        if (key !== 'contentType') {
          contentData[key] = fields[key][0];
        }
      });

      // Добавляем путь к фото и ID
      contentData.id = Date.now();

      const uploadedFile = files.image ? files.image[0] : null;

      if (uploadedFile && uploadedFile.newFilename) {
        contentData.img = `/photos/${uploadedFile.newFilename}`;
      } else {
        contentData.img = null;
      }

// для добавления информации на страницы типов туров--------------------------------------------------
      const uploadedFileMain = files.imageMain ? files.imageMain[0] : null;

      if (uploadedFileMain && uploadedFileMain.newFilename) {
        contentData.imageMain = `/photos/${uploadedFileMain.newFilename}`;
      } else {
        contentData.imageMain = null;
      }


      const uploadedFileFirstImg = files.firstImg ? files.firstImg[0] : null;

      if (uploadedFileFirstImg && uploadedFileFirstImg.newFilename) {
        contentData.firstImg = `/photos/${uploadedFileFirstImg.newFilename}`;
      } else {
        contentData.firstImg = null;
      }


      const uploadedFileSecondImg = files.secondImg ? files.secondImg[0] : null;

      if (uploadedFileSecondImg && uploadedFileSecondImg.newFilename) {
        contentData.secondImg = `/photos/${uploadedFileSecondImg.newFilename}`;
      } else {
        contentData.secondImg = null;
      }
// для добавления информации на страницы типов туров--------------------------------------------------
      // 3. Записываем в db.json
      const dbPath = path.join(process.cwd(), 'database', 'db.json');
      const fileData = await fs.readFile(dbPath, 'utf8');
      const db = JSON.parse(fileData);

      if (db[contentType]) {
        db[contentType].push(contentData);
      }

      await fs.writeFile(dbPath, JSON.stringify(db, null, 2));

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Ошибка базы данных" });
    }
  });
}