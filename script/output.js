/*
This is my biggest Mod. Thanks for downloading!
Please dont steal my code!!!

functions:
function Level.getChestSlot(x, y, z, slot);
function Level.getChestSlotCount(x, y, z, slot);
function Level.getChestSlotData(x, y, z, slot);


*/
//meteorsheep

var meteorsheep = {
  sheep: 0,
  active: false,
  timer1: 0,
  timer2: 0,
  x: 0,
  y: 0,
  z: 0
}

//snowsword
var snowsword = {
  active: false,
  timer: 0,
  victim: 0
}

//arrowsword
var arrowsword = {
  active: false,
  timer: 0,
  victim: 0
}

//hypershooter
var hypershooter = {
  active: false,
  timer: 0,
  arrow: 0
}

var tntshooter = {
  active: false,
  timer: 0,
  arrow: 0
}

var hypershootertntshooter = {
  active: false,
  timer: 0,
  arrow: 0
}


//Tardis
var tardis = {
  inside: false,
  generated: false,
  formerposition: {
    x: 0,
    y: 0,
    z: 0
  }
}

var flyingtnt = {
  active: false,
  tnt: 0,
}
var tntarmor = {
  wearing: false
}

var pigtnt = {
  active: false,
  timer: 0,
  pig: 0
}

var chickentnt = {
  active: false,
  timer: 0,
  chicken: 0
}

var instanttnt = {
  active: false,
  timer: 0,
  health: 0
}

var dragonglider = {
  gliding: false
}


//Item ids
const items = {
  //Emerald items
  emeraldhelmet: 3000,
  emeraldchestplate: 3001,
  emeraldleggings: 3002,
  emeraldboots: 3003,
  emeralddust: 3004,
  emeraldingot: 3005,
  emeraldsword: 3006,
  emeraldpickaxe: 3007,
  emeraldshowel: 3008,
  //Special swords
  firesword: 3009,
  snowsword: 3010,
  arrowsword: 3011,
  lavasword: 3021,
  watersword: 3022,
  //Random shit
  slingshot: 3012,
  gravitygun: 3013,
  hypertntpickaxe: 3014,
  hypershooter: 3029,
  meteorsheep: 3030,
  flyingtnt: 3031,
  jetpack: 3034,
  dragonglider: 3032,
  hoverboots: 3033,
  //TNT tools
  tntpickaxe: 3015,
  tntrocket: 3016,
  chickentnt: 3017,
  pigtnt: 3018,
  hypertntsword: 3019,
  tntsword: 3020,
  tntboots: 3023,
  tntleggings: 3024,
  tntchestplate: 3025,
  tnthelmet: 3026,
  instanttnt: 3027,
  sheeptntthrower: 3028,
  tntshooter: 3035,
  tardisessence: 3036,
  //Lucky blocks
  luckyessence: 3037,
  redluckyessence: 3038,
  greenluckyessence: 3039,
  blueluckyessence: 3040,
  bigluckyessence: 3041,
  miniluckyessence: 3042,

  luckypotion: 3043,
  medicine: 3044,
  help: 3045,
  debugger: 3046,
  mobstacker: 3047,
  elevatoressence: 3048,
  slomosword: 3049,
  enderboots: 3050,
  enderparachute: 3051,
  fastbuilder: 3052,
  fastpadxpos: 3053,
  fastpadxneg: 3054,
  fastpadypos: 3055,
  fastpadyneg: 3056,
  machinetester: 3057,
  jumperessence: 3058

}
//ModPE.setGameSpeed(speed: default 20);

//Ist bei 3033


const blocks = {
  chest: 54,
  lapisblock: 22
}

var target;
var isPickingEntity = false;
var ggMob;
var initCreativeItems = true;
var sheep;
var activate = false;
var acctivate = false;
var tnt;
var tower = false
var exp = 0;
var chicken;
var Huhn = 0;
var rupf = false;
var jump = false;
var fly = 0;

var previousCarriedItem = 0;
var previousSlotId = 0;


var swords = [];



var fireThrow = 0;
var arrow;
var GUI;
var dauer = false;
var bio = 0;
var ride = false;
var pferd;
var reit = 0.7;
var elevator = {
  active: false,
  timer: 0,
  speed: 0.4
};
var hoch = 0;
var upspeed = 0.4
var pick;
//var luckyEffects = [
const potionLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const potionValues = [
  MobEffect.absorption,
  MobEffect.blindness,
  MobEffect.confusion,
  MobEffect.damageBoost,
  MobEffect.damageResistance,
  MobEffect.digSlowdown,
  MobEffect.digSpeed,
  MobEffect.effectIds,
  MobEffect.fatalPoison,
  MobEffect.fireResistance,
  MobEffect.harm,
  MobEffect.heal,
  MobEffect.healthBoost,
  MobEffect.hunger,
  MobEffect.invisibility,
  MobEffect.jump,
  MobEffect.levitation,
  MobEffect.movementSlowdown,
  MobEffect.movementSpeed,
  MobEffect.nightVision,
  MobEffect.poison,
  MobEffect.regeneration,
  MobEffect.saturation,
  MobEffect.waterBreathing,
  MobEffect.weakness,
  MobEffect.wither,
];
  //1, 3, 5, 8, 10, 21, 11, 12, 13, 14, 2, 4, 18, 9, 19, 20];
//var potionTimes = [
const itemValues = [256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 268, 269, 270, 270, 271,
  272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294,
  295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317,
  318, 319, 320, 321, 323, 324, 325, 328, 329, 330, 331, 332, 333, 334, 336, 337, 338, 339, 340, 341, 344, 345,
  items.emeraldpickaxe, 347, 348, 351, 352, 352, 353, 354, 355, 357, 359, 360, 261, 362, 363, 364, 365, 366, 383,
  388, 391, 392, 393, 405, 406, 457, 458, 459
];

//const mobValues = [
const hostileMobs = [
  EntityType.ZOMBIE,
  EntityType.CREEPER,
  EntityType.SKELETON,
  EntityType.SPIDER,
  EntityType.ZOMBIE_PIGMAN,
  EntityType.SLIME,
  EntityType.ENDERMAN,
  EntityType.SILVERFISH,
  EntityType.CAVESPIDER,
  EntityType.GHAST,
  EntityType.MAGMACUBE,
  EntityType.BLAZE,
  EntityType.ZOMBIE_VILLAGER,
  EntityType.WITCH,
  EntityType.STRAY,
  EntityType.HUSK,
  EntityType.WITHER_SKELETON,
  EntityType.GUARDIAN,
  EntityType.ELDER_GUARDIAN,
  EntityType.WITHER,
  EntityType.ENDER_DRAGON,
  EntityType.SHULKER,
  EntityType.ENDERMITE,
  EntityType.VINDICATOR,
  EntityType.EVOCATION_VILLAGER,
];

const passiveMobs = [
  EntityType.CHICKEN,
  EntityType.COW,
  EntityType.PIG,
  EntityType.SHEEP,
  EntityType.WOLF,
  EntityType.VILLAGER,
  EntityType.MOOSHROOM,
  EntityType.SQUID,
  EntityType.RABBIT,
  EntityType.BAT,
  EntityType.IRON_GOLEM,
  EntityType.SNOW_GOLEM,
  EntityType.OCELOT,
  EntityType.HORSE,
  EntityType.DONKEY,
  EntityType.MULE,
  EntityType.ZOMBIE_HORSE,
  EntityType.POLAR_BEAR,
  EntityType.LLAMA,
  EntityType.PARROT,
];

const projectileMobs = [
  EntityType.SHULKER_BULLET,
  EntityType.DRAGON_FIREBALL,
  EntityType.ARROW,
  EntityType.SNOWBALL,
  EntityType.EGG,
  EntityType.LARGE_FIREBALL,
  EntityType.WITHER_SKULL,
  EntityType.LIGHTNING_BOLT
];


const blockDataValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 15, 16, 17, 18, 20, 21, 22, 24, 26, 30, 31, 32, 35, 37, 38, 39,
  40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 71, 73, 74, 78, 79, 80, 81,
  82, 83, 85, 87, 89, 92, 95, 98, 102, 103, 105, 107, 109, 108, 112, 114, 128, 155, 156, 245, 246, 247, 248, 249, 253, 254, 255
];


