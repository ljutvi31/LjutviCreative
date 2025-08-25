import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Upload,
  Heart,
  MessageCircle,
  Share2,
  User,
  Search,
  Filter,
} from 'lucide-react';
import { artShareAPI } from '../services/artShareAPI.ts';

type Artwork = ReturnType<typeof artShareAPI.getArtworks>[number];

const ArtShare = () => {
  // Onglets & données
  const [activeTab, setActiveTab] = useState<'discover' | 'following' | 'trending'>('discover');
  const [artworks, setArtworks] = useState<Artwork[]>(artShareAPI.getArtworks());

  // Filtres
  const [showFilters, setShowFilters] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('Tous');

  // Actions d’origine
  const handleLike = (artworkId: number) => {
    const updatedArtworks = artShareAPI.likeArtwork(artworkId);
    setArtworks(updatedArtworks);
  };

  const handleLoadMore = () => {
    const moreArtworks = artShareAPI.loadMoreArtworks();
    setArtworks((prev) => [...prev, ...moreArtworks]);
  };

  // ⇨ Genres uniques (boucle sur les catégories existantes pour auto‑remplir les filtres)
  const genres = useMemo(() => {
    const set = new Set<string>();
    artworks.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return ['Tous', ...Array.from(set).sort()];
  }, [artworks]);

  // ⇨ Liste filtrée
  const filteredArtworks = useMemo(() => {
    const q = query.trim().toLowerCase();

    return artworks.filter((a) => {
      const matchGenre =
        selectedGenre === 'Tous' ||
        (a.category ?? '').toLowerCase() === selectedGenre.toLowerCase();

      const hay = `${a.title ?? ''} ${a.artist ?? ''}`.toLowerCase();
      const matchQuery = q.length === 0 || hay.includes(q);

      return matchGenre && matchQuery;
    });
  }, [artworks, query, selectedGenre]);

  // Go back léger (garde l’esprit de ta base)
  const goBack = () => {
    if (window.history.length > 1) window.history.back();
    else window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative h-40 bg-gradient-to-r from-purple-900 via-fuchsia-900 to-pink-900">
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={goBack}
            className="flex items-center space-x-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full hover:bg-white/25 transition"
          >
            <ArrowLeft size={18} />
            <span>Retour</span>
          </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-0">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            ArtShare — Galerie & Communauté
          </h1>
        </div>
      </div>

      {/* Barre d’outils : recherche + filtres */}
      <div className="container mx-auto px-6 mt-6">
        <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-4 md:p-6 shadow-xl">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
            {/* Recherche par nom (titre/artiste) */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher par titre ou artiste…"
                className="w-full bg-gray-900/70 border border-gray-700 rounded-xl py-2.5 pl-10 pr-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
                aria-label="Rechercher par titre ou artiste"
              />
            </div>

            {/* Bouton d’affichage du panneau de filtres */}
            <button
              onClick={() => setShowFilters((s) => !s)}
              className="inline-flex items-center gap-2 bg-gray-900/70 border border-gray-700 rounded-xl px-4 py-2.5 hover:bg-gray-900"
              aria-expanded={showFilters}
            >
              <Filter size={18} />
              Filtres
            </button>
          </div>

          {/* Panneau des genres (boucle sur les genres) */}
          {showFilters && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {genres.map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGenre(g)}
                    className={[
                      'px-3 py-1.5 rounded-full border transition',
                      selectedGenre === g
                        ? 'bg-fuchsia-600 border-fuchsia-500'
                        : 'bg-gray-900/60 border-gray-700 hover:bg-gray-900',
                    ].join(' ')}
                    aria-pressed={selectedGenre === g}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Onglets (optionnel, conservé) */}
      <div className="container mx-auto px-6 mt-6">
        <div className="flex gap-2">
          {(['discover', 'following', 'trending'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={[
                'px-4 py-2 rounded-xl border text-sm capitalize',
                activeTab === tab
                  ? 'bg-fuchsia-600 border-fuchsia-500'
                  : 'bg-gray-900/60 border-gray-700 hover:bg-gray-900',
              ].join(' ')}
              aria-pressed={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grille des œuvres (UTILISE LA LISTE FILTRÉE) */}
      <div className="container mx-auto px-6 py-8">
        {filteredArtworks.length === 0 ? (
          <div className="text-center text-gray-400 py-16">
            Aucune œuvre ne correspond à votre recherche.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredArtworks.map((art) => (
              <article
                key={art.id}
                className="bg-gray-800/60 border border-gray-700/50 rounded-2xl overflow-hidden hover:-translate-y-0.5 transition-transform"
              >
                <div className="aspect-[4/5] bg-gray-900">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold leading-tight">{art.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <User size={14} />
                        <span>{art.artist}</span>
                      </div>
                    </div>
                    {art.category && (
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-900/70 border border-gray-700">
                        {art.category}
                      </span>
                    )}
                  </div>

                  {art.description && (
                    <p className="text-sm text-gray-300 line-clamp-2">{art.description}</p>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleLike(art.id)}
                        className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white"
                        aria-label="Aimer l’œuvre"
                      >
                        <Heart size={18} />
                        <span className="text-sm">{art.likes}</span>
                      </button>
                      <div className="inline-flex items-center gap-1.5 text-gray-300">
                        <MessageCircle size={18} />
                        <span className="text-sm">{art.comments}</span>
                      </div>
                    </div>

                    <button className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white">
                      <Share2 size={18} />
                      <span className="text-sm">Partager</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Charger plus */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-xl font-medium transition"
          >
            Charger plus d'œuvres
          </button>
        </div>
      </div>

      {/* Bouton flottant "Upload" (conservé) */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500/90 hover:to-pink-500 px-4 py-4 rounded-full shadow-lg shadow-pink-500/25 transition-all duration-200 transform hover:scale-110">
          <Upload size={24} />
        </button>
      </div>
    </div>
  );
};

export default ArtShare;
