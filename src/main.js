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

const formatPrice = (number) =>
  new Intl.NumberFormat('uz-UZ').format(number)

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="app-shell">

    <div class="bg-glow glow-one"></div>
    <div class="bg-glow glow-two"></div>
    <div class="noise"></div>

    <!-- HEADER -->
    <header class="topbar">
      <button class="back-home" id="backHome">
        ←
      </button>

      <div class="page-title">
        <span>SHOP</span>
        <b>Stars</b>
      </div>

      <div class="profile">
        <div class="online"></div>
        <span>UZ</span>
      </div>
    </header>

    <!-- STARS HERO -->
    <section class="stars-page-hero">

      <div class="stars-page-text">
        <div class="eyebrow">
          <span class="pulse-dot"></span>
          TELEGRAM STARS
        </div>

        <h1>
          O'zingizga<br>
          <span>Stars</span> tanlang.
        </h1>

        <p>
          Kerakli paketni tanlang va
          buyurtmani bir necha soniyada yuboring.
        </p>
      </div>

      <div class="big-star">
        <div class="big-star-ring ring-a"></div>
        <div class="big-star-ring ring-b"></div>
        <div class="big-star-core">★</div>
      </div>

    </section>

    <!-- SELECTED -->
    <section class="selected-box">

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

    </section>

    <!-- PACKAGES -->
    <section class="packages-section">

      <div class="section-heading">
        <div>
          <span>PREMIUM</span>
          <h2>Stars paketlari</h2>
        </div>

        <div class="section-count">
          ${stars.length.toString().padStart(2, '0')}
        </div>
      </div>

      <div class="stars-grid">

        ${stars.map((item, index) => `
          <button
            class="star-package ${index === 1 ? 'selected' : ''}"
            data-amount="${item.amount}"
            data-price="${item.price}"
          >

            ${item.popular ? `
              <div class="popular-badge">
                ENG MASHHUR
              </div>
            ` : ''}

            <div class="package-top">
              <div class="package-star">
                ★
              </div>

              <span>× ${item.amount}</span>
            </div>

            <div class="package-bottom">
              <b>${formatPrice(item.price)}</b>
              <small>so'm</small>
            </div>

            <div class="package-glow"></div>

          </button>
        `).join('')}

      </div>

    </section>

    <!-- ORDER CARD -->
    <section class="order-card">

      <div class="order-head">
        <div>
          <span>BUYURTMA</span>
          <h3>Hammasi tayyormi?</h3>
        </div>

        <div class="order-check">
          ✓
        </div>
      </div>

      <div class="order-summary">

        <div>
          <small>Stars</small>
          <b id="summaryAmount">100</b>
        </div>

        <div class="summary-line"></div>

        <div>
          <small>Narx</small>
          <b>
            <span id="summaryPrice">24 000</span>
            so'm
          </b>
        </div>

      </div>

      <button class="continue-button" id="continueButton">
        <span>Buyurtmani davom ettirish</span>
        <strong>→</strong>
      </button>

    </section>

    <!-- BOTTOM NAV -->
    <nav class="bottom-nav">

      <button class="nav-item" id="navHome">
        <span>⌂</span>
        <small>Bosh sahifa</small>
      </button>

      <button class="nav-item active">
        <span>★</span>
        <small>Stars</small>
      </button>

      <button class="nav-item">
        <span>◆</span>
        <small>Gifts</small>
      </button>

      <button class="nav-item">
        <span>♙</span>
        <small>Aloqa</small>
      </button>

    </nav>

    <!-- ORDER MODAL -->
    <div class="modal-overlay" id="orderModal">

      <div class="order-modal">

        <button class="modal-close" id="closeModal">
          ×
        </button>

        <div class="modal-star">
          ★
        </div>

        <div class="modal-label">
          BUYURTMA
        </div>

        <h2>Stars buyurtmasi</h2>

        <p>
          Buyurtmangiz ma'lumotlarini tekshiring.
        </p>

        <div class="modal-product">

          <div>
            <span>★</span>

            <div>
              <small>Telegram Stars</small>
              <b id="modalAmount">100 Stars</b>
            </div>
          </div>

          <strong id="modalPrice">
            24 000 so'm
          </strong>

        </div>

        <button class="confirm-button" id="confirmButton">
          <span>Buyurtma berish</span>
          <strong>→</strong>
        </button>

      </div>

    </div>

  </div>
`

/* =================================
   STATE
================================= */

let selectedAmount = 100
let selectedPrice = 24000

/* =================================
   UPDATE UI
================================= */

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

/* =================================
   PACKAGE CLICK
================================= */

document.querySelectorAll('.star-package').forEach(card => {

  card.addEventListener('click', () => {

    document
      .querySelectorAll('.star-package')
      .forEach(item => item.classList.remove('selected'))

    card.classList.add('selected')

    selectedAmount =
      Number(card.dataset.amount)

    selectedPrice =
      Number(card.dataset.price)

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

/* =================================
   MODAL
================================= */

const modal =
  document.querySelector('#orderModal')

const continueButton =
  document.querySelector('#continueButton')

const closeModal =
  document.querySelector('#closeModal')

continueButton.addEventListener('click', () => {

  updateSelected()

  modal.classList.add('show')
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('show')
})

modal.addEventListener('click', (event) => {

  if (event.target === modal) {
    modal.classList.remove('show')
  }
})

/* =================================
   HOME
================================= */

document.querySelector('#backHome')
  .addEventListener('click', goHome)

document.querySelector('#navHome')
  .addEventListener('click', goHome)

function goHome() {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  setTimeout(() => {
    location.reload()
  }, 250)
}

/* =================================
   CONFIRM
================================= */

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

/* =================================
   TELEGRAM
================================= */

if (window.Telegram?.WebApp) {

  const tg = window.Telegram.WebApp

  tg.ready()
  tg.expand()
}