Entity.Throwable = function(type, vel) {
  var p = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
  var y = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
  var xx = Math.sin(p) * Math.cos(y) * (1.5);
  var yy = Math.sin(p) * Math.sin(y) * (1.5);
  var zz = Math.cos(p) * (1.5);
  var mob = Level.spawnMob(Player.getX() + xx, Player.getY() + zz, Player.getZ() + yy, type);
  setVelX(mob, vel * xx);
  setVelY(mob, vel * zz);
  setVelZ(mob, vel * yy);
};

//Item.addShapedRecipe(70, 1, 0, [


function createLuckyItems() {
  Item.defineItem(items.greenluckyessence, "greenluckyessence", 0, "greenluckyessence", 1);
  Item.defineItem(items.blueluckyessence, "blueluckyessence", 0, "blue lucky essence", 1);



  Item.defineItem(items.redluckyessence, "redluckyessence", 0, "red lucky essence", 1);


  Item.defineItem(items.miniluckyessence, "miniluckyessence", 0, "mini lucky essence");


  Item.defineItem(items.bigluckyessence, "bigluckyessence", 0, "big lucky essence");

  Item.defineItem(items.luckypotion, "luckypotion", 0, "lucky potion");


}



function createEmeraldItems() {

  //Emerald armor
  Item.newArmor(items.emeraldhelmet, "emeraldhelmet", 0, "emerald helmet", "armor/emerald_1.png", 3, 351, ArmorType.helmet);
  Item.addShapedRecipe(items.emeraldhelmet, 1, 0, [
    "aaa",
    "a a",
    "   "
  ], ["a", items.emeraldingot, 0]);



  Item.newArmor(items.emeraldchestplate, "emeraldchestplate", 0, "emerald chestplate", "armor/emerald_1.png", 8, 351, ArmorType.chestplate);
  Item.addShapedRecipe(items.emeraldchestplate, 1, 0, [
    "a a",
    "aaa",
    "aaa"
  ], ["a", items.emeraldingot, 0]);

  Item.newArmor(items.emeraldleggings, "emeraldleggings", 0, "emerald leggings", "armor/emerald_2.png", 5, 351, ArmorType.leggings);
  Item.addShapedRecipe(items.emeraldleggings, 1, 0, [
    "aaa",
    "a a",
    "a a"
  ], ["a", items.emeraldingot, 0]);

  Item.newArmor(items.emeraldboots, "emeraldboots", 0, "emerald boots", "armor/emerald_1.png", 7, 351, ArmorType.boots);
  Item.addShapedRecipe(items.emeraldboots, 1, 0, [
    "a a",
    "a a",
    "   "
  ], ["a", items.emeraldingot, 0]);

  //Item.newArmor(LONG_FALL_BOOTS_ID,"longfallboots",0,"Long Fall Boots","armor/longfallboots.png",1,LONG_FALL_BOOTS_MAX_DAMAGE,ArmorType.boots);

  //emerald recipie ingredients
  Item.defineItem(items.emeralddust, "emeralddust", 0, "emerald dust", 0);
  Item.addShapedRecipe(items.emeralddust, 4, 0, [
    " a ",
    "   ",
    "   "
  ], ["a", 388, 0]);

  Item.defineItem(items.emeraldingot, "emeraldingot", 0, "emerald ingot", 0);
  Item.addShapedRecipe(items.emeraldingot, 1, 0, [
    "  a",
    " b ",
    "   "
  ], ["a", items.emeralddust, 0, "b", 266, 0]);

  //Emeralddsword
  Item.defineItem(items.emeraldsword, "emeraldsword", 0, "emerald sword", 0);
  Item.addShapedRecipe(items.emeraldsword, 1, 0, [
    " a ",
    " a ",
    " b "
  ], ["a", items.emeraldingot, 0, "b", 280, 0]);
  Item.setMaxDamage(items.emeraldsword, 100);
  Item.setHandEquipped(items.emeraldsword, 1);


  //Emerald pickaxe
  Item.defineItem(items.emeraldpickaxe, "emeraldpickaxe", 0, "emerald pickaxe", 0);
  Item.addShapedRecipe(items.emeraldpickaxe, 1, 0, [
    "aaa",
    " b ",
    " b "
  ], ["a", items.emeraldingot, 0, "b", 280, 0]);
  Item.setMaxDamage(items.emeraldpickaxe, 100);
  Item.setHandEquipped(items.emeraldpickaxe, 1);


  //Emerald shovel
  Item.defineItem(items.emeraldshowel, "emeraldshowel", 0, "emerald showel", 0);
  Item.addShapedRecipe(items.emeraldshowel, 1, 0, [
    " a ",
    " b ",
    " b "
  ], ["a", items.emeraldingot, 0, "b", 280, 0]);
  Item.setMaxDamage(items.emeraldshovel, 200);
  Item.setHandEquipped(items.emeraldshovel, 1);
}


function createMachineItems(){
  Item.defineItem(items.debugger, "debugger", 0, "debugger", 1);
  Item.defineItem(items.mobstacker, "mobstacker", 0, "mob stacker", 1);
  Item.defineItem(items.tardisessence, "tardisessence", 0, "tardis essence", 0);
  Item.addShapedRecipe(items.tardisessence, 1, 0, [
    " a ",
    " a ",
    " b "
  ], ["a", 22, 0, "b", 247, 0]);
  Item.defineItem(items.jumperessence, "jumperessence", 0, "jumper essence");
  Item.addCraftRecipe(items.jumperessence, 4, 0, [265, 1, 0]);
}


function createMiscellaniousItems() {
  Item.defineItem(items.help, "help", 0, "help", 1);
  Item.addShapedRecipe(items.help, 1, 0, [
    "   ",
    " a ",
    "   "
  ], ["a", 280, 0]);
  Item.defineItem(items.enderparachute, "enderparachute", 0, "enderparachute", 1);
  Item.newArmor(items.enderboots, "enderboots", 0, "ender boots", "armor/ender_2.png", 3, 351, ArmorType.boots);
  Item.addShapedRecipe(items.enderboots, 1, 0, [
    "   ",
    "a a",
    "a a"
  ], ["a", 121, 0]);//end stone
  Item.defineItem(items.medicine, "removealleffects", 0, "medicine");


  //ModPE.setFoodItem(id, iconName, offset, halfhearts, name, maxStack)

  Item.defineThrowable(items.slingshot, "slingshot", 0, "slingshot", 1);
  Item.addShapedRecipe(items.slingshot, 1, 0, [
    "a a",
    " b ",
    "a a"
  ], ["a", 46, 0, "b", 264, 0]);
  Item.setHandEquipped(items.slingshot, 1);

  Item.defineItem(items.meteorsheep, "meteorsheep", 0, "Meteor sheep", 0);
  Item.addShapedRecipe(items.meteorsheep, 1, 0, [
    "wtw",
    "twt",
    "wtw"
  ], ["w", 35, 0, "t", 46, 0]);



  Item.defineThrowable(items.gravitygun, "gravitygun", 0, "gravity gun", 0);
  Item.setMaxDamage(items.gravitygun, 200);





  Item.newArmor(items.hoverboots, "hoverboots", 0, "hover boots", "armor/hover_1.png", 2, 315, ArmorType.boots);


  Item.newArmor(items.jetpack, "jetpack", 0, "jetpack", "armor/tntarmor.png", 2, 353, ArmorType.chestplate);
  Item.addShapedRecipe(items.jetpack, 1, 0, [
    "aba",
    "a a",
    "c c"
  ], ["a", 265, 0, "b", 331, 0, "c", 325, 10]);

  Item.newArmor(items.dragonglider, "dragonglider", 0, "dragon glider", "armor/dragon.png", 2, 351, ArmorType.chestplate);
  Item.addShapedRecipe(items.dragonglider, 1, 0, [
    "aaa",
    "b b",
    " c "
  ], ["a", 35, 0, "b", 265, 0, "c", 334, 0]);


}


