# BetterThoughts

A SwiftUI app using Core Data for local storage. The project includes multiple focus areas like Pomodoro, Sounds, Thought Reframing, ADHD Tips, and Quick Relief, with modern SwiftUI architecture.

## Repository
- Remote: [GitHub – BetterThoughts](https://github.com/eriiiic/BetterThoughts)
- Default branch: `main`

## Requirements
- Xcode 15 or newer
- iOS 17 SDK or newer

## Getting Started
1. Clone the repository:
   ```bash
git clone https://github.com/eriiiic/BetterThoughts.git
cd BetterThoughts
   ```
2. Open the project in Xcode:
   - Open `BetterThoughts/BetterThoughts.xcodeproj`
3. Build & run:
   - Select an iOS Simulator or a connected device and press Run.

## Project Structure (updated)
```text
BetterThoughts/
  BetterThoughts.xcodeproj/
  BetterThoughts/
    Assets.xcassets/
    BetterThoughts.xcdatamodeld/          # Core Data model (BetterThoughts)
    BetterThoughtsApp.swift               # App entry
    ContentView.swift
    Persistence.swift                     # Core Data stack

    Mindpace/                             # Feature modules and resources
      AppDelegate.swift
      MindpaceApp.swift
      Mindpace.xcdatamodeld/              # Core Data model (Mindpace)
      Models/                             # Data models for features
      Services/                           # Business logic & data services
      Views/                              # SwiftUI feature views
      Resources/                          # JSON and media assets
      Services/DataSeedingService.swift   # Seeds Core Data from bundled JSON

    Data/
      ThoughtReframingCategoriesSimplified.json  # Categories (BetterThoughts)
      ThoughtReframingQuotesExpanded.json        # Quotes (BetterThoughts)
  app.betterthoughts.main.BetterThoughts.widget/ # Widget Extension target
    Assets.xcassets/
    Info.plist
    app_betterthoughts_main_BetterThoughts_widget.swift   # Widget code (BetterThoughtsWidget)
    app_betterthoughts_main_BetterThoughts_widgetBundle.swift
```

### Feature Areas (subset enabled in BetterThoughts)
- Pomodoro: Timer, statistics, and live activity
- Sounds: Ambient/colored noise playback and stats
- Thought Reframing: Quotes, categories, swipe views
- ADHD Tips: Tips browser, swipe, bookmarking
- Quick Relief: Breathing, grounding, visualization
- Settings: Notifications, background themes, privacy

In the BetterThoughts standalone app, the primary feature enabled is Thought Reframing with:
- Card-based swipe interface
- Category filters via `ThoughtReframingCategoryFilterView`
- Bookmarking (favorites) and rejection tracking
- Offline support (Core Data)
- No login required

Entry point renders the Thought Reframing view:
- `ContentView` shows `ThoughtReframingView()` and seeds data on appear.
- `ThoughtReframingView` opens the category filter automatically on first launch if no categories are selected and shows a prominent "Choose Categories" button when empty.
- An animated `LaunchScreen` displays the app icon and branding.
- A bookmarks button in `ThoughtReframingView` header opens `ThoughtReframingBookmarkedListView` to manage/view favorited quotes.
- Clicking on a bookmarked quote navigates back to the main view and displays the selected quote.
- A settings button in `ThoughtReframingView` header opens `SettingsView` with data management and app information options.

### Key Services
- `PomodoroService`, `PomodoroStatisticsService`, `PomodoroViewModel`
- `SoundsService`, `SoundPlayer`, `NowPlayingManager`
- `ThoughtReframingService`, `ThoughtReframingViewModel`
- `ADHDTipsService`, `QuickReliefService`
- `UserPreferencesService`, `BackgroundThemeService`

## Home Screen Widget
- Target: `app.betterthoughts.main.BetterThoughts.widget` (Widget Extension)
- Widget bundle entry: `BetterThoughtsWidgetBundle`; main widget: `BetterThoughtsWidget`
- Shows a rotating Thought Reframing quote with its category color and name
- Supported families: `.systemSmall`, `.systemMedium`

### App Group (Data Sharing)
The widget reads quotes from a shared App Group so it can display data without opening the app:
- App Group identifier: `group.app.betterthoughts.main`
- Add this group to both the App target and the Widget Extension target in Signing & Capabilities
- Shared `UserDefaults` keys expected by the widget:
  - `thoughtReframingQuotes`: `[WidgetQuote]` encoded to JSON (id, text, categoryName, categoryColor)
  - `currentWidgetQuoteId`: `String` of the last shown quote (optional)
  - `lastRefreshRequest`: `Date` set to prefer a new quote shortly after a refresh request

The widget will:
- Build a 24-hour timeline and pick a random quote if none is pinned
- Respect `currentWidgetQuoteId` when present
- Prefer a different quote for a brief period after `lastRefreshRequest`

Note: Ensure the main app periodically exports the current quotes to the App Group so the widget has fresh data.

## Data & Persistence
- Core Data is used for all local storage via:
  - `BetterThoughts/BetterThoughts.xcdatamodeld`
  - `BetterThoughts/Mindpace/Mindpace.xcdatamodeld`
- The Core Data stack lives in `Persistence.swift` files.

- Data seeding:
  - On first launch, `DataSeedingService.seedDataIfNeeded` populates Core Data from bundled JSON.
  - The service now supports flexible resource resolution and future i18n:
    - Categories: tries `ThoughtReframingCategoriesSimplified[_<lang>].json`, then `ThoughtReframingCategories.json`.
    - Quotes: tries `ThoughtReframingQuotesExpanded[_<lang>].json`, then `ThoughtReframingQuotes.json`.
  - Add localized variants like `ThoughtReframingQuotesExpanded_fr.json` to support more languages.

### Ensure bundled resources
To use the BetterThoughts data files, add them to the app target's Copy Bundle Resources:
- `BetterThoughts/Data/ThoughtReframingCategoriesSimplified.json`
- `BetterThoughts/Data/ThoughtReframingQuotesExpanded.json`

The loader falls back to `Mindpace/Resources/ThoughtReframingCategories.json` and `Mindpace/Resources/ThoughtReframingQuotes.json` if the above are not included.

## Development Guidelines
- SwiftUI-first architecture; avoid UIKit unless absolutely necessary
- Prefer async/await for async work
- Enhance UI with animation, gradients, and haptics where appropriate
- Keep existing implementations; iterate without removing code/comments

## Internationalization Plan
- Data-driven: ship additional JSON files per locale (e.g., `ThoughtReframingQuotesExpanded_es.json`).
- Loader tries `<base>_<lang>.json` first, then defaults to English.
- Core Data stores quotes independent of language to allow reseeding when locale changes.

## Analytics
- Google Analytics for Firebase is integrated.
- Initialization: guarded by `configureFirebaseIfAvailable()` in `BetterThoughtsApp` (won't crash if `GoogleService-Info.plist` is missing).
- Screen tracking:
  - `ThoughtReframingView` → "ThoughtReframingView"
  - `ThoughtReframingBookmarkedListView` → "ThoughtReframingBookmarksView"
  - `SettingsView` → "SettingsView"
  - `AboutView` → "AboutView"
- Events:
  - `tap_open_bookmarks` when opening bookmarks from header
  - `tap_open_category_filter` when opening category filter from header
  - `tap_open_settings` when opening settings from header
  - `tap_bookmarked_quote` when selecting a quote from bookmarks view
  - `settings_reset_dismissed_cards` when resetting dismissed cards
  - `settings_clear_bookmarks` when clearing bookmarks
  - `settings_rate_app` when rating the app
  - `settings_contact_support` when contacting support
  - `settings_privacy_policy` when opening privacy policy
  - `about_rate_app` when rating from about view
  - `tap_bookmarked_quote` when selecting a quote from bookmarks

## Share Functionality
- Share button added to each quote card header
- Generates beautiful share images with quote text and "BetterThoughts App" branding
- Supports both short and long text formats
- Uses `UIActivityViewController` for native iOS sharing
- Background image generation to avoid UI blocking

## Settings & Data Management
- Settings button in main view header opens comprehensive settings interface
- Data Management section:
  - Reset Dismissed Cards: Restores all dismissed cards so they can be seen again (shows count)
  - Clear Bookmarks: Removes all bookmarked quotes (shows count)
- App Information section:
  - About BetterThoughts: Shows app version, features, CBT information, and developer info
  - Rate the App: Placeholder for App Store rating
- Support section:
  - Contact Support: Opens email to contact@betterthoughts.app
  - Privacy Policy: Placeholder for privacy policy
- All settings actions include haptic feedback and analytics tracking
- Bookmarked quotes can be tapped to return to the main view with that quote displayed

## Git
- Origin is set to `https://github.com/eriiiic/BetterThoughts.git`
- Main branch is tracked as `origin/main`

## Notes
- Large media assets (audio/images) are included for in-app experiences.
- Consider using an `.xcworkspace` if adding Swift Packages or multiple projects.


---

## Website (BetterThoughtsWeb)

This repository contains both a lightweight static site and a Next.js app for the BetterThoughts iOS app.

### Static site files
```
BetterThoughtsWeb/
  index.html           # Bold, modern single-page site with enhanced UX
  styles.css           # Complete redesign with modern design system
  assets/
    betterthoughts.png # App logo and screenshots
  blog.html           # Blog index with search and filtering
  privacy.html        # Privacy policy page
  terms.html          # Terms and conditions page
  blog/               # Individual blog post pages
  sitemap.xml         # XML sitemap for search engines
  robots.txt          # Search engine crawling instructions
  SEO-OPTIMIZATION-GUIDE.md # Comprehensive SEO guide
  google-search-console-verification.md # GSC setup guide
```

### Design Improvements (2025)
The website has been completely redesigned following modern single-page website best practices:

#### Visual Design
- **Bold, Modern Aesthetic**: Dark theme with vibrant gradients and glassmorphism effects
- **Enhanced Typography**: Improved hierarchy with gradient text effects and better spacing
- **Interactive Elements**: Hover effects, micro-animations, and smooth transitions
- **Mobile-First**: Responsive design optimized for all screen sizes

#### User Experience
- **Improved Navigation**: Fixed header with smooth scrolling and mobile menu
- **Enhanced Hero Section**: Split layout with visual elements and compelling CTAs
- **Better Content Organization**: Clear sections with improved visual hierarchy
- **Interactive Features**: FAQ accordion, animated elements, and hover states
- **Social Proof**: Enhanced testimonials with ratings and author information

#### Technical Improvements
- **Modern CSS**: CSS custom properties, flexbox, and grid layouts
- **Performance**: Optimized animations and reduced layout shifts
- **Accessibility**: ARIA labels, focus states, and reduced motion support
- **SEO**: Comprehensive optimization with sitemap, structured data, and meta tags

#### SEO Optimizations
- **Technical SEO**: XML sitemap, robots.txt, canonical URLs, meta tags
- **Structured Data**: Enhanced Schema.org markup for app and blog content
- **Social Media**: Open Graph and Twitter Card optimization
- **Performance**: Core Web Vitals optimization and mobile-first design
- **Content SEO**: Keyword optimization and internal linking structure
- **Google Search Console**: Complete setup guide and monitoring strategy

### Next.js app (App Router + Tailwind)
```
BetterThoughtsWeb/web/
  package.json
  next.config.ts
  src/app/
    layout.tsx         # Metadata and global layout
    page.tsx           # Landing page (hero, features, privacy, terms, contact)
    globals.css        # Tailwind + theme base
  public/
    logo.svg           # Public logo used on the Next.js site
```

### Features on the page
- Key app features overview
- Privacy Policy section
- Terms & Conditions section
- Contact: `contact@betterthoughts.app`
- Large-type hero with gradient headline and animated background orbs
- Interactive feature cards with subtle tilt and shadow

### Local preview (static site)
You can open `index.html` directly in a browser, or serve it locally:

```bash
cd /Users/eric/BetterThoughts/BetterThoughtsWeb
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Run the Next.js app locally
```bash
cd /Users/eric/BetterThoughts/BetterThoughtsWeb/web
npm install
npm run dev
# then visit http://localhost:3000
```

### Deploy the Next.js app (Vercel recommended)
- One-click import at Vercel and select the `web` directory as the root, or
- GitHub Pages via a static export: `next build && next export` (ensure `output: 'export'`), then publish `web/out`.

### Deploy on Cloudflare Pages
- The repo includes a `wrangler.toml` that runs the build from `web/`.
- Set build command to `npx @cloudflare/next-on-pages@1` or simply leave default (the file handles `cd web`).
- Output directory: `web/.vercel/output/static` (as referenced in `wrangler.toml`).

### Deploy to GitHub Pages
1. Commit & push to `main` (already set up for this repo).
2. In GitHub → Settings → Pages:
   - Source: Deploy from branch
   - Branch: `main` / root
3. Wait for Pages to publish, then your site will be available at the project’s Pages URL.

If you want a custom domain (e.g., `betterthoughts.app` or a subdomain):
1. Configure DNS to point at GitHub Pages.
2. Add the custom domain in GitHub Pages settings.

### Logo
The site currently uses `assets/logo.svg`. Replace this with your app logo (e.g., `logo.png`) and update references in `index.html` if desired.

