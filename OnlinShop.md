# Onlin Shop

## Colors

Background #07070A
Surface #111116
Surface Hover #18181F

Primary Purple #8B5CF6
Purple Hover #A855F7
Purple Light #C084FC

Text #F5F5F5
Text Secondary #A1A1AA

Border #27272A
Input Background #0D0D12

| کاربرد        | 🌙 Dark   | ☀️ Light  |
| ------------- | --------- | --------- |
| Background    | `#07070A` | `#F8F7FC` |
| Surface       | `#111116` | `#FFFFFF` |
| Input         | `#0D0D12` | `#F4F3F8` |
| Text          | `#F5F5F5` | `#18151F` |
| Muted         | `#A1A1AA` | `#6B6875` |
| Border        | `#27272A` | `#E5E1EB` |
| Primary       | `#8B5CF6` | `#7C3AED` |
| Primary Hover | `#A855F7` | `#6D28D9` |

## Login Page

**Idea**

```
Welcome back

Sign in to continue to your account.

Email
[ Enter your email ]

Password
[ Enter your password ]     👁

Forgot password?

[ Sign In ]

──────── OR ────────

Don't have an account?
Create account
```

**Desktop Mode**

```
┌───────────────┬──────────────────┐
│               │                  │
│     FORM      │      IMAGE       │
│      45%      │       55%        │
│               │                  │
└───────────────┴──────────────────┘
```

**Mobile Mode**

```
┌──────────────────────┐
│       LOGO           │
│                      │
│      SIGN IN         │
│                      │
│      Email           │
│      Password        │
│                      │
│      [Sign In]       │
│                      │
│   Create account     │
└──────────────────────┘
```

ok, now we find a prolem in our context and it isn't set data in main page.

Becaus:

```
ContextProvider
    ↓
User = {...}        ✅
    ↓
navigate("/")
    ↓
ContextProvider UNMOUNT ❌
    ↓
ContextProvider MOUNT 🔄
    ↓
useState(null)      ❌
```

```
WHY CHOOSE US

⚡                 🛡                 ✓

Fast Delivery     Warranty          Authentic

Quick & reliable  Shop with         100% original
delivery          confidence        products
```

How we can design and develop product page:

```
┌─────────────────────────────────────────────────────────────┐
│                     PRODUCTS                                │
│        Find the perfect sound for your world.               │
│                                                             │
│  [ 🔍 Search products...                    ] [ Sort ▾ ]     │
├───────────────┬─────────────────────────────────────────────┤
│               │                                             │
│ FILTERS       │  128 Products                               │
│               │                                             │
│ Category      │  ┌────────┐ ┌────────┐ ┌────────┐          │
│ ○ Headphones  │  │ 🎧     │ │ 🎧     │ │ 🎧     │          │
│ ○ Earbuds     │  │        │ │        │ │        │          │
│ ○ Gaming      │  │ Product│ │ Product│ │ Product│          │
│               │  │ $149   │ │ $199   │ │ $99    │          │
│ Brand         │  │ ★4.8   │ │ ★4.9   │ │ ★4.6   │          │
│ □ Sony        │  └────────┘ └────────┘ └────────┘          │
│ □ JBL         │                                             │
│ □ Razer       │  ┌────────┐ ┌────────┐ ┌────────┐          │
│               │  │ 🎧     │ │ 🎧     │ │ 🎧     │          │
│ Price         │  │        │ │        │ │        │          │
│ $50 ───●── $500│  │ Product│ │ Product│ │ Product│          │
│               │  └────────┘ └────────┘ └────────┘          │
│ Features      │                                             │
│ □ Wireless    │                                             │
│ □ ANC         │                                             │
│ □ Gaming      │                                             │
│               │                                             │
└───────────────┴─────────────────────────────────────────────┘
```

Product Details