function createSwordItems() {
  Item.defineItem(items.lavasword, "lavasword", 0, "lava sword");
  Item.setHandEquipped(items.lavasword, 1);

  Item.defineItem(items.watersword, "watersword", 0, "water sword");
  Item.setHandEquipped(items.watersword, 1);

  Item.defineItem(items.arrowsword, "arrowsword", 0, "arrow sword");

  Item.defineItem(items.snowsword, "snowsword", 0, "snow sword", 0);
  Item.addShapedRecipe(items.snowsword, 1, 0, [
    " a ",
    " a ",
    " b "
  ], ["a", 80, 0, "b", 280, 0]);
  Item.setHandEquipped(items.snowsword, 1);
  Item.defineItem(items.firesword, "firesword", 0, "fire sword", 1);
  Item.setHandEquipped(items.firesword, 1);

}

function createTntItems() {

  Item.defineItem(items.tntpickaxe, "tntpickaxe", 0, "TNT pickaxe", 1);
  Item.addShapedRecipe(items.tntpickaxe, 1, 0, [
    "aaa",
    " b ",
    " b "
  ], ["a", 46, 0, "b", 280, 0]);
  Item.setMaxDamage(items.tntpickaxe, 80);
  Item.setHandEquipped(items.tntpickaxe, 1);

  Item.defineItem(items.hypertntpickaxe, "hypertntpickaxe", 0, "Hyper TNT pickaxe", 1);
  Item.addShapedRecipe(items.hypertntpickaxe, 1, 0, [
    "aaa",
    " b ",
    " b "
  ], ["a", 46, 0, "b", 265, 0]);
  Item.setHandEquipped(items.hypertntpickaxe, 1);
  Item.setMaxDamage(items.hypertntpickaxe, 200);

  Item.defineItem(items.tntrocket, "tntrocket", 0, "TNT rocket");
  Item.addShapedRecipe(items.tntrocket, 1, 0, [
    " a ",
    " b ",
    "   "
  ], ["a", 46, 0, "b", 288, 0]);


  Item.defineItem(items.flyingtnt, "flyingtnt", 0, "flying TNT", 0);
  Item.addShapedRecipe(items.flyingtnt, 1, 0, [
    " a ",
    " a ",
    " b "
  ], ["a", 46, 0, "b", 288, 0]);

  Item.defineItem(items.instanttnt, "instanttnt", 0, "instant TNT", 0);
  Item.addShapedRecipe(items.instanttnt, 1, 0, [
    "aaa",
    "aba",
    "aaa"
  ], ["a", 12, 0, "b", 289, 0]);
  Item.setMaxDamage(items.instanttnt, 1000);

  Item.defineItem(items.tntsword, "tntsword", 0, "TNT sword", 1);
  Item.addShapedRecipe(items.tntsword, 1, 0, [
    " a ",
    " a ",
    " b "
  ], ["a", 46, 0, "b", 280, 0]);
  Item.setMaxDamage(items.tntsword, 80);

  //Hyper Tnt sword
  Item.defineItem(items.chickentnt, "chickentnt", 0, "chicken TNT", 0);


  Item.defineItem(items.hypertntsword, "hypertntsword", 0, "Hyper TNT sword", 1);
  Item.addShapedRecipe(items.hypertntsword, 1, 0, [
    " a ",
    " a ",
    " b "
  ], ["a", items.tntsword, 0, "b", 280, 0]);
  Item.setMaxDamage(items.hypertntsword, 200);
  Item.setHandEquipped(items.hypertntsword, 1);


  Item.defineItem(items.pigtnt, "pigtnt", 0, "pig TNT", 0);
  Item.addShapedRecipe(items.pigtnt, 1, 0, [
    "aaa",
    "aba",
    "aaa"
  ], ["a", 319, 0, "b", 46, 0]);

  Item.newArmor(items.tnthelmet, "tnthelmet", 0, "TNT helmet", "armor/tnt_1.png", 6, 399, ArmorType.helmet);
  Item.addShapedRecipe(items.tnthelmet, 1, 0, [
    "aaa",
    "a a",
    "   "
  ], ["a", 46, 0]);

  Item.newArmor(items.tntchestplate, "tntchestplate", 0, "TNT chestplate", "armor/tnt_1.png", 12, 354, ArmorType.chestplate);
  Item.addShapedRecipe(items.tntchestplate, 1, 0, [
    "a a",
    "aaa",
    "aaa"
  ], ["a", 46, 0]);

  Item.newArmor(items.tntleggings, "tntleggings", 0, "TNT leggings", "armor/tnt_2.png", 6, 360, ArmorType.leggings);
  Item.addShapedRecipe(items.tntleggings, 1, 0, [
    "aaa",
    "a a",
    "a a"
  ], ["a", 46, 0]);

  Item.newArmor(items.tntboots, "tntboots", 0, "TNT boots", "armor/tnt_1.png", 2, 351, ArmorType.boots);
  Item.addShapedRecipe(items.tntboots, 1, 0, [
    "a a",
    "a a",
    "   "
  ], ["a", 46, 0]);

  Item.setMaxDamage(items.tntboots, 5000);


}

function createShooterItems() {
  //
  Item.defineThrowable(items.hypershooter, "hypershooter", 0, "Hyper shoter", 1);
  Item.addShapedRecipe(items.hypershooter, 1, 0, [
    " a ",
    "bcb",
    "bcb"
  ], ["a", 46, 0, "b", 265, 0, "c", 331, 0]);



  Item.defineThrowable(items.tntshooter, "tntshooter", 0, "tnt shooter", 0);
  Item.addShapedRecipe(items.tntshooter, 1, 0, [
    " a ",
    "bcb",
    "bcb"
  ], ["a", 46, 0, "b", 265, 0, "c", 331, 0]);

  Item.defineThrowable(items.sheeptntthrower, "sheeptntthrower", 0, "sheep TNT thrower", 0);
  Item.addShapedRecipe(items.sheeptntthrower, 1, 0, [
    " a ",
    "bbb",
    "cdc"
  ], ["a", 46, 0, "b", 35, 0, "c", 265, 0, "d", 331, 0]);

}





function newLevel() {
  //  if(initCreativeItems)
  //  {
  //      Player.addItemCreativeInv(costumValues, 1);
  //    initCreativeItems = false;
  //  }
  //Button setup
  clientMessage("Thanks for using my mod. You can craft a help item with a stick to get started");

  loadTardis();

}

function destroyBlock(x, y, z, side) {
  var destroyedblock = Level.getTile(x, y, z);

  if (Player.getCarriedItem() == items.tntpickaxe) {
    Level.explode(x, y, z, 5);
    ItemDamage(80, items.tntpickaxe);
  }

  if (Player.getCarriedItem() == items.hypertntpickaxe) {
    Level.explode(x, y, z, 10);
    ItemDamage(200, items.hypertntpickaxe);
  }
}

