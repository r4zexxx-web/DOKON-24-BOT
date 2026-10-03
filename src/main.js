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

          <h2>
            Hammasi<br>
            <span>bir joyda.</span>
          </h2>

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
            <small>8 ta mini o'yin</small>
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

          <h1>
            O'zingizga<br>
            <b>Stars</b> tanlang.
          </h1>

          <p>
            Kerakli paketni tanlang va buyurtmani yuboring.
          </p>
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

            ${item.popular
              ? `<div class="popular-badge">ENG MASHHUR</div>`
              : ''
            }

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

      </div>

    </section>

    <!-- GIFT -->
    <section class="view simple-view" id="giftView">

      <button class="back-button" data-home>←</button>

      <div class="simple-icon">🎁</div>

      <span>TELEGRAM</span>

      <h1>Gift</h1>

      <p>
        Telegram sovg'alari tez orada shu yerda.
      </p>

      <div class="coming">
        TEZ ORADA
      </div>

    </section>

    <!-- CS2 -->
    <section class="view simple-view cs-page" id="cs2View">

      <button class="back-button" data-home>←</button>

      <div class="cs-big-visual">
        <div>✦</div>
        <span>CS2</span>
      </div>

      <span>COUNTER-STRIKE 2</span>

      <h1>Skin Market</h1>

      <p>
        CS2 skinlaringizni shu yerdan xarid qiling.
      </p>

      <button class="soon-button">
        Skinlarni ko'rish →
      </button>

    </section>

    <!-- PARTNERS -->
    <section class="view simple-view" id="partnersView">

  <button class="back-button" data-home>←</button>

  <div class="simple-icon">🤝</div>

  <span>BUSINESS</span>

  <h1>Hamkorlar</h1>

  <p>
    Biz bilan hamkorlik qilish uchun bog‘laning.
  </p>

 <button class="soon-button" data-page="partnership">
  🤝 Hamkorlik uchun →
</button>

</section>

<section class="view simple-view" id="partnershipView">

  <button class="back-button" data-page="partners">←</button>

  <div class="simple-icon">🤝</div>

  <span>PARTNERSHIP</span>

  <h1>Hamkorlik uchun</h1>

  <p>
    Hamkorlik, reklama va boshqa takliflar uchun biz bilan bog‘laning.
  </p>

  <div class="game-preview">

    <div>📱</div>

    <b>Telegram</b>

    <small>@mu4ammadjon</small>

    <button
      class="soon-button"
      onclick="window.open('https://t.me/mu4ammadjon', '_blank')"
    >
      Telegram → 
    </button>

  </div>

  <div class="game-preview">

    <div>📸</div>

    <b>Instagram</b>

    <small>@ron_cbr</small>

    <button
      class="soon-button"
      onclick="window.open('https://instagram.com/ron_cbr', '_blank')"
    >
      Instagram →
    </button>

  </div>

  <div class="game-preview">

    <div>📞</div>

    <b>Telefon</b>

    <small>+998 95 933 43 33</small>

    <button
      class="soon-button"
      onclick="window.location.href='tel:+998959334333'"
    >
      Qo‘ng‘iroq qilish →
    </button>

  </div>

  <div class="game-preview">

    <div>✉️</div>

    <b>Email</b>

    <small>r4zexxx@gmail.com</small>

    <button
      class="soon-button"
      onclick="window.location.href='mailto:r4zexxx@gmail.com'"
    >
      Email yuborish →
    </button>

  </div>

