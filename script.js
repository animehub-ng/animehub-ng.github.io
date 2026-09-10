const requestedAnimeTitles = [
  'One Piece', 'Naruto', 'Naruto Shippuden', 'Boruto: Naruto Next Generations', 'Bleach',
  'Bleach: Thousand-Year Blood War', 'Dragon Ball', 'Dragon Ball Z', 'Dragon Ball GT', 'Dragon Ball Super',
  'Attack on Titan', 'Demon Slayer', 'Jujutsu Kaisen', 'My Hero Academia', 'Hunter x Hunter',
  'Fullmetal Alchemist', 'Fullmetal Alchemist: Brotherhood', 'Death Note', 'Tokyo Ghoul', 'Black Clover',
  'Fairy Tail', 'Sword Art Online', 'One Punch Man', 'Mob Psycho 100', 'Chainsaw Man', 'Solo Leveling',
  'Blue Lock', 'Haikyuu!!', "Kuroko's Basketball", 'Dr. Stone', 'Fire Force', 'Tokyo Revengers',
  'Vinland Saga', 'The Seven Deadly Sins', "JoJo's Bizarre Adventure", 'Code Geass', 'Steins;Gate', 'Re:Zero',
  'Overlord', 'That Time I Got Reincarnated as a Slime', 'The Rising of the Shield Hero', 'Mushoku Tensei',
  'Classroom of the Elite', 'Assassination Classroom', 'Parasyte: The Maxim', 'Psycho-Pass', 'Monster', 'Erased',
  'Your Lie in April', 'Your Name', 'Weathering With You', 'A Silent Voice', 'Spirited Away', 'Princess Mononoke',
  "Howl's Moving Castle", 'My Neighbor Totoro', "Kiki's Delivery Service", 'Castle in the Sky',
  'Grave of the Fireflies', 'Akira', 'Cowboy Bebop', 'Samurai Champloo', 'Trigun', 'Neon Genesis Evangelion',
  'Gurren Lagann', 'Kill la Kill', 'Soul Eater', 'Noragami', 'Blue Exorcist', 'Seraph of the End', 'Hellsing',
  'Hellsing Ultimate', 'Black Lagoon', 'Devilman Crybaby', 'Bungo Stray Dogs', 'Durarara!!',
  'The God of High School', 'Tower of God', 'The Promised Neverland', 'Made in Abyss', 'Dorohedoro', 'Golden Kamuy',
  'Kingdom', 'Dororo', 'Magi', 'Fate/Zero', 'Fate/stay night', 'Kakegurui', 'Food Wars!',
  'The Disastrous Life of Saiki K.', 'Gintama', 'Konosuba', 'No Game No Life', 'Log Horizon',
  'The Devil Is a Part-Timer!', 'Goblin Slayer', 'Akame ga Kill!', 'Another', 'Angel Beats!', 'Toradora!',
  'Horimiya', 'Kaguya-sama: Love Is War', 'Fruits Basket', 'Anohana', 'My Dress-Up Darling',
  "Komi Can't Communicate", 'The Quintessential Quintuplets', 'Nana', 'InuYasha', 'Rurouni Kenshin',
  'Yu Yu Hakusho', 'Sailor Moon', 'Cardcaptor Sakura', 'Digimon Adventure', 'Pokémon', 'Yu-Gi-Oh!',
  'Shaman King', 'Inazuma Eleven', 'Initial D', 'Hajime no Ippo', 'Slam Dunk', 'Free!', 'Yuri!!! on Ice',
  'Megalo Box', 'Ace of Diamond', 'Chihayafuru', 'Hikaru no Go', 'Kengan Ashura', 'Baki', 'Record of Ragnarok',
  'Claymore', 'Berserk', 'Ninja Scroll', 'Afro Samurai', 'Drifters', 'Blade of the Immortal', 'Hell\'s Paradise',
  'Undead Unluck', 'Kaiju No. 8', 'Dandadan', 'Wind Breaker', 'Mashle', 'Shangri-La Frontier',
  'The Eminence in Shadow', 'Tsukimichi: Moonlit Fantasy', 'Arifureta', 'Cautious Hero',
  'The Misfit of Demon King Academy', 'Re:Monster', 'Campfire Cooking in Another World', 'Uncle from Another World',
  'Saga of Tanya the Evil', 'The Ancient Magus\' Bride', 'Violet Evergarden', 'K-On!', 'Nichijou',
  'Daily Lives of High School Boys', 'Asobi Asobase', 'Grand Blue', 'Barakamon', 'Laid-Back Camp',
  'Miss Kobayashi\'s Dragon Maid', 'Given', 'My Happy Marriage', 'Oshi no Ko', 'Lycoris Recoil',
  'Bocchi the Rock!', 'Call of the Night', 'The Apothecary Diaries', "Frieren: Beyond Journey's End",
  'Delicious in Dungeon', 'Suzume', 'I Want to Eat Your Pancreas', 'Wolf Children', 'The Boy and the Heron',
  'Detective Conan', 'Magic Kaito 1412', 'Moriarty the Patriot', 'Hyouka', 'Odd Taxi', 'Link Click',
  'Danganronpa: The Animation', 'High-Rise Invasion', 'Perfect Blue', 'Paranoia Agent', 'Higurashi When They Cry',
  'Toilet-Bound Hanako-kun', 'The Way of the Househusband', 'Romantic Killer', 'Tomo-chan Is a Girl!'
];

function createAnimeRecord(title, index) {
  const genre = ['Action', 'Fantasy', 'Adventure', 'Drama'][index % 4];
  const coverTitle = encodeURIComponent(title.replace(/[:/!?]/g, ''));
  return {
    title,
    rating: (9.8 - (index % 18) / 10).toFixed(1),
    badge: index < 12 ? 'Featured' : 'Discover',
    duration: 'Series',
    genre,
    season: 'Complete series',
    tags: [genre, 'Anime'],
    image: `https://placehold.co/600x900/111827/f8fafc?text=${coverTitle}`,
    synopsis: `${title} is part of the AnimeHub collection. Find licensed streaming availability from the title details.`
  };
}

let animeData = [...new Map(requestedAnimeTitles.map((title, index) => [normalizeTitle(title), createAnimeRecord(title, index)])).values()];

const trendingGrid = document.getElementById('trending-grid');
const searchInput = document.getElementById('anime-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const catalogStatus = document.getElementById('catalog-status');
const watchlistCount = document.getElementById('watchlist-count');
const mobileWatchlistCount = document.getElementById('mobile-watchlist-count');
const animeDialog = document.getElementById('anime-dialog');
const dialogCover = document.getElementById('dialog-cover');
const dialogKicker = document.getElementById('dialog-kicker');
const dialogTitle = document.getElementById('dialog-title');
const dialogDescription = document.getElementById('dialog-description');
const dialogList = document.getElementById('dialog-list');
const dialogWatch = document.getElementById('dialog-watch');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const watchlistLinks = document.querySelectorAll('#watchlist-link, #mobile-watchlist-link');

let activeFilter = 'All';
let showWatchlistOnly = false;
let activeAnime = null;
let watchlist = JSON.parse(localStorage.getItem('animehub-watchlist') || '[]');
let catalogLoaded = false;

const CATALOG_PAGE_SIZE = 20;
const CATALOG_PAGE_COUNT = 50;
const WATCH_PAGE = 'watch.html?title=';
const WATCH_PROVIDER_SEARCH = 'https://www.justwatch.com/us/search?q=';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isSaved(title) {
  return watchlist.includes(title);
}

function updateWatchlistCount() {
  [watchlistCount, mobileWatchlistCount].forEach((count) => {
    if (count) count.textContent = watchlist.length;
  });
}

function getWatchUrl(title) {
  return `${WATCH_PAGE}${encodeURIComponent(title)}`;
}

function normalizeTitle(title) {
  return String(title || '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\u3000]/g, ' ')
    .replace(/[^a-z0-9]+/g, '')
    .trim();
}

async function loadRequestedCovers() {
  const titles = [...animeData];
  let loaded = 0;

  for (let index = 0; index < titles.length; index += 5) {
    const batch = titles.slice(index, index + 5).map(async (anime) => {
      try {
        const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(anime.title)}&page[limit]=1`);
        if (!response.ok) return;
        const payload = await response.json();
        const match = payload.data?.[0];
        const cover = match?.attributes?.posterImage?.large || match?.attributes?.posterImage?.original;
        if (cover) anime.image = cover;
      } catch (error) {
      } finally {
        loaded += 1;
        if (catalogStatus) catalogStatus.textContent = `Loading anime covers: ${loaded} of ${titles.length}`;
      }
    });

    await Promise.all(batch);
    renderTrendingAnime();
  }

  if (catalogStatus) catalogStatus.textContent = `Showing ${titles.length} anime titles with covers.`;
}

function hasCoverImage(anime) {
  return typeof anime.image === 'string' && /^https?:\/\//i.test(anime.image);
}

function dedupeAnime(records) {
  const seenKeys = new Set();
  return records.filter((anime) => {
    if (!hasCoverImage(anime)) return false;

    const aliases = [anime.title, ...(anime.titleAliases || [])]
      .map(normalizeTitle)
      .filter(Boolean);
    if (aliases.some((alias) => seenKeys.has(alias))) return false;

    aliases.forEach((alias) => seenKeys.add(alias));
    return true;
  });
}

function mapCatalogAnime(anime, genreById) {
  const attributes = anime.attributes;
  const relatedGenres = anime.relationships?.genres?.data || [];
  const genres = relatedGenres.map((genre) => genreById.get(genre.id)).filter(Boolean);
  const titleAliases = Object.values(attributes.titles || {}).filter(Boolean);
  const title = attributes.titles?.en || attributes.titles?.en_jp || attributes.canonicalTitle || 'Untitled anime';
  const episodeText = attributes.episodeCount ? `${attributes.episodeCount} episodes` : attributes.subtype || 'Series';
  const startYear = attributes.startDate ? attributes.startDate.slice(0, 4) : '';
  const seasonText = startYear ? `${attributes.subtype || 'Series'} ${startYear}` : 'Complete series';

  return {
    title,
    rating: attributes.averageRating ? (Number(attributes.averageRating) / 10).toFixed(1) : 'N/A',
    badge: Number(attributes.averageRating) >= 85 ? 'Fan favorite' : 'Discover',
    duration: episodeText,
    genre: genres[0] || 'Anime',
    season: seasonText,
    tags: genres.slice(1, 3),
    image: attributes.posterImage?.large || attributes.posterImage?.original || '',
    synopsis: attributes.synopsis || '',
    titleAliases,
  };
}

async function loadExpandedCatalog() {
  if (catalogLoaded) return;
  if (catalogStatus) catalogStatus.textContent = 'Loading 1,000+ anime titles...';

  const pages = Array.from({ length: CATALOG_PAGE_COUNT }, (_, index) => index + 1);
  const loadedAnime = [];

  try {
    const fetchCatalogPage = async (page) => {
      const offset = (page - 1) * CATALOG_PAGE_SIZE;

        for (let attempt = 0; attempt < 2; attempt += 1) {
        const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 8000);

        try {
            const response = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=${CATALOG_PAGE_SIZE}&page[offset]=${offset}&sort=-averageRating`, { signal: controller.signal });
          clearTimeout(timeout);
          if (response.ok) return response.json();
        } catch (error) {
          clearTimeout(timeout);
        }

        await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
      }

      return { data: [], included: [] };
    };

    for (let index = 0; index < pages.length; index += 2) {
      const batch = pages.slice(index, index + 2).map(fetchCatalogPage);

      const results = await Promise.all(batch);
      results.forEach((payload) => {
        const genreById = new Map((payload.included || []).map((item) => [item.id, item.attributes?.name]));
        (payload.data || []).forEach((anime) => loadedAnime.push(mapCatalogAnime(anime, genreById)));
      });
    }

    const uniqueAnime = dedupeAnime(loadedAnime);
    if (uniqueAnime.length >= 1000) {
      animeData = uniqueAnime;
      catalogLoaded = true;
      renderTrendingAnime();
      if (catalogStatus) catalogStatus.textContent = `Showing ${uniqueAnime.length.toLocaleString()} anime titles. Search or filter to explore.`;
    } else if (uniqueAnime.length) {
      animeData = dedupeAnime([...animeData, ...uniqueAnime]);
      catalogLoaded = true;
      renderTrendingAnime();
      if (catalogStatus) catalogStatus.textContent = `Showing ${uniqueAnime.length.toLocaleString()} additional anime titles. Search or filter to explore.`;
    } else {
      if (catalogStatus) catalogStatus.textContent = 'Showing the starter collection. The expanded catalog could not be loaded right now.';
    }
  } catch (error) {
    if (catalogStatus) catalogStatus.textContent = 'Showing the starter collection. The expanded catalog could not be loaded right now.';
  }
}

