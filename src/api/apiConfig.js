const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '77a0f6880866d83728c8de4b6c32af4a',
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;