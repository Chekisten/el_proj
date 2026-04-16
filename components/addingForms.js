'use client'
import styles from '../styles/addingForms.module.css'

const AddingForms = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/add-post', {
        method: 'POST',
        body: formData, // Заголовки Content-Type ставить НЕ НУЖНО, браузер сделает это сам
      });

      const result = await response.json();

      if (response.ok) {
        alert('Добавлено! Картинка сохранена как: ' + result.path);
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
      <form onSubmit={handleSubmit} className={styles.baseForm}>
        <label htmlFor="name">Имя тура:</label>
        <input 
          id="name" 
          name="name" // Соответствует fields.name на сервере
          type="text" 
          placeholder="Введите имя" 
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
        
        <label htmlFor="isHide"> isHide Скрыть тур или нет (1 - скрыть, 0 - не скрывать)</label>
        <input 
          id="isHide" 
          name="isHide" 
          type="number" 
          placeholder="only 1 or 0" 
          required 
        />
        
        <label htmlFor="isBest">isBest поменить как топ тур или нет(1 -топ тур, 0 не топ тур)</label>
        <input 
          id="isBest" 
          name="isBest" 
          type="number" 
          placeholder="only 1 or 0" 
          required 
        />
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
        
        <button type="submit">Опубликовать</button>
      </form>
    </div>

    <div className={styles.forms}>
      <h1>Формы добавления контента</h1>
      <h2>Добавить Блоги (заполнять все ячейки)</h2>
      <form onSubmit={handleSubmit} className={styles.baseForm}>
        
        <button type="submit">Опубликовать</button>
      </form>
    </div>


</>
  );
}

export default AddingForms;