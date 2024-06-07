import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Новый пользователь</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Имя пользователя</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Полное имя</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Пароль</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Телефон</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Адресс</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Пол</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Мужчина</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Женщина</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Другое</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Активный</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Да</option>
            <option value="no">Нет</option>
          </select>
        </div>
        <button className="newUserButton">Создать</button>
      </form>
    </div>
  );
}
