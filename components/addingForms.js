'use client'
import { useState } from 'react';
import styles from '../styles/addingForms.module.css'
import FuncIcon from './funcIcon';
import data from "../database/db.json"

const AddingForms = () => {
  const handleSubmit = async (e, type) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    formData.append('contentType', type);

     const smilesArray = formData.getAll('smiles'); 
    
    // 2. Удаляем старые конфликтующие записи из formData
    formData.delete('smiles');
    
    // 3. Записываем их заново как одну строку через запятую: "wifi,food"
    formData.append('smiles', smilesArray.join(',')); 


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

  let typeOfAdding = "tours";
  const [typeOfAdd, setTypeOfAdd] = useState(typeOfAdding)
  const [tours, setTours] = useState(data.tours)
  return (
    <>
    <br/>
    <br/>
    <br/>

    <h1>Формы добавления контента</h1>
    <div className={styles.navBar}>
        <button onClick={() => setTypeOfAdd('tours')}>Добавление туров</button>
        <button onClick={() => setTypeOfAdd('moments')}>Добавление moments для туров</button>
        <button onClick={() => setTypeOfAdd('steps')}>Добавление steps для туров</button>
        <button onClick={() => setTypeOfAdd('blogs')}>Добавление блогов</button>
        <button onClick={() => setTypeOfAdd('reviews')}>Добавление отзывов</button>
        <button onClick={() => setTypeOfAdd('photos')}>Добавление фотографий для слайдеров</button>
        <button onClick={() => setTypeOfAdd('tourTypes')}>Добавление информации на страницы по типам туров</button>
         <button onClick={() => setTypeOfAdd('tourDetail')}>Добавление что входит и что не входит в тур</button>

    </div>
    <div className='base'>
      <h2>Уникальные имена туров</h2>
      {
        tours.map(tour => {
          return (
            <>
              <p> {tour.name} ------ {tour.uniqName}</p>
            </>
          )
        })
      }
    </div>

    { 
      typeOfAdd == "tours" &&
        <> 
          <div className='base'>
      <div className="gradient">
          <div class="gradient-line-left"></div>
          <h2>Добавить тур (заполнять все ячейки)</h2>
          <div class="gradient-line-right"></div>
      </div>
      <div className={styles.forms}>
        <form onSubmit={(e) => handleSubmit(e, 'tours')} className={styles.baseForm}>
          
          <div className={styles.formEl}>
            <label htmlFor="name">Имя тура:</label>
            <input 
              id="name" 
              name="name" // Соответствует fields.name на сервере
              type="text" 
              placeholder="Введите имя" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="uniqName">Уникальное имя тура (на английском и без пробелов)</label>
            <input 
              id="uniqName" 
              name="uniqName" // Соответствует fields.name на сервере
              type="text" 
              placeholder="uniq-tour-name" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="metaTags">Введите мета теги</label>
            <input 
              id="metaTags" 
              name="metaTags" // Соответствует fields.name на сервере
              type="text" 
              placeholder="kygystan, Alay" 
              required 
            />
          </div>


          <div className={styles.formEl}>
            <label>Enter country of tours (Uzbekistan, Kazakhstan, Kyrgyzstan, Tadjikistan, International )</label>
            <div className={styles.radioForm}>
              
              <label>
                  <input type="radio" name="countryName" value="international" defaultChecked />
                  International
              </label>

              <label>
                  <input type="radio" name="countryName" value="kyrgyzstan" />
                  Kyrgyzstan
              </label>

              <label>
                  <input type="radio" name="countryName" value="uzbekistan" />
                  Uzbekistan
              </label>

              <label>
                  <input type="radio" name="countryName" value="kazakhstan" />
                  Kazakhstan
              </label>
              <label>
                  <input type="radio" name="countryName" value="tadjikistan" />
                  Tadjikistan
              </label>
            </div>
          </div>

          <div className={styles.formEl}>
            <label>Enter type of tours (Citites tours, culture tours, Trekking tours, Horsing or auto tours )</label>
            <div className={styles.radioForm}>
              
              <label>
                  <input type="radio" name="tourType" value="cities" defaultChecked />
                  by Cities
              </label>

              <label>
                  <input type="radio" name="tourType" value="culture" />
                  Culture
              </label>

              <label>
                  <input type="radio" name="tourType" value="trekking" />
                  Trekking
              </label>

              <label>
                  <input type="radio" name="tourType" value="horsing" />
                  Horsing
              </label>
              <label>
                  <input type="radio" name="tourType" value="auto" />
                  Auto
              </label>
            </div>
          </div>
          <div className={styles.formEl}>
            <label htmlFor="motto">Какой то лозунг</label>
            <input 
              id="motto" 
              name="motto" 
              type="text" 
              placeholder="Feels good" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="description">short description</label>
            <textarea 
              id="description" 
              name="description" 
              type="text" 
              placeholder="description" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="fullDetails">full Details</label>
            <textarea 
              id="fullDetails" 
              name="fullDetails" 
              type="text" 
              placeholder="fullDetails" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="price">price (digit: 4000)</label>
            <input 
              id="price" 
              name="price" 
              type="number" 
              placeholder="1000" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="currency">currency $</label>
            <input 
              id="currency" 
              name="currency" 
              type="text" 
              placeholder="$" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="duration">duration (писать количество дней)</label>
            <input 
              id="duration" 
              name="duration" 
              type="text" 
              placeholder="5 or 5-7" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="time">Тип времени дни, часы, месяцы</label>
            <input 
              id="time" 
              name="time" 
              type="text" 
              placeholder="day or days" 
              required 
            />
          </div>
          <div className={styles.formEl}>
            <label htmlFor="groupSize">Размер группы</label>
            <input 
              id="groupSize" 
              name="groupSize" 
              type="text" 
              placeholder="2-5 men" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="destination">Направление тура</label>
            <input 
              id="destination" 
              name="destination" 
              type="text" 
              placeholder="Памир – Алайские горы, южный Кыргызстан, Ошская область." 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="isHide">  Скрыть тур или нет </label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isHide" value= "false" defaultChecked/>
                  показывать
              </label>        
              <label>
                  <input type="radio" name="isHide" value= "true" />
                  скрыть  
              </label>
            </div>
          </div>
          
          <div className={styles.formEl}>
            <label htmlFor="isBest"> поменить как топ тур или нет</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isBest" value= "true" />
                  топ тур
              </label>        
              <label>
                  <input type="radio" name="isBest" value= "false" defaultChecked />
                  не топ тур
              </label>
            </div>
          </div>
          

          <div className={styles.formEl}>
            <label htmlFor="alt">описание картинки необходимо для seo. это описание видно только тогда, когда не грузится картинка</label>
            <input 
              id="alt" 
              name="alt" 
              type="text" 
              placeholder="описание картинки" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="image">Фото:</label>
            <input 
              id="image"
              name="image" // Соответствует files.image на сервере
              type="file" 
              accept="image/*" 
              required 
            />
          </div>


          

          <div className={styles.formEl}>
            <label htmlFor="introImg">Фотография которая будет находится в самом верху под текстом названия тура</label>
            <input 
              id="introImg"
              name="introImg" // Соответствует files.image на сервере
              type="file" 
              accept="image/*" 
              required 
            />
          </div>

          

          <div className={styles.formEl}>
            <label htmlFor="text1stPart">Первый абзац вступительного текста</label>
            <textarea  
              id="text1stPart" 
              name="text1stPart" 
              type="text" 
              placeholder="Памир – Алайские горы, южный Кыргызстан, Ошская область." 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="text2ndPart">Второй абзац вступительного текста</label>
            <textarea 
              id="text2ndPart" 
              name="text2ndPart" 
              type="text" 
              placeholder="Памир – Алайские горы, южный Кыргызстан, Ошская область." 
              required 
            />
          </div>


          <div className={styles.formEl}>
            <label htmlFor="hotel">Прописать тип проживания </label>
            <textarea 
              id="hotel" 
              name="hotel" 
              type="text" 
              placeholder="2 ночи в палатках / 6 ночей в юртовых лагерях / 5 ночей в гостевых домах" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="typeOfRoute">Прописать тип тура именно возможно развёрнуто ну или можно одним словом</label>
            <input 
              id="typeOfRoute" 
              name="typeOfRoute" 
              type="text" 
              placeholder="Trekking" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="distance">Дистанция тура</label>
            <input 
              id="distance" 
              name="distance" 
              type="text" 
              placeholder="120 km" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="tourHeight">Максимальная и минимальная высота маршрута над уровнем моря</label>
            <input 
              id="tourHeight" 
              name="tourHeight" 
              type="text" 
              placeholder="max Height 1200m / min Height 700m" 
              required 
            />
          </div>


          <div className={styles.formEl}>
            <label htmlFor="probablyMonths">Месяци в которые возможно проведение тура</label>
            <input 
              id="probablyMonths" 
              name="probablyMonths" 
              type="text" 
              placeholder="Май - Октябрь" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="startPoint">Начальная точка тура</label>
            <input 
              id="startPoint" 
              name="startPoint" 
              type="text" 
              placeholder="Bishkek" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="endPoint">Конечная точка тура тура</label>
            <input 
              id="endPoint" 
              name="endPoint" 
              type="text" 
              placeholder="Osh" 
              required 
            />
          </div>

         

          <div className={styles.formEl}>
            <label htmlFor="map">Ссылка на карту</label>
            <input 
              id="map" 
              name="map" 
              type="text" 
              placeholder="google.maps" 
              required 
            />
          </div>



          <input type="submit" value="Опубликовать"></input>
        </form>
      </div>
          </div>  
        </>
    }
    { 
      typeOfAdd == "moments" &&
        <>
        <div className='base'>
          <div className="gradient">
              <div class="gradient-line-left"></div>
              <h2>Добавить моменты тура (заполнять все ячейки)</h2>
              <div class="gradient-line-right"></div>
          </div>
          <div className={styles.forms}>
        <form onSubmit={(e) => handleSubmit(e, 'moments')} className={styles.baseForm}>

          <div className={styles.formEl}>
            <label htmlFor="uniqName">Уникальное имя тура (на английском и без пробелов) к нему привязывается этот moment и отображается на странице тура</label>
            <input 
              id="uniqName" 
              name="uniqName" // Соответствует fields.name на сервере
              type="text" 
              placeholder="uniq-tour-name" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="header">header</label>
            <input 
              id="header" 
              name="header" 
              type="text" 
              placeholder="some header" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="text">text для моментов</label>
            <textarea 
              id="text" 
              name="text" 
              type="text" 
              placeholder="some text" 
              required 
            />
          </div>

          

          
          <div className={styles.formEl}>
            <label htmlFor="isHide">  Скрыть это момент или нет  </label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isHide" value= "false" defaultChecked/>
                  показывать
              </label>        
              <label>
                  <input type="radio" name="isHide" value= "true" />
                  скрыть  
              </label>
            </div>
          </div>
          
    
          

          <div className={styles.formEl}>
            <label htmlFor="alt">описание картинки необходимо для seo. это описание видно только тогда, когда не грузится картинка</label>
            <input 
              id="alt" 
              name="alt" 
              type="text" 
              placeholder="описание картинки" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="image">Фото:</label>
            <input 
              id="image"
              name="image" // Соответствует files.image на сервере
              type="file" 
              accept="image/*" 
              required 
            />
          </div>




          <input type="submit" value="Опубликовать"></input>
        </form>
      </div>
        </div>
      </>
    }
    {
      typeOfAdd == "steps" &&
        <>
          <div className='base'>
          <div className="gradient">
              <div class="gradient-line-left"></div>
              <h2>Добавить день тура (заполнять все ячейки)</h2>
              <div class="gradient-line-right"></div>
          </div>

          <div className={styles.forms}>
        <form onSubmit={(e) => handleSubmit(e, 'steps')} className={styles.baseForm}>

          <div className={styles.formEl}>
            <label htmlFor="uniqName">Уникальное имя тура (на английском и без пробелов) к нему привязывается этот день и отображается на странице тура</label>
            <input 
              id="uniqName" 
              name="uniqName" // Соответствует fields.name на сервере
              type="text" 
              placeholder="uniq-tour-name" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="header">header</label>
            <input 
              id="header" 
              name="header" 
              type="text" 
              placeholder="some header" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="text">text дня</label>
            <textarea 
              id="text" 
              name="text" 
              type="text" 
              placeholder="some text" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="day">номер дня (дни можно добавлять в разном порядке, потом они сортируются)</label>
            <input 
              id="day" 
              name="day" 
              type="number" 
              placeholder="1" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="city">Название города или населенного пункта, в котором будет одна из точек маршрута в этот день, либо направление "Ош → деревня Узгуруш"</label>
            <input 
              id="city" 
              name="city" 
              type="text" 
              placeholder="Bishkek" 
              required 
            />
          </div>

           <div className={styles.formEl}>
            <label>Иконка тура, которая будет между картинком и текстом дня</label>
            <div className={styles.radioForm}>
              
              <label>
                  <input type="radio" name="icon" value="mountains1" defaultChecked />
                  <FuncIcon iconName={"mountains1"}></FuncIcon>
              </label>

              <label>
                  <input type="radio" name="icon" value="walking" />
                  <FuncIcon iconName={"walking"}></FuncIcon>
              </label>

              <label>
                  <input type="radio" name="icon" value="snow" />
                  <FuncIcon iconName={"snow"}></FuncIcon>
              </label>

              <label>
                  <input type="radio" name="icon" value="sun" />
                  <FuncIcon iconName={"sun"}></FuncIcon>
              </label>
              <label>
                  <input type="radio" name="icon" value="plant" />
                  <FuncIcon iconName={"plant"}></FuncIcon>
              </label>
              <label>
                  <input type="radio" name="icon" value="compass1" />
                  <FuncIcon iconName={"compass1"}></FuncIcon>
              </label>
              <label>
                  <input type="radio" name="icon" value="yurt" />
                  <FuncIcon iconName={"yurt"}></FuncIcon>
              </label>
              <label>
                  <input type="radio" name="icon" value="eagle" />
                  <FuncIcon iconName={"eagle"}></FuncIcon>
              </label>
              <label>
                  <input type="radio" name="icon" value="roadSin" />
                  <FuncIcon iconName={"roadSin"}></FuncIcon>
              </label>
              <label>
                  <input type="radio" name="icon" value="water" />
                  <FuncIcon iconName={"water"}></FuncIcon>
              </label>
              <label>
                  <input type="radio" name="icon" value="person2" />
                  <FuncIcon iconName={"person2"}></FuncIcon>
              </label>
              <label>
                  <input type="radio" name="icon" value="tower" />
                  <FuncIcon iconName={"tower"}></FuncIcon>
              </label>
              <label>
                  <input type="radio" name="icon" value="location" />
                  <FuncIcon iconName={"location"}></FuncIcon>
              </label>
            </div>
          </div>

          <div className={styles.formEl}>
            <label>Иконки, которые будут под текстом</label>
            <div className={styles.radioForm}>
              
              <label>
                  <input type="checkbox" name="smiles" value="wifi" defaultChecked />
                  <FuncIcon iconName={"wifi"}></FuncIcon>
              </label>

              <label>
                  <input type="checkbox" name="smiles" value="food" />
                  <FuncIcon iconName={"food"}></FuncIcon>
              </label>

              <label>
                  <input type="checkbox" name="smiles" value="toilet" />
                  <FuncIcon iconName={"toilet"}></FuncIcon>
              </label>

              <label>
                  <input type="checkbox" name="smiles" value="shower" />
                  <FuncIcon iconName={"shower"}></FuncIcon>
              </label>
              <label>
                  <input type="checkbox" name="smiles" value="bed" />
                  <FuncIcon iconName={"bed"}></FuncIcon>
              </label>
              <label>
                  <input type="checkbox" name="smiles" value="electric" />
                  <FuncIcon iconName={"electric"}></FuncIcon>
              </label>
              <label>
                  <input type="checkbox" name="smiles" value="swimming-pool" />
                  <FuncIcon iconName={"swimming-pool"}></FuncIcon>
              </label>
            </div>
          </div>
          

          
          <div className={styles.formEl}>
            <label htmlFor="isHide">  Скрыть этот шаг или нет  </label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isHide" value= "false" defaultChecked/>
                  показывать
              </label>        
              <label>
                  <input type="radio" name="isHide" value= "true" />
                  скрыть  
              </label>
            </div>
          </div>
          
    
          

          <div className={styles.formEl}>
            <label htmlFor="alt">описание картинки необходимо для seo. это описание видно только тогда, когда не грузится картинка</label>
            <input 
              id="alt" 
              name="alt" 
              type="text" 
              placeholder="описание картинки" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="image">Фото:</label>
            <input 
              id="image"
              name="image" // Соответствует files.image на сервере
              type="file" 
              accept="image/*" 
              required 
            />
          </div>




          <input type="submit" value="Опубликовать"></input>
        </form>
      </div>
        </div>
        </>
    }
    {
      typeOfAdd == "blogs" &&
        <>
          <div className='base'>
      <div className="gradient">
          <div class="gradient-line-left"></div>
          <h2>Добавить Блоги (заполнять все ячейки)</h2>
          <div class="gradient-line-right"></div>
      </div>
      <div className={styles.forms}>
        <form onSubmit={(e) => handleSubmit(e, 'blogs')} className={styles.baseForm}>

          <div className={styles.formEl}>
            <label htmlFor="head">Заголовок</label>
            <input 
              id="head" 
              name="head" 
              type="text" 
              placeholder="Заголовок блога" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="shortDescription">Короткое описание</label>
            <input 
              id="shortDescription" 
              name="shortDescription" 
              type="text" 
              placeholder="короткое описание" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="Description">Основной текст</label>
            <input 
              id="Description" 
              name="Description" 
              type="text" 
              placeholder="Основной текст" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label>Enter country of tours (Uzbekistan, Kazakhstan, Kyrgyzstan, Tadjikistan, International )</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="countryName" value="international" defaultChecked />
                  International
              </label>

              <label>
                  <input type="radio" name="countryName" value="kyrgyzstan" />
                  Kyrgyzstan
              </label>

              <label>
                  <input type="radio" name="countryName" value="uzbekistan" />
                  Uzbekistan
              </label>

              <label>
                  <input type="radio" name="countryName" value="kazakhstan" />
                  Kazakhstan
              </label>
              <label>
                  <input type="radio" name="countryName" value="tadjikistan" />
                  Tadjikistan
              </label>
            </div>
          </div>

          <div className={styles.formEl}>
            <label>Enter type of tours (Citites tours, culture tours, Trekking tours, Horsing or auto tours )</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="tourType" value="cities" defaultChecked />
                  by Cities
              </label>

              <label>
                  <input type="radio" name="tourType" value="culture" />
                  Culture
              </label>

              <label>
                  <input type="radio" name="tourType" value="trekking" />
                  Trekking
              </label>

              <label>
                  <input type="radio" name="tourType" value="horsing" />
                  Horsing
              </label>
              <label>
                  <input type="radio" name="tourType" value="auto" />
                  Auto
              </label>
            </div>
          </div>
          
          <div className={styles.formEl}>
            <label htmlFor="isHide">  Скрыть блог или нет </label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isHide" value= "false" defaultChecked/>
                  показывать
              </label>        
              <label>
                  <input type="radio" name="isHide" value= "true" />
                  скрыть
              </label>
            </div>
          </div>
          
          <div className={styles.formEl}>
            <label htmlFor="isBest"> поменить как топ блог или нет</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isBest" value= "true" />
                  топ блог
              </label>        
              <label>
                  <input type="radio" name="isBest" value= "false" defaultChecked />
                  не топ блог
              </label>
            </div>
          </div>


          <div className={styles.formEl}>
            <label htmlFor="alt">описание картинки необходимо для seo. это описание видно только тогда, когда не грузится картинка</label>
            <input 
              id="alt" 
              name="alt" 
              type="text" 
              placeholder="описание картинки" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="image">Фото:</label>
            <input 
              id="image"
              name="image" // Соответствует files.image на сервере
              type="file" 
              accept="image/*" 
              required 
            />
          </div>
          <input type="submit" value="Опубликовать"></input>
        </form>
      </div>
    </div>
        </>
    }
    {
      typeOfAdd == "reviews" &&
        <>
          <div className='base'>
      <div className="gradient">
          <div class="gradient-line-left"></div>
          <h2>Добавить отзывы(заполнять все ячейки)</h2>
          <div class="gradient-line-right"></div>
      </div>
      <div className={styles.forms}>
        <form onSubmit={(e) => handleSubmit(e, 'reviews')} className={styles.baseForm}>

          <div className={styles.formEl}>
            <label htmlFor="name">Имя того, кто сделал отзыв</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              placeholder="Имя туриста" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="head">Заголовок отзыва</label>
            <input 
              id="head" 
              name="head" 
              type="text" 
              placeholder="заголовок отзыва" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="shortDescription">Короткое описание</label>
            <input 
              id="shortDescription" 
              name="shortDescription" 
              type="text" 
              placeholder="короткое описание" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="Description">Основной текст</label>
            <input 
              id="Description" 
              name="Description" 
              type="text" 
              placeholder="Основной текст" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="link">ссылка на источник</label>
            <input 
              id="link" 
              name="link" 
              type="text" 
              placeholder="exampe.com" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="source">Название источника</label>
            <input 
              id="source" 
              name="source" 
              type="text" 
              placeholder="TripAdvisor" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label>Enter country of tours (Uzbekistan, Kazakhstan, Kyrgyzstan, Tadjikistan, International )</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="countryName" value="international" defaultChecked />
                  International
              </label>

              <label>
                  <input type="radio" name="countryName" value="kyrgyzstan" />
                  Kyrgyzstan
              </label>

              <label>
                  <input type="radio" name="countryName" value="uzbekistan" />
                  Uzbekistan
              </label>

              <label>
                  <input type="radio" name="countryName" value="kazakhstan" />
                  Kazakhstan
              </label>
              <label>
                  <input type="radio" name="countryName" value="tadjikistan" />
                  Tadjikistan
              </label>
            </div>
          </div>


          <div className={styles.formEl}>
            <label htmlFor="isHide">  Скрыть отзыв или нет </label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isHide" value= "false" defaultChecked/>
                  показывать
              </label>        
              <label>
                  <input type="radio" name="isHide" value= "true" />
                  скрыть
            </label>
            </div>
          </div>

          <div className={styles.formEl}>
            <label htmlFor="isBest"> поменить как топ отзыв или нет</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isBest" value= "true" />
                  топ 
              </label>        
              <label>
                  <input type="radio" name="isBest" value= "false" defaultChecked />
                  не топ 
              </label>
            </div>
          </div>

          <div className={styles.formEl}>
            <label htmlFor="alt">описание картинки необходимо для seo. это описание видно только тогда, когда не грузится картинка</label>
            <input 
              id="alt" 
              name="alt" 
              type="text" 
              placeholder="описание картинки" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="image">Фото:</label>
            <input 
              id="image"
              name="image" // Соответствует files.image на сервере
              type="file" 
              accept="image/*" 
              required 
            />
          </div>
          <input type="submit" value="Опубликовать"></input>
        </form>
      </div>
          </div>
        </>
    }
    {
      typeOfAdd == "photos" &&
        <>
          <div className='base'>
      <div className="gradient">
          <div class="gradient-line-left"></div>
          <h2>Добавить фото для галереи(заполнять все ячейки)</h2>
          <div class="gradient-line-right"></div>
      </div>
      <div className={styles.forms}>
        <form onSubmit={(e) => handleSubmit(e, 'photos')} className={styles.baseForm}>
           <div className={styles.formEl}>
            <label htmlFor="uniqName">Уникальное имя тура к которому нужно будет добавить данное фото</label>
            <input 
              id="uniqName" 
              name="uniqName" 
              type="text" 
              placeholder="Pamir-HighWay" 
              required 
            />
          </div>
          <div className={styles.formEl}>
            <label htmlFor="alt">описание картинки необходимо для seo. это описание видно только тогда, когда не грузится картинка</label>
            <input 
              id="alt" 
              name="alt" 
              type="text" 
              placeholder="описание картинки" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label>Enter country of tours (Uzbekistan, Kazakhstan, Kyrgyzstan, Tadjikistan, International )</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="countryName" value="international" defaultChecked />
                  International
              </label>

              <label>
                  <input type="radio" name="countryName" value="kyrgyzstan" />
                  Kyrgyzstan
              </label>

              <label>
                  <input type="radio" name="countryName" value="uzbekistan" />
                  Uzbekistan
              </label>

              <label>
                  <input type="radio" name="countryName" value="kazakhstan" />
                  Kazakhstan
              </label>
              <label>
                  <input type="radio" name="countryName" value="tadjikistan" />
                  Tadjikistan
              </label>
            </div>
          </div>

          <div className={styles.formEl}>
            <label htmlFor="isHide">  Скрыть фото или нет </label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isHide" value= "false" defaultChecked/>
                  показывать
              </label>        
              <label>
                  <input type="radio" name="isHide" value= "true" />
                  скрыть
              </label>
            </div>
          </div>
          
          <div className={styles.formEl}>
            <label htmlFor="isBest"> поменить как топ фото или нет</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isBest" value= "true" />
                  топ 
              </label>        
              <label>
                  <input type="radio" name="isBest" value= "false" defaultChecked />
                  не топ 
              </label>
            </div>
          </div>


          <div className={styles.formEl}>
            <label htmlFor="image">Фото:</label>
            <input 
              id="image"
              name="image" // Соответствует files.image на сервере
              type="file" 
              accept="image/*" 
              required 
            />
          </div>

          <input type="submit" value="Опубликовать"></input>
        </form>
      </div>
          </div>
        </>
    }
    {
      typeOfAdd == "tourTypes" &&
        <>
          <div className='base'>
      <div className="gradient">
          <div class="gradient-line-left"></div>
          <h2>Добавить Информацию на страницы по типам туров (заполнять все ячейки)</h2>
          <div class="gradient-line-right"></div>
      </div>
      <div className={styles.forms}>
        <form onSubmit={(e) => handleSubmit(e, 'infos')} className={styles.baseForm}>

          <div className={styles.formEl}>
            <label htmlFor="head">Заголовок страницы</label>
            <input 
              id="head" 
              name="head" 
              type="text" 
              placeholder="Заголовок страницы" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label>Enter country of tours (Uzbekistan, Kazakhstan, Kyrgyzstan, Tadjikistan, International )</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="countryName" value="international" defaultChecked />
                  International
              </label>

              <label>
                  <input type="radio" name="countryName" value="kyrgyzstan" />
                  Kyrgyzstan
              </label>

              <label>
                  <input type="radio" name="countryName" value="uzbekistan" />
                  Uzbekistan
              </label>

              <label>
                  <input type="radio" name="countryName" value="kazakhstan" />
                  Kazakhstan
              </label>
              <label>
                  <input type="radio" name="countryName" value="tadjikistan" />
                  Tadjikistan
              </label>
            </div>
          </div>


          <div className={styles.formEl}>
            <label>Enter type of tours (Citites tours, culture tours, Trekking tours, Horsing or auto tours )</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="tourType" value="cities" defaultChecked />
                  by Cities
              </label>

              <label>
                  <input type="radio" name="tourType" value="culture" />
                  Culture
              </label>

              <label>
                  <input type="radio" name="tourType" value="trekking" />
                  Trekking
              </label>

              <label>
                  <input type="radio" name="tourType" value="horsing" />
                  Horsing
              </label>
              <label>
                  <input type="radio" name="tourType" value="auto" />
                  Auto
              </label>
            </div>
          </div>

          <div className={styles.formEl}>
            <label htmlFor="isHide">  Скрыть текст или нет </label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isHide" value= "false" defaultChecked/>
                  показывать
              </label>        
              <label>
                  <input type="radio" name="isHide" value= "true" />
                  скрыть
              </label>
            </div>
          </div>

          <div className={styles.formEl}>
            <label htmlFor='motto'>Девиз под главным заголовком</label>
            <textarea
              id = "motto"
              name="motto"
              type="text"
              placeholder='Текст девиза'
              required 
              />
          </div>
          
          <div className={styles.formEl}>
            <label htmlFor="imageMain">Фото под заголовокм</label>
            <input 
              id="imageMain"
              name="imageMain" // Соответствует files.image на сервере
              type="file" 
              accept="image/*" 
              required 
            />
          </div>
          
          <div className={styles.formEl}>
            <label htmlFor='firstText1stPart'>первый абзац первого текста описание с картинкой</label>
            <textarea 
              id = "firstText1stPart"
              name="firstText1stPart"
              type="text"
              placeholder='первый абзац'
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor='firstText2ndPart'>второй абзац первого текста описание с картинкой</label>
            <textarea 
              id = "firstText2ndPart"
              name="firstText2ndPart"
              type="text"
              placeholder='второй абзац'
              required 
            />
          </div>



          <div className={styles.formEl}>
            <label htmlFor="firstImg">первое фото</label>
            <input 
              id="firstImg"
              name="firstImg" // Соответствует files.image на сервере
              type="file" 
              accept="image/*" 
              required 
            />
          </div>
          
          <div className={styles.formEl}>
            <label htmlFor='secondText1stPart'>secondText текст описание с картинкой</label>
            <textarea
              id = "secondText1stPart"
              name="secondText1stPart"
              type="text"
              placeholder='первый абзац'
              required 
            />
          </div>

          <div className={styles.formEl}>
          <label htmlFor='secondText2ndPart'>secondText текст описание с картинкой</label>
            <textarea
              id = "secondText2ndPart"
              name="secondText2ndPart"
              type="text"
              placeholder='второй абзац'
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label htmlFor="secondImg">второе фото</label>
            <input 
              id="secondImg"
              name="secondImg" // Соответствует files.image на сервере
              type="file" 
              accept="image/*" 
              required 
            />
          </div>

          <input type="submit" value="Опубликовать"></input>
        </form>
      </div>
          </div>
        </>
    }

    {
      typeOfAdd == "tourDetail" &&
        <>
          <div className='base'>
      <div className="gradient">
          <div class="gradient-line-left"></div>
          <h2>Добавить фото для галереи(заполнять все ячейки)</h2>
          <div class="gradient-line-right"></div>
      </div>
      <div className={styles.forms}>
        <form onSubmit={(e) => handleSubmit(e, 'tourDetail')} className={styles.baseForm}>
          <div className={styles.formEl}>
            <label htmlFor="header">заголовок</label>
            <input 
              id="header" 
              name="header" 
              type="text" 
              placeholder="заголовок" 
              required 
            />
          </div>
          <div className={styles.formEl}>
            <label htmlFor="text">тектс</label>
            <textarea 
              id="text" 
              name="text" 
              type="text" 
              placeholder="текст" 
              required 
            />
          </div>

          <div className={styles.formEl}>
            <label>Включает в тур или не включает</label>
            <div className={styles.radioForm}>
              <label>
                  <input type="radio" name="isInclude" value="include" defaultChecked />
                  include
              </label>

              <label>
                  <input type="radio" name="isInclude" value="exclude" />
                  exclude
              </label>

              
            </div>
          </div>

          <input type="submit" value="Опубликовать"></input>
        </form>
      </div>
          </div>
        </>
    }

    

    

    

    

    
</>
  );
}

export default AddingForms;