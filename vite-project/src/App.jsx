import './App.css';
import Input from './components/inputs';
import Itextarea from './components/textarea';
import Button from './components/button';
import Acheckbox from './components/checkbox';
import Dropdown from './components/Dropdown';
import { useState } from 'react';


function App() {
  const [workType, setWorkType] = useState([
    { id: 1, text: "Odatdagi ish rejimi" },
    { id: 2, text: "Masofadan ishlash" },
  ])

  const [applicationDate, setAppolicationDate] = useState([
    { id: 1, text: "01.01.2024" },
    { id: 1, text: "02.01.2024" },
    { id: 1, text: "03.01.2024" },
    { id: 1, text: "04.01.2024" },
  ])

  const [workTime, setWorkTime] = useState([
    {
      id: 1,
      text: "09:00-18:00"
    },
    {
      id: 2,
      text: "10:00-19:00"
    },
    {
      id: 3,
      text: "14:00-23:00"
    },
    {
      id: 4,
      text: "16:00-01:00"
    }
  ])

  const [country, setCountry] = useState([
    { id: 1, text: "Uzbekistan" },
    { id: 2, text: "Russia" },
    { id: 3, text: "Turkey" },
    { id: 4, text: "Nigeria" },
  ])

  const [city, setCity] = useState([
    { id: 1, text: "Toshkent" },
    { id: 2, text: "Moscow" },
    { id: 3, text: "Ankara" },
    { id: 4, text: "Abuja" },
  ])
  const [lang, setLang] = useState([
    { id: 1, text: "Uzb" },
    { id: 2, text: "Eng" },
    { id: 3, text: "Rus" },
  ])
  const [level, setLevel] = useState([
    { id: 1, text: "Junior" },
    { id: 2, text: "Middle" },
    { id: 3, text: "Senior" },
  ])
  const [period,setPeriod] = useState([
    { id: 1, text: "Oylik" },
    { id: 2, text: "Kunlik" },
    { id: 3, text: "Soatlik" },
  ])
  const [currency, setCurrency] = useState([
    { id: 1, text: "Dollor" },
    { id: 2, text: "Euro" },
    { id: 3, text: "Uzs" },
  ])
  const [min, setMin] = useState([
    { id: 1, text: "100$" },
    { id: 2, text: "500$" },
    { id: 3, text: "1000$" },
  ])
  const [max, setMax] = useState([
    { id: 1, text: "1000$" },
    { id: 2, text: "1500$" },
    { id: 3, text: "4000$" },
  ])
  return (
    <>
      <div className="form-wrapper">
        <h2>Vakansiya yaratish</h2>
        <h5>Yangi vakansiya uchun ma’lumotlar</h5>
        <Input id='title' name='Sarlavha' title='Sarlavha' placeholder='Sarlavha' isRequired={true} ></Input>

        <div className="job-info">
          <Dropdown id='application' title='Ariza topshirish muddati' data={applicationDate} isRequired={true} placeholder='Deadline' />
          <Dropdown data={workType} id='work-type' title='Ish turi' isRequired={true} placeholder='Ish turi' />
          <Dropdown data={workTime} id='work-time' title='Ish vaqti' isRequired={true} placeholder='Ish vaqti' />
        </div>

        <div className="lang">
          <Dropdown id='lang' title='Til' data={lang} isRequired={true} placeholder='Til' />
          <Dropdown id='level' title='Darajasi' data={level} isRequired={true} placeholder='Darajasi' />

        </div>


        <Input id='soha' name='Soha' title='Soha' placeholder='Soha' isRequired={true} ></Input>
        <Input id='Konikmalar' name="Ko'nikmalar" title="Ko'nikmalar" placeholder="Ko'nikmalar" isRequired={true} ></Input>

        <div className="dropdown2">
          <Dropdown id='min' isRequired={true} title='Minimal maosh' placeholder='Min' data = {min} ></Dropdown>
          <Dropdown id='max' isRequired={true} title='Maksimal maosh' placeholder='Max' data = {max} ></Dropdown>
        </div>

        <Acheckbox id='checkbox' name='checkbox' title='Kelishiladi' isRequired={false} ></Acheckbox>

        <div className="dropdown1">
          <Dropdown id='period' isRequired={true} title='Maosh muddati' placeholder='Period' data = {period} ></Dropdown>
          <Dropdown id='currency' isRequired={true} title='Valyuta' placeholder='Currency' data = {currency} ></Dropdown>
        </div>
        <Itextarea title='Izoh' isRequired={true} name='izoh' id='izoh' placeholder='Vakansiya uchun izoh qoldiring'></Itextarea>
        <Button id='left' title='Ortga'></Button>
        <Button id='right' title='Davom etish'></Button>

      </div>

    </>

  );
}

export default App