</section>

    <!-- GAMES -->
    <section class="view simple-view games-page" id="gamesView">

      <button class="back-button" data-home>←</button>

      <div class="games-top">

        <div class="simple-icon">🎮</div>

        <span>FUN ZONE</span>

        <h1>Mini O'yinlar</h1>

        <p>
          O'ynang, rekord o'rnating va vaqtni maroqli o'tkazing.
        </p>

      </div>

      <div class="games-stats">

        <div>
          <b id="gameScore">0</b>
          <small>Ball</small>
        </div>

        <div>
          <b id="gameBest">0</b>
          <small>Rekord</small>
        </div>

      </div>

      <div class="games-grid">

        <button class="game-card" data-game="reaction">

          <div class="game-card-icon">
            ⚡
          </div>

          <div>
            <span>01</span>
            <b>Reaction Test</b>
            <small>Qanchalik tezkor?</small>
          </div>

          <strong>→</strong>

        </button>

        <button class="game-card" data-game="tap">

          <div class="game-card-icon">
            👆
          </div>

          <div>
            <span>02</span>
            <b>Tap Challenge</b>
            <small>10 soniyada bos!</small>
          </div>

          <strong>→</strong>

        </button>

        <button class="game-card" data-game="memory">

          <div class="game-card-icon">
            🧠
          </div>

          <div>
            <span>03</span>
            <b>Memory</b>
            <small>Juftini toping</small>
          </div>

          <strong>→</strong>

        </button>

        <button class="game-card" data-game="guess">

          <div class="game-card-icon">
            🎯
          </div>

          <div>
            <span>04</span>
            <b>Number Guess</b>
            <small>Raqamni toping</small>
          </div>

          <strong>→</strong>

        </button>

        <button class="game-card" data-game="rps">

          <div class="game-card-icon">
            ✊
          </div>

          <div>
            <span>05</span>
            <b>Tosh-Qaychi-Qog'oz</b>
            <small>Botga qarshi</small>
          </div>

          <strong>→</strong>

        </button>

        <button class="game-card" data-game="tictactoe">

          <div class="game-card-icon">
            ❌
          </div>

          <div>
            <span>06</span>
            <b>Tic Tac Toe</b>
            <small>Botga qarshi</small>
          </div>

          <strong>→</strong>

        </button>

        <button class="game-card" data-game="catch">

          <div class="game-card-icon">
            ⭐
          </div>

          <div>
            <span>07</span>
            <b>Catch Stars</b>
            <small>Stars'larni ushla</small>
          </div>

          <strong>→</strong>

        </button>

        <button class="game-card" data-game="spin">

          <div class="game-card-icon">
            🎰
          </div>

          <div>
            <span>08</span>
            <b>Lucky Spin</b>
            <small>Omadingni sinab ko'r</small>
          </div>

          <strong>→</strong>

        </button>

      </div>

      <div class="game-area" id="gameArea">

        <div class="game-area-empty">
          <div>🎮</div>
          <b>O'yinni tanlang</b>
          <small>Yuqoridagi o'yinlardan birini bosing</small>
        </div>

      </div>

    </section>

    <!-- DONATE -->
    <section class="view simple-view" id="donateView">

      <button class="back-button" data-home>←</button>

      <div class="simple-icon">💎</div>

      <span>GAME TOP-UP</span>

      <h1>O'yinlarga Donat</h1>

      <p>
        Free Fire, PUBG, Mobile Legends va boshqa o'yinlar.
      </p>

      <div class="donate-list">

        <button>
          🎯 PUBG Mobile
          <b>→</b>
        </button>

        <button>
          🔥 Free Fire
          <b>→</b>
        </button>

        <button>
          ⚔️ Mobile Legends
          <b>→</b>
        </button>

        <button>
          🎮 Boshqa o'yinlar
          <b>→</b>
        </button>

      </div>

    </section>

    <!-- ORDER MODAL -->
    <div class="modal-overlay" id="orderModal">

      <div class="order-modal">

        <button class="modal-close" id="closeModal">
          ×
        </button>

        <div class="modal-star">★</div>

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

/* ================================
   NAVIGATION
================================ */

const views = document.querySelectorAll('.view')

function openPage(name) {

  views.forEach(view => {
    view.classList.remove('active')
  })

  const target =
    document.querySelector(`#${name}View`)

  if (target) {

    target.classList.add('active')

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

  }
}

document
  .querySelectorAll('[data-page]')
  .forEach(button => {

    button.addEventListener('click', () => {

      button.animate(
        [
          { transform: 'scale(.96)' },
          { transform: 'scale(1)' }
        ],
        {
          duration: 220
        }
      )

      openPage(button.dataset.page)

    })

  })

