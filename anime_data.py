anime_data = [
    {
        "title": "Jujutsu Kaisen",
        "rating": 9.8,
        "badge": "Trending",
        "duration": "24 min",
        "genre": "Action",
        "season": "Season 2",
        "tags": ["Cursed", "Battles"],
        "image": "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    },
    {
        "title": "Demon Slayer",
        "rating": 9.7,
        "badge": "Hot pick",
        "duration": "23 min",
        "genre": "Fantasy",
        "season": "Season 4",
        "tags": ["Hashira", "Epic"],
        "image": "https://cdn.myanimelist.net/images/anime/1887/122008.jpg",
    },
    {
        "title": "One Piece",
        "rating": 9.9,
        "badge": "Fan favorite",
        "duration": "25 min",
        "genre": "Adventure",
        "season": "Ongoing",
        "tags": ["Pirates", "Legend"],
        "image": "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    },
]


def top_anime(limit=3):
    return sorted(anime_data, key=lambda item: item["rating"], reverse=True)[:limit]
