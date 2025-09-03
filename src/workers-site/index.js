// This is a minimal worker that serves static assets
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    try {
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
        }
      );
    } catch (e) {
      // If an error is thrown try to serve the asset at 404.html
      if (e.status === 404) {
        return new Response("Not found", { status: 404 });
      }
      return new Response("Error serving static asset: " + e.message, { status: 500 });
    }
  }
};