function startDestroyBlock(x, y, z, side) {
  //emeraldpickaxe
  var attemptblock = Level.getTile(x, y, z);
  if (Player.getCarriedItem() == items.emeraldpickaxe) {
    setTile(x, y, z, 0);
  }
  if (attemptblock == 7 && tardis.inside == true) { // bedrock as tardiswall
    Entity.setPosition(Player.getEntity(), tardis.formerposition.x, tardis.formerposition.y, tardis.formerposition.z);
    tardis.inside = false;
    clientMessage(ChatColor.GREEN + "exited the tardis");
  }
  //Lucky blocks
  if (attemptblock == blocks.chest) {
    var essence = Level.getChestSlot(x, y, z, 0);
    if (essence == items.miniluckyessence) {
      randItem(x, y + 1, z);
      setTile(x, y, z, 0);
    }
    if (essence == items.greenluckyessence) {
      randPotion(getPlayerEnt());
    }
    if (essence == items.bigluckyessence) {
      placeRandomBlock(x + 1, y, z);
      placeRandomBlock(x - 1, y, z);
      placeRandomBlock(x, y, z + 1);
      placeRandomBlock(x, y, z - 1);
      placeRandomBlock(x + 1, y, z + 1);
      placeRandomBlock(x - 1, y, z - 1);
      placeRandomBlock(x - 1, y, z + 1);
      placeRandomBlock(x + 1, y, z - 1);
      placeRandomBlock(x, y, z);

      placeRandomBlock(x, y + 2, z);
      placeRandomBlock(x + 1, y + 2, z);
      placeRandomBlock(x - 1, y + 2, z);
      placeRandomBlock(x, y + 2, z + 1);
      placeRandomBlock(x, y + 2, z - 1);
      placeRandomBlock(x + 1, y + 2, z + 1);
      placeRandomBlock(x - 1, y + 2, z - 1);
      placeRandomBlock(x - 1, y + 2, z + 1);
      placeRandomBlock(x + 1, y + 2, z - 1);

      placeRandomBlock(x, y + 1, z);
      placeRandomBlock(x + 1, y + 1, z);
      placeRandomBlock(x - 1, y + 1, z);
      placeRandomBlock(x, y + 1, z + 1);
      placeRandomBlock(x, y + 1, z - 1);
      placeRandomBlock(x + 1, y + 1, z + 1);
      placeRandomBlock(x - 1, y + 1, z - 1);
      placeRandomBlock(x - 1, y + 1, z + 1);
      placeRandomBlock(x + 1, y + 1, z - 1);
    }
    if (essence == items.blueluckyessence) {
      placeRandomBlock(x, y, z);
    }
    if (essence == items.redluckyessence) {
      mobTurm(x, y, z, 0);
      setTile(x, y, z, 0);
    }

    if (essence == items.luckyessence) {
      var rnd = Math.floor(Math.random() * (10));

      if (rnd == 0 || rnd == 1) {
        rnd = Math.floor(Math.random() * (5));
        Level.setTime(8280);
        if (rnd == 0) {
          Level.spawnMob(x + 4, y, z + 4, EntityType.CREEPER);
          Level.spawnMob(x - 4, y, z + 4, EntityType.CREEPER);
          Level.spawnMob(x + 4, y, z - 4, EntityType.CREEPER);
          Level.spawnMob(x - 4, y, z - 4, EntityType.GHAST);
          Entity.addEffect(getPlayerEnt(), MobEffect.poison, 30 * 20, 0, false, true);

        } else if (rnd == 1) {
          Level.spawnMob(x + 4, y, z + 4, EntityType.ZOMBIE);
          Level.spawnMob(x - 4, y, z + 4, EntityType.GHAST);
          Level.spawnMob(x + 4, y, z - 4, EntityType.ZOMBIE);
          Level.spawnMob(x - 4, y, z - 4, EntityType.ZOMBIE);
          Entity.addEffect(getPlayerEnt(), MobEffect.wither, 30 * 20, 0, false, true);
        } else if (rnd == 2) {
          var pig1 = Level.spawnMob(x, y, z, 12);
          var pig2 = Level.spawnMob(x, y, z, 12);
          rideAnimal(pig2, pig1);
          var pig3 = Level.spawnMob(x, y, z, 12);
          rideAnimal(pig3, pig2);
          var pig4 = Level.spawnMob(x, y, z, 12);
          rideAnimal(pig4, pig3);
          var pig5 = Level.spawnMob(x, y, z, 12);
          rideAnimal(pig5, pig4);
          var pig6 = Level.spawnMob(x, y, z, 12);
          rideAnimal(pig6, pig5);

        } else if (rnd == 3) {
          var bob = Level.spawnMob(x + 4, y, z + 4, 41);
          Entity.setNameTag(bob, "BOB");
          var schwein = Level.spawnMob(x - 4, y, z + 4, 12);
          rideAnimal(bob, schwein);

          Entity.addEffect(getPlayerEnt(), MobEffect.wither, 100 * 20, 0, false, true);
        } else {

          Level.explode(x, y, z, 30);
          Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, 120 * 20, 0, false, true);
        }
      } else if (rnd == 2 || rnd == 3 || rnd == 4 || rnd == 5 || rnd == 6 || rnd == 7 || rnd == 8) {
        rnd = Math.floor(Math.random() * (10));

        if (rnd == 0) {
          Level.dropItem(x, y, z, 0, items.tntpickaxe, 1, 0);
          Level.dropItem(x, y, z, 0, 311, 1, 0);
          Level.dropItem(x, y, z, 0, 312, 1, 0);
          Level.dropItem(x, y, z, 0, 313, 64, 0);
          Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, 120 * 20, 2, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 120 * 20, 2, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 120 * 20, 2, false, true);
        } else if (rnd == 1) {
          Level.dropItem(x, y, z, 0, items.hypertntpickaxe, 1, 0);
          Level.dropItem(x, y, z, 0, 347, 1, 0);
          Level.dropItem(x, y, z, 0, 261, 1, 0);
          Level.dropItem(x, y, z, 0, 262, 64, 0);
        } else if (rnd == 2) {
          Level.dropItem(x, y, z, 0, 500, 1, 0);
          Level.dropItem(x, y, z, 0, 299, 1, 0);
          Level.dropItem(x, y, z, 0, 300, 1, 0);
          Level.dropItem(x, y, z, 0, 301, 1, 0);
        } else if (rnd == 3) {
          Level.dropItem(x, y, z, 0, items.chickentnt, 1, 0);
          Level.dropItem(x, y, z, 0, 256, 1, 0);
          Level.dropItem(x, y, z, 0, 257, 1, 0);
        } else if (rnd == 4) {
          pig1 = Level.spawnMob(x, y, z, 12);
          pig2 = Level.spawnMob(x, y, z, 12);
          rideAnimal(pig2, pig1);
          pig3 = Level.spawnMob(x, y, z, 12);
          rideAnimal(pig3, pig2);
          pig4 = Level.spawnMob(x, y, z, 12);
          rideAnimal(pig4, pig3);
          pig5 = Level.spawnMob(x, y, z, 12);
          rideAnimal(pig5, pig4);
          pig6 = Level.spawnMob(x, y, z, 12);
          rideAnimal(pig6, pig5);
        } else if (rnd == 5) {
          Level.dropItem(x, y, z, 0, 391, Math.floor(Math.random() * (6) + 1), 0);
          Entity.addEffect(getPlayerEnt(), MobEffect.jump, 30 * 20, 0, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 120 * 20, 2, false, true);
        } else if (rnd == 6) {
          Level.dropItem(x, y, z, 0, 260, Math.floor(Math.random() * (6) + 1), 0);
          Entity.addEffect(getPlayerEnt(), MobEffect.jump, 30 * 20, 0, false, true);

        } else if (rnd == 7) {
          Level.dropItem(x, y, z, 0, 388, Math.floor(Math.random() * (10) + 1), 0);
          Entity.addEffect(getPlayerEnt(), MobEffect.jump, 30 * 20, 0, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, 120 * 20, 2, false, true);
        } else if (rnd == 8) {
          Level.dropItem(x, y, z, 0, 289, Math.floor(Math.random() * (6) + 1), 0);
          Entity.addEffect(getPlayerEnt(), MobEffect.jump, 30 * 20, 0, false, true);
        } else {
          Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 10000 * 20, 4, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 10000 * 20, 4, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 16000 * 20, 7, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.jump, 18000 * 20, 8, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 24000 * 20, 11, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 20000 * 20, 9, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 28000 * 20, 13, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 28000 * 20, 13, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, 22000 * 20, 10, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, 22000 * 20, 10, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.absorption, 20000 * 20, 9, false, true);
          Player.addItemInventory(401, -1, 0);
          Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.burp", 30, 25);
        }
      } else {
        rnd = Math.floor(Math.random() * (3));

        var playerX = getPlayerX();
        var playerY = getPlayerY();
        var playerZ = getPlayerZ();

        if (rnd == 0) {

          setTile(playerX + 1, playerY - 1, playerZ, 101);
          setTile(playerX + 1, playerY, playerZ, 101);
          setTile(playerX - 1, playerY - 1, playerZ, 101);
          o(playerX - 1, playerY, playerZ, 101);
          setTile(playerX, playerY - 1, playerZ + 1, 101);
          setTile(playerX, playerY - 1, playerZ - 1, 101);
          setTile(playerX, playerY, playerZ + 1, 101);
          setTile(playerX, playerY, playerZ - 1, 101);

          setTile(playerX + 1, playerY - 1, playerZ + 1, 101);
          setTile(playerX + 1, playerY, playerZ + 1, 101);
          setTile(playerX - 1, playerY - 1, playerZ + 1, 101);
          setTile(playerX - 1, playerY, playerZ + 1, 101);
          setTile(playerX + 1, playerY - 1, playerZ - 1, 101);
          setTile(playerX + 1, playerY, playerZ - 1, 101);
          setTile(playerX - 1, playerY - 1, playerZ - 1, 101);
          setTile(playerX - 1, playerY, playerZ - 1, 101);
          setTile(playerX + 1, playerY - 1, playerZ + 1, 101);
          setTile(playerX + 1, playerY, playerZ + 1, 101);
          setTile(playerX - 1, playerY - 1, playerZ + 1, 101);
          setTile(playerX - 1, playerY, playerZ + 1, 101);


          setTile(playerX, playerY + 50, playerZ, 12);
          setTile(playerX, playerY + 51, playerZ, 12);
          setTile(playerX, playerY + 52, playerZ, 12);

          Entity.addEffect(getPlayerEnt(), MobEffect.poison, 120 * 20, 5, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 120 * 20, 2, false, true);
          clientMessage("Bye!!!");

        } else if (rnd == 1) {
          setTile(playerX + 2, playerY, playerZ - 2, 24);
          setTile(playerX - 2, playerY, playerZ + 2, 24);
          setTile(playerX - 2, playerY, playerZ - 2, 24);
          setTile(playerX + 2, playerY, playerZ + 2, 24);
          setTile(playerX + 2, playerY, playerZ, 24);
          setTile(playerX - 2, playerY, playerZ, 24);
          setTile(playerX, playerY, playerZ + 2, 24);
          setTile(playerX, playerY, playerZ - 2, 24);

          setTile(playerX + 2, playerY - 1, playerZ - 2, 24);
          setTile(playerX - 2, playerY - 1, playerZ + 2, 24);
          setTile(playerX - 2, playerY - 1, playerZ - 2, 24);
          setTile(playerX + 2, playerY - 1, playerZ + 2, 24);
          setTile(playerX + 2, playerY - 1, playerZ, 24);
          setTile(playerX - 2, playerY - 1, playerZ, 24);
          setTile(playerX, playerY - 1, playerZ + 2, 24);
          setTile(playerX, playerY - 1, playerZ - 2, 24);

          setTile(playerX + 2, playerY, playerZ - 1, 24);
          setTile(playerX - 2, playerY, playerZ + 1, 24);
          setTile(playerX - 1, playerY, playerZ - 2, 24);
          setTile(playerX + 1, playerY, playerZ + 2, 24);
          setTile(playerX + 1, playerY, playerZ - 2, 24);
          setTile(playerX - 1, playerY, playerZ + 2, 24);
          setTile(playerX - 2, playerY, playerZ - 1, 24);
          setTile(playerX + 2, playerY, playerZ + 1, 24);
          Entity.addEffect(getPlayerEnt(), MobEffect.wither, 100 * 20, 0, false, true);
          setTile(playerX + 2, playerY - 1, playerZ - 1, 24);
          setTile(playerX - 2, playerY - 1, playerZ + 1, 24);
          setTile(playerX - 1, playerY - 1, playerZ - 2, 24);
          setTile(playerX + 1, playerY - 1, playerZ + 2, 24);
          setTile(playerX + 1, playerY - 1, playerZ - 2, 24);
          setTile(playerX - 1, playerY - 1, playerZ + 2, 24);
          setTile(playerX - 2, playerY - 1, playerZ - 1, 24);
          setTile(playerX + 2, playerY - 1, playerZ + 1, 24);

          setTile(playerX, playerY - 2, playerZ, 24);

          setTile(playerX + 1, playerY - 2, playerZ - 1, 24);
          setTile(playerX - 1, playerY - 2, playerZ + 1, 24);
          setTile(playerX - 1, playerY - 2, playerZ - 1, 24);
          setTile(playerX + 1, playerY - 2, playerZ + 1, 24);

          setTile(playerX, playerY - 2, playerZ - 1, 24);
          setTile(playerX, playerY - 2, playerZ + 1, 24);
          setTile(playerX - 1, playerY - 2, playerZ, 24);
          setTile(playerX + 1, playerY - 2, playerZ, 24);


          setTile(playerX + 1, playerY - 1, playerZ - 1, lucky);
          setTile(playerX - 1, playerY - 1, playerZ + 1, lucky);
          setTile(playerX - 1, playerY - 1, playerZ - 1, lucky);
          setTile(playerX + 1, playerY - 1, playerZ + 1, lucky);
          Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 120 * 20, 2, false, true);
          Entity.addEffect(getPlayerEnt(), MobEffect.wither, 100 * 20, 0, false, true);
        } else {
          sheep = Level.spawnMob(x, y + 1, z, 13, "mob/sheep_14.png");
          Entity.setNameTag(sheep, "§cBummmmm!");
          Entity.setVelY(sheep, 3);
          activate = true;
          fire = true;
        }
      }

      Level.destroyBlock(x, y, z, false);
    }
  }
}