document
  .querySelectorAll('[data-home]')
  .forEach(button => {

    button.addEventListener('click', () => {
      openPage('home')
    })

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

document
  .querySelectorAll('.star-package')
  .forEach(card => {

    card.addEventListener('click', () => {

      document
        .querySelectorAll('.star-package')
        .forEach(item => {
          item.classList.remove('selected')
        })

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

/* ================================
   MODAL
================================ */

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

modal.addEventListener('click', event => {

  if (event.target === modal) {
    modal.classList.remove('show')
  }

})

/* ================================
   CONFIRM ORDER
================================ */

document
  .querySelector('#confirmButton')
  .addEventListener('click', async () => {

    const button =
      document.querySelector('#confirmButton')

    button.innerHTML = `
      <span>Buyurtma yuborilmoqda...</span>
      <strong>✓</strong>
    `

    button.disabled = true

    const tgUser =
      window.Telegram?.WebApp?.initDataUnsafe?.user || null

    try {

      const response =
        await fetch('/api/order', {

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

      const result =
        await response.json()

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Buyurtma yuborilmadi'
        )
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
   GAMES
================================ */

const gameArea =
  document.querySelector('#gameArea')

const gameScore =
  document.querySelector('#gameScore')

const gameBest =
  document.querySelector('#gameBest')

let score = 0

let bestScore =
  Number(
    localStorage.getItem('dok24_game_best') || 0
  )

gameBest.textContent = bestScore

function setGameScore(value) {

  score = value

  gameScore.textContent = score

  if (score > bestScore) {

    bestScore = score

    gameBest.textContent = bestScore

    localStorage.setItem(
      'dok24_game_best',
      bestScore
    )

  }

}

function resetGameScore() {
  setGameScore(0)
}

function gameTemplate(
  icon,
  title,
  description,
  content
) {

  gameArea.innerHTML = `
    <div class="game-panel">

      <div class="game-panel-head">

        <button
          class="game-back"
          id="gameBack"
        >
          ←
        </button>

        <div>

          <span>FUN ZONE</span>

          <h2>
            ${icon} ${title}
          </h2>

          <small>
            ${description}
          </small>

        </div>

      </div>

      <div class="game-content">
        ${content}
      </div>

    </div>
  `

  document
    .querySelector('#gameBack')
    .addEventListener('click', () => {

      gameArea.innerHTML = `
        <div class="game-area-empty">
          <div>🎮</div>
          <b>O'yinni tanlang</b>
          <small>
            Yuqoridagi o'yinlardan birini bosing
          </small>
        </div>
      `

    })

}

/* 1. REACTION */

function startReactionGame() {

  resetGameScore()

  gameTemplate(
    '⚡',
    'Reaction Test',
    'Signal chiqqanda tez bosing',
    `
      <div
        class="reaction-box"
        id="reactionBox"
      >
        <span>START</span>
        <small>
          Boshlash uchun bosing
        </small>
      </div>

      <div
        class="game-result"
        id="reactionResult"
      >
        Natija shu yerda chiqadi
      </div>
    `
  )

  const box =
    document.querySelector('#reactionBox')

  const result =
    document.querySelector('#reactionResult')

  let started = false
  let waiting = false
  let startTime = 0
  let timer = null

  box.addEventListener('click', () => {

    if (started) {

      if (waiting) {

        clearTimeout(timer)

        waiting = false
        started = false

        box.innerHTML = `
          <span>TOO EARLY!</span>
          <small>
            Qayta urinib ko'ring
          </small>
        `

        result.textContent =
          'Juda erta bosdingiz 😅'

        return
      }

      const reaction =
        Date.now() - startTime

      started = false

      setGameScore(
        Math.max(1, 1000 - reaction)
      )

      box.innerHTML = `
        <span>${reaction} ms</span>
        <small>
          Yana bir marta bosing
        </small>
      `

      result.textContent =
        reaction < 250
          ? '🔥 Juda tez!'
          : reaction < 400
            ? '⚡ Yaxshi natija!'
            : '😎 Yana mashq qiling!'

      return
    }

    started = true
    waiting = true

    box.innerHTML = `
      <span>KUTING...</span>
      <small>
        Hozir bosmang!
      </small>
    `

    const delay =
      1200 + Math.random() * 3000

    timer = setTimeout(() => {

      if (!started) return

      waiting = false
      startTime = Date.now()

      box.innerHTML = `
        <span>⚡ BOSING!</span>
        <small>HOZIR!</small>
      `

    }, delay)

  })

}

/* 2. TAP */

function startTapGame() {

  resetGameScore()

  gameTemplate(
    '👆',
    'Tap Challenge',
    '10 soniyada maksimal tap',
    `
      <div class="tap-game">

        <div class="tap-timer">
          <span>VAQT</span>
          <b id="tapTime">10</b>
        </div>

        <button
          class="tap-button"
          id="tapButton"
        >
          TAP!
          <small>
            Boshlash uchun bosing
          </small>
        </button>

        <div class="tap-count">
          <span>Tap</span>
          <b id="tapCount">0</b>
        </div>

      </div>
    `
  )

  const button =
    document.querySelector('#tapButton')

  const time =
    document.querySelector('#tapTime')

  const count =
    document.querySelector('#tapCount')

  let taps = 0
  let seconds = 10
  let running = false
  let started = false
  let interval = null

  button.addEventListener('click', () => {

    if (!started) {

      started = true
      running = true
      taps = 0
      seconds = 10

      button.innerHTML = `
        TAP!
        <small>
          BOSING!
        </small>
      `

      interval =
        setInterval(() => {

          seconds--

          time.textContent = seconds

          if (seconds <= 0) {

            clearInterval(interval)

            running = false

            setGameScore(taps)

            button.innerHTML = `
              YANA!
              <small>
                ${taps} ta tap
              </small>
            `

          }

        }, 1000)

    }

    if (running) {

      taps++

      count.textContent = taps

      button.animate(
        [
          { transform: 'scale(.94)' },
          { transform: 'scale(1)' }
        ],
        {
          duration: 80
        }
      )

    }

  })

}

/* 3. MEMORY */

function startMemoryGame() {

  resetGameScore()

  const icons = [
    '⭐',
    '🎁',
    '🎮',
    '🔥',
    '💎',
    '🎯'
  ]

  const cards =
    [...icons, ...icons]
      .sort(() => Math.random() - .5)

  gameTemplate(
    '🧠',
    'Memory',
    'Bir xil kartalarni toping',
    `
      <div
        class="memory-game"
        id="memoryGame"
      >

        ${cards.map((icon, index) => `
          <button
            class="memory-card"
            data-index="${index}"
            data-value="${icon}"
          >
            ?
          </button>
        `).join('')}

      </div>

      <div
        class="game-result"
        id="memoryResult"
      >
        Juftlarni toping
      </div>
    `
  )

  const cardElements =
    [...document.querySelectorAll('.memory-card')]

  let first = null
  let second = null
  let lock = false
  let matched = 0

  cardElements.forEach(card => {

    card.addEventListener('click', () => {

      if (
        lock ||
        card === first ||
        card.classList.contains('matched')
      ) {
        return
      }

      card.textContent =
        card.dataset.value

      if (!first) {

        first = card

        return
      }

      second = card
      lock = true

      if (
        first.dataset.value ===
        second.dataset.value
      ) {

        first.classList.add('matched')
        second.classList.add('matched')

        matched += 2

        setGameScore(score + 10)

        first = null
        second = null
        lock = false

        if (matched === cards.length) {

          document
            .querySelector('#memoryResult')
            .textContent =
              '🏆 Hammasini topdingiz!'

        }

      } else {

        setTimeout(() => {

          first.textContent = '?'
          second.textContent = '?'

          first = null
          second = null
          lock = false

        }, 650)

      }

    })

  })

}

/* 4. NUMBER GUESS */

function startGuessGame() {

  resetGameScore()

  const number =
    Math.floor(Math.random() * 100) + 1

  gameTemplate(
    '🎯',
    'Number Guess',
    '1 dan 100 gacha raqamni toping',
    `
      <div class="guess-game">

        <div class="guess-number">
          ?
        </div>

        <input
          id="guessInput"
          type="number"
          min="1"
          max="100"
          placeholder="Raqam yozing..."
        />

        <button
          class="game-action"
          id="guessButton"
        >
          Tekshirish →
        </button>

        <div
          class="game-result"
          id="guessResult"
        >
          1–100 orasidan tanlang
        </div>

      </div>
    `
  )

  const input =
    document.querySelector('#guessInput')

  const button =
    document.querySelector('#guessButton')

  const result =
    document.querySelector('#guessResult')

  let attempts = 0

  button.addEventListener('click', () => {

    const guess =
      Number(input.value)

    if (
      !guess ||
      guess < 1 ||
      guess > 100
    ) {

      result.textContent =
        '1 dan 100 gacha raqam kiriting.'

      return
    }

    attempts++

    if (guess === number) {

      setGameScore(
        Math.max(
          10,
          100 - attempts * 10
        )
      )

      result.textContent =
        `🎉 Topdingiz! ${attempts} urinishda.`

      button.disabled = true

    } else if (guess < number) {

      result.textContent =
        '⬆️ Kattaroq raqam.'

    } else {

      result.textContent =
        '⬇️ Kichikroq raqam.'

    }

  })

}

/* 5. RPS */

function startRpsGame() {

  resetGameScore()

  gameTemplate(
    '✊',
    'Tosh-Qaychi-Qog‘oz',
    'Botni mag‘lub qiling',
    `
      <div class="rps-game">

        <div
          class="rps-result"
          id="rpsResult"
        >
          Tanlang!
        </div>

        <div class="rps-buttons">

          <button data-rps="rock">
            ✊
            <small>Tosh</small>
          </button>

          <button data-rps="paper">
            ✋
            <small>Qog‘oz</small>
          </button>

          <button data-rps="scissors">
            ✌️
            <small>Qaychi</small>
          </button>

        </div>

      </div>
    `
  )

  const result =
    document.querySelector('#rpsResult')

  const choices = [
    'rock',
    'paper',
    'scissors'
  ]

  const names = {
    rock: '✊ Tosh',
    paper: '✋ Qog‘oz',
    scissors: '✌️ Qaychi'
  }

  document
    .querySelectorAll('[data-rps]')
    .forEach(button => {

      button.addEventListener('click', () => {

        const player =
          button.dataset.rps

        const bot =
          choices[
            Math.floor(
              Math.random() *
              choices.length
            )
          ]

        if (player === bot) {

          result.innerHTML = `
            🤝 Durrang<br>
            Siz: ${names[player]}<br>
            Bot: ${names[bot]}
          `

          return
        }

        const win =
          (player === 'rock' &&
            bot === 'scissors') ||
          (player === 'paper' &&
            bot === 'rock') ||
          (player === 'scissors' &&
            bot === 'paper')

        if (win) {

          setGameScore(score + 10)

          result.innerHTML = `
            🏆 Siz yutdingiz!<br>
            Siz: ${names[player]}<br>
            Bot: ${names[bot]}
          `

        } else {

          result.innerHTML = `
            😈 Bot yutdi!<br>
            Siz: ${names[player]}<br>
            Bot: ${names[bot]}
          `

        }

      })

    })

}

/* 6. TIC TAC TOE */

function startTicTacToe() {

  resetGameScore()

  gameTemplate(
    '❌⭕',
    'Tic Tac Toe',
    'Botga qarshi o‘ynang',
    `
      <div class="tic-game">

        <div
          class="tic-board"
          id="ticBoard"
        >

          ${Array.from(
            { length: 9 },
            (_, i) => `
              <button data-cell="${i}"></button>
            `
          ).join('')}

        </div>

        <div
          class="game-result"
          id="ticResult"
        >
          Siz — X
        </div>

      </div>
    `
  )

  const board =
    document.querySelector('#ticBoard')

  const cells =
    [...board.querySelectorAll('button')]

  const result =
    document.querySelector('#ticResult')

  let state =
    Array(9).fill('')

  let playerTurn = true
  let finished = false

  const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  function winner() {

    for (
      const [a,b,c]
      of wins
    ) {

      if (
        state[a] &&
        state[a] === state[b] &&
        state[a] === state[c]
      ) {

        return state[a]

      }

    }

    if (state.every(Boolean)) {
      return 'draw'
    }

    return null
  }

  function endGame(w) {

    finished = true

    if (w === 'X') {

      result.textContent =
        '🏆 Siz yutdingiz!'

      setGameScore(score + 20)

    } else if (w === 'O') {

      result.textContent =
        '🤖 Bot yutdi!'

    } else {

      result.textContent =
        '🤝 Durrang!'

    }

  }

  function botMove() {

    const empty =
      state
        .map((v, i) =>
          v ? null : i
        )
        .filter(v => v !== null)

    if (!empty.length) {
      return
    }

    const move =
      empty[
        Math.floor(
          Math.random() * empty.length
        )
      ]

    state[move] = 'O'

    cells[move].textContent = 'O'

    const w = winner()

    if (w) {

      endGame(w)

      return
    }

    playerTurn = true

    result.textContent =
      'Sizning navbatingiz'

  }

  cells.forEach((cell, index) => {

    cell.addEventListener('click', () => {

      if (
        finished ||
        !playerTurn ||
        state[index]
      ) {
        return
      }

      state[index] = 'X'

      cell.textContent = 'X'

      const w = winner()

      if (w) {

        endGame(w)

        return
      }

      playerTurn = false

      result.textContent =
        'Bot o‘ylayapti...'

      setTimeout(
        botMove,
        450
      )

    })

  })

}

/* 7. CATCH STARS */

function startCatchGame() {

  resetGameScore()

  gameTemplate(
    '⭐',
    'Catch Stars',
    'Starslarni ushlang',
    `
      <div
        class="catch-game"
        id="catchGame"
      >

        <div class="catch-score">
          Ball:
          <b id="catchScore">0</b>
        </div>

        <button
          class="catch-star"
          id="catchStar"
        >
          ⭐
        </button>

      </div>
    `
  )

  const area =
    document.querySelector('#catchGame')

  const star =
    document.querySelector('#catchStar')

  const scoreEl =
    document.querySelector('#catchScore')

  let points = 0
  let moves = 0

  function moveStar() {

    const maxX =
      area.clientWidth - 65

    const maxY =
      area.clientHeight - 65

    star.style.left =
      `${Math.random() *
      Math.max(0, maxX)}px`

    star.style.top =
      `${Math.random() *
      Math.max(0, maxY)}px`

  }

  star.addEventListener('click', () => {

    points++
    moves++

    scoreEl.textContent =
      points

    setGameScore(points)

    moveStar()

    if (moves >= 30) {

      star.disabled = true

      star.textContent = '🏆'

    }

  })

  moveStar()

}

/* 8. LUCKY SPIN */

function startSpinGame() {

  resetGameScore()

  gameTemplate(
    '🎰',
    'Lucky Spin',
    'Omadingizni sinab ko‘ring',
    `
      <div class="spin-game">

        <div
          class="spin-wheel"
          id="spinWheel"
        >
          <span>🎰</span>
        </div>

        <button
          class="game-action"
          id="spinButton"
        >
          AYLANTIRISH →
        </button>

        <div
          class="game-result"
          id="spinResult"
        >
          Omad sizga kulib boqsin 🍀
        </div>

      </div>
    `
  )

  const wheel =
    document.querySelector('#spinWheel')

  const button =
    document.querySelector('#spinButton')

  const result =
    document.querySelector('#spinResult')

  const prizes = [
    '+10 ball 🎯',
    '+20 ball ⭐',
    '+50 ball 🔥',
    '+100 ball 💎',
    '+5 ball 🎁',
    'Omad yo‘q 😅'
  ]

  let spinning = false

  button.addEventListener('click', () => {

    if (spinning) {
      return
    }

    spinning = true
    button.disabled = true

    wheel.animate(
      [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(1440deg)' }
      ],
      {
        duration: 1800,
        easing: 'cubic-bezier(.15,.75,.25,1)'
      }
    )

    setTimeout(() => {

      const prize =
        prizes[
          Math.floor(
            Math.random() * prizes.length
          )
        ]

      result.textContent = prize

      const points =
        Number(
          prize.match(/\d+/)?.[0] || 0
        )

      if (points) {
        setGameScore(score + points)
      }

      spinning = false
      button.disabled = false

    }, 1800)

  })

}

/* GAME SELECT */

document
  .querySelectorAll('[data-game]')
  .forEach(button => {

    button.addEventListener('click', () => {

      const game =
        button.dataset.game

      if (game === 'reaction') {
        startReactionGame()
      }

      if (game === 'tap') {
        startTapGame()
      }

      if (game === 'memory') {
        startMemoryGame()
      }

      if (game === 'guess') {
        startGuessGame()
      }

      if (game === 'rps') {
        startRpsGame()
      }

      if (game === 'tictactoe') {
        startTicTacToe()
      }

      if (game === 'catch') {
        startCatchGame()
      }

      if (game === 'spin') {
        startSpinGame()
      }

      gameArea.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

    })

  })

/* ================================
   TELEGRAM
================================ */

if (window.Telegram?.WebApp) {

  const tg =
    window.Telegram.WebApp

  tg.ready()
  tg.expand()

}