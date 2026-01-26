# test-side

В блоке advantages и why используется mobile-first, т.е мы отталкиваемся от мобильных версий.

Браузер рендерит сразу мобильную версию и не убирает лишнее

для карусели добавлена библиотека flickity

about__media--video - плавное добавление видео без первичной загрузки


<div class="accounting-remotely__cta">
            <picture class="accounting-remotely__cta-bg">
              <!-- Фон для 768px и меньше  -->
              <source
                srcset="./images/accounting-remotely/background-bg-mobile.webp"
                type="image/webp"
                media="(max-width: 768px)"
              />
              <source
                srcset="./images/accounting-remotely/background-bg-mobile.jpeg"
                type="image/jpeg"
                media="(max-width: 768px)"
              />

              <!-- Фон для 1920px и выше -->
              <source
                srcset="./images/accounting-remotely/background-bg.webp"
                type="image/webp"
                media="(min-width: 769px)"
              />
              <img
                src="./images/accounting-remotely/background-bg.jpeg"
                alt="CTA фон"
                media="(min-width: 769px)"
              />
            </picture>

            <div class="accounting-remotely__cta-content">
              <h3 class="accounting-remotely__cta-title">
                Станьте нашим агентоми получайте пассивный доход
              </h3>
              <a href="#consultation" class="accounting-remotely__cta-button">
                Узнать больше
              </a>
            </div>
          </div>
        </div>
      </section>

      video class="description__video" autoplay muted loop playsinline>


      сделал header и footer отдельно. (т.к заказчик хотел все на чистом html,css,js, то подгрузку этих блоков сделал через js). Логика в loadPart.js

      loadPart.js - загружает menu.js, т.к нужно сначала загрузить данные шапки и подвала и потом только уже логику меню.


project/
│
├── index.html                  # Главная страница
├── about.html                  # О компании
├── services.html               # Услуги
├── contacts.html               # Контакты
├── team.html
├── pricing.html
├── blog.html
├── blog-post.html
├── faq.html
├── careers.html
├── portfolio.html
├── portfolio-item.html
├── testimonials-page.html
├── privacy.html
├── terms.html
├── support.html
├── login.html
└── register.html
│
├── css/                        # Стили проекта
│   ├── main.css
│   ├── base/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   └── utils.css
│   ├── components/
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── buttons/
│   │   │   ├── primary.css
│   │   │   └── secondary.css
│   │   ├── cards/
│   │   │   ├── service-card.css
│   │   │   └── team-card.css
│   │   ├── forms/
│   │   │   ├── contact-form.css
│   │   │   └── newsletter-form.css
│   │   └── modal.css
│   ├── sections/
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── services.css
│   │   ├── testimonials.css
│   │   ├── cta.css
│   │   └── contacts.css
│   └── pages/
│       ├── home/home.css
│       ├── about/about.css
│       ├── services/services.css
│       ├── team/team.css
│       ├── contacts/contacts.css
│       ├── pricing/pricing.css
│       ├── blog/blog.css
│       ├── blog-post/blog-post.css
│       ├── faq/faq.css
│       ├── careers/careers.css
│       ├── portfolio/portfolio.css
│       ├── portfolio-item/portfolio-item.css
│       ├── testimonials-page/testimonials-page.css
│       ├── privacy/privacy.css
│       ├── terms/terms.css
│       ├── support/support.css
│       ├── login/login.css
│       └── register/register.css
│
├── js/                         # JS проекта
│   ├── main.js                  # Общий JS
│   ├── components/
│   │   ├── header.js
│   │   ├── footer.js
│   │   ├── slider.js
│   │   ├── modal.js
│   │   └── forms.js
│   └── pages/
│       ├── home.js
│       ├── about.js
│       ├── services.js
│       ├── team.js
│       ├── contacts.js
│       ├── pricing.js
│       ├── blog.js
│       ├── blog-post.js
│       ├── faq.js
│       ├── careers.js
│       ├── portfolio.js
│       ├── portfolio-item.js
│       ├── testimonials-page.js
│       ├── privacy.js
│       ├── terms.js
│       ├── support.js
│       ├── login.js
│       └── register.js
│
├── img/                        # Изображения
│   ├── logo.svg
│   ├── hero/
│   ├── services/
│   ├── team/
│   ├── portfolio/
│   └── blog/
│
├── fonts/
│   ├── roboto/
│   └── montserrat/
│
├── favicon.ico
├── README.md
└── package.json                 # если нужен Node / сборка



base/ → общий фундамент.

components/ → переиспользуемые блоки (header, footer, кнопки, карточки, формы, модалки).

sections/ → уникальные блоки главной страницы.

pages/ → уникальные стили для каждой из 18 страниц.

шаблонные страницы
accounting и agent

block-cards - сделал адаптив через flex