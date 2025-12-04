export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Koda Security – Coming Soon</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 flex flex-col items-center justify-center min-h-screen text-black text-center px-4">
  <h1 class="text-6xl font-bold mb-4">Koda Security</h1>
  <p class="text-2xl mb-6">Coming soon</p>
  <a href="mailto:contact@koda.security" class="text-lg underline hover:text-gray-600">contact@koda.security</a>
</body>
</html>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
