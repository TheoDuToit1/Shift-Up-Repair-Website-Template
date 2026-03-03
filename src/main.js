// Main application entry point
import './styles/main.css'

// Custom Cursor
const customCursor = document.querySelector('.custom-cursor')

if (customCursor) {
  // Custom cursor disabled
  // document.addEventListener('mousemove', (e) => {
  //   customCursor.style.left = (e.clientX - 17) + 'px'
  //   customCursor.style.top = (e.clientY - 17) + 'px'
  // }, false)
}

document.addEventListener('DOMContentLoaded', () => {
  if (customCursor) {
    // customCursor.classList.add('active')
    // document.body.classList.add('custom-cursor-active')
  }
  console.log('Car Repair Website Ready')

  // Highlight active page in header-alt navigation
  const headerAltNavItems = document.querySelectorAll('.header-alt .header-nav-item')
  if (headerAltNavItems.length > 0) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'
    
    headerAltNavItems.forEach(item => {
      const href = item.getAttribute('href')
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  }

  // Highlight active page in regular header navigation
  const headerNavItems = document.querySelectorAll('.header:not(.header-alt) .header-nav-item')
  if (headerNavItems.length > 0) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'
    
    headerNavItems.forEach(item => {
      const href = item.getAttribute('href')
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  }
})

// Header Navigation
const navItems = document.querySelectorAll('.header-nav-item')
const headerLogo = document.querySelector('.header-logo')

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const href = item.getAttribute('href')
    if (href && href !== '#') {
      window.location.href = href
    }
    navItems.forEach(nav => nav.classList.remove('active'))
    item.classList.add('active')
  })
})

// Logo Cursor Hover
if (headerLogo && customCursor) {
  headerLogo.addEventListener('mouseenter', () => {
    customCursor.classList.add('logo-hover')
  })

  headerLogo.addEventListener('mouseleave', () => {
    customCursor.classList.remove('logo-hover')
  })
}

// Sidebar Menu
const hamburger = document.querySelector('.header-hamburger')
const sidebarOverlay = document.querySelector('.sidebar-overlay')
const sidebarMenu = document.querySelector('.sidebar-menu')
const sidebarClose = document.querySelector('.sidebar-close')
const sidebarNavItems = document.querySelectorAll('.sidebar-nav-item')

// Mobile Menu
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuClose = document.querySelector('.mobile-menu-close')
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item')

// Detect if mobile
function isMobile() {
  return window.innerWidth <= 768
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    // Check if this is a header-alt page
    const isHeaderAlt = document.querySelector('.header-alt') !== null
    
    if (isHeaderAlt) {
      // On header-alt pages
      if (isMobile()) {
        // Open mobile menu on mobile
        if (mobileMenuOverlay && mobileMenu) {
          mobileMenuOverlay.classList.add('active')
          mobileMenu.classList.add('active')
        }
      } else {
        // Open sidebar on desktop
        if (sidebarOverlay && sidebarMenu) {
          sidebarOverlay.classList.add('active')
          sidebarMenu.classList.add('active')
        }
      }
    } else {
      // On homepage with regular header
      if (isMobile()) {
        // Open mobile menu on mobile
        if (mobileMenuOverlay && mobileMenu) {
          mobileMenuOverlay.classList.add('active')
          mobileMenu.classList.add('active')
        }
      } else {
        // Open sidebar on desktop
        if (sidebarOverlay && sidebarMenu) {
          sidebarOverlay.classList.add('active')
          sidebarMenu.classList.add('active')
        }
      }
    }
  })
}

// Mobile menu close
if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => {
    if (mobileMenuOverlay && mobileMenu) {
      mobileMenuOverlay.classList.remove('active')
      mobileMenu.classList.remove('active')
    }
  })
}

if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener('click', () => {
    if (mobileMenuOverlay && mobileMenu) {
      mobileMenuOverlay.classList.remove('active')
      mobileMenu.classList.remove('active')
    }
  })
}

mobileMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (mobileMenuOverlay && mobileMenu) {
      mobileMenuOverlay.classList.remove('active')
      mobileMenu.classList.remove('active')
    }
  })
})

// Sidebar close
if (sidebarClose) {
  sidebarClose.addEventListener('click', () => {
    if (sidebarOverlay && sidebarMenu) {
      sidebarOverlay.classList.remove('active')
      sidebarMenu.classList.remove('active')
    }
  })
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', () => {
    if (sidebarOverlay && sidebarMenu) {
      sidebarOverlay.classList.remove('active')
      sidebarMenu.classList.remove('active')
    }
  })
}

sidebarNavItems.forEach(item => {
  item.addEventListener('click', () => {
    if (sidebarOverlay && sidebarMenu) {
      sidebarOverlay.classList.remove('active')
      sidebarMenu.classList.remove('active')
    }
  })
})

// Blog Data
const blogData = {
  1: {
    title: 'Eyes On The Road',
    date: 'October 5, 2024',
    category: 'CAR',
    tag: 'ELECTRONIC',
    content: `
      <p>Learn the importance of keeping your eyes on the road and maintaining proper vehicle awareness while driving. Safety is our top priority.</p>
      
      <h2>Introduction</h2>
      <p>Driving safely requires constant attention and awareness. In this comprehensive guide, we'll explore the critical importance of keeping your eyes on the road and how it impacts your safety and the safety of others.</p>

      <h2>Why Focus Matters</h2>
      <p>Your eyes are your primary tool for gathering information about the road, traffic, and potential hazards. When you're focused on the road, you can:</p>
      <ul>
        <li>Detect obstacles and hazards early</li>
        <li>React quickly to unexpected situations</li>
        <li>Maintain proper lane positioning</li>
        <li>Anticipate the actions of other drivers</li>
        <li>Avoid accidents and collisions</li>
      </ul>

      <h2>Common Distractions</h2>
      <p>Modern vehicles and technology have introduced numerous distractions that can take your eyes off the road:</p>
      <ul>
        <li>Mobile phones and text messages</li>
        <li>In-vehicle entertainment systems</li>
        <li>Navigation devices</li>
        <li>Eating and drinking</li>
        <li>Adjusting vehicle controls</li>
      </ul>

      <h2>Safety Tips</h2>
      <p>To maintain focus while driving:</p>
      <ul>
        <li>Put your phone away before driving</li>
        <li>Set up navigation before you start driving</li>
        <li>Avoid eating or drinking while driving</li>
        <li>Keep your eyes moving to scan the road</li>
        <li>Take breaks on long drives</li>
        <li>Ensure proper mirror adjustment</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Keeping your eyes on the road is one of the most fundamental aspects of safe driving. By eliminating distractions and maintaining focus, you can significantly reduce the risk of accidents and ensure a safer driving experience for yourself and others on the road.</p>
    `
  },
  2: {
    title: 'Fast & Furious',
    date: 'October 25, 2024',
    category: 'CAR',
    tag: 'ELECTRONIC',
    content: `
      <p>Discover the latest high-performance vehicles and what makes them special. From acceleration to handling, we break down the specs.</p>
      
      <h2>Introduction</h2>
      <p>High-performance vehicles represent the pinnacle of automotive engineering. In this guide, we explore what makes these machines tick and why enthusiasts are passionate about them.</p>

      <h2>Engine Performance</h2>
      <p>Modern high-performance engines deliver incredible power and efficiency:</p>
      <ul>
        <li>Turbocharged and supercharged engines</li>
        <li>Advanced fuel injection systems</li>
        <li>Optimized combustion chambers</li>
        <li>High-flow exhaust systems</li>
        <li>Precision engine management</li>
      </ul>

      <h2>Handling and Suspension</h2>
      <p>Superior handling comes from advanced suspension technology:</p>
      <ul>
        <li>Adaptive suspension systems</li>
        <li>Performance-tuned springs and dampers</li>
        <li>Anti-roll bars and stabilizers</li>
        <li>Precision steering geometry</li>
        <li>Track-tested components</li>
      </ul>

      <h2>Braking Systems</h2>
      <p>Stopping power is just as important as acceleration. High-performance vehicles feature:</p>
      <ul>
        <li>Carbon-ceramic brake discs</li>
        <li>Multi-piston calipers</li>
        <li>Advanced ABS systems</li>
        <li>Brake cooling ducts</li>
        <li>Regenerative braking technology</li>
      </ul>

      <h2>Conclusion</h2>
      <p>High-performance vehicles combine cutting-edge technology with precision engineering to deliver an unmatched driving experience. Whether on the track or the road, these machines represent the future of automotive excellence.</p>
    `
  },
  3: {
    title: 'Modern Car Industry',
    date: 'October 30, 2024',
    category: 'CAR',
    tag: 'ELECTRONIC',
    content: `
      <p>Explore the evolution of the automotive industry and how technology is shaping the future of transportation and vehicle design.</p>
      
      <h2>Introduction</h2>
      <p>The automotive industry is undergoing a massive transformation. From electric vehicles to autonomous driving, the future of transportation is being shaped right now.</p>

      <h2>Electric Revolution</h2>
      <p>Electric vehicles are becoming mainstream:</p>
      <ul>
        <li>Battery technology improvements</li>
        <li>Expanding charging infrastructure</li>
        <li>Lower total cost of ownership</li>
        <li>Environmental benefits</li>
        <li>Performance advantages</li>
      </ul>

      <h2>Autonomous Driving</h2>
      <p>Self-driving technology is advancing rapidly:</p>
      <ul>
        <li>Advanced sensor systems</li>
        <li>AI and machine learning</li>
        <li>Real-time decision making</li>
        <li>Safety improvements</li>
        <li>Traffic optimization</li>
      </ul>

      <h2>Connected Vehicles</h2>
      <p>Cars are becoming connected devices:</p>
      <ul>
        <li>Vehicle-to-vehicle communication</li>
        <li>Cloud connectivity</li>
        <li>Over-the-air updates</li>
        <li>Smart infotainment systems</li>
        <li>Predictive maintenance</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The modern automotive industry is at an inflection point. The convergence of electrification, autonomy, and connectivity will fundamentally reshape how we think about transportation.</p>
    `
  },
  4: {
    title: 'Automobile Catalog',
    date: 'November 1, 2024',
    category: 'CAR',
    tag: 'ELECTRONIC',
    content: `
      <p>Browse our comprehensive catalog of automotive components and accessories. Find everything you need for your vehicle maintenance.</p>
      
      <h2>Introduction</h2>
      <p>Our extensive catalog features premium automotive components and accessories for every need. Whether you're looking for maintenance parts or performance upgrades, we have you covered.</p>

      <h2>Engine Components</h2>
      <p>Keep your engine running smoothly with our selection:</p>
      <ul>
        <li>Air filters and intake systems</li>
        <li>Oil filters and lubricants</li>
        <li>Spark plugs and ignition components</li>
        <li>Fuel system components</li>
        <li>Engine gaskets and seals</li>
      </ul>

      <h2>Suspension and Steering</h2>
      <p>Improve your vehicle's handling:</p>
      <ul>
        <li>Shock absorbers and struts</li>
        <li>Springs and coils</li>
        <li>Control arms and links</li>
        <li>Steering components</li>
        <li>Wheel bearings</li>
      </ul>

      <h2>Braking System</h2>
      <p>Safety-critical components:</p>
      <ul>
        <li>Brake pads and rotors</li>
        <li>Brake fluid and lines</li>
        <li>Calipers and master cylinders</li>
        <li>ABS components</li>
        <li>Brake hoses</li>
      </ul>

      <h2>Accessories</h2>
      <p>Enhance your driving experience:</p>
      <ul>
        <li>Floor mats and liners</li>
        <li>Seat covers and protectors</li>
        <li>Storage solutions</li>
        <li>Lighting upgrades</li>
        <li>Performance parts</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Our catalog is constantly updated with the latest components and accessories. Browse our selection and find exactly what you need to keep your vehicle in top condition.</p>
    `
  }
}

