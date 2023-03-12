import styles from './TabPanel.module.scss';

interface TabPanelProps {
  index: number;
  value: number;
}

interface TabContent {
  title: string;
  description: string;
  imgPath: string;
}

const TabPanel = (props: TabPanelProps) => {
  const {index, value} = props;
  const tabsContent: TabContent[] = [
    {
      title: 'Доставка',
      description: ' Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо заработаем, поднимая его на ваш этаж.',
      imgPath: '/assets/img/delivery-man.svg'
    },
    {
      title: 'Гарантия',
      description: ' Если из-за возгорания купленного у нас товара у вас сгорит дом — не переживайте, мы выдадим вам новый. Товар, не дом, конечно же.',
      imgPath: '/assets/img/warranty.svg'
    },
    {
      title: 'Кредит',
      description: 'Залезть в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее выгодные условия кредита. Выгодные для банка, разумеется.',
      imgPath: '/assets/img/credit.svg'
    },
  ];

  return(
    <div
      role="tabpanel"
      hidden={value !== index}
      className={styles.tab}>
      <div className={styles.body}>
        <div>
          <p className={styles.title}>{tabsContent[index].title}</p>
          <p className={styles.description}>{tabsContent[index].description}</p>
        </div>
        <img src={tabsContent[index].imgPath} alt="" />
      </div>
    </div>
  )
}

export default TabPanel;