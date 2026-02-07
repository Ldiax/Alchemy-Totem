Ldiax

# Alchemy Totem

A Minecraft addon that introduces an alchemy-themed totem block with unique mechanics and textures for Minecraft Bedrock Edition.

## Features

- **Alchemy Totem Block**: A custom totem block with alchemical properties
- **Bilingual Support**: Available in English and Portuguese Brazilian
- **Custom Textures**: Unique terrain textures and visual design
- **Modular Structure**: Organized behavior packs and resource packs for easy customization

## Installation

1. Download the latest release or clone this repository
2. The addon includes both behavior packs and resource packs located in:
   - `behavior_packs/mc_myad/` - Game logic and block definitions
   - `resource_packs/mc_myad/` - Textures and language files
3. Import both the behavior pack and resource pack into Minecraft Bedrock Edition
4. Enable the packs in your world settings

## Project Structure

```
alchemytotem/
├── behavior_packs/          # Behavior pack definitions
│   └── mc_myad/
│       ├── blocks/          # Custom block definitions
│       └── manifest.json    # Behavior pack metadata
├── resource_packs/          # Resource pack files
│   └── mc_myad/
│       ├── textures/        # Block textures and definitions
│       └── texts/           # Language files (EN, PT-BR)
├── scripts/                 # TypeScript source code
│   └── main.ts
└── lib/                     # Compiled scripts output
    └── scripts/
        └── main.js
```

## Building

This project uses a build system to compile and deploy the addon:

```bash
npm run build
```

## Technologies Used

- **TypeScript**: For scripting and automation
- **Minecraft Bedrock Edition**: Target platform
- **ESLint**: Code quality and style

## Supported Languages

- English (en_US)
- Portuguese Brazilian (pt_BR)

## License

MIT

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Support

For questions or issues, please open an issue on this repository.

---

Made with ❤️ for the Minecraft community

Ldiax