function useItem(x, y, z, itemId, blockId, side) {
  if (Level.getTile(x, y + 1, z) == blocks.chest) {
    var essence = Level.getChestSlot(x, y + 1, z, 0);
    if (blockId == blocks.lapisblock && essence == items.tardisessence) {
      //saving position
      tardis.formerposition.x = x;
      tardis.formerposition.y = y + 3;
      tardis.formerposition.z = z;
      clientMessage("welcome to the tardis. tap and hold on the walls to exit. hope you brought torches");

      Entity.setPosition(Player.getEntity(), 0, 25, 0);
      tardis.inside = true;


    }
  }






  if (Player.getCarriedItem() == items.luckypotion) {
    randPotion(Player.getEntity());
  }
  if (Player.getCarriedItem() == items.medicine) {
    Entity.removeAllEffects(Player.getEntity());
  }
  if (Player.getCarriedItem() == 408) {
    Entity.removeAllEffects(Player.getEntity());
  }
  if (Player.getCarriedItem() == items.tntrocket) {
    var rocket = Level.spawnMob(x, y + 1, z, 65);
    Entity.setVelY(rocket, 3);
    Player.addItemInventory(items.tntrocket, -1);
  }


  if (Player.getCarriedItem() == items.pigtnt) {
    pigtnt.pig = Level.spawnMob(x, y + 1, z, 65, "mob/pig.png");
    Level.spawnMob(x, y + 1, z, 65, "mob/pig.png");
    pigtnt.active = true;
    Player.addItemInventory(items.pigtnt, -1);
  }

  if (Player.getCarriedItem() == items.chickentnt && chickentnt.active == false) {
    chickentnt.chicken = Level.spawnMob(x, y, z, 65);
    chickentnt.active = true;
    Player.addItemInventory(items.chickentnt, -1);
  }



  if (Player.getCarriedItem() == items.meteorsheep && meteorsheep.active == false) {
    meteorsheep.sheep = Level.spawnMob(x, y + 1, z, 13, "mob/sheep_14.png");
    Entity.setNameTag(meteorsheep.sheep, "§cBooommmmm!");
    Entity.setVelY(meteorsheep.sheep, 3);
    meteorsheep.active = true;
    Player.addItemInventory(items.meteorsheep, -1);
    Entity.setHealth(meteorsheep.sheep, 3);
  }

  if (Player.getCarriedItem() == items.flyingtnt) {
    flyingtnt.tnt = Level.spawnMob(x, y + 1, z, 65);
    flyingtnt.active = true;
  }

  if (Player.getCarriedItem() == items.instanttnt) {
    instanttnt.active = true;
    instanttnt.health = Entity.getHealth(Player.getEntity());
    Player.setHealth(1000);
    Player.addItemInventory(items.instanttnt, -1);
    Level.explode(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 40);
  }
}


