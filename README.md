# FizJOterapia — Strona internetowa

## 📁 Struktura projektu

```
fizjoterapia/
├── public/
│   ├── index.html          ← strona bazowa (nie edytuj)
│   ├── Asia(2).jpg         ← WGRAJ TUTAJ swoje zdjęcie profilowe
│   └── logo(3).png         ← WGRAJ TUTAJ logo (opcjonalnie)
├── src/
│   ├── App.jsx             ← GŁÓWNY PLIK STRONY — tu wprowadzasz zmiany
│   ├── index.js            ← punkt startowy (nie edytuj)
│   └── index.css           ← style globalne (nie edytuj)
├── package.json
└── tailwind.config.js
```

---

## ✏️ Jak edytować treści strony

Otwórz plik `src/App.jsx` w edytorze tekstu (np. VS Code).

Na górze pliku znajdziesz sekcję **DANE DO EDYCJI** — to jedyne miejsce, które musisz zmieniać:

### Kontakt i godziny
```js
const KONTAKT = {
  telefon: '512 384 325',        // ← zmień numer
  email: 'fizjoterapia.jo@gmail.com',  // ← zmień email
  adres: ['Active Clinic', 'ul. Pokorna 2 lokal U19', '00-199 Warszawa'],
  booksy: 'https://booksy.com/...',    // ← zmień link do Booksy
};

const GODZINY = [
  { dzien: 'Poniedziałek', godziny: '7:00–14:00' },  // ← zmień godziny
  ...
];
```

### Artykuły na blogu
```js
const BLOG = [
  {
    title: 'Tytuł artykułu',   // ← zmień tytuł
    image: 'https://...',       // ← wklej link do zdjęcia z unsplash.com
  },
  ...
];
```

### Zdjęcie profilowe
Wgraj plik `Asia(2).jpg` do folderu `public/`. Jeśli zmienisz nazwę zdjęcia, zaktualizuj też linię:
```jsx
src="/Asia(2).jpg"
```

---

## 🚀 Wdrożenie na Vercel (krok po kroku)

### Krok 1 — Załóż konto GitHub
1. Wejdź na **github.com** → kliknij „Sign up"
2. Utwórz konto (bezpłatne)

### Krok 2 — Wgraj projekt na GitHub
1. Zaloguj się na GitHub
2. Kliknij **„New repository"** (zielony przycisk)
3. Nazwa: `fizjoterapia` → kliknij „Create repository"
4. Kliknij **„uploading an existing file"**
5. Przeciągnij **wszystkie pliki i foldery** z tego projektu
6. Kliknij **„Commit changes"**

### Krok 3 — Wgraj swoje zdjęcia
W repozytorium GitHub, wejdź do folderu `public/` i dodaj:
- `Asia(2).jpg` — Twoje zdjęcie profilowe
- `logo(3).png` — logo (opcjonalnie)

### Krok 4 — Wdróż na Vercel
1. Wejdź na **vercel.com** → zaloguj się kontem GitHub
2. Kliknij **„Add New Project"**
3. Wybierz repozytorium `fizjoterapia`
4. Vercel automatycznie wykryje React — kliknij **„Deploy"**
5. Po ~2 minutach otrzymasz link, np. `fizjoterapia.vercel.app` 🎉

### Krok 5 (opcjonalnie) — Własna domena
1. Kup domenę np. na **ovh.pl** (~50 zł/rok)
2. W Vercel: Settings → Domains → wpisz swoją domenę
3. Postępuj zgodnie z instrukcjami Vercel

---

## 🔄 Jak aktualizować stronę po wdrożeniu?

1. Edytuj pliki lokalnie (lub bezpośrednio na GitHub.com)
2. Zatwierdź zmiany (Commit)
3. Vercel automatycznie zaktualizuje stronę w ciągu ~1 minuty ✅

---

## ❓ Potrzebujesz pomocy?

Prześlij plik `App.jsx` do Claude.ai — wprowadzę zmiany za Ciebie!