// Load blog detail page content
function loadBlogDetail() {
  const urlParams = new URLSearchParams(window.location.search)
  const blogId = urlParams.get('id') || '1'
  const blog = blogData[blogId]
  
  if (blog) {
    document.getElementById('blogTitle').textContent = blog.title
    document.getElementById('blogDate').textContent = blog.date
    document.getElementById('blogCategory').textContent = blog.category
    document.getElementById('blogTag').textContent = blog.tag
    document.getElementById('sidebarDate').textContent = blog.date
    document.getElementById('sidebarCategory').textContent = blog.category
    document.getElementById('blogContent').innerHTML = blog.content
  }
}

// Call on page load if on blog detail page
if (document.querySelector('.blog-detail-hero')) {
  loadBlogDetail()
}

// Hero Carousel
let currentSlide = 0
const heroSlides = document.querySelectorAll('.hero-slide')
const heroIndicators = document.querySelectorAll('.hero-indicator')
const heroArrowLeft = document.querySelector('.hero-arrow-left')
const heroArrowRight = document.querySelector('.hero-arrow-right')

function showSlide(index) {
  // Remove active and exit classes from all slides
  heroSlides.forEach(slide => {
    slide.classList.remove('active', 'exit')
  })
  
  // Remove active class from all indicators
  heroIndicators.forEach(indicator => {
    indicator.classList.remove('active')
  })
  
  // Add active class to current slide and indicator
  heroSlides[index].classList.add('active')
  heroIndicators[index].classList.add('active')
  
  currentSlide = index
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % heroSlides.length
  heroSlides[currentSlide].classList.add('exit')
  setTimeout(() => {
    showSlide(nextIndex)
  }, 400)
}

