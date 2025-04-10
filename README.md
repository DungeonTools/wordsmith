# Wordsmith

**Wordsmith** is a lightweight, AI-assisted FoundryVTT module that helps Game Masters quickly generate vivid descriptions for NPCs, locations, magic items, monsters, and more—all via simple chat commands. Keep your storytelling rich and dynamic without pulling you out of the game!

---

## ✨ Features

- 🔮 AI-powered description generation for all sorts of TTRPG elements
- 🎭 NPCs, 🌎 scenes, 👑 items, 🐉 creatures, and more
- 🗣️ Supports multiple verbosity levels: `tiny`, `short` (default), or `long`
- 🔁 Random generation with just tags (e.g. `#npc`)
- 💬 Easy-to-use slash commands (`/wordsmith` or `/ws`)

---

## 🧠 Usage

Ask Wordsmith to describe something based on your prompt:

```text
/wordsmith a fog-shrouded graveyard at midnight
```

```text
/wordsmith a magical sword with a holy aura
```

### 🎭 Category Tags

Adding a category tag allows you to easily pinpoint the type of description you need:

```text
/ws #npc a dark stranger with the air of a vampire about him
```

Available category tags are:
* #creature
* #event
* #item
* #npc
* #room
* #scene
* #spell
* #travel
* #weather

> [!IMPORTANT]  
> Category tags are mutually exclusive! If more than one are provided only the first will be respected!

### 🔁 Random Generation with Tags
You can just use a tag to get a random description, or include a couple keywords to frame what you're looking for. Wordsmith will generate something that fits:

```text
/ws #travel
/ws #spell
/ws #npc mysterious
/ws #item cursed ancient
/ws #scene tavern stormy
```

### 📝 Verbosity Levels
By default, Wordsmith returns a rich but concise description. You can override this a verbosity tag:

```text
/ws #tiny #npc #royal
/ws #item #long a shattered obsidian dagger that hums faintly
```

> 💡 Tags can be in any order, but must come before prompt text.

Valid verbosity tags are:
* #tiny - For one to two sentence descriptions.
* #short (default) - For a few sentences to a paragraph.
* #long - For two or more paragraphs

> [!IMPORTANT]  
> Verbosity levels are mutually exclusive! If more than one are provided only the first will be respected!

---

## ⚙️ Installation

1. In FoundryVTT, go to **Add-on Modules** → **Install Module**
2. Paste this manifest URL:
   ```
https://raw.githubusercontent.com/DungeonTools/wordsmith/main/module.json
```
3. Click **Install** and enable Wordsmith in your world.

---

## 🔧 Configuration

Wordsmith requires a backend API (powered by AWS Lambda and OpenAI). If you're self-hosting the backend, configure the endpoint via the module settings inside FoundryVTT.

---

## 🧪 Development
This module is in active development! If you want to contribute or report a bug:
- 📜 [View the source](https://github.com/DungeonTools/wordsmith)
- 🐛 [File an issue](https://github.com/DungeonTools/wordsmith/issues)

---

## 📄 License
MIT © 2025 DungeonTools

---

## 💬 Example Outputs
> *"The stream passage continues up beyond another set of uneven steps ahead, bending eastward as it goes. A waterfall sounds out from a larger cavern somewhere ahead of you."*

> *"A lean man stands in the shadowed corner of the tavern. His skin is pale, his eyes sunken. A subtle grin plays at his lips as he watches you, unmoving."*

---

Bring your world to life with Wordsmith.🪶