function deathHook(murderer, victim) {
  if (victim == arrowsword.victim) {
    arrowsword.active = false;
    arrowsword.timer = 0;
  }
  if (victim == snowsword.victim) {
    snowsword.active = false;
    snowsword.timer = 0;
  }



  if (victim == meteorsheep.sheep) {
    Level.explode(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 40);
    meteorsheep.timer1 = 0;
    meteorsheep.timer2 = 0;
    meteorsheep.active = false;
  }


}
function entityRemovedHook(e){
  if (e == flyingtnt.tnt) {
    flyingtnt.active = false;
  }
}
function modTick() {
  //variablen für blöcke unterm spieler
  checkChangedCarriedItem();
  var blockUnderPlayer = Level.getTile(Math.floor(Player.getX()), Math.floor(Player.getY()) - 2, Math.floor(Player.getZ()));
  var flatBlockUnderPlayer = Level.getTile(Math.floor(Player.getX()), Math.floor(Player.getY()) - 1, Math.floor(Player.getZ()));

  //essence hooks
  if (blockUnderPlayer == blocks.chest) {
    var essence = Level.getChestSlot(Math.floor(Player.getX()), Math.floor(Player.getY()) - 2, Math.floor(Player.getZ(), 0));
    if (essence == items.jumperessence) {
      Entity.setVelY(Player.getEntity(), 1);
    }
    if (essence == items.elevatoressence) {
      elevator.active = true;
    }
  }


  if (Player.getCarriedItem() == items.enderparachute) {
    if (blockUnderPlayer == 0) {
      var distance = 0;
      while (distance <= 30) {
        distance++;
        if (Level.getTile(Math.floor(Player.getX()), Math.floor(Player.getY()) - distance, Math.floor(Player.getZ())) != 0) {
          Entity.setPosition(Player.getEntity(), Math.floor(Player.getX()), Math.floor(Player.getY()) - distance + 2, Math.floor(Player.getZ()));
        }
      }
    }
  }


  //Shoot snowballs at the target
  if (snowsword.active == true) {
    snowsword.timer++;
    shootAtTarget(0, 20, 0, snowsword.victim, 81);
  }
  if (snowsword.timer == 400) {
    snowsword.active = false;
    snowsword.timer = 0;
  }

  //shoot arrows at the target
  if (arrowsword.active == true) {
    arrowsword.timer++;
    shootAtTarget(0, 40, 0, arrowsword.victim, 80);
  }
  if (arrowsword.timer == 200) {
    arrowsword.active = false;
    arrowsword.timer = 0;
  }
  //Gravity gun
  if (isPickingEntity) {
    var ggMobDirection = lookDir(Entity.getYaw(Player.getEntity()), Entity.getPitch(Player.getEntity()));
    if (getPlayerX() + (ggMobDirection.x * 3) - Entity.getX(ggMob) > 0.5 || getPlayerX() + (ggMobDirection.x * 3) - Entity.getX(ggMob) < -0.5 || getPlayerY() + (ggMobDirection.y * 3) - Entity.getY(ggMob) > 0.5 || getPlayerY() + (ggMobDirection.y * 3) - Entity.getY(ggMob) < -0.5 || getPlayerZ() + (ggMobDirection.z * 3) - Entity.getZ(ggMob) > 0.5 || getPlayerZ() + (ggMobDirection.z * 3) - Entity.getZ(ggMob) < -0.5) {
      Entity.setVelX(ggMob, (Player.getX() + (ggMobDirection.x * 3) - Entity.getX(ggMob)) / 5)
      Entity.setVelY(ggMob, (Player.getY() + (ggMobDirection.y * 3) - Entity.getY(ggMob)) / 5);
      Entity.setVelZ(ggMob, (Player.getZ() + (ggMobDirection.z * 3) - Entity.getZ(ggMob)) / 5);
    } else {
      Entity.setVelX(ggMob, 0);
      Entity.setVelY(ggMob, 0);
      Entity.setVelZ(ggMob, 0);
    }
  }



  if (elevator.active) {
    elevator.timer++;
    Entity.setVelY(Player.getEntity(), 0.2);
    Entity.setVelX(Player.getEntity(), 0);
    Entity.setVelZ(Player.getEntity(), 0);
  }
  if (elevator.timer == 300) {
    elevator.active = false;
    elevator.timer = 0;
  }


  if (Level.getTile(Player.getX(), Player.getY() - 3, Player.getZ()) != 0 && dragonglider.gliding == true) {
    Entity.addEffect(Player.getEntity(), MobEffect.levitation, 20, 10, false, false);
    dragonglider.gliding = false;
  }
  if (dragonglider.gliding == true) {
    Entity.setVelY(Player.getEntity(), -0.01);
  }
  if (Player.getArmorSlot(1) == items.dragonglider && Entity.getVelY(Player.getEntity()) <= -0.5 && dragonglider.gliding == false) {
    dragonglider.gliding = true;
  }

  if (Player.getArmorSlot(items.hoverboots)) {
    Entity.setVelY(Player.getEntity(), 0);
  }

  if (Player.getArmorSlot(1) == items.jetpack) {
    shootEntity(Player.getEntity(), 0.1, 0.1, 0.1);
    Level.addParticle(ParticleType.mobFlame, Player.getX(), Player.getY()-1, Player.getZ(), 0, 0, 10);
  }

  if (Player.getArmorSlot(3) == items.enderboots) {
    if (Entity.getVelY() <= 0.02) {
      Entity.setPosition(Player.getEntity(), Player.getX(), Player.getY()+3, Player.getZ());
      Entity.setVelY(Player.getEntity(), 0);
    }
  }

  if (hypershooter.active) {
    var ShootDir = lookDir(getYaw(), getPitch());
    hypershooter.arrow = Level.spawnMob(getPlayerX() + (ShootDir.x * 2), getPlayerY() + (ShootDir.y * 2), getPlayerZ() + (ShootDir.z * 2), 80);
    shootEntity(hypershooter.arrow, 4, 4, 4);
    shootEntity(Player.getEntity(), -0.2);
    Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.bow", 30, 5);
    hypershooter.timer++;
  }
  if (hypershooter.timer == 100) {
    hypershooter.active = false;
    hypershooter.timer = 0;
  }


  if (Player.getArmorSlot(0) == items.tnthelmet && Player.getArmorSlot(1) == items.tntchestplate &&
    Player.getArmorSlot(2) == items.tntleggings && Player.getArmorSlot(3) == items.tntboots) {
    if (tntarmor.wearing == false) {
      tntarmor.wearing = true;
      Player.setCanFly(1);
      clientMessage("TNT armor active. Maybe try double jumping?")
    }
  } else if (tntarmor.active) {
    tntarmor.active = false;
    Player.setCanFly(0);
  }
  if (tntarmor.active) {
    if (Player.isFlying()) {
      Player.setFlying(0);
      Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), EntityType.TNT);
      setVelY(Player, 1);
      if (blockUnderPlayer == 51) {
        Level.explode(Player.getX(), Player.getY(), Player.getZ(), 4);
      }
    }
  }



  if (pigtnt.active == true) {
    pigtnt.timer++;
    pigtnt.pig = Level.spawnMob(Entity.getX(pigtnt.pig), Entity.getY(pigtnt.pig), Entity.getZ(pigtnt.pig), 12, "mob/pig.png");
    Entity.setNameTag(pigtnt.pig, "pig of awesomeness!!");
  }
  if (pigtnt.timer == 100) {
    pigtnt.active = false;
    pigtnt.timer = 0;
  }

  if (chickentnt.active == true) {
    chickentnt.timer++;
    Level.spawnMob(Entity.getX(chicken), Entity.getY(chicken), Entity.getZ(chicken), 10);
  }
  if (chickentnt.timer == 100) {
    chickentnt.timer = 0;
    chickentnt.active = false;
  }



  if (flyingtnt.active) {
    Entity.setVelY(flyingtnt.tnt, 0.1);
  }


  if (instanttnt.active) {
    instant.timer++;
    if (instanttnt.timer >= 50) {
      Player.setHealth(instanttnt.health());
      instanttnt.timer = 0;
      instanttnt.active = false;
    }
  }


  //meteorsheep start
  if (meteorsheep.active == true) {
    setTile(Entity.getX(meteorsheep.sheep), Entity.getY(meteorsheep.sheep), Entity.getZ(meteorsheep.sheep), 12);
    Entity.setVelX(meteorsheep.sheep, meteorsheep.x);
    Entity.setVelY(meteorsheep.sheep, meteorsheep.y);
    Entity.setVelZ(meteorsheep.sheep, meteorsheep.z);
    meteorsheep.timer1++;
    if (meteorsheep.timer == 20) {
      meteorsheep.timer1 = 0;
      meteorsheep.timer2++;
      meteorsheep.x = randomize(-1, 1);
      meteorsheep.y = randomize(-0.5, 1.5);
      meteorsheep.z = randomize(-1, 1);
    }
    if (meteorsheep.timer2 >= 15) {
      Entity.setVelY(meteorsheep.sheep, 10);
      meteorsheep.timer1 = 0;
      meteorsheep.timer2 = 0;
      meteorsheep.active = false;
    }
  }

}