function prevSlide() {
  const prevIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length
  heroSlides[currentSlide].classList.add('exit')
  setTimeout(() => {
    showSlide(prevIndex)
  }, 400)
}

// Arrow navigation
if (heroArrowLeft) {
  heroArrowLeft.addEventListener('click', prevSlide)
}

if (heroArrowRight) {
  heroArrowRight.addEventListener('click', nextSlide)
}

// Indicator navigation
heroIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    if (index !== currentSlide) {
      heroSlides[currentSlide].classList.add('exit')
      setTimeout(() => {
        showSlide(index)
      }, 400)
    }
  })
})

// Shop Hero Carousel (for shop page)
let currentShopSlide = 0
const shopHeroSlides = document.querySelectorAll('.shop-hero-slide')
const shopHeroIndicators = document.querySelectorAll('.shop-hero-indicator')
const shopHeroArrowLeft = document.querySelector('.shop-hero-arrow-left')
const shopHeroArrowRight = document.querySelector('.shop-hero-arrow-right')

function showShopSlide(index) {
  // Add exit animation to current slide
  shopHeroSlides[currentShopSlide].classList.add('exit')
  
  // Wait for fade out, then switch slides
  setTimeout(() => {
    // Remove active and exit classes from all slides
    shopHeroSlides.forEach(slide => {
      slide.classList.remove('active', 'exit')
    })
    
    shopHeroIndicators.forEach(indicator => {
      indicator.classList.remove('active')
    })
    
    // Trigger reflow to restart animations
    void shopHeroSlides[index].offsetWidth
    
    // Add active class to trigger animations
    shopHeroSlides[index].classList.add('active')
    shopHeroIndicators[index].classList.add('active')
    
    currentShopSlide = index
  }, 400)
}

function nextShopSlide() {
  const nextIndex = (currentShopSlide + 1) % shopHeroSlides.length
  showShopSlide(nextIndex)
}

