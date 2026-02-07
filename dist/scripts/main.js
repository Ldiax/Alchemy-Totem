// scripts/main.ts
import {
  system,
  EquipmentSlot,
  ItemStack,
  EntityComponentTypes
} from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
var POTION_EFFECT_MAP = {
  // --- Normal potions ---
  "minecraft:swiftness": {
    effects: [{ effectId: "minecraft:speed", amplifier: 0 }],
    displayName: "Swiftness"
  },
  "minecraft:long_swiftness": {
    effects: [{ effectId: "minecraft:speed", amplifier: 0 }],
    displayName: "Swiftness (Long)"
  },
  "minecraft:strong_swiftness": {
    effects: [{ effectId: "minecraft:speed", amplifier: 1 }],
    displayName: "Swiftness II"
  },
  "minecraft:leaping": {
    effects: [{ effectId: "minecraft:jump_boost", amplifier: 0 }],
    displayName: "Leaping"
  },
  "minecraft:long_leaping": {
    effects: [{ effectId: "minecraft:jump_boost", amplifier: 0 }],
    displayName: "Leaping (Long)"
  },
  "minecraft:strong_leaping": {
    effects: [{ effectId: "minecraft:jump_boost", amplifier: 1 }],
    displayName: "Leaping II"
  },
  "minecraft:healing": {
    effects: [{ effectId: "minecraft:instant_health", amplifier: 0 }],
    displayName: "Healing"
  },
  "minecraft:strong_healing": {
    effects: [{ effectId: "minecraft:instant_health", amplifier: 1 }],
    displayName: "Healing II"
  },
  "minecraft:harming": {
    effects: [{ effectId: "minecraft:instant_damage", amplifier: 0 }],
    displayName: "Harming"
  },
  "minecraft:strong_harming": {
    effects: [{ effectId: "minecraft:instant_damage", amplifier: 1 }],
    displayName: "Harming II"
  },
  "minecraft:poison": {
    effects: [{ effectId: "minecraft:poison", amplifier: 0 }],
    displayName: "Poison"
  },
  "minecraft:long_poison": {
    effects: [{ effectId: "minecraft:poison", amplifier: 0 }],
    displayName: "Poison (Long)"
  },
  "minecraft:strong_poison": {
    effects: [{ effectId: "minecraft:poison", amplifier: 1 }],
    displayName: "Poison II"
  },
  "minecraft:regeneration": {
    effects: [{ effectId: "minecraft:regeneration", amplifier: 0 }],
    displayName: "Regeneration"
  },
  "minecraft:long_regeneration": {
    effects: [{ effectId: "minecraft:regeneration", amplifier: 0 }],
    displayName: "Regeneration (Long)"
  },
  "minecraft:strong_regeneration": {
    effects: [{ effectId: "minecraft:regeneration", amplifier: 1 }],
    displayName: "Regeneration II"
  },
  "minecraft:strength": {
    effects: [{ effectId: "minecraft:strength", amplifier: 0 }],
    displayName: "Strength"
  },
  "minecraft:long_strength": {
    effects: [{ effectId: "minecraft:strength", amplifier: 0 }],
    displayName: "Strength (Long)"
  },
  "minecraft:strong_strength": {
    effects: [{ effectId: "minecraft:strength", amplifier: 1 }],
    displayName: "Strength II"
  },
  "minecraft:weakness": {
    effects: [{ effectId: "minecraft:weakness", amplifier: 0 }],
    displayName: "Weakness"
  },
  "minecraft:long_weakness": {
    effects: [{ effectId: "minecraft:weakness", amplifier: 0 }],
    displayName: "Weakness (Long)"
  },
  "minecraft:slowness": {
    effects: [{ effectId: "minecraft:slowness", amplifier: 0 }],
    displayName: "Slowness"
  },
  "minecraft:long_slowness": {
    effects: [{ effectId: "minecraft:slowness", amplifier: 0 }],
    displayName: "Slowness (Long)"
  },
  "minecraft:strong_slowness": {
    effects: [{ effectId: "minecraft:slowness", amplifier: 3 }],
    displayName: "Slowness IV"
  },
  "minecraft:nightvision": {
    effects: [{ effectId: "minecraft:night_vision", amplifier: 0 }],
    displayName: "Night Vision"
  },
  "minecraft:long_nightvision": {
    effects: [{ effectId: "minecraft:night_vision", amplifier: 0 }],
    displayName: "Night Vision (Long)"
  },
  "minecraft:invisibility": {
    effects: [{ effectId: "minecraft:invisibility", amplifier: 0 }],
    displayName: "Invisibility"
  },
  "minecraft:long_invisibility": {
    effects: [{ effectId: "minecraft:invisibility", amplifier: 0 }],
    displayName: "Invisibility (Long)"
  },
  "minecraft:fire_resistance": {
    effects: [{ effectId: "minecraft:fire_resistance", amplifier: 0 }],
    displayName: "Fire Resistance"
  },
  "minecraft:long_fire_resistance": {
    effects: [{ effectId: "minecraft:fire_resistance", amplifier: 0 }],
    displayName: "Fire Resistance (Long)"
  },
  "minecraft:water_breathing": {
    effects: [{ effectId: "minecraft:water_breathing", amplifier: 0 }],
    displayName: "Water Breathing"
  },
  "minecraft:long_water_breathing": {
    effects: [{ effectId: "minecraft:water_breathing", amplifier: 0 }],
    displayName: "Water Breathing (Long)"
  },
  "minecraft:slow_falling": {
    effects: [{ effectId: "minecraft:slow_falling", amplifier: 0 }],
    displayName: "Slow Falling"
  },
  "minecraft:long_slow_falling": {
    effects: [{ effectId: "minecraft:slow_falling", amplifier: 0 }],
    displayName: "Slow Falling (Long)"
  },
  "minecraft:turtle_master": {
    effects: [
      { effectId: "minecraft:slowness", amplifier: 3 },
      { effectId: "minecraft:resistance", amplifier: 2 }
    ],
    displayName: "Turtle Master"
  },
  "minecraft:long_turtle_master": {
    effects: [
      { effectId: "minecraft:slowness", amplifier: 3 },
      { effectId: "minecraft:resistance", amplifier: 2 }
    ],
    displayName: "Turtle Master (Long)"
  },
  "minecraft:strong_turtle_master": {
    effects: [
      { effectId: "minecraft:slowness", amplifier: 5 },
      { effectId: "minecraft:resistance", amplifier: 3 }
    ],
    displayName: "Turtle Master II"
  },
  "minecraft:infested": {
    effects: [{ effectId: "minecraft:infested", amplifier: 0 }],
    displayName: "Infested"
  },
  "minecraft:oozing": {
    effects: [{ effectId: "minecraft:oozing", amplifier: 0 }],
    displayName: "Oozing"
  },
  "minecraft:weaving": {
    effects: [{ effectId: "minecraft:weaving", amplifier: 0 }],
    displayName: "Weaving"
  },
  "minecraft:wind_charged": {
    effects: [{ effectId: "minecraft:wind_charged", amplifier: 0 }],
    displayName: "Wind Charged"
  },
  "minecraft:wither": {
    effects: [{ effectId: "minecraft:wither", amplifier: 0 }],
    displayName: "Wither"
  },
  // --- No-effect potions ---
  "minecraft:water": { effects: [], displayName: "Water" },
  "minecraft:mundane": { effects: [], displayName: "Mundane" },
  "minecraft:long_mundane": { effects: [], displayName: "Mundane (Long)" },
  "minecraft:thick": { effects: [], displayName: "Thick" },
  "minecraft:awkward": { effects: [], displayName: "Awkward" }
};
function isPotionItem(typeId) {
  return typeId === "minecraft:potion" || typeId === "minecraft:splash_potion" || typeId === "minecraft:lingering_potion";
}
function consumePotion(player, item) {
  const equippable = player.getComponent(EntityComponentTypes.Equippable);
  if (!equippable) return;
  const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
  if (item.typeId === "minecraft:potion") {
    if (slot.amount <= 1) {
      slot.setItem(new ItemStack("minecraft:glass_bottle", 1));
    } else {
      slot.amount -= 1;
      const inventory = player.getComponent("minecraft:inventory");
      if (inventory) {
        const container = inventory.container;
        if (container) {
          container.addItem(new ItemStack("minecraft:glass_bottle", 1));
        }
      }
    }
  } else {
    if (slot.amount <= 1) {
      slot.setItem(void 0);
    } else {
      slot.amount -= 1;
    }
  }
}
function applyPotionEffectsToNearby(blockLocation, dimension, potionEffectId, durationTicks) {
  const entry = POTION_EFFECT_MAP[potionEffectId];
  if (!entry || entry.effects.length === 0) return 0;
  const nearbyPlayers = dimension.getPlayers({
    location: blockLocation,
    maxDistance: 10
  });
  for (const target of nearbyPlayers) {
    for (const effect of entry.effects) {
      try {
        target.addEffect(effect.effectId, durationTicks, {
          amplifier: effect.amplifier,
          showParticles: true
        });
      } catch {
        try {
          target.addEffect(effect.effectId, 1, {
            amplifier: effect.amplifier,
            showParticles: true
          });
        } catch {
        }
      }
    }
  }
  return nearbyPlayers.length;
}
system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(
    "potionarea:totem_alquimia",
    {
      onPlayerInteract(e) {
        const player = e.player;
        const blockLocation = e.block.location;
        const dimension = e.dimension;
        if (!player) return;
        system.run(() => handleTotemInteraction(player, blockLocation, dimension));
      }
    }
  );
});
async function handleTotemInteraction(player, blockLocation, dimension) {
  const equippable = player.getComponent(EntityComponentTypes.Equippable);
  if (!equippable) return;
  const item = equippable.getEquipment(EquipmentSlot.Mainhand);
  if (!item || !isPotionItem(item.typeId)) {
    player.sendMessage("\xA7cSegure uma pocao na mao para usar o Totem de Alquimia!");
    return;
  }
  const potionComp = item.getComponent("minecraft:potion");
  if (!potionComp) {
    player.sendMessage("\xA7cEsta pocao nao possui dados de efeito.");
    return;
  }
  const potionEffectType = potionComp.potionEffectType;
  const potionEffectId = potionEffectType.id;
  const durationTicks = potionEffectType.durationTicks ?? 600;
  const entry = POTION_EFFECT_MAP[potionEffectId];
  if (!entry) {
    player.sendMessage(`\xA7cPocao desconhecida: ${potionEffectId}`);
    return;
  }
  if (entry.effects.length === 0) {
    player.sendMessage(`\xA7ePocao de ${entry.displayName} nao possui efeito para aplicar.`);
    return;
  }
  const form = new MessageFormData().title("Totem de Alquimia").body(
    `\xA7eDeseja aplicar \xA7b${entry.displayName}\xA7e a todos os jogadores num raio de 10 blocos?

\xA77Duracao: ${(durationTicks / 20).toFixed(1)}s`
  ).button1("Confirmar").button2("Cancelar");
  const response = await form.show(player);
  if (response.canceled || response.selection !== 0) {
    player.sendMessage("\xA77Acao cancelada.");
    return;
  }
  const currentItem = equippable.getEquipment(EquipmentSlot.Mainhand);
  if (!currentItem || !isPotionItem(currentItem.typeId)) {
    player.sendMessage("\xA7cVoce nao esta mais segurando uma pocao!");
    return;
  }
  const currentPotionComp = currentItem.getComponent("minecraft:potion");
  if (!currentPotionComp || currentPotionComp.potionEffectType.id !== potionEffectId) {
    player.sendMessage("\xA7cA pocao na sua mao mudou!");
    return;
  }
  consumePotion(player, currentItem);
  const affectedCount = applyPotionEffectsToNearby(
    blockLocation,
    dimension,
    potionEffectId,
    durationTicks
  );
  player.sendMessage(
    `\xA7aEfeito \xA7b${entry.displayName}\xA7a aplicado a \xA7e${affectedCount}\xA7a jogador(es) proximo(s)!`
  );
}

//# sourceMappingURL=../debug/main.js.map
