export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Rotas do portal do cliente — servir o index.html (SPA routing)
    if (url.pathname.startsWith('/cliente/')) {
      const indexUrl = new URL('/', url.origin);
      return env.ASSETS.fetch(new Request(indexUrl.toString(), request));
    }

    // Tudo mais — servir normalmente
    return env.ASSETS.fetch(request);
  }
};
