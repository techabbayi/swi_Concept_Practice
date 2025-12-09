# Next.js Rendering Strategies Demo

Demo app showing **Static (SSG)**, **Dynamic (SSR)**, and **Hybrid (ISR)** rendering in Next.js App Router.


## Pages in This App

### 1. `/about` - Static (SSG)
```javascript
export const revalidate = false;
```
- Built at compile time
- Fastest performance
- No server needed

### 2. `/dashboard` - Dynamic (SSR)
```javascript

export const dynamic = "force-dynamic";
cache: "no-store"
```
- Fresh on every request
- Shows live GitHub user data
- Real-time timestamps

### 3. `/news` - Hybrid (ISR)
```javascript
export const revalidate = 60;
```
- Regenerates every 60 seconds
- Fast like static, fresh like dynamic
- Fetches from JSONPlaceholder API

---

## DailyEdge Case Study Solution

**Problem:** Static pages were fast but outdated. SSR was fresh but slow and expensive.

**Solution:**
- **Homepage:** Static + client-side fetch for breaking news
- **Articles:** ISR with 60s revalidation (balance speed & freshness)
- **Comments:** SSR (must be real-time)

This gives fast page loads while keeping content reasonably fresh at low cost.

---

## Quick Start

```bash
npm install
npm run dev
```

Visit:
- `/about` - See SSG in action
- `/dashboard` - See SSR with live data
- `/news` - See ISR with 60s updates

---

## Key Takeaways

1. **SSG** = Fast + Scalable (use when content rarely changes)
2. **SSR** = Fresh + Personalized (use for user-specific data)
3. **ISR** = Best of both worlds (use for frequently updated content)
4. Start with static, go dynamic only when needed
5. ISR is the sweet spot for most content sites

## 📚 Concepts Covered

- Static Site Generation (SSG)
- Server-Side Rendering (SSR)
- Incremental Static Regeneration (ISR)
- Next.js App Router data fetching
- `revalidate`, `cache`, and `dynamic` options
- Trade-offs: speed vs freshness vs scalability