function prevShopSlide() {
  const prevIndex = (currentShopSlide - 1 + shopHeroSlides.length) % shopHeroSlides.length
  showShopSlide(prevIndex)
}

if (shopHeroArrowLeft) {
  shopHeroArrowLeft.addEventListener('click', prevShopSlide)
}

if (shopHeroArrowRight) {
  shopHeroArrowRight.addEventListener('click', nextShopSlide)
}

shopHeroIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    if (index !== currentShopSlide) {
      showShopSlide(index)
    }
  })
})

// Technical Specifications Section
const specsItems = document.querySelectorAll('.specs-item')
const specsContents = document.querySelectorAll('.specs-content')

specsItems.forEach(item => {
  item.addEventListener('click', () => {
    const specType = item.getAttribute('data-spec')
    const buttonText = item.textContent
    
    // Update active item
    specsItems.forEach(i => {
      i.classList.remove('active')
      i.style.setProperty('--button-text', `"${i.textContent}"`)
    })
    item.classList.add('active')
    item.style.setProperty('--button-text', `"${buttonText}"`)
    
    // Update content visibility
    specsContents.forEach(content => {
      if (content.getAttribute('data-spec') === specType) {
        content.classList.remove('hidden')
      } else {
        content.classList.add('hidden')
      }
    })
  })
  
  // Set initial text
  item.style.setProperty('--button-text', `"${item.textContent}"`)
})

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(item => {
  const header = item.querySelector('.faq-item-header')
  
  header.addEventListener('click', () => {
    // Close other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active')
      }
    })
    
    // Toggle current item
    item.classList.toggle('active')
  })
})


// Product Page Tabs
const productTabBtns = document.querySelectorAll('.product-tab-btn')
const productTabPanes = document.querySelectorAll('.product-tab-pane')

productTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabName = btn.getAttribute('data-tab')
    
    // Remove active class from all buttons and panes
    productTabBtns.forEach(b => b.classList.remove('active'))
    productTabPanes.forEach(pane => pane.classList.remove('active'))
    
    // Add active class to clicked button and corresponding pane
    btn.classList.add('active')
    const activePane = document.getElementById(tabName)
    if (activePane) {
      activePane.classList.add('active')
    }
  })
})

// Compatibility Checker Form
const compatibilityForm = document.querySelector('.compatibility-checker-form')
const compatibilityResult = document.querySelector('.compatibility-result')

if (compatibilityForm) {
  compatibilityForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const year = document.getElementById('vehicle-year').value
    const make = document.getElementById('vehicle-make').value
    const model = document.getElementById('vehicle-model').value
    
    if (year && make && model) {
      // Show result
      compatibilityResult.style.display = 'block'
      
      // Scroll to result
      compatibilityResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  })
}

// Cart Management
class Cart {
  constructor() {
    this.items = this.loadCart()
    this.updateCartCounter()
  }

  loadCart() {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items))
    this.updateCartCounter()
  }

  addItem(product) {
    const existingItem = this.items.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += product.quantity
    } else {
      this.items.push(product)
    }
    
    this.saveCart()
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId)
    this.saveCart()
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId)
    if (item) {
      item.quantity = quantity
      if (item.quantity <= 0) {
        this.removeItem(productId)
      } else {
        this.saveCart()
      }
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  updateCartCounter() {
    const counter = document.querySelector('.header-cart-counter')
    if (counter) {
      const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0)
      counter.textContent = totalItems
    }
  }
}

const cart = new Cart()

// Add to Cart Button - Product View
const addToCartBtn = document.querySelector('.product-view-add-btn')
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    const quantity = parseInt(document.querySelector('.product-view-qty-input').value)
    
    const product = {
      id: 'premium-wheel-001',
      name: 'PREMIUM AUTOMOTIVE WHEEL',
      price: 749.00,
      originalPrice: 990.00,
      image: '/shop-single-new-7-600x713-removebg-preview.png',
      quantity: quantity
    }
    
    cart.addItem(product)
    
    // Show feedback
    addToCartBtn.textContent = 'ADDED TO CART ✓'
    addToCartBtn.style.backgroundColor = '#22c55e'
    
    setTimeout(() => {
      addToCartBtn.textContent = 'ADD TO CART'
      addToCartBtn.style.backgroundColor = ''
    }, 2000)
  })
}

