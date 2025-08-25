// API simulée pour ArtShare - Fonctionnalités type Pinterest
export interface Artwork {
  id: number;
  title: string;
  artist: string;
  image: string;
  likes: number;
  comments: number;
  category: string;
  tags?: string[];
  description?: string;
}

class ArtShareAPI {
  private artworks: Artwork[] = [
    {
      id: 1,
      title: "Paysage Digital",
      artist: "Sophie Martin",
      image: "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 124,
      comments: 18,
      category: "Digital Art",
      tags: ["paysage", "digital", "nature"],
      description: "Un magnifique paysage créé entièrement en digital"
    },
    {
      id: 2,
      title: "Portrait Aquarelle",
      artist: "Lucas Dubois",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 89,
      comments: 12,
      category: "Aquarelle",
      tags: ["portrait", "aquarelle", "traditionnel"],
      description: "Portrait délicat à l'aquarelle"
    },
    {
      id: 3,
      title: "Illustration Manga",
      artist: "Yuki Tanaka",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 256,
      comments: 34,
      category: "Manga",
      tags: ["manga", "anime", "illustration"],
      description: "Illustration dans le style manga japonais"
    },
    {
      id: 4,
      title: "Nature Morte",
      artist: "Emma Laurent",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 67,
      comments: 8,
      category: "Traditionnel",
      tags: ["nature morte", "peinture", "classique"],
      description: "Nature morte dans le style classique"
    }
  ];

  private additionalArtworks: Artwork[] = [
    {
      id: 5,
      title: "Street Art",
      artist: "Alex Rivera",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 189,
      comments: 25,
      category: "Street Art",
      tags: ["street", "urbain", "graffiti"],
      description: "Art urbain coloré et expressif"
    },
    {
      id: 6,
      title: "Sculpture Moderne",
      artist: "Marie Dubois",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 143,
      comments: 19,
      category: "Sculpture",
      tags: ["sculpture", "moderne", "3D"],
      description: "Sculpture contemporaine en métal"
    }
  ];

  // Récupérer toutes les œuvres
  getArtworks(): Artwork[] {
    return [...this.artworks];
  }

  // Rechercher des œuvres par mot-clé
  searchArtworks(query: string): Artwork[] {
    const lowercaseQuery = query.toLowerCase();
    return this.artworks.filter(artwork => 
      artwork.title.toLowerCase().includes(lowercaseQuery) ||
      artwork.artist.toLowerCase().includes(lowercaseQuery) ||
      artwork.category.toLowerCase().includes(lowercaseQuery) ||
      artwork.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  // Filtrer par catégorie
  filterByCategory(category: string): Artwork[] {
    if (category === 'all') return this.artworks;
    return this.artworks.filter(artwork => artwork.category === category);
  }

  // Liker une œuvre
  likeArtwork(artworkId: number): Artwork[] {
    const artwork = this.artworks.find(art => art.id === artworkId);
    if (artwork) {
      artwork.likes += 1;
    }
    return [...this.artworks];
  }

  // Charger plus d'œuvres (simulation pagination)
  loadMoreArtworks(): Artwork[] {
    return [...this.additionalArtworks];
  }

  // Obtenir les œuvres tendances (les plus likées)
  getTrendingArtworks(): Artwork[] {
    return [...this.artworks].sort((a, b) => b.likes - a.likes);
  }

  // Obtenir les catégories disponibles
  getCategories(): string[] {
    const categories = this.artworks.map(artwork => artwork.category);
    return [...new Set(categories)];
  }

  // Ajouter une nouvelle œuvre (simulation upload)
  addArtwork(newArtwork: Omit<Artwork, 'id' | 'likes' | 'comments'>): Artwork[] {
    const artwork: Artwork = {
      ...newArtwork,
      id: this.artworks.length + 1,
      likes: 0,
      comments: 0
    };
    this.artworks.unshift(artwork);
    return [...this.artworks];
  }

  // Obtenir les œuvres d'un artiste spécifique
  getArtworksByArtist(artistName: string): Artwork[] {
    return this.artworks.filter(artwork => 
      artwork.artist.toLowerCase().includes(artistName.toLowerCase())
    );
  }

  // Simulation d'intégration Pinterest-like
  shareToSocialMedia(artworkId: number, platform: 'pinterest' | 'instagram' | 'twitter'): boolean {
    const artwork = this.artworks.find(art => art.id === artworkId);
    if (!artwork) return false;

    // Simulation du partage
    console.log(`Partage de "${artwork.title}" sur ${platform}`);
    
    // Dans un vrai projet, ici on ferait l'appel API vers Pinterest, Instagram, etc.
    switch (platform) {
      case 'pinterest':
        // Simulation Pinterest API
        console.log('Pinterest share URL:', `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(artwork.image)}&description=${encodeURIComponent(artwork.title)}`);
        break;
      case 'instagram':
        // Instagram ne permet pas le partage direct via API web
        console.log('Instagram: Copie du lien pour partage manuel');
        break;
      case 'twitter':
        console.log('Twitter share URL:', `https://twitter.com/intent/tweet?text=${encodeURIComponent(artwork.title)}&url=${encodeURIComponent(window.location.href)}`);
        break;
    }
    
    return true;
  }
}

export const artShareAPI = new ArtShareAPI();