```
┌─────────────────────────────────────────────────────────────┐
│ Navbar                                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐       Wireless Headphones                 │
│  │              │       ★★★★★  4.8 (124 Reviews)           │
│  │              │                                            │
│  │   PRODUCT    │       Premium Noise Cancelling             │
│  │    IMAGE     │       Headphones                           │
│  │              │                                            │
│  └──────────────┘       $149.99                              │
│                                                             │
│                         Color: ● Black  ○ Purple            │
│                                                             │
│                         Quantity: [-] 1 [+]                 │
│                                                             │
│                         [     Add To Cart     ]              │
│                         [     Buy Now        ]              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Description    Specifications    Reviews                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

idea for cart page:

```
┌──────────────────────────────────────────────┐
│ Your Cart                                    │
│                                              │
│ 🎧 Sony WH-1000XM5        $350               │
│                         [-] 2 [+]            │
│                         [Remove]              │
│                                              │
│ 🎧 Razer Gaming           $180               │
│                         [-] 1 [+]            │
│                         [Remove]              │
│                                              │
│ ──────────────────────────────────────────── │
│                                              │
│ Subtotal                         $880         │
│                                              │
│             [ Continue Shopping ]            │
│             [ Proceed to Checkout ]          │
└──────────────────────────────────────────────┘
```

**Idea for Order page.**

```
┌──────────────────────────────────────────────────────────────┐
│ Order #ORD-10293                         Delivered ✓          │
│ Placed on Aug 31, 2026                                      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [IMAGE]   Sony WH-1000XM5                                  │
│            Qty: 1                         $349               │
│                                                              │
│  [IMAGE]   Razer BlackShark V2                              │
│            Qty: 2                         $240               │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ Total: $589                                                  │
│                                                              │
│ [ View Details ]                 [ Buy Again ]               │
└──────────────────────────────────────────────────────────────┘
```

**Idea for payment**

```
                 Payment
────────────────────────────────────────────────

┌────────────────────────┐   ┌───────────────────┐
│                        │   │ Order Summary     │
│  Payment Method        │   │                   │
│                        │   │ Headphone    $299  │
│  ○ Credit Card         │   │ Airpods       $99  │
│  ○ PayPal              │   │                   │
│                        │   │ Subtotal    $398   │
│  Card Number           │   │ Shipping      $0   │
│  [ 4242 4242 4242 ]    │   │ ────────────────  │
│                        │   │ Total       $398   │
│  Expiry      CVV       │   │                   │
│  [ 09/28 ]  [ 123 ]    │   │                   │
│                        │   └───────────────────┘
│  Card Holder           │
│  [ Amir Korouni ]      │
│                        │
│  ☑ Save payment info   │
│                        │
│  [      Pay $398      ]│
│                        │
└────────────────────────┘
```

Idea for Admin Panel:

```
┌─────────────────────────────────────────────────────────────┐
│                    Admin Dashboard                          │
├──────────────┬──────────────────────────────────────────────┤
│              │                                              │
│  🏠 Dashboard│       Good morning, Admin 👋                 │
│              │                                              │
│  📦 Products │   ┌────────┐ ┌────────┐ ┌────────┐ ┌───────┐ │
│              │   │ Orders │ │Revenue │ │ Users  │ │Stock  │ │
│  🛒 Orders   │   │  128   │ │ $12.4K │ │  2.4K  │ │  43   │ │
│              │   └────────┘ └────────┘ └────────┘ └───────┘ │
│  👤 Users    │                                              │
│              │   Sales Overview                             │
│  📊 Analytics│   ┌──────────────────────────────────────┐   │
│              │   │              📈 Chart                 │   │
│  ⚙ Settings  │   │                                      │   │
│              │   └──────────────────────────────────────┘   │
│              │                                              │
│  🚪 Logout   │   Recent Orders                              │
│              │   ┌──────────────────────────────────────┐   │
│              │   │ #1023   User    $349    Delivered     │   │
│              │   │ #1022   User    $120    Processing    │   │
│              │   │ #1021   User    $560    Shipped       │   │
│              │   └──────────────────────────────────────┘   │
└──────────────┴──────────────────────────────────────────────┘

```
