import type { GetStaticProps } from "next";
import Grid from "../../components/Grid";
import Article from "../../components/Article";
import Heading from "../../components/Heading";
import HpgLayout from "../../components/HpgLayout";
import type { StatisticItem } from "../../components/HpgLayout";
import getArticleNumbers from "../../utils/getArticleNumbers";

const articles = [
  {
    variant: "neon",
    subtitle: "11.02.2077",
    content: `
      ## Good morning, Twitch City!

      HPG набирает обороты. Стримеры начинают всё ближе и ближе территориально подбираться друг к другу. Игры становятся длиннее. Испытания усложняются.

      С какими проблемами приходится сталкиваться участникам? Что их ждёт в будущем? Всё это и многое другое в сегодняшнем выпуске.
    `,
  },
  {
    color: "red",
    title: "Джентельмен удачи",
    subtitle: "Один стрим решает многое",
    image: "/images/09/djentelmen-udachi.jpg",
    imageHeight: 441,
    content: `
      Первый стрим **Ласки** проходил с переменным успехом. Ролл предметов оказался на редкость неудачным, ведь ему пришлось сбросить легендарное оружие, которое он только что нароллил ценой перчаток, чтобы получить двуручный меч 1 уровня, копия которого уже была у него в рюкзаке.

      С играми же ему повезло больше: рогалькин **City of Brass**, который он проходил более десяти часов, в этот день дался ему всего за **двадцать минут**. Затем **Богдану** выпал очередной головоломкин **Cross Set**, который удалось зарероллить **чудом** выпавшей единицей во время случайной встречи.

      ---

      На этом везение лидера **Гринписовцев** не закончилось, ведь далее выпал **Crysis**, две части которого он проходил еще на первом **HPG**. Радость **Ласки** не знала границ: **«Ебическая сила по улице ходила!»**.

      После спидрана шутера полоса удачи продолжилась бродилкиным **All That Remains: А story about a child's future**, завершение которого принесло **Ласкачу** ролл имбового **Настоятеля Жука** вместо **Юрия Александровича**, который не особо ему помог. К слову, **ХВОСТа** атаковали зрители **HPG**, требуя от него ответа за ноль помощи.

      ---

      Однако на этом полоса везения **Ласки** неожиданно прервалась: ролл игры **The Itch** сначала расстроил его, но оказалось, что часы **The Itch** были неправильно указаны от игры **The Witcher**, а сама игра должна была быть намного короче. К несчастью для **Ласкача**, за стримом следил **Большой Ф**, который попросил **Ласку** срочно зайти в телеграм, ведь он давно говорил, что при неправильном подсчете времени прохождения от колеса игра должна быть реролльнута, поскольку не исполняется условие сектора.

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0 -24px',
          width: 'calc(100% + 48px)',
          backgroundColor: 'var(--color-red)'
        }}
      >
        <img
          src="/images/09/little-brother.png"
          alt="Little Brother is watching you"
          width="120"
          height="177"
        />
      </div>

      Разбирательства по поводу данной ситуации решили перенести в **личную конференцию**, сам же **Богдан** решил завершить трансляцию. Пока что решение лидеров группировок **HPG** остаётся неизвестным, но зрителям не стоит расстраиваться — ведь стрим их любимчика был крайне продуктивным.
    `,
  },
  {
    color: "yellow",
    title: "Улететь до полуночи",
    subtitle: "Тактика",
    image: "/images/09/uspet-do-polunochi.jpg",
    imageHeight: 304,
    content: `
      Не всем участникам ивента везёт также, как **Ласкачу**: например **Брови**, который после довольно эмоциональной и активной метроидвании нароллил себе спокойную и размеренную карточную игру, правила которой схожи с пасьянсом.

      ---

      Как позже оказалось, эта игра — давний друг стримера, ведь ещё на **RGG** он играл в карты с такими же правилами, но в более старой обложке.

      ---

      Прохождение игры не предвещало никакой беды, **стример** включил свою музыку, и пошёл зачил, но уже на 80-х уровнях из сотни глава **Чильтянов** понял, что игра действительно требует думать и смотреть на экран. Из-за невнимательности и того, что **«порядок у карт в киоске был взят»**, **Бровян** начал возвращаться на первые уровни, чтобы нафармить золота, дабы покупать облегчающие геймплей эффекты.

      ---

      Для **стримера** крайне важно было пройти эту игру и нароллить новую до подруба **Сегала**: часы в рюкзаке **Сани** позволяют остановить таймер не только у своего владельца, но и у всех стримеров для их текущих игр по их желанию. **Бровян** успешно выполнил свой план, тем самым компенсировав невезение тактикой.
    `,
  },
  {
    color: "white",
    subtitle: "Толковый словарькин Вавилова",
    content: `
      **Патрэго** **_(Patrego)_** — глупец, Патрик. Слово появилось 9 февраля 2021 года в твичевском лексиконе. Создателем этого крылатого выражения по праву считается стример **Богдан «Lasqa» Вавилов**. Именно он так назвал разработчика игры.
    `,
  },
  {
    color: "white",
    subtitle: "Ctrl+V",
    image: "/images/09/pasta.png",
    imageHeight: 197,
  },
  {
    color: "blue",
    title: "Блицкриг по-самарски",
    subtitle: "HPG Never Changes",
    image: "/images/09/blitzkrig-po-samarski.jpg",
    imageHeight: 152,
    content: `
      Планы стримеров на **HPG** и раньше менялись на ходу, а в новом сезоне из-за возможности атаки на территории соперников накал страстей лишь усиливается.

      Пока весь экшен происходит в основном между **Мэлом**, **Факером** и **Бровяном**, каждый из которых уже не раз был виновником поднятия очередной мошны.

      Кроме того, эта троица отметилась настоящим плетением интриг (кто и кому на самом деле предлагал союз и нападение на соседа, точно уже не скажет ни один чаттерс) и разработкой победных тактик: **Факер** в основном скрывает свои планы, успешно выбрасывая туз из рукава в нужный момент, как это было на съезде, а **Мэл** и **Бровян** предпочитают открыто обсуждать свои стратегии со зрителями.

      ---

      **UncleBjorn**, ранее считавшийся наиболее спокойным и наименее мошнящим стримером **HPG**, в этот раз решил открыто предостеречь **Сегала** и других стримеров от нападения на его зоны влияния, считая все подобные атаки открытым объявлением войны. **Саня** уверен, что ничего плохого он не совершал: **«Я считаю, что могу взять всё нейтральное, что лежит передо мной. Пока секторы нейтральные -они ничьи»**.

      ---

      Тем временем **Ласка** тоже подходит к границам **Бьёрна**, что может означать лишь одно: подрубающие стримы в одно и то же время **Сегал** и **Ласка**, очевидно, сговорились осуществить блицкриг по захвату территории лидера **Мёдоедов**.
    `,
  },
  {
    color: "yellow",
    title: "Маленький шаг для чата — большой для Мэла",
    subtitle: "Достижение",
    image: "/images/09/malenkiy-shag.jpg",
    imageHeight: 531,
    content: `
      Как знают олды **HPG**, у **Мэла** есть одна слабость — **хорроры**. На радость чата именно ему достался одноименный пресет, полный воистину ужасающих и пугающих игр. Подготовился к игре **Melharucos** по полной: как и ожидалось, поток был включен в самое светлое время суток и со всем возможным освещением в комнате, а также с закрытым шкафом.

      ---

      **Мэл** оттягивал время до запуска игры как можно дольше, а затем и вовсе пытался пройти, смотря в пол, из-за чего постоянно путался, куда идти. Хотя игра пока даже не пыталась напугать **стримера**, на помощь ему пришли **донатеры**, начавшие засылать по 100 рублей с кучей семёрок. Также с советом к нему пришёл **Бьёрн**, предложивший включить на втором мониторе видео со смешными животными, на что Мэл ответил: **«У меня там и так funny animals»**, явно намекая на **чат**.

      ---

      Сумев перебороть страх, **Лидер Таксистов** начал уверенно продвигаться по сюжету, пока в один момент не случился саботаж. Завсегдатаи чатов оказались хитрее и отправили своего секретного агента **Евгению** воспользоваться беззащитностью стримера. **Женя** вероломно закрыла шторы, выключила свет и начала пугать несчастного **Вована Дубинского**. В результате такого напряжения Мэлу даже пришлось применить знаменитую самарскую технику: **«Ёбнем»**, хоть она и не помогла завершить прохождение игры за один стрим.

      ---

      На следующий день **Владимир** настроился серьезнее и по итогу прошел игру за **10 часов**. Прохождение принесло массу эмоций стримеру и чату, о чем говорит огромное количество клипов. Следующей игрой ему досталась **JRPG**, которую он также, как и **Visage**, назвал **счастливым билетом**.
    `,
  },
] as const;

