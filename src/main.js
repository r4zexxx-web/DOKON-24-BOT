import './style.css'

const stars = [
  { amount: 50, price: 12000 },
  { amount: 100, price: 24000, popular: true },
  { amount: 300, price: 71000 },
  { amount: 400, price: 95000 },
  { amount: 500, price: 118000 },
  { amount: 1000, price: 237000 },
  { amount: 2000, price: 474000 },
  { amount: 5000, price: 1184000 },
  { amount: 10000, price: 2368000 }
]

const formatPrice = (n) =>
  new Intl.NumberFormat('uz-UZ').format(n)

const app = document.querySelector('#app')

let selectedAmount = 100
let selectedPrice = 24000

app.innerHTML = `
  <div class="app-shell">

    <div class="bg-glow glow-one"></div>
    <div class="bg-glow glow-two"></div>

    <!-- HOME -->
    <section class="view active" id="homeView">

      <header class="home-header">
        <div>
          <div class="brand-mini">DOKON <span>24</span></div>
          <h1>Premium <b>Shop</b></h1>
          <p>Telegram uchun xizmatlar</p>
        </div>

        <div class="avatar">24</div>
      </header>

      <div class="welcome-card">
        <div class="welcome-text">
          <span class="live-dot"></span>
          ONLINE SHOP
          <h2>Hammasi<br><span>bir joyda.</span></h2>
          <p>Stars, Gifts, CS2 va boshqa xizmatlar.</p>
        </div>

        <div class="welcome-orb">
          <div class="orb-ring"></div>
          <div class="orb-star">★</div>
        </div>
      </div>

      <div class="home-title">
        <span>SHOP</span>
        <h2>Xizmatlar</h2>
      </div>

      <div class="service-grid">

        <button class="service-card stars-card" data-page="stars">
          <div class="service-icon">★</div>
          <div class="service-info">
            <span>TELEGRAM</span>
            <b>Stars</b>
            <small>Stars sotib olish</small>
          </div>
          <strong>→</strong>
        </button>

        <button class="service-card gift-card" data-page="gift">
          <div class="service-icon">🎁</div>
          <div class="service-info">
            <span>TELEGRAM</span>
            <b>Gift</b>
            <small>Sovg'alar</small>
          </div>
          <strong>→</strong>
        </button>

        <button class="service-card cs-card" data-page="cs2">
          <div class="cs-visual">
            <div class="cs-crosshair">✦</div>
            <div class="cs-gun">⚡</div>
          </div>
          <div class="service-info">
            <span>COUNTER-STRIKE 2</span>
            <b>CS2 Skin</b>
            <small>Skinlar do'koni</small>
          </div>
          <strong>→</strong>
        </button>

        <button class="service-card partner-card" data-page="partners">
          <div class="service-icon">🤝</div>
          <div class="service-info">
            <span>BIZ BILAN</span>
            <b>Hamkorlar</b>
            <small>Hamkorlik qilish</small>
          </div>
          <strong>→</strong>
        </button>

        <button class="service-card games-card" data-page="games">
          <div class="service-icon">🎮</div>
          <div class="service-info">
            <span>FUN ZONE</span>
            <b>O'yinlar</b>
            <small>Mini ko'ngilochar o'yinlar</small>
          </div>
          <strong>→</strong>
        </button>

        <button class="service-card donate-card" data-page="donate">
          <div class="service-icon">💎</div>
          <div class="service-info">
            <span>GAME TOP-UP</span>
            <b>O'yinlarga Donat</b>
            <small>Boshqa o'yinlarga donat</small>
          </div>
          <strong>→</strong>
        </button>

      </div>

      <div class="trust-row">
        <div><b>24/7</b><span>Xizmat</span></div>
        <div><b>⚡</b><span>Tezkor</span></div>
        <div><b>🔒</b><span>Xavfsiz</span></div>
      </div>

    </section>

    <!-- STARS -->
    <section class="view" id="starsView">

      <header class="page-header">
        <button class="back-button" data-home>←</button>
        <div>
          <span>SHOP</span>
          <h2>⭐ Stars</h2>
        </div>
        <div class="header-dot"></div>
      </header>

      <div class="stars-hero">
        <div>
          <span class="live-dot"></span>
          TELEGRAM STARS
          <h1>O'zingizga<br><b>Stars</b> tanlang.</h1>
          <p>Kerakli paketni tanlang va buyurtmani yuboring.</p>
        </div>

        <div class="hero-star">★</div>
      </div>

      <div class="selected-box">
        <div class="selected-left">
          <div class="selected-icon">★</div>
          <div>
            <small>TANLANGAN PAKET</small>
            <b id="selectedAmount">100 Stars</b>
          </div>
        </div>

        <div class="selected-price">
          <small>JAMI</small>
          <b id="selectedPrice">24 000</b>
          <span>so'm</span>
        </div>
      </div>

      <div class="section-heading">
        <div>
          <span>PREMIUM</span>
          <h2>Stars paketlari</h2>
        </div>
        <div class="section-count">09</div>
      </div>

      <div class="stars-grid">
        ${stars.map((item, index) => `
          <button
            class="star-package ${index === 1 ? 'selected' : ''}"
            data-amount="${item.amount}"
            data-price="${item.price}"
          >
            ${item.popular ? `<div class="popular-badge">ENG MASHHUR</div>` : ''}

            <div class="package-top">
              <div class="package-star">★</div>
              <span>× ${item.amount}</span>
            </div>

            <div class="package-bottom">
              <b>${formatPrice(item.price)}</b>
              <small>so'm</small>
            </div>
          </button>
        `).join('')}
      </div>

      <div class="order-card">
        <div class="order-head">
          <div>
            <span>BUYURTMA</span>
            <h3>Hammasi tayyormi?</h3>
          </div>
          <div class="order-check">✓</div>
        </div>

        <div class="order-summary">
          <div>
            <small>Stars</small>
            <b id="summaryAmount">100</b>
          </div>
          <div class="summary-line"></div>
          <div>
            <small>Narx</small>
            <b><span id="summaryPrice">24 000</span> so'm</b>
          </div>
        </div>

        <button class="continue-button" id="continueButton">
          <span>Buyurtmani davom ettirish</span>
          <strong>→</strong>
        </button>
      </div>

    </section>

    <!-- OTHER PAGES -->
    <section class="view simple-view" id="giftView">
      <button class="back-button" data-home>←</button>
      <div class="simple-icon">🎁</div>
      <span>TELEGRAM</span>
      <h1>Gift</h1>
      <p>Telegram sovg'alari tez orada shu yerda.</p>
      <div class="coming">TEZ ORADA</div>
    </section>

    <section class="view simple-view cs-page" id="cs2View">
      <button class="back-button" data-home>←</button>
      <div class="cs-big-visual">
        <div>✦</div>
        <span>CS2</span>
      </div>
      <span>COUNTER-STRIKE 2</span>
      <h1>Skin Market</h1>
      <p>CS2 skinlaringizni shu yerdan xarid qiling.</p>
      <button class="soon-button">Skinlarni ko'rish →</button>
    </section>

    <section class="view simple-view" id="partnersView">
      <button class="back-button" data-home>←</button>
      <div class="simple-icon">🤝</div>
      <span>BUSINESS</span>
      <h1>Hamkorlar</h1>
      <p>Biz bilan hamkorlik qilish uchun bog'laning.</p>
      <button class="soon-button">Bog'lanish →</button>
    </section>

    <section class="view simple-view games-page" id="gamesView">
      <button class="back-button" data-home>←</button>
      <div class="simple-icon">🎮</div>
      <span>FUN ZONE</span>
      <h1>O'yinlar</h1>
      <p>Mini ko'ngilochar o'yinlar tez orada qo'shiladi.</p>

      <div class="game-preview">
        <div>🎯</div>
        <b>Mini Games</b>
        <small>O'ynang va vaqtni maroqli o'tkazing</small>
      </div>
    </section>

    <section class="view simple-view" id="donateView">
      <button class="back-button" data-home>←</button>
      <div class="simple-icon">💎</div>
      <span>GAME TOP-UP</span>
      <h1>O'yinlarga Donat</h1>
      <p>Free Fire, PUBG, Mobile Legends va boshqa o'yinlar.</p>

      <div class="donate-list">
        <button>🎯 PUBG Mobile <b>→</b></button>
        <button>🔥 Free Fire <b>→</b></button>
        <button>⚔️ Mobile Legends <b>→</b></button>
        <button>🎮 Boshqa o'yinlar <b>→</b></button>
      </div>
    </section>

    <!-- MODAL -->
    <div class="modal-overlay" id="orderModal">
      <div class="order-modal">

        <button class="modal-close" id="closeModal">×</button>

        <div class="modal-star">★</div>
        <div class="modal-label">BUYURTMA</div>

        <h2>Stars buyurtmasi</h2>
        <p>Buyurtmangiz ma'lumotlarini tekshiring.</p>

        <div class="modal-product">
          <div>
            <span>★</span>
            <div>
              <small>Telegram Stars</small>
              <b id="modalAmount">100 Stars</b>
            </div>
          </div>
          <strong id="modalPrice">24 000 so'm</strong>
        </div>

        <button class="confirm-button" id="confirmButton">
          <span>Buyurtma berish</span>
          <strong>→</strong>
        </button>

      </div>
    </div>

  </div>
`