// Add to Cart Button - Compatibility Checker
const compatibilityAddBtn = document.querySelector('.compatibility-add-to-cart-btn')
if (compatibilityAddBtn) {
  compatibilityAddBtn.addEventListener('click', () => {
    const quantity = 1
    
    const product = {
      id: 'premium-wheel-001',
      name: 'PREMIUM AUTOMOTIVE WHEEL',
      price: 749.00,
      originalPrice: 990.00,
      image: '/shop-single-new-7-600x713-removebg-preview.png',
      quantity: quantity
    }
    
    cart.addItem(product)
    
    // Show feedback
    compatibilityAddBtn.textContent = 'ADDED TO CART ✓'
    compatibilityAddBtn.style.backgroundColor = '#22c55e'
    
    setTimeout(() => {
      compatibilityAddBtn.textContent = 'ADD TO CART NOW'
      compatibilityAddBtn.style.backgroundColor = ''
    }, 2000)
  })
}

// Add to Cart Icons - Shop Page
const addToCartIcons = document.querySelectorAll('.add-to-cart-icon')
addToCartIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.preventDefault()
    
    const productId = icon.getAttribute('data-product-id')
    const productName = icon.getAttribute('data-product-name')
    const productPrice = parseFloat(icon.getAttribute('data-product-price'))
    const productImage = icon.getAttribute('data-product-image')
    
    const product = {
      id: productId,
      name: productName,
      price: productPrice,
      originalPrice: productPrice * 1.32,
      image: productImage,
      quantity: 1
    }
    
    cart.addItem(product)
    
    // Show feedback animation
    icon.style.color = '#22c55e'
    icon.style.transform = 'scale(1.2)'
    
    setTimeout(() => {
      icon.style.color = ''
      icon.style.transform = ''
    }, 600)
  })
})

// Cart Icon Click - Navigate to Checkout
const cartIcon = document.querySelector('.header-cart')
if (cartIcon) {
  cartIcon.addEventListener('click', () => {
    window.location.href = 'checkout.html'
  })
}