function toggleWatchlist(title) {
  watchlist = isSaved(title)
    ? watchlist.filter((item) => item !== title)
    : [...watchlist, title];
  localStorage.setItem('animehub-watchlist', JSON.stringify(watchlist));
  updateWatchlistCount();
  renderTrendingAnime();

  if (activeAnime && activeAnime.title === title) {
    dialogList.textContent = isSaved(title) ? 'Remove from My List' : 'Add to My List';
  }
}

function getFilteredAnime() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  return animeData.filter((anime) => {
    const matchesFilter = activeFilter === 'All' || anime.genre === activeFilter;
    const matchesSearch = anime.title.toLowerCase().includes(query);
    const matchesWatchlist = !showWatchlistOnly || isSaved(anime.title);
    return matchesFilter && matchesSearch && matchesWatchlist;
  });
}

function renderTrendingAnime() {
  if (!trendingGrid) return;

  const filteredAnime = getFilteredAnime();

  if (!filteredAnime.length) {
    trendingGrid.innerHTML = '<div class="empty-state">No anime match your search or category. Try a different title or filter.</div>';
    return;
  }

  trendingGrid.innerHTML = filteredAnime.slice(0, 24)
    .map(
      (anime) => `
        <article class="anime-card" tabindex="0" data-card-title="${escapeHtml(anime.title)}" aria-label="View details for ${escapeHtml(anime.title)}">
          <div class="anime-cover" style="background-image: url('${escapeHtml(anime.image)}');">
            <span class="anime-badge" aria-label="Rating ${anime.rating} out of 10">${anime.rating}</span>
          </div>
          <div class="anime-content">
            <div class="anime-topline">
              <span>${escapeHtml(anime.badge)}</span>
              <span>${escapeHtml(anime.duration)}</span>
            </div>
            <h3>${escapeHtml(anime.title)}</h3>
            <div class="anime-meta">
              <span>${escapeHtml(anime.genre)}</span>
              <span>${escapeHtml(anime.season)}</span>
            </div>
            <div class="anime-tags">
              ${anime.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
            </div>
            <div class="anime-card-actions">
              <button class="card-action primary-action" type="button" data-action="details" data-title="${escapeHtml(anime.title)}">View details</button>
              <button class="card-action list-action ${isSaved(anime.title) ? 'saved' : ''}" type="button" data-action="list" data-title="${escapeHtml(anime.title)}" aria-label="${isSaved(anime.title) ? 'Remove' : 'Add'} ${escapeHtml(anime.title)} ${isSaved(anime.title) ? 'from' : 'to'} My List">${isSaved(anime.title) ? 'Saved' : '+ My List'}</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function openAnimeDialog(title) {
  activeAnime = animeData.find((anime) => anime.title === title);
  if (!activeAnime || !animeDialog) return;

  dialogCover.style.backgroundImage = `linear-gradient(180deg, transparent, rgba(11, 16, 32, 0.7)), url('${activeAnime.image}')`;
  dialogKicker.textContent = `${activeAnime.genre} • ${activeAnime.season} • ${activeAnime.rating}/10`;
  dialogTitle.textContent = activeAnime.title;
  dialogDescription.textContent = activeAnime.synopsis || `${activeAnime.title} is a ${activeAnime.badge.toLowerCase()} ${activeAnime.genre.toLowerCase()} pick. Start exploring ${activeAnime.duration}, then save it to your list when you are ready to come back.`;
  dialogWatch.href = getWatchUrl(activeAnime.title);
  dialogList.textContent = isSaved(activeAnime.title) ? 'Remove from My List' : 'Add to My List';
  animeDialog.showModal();
}

if (trendingGrid) {
  trendingGrid.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]');
    if (!action) {
      const card = event.target.closest('[data-card-title]');
      if (card) openAnimeDialog(card.dataset.cardTitle);
      return;
    }
    const title = action.dataset.title;

    if (action.dataset.action === 'list') toggleWatchlist(title);
    if (action.dataset.action === 'details') openAnimeDialog(title);
  });

  trendingGrid.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('[data-card-title]');
    if (!card || event.target.closest('button')) return;
    event.preventDefault();
    openAnimeDialog(card.dataset.cardTitle);
  });
}

if (dialogList) {
  dialogList.addEventListener('click', () => {
    if (activeAnime) toggleWatchlist(activeAnime.title);
  });
}

document.querySelector('.dialog-close')?.addEventListener('click', () => animeDialog?.close());
animeDialog?.addEventListener('click', (event) => {
  if (event.target === animeDialog) animeDialog.close();
});

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.hidden = true;
  });
}

if (searchInput) {
  searchInput.addEventListener('input', renderTrendingAnime);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    showWatchlistOnly = false;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderTrendingAnime();
  });
});

watchlistLinks.forEach((link) => {
  link.addEventListener('click', () => {
    showWatchlistOnly = true;
    activeFilter = 'All';
    filterButtons.forEach((button) => button.classList.toggle('active', button.dataset.filter === 'All'));
    renderTrendingAnime();
  });
});

const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const status = document.getElementById('newsletter-status');

    if (!emailInput || !status) return;

    if (!emailInput.value.trim()) {
      status.textContent = 'Please enter a valid email address.';
      status.style.color = '#fca5a5';
      return;
    }

    status.textContent = `Thanks! ${emailInput.value.trim()} is now subscribed.`;
    status.style.color = '#34d399';
    emailInput.value = '';
  });
}

renderTrendingAnime();
updateWatchlistCount();
loadRequestedCovers();