function attackHook(attacker, victim) {
  //firesword sets player on fire
  if (Player.getCarriedItem() == items.firesword) {
    Entity.setFireTicks(Player.getEntity(), 5);
    Entity.setHealth(Entity.getHealth(victim) - 20);
  }

  //Snowsword rains snowballs
  if (Player.getCarriedItem() == items.snowsword) {
    snowsword.active = true;
    snowsword.victim = victim;
  }

  if (Player.getCarriedItem() == items.arrowsword) {
    arrowsword.victim = victim;
    arrowsword.active = true;
  }

  if (Player.getCarriedItem() == items.lavasword) {
    Level.setTile(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 10);
  }

  if (Player.getCarriedItem() == items.gravitygun) {
    ggMob = victim;
    isPickingEntity = true;
    ItemDamage(200, items.gravitygun);
  }

  if (Player.getCarriedItem() == items.emeraldsword) {
    Entity.setHealth(victim, Entity.getHealth(victim) - 12);
    ItemDamage(100, items.emeraldsword);
  }

  if (Player.getCarriedItem() == items.hypertntsword) {
    Level.explode(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 20);
    ItemDamage(200, items.hypertntsword);
  }
  if (Player.getCarriedItem() == items.tntsword) {
    Level.explode(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 5);
    ItemDamage(80, items.tntsword);
  }
}




function entityAddedHook(added) {

  //TNT makes you faster
  if (Entity.getEntityTypeId(entity) == 65 && Player.getArmorSlot(3) == items.tntboots) {
    Entity.addEffect(getPlayerEnt(), MobEffect.speed, 3 * 20, 0, false, true);
  }


  switch (Entity.getRenderType(added)) {
    case Item.getCustomThrowableRenderType(items.slingshot):
      Entity.remove(added);
      Entity.setCarriedItem(Player.getEntity(), items.slingshot, 1, 0);
      shootEntity(Player.getEntity(), 6, 6, 6);
      break;

    case Item.getCustomThrowableRenderType(items.hypershooter): //hypershooter
      Entity.remove(added);
      Entity.setCarriedItem(Player.getEntity(), items.hypershooter, 1, 0);
      if (hypershooter.active == false) {
        hypershooter.active = true;
      }
      break;

    case Item.getCustomThrowableRenderType(items.gravitygun): //gravitygun
      Entity.remove(added);
      Entity.setCarriedItem(Player.getEntity(), items.gravitygun, 1, 0);
      if (isPickingEntity) {
        shootEntity(ggMob, 4, 4, 4);
        isPickingEntity = false;
      }
      break;

    case Item.getCustomThrowableRenderType(items.tntshooter): //tntshooter
      Entity.remove(added);
      Entity.setCarriedItem(Player.getEntity(), items.tntshooter, 1, 0);
      var ShootDir = lookDir(getYaw(), getPitch());
      arrow = Level.spawnMob(getPlayerX() + (ShootDir.x * 2), getPlayerY() + (ShootDir.y * 2), getPlayerZ() + (ShootDir.z * 2), 65);
      shootEntity(arrow, 4, 4, 4);
      fireThrow = 2;
      break;

    case Item.getCustomThrowableRenderType(items.sheeptntthrower): //sheeptntthrower
      Entity.remove(added);
      var ShootDir = lookDir(getYaw(), getPitch());
      arrow = Level.spawnMob(getPlayerX() + (ShootDir.x * 2), getPlayerY() + (ShootDir.y * 2), getPlayerZ() + (ShootDir.z * 2), 13);
      shootEntity(arrow, 4, 4, 4);
      fireThrow = 1;
      break;
  }

}

function leaveGame() {
  saveTardis();
}

var currentScreen = "null"; // will remain to null if screenChangeHook doesn't work or is not called (for example with BL for MCPE 0.14)
function screenChangeHook(screenName)
{
	switch(screenName)
	{
		case "play_screen - worlds":
		{
			currentScreen = "not_in_game";
			break;
		}
		case "hud_screen":
		{
			if(currentScreen != "not_in_game" && currentScreen != "hud_screen")
			{
				previousCarriedItem = 0;
			}

			currentScreen = "hud_screen";
			break;
		}
		case "creative_inventory_screen":
		case "inventory_screen_pocket":
		case "inventory_screen":
		case "survival_inventory_screen":
		case "pause_screen":
		case "chat_screen":
		case "hopper_screen":
		case "small_chest_screen":
		case "large_chest_screen":
		case "dropper_screen":
		case "dispenser_screen":
		case "furnace_screen":
		case "brewing_stand_screen":
		case "anvil_screen":
		case "horse_screen":
		{
			resetGunsVariables();

			removeShootAndAimButtons();
			removeInfoItemUI();
			removeHealButton();

			currentScreen = screenName;
			break;
		}
	}
}





////////////////////////////////////////
//////CUSTOM FUNKTIONEN/////////////////
////////////////////////////////////////

function ItemDamage(maxDamage, id) {
  var pcid = Player.getCarriedItemData();
  if (pcid !== maxDamage) {
    Entity.setCarriedItem(getPlayerEnt(), id, 1, pcid + 1);
  } else if (pcid == maxDamage) {
    Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.break", 2);
    Entity.setCarriedItem(getPlayerEnt(), 0, 0, 0);
  }
}



function rideEntity(entity) {
  var shootDir = lookDir(getYaw(), getPitch());
  setVelX(entity, shootDir.x * reit);
  setVelZ(entity, shootDir.z * reit);
}


function placeRandomBlock(x, y, z) {
  var rnd = Math.floor(Math.random() * (blockDataValues.length));
  setTile(x, y, z, blockDataValues[rnd], 0);
}

function randPotion(entity) {
  var potionLv = Math.floor(Math.random() * (potionLevels.length));
  var potionId = Math.floor(Math.random() * (potionValues.length));
  Entity.addEffect(entity, potionValues[potionId], 10000 * 20, potionLevels[potionLv], false, true);
}

function randItem(x, y, z) {
  var itemId = Math.floor(Math.random() * (itemValues.length));
  Level.dropItem(x, y, z, 0, itemValues[itemId], 1, 0);
}

function randPassiveMob(x, y, z) {
  var mobId = Math.floor(Math.random() * (passiveMobs.length));
  Level.spawnMob(x, y, z, passiveMobs[mobId]);
}

function randHostileMob(x, y, z) {
  var mobId = Math.floor(Math.random() * (hostileMobs.length));
  Level.spawnMob(x, y, z, hostileMobs[mobId]);
}