// Checkout Page
if (document.querySelector('.checkout-section')) {
  const checkoutItemsContainer = document.querySelector('.checkout-items')
  const subtotalEl = document.querySelector('.subtotal')
  const shippingEl = document.querySelector('.shipping')
  const taxEl = document.querySelector('.tax')
  const totalEl = document.querySelector('.total-amount')
  const checkoutForm = document.querySelector('.checkout-form')

  function renderCheckoutItems() {
    checkoutItemsContainer.innerHTML = ''
    
    if (cart.items.length === 0) {
      checkoutItemsContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Your cart is empty</p>'
      return
    }

    cart.items.forEach(item => {
      const itemEl = document.createElement('div')
      itemEl.className = 'checkout-item'
      itemEl.innerHTML = `
        <div class="checkout-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="checkout-item-details">
          <h4 class="checkout-item-name">${item.name}</h4>
          <p class="checkout-item-price">$${item.price.toFixed(2)} each</p>
        </div>
        <div class="checkout-item-actions">
          <div class="checkout-item-qty">
            <button class="qty-btn qty-decrease" data-id="${item.id}">-</button>
            <input type="number" class="qty-input" value="${item.quantity}" min="1" data-id="${item.id}">
            <button class="qty-btn qty-increase" data-id="${item.id}">+</button>
          </div>
          <button class="remove-btn" data-id="${item.id}">REMOVE</button>
        </div>
      `
      checkoutItemsContainer.appendChild(itemEl)
    })

    // Add event listeners
    document.querySelectorAll('.qty-decrease').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const id = btn.getAttribute('data-id')
        const item = cart.items.find(i => i.id === id)
        if (item && item.quantity > 1) {
          cart.updateQuantity(id, item.quantity - 1)
          renderCheckoutItems()
          updateTotals()
        }
      })
    })

    document.querySelectorAll('.qty-increase').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const id = btn.getAttribute('data-id')
        const item = cart.items.find(i => i.id === id)
        if (item) {
          cart.updateQuantity(id, item.quantity + 1)
          renderCheckoutItems()
          updateTotals()
        }
      })
    })

    document.querySelectorAll('.qty-input').forEach(input => {
      input.addEventListener('change', () => {
        const id = input.getAttribute('data-id')
        const qty = parseInt(input.value)
        if (qty > 0) {
          cart.updateQuantity(id, qty)
          renderCheckoutItems()
          updateTotals()
        }
      })
    })

    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const id = btn.getAttribute('data-id')
        cart.removeItem(id)
        renderCheckoutItems()
        updateTotals()
      })
    })
  }

  function updateTotals() {
    const subtotal = cart.getTotal()
    const shippingMethod = document.querySelector('input[name="shipping"]:checked')
    let shippingCost = 0
    
    if (shippingMethod) {
      if (shippingMethod.value === 'express') {
        shippingCost = 15
      } else if (shippingMethod.value === 'overnight') {
        shippingCost = 35
      }
    }

    const tax = subtotal * 0.08
    const total = subtotal + shippingCost + tax

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`
    shippingEl.textContent = `$${shippingCost.toFixed(2)}`
    taxEl.textContent = `$${tax.toFixed(2)}`
    totalEl.textContent = `$${total.toFixed(2)}`
  }

  // Shipping method change
  document.querySelectorAll('input[name="shipping"]').forEach(radio => {
    radio.addEventListener('change', updateTotals)
  })

  // Form submission
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault()
      
      const firstName = document.getElementById('first-name').value
      const lastName = document.getElementById('last-name').value
      const email = document.getElementById('email').value
      
      if (firstName && lastName && email && cart.items.length > 0) {
        alert(`Thank you for your purchase, ${firstName}! Your order has been placed successfully. A confirmation email will be sent to ${email}.`)
        localStorage.removeItem('cart')
        window.location.href = 'shop.html'
      }
    })
  }

  // Initial render
  renderCheckoutItems()
  updateTotals()
}


// Team Card Follow Buttons
const teamButtons = document.querySelectorAll('.team-section button')
teamButtons.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.toggle('following')
    button.textContent = button.classList.contains('following') ? 'Unfollow' : 'Follow'
  })
})

// Interactive Options Component
const options = document.querySelectorAll('.option')

// Remove active class on page load - all start closed
options.forEach(option => {
  option.classList.remove('active')
})

options.forEach(option => {
  option.addEventListener('click', function() {
    options.forEach(opt => {
      opt.classList.remove('active')
      // Switch closed options to headlight shot.png
      opt.style.backgroundImage = 'url("/headlight shot.png")'
    })
    this.classList.add('active')
    // Switch active option to main img.png
    this.style.backgroundImage = 'url("/main img.png")'
  })
})

// Mobile Menu Search Functionality
const mobileMenuSearchBtn = document.querySelector('.mobile-menu-search-btn')
const mobileMenuSearchInput = document.querySelector('.mobile-menu-search-input')

if (mobileMenuSearchBtn && mobileMenuSearchInput) {
  mobileMenuSearchBtn.addEventListener('click', () => {
    const searchQuery = mobileMenuSearchInput.value.trim()
    if (searchQuery) {
      // Store search query and navigate to shop
      sessionStorage.setItem('searchQuery', searchQuery)
      window.location.href = `shop.html#products`
    }
  })

  // Allow Enter key to trigger search
  mobileMenuSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const searchQuery = mobileMenuSearchInput.value.trim()
      if (searchQuery) {
        sessionStorage.setItem('searchQuery', searchQuery)
        window.location.href = `shop.html#products`
      }
    }
  })
}