/* ================================
   PAGE NAVIGATION
================================ */

const views = document.querySelectorAll('.view')

function openPage(name) {
  views.forEach(view => view.classList.remove('active'))

  const target = document.querySelector(`#${name}View`)

  if (target) {
    target.classList.add('active')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

document.querySelectorAll('[data-page]').forEach(button => {
  button.addEventListener('click', () => {
    button.animate(
      [
        { transform: 'scale(.96)' },
        { transform: 'scale(1)' }
      ],
      { duration: 220 }
    )

    openPage(button.dataset.page)
  })
})

document.querySelectorAll('[data-home]').forEach(button => {
  button.addEventListener('click', () => openPage('home'))
})

/* ================================
   STARS
================================ */

function updateSelected() {
  document.querySelector('#selectedAmount').textContent =
    `${selectedAmount} Stars`

  document.querySelector('#selectedPrice').textContent =
    formatPrice(selectedPrice)

  document.querySelector('#summaryAmount').textContent =
    selectedAmount

  document.querySelector('#summaryPrice').textContent =
    formatPrice(selectedPrice)

  document.querySelector('#modalAmount').textContent =
    `${selectedAmount} Stars`

  document.querySelector('#modalPrice').textContent =
    `${formatPrice(selectedPrice)} so'm`
}

document.querySelectorAll('.star-package').forEach(card => {
  card.addEventListener('click', () => {

    document
      .querySelectorAll('.star-package')
      .forEach(item => item.classList.remove('selected'))

    card.classList.add('selected')

    selectedAmount = Number(card.dataset.amount)
    selectedPrice = Number(card.dataset.price)

    updateSelected()

    card.animate(
      [
        { transform: 'scale(.94)' },
        { transform: 'scale(1.02)' },
        { transform: 'scale(1)' }
      ],
      {
        duration: 280,
        easing: 'cubic-bezier(.2,.8,.2,1)'
      }
    )
  })
})

/* ================================
   MODAL
================================ */

const modal = document.querySelector('#orderModal')
const continueButton = document.querySelector('#continueButton')
const closeModal = document.querySelector('#closeModal')

continueButton.addEventListener('click', () => {
  updateSelected()
  modal.classList.add('show')
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('show')
})

modal.addEventListener('click', event => {
  if (event.target === modal) {
    modal.classList.remove('show')
  }
})

/* ================================
   CONFIRM ORDER
================================ */

document.querySelector('#confirmButton')
  .addEventListener('click', async () => {

    const button = document.querySelector('#confirmButton')

    button.innerHTML = `
      <span>Buyurtma yuborilmoqda...</span>
      <strong>✓</strong>
    `

    button.disabled = true

    const tgUser =
      window.Telegram?.WebApp?.initDataUnsafe?.user || null

    try {

      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          stars: selectedAmount,
          price: selectedPrice,
          user: tgUser
        })
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Buyurtma yuborilmadi')
      }

      button.innerHTML = `
        <span>Buyurtma qabul qilindi</span>
        <strong>✓</strong>
      `

      setTimeout(() => {
        modal.classList.remove('show')
        button.disabled = false

        button.innerHTML = `
          <span>Buyurtma berish</span>
          <strong>→</strong>
        `
      }, 1500)

    } catch (error) {

      console.error(error)

      button.disabled = false

      button.innerHTML = `
        <span>Xatolik yuz berdi</span>
        <strong>!</strong>
      `

      setTimeout(() => {
        button.innerHTML = `
          <span>Buyurtma berish</span>
          <strong>→</strong>
        `
      }, 2000)
    }
  })

/* ================================
   TELEGRAM
================================ */

if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp
  tg.ready()
  tg.expand()
}