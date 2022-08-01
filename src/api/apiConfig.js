const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6557cc874dda0f42183d0f81b2746b3b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;