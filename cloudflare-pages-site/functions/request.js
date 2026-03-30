export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);

    const headers = {};
    for (const [k, v] of request.headers.entries()) {
        headers[k] = v;
    }

    return new Response(JSON.stringify({
        requestUrl: request.url,
        requestLine: `${request.method} ${url.pathname}${url.search} HTTP/1.1`,
        headers
    }), {
        headers: {
            "content-type": "application/json"
        }
    });
}