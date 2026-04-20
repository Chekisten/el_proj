'use client'
import styles from '../styles/addingForms.module.css'

const AddingForms = () => {
  const handleSubmit = async (e, type) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    formData.append('contentType', type)
    try {
      const response = await fetch('/api/add-post', {
        method: 'POST',
        body: formData, // Заголовки Content-Type ставить НЕ НУЖНО, браузер сделает это сам
      });

      const result = await response.json();

      if (response.ok) {
        alert('Добавлено!');
        e.target.reset();
      } else {
        alert('Ошибка: ' + (result.error || 'Не удалось сохранить'));
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert('Критическая ошибка при отправке');
    }
  };

  return (
    <>
    <div className={styles.forms}>
        <h1>Формы добавления контента</h1>

               <h2>Добавить тур (заполнять все ячейки)</h2>

      
      <form onSubmit={(e) => handleSubmit(e, 'tours')} className={styles.baseForm}>
        <label htmlFor="name">Имя тура:</label>
        <input 
          id="name" 
          name="name" // Соответствует fields.name на сервере
          type="text" 
          placeholder="Введите имя" 
          required 
        />
        <label>Enter country of tours (Uzbekistan, Kazakhstan, Kyrgyzstan, Tadjikistan, International )</label>
        <label>
            <input type="radio" name="countryName" value="International" defaultChecked />
            International
        </label>

        <label>
            <input type="radio" name="countryName" value="Kyrgyzstan" />
            Kyrgyzstan
        </label>

        <label>
            <input type="radio" name="countryName" value="Uzbekistan" />
            Uzbekistan
        </label>

        <label>
            <input type="radio" name="countryName" value="Kazakhstan" />
            Kazakhstan
        </label>
        <label>
            <input type="radio" name="countryName" value="Tadjikistan" />
            Tadjikistan
        </label>


        <label htmlFor="description">short description</label>
        <textarea 
          id="description" 
          name="description" 
          type="text" 
          placeholder="description" 
          required 
        />
        
        <label htmlFor="fullDetails">full Details</label>
        <textarea 
          id="fullDetails" 
          name="fullDetails" 
          type="text" 
          placeholder="fullDetails" 
          required 
        />
        
        <label htmlFor="price">price (digit: 4000)</label>
        <input 
          id="price" 
          name="price" 
          type="number" 
          placeholder="1000" 
          required 
        />
        
        <label htmlFor="currency">currency $</label>
        <input 
          id="currency" 
          name="currency" 
          type="text" 
          placeholder="$" 
          required 
        />
        
        <label htmlFor="duration">duration (писать количество дней)</label>
        <input 
          id="duration" 
          name="duration" 
          type="text" 
          placeholder="5 or 5-7" 
          required 
        />
        
        <label htmlFor="time">Тип времени дни, часы, месяцы</label>
        <input 
          id="time" 
          name="time" 
          type="text" 
          placeholder="day or days" 
          required 
        />
        
        <label htmlFor="isHide">  Скрыть тур или нет </label>
        <label>
            <input type="radio" name="isHide" value= "false" defaultChecked/>
            показывать
        </label>        
        <label>
            <input type="radio" name="isHide" value= "true" />
            скрыть
        </label>

        
        <label htmlFor="isBest"> поменить как топ тур или нет(</label>
        <label>
            <input type="radio" name="isBest" value= "true" />
            топ тур
        </label>        
        <label>
            <input type="radio" name="isBest" value= "false" defaultChecked />
            не топ тур
        </label>
        <label htmlFor="alt">описание картинки необходимо для seo. это описание видно только тогда, когда не грузится картинка</label>
        <input 
          id="alt" 
          name="alt" 
          type="text" 
          placeholder="описание картинки" 
          required 
        />

        
        <label htmlFor="image">Фото:</label>
        <input 
          id="image"
          name="image" // Соответствует files.image на сервере
          type="file" 
          accept="image/*" 
          required 
        />
        
        <input type="submit" value="Опубликовать"></input>
      </form>
    </div>

    <div className={styles.forms}>
      <h1>Формы добавления контента</h1>
      <h2>Добавить Блоги (заполнять все ячейки)</h2>
      <form onSubmit={(e) => handleSubmit(e, 'blogs')} className={styles.baseForm}>
        <label htmlFor="head">Заголовок</label>
        <input 
          id="head" 
          name="head" 
          type="text" 
          placeholder="Заголовок блога" 
          required 
        />
        <label htmlFor="shortDescription">Короткое описание</label>
        <input 
          id="shortDescription" 
          name="shortDescription" 
          type="text" 
          placeholder="короткое описание" 
          required 
        />
        <label htmlFor="Description">Основной текст</label>
        <input 
          id="Description" 
          name="Description" 
          type="text" 
          placeholder="Основной текст" 
          required 
        />
        <legend>Enter country of tours (Uzbekistan, Kazakhstan, Kyrgyzstan, Tadjikistan, International )</legend>
        <label>
            <input type="radio" name="countryName" value="International" defaultChecked />
            International
        </label>

        <label>
            <input type="radio" name="countryName" value="Kyrgyzstan" />
            Kyrgyzstan
        </label>

        <label>
            <input type="radio" name="countryName" value="Uzbekistan" />
            Uzbekistan
        </label>

        <label>
            <input type="radio" name="countryName" value="Kazakhstan" />
            Kazakhstan
        </label>
        <label>
            <input type="radio" name="countryName" value="Tadjikistan" />
            Tadjikistan
        </label>

        <label htmlFor="isHide">  Скрыть блог или нет </label>
        <label>
            <input type="radio" name="isHide" value= "false" defaultChecked/>
            показывать
        </label>        
        <label>
            <input type="radio" name="isHide" value= "true" />
            скрыть
        </label>

        
        <label htmlFor="isBest"> поменить как топ блог или нет(</label>
        <label>
            <input type="radio" name="isBest" value= "true" />
            топ блог
        </label>        
        <label>
            <input type="radio" name="isBest" value= "false" defaultChecked />
            не топ блог
        </label>

        <label htmlFor="alt">описание картинки необходимо для seo. это описание видно только тогда, когда не грузится картинка</label>
        <input 
          id="alt" 
          name="alt" 
          type="text" 
          placeholder="описание картинки" 
          required 
        />
        <label htmlFor="image">Фото:</label>
        <input 
          id="image"
          name="image" // Соответствует files.image на сервере
          type="file" 
          accept="image/*" 
          required 
        />
        <input type="submit" value="Опубликовать"></input>
      </form>
    </div>

    <div className={styles.forms}>
      <h1>Формы добавления Отзывов</h1>
      <h2>Добавить отзывы(заполнять все ячейки)</h2>
      <form onSubmit={(e) => handleSubmit(e, 'reviews')} className={styles.baseForm}>
        <label htmlFor="name">Имя того, кто сделал отзыв</label>
        <input 
          id="name" 
          name="name" 
          type="text" 
          placeholder="Имя туриста" 
          required 
        />
        <label htmlFor="head">Заголовок отзыва</label>
        <input 
          id="head" 
          name="head" 
          type="text" 
          placeholder="заголовок отзыва" 
          required 
        />
        <label htmlFor="shortDescription">Короткое описание</label>
        <input 
          id="shortDescription" 
          name="shortDescription" 
          type="text" 
          placeholder="короткое описание" 
          required 
        />
        <label htmlFor="Description">Основной текст</label>
        <input 
          id="Description" 
          name="Description" 
          type="text" 
          placeholder="Основной текст" 
          required 
        />
        <label htmlFor="link">ссылка на источник</label>
        <input 
          id="link" 
          name="link" 
          type="text" 
          placeholder="exampe.com" 
          required 
        />
        <label htmlFor="source">Название источника</label>
        <input 
          id="source" 
          name="source" 
          type="text" 
          placeholder="TripAdvisor" 
          required 
        />
        <legend>Enter country of tours (Uzbekistan, Kazakhstan, Kyrgyzstan, Tadjikistan, International )</legend>
        <label>
            <input type="radio" name="countryName" value="International" defaultChecked />
            International
        </label>

        <label>
            <input type="radio" name="countryName" value="Kyrgyzstan" />
            Kyrgyzstan
        </label>

        <label>
            <input type="radio" name="countryName" value="Uzbekistan" />
            Uzbekistan
        </label>

        <label>
            <input type="radio" name="countryName" value="Kazakhstan" />
            Kazakhstan
        </label>
        <label>
            <input type="radio" name="countryName" value="Tadjikistan" />
            Tadjikistan
        </label>

        <label htmlFor="isHide">  Скрыть отзыв или нет </label>
        <label>
            <input type="radio" name="isHide" value= "false" defaultChecked/>
            показывать
        </label>        
        <label>
            <input type="radio" name="isHide" value= "true" />
            скрыть
        </label>

        
        <label htmlFor="isBest"> поменить как топ отзыв или нет(</label>
        <label>
            <input type="radio" name="isBest" value= "true" />
            топ 
        </label>        
        <label>
            <input type="radio" name="isBest" value= "false" defaultChecked />
            не топ 
        </label>
        <label htmlFor="alt">описание картинки необходимо для seo. это описание видно только тогда, когда не грузится картинка</label>
        <input 
          id="alt" 
          name="alt" 
          type="text" 
          placeholder="описание картинки" 
          required 
        />
        <label htmlFor="image">Фото:</label>
        <input 
          id="image"
          name="image" // Соответствует files.image на сервере
          type="file" 
          accept="image/*" 
          required 
        />
        <input type="submit" value="Опубликовать"></input>
      </form>
    </div>

    <div className={styles.forms}>
      <h1>Формы добавления фотографий</h1>
      <h2>Добавить отзывы(заполнять все ячейки)</h2>
      <form onSubmit={(e) => handleSubmit(e, 'photos')} className={styles.baseForm}>
        <label htmlFor="alt">описание картинки необходимо для seo. это описание видно только тогда, когда не грузится картинка</label>
        <input 
          id="alt" 
          name="alt" 
          type="text" 
          placeholder="описание картинки" 
          required 
        />


        <legend>Enter country of tours (Uzbekistan, Kazakhstan, Kyrgyzstan, Tadjikistan, International )</legend>
        <label>
            <input type="radio" name="countryName" value="International" defaultChecked />
            International
        </label>

        <label>
            <input type="radio" name="countryName" value="Kyrgyzstan" />
            Kyrgyzstan
        </label>

        <label>
            <input type="radio" name="countryName" value="Uzbekistan" />
            Uzbekistan
        </label>

        <label>
            <input type="radio" name="countryName" value="Kazakhstan" />
            Kazakhstan
        </label>
        <label>
            <input type="radio" name="countryName" value="Tadjikistan" />
            Tadjikistan
        </label>

        <label htmlFor="isHide">  Скрыть фото или нет </label>
        <label>
            <input type="radio" name="isHide" value= "false" defaultChecked/>
            показывать
        </label>        
        <label>
            <input type="radio" name="isHide" value= "true" />
            скрыть
        </label>

        
        <label htmlFor="isBest"> поменить как топ фото или нет(</label>
        <label>
            <input type="radio" name="isBest" value= "true" />
            топ 
        </label>        
        <label>
            <input type="radio" name="isBest" value= "false" defaultChecked />
            не топ 
        </label>
                <label htmlFor="image">Фото:</label>
        <input 
          id="image"
          name="image" // Соответствует files.image на сервере
          type="file" 
          accept="image/*" 
          required 
        />
        <input type="submit" value="Опубликовать"></input>
      </form>
    </div>


</>
  );
}

export default AddingForms;