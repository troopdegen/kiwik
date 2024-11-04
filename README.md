# Hackathon Starter for Polygon Bounties

Welcome to your hackathon starter template! This project is designed to get you quickly set up for building decentralized applications on the Polygon blockchains and its testnets. It uses **Next.js**, **shadcn/ui**, and **Dynamic** to handle wallet creation and connection, providing you with the essential tools and configurations to kickstart your hackathon project.

## Features

- **Next.js** with App Router for optimal structure and routing.
- **Shadcn** for beautiful, reusable UI components.
- **Bun** runtime for faster builds and improved performance.
- Pre-configured for **Dynamic Wallet** (powered by [dynamic.xyz](https://dynamic.xyz)) to handle wallet creation and connection.
- Ready-to-deploy starter that integrates well with Polygon and its testnets.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Ensure Bun is installed as your runtime)
- [Bun](https://bun.sh/docs/installation)
- [Git](https://git-scm.com/)
- [Polygon](https://polygon.technology/) native token POL (Amoy testnet recommended)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Dablclub/polygon-hackathon-starter.git
   cd polygon-hackathon-starter
   ```

2. **Install dependencies using Bun:**

   ```bash
   bun install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of your project and add the following variables:

   ```plaintext
   NEXT_PUBLIC_DYNAMIC_API_KEY=your_dynamic_api_key
   NEXT_PUBLIC_POLYGON_RPC_URL=https://polygon-rpc-url
   ```

   Replace `your_dynamic_api_key` with your API key from [dynamic.xyz](https://dynamic.xyz) and `https://polygon-rpc-url` with your preferred Polygon RPC endpoint.

### Running the Project

To start the development server, run:

```bash
bun run dev
```

This will launch the app at `http://localhost:3000`.

### Build and Production

For production builds, use:

```bash
bun run build
bun run start
```

## Project Structure

```plaintext
.
├── public/          # Static assets
├── src/app/         # Next.js pages and routing
├── src/components/  # Custom React components
├── src/styles/      # Global stylesheets
├── .env             # Environment variables
├── ...              # Other config files, check the repo!
```

## Wallet Integration

The starter template includes integration with **Dynamic Wallet**, allowing seamless wallet creation and connection for users:

- **Dynamic.xyz** provides an easy-to-use wallet connection UI.
- Plug-and-play configuration for connecting to Polygon and other EVM-compatible chains.

## Contributing

We welcome contributions! Feel free to submit issues or pull requests to help improve this starter template for the hackathon community.

## License

This project is open-source and available under the [MIT License](LICENSE).