const statistics: StatisticItem[] = [
  {
    name: "browjey",
    time: "17:05",
    level: "6",
    points: "32",
    partner: "Клоун Клёпа, Тайлер, Пьер Медовый",
  },
  {
    name: "unclebjorn",
    time: "11:22",
    level: "4",
    points: "3",
    partner: "Маэстро",
  },
  {
    name: "mistafaker",
    time: "05:45",
    level: "4",
    points: "33",
    partner: "Отсутствует",
  },
  {
    name: "lasqa",
    time: "07:00",
    level: "7",
    points: "24",
    partner: "Настоятель Жук",
  },
  {
    name: "melharucos",
    time: "16:18",
    level: "7",
    points: "34",
    partner: "Юрий Александрович",
  },
  {
    name: "segall",
    time: "14:59",
    level: "4",
    points: "-2",
    partner: "Отсутствует",
  },
];

type Props = {
  articleNumbers: string[];
};

const HpgNews = ({ articleNumbers }: Props) => (
  <HpgLayout
    date="11.02.2021"
    number="9"
    map="/images/09/map.png"
    statistics={statistics}
    articleNumbers={articleNumbers}
  >
    <Article {...articles[0]} />

    <Heading>Главное</Heading>
    <Article {...articles[1]} />
    <Grid container>
      <Grid item>
        <Article {...articles[2]} />
        <Article {...articles[3]} />
      </Grid>
      <Grid item>
        <Article {...articles[4]} />
        <Article {...articles[5]} />
      </Grid>
    </Grid>
    <Article {...articles[6]} />
  </HpgLayout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { articleNumbers: await getArticleNumbers() },
});

export default HpgNews;