function mobTurm(x, y, z, mobid) {
  if (mobid == 0) {
    var mobId = Math.floor(Math.random() * (passiveMobs.length));
    var mob1 = Level.spawnMob(x, y, z, passiveMobs[mobId]);

    var mob2 = Level.spawnMob(x, y, z, passiveMobs[mobId]);
    rideAnimal(mob2, mob1);
    var mob3 = Level.spawnMob(x, y, z, passiveMobs[mobId]);
    rideAnimal(mob3, mob2);
    var mob4 = Level.spawnMob(x, y, z, passiveMobs[mobId]);
    rideAnimal(mob4, mob3);
    var mob5 = Level.spawnMob(x, y, z, passiveMobs[mobId]);
    rideAnimal(mob5, mob4);
    var mob6 = Level.spawnMob(x, y, z, passiveMobs[mobId]);
    rideAnimal(mob6, mob5);
  } else {
    var mob1 = Level.spawnMob(x, y, z, mobid);

    var mob2 = Level.spawnMob(x, y, z, mobid);
    rideAnimal(mob2, mob1);
    var mob3 = Level.spawnMob(x, y, z, mobid);
    rideAnimal(mob3, mob2);
    var mob4 = Level.spawnMob(x, y, z, mobid);
    rideAnimal(mob4, mob3);
    var mob5 = Level.spawnMob(x, y, z, mobid);
    rideAnimal(mob5, mob4);
    var mob6 = Level.spawnMob(x, y, z, mobid);
    rideAnimal(mob6, mob5);
  }
}

function shootEntity(entity, x, y, z) {
  var shootDir = lookDir(getYaw(), getPitch());
  setVelX(entity, shootDir.x * x);
  setVelY(entity, shootDir.y * y);
  setVelZ(entity, shootDir.z * z);
}

function lookDir(yaw, pitch) {
  var direction = new vector3d(0, 0, 0);
  direction.y = -Math.sin(java.lang.Math.toRadians(pitch));
  direction.x = -Math.sin(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
  direction.z = Math.cos(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
  return direction;
}

function vector3d(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

function addHovRenderType(renderer) {
  var model = renderer.getModel();
  var head = model.getPart("head");
  var body = model.getPart("body");
  var rArm = model.getPart("rightArm");
  var lArm = model.getPart("leftArm");
  var rLeg = model.getPart("rightLeg");
  var lLeg = model.getPart("leftLeg");
  head.clear();
  body.clear();
  body.addBox(-30, 0, -7, 60, -5, 10);
  rArm.clear();
  lArm.clear();
  rLeg.clear();
  lLeg.clear();
}

var HovRenderer = Renderer.createHumanoidRenderer();
addHovRenderType(HovRenderer);





function TardisMenu() {
  var x = 170;
  var y = 120;
  var z = 170;
  var plyr = Player.getEntity();
  for (i = 0; i <= 5; i++) {
    for (j = 0; j <= 5; j++) {
      for (k = 0; k < 4; k++) {
        Level.setTile(x - 2 + i, y - 2 + k, z + j - 2, 0);
      }
    }
  }

  var x = 170;
  var y = 8;
  var z = 170;

  //floor
  Level.setTile(Player.getX() + 1, Player.getY() - 1, Player.getZ(), 152);
  Level.setTile(Player.getX() + 1, Player.getY() - 1, Player.getZ() + 1, 133);
}


function Wall(minX, minY, minZ, maxX, maxY, maxZ, mat) {
  for (i = 0; i <= maxX; i++) {
    for (j = 0; j <= maxY; j++) {
      for (k = 0; k < maxZ; k++) {
        Level.setTile(minX - 2 + i, minY - 2 + k, minZ + j - 2, mat);
      }
    }
  }
}

function hugeBlock(minX, minY, minZ, maxX, maxY, maxZ, id) {
  if (minX < maxX && minY < maxY && minZ < maxZ) {
    for (x = minX; x < maxX; x++) {
      for (var y = minY; y < maxY; y++) {
        for (var z = minZ; z < maxZ; z++) {
          setTile(x, y, z, id);
        }
      }
    }
  } else {
    clientMessage("please put in correct values.\n If you happen to see this as a casual player, you just need to know that something went wrong, you can't do anything about it and i'ts all the programmers fault!")
  }
}

function shootAtTarget(xx, yy, zz, target, id) {
  var x = Entity.getX(target);
  var y = Entity.getY(target);
  var z = Entity.getZ(target);
  arrow = Level.spawnMob(x + xx, y + yy, z + zz, id);
  Entity.setVelY(arrow, -2);
}

function flipCoin() {
  var rnd = Math.round(Math.random());
  if (rnd == 0) {
    return false;
  } else {
    return true;
  }
}

function randomize(min, max) {
  return Math.random() * (max - min) + min;
}

Item.newArmor = function(id, iconName, iconIndex, name, texture, damageReduceAmount, maxDamage, armorType)
{
	try
	{
		//Item.newArmor(int id, String iconName, int iconIndex, String name, String texture, int damageReduceAmount, int maxDamage, int armorType)
		Item.defineArmor(id, iconName, iconIndex, name, texture, damageReduceAmount, maxDamage, armorType);
	}catch(e)
	{
		Item.defineArmor(id, "skull_zombie", 0, name, "armor/chain_2.png", damageReduceAmount, maxDamage, armorType);
	}
}

Item.defineItem = function(id, textureName, textureNumber, name, stackLimit)
{
	try
	{
		ModPE.setItem(id, textureName, textureNumber, name, stackLimit);
	}catch(e)
	{
		ModPE.setItem(id, "skull_zombie", 0, name, stackLimit);
	}
}


 function checkChangedCarriedItem(){
  if(currentScreen == "hud_screen" || currentScreen == "null")
  {
    if(Player.getCarriedItem() != previousCarriedItem)
      changeCarriedItemHook(Player.getCarriedItem(), previousCarriedItem);
    else
    {
      // switching between items with same id but different damage for example
      if(Player.getSelectedSlotId() != previousSlotId)
      {
        changeCarriedItemHook(previousCarriedItem, previousCarriedItem);
      }
    }
    previousCarriedItem = Player.getCarriedItem();
    previousSlotId = Player.getSelectedSlotId();
  }
}

function loadTardis() {
  currentActivity.runOnUiThread(new java.lang.Runnable({
    run: function() {
      try {
        var loadFile = java.io.File(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/paperbenni/paperbenni.dat");
        if (loadFile.exists()) {
          // load streams
          var streamInput = new java.io.FileInputStream(loadFile);
          var streamReader = new java.io.InputStreamReader(streamInput);

          var properties = new java.util.Properties();
          properties.load(streamReader);

          tardis.generated = Convert.stringToBoolean(properties.getProperty("tardis", "0"));
          tardis.inside = Convert.stringToBoolean(properties.getProperty("inside", "0"));
          if (tardis.generated && tardis.inside) {
            tardis.formerposition.x = parseInt(properties.getProperty("tardisformerx"));
            tardis.formerposition.y = parseInt(properties.getProperty("tardisformery"));
            tardis.formerposition.z = parseInt(properties.getProperty("tardisformerz"));
            clientMessage("welcome back to the tardis. Remember to tap and hold on a wall to exit");
          }
          // close streams
          streamReader.close();
          streamInput.close();
        } else {
          generateTardis();
          saveTardis();
        }
      } catch (err) {
        clientMessage("Error: " + err);
      }
    }
  }));
}


function saveTardis() {
  var saveFolder = new java.io.File(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/paperbenni-mod");
  saveFolder.mkdirs();
  var saveFile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/paperbenni-mod/paperbenni.dat");
  if (saveFile.exists()) {
    saveFile['delete']();
  }
  saveFile.createNewFile();
  var streamOutput = new java.io.FileOutputStream(saveFile);
  var streamWriter = new java.io.OutputStreamWriter(streamOutput);

  var properties = new java.util.Properties();

  properties.setProperty("tardis", String(tardis.generated));
  properties.setProperty("inside", String(tardis.inside));

  if (tardis.generated && tardis.inside) {
    properties.setProperty("tardisformerx", tardis.formerposition.x1);
    properties.setProperty("tardisformery", tardis.formerposition.x1);
    properties.setProperty("tardisformerz", tardis.formerposition.x1);
  }
  properties.store(streamWriter, "paperbennis modpack");
  streamWriter.close();
  streamOutput.close();
}

function generateTardis() {
  hugeBlock(-20, 20, -20, 20, 30, 20, 7);
  hugeBlock(-19, 21, -19, 19, 29, 0);
  tardis.generated = true;
}
function startup() {
  createEmeraldItems();
  createTntItems();
  createSwordItems();
  createMachineItems();
  createShooterItems();
  createMiscellaniousItems();
}

startup();