// Header Search Functionality
const headerSearchInput = document.querySelector('.header-search input')
const headerSearchIcon = document.querySelector('.header-search-icon')

if (headerSearchInput && headerSearchIcon) {
  headerSearchIcon.addEventListener('click', () => {
    const searchQuery = headerSearchInput.value.trim()
    if (searchQuery) {
      sessionStorage.setItem('searchQuery', searchQuery)
      window.location.href = `shop.html#products`
    }
  })

  // Allow Enter key to trigger search
  headerSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const searchQuery = headerSearchInput.value.trim()
      if (searchQuery) {
        sessionStorage.setItem('searchQuery', searchQuery)
        window.location.href = `shop.html#products`
      }
    }
  })
}

// Product Quantity Controls
const qtyInput = document.querySelector('.product-view-qty-input')
const qtyBtns = document.querySelectorAll('.product-view-qty-btn')

if (qtyInput && qtyBtns.length > 0) {
  qtyBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      let currentValue = parseInt(qtyInput.value)
      
      if (index === 0) {
        // Minus button
        if (currentValue > 1) {
          qtyInput.value = currentValue - 1
        }
      } else {
        // Plus button
        qtyInput.value = currentValue + 1
      }
    })
  })
}

// Shop Page - Filter Products Based on Search Query
function filterProductsBySearch() {
  const searchQuery = sessionStorage.getItem('searchQuery')
  
  if (searchQuery && document.querySelector('.shop-products')) {
    const products = document.querySelectorAll('.shop-products-middle .card')
    let matchCount = 0
    
    products.forEach(product => {
      const productName = product.querySelector('.card__name p').textContent.toLowerCase()
      const productDataName = product.querySelector('.add-to-cart-icon').getAttribute('data-product-name').toLowerCase()
      
      if (productName.includes(searchQuery.toLowerCase()) || productDataName.includes(searchQuery.toLowerCase())) {
        product.style.display = 'block'
        product.style.animation = 'slideInBottom 0.5s ease-out'
        matchCount++
      } else {
        product.style.display = 'none'
      }
    })
    
    // Show message if no products found
    if (matchCount === 0) {
      const productsMiddle = document.querySelector('.shop-products-middle')
      const noResultsMsg = document.createElement('div')
      noResultsMsg.className = 'no-search-results'
      noResultsMsg.textContent = `No products found for "${searchQuery}"`
      noResultsMsg.style.cssText = 'grid-column: 1/-1; text-align: center; padding: 40px; color: #999; font-size: 18px;'
      productsMiddle.appendChild(noResultsMsg)
    }
    
    // Clear search query after filtering
    sessionStorage.removeItem('searchQuery')
    
    // Scroll to products section
    setTimeout(() => {
      document.querySelector('.shop-products').scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
}

// Run search filter on shop page load
if (document.querySelector('.shop-products')) {
  filterProductsBySearch()
}


// Shop Cards Auto Carousel for Mobile View
function initShopCardsCarousel() {
  const shopCardsContainer = document.querySelector('.shop-cards-container')
  
  if (!shopCardsContainer) return
  
  // Only enable on mobile view (768px and below)
  if (window.innerWidth > 768) return
  
  const cards = document.querySelectorAll('.shop-card')
  if (cards.length === 0) return
  
  let currentCardIndex = 0
  
  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.display = 'block'
        card.style.animation = 'slideInBottom 0.5s ease-out'
      } else {
        card.style.display = 'none'
      }
    })
  }
  
  function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length
    showCard(currentCardIndex)
  }
  
  // Show first card initially
  showCard(0)
  
  // Auto-rotate every 3 seconds
  setInterval(nextCard, 3000)
}

// Initialize carousel on page load
if (document.querySelector('.shop-cards-container')) {
  initShopCardsCarousel()
  
  // Re-initialize on window resize to handle responsive changes
  window.addEventListener('resize', () => {
    initShopCardsCarousel()
  })
}
