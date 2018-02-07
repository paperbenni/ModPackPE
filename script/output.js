/*
This is my biggest Mod. Thanks for downloading!
Please dont steal my code!!!
*/


//meteor sheep loop
var loop = 0;

//Swords
var snowsword = {
  active: false,
  timer: 0
}

var arrowsword = {
  active: false,
  timer: 0
}

var Mnac = false;
//Tardis

var checkTime = 0;
var confirm = false;
var chac = false;
var confTime = 0;
var conftime = false;
var dactivate = false;
var dLayers = [36, 36, 36];
var save;
var tmch = false;
var pig1;

//Pig tower for luck block
var pig2;
var pig3;
var pig4;
var pig5;
var pig6;



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
  explosivegravitygun: 3013,
  hypertntpickaxe: 3014,
  hypershooter: 3029,
  meteorsheep: 3030,
  flyingtnt: 3031,
  jetpack: 3034,
  dragonglider: 3032,
  speedboots: 3033,
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
}

//Ist bei 3033


const blocks = {
  luckyblock: 210,
  luckyblockblue: 211,
  luckyblockred: 212,
  luckyblockmini: 230,
  luckyblockhuge: 242
}

var target;
var isPickingEntity = false;
var ggMob;
var initCreativeItems = true;
var sheep;
var tardisOpt = false;
var activate = false;
var acctivate = false;
var wider = 0;
var fire = false;
var tnt;
var tower = false
var exp = 0;
var werf;
var water = 0;
var timer = false;
var chicken;
var Huhn = 0;
var rupf = false;
var jump = false;
var fly = 0;
var zeit = 0;
var uhr = 0;
var steak = false;


var pigtnt = {
  active: false,
  timer: 0,
  pig
}


var rocket;
var speed = false;
var fireThrow = 0;
var xBeforeO = -1,
  yBeforeO = -1,
  zBeforeO = -1;
var arrow;
var GUI;
var dauer = false;
var bio = 0;
var ride = false;
var pferd;
var reit = 0.7;
var elevator = false;
var hoch = 0;
var upspeed = 0.4
var pick;
//var luckyEffects = [
const potionLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const potionValues = [1, 3, 5, 8, 10, 21, 11, 12, 13, 14, 2, 4, 18, 9, 19, 20];
//var potionTimes = [
const itemValues = [256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 268, 269, 270, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 323, 324, 325, 328, 329, 330, 331, 332, 333, 334, 336, 337, 338, 339, 340, 341, 344, 345, items.emeraldpickaxe, 347, 348, 351, 352, 352, 353, 354, 355, 357, 359, 360, 261, 362, 363, 364, 365, 366, 383, 388, 391, 392, 393, 405, 406, 457, 458, 459];

const mobValues = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];
const blockDataValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 15, 16, 17, 18, 20, 21, 22, 24, 26, 30, 31, 32, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 71, 73, 74, 78, 79, 80, 81, 82, 83, 85, 87, 89, 92, 95, 98, 102, 103, 105, 107, 109, 108, 112, 114, 128, 155, 156, 245, 246, 247, 248, 249, 253, 254, 255];
//Item.addShapedRecipe(70, 1, 0, [

Block.defineBlock(70, " §2lucky block green edition", ["anvil_top_damaged_x", 0], 46, false, 0);
Block.setDestroyTime(70, 0.01);


//Tardis
Block.defineBlock(28, "Tardis", ["lapis_block", 0], 46, false, 0);
Block.setDestroyTime(28, 5);
Block.setShape(28, 0, 0, 0, 1, 2, 1);
Item.addShapedRecipe(28, 1, 0, [
  " a ",
  " a ",
  " b "
], ["a", 22, 0, "b", 247, 0]);

Block.defineBlock(176, "§d§e§9Lucky Block blue edition", [
  ["luckyblockblue", 0]
], 3, true, 0);
Block.setDestroyTime(176, 0.01);
//Item.addShapedRecipe(176, 1, 0, [

Block.defineBlock(34, " §clucky block red edition", ["luckyblockred", 0], 46, false, 0);
//Item.addShapedRecipe(34, 1, 0, [25, 1, 0, 23, 1, 0]);
Block.setDestroyTime(34, 0.01);

Block.defineBlock(77, "mini lucky block", ["luckyblockmini", 0], 46, false, 0);
Block.setDestroyTime(77, 0.01);
//Item.addCraftRecipe(77, 2, 0, [55, 1, 0]);
Block.setShape(77, 4 / 16, 0, 4 / 16, 12 / 16, 8 / 16, 12 / 16);

Block.defineBlock(84, "§6Huge lucky Block", ["luckyblockhuge", 0], 46, false, 0);
Block.setDestroyTime(84, 0.01);
Block.setShape(84, -1, 0, -1, 2, 3, 2);

Block.defineBlock(25, "jumper", [
  ["cauldron_top", 0],
  ["command_block", 0],
  ["cauldron_side", 0],
  ["cauldron_side", 0],
  ["cauldron_side", 0],
  ["cauldron_side", 0]
], 46, false, 0);
Item.addCraftRecipe(25, 4, 0, [265, 1, 0]);
Block.setDestroyTime(25, 0.01);

Block.defineBlock(55, "lucky block", ["luckyblock", 0], 46, false, 0);
Item.addCraftRecipe(55, 4, 0, [266, 1, 0]);
Block.setDestroyTime(55, 0.01);

Block.defineBlock(36, "Tardis floor", ["lapis_block", 0], 46, false, 0);
Block.setLightLevel(36, 15);
Block.setDestroyTime(36, 9999);



//Emerald armor
Item.defineArmor(items.emeraldhelmet, "emeraldhelmet", 0, "emerald helmet", "armor/emerald_1.png", 3, 351, ArmorType.helmet);
Item.addShapedRecipe(items.emeraldhelmet, 1, 0, [
  "aaa",
  "a a",
  "   "
], ["a", items.emeraldingot, 0]);

Item.defineArmor(items.emeraldchestplate, "emeraldchestplate", 0, "emerald chestplate", "armor/emerald_1.png", 8, 351, ArmorType.chestplate);
Item.addShapedRecipe(items.emeraldchestplate, 1, 0, [
  "a a",
  "aaa",
  "aaa"
], ["a", items.emeraldingot, 0]);

Item.defineArmor(items.emeraldleggings, "emeraldleggings", 0, "emerald leggings", "armor/emerald_2.png", 5, 351, ArmorType.leggings);
Item.addShapedRecipe(items.emeraldleggings, 1, 0, [
  "aaa",
  "a a",
  "a a"
], ["a", items.emeraldingot, 0]);

Item.defineArmor(items.emeraldboots, "emeraldboots", 0, "emerald boots", "armor/emerald_1.png", 7, 351, ArmorType.boots);
Item.addShapedRecipe(items.emeraldboots, 1, 0, [
  "a a",
  "a a",
  "   "
], ["a", items.emeraldingot, 0]);

//Item.newArmor(LONG_FALL_BOOTS_ID,"longfallboots",0,"Long Fall Boots","armor/longfallboots.png",1,LONG_FALL_BOOTS_MAX_DAMAGE,ArmorType.boots);

//emerald recipie ingredients
ModPE.setItem(items.emeralddust, "emeralddust", 0, "emerald dust", 0);
Item.addShapedRecipe(items.emeralddust, 4, 0, [
  " a ",
  "   ",
  "   "
], ["a", 388, 0]);

ModPE.setItem(items.emeraldingot, "emeraldingot", 0, "emerald ingot", 0);
Item.addShapedRecipe(items.emeraldingot, 1, 0, [
  "  a",
  " b ",
  "   "
], ["a", items.emeralddust, 0, "b", 266, 0]);

//Emeralddsword
ModPE.setItem(items.emeraldsword, "emeraldsword", 0, "emerald sword", 0);
Item.addShapedRecipe(items.emeraldsword, 1, 0, [
  " a ",
  " a ",
  " b "
], ["a", items.emeraldingot, 0, "b", 280, 0]);
Item.setMaxDamage(items.emeraldsword, 100);
Item.setHandEquipped(items.emeraldsword, 1);


//Emerald pickaxe
ModPE.setItem(items.emeraldpickaxe, "emeraldpickaxe", 0, "emerald pickaxe", 0);
Item.addShapedRecipe(items.emeraldpickaxe, 1, 0, [
  "aaa",
  " b ",
  " b "
], ["a", items.emeraldingot, 0, "b", 280, 0]);
Item.setMaxDamage(items.emeraldpickaxe, 100);
Item.setHandEquipped(items.emeraldpickaxe, 1);


//Emerald shovel
ModPE.setItem(items.emeraldshowel, "emeraldshowel", 0, "emerald showel", 0);
Item.addShapedRecipe(items.emeraldshowel, 1, 0, [
  " a ",
  " b ",
  " b "
], ["a", items.emeraldingot, 0, "b", 280, 0]);
Item.setMaxDamage(items.emeraldshovel, 200);
Item.setHandEquipped(items.emeraldshovel, 1);


//Special swords
ModPE.setItem(items.firesword, "firesword", 0, "fire sword", 1);
Item.setHandEquipped(items.firesword, 1);

ModPE.setItem(431, "luckypotion", 0, "lucky potion");

ModPE.setItem(items.lavasword, "lavasword", 0, "lava sword");
Item.setHandEquipped(items.lavasword, 1);

ModPE.setItem(items.watersword, "watersword", 0, "water sword");
Item.setHandEquipped(items.watersword, 1);

ModPE.setItem(items.arrowsword, "arrowsword", 0, "arrow sword");

ModPE.setItem(items.snowsword, "snowsword", 0, "snow sword", 0);
Item.addShapedRecipe(items.snowsword, 1, 0, [
  " a ",
  " a ",
  " b "
], ["a", 80, 0, "b", 280, 0]);
Item.setHandEquipped(items.snowsword, 1);

Item.setHandEquipped(items.tntpickaxe, 1);
ModPE.setItem(items.hypertntpickaxe, "hypertntpickaxe", 0, "Hyper TNT pickaxe", 1);
Item.setHandEquipped(items.hypertntpickaxe, 1);


Item.setHandEquipped(items.hypertntsword, 1);


ModPE.setItem(428, "removealleffects", 0, "medicine");

//Item.addShapedRecipe(
Item.setMaxDamage(items.explosivegravitygun, 200);

//ModPE.setFoodItem(id, iconName, offset, halfhearts, name, maxStack)

ModPE.setItem(items.slingshot, "slingshot", 0, "slingshot");
Item.addShapedRecipe(items.slingshot, 1, 0, [
  "a a",
  " b ",
  "a a"
], ["a", 46, 0, "b", 264, 0]);
Item.setHandEquipped(items.slingshot, 1);


//
ModPE.setItem(items.hypershooter, "hypershooter", 0, "Hyper shoter"); //
ModPE.setItem(472, "tntshooter", 0, "tnt shooter", 0); //
ModPE.setItem(items.sheeptntthrower, "sheeptntthrower", 0, "sheep TNT thrower", 0);
ModPE.setItem(items.tntrocket, "tntrocket", 0, "TNT rocket");
Item.addShapedRecipe(items.tntrocket, 1, 0, [
  " a ",
  " b ",
  "   "
], ["a", 46, 0, "b", 288, 0]);

ModPE.setItem(items.meteorsheep, "meteorsheep", 0, "Meteor sheep", 0);
ModPE.setItem(items.flyingtnt, "flyingtnt", 0, "flying TNT", 0);


ModPE.setItem(items.instanttnt, "instanttnt", 0, "instant TNT", 0);
Item.setMaxDamage(items.instanttnt, 1000);


ModPE.setItem(items.tntsword, "tntsword", 0, "TNT sword", 1);
Item.addShapedRecipe(items.tntsword, 1, 0, [
  " a ",
  " a ",
  " b "
], ["a", 46, 0, "b", 280, 0]);
Item.setMaxDamage(items.tntsword, 80);


ModPE.setItem(items.chickentnt, "chickentnt", 0, "chicken TNT", 0);
ModPE.setItem(items.hypertntsword, "hypertntsword", 0, "Hyper TNT sword", 1);
ModPE.setItem(items.pigtnt, "pigtnt", 0, "pig TNT", 0); //ok
ModPE.setItem(items.tntpickaxe, "tntpickaxe", 0, "TNT pickaxe", 1);
Item.setMaxDamage(items.tntpickaxe, 80);

ModPE.setItem(items.explosivegravitygun, "explosivegravitygun", 0, "explosive gravity gun", 0);


//Item.setHandEquipped(

Item.defineArmor(items.tntboots, "tntboots", 0, "TNT boots", "armor/tnt_1.png", 2, 351, ArmorType.boots);
Item.addShapedRecipe(items.tntboots, 1, 0, [
  "a a",
  "a a",
  "   "
], ["a", 46, 0]);
Item.setMaxDamage(items.tntboots, 5000);

Item.defineArmor(items.tntleggings, "tntleggings", 0, "TNT leggings", "armor/tnt_2.png", 6, 360, ArmorType.leggings);
Item.defineArmor(items.tntchestplate, "tntchestplate", 0, "TNT chestplate", "armor/tnt_1.png", 12, 354, ArmorType.chestplate);
Item.defineArmor(items.tnthelmet, "tnthelmet", 0, "TNT helmet", "armor/tnt_1.png", 6, 399, ArmorType.helmet);
Item.defineArmor(items.speedboots, "speedboots", 0, "speed boots", "armor/tnt_1.png", 2, 315, ArmorType.boots);
Item.defineArmor(items.jetpack, "jetpack", 0, "jetpack", "armor/tntarmor.png", 2, 353, ArmorType.chestplate);
Item.defineArmor(items.dragonglider, "dragonglider", 0, "dragon glider", "armor/dragon.png", 2, 351, ArmorType.chestplate);

Item.setMaxDamage(items.hypertntsword, 200);
Item.setMaxDamage(items.hypertntpickaxe, 200);





//Item.addShapedRecipe(
Item.addShapedRecipe(items.meteorsheep, 1, 0, [
  "wtw",
  "twt",
  "wtw"
], ["w", 35, 0, "t", 46, 0]);
Item.addShapedRecipe(items.hypertntsword, 1, 0, [
  " a ",
  " a ",
  " b "
], ["a", items.tntsword, 0, "b", 280, 0]);

Item.addShapedRecipe(items.tntleggings, 1, 0, [
  "aaa",
  "a a",
  "a a"
], ["a", 46, 0]);
Item.addShapedRecipe(items.tntchestplate, 1, 0, [
  "a a",
  "aaa",
  "aaa"
], ["a", 46, 0]);
Item.addShapedRecipe(items.tnthelmet, 1, 0, [
  "aaa",
  "a a",
  "   "
], ["a", 46, 0]);
Item.addShapedRecipe(items.jetpack, 1, 0, [
  "aba",
  "a a",
  "c c"
], ["a", 265, 0, "b", 331, 0, "c", 325, 10]);
Item.addShapedRecipe(items.dragonglider, 1, 0, [
  "aaa",
  "b b",
  " c "
], ["a", 35, 0, "b", 265, 0, "c", 334, 0]);

Item.addShapedRecipe(items.hypershooter, 1, 0, [
  " a ",
  "bcb",
  "bcb"
], ["a", 46, 0, "b", 265, 0, "c", 331, 0]);
Item.addShapedRecipe(472, 1, 0, [
  " a ",
  "bcb",
  "bcb"
], ["a", 46, 0, "b", 265, 0, "c", 331, 0]);
Item.addShapedRecipe(items.sheeptntthrower, 1, 0, [
  " a ",
  "bbb",
  "cdc"
], ["a", 46, 0, "b", 35, 0, "c", 265, 0, "d", 331, 0]);

Item.addShapedRecipe(items.pigtnt, 1, 0, [
  "aaa",
  "aba",
  "aaa"
], ["a", 319, 0, "b", 46, 0]);
Item.addShapedRecipe(items.flyingtnt, 1, 0, [
  " a ",
  " a ",
  " b "
], ["a", 46, 0, "b", 288, 0]);
Item.addShapedRecipe(items.instanttnt, 1, 0, [
  "aaa",
  "aba",
  "   "
], ["a", 46, 0, "b", 265, 0]);
Item.addShapedRecipe(items.tntpickaxe, 1, 0, [
  "aaa",
  " b ",
  " b "
], ["a", 46, 0, "b", 280, 0]);
Item.addShapedRecipe(items.hypertntpickaxe, 1, 0, [
  "aaa",
  " b ",
  " b "
], ["a", 46, 0, "b", 265, 0]);
//Item.addShapedRecipe(


var lucky = 55;
var lucki = 176;

function newLevel() {
  //  if(initCreativeItems)
  //  {
  //      Player.addItemCreativeInv(costumValues, 1);
  //    initCreativeItems = false;
  //  }
  //Button setup
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
      try {
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);

        var button = new android.widget.Button(ctx);
        button.setText('-:-');
        button.setOnClickListener(new android.view.View.OnClickListener({
          onClick: function(viewarg) {
            if (Player.getCarriedItem() == items.slingshot) {
              shootEntity(Player.getEntity(), 6, 6, 6);
            }

            if (Player.getCarriedItem() == items.explosivegravitygun && isPickingEntity) {
              shootEntity(ggMob, 4, 4, 4);
              isPickingEntity = false;
            }
            if (Player.getCarriedItem() == items.hypershooter && dauer == false) {
              dauer = true;
            }
            if (Player.getCarriedItem() == 472) {
              var ShootDir = lookDir(getYaw(), getPitch());
              arrow = Level.spawnMob(getPlayerX() + (ShootDir.x * 2), getPlayerY() + (ShootDir.y * 2), getPlayerZ() + (ShootDir.z * 2), 65);
              shootEntity(arrow, 4, 4, 4);
              fireThrow = 2;
            }
            if (Player.getCarriedItem() == items.sheeptntthrower) {
              var ShootDir = lookDir(getYaw(), getPitch());
              arrow = Level.spawnMob(getPlayerX() + (ShootDir.x * 2), getPlayerY() + (ShootDir.y * 2), getPlayerZ() + (ShootDir.z * 2), 13);
              shootEntity(arrow, 4, 4, 4);
              fireThrow = 1;
            }

          }
        }));
        layout.addView(button);
        GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
        GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 90, 0);
      } catch (err) {
        print('An error occured: ' + err);
      }
    }
  }));


  jump = true;
}

function destroyBlock(x, y, z, side) {

  var destroyedblock = Level.getTile(x, y, z);

  if (destroyBlock == 70) {
    randPotion(getPlayerEnt());
  }

  if (destroyedblock == 77) {
    randItem(x, y, z);
    setTile(x, y, z, 0);
  }
  if (destroyedblock == 84) {
    gluck(x + 1, y, z);
    gluck(x - 1, y, z);
    gluck(x, y, z + 1);
    gluck(x, y, z - 1);
    gluck(x + 1, y, z + 1);
    gluck(x - 1, y, z - 1);
    gluck(x - 1, y, z + 1);
    gluck(x + 1, y, z - 1);
    gluck(x, y, z);

    gluck(x, y + 2, z);
    gluck(x + 1, y + 2, z);
    gluck(x - 1, y + 2, z);
    gluck(x, y + 2, z + 1);
    gluck(x, y + 2, z - 1);
    gluck(x + 1, y + 2, z + 1);
    gluck(x - 1, y + 2, z - 1);
    gluck(x - 1, y + 2, z + 1);
    gluck(x + 1, y + 2, z - 1);

    gluck(x, y + 1, z);
    gluck(x + 1, y + 1, z);
    gluck(x - 1, y + 1, z);
    gluck(x, y + 1, z + 1);
    gluck(x, y + 1, z - 1);
    gluck(x + 1, y + 1, z + 1);
    gluck(x - 1, y + 1, z - 1);
    gluck(x - 1, y + 1, z + 1);
    gluck(x + 1, y + 1, z - 1);
  }
  if (destroyedblock == 34) {
    turm(x, y, z, 0);
    setTile(x, y, z, 0);
  }
  if (destroyedblock == lucki) {
    gluck(x, y, z);
  }
  if (destroyedblock == lucky) {
    var rnd = Math.floor(Math.random() * (10));

    if (rnd == 0 || rnd == 1) {
      rnd = Math.floor(Math.random() * (5));

      Level.setTime(8280);

      if (rnd == 0) {
        Level.spawnMob(x + 4, y, z + 4, 33);
        Level.spawnMob(x - 4, y, z + 4, 33);
        Level.spawnMob(x + 4, y, z - 4, 33);
        Level.spawnMob(x - 4, y, z - 4, 41);
        Entity.addEffect(getPlayerEnt(), MobEffect.poison, 30 * 20, 0, false, true);
      } else if (rnd == 1) {
        Level.spawnMob(x + 4, y, z + 4, 32);
        Level.spawnMob(x - 4, y, z + 4, 41);
        Level.spawnMob(x + 4, y, z - 4, 32);
        Level.spawnMob(x - 4, y, z - 4, 32);
        Entity.addEffect(getPlayerEnt(), MobEffect.wither, 30 * 20, 0, false, true);
      } else if (rnd == 2) {
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

  if (Player.getCarriedItem() == items.tntpickaxe) {
    Level.explode(x, y, z, 5);
    Schwert(80, items.tntpickaxe);
  }
  if (Player.getCarriedItem() == items.hypertntpickaxe) {
    Level.explode(x, y, z, 10);
    Schwert(200, items.hypertntpickaxe);
  }
}

function startDestroyBlock(x, y, z, side) {
  if (Player.getCarriedItem() == items.emeraldpickaxe) {
    setTile(x, y, z, 0);
  }
}

function useItem(x, y, z, itemId, blockId, side) {
  if (blockId == 28) {
    clientMessage("Welcome to the Tardis");
    clientMessage(ChatColor.GREEN + "Tap the Greeen Block to enter it");
    clientMessage(ChatColor.RED + "Tap the red block to reset the Tardis");
    clientMessage("If you are in the Tardis the first time click the red block");
    var plyr = Player.getEntity();
    setTile(170, 118, 170, 95);
    Level.setTile(171, 120, 170, 133);
    Level.setTile(171, 120, 171, 152);
    Entity.setPosition(plyr, 170, 120, 170);


    Mnac = true;
    tardOpt = true;
    Player.setCanFly(1);
    save = Level.spawnMob(x, y + 20, z, 13);
    setTile(x, y + 17, z, 1);
    Entity.setHealth(save, 9999);
    tmch = true;
    //Tardis(0, 0);
    // checkTardis();
    //chac=true;
  }
  if (blockId == 152 && tardOpt == true) {
    Tardis(0, 0);
    TardOpt = false;
    Player.setFlying(0);
    //confirm=false;
    Mnac = false;
  }
  /*
  if(blockId==152&&confirm==false){
  clientMessage(ChatColor.RED + "are you sure to reset the Tardis?");
  clientMessage(ChatColor.RED + "All your stuff in it will be destroyed!!");
  clientMessage(ChatColor.RED + "Tapp again to confirm.");
  conftime=true;
  }
  */
  if (blockId == 133 && tardOpt == true) {
    var plyr = Player.getEntity();
    Entity.setPosition(plyr, 0, 6, 0);
    tardOpt = false;
    Mnac = false;
    Player.setFlying(0);


  }

  if (tmch == true && blockId == 71) {
    setPosition(Player.getEntity(), Entity.getX(save), Entity.getY(save) - 13, Entity.getZ(save));
    tmch = false;
    Player.setFlying(0);
    Player.setCanFly(0);
    Entity.setHealth(save, 0);
    setTile(Entity.getX(save), Entity.getY(save) - 1, Entity.getZ(save), 0);
  }

  if (Player.getCarriedItem() == 431) {
    randPotion(Player.getEntity());
  }
  if (Player.getCarriedItem() == 428) {
    Entity.removeAllEffects(Player.getEntity());
  }
  if (Player.getCarriedItem() == 408) {
    Entity.removeAllEffects(Player.getEntity());
  }
  if (Player.getCarriedItem() == items.tntrocket) {
    rocket = Level.spawnMob(x, y + 1, z, 65);
    Entity.setVelY(rocket, 3);
    Player.addItemInventory(items.tntrocket, -1);
  }
  if (Player.getCarriedItem() == items.tntboots) {
    Player.setArmorSlot(3, items.tntboots, 0);
    Player.addItemInventory(items.tntboots, -1);
  }
  if (Player.getCarriedItem() == items.pigtnt) {
    pigtnt.pig = Level.spawnMob(x, y + 1, z, 65, "mob/pig.png");
    Level.spawnMob(x, y + 1, z, 65, "mob/pig.png");
    pigtnt.active = true;
    Player.addItemInventory(items.pigtnt, -1);
  }
  if (Player.getCarriedItem() == items.chickentnt && rupf == false) {
    chicken = Level.spawnMob(x, y, z, 65);
    rupf = true;
    Player.addItemInventory(items.chickentnt, -1);
  }
  if (Player.getCarriedItem() == items.meteorsheep && activate == false) {
    sheep = Level.spawnMob(x, y + 1, z, 13, "mob/sheep_14.png");
    Entity.setNameTag(sheep, "§cBummmmm!");
    Entity.setVelY(sheep, 3);
    activate = true;
    fire = true;
    Player.addItemInventory(items.meteorsheep, -1);
    Entity.setHealth(sheep, 3);
  }
  if (Player.getCarriedItem() == items.flyingtnt) {
    tnt = Level.spawnMob(x, y + 1, z, 65, "mob/creeper.png");
    Entity.setVelY(tnt, 3);
    tower = true;
    Player.addItemInventory(items.tntchestplate, -1);
  }
  if (Player.getCarriedItem() == items.instanttnt) {
    werf = Level.spawnMob(x, y + 1, z, 65, "mob/creeper.png");
    Entity.setVelY(werf, 5);
    timer = true;
    Player.addItemInventory(items.instanttnt, -1);
  }
}


function deathHook(murderer, victim) {
  if (victim == target) {
    arrowsword.active = false;
    arrowsword.timer = 0;
  }
  if (victim == sheep) {
    Level.explode(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 40);
    loop = 0;
    wider = 0;
    fire = false;
  }
}
//function entityRemovedHook(e){
//if(Entity.getEntityTypeId(e)==33&&Player.getArmorSlot(1), items.tntchestplate){
//Player.setHealth(20);
//}
//}
function modTick() {
  if (conftime == true) {
    confTime++;
  }
  if (confTime == 2) {
    confirm = true;
  }
  if (Player.getCarriedItem() == items.lavasword) {
    Level.addParticle(ParticleType.lava, Player.getX(), Player.getY(), Player.getZ(), 0, 0.3, 0, 400);
  }

  if (Mnac == true) {
    setTile(Player.getX() + 1, Player.getY(), Player.getZ(), 133);
    setTile(Player.getX() - 1, Player.getY(), Player.getZ(), 152);
    Player.setFlying(1);
    Entity.setPosition(Player.getEntity(), 170.5, 120, 170);
  }
  if (chac == true) {
    checkTime++;
  }
  if (checkTime == 2 && check == false) {
    Tardis(0, 0);
  }
  if (checkTime == 4 && check == true) {
    var plyr = Player.getEntity();
    Entity.setPosition(plyr, 0, 6, 0);
    Player.setCanFly(1);
    save = Level.spawnMob(x, y + 20, z, 13);
    setTile(x, y + 17, z, 1);
    Entity.setHealth(save, 9999);
    tmch = true;
  }
  //Shoot snowballs at the target
  if (snowsword.active == true) {
    snowsword.timer++;
    shootAtTarget(0, 20, 0, target, 81);
  }
  if (snowsword.timer == 400) {
    snowsword.active = false;
    arrowsword.timer = 0;
  }

  //shoot arrows at the target
  if (arrowsword.active == true) {
    arrowsword.timer++;
    shootAtTarget(0, 40, 0, target, 80);
  }

  if (arrowsword.timer == 200) {
    arrowsword.active = false;
    arrowsword.timer = 0;
  }

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

  if (Level.getTile(Player.getX(), Player.getY(), Player.getZ()) == 55) {
    elevator = true;
  }

  if (elevator == true) {
    hoch++;
    Entity.setVelY(Player.getEntity(), 0.5, 0.5, 0.5);
    setTile(Player.getX(), Player.getY(), Player.getZ, 55);
  }

  if (hoch == 300) {
    elevator = false;
    hoch = 0;
  }
  if ((Player.getX(), Player.getY() - 3, Player.getZ()) && ride == true) {
    Entity.remove(pferd);
    var player = Player.getEntity();
    Entity.setHealth(Entity.getRider(player), 0);
    ride = false;
  }
  if (ride == true) {
    rideEntity(pferd);
  }
  if (Entity.getVelY(Player.getEntity()) <= -0.5 && Player.getArmorSlot(1) == items.dragonglider && ride == false) {
    pferd = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 10);
    Entity.setHealth(pferd, 1000);
    rideAnimal(Player.getEntity(), pferd);
    ride = true;
    Entity.addEffect(pferd, MobEffect.invisibility, 22000 * 20, 10, false, false);
    var brett = Level.spawnMob(Player.getX(), Player.getY() + 1, Player.getZ(), 10, "mob/black.png");
    Entity.setHealth(brett, 1);
    Entity.setRenderType(brett, HovRenderer.renderType);
    Entity.rideAnimal(brett, Player.getEntity());
  }
  if (ride == true) {
    rideEntity(pferd);
  }
  if (Player.getArmorSlot(1) == items.jetpack) {
    shootEntity(Player.getEntity(), 0.3, 0.3, 0.3);
  }
  if (dauer == true && Player.getCarriedItem() == items.hypershooter) {
    var ShootDir = lookDir(getYaw(), getPitch());
    arrow = Level.spawnMob(getPlayerX() + (ShootDir.x * 2), getPlayerY() + (ShootDir.y * 2), getPlayerZ() + (ShootDir.z * 2), 80);
    shootEntity(arrow, 4, 4, 4);
    Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.bow", 30, 5);
    bio++;

  }

  if (bio == 100) {
    dauer = false;
    bio = 0;
  }
  if (Player.getArmorSlot(3) == items.tntboots) {
    setTile(Player.getX(), Player.getY() - 2, Player.getZ(), 46);
  }
  if (pigtnt.active == true) {
    pigtnt.timer = pigtnt.timer + 1;
  }
  if (pigtnt.active == true) {
    var schwein = Level.spawnMob(Entity.getX(pigtnt.pig), Entity.getY(pigtnt.pig), Entity.getZ(pigtnt.pig), 12, "mob/pig.png");
    Entity.setNameTag(schwein, "pig of awesomeness!!");
  }
  if (uhr == 100) {
    steak = false;
    uhr = 0;
  }
  if (jump == true) {
    fly++;
  }
  if (fly == 70) {
    jump = false;
    fly = 0;
  }
  if (rupf == true) {
    Huhn++;
  }
  if (Huhn == 100) {
    Huhn = 0;
    rupf = false;
  }
  if (rupf == true) {
    Level.spawnMob(Entity.getX(chicken), Entity.getY(chicken), Entity.getZ(chicken), 10);
  }
  if (Player.getCarriedItem() == items.instanttnt) {
    setTile(Player.getX(), Player.getY() + 20, Player.getZ(), 46);
    setTile(Player.getX(), Player.getY() + 21, Player.getZ(), 51);
    Schwert(1000, items.instanttnt);
  }
  if (timer == true) {
    water++
    Level.addParticle(ParticleType.mobFlame, Entity.getX(werf), Entity.getY(werf), Entity.getZ(werf), 0, 0, 10);
  }
  if (water == 100) {
    water = 0;
    timer = false;
    clientMessage(ChatColor.RED + "BUMMM!");
  }
  if (tower == true) {
    exp++;
    setTile(Entity.getX(tnt), Entity.getY(tnt), Entity.getZ(tnt) + 1, 46);
    Level.addParticle(ParticleType.heart, Entity.getX(tnt), Entity.getY(tnt), Entity.getZ(tnt), 0, 0, 10);
  }
  if (exp == 99) {
    tower = false;
    exp = 0;
  }
  if (activate == true) {
    setTile(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 12);
    loop++;
    wider++;
  }
  if (loop == 30) {
    Entity.setVelX(sheep, 2);
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 65);
  }
  if (loop == 35) {
    Entity,
    setVelY(sheep, 1);
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 65);
  }
  if (loop == 40) {
    Entity.setVelZ(sheep, 2);
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 65);
  }
  if (loop == 45) {
    Entity.setVelY(sheep, 1);
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 65);
  }
  if (loop == 50) {
    Entity.setVelX(sheep, -2);
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 65);
  }
  if (loop == 30) {
    Entity.setVelY(sheep, 1);
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 65);
  }
  if (loop == 55) {
    Entity.setVelZ(sheep, -2);
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 65);
  }
  if (wider == 60) {
    loop = 0;
  }
  if (wider == 120) {
    loop = 0;
  }
  if (wider == 130) {
    Entity.setVelY(sheep, 5);
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 65);
  }
  if (wider == 160) {
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep) - 5, Entity.getZ(sheep), 10);
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep) + 5, 10);
    Level.spawnMob(Entity.getX(sheep) + 5, Entity.getY(sheep), Entity.getZ(sheep), 10);
    Level.spawnMob(Entity.getX(sheep) - 5, Entity.getY(sheep), Entity.getZ(sheep), 10);
    Level.spawnMob(Entity.getX(sheep), Entity.getY(sheep) + 4, Entity.getZ(sheep), 10);
    wider = 0;
    activate = false;
    loop = 0;
    Entity.setVelY(sheep, 5);
  }
  if (fire == true) {
    Level.addParticle(ParticleType.mobFlame, Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 0, 0, 10);
    Level.addParticle(ParticleType.lava, Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 0, 0, 10);
  }
}

function attackHook(attacker, victim) {
  //firesword sets mobs on fire
  if (Player.getCarriedItem() == items.firesword) {
    Entity.setFireTicks(victim, 5);
  }

  //Snowsword rains snowballs
  if (Player.getCarriedItem() == items.snowsword) {
    snowsword.active = true;
    target = victim;
  }

  if (Player.getCarriedItem() == items.lavasword) {
    Level.setTile(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 10);
  }

  if (Player.getCarriedItem() == items.arrowsword) {
    target = victim;
    arrowsword.active = true;
  }

  if (Player.getCarriedItem() == items.explosivegravitygun) {
    ggMob = victim;
    isPickingEntity = true;
    Schwert(200, items.explosivegravitygun);
  }
  if (Player.getCarriedItem() == items.emeraldsword) {
    Entity.setHealth(victim, Entity.getHealth(victim) - 12);
    Schwert(100, items.emeraldsword);
  }
  if (Player.getCarriedItem() == items.hypertntsword) {
    Level.explode(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 20);
    Schwert(200, items.hypertntsword);
  }
  if (Player.getCarriedItem() == items.tntsword) {
    Level.explode(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 5);
    Schwert(80, items.tntsword);
  }
}


function leaveGame() {
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
      if (GUI != null) {
        GUI.dismiss();
        GUI = null;
      }
    }
  }));
}







////////////////////////////////////////
//////CUSTOM FUNKTIONEN/////////////////
////////////////////////////////////////

function Schwert(maxDamage, id) {
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


function gluck(x, y, z) {
  var rnd = Math.floor(Math.random() * (blockDataValues.length));
  setTile(x, y, z, blockDataValues[rnd], 0);
  preventDefault();
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

function randMob(x, y, z) {
  var mobId = Math.floor(Math.random() * (mobValues.length));
  Level.spawnMob(x, y, z, mobValues[mobId]);
}


function turm(x, y, z, mobid) {
  if (mobid == 0) {
    var mobId = Math.floor(Math.random() * (mobValues.length));
    var mob1 = Level.spawnMob(x, y, z, mobValues[mobId]);

    var mob2 = Level.spawnMob(x, y, z, mobValues[mobId]);
    rideAnimal(mob2, mob1);
    var  mob3= Level.spawnMob(x, y, z, mobValues[mobId]);
    rideAnimal(mob3, mob2);
    var mob4 = Level.spawnMob(x, y, z, mobValues[mobId]);
    rideAnimal(mob4, mob3);
    var mob5 = Level.spawnMob(x, y, z, mobValues[mobId]);
    rideAnimal(mob5, mob4);
    var mob6 = Level.spawnMob(x, y, z, mobValues[mobId]);
    rideAnimal(mob6, mob5);
  }else {
    var mob1 = Level.spawnMob(x, y, z, mobid);

    var mob2 = Level.spawnMob(x, y, z, mobid);
    rideAnimal(mob2, mob1);
    var  mob3= Level.spawnMob(x, y, z, mobid);
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



function Tardis(x, z) {
  setTile(19, 40, 0, 95);
  clientMessage(ChatColor.BLUE + "Use the iron door to get back");
  var plyr = getPlayerEnt();
  Entity.setPosition(plyr, 0, 6, 0);
  setTile(Player.getX() + 2, Player.getY(), Player.getZ(), 71);
  setTile(Player.getX() + 2, Player.getY() - 1, Player.getZ(), 71);
  for (i = 0; i <= 32; i++) {
    for (j = 0; j <= 32; j++) {
      for (k = 0; k < 13; k++) {
        Level.setTile(x - 16 + i, 1 + k, z - 16 + j, 0);
      }
    }
  }

  //floor
  for (i = 0; i <= 36; i++) {
    for (j = 0; j <= 36; j++) {
      Level.setTile(x - 18 + i, 0, z - 18 + j, 7, 7);
    }
  }

  Level.setTile(x, 0, z, 7, 8);

  //Layers
  for (l = 0; l < dLayers.length; l++) {
    for (i = 0; i <= 32; i++) {
      for (j = 0; j <= 32; j++) {
        Level.setTile(x - 16 + i, 1 + l, z - 16 + j, dLayers[l]);
      }
    }
  }

  //ceiling
  for (i = 0; i <= 32; i++) {
    for (j = 0; j <= 32; j++) {
      Level.setTile(x - 16 + i, 14, z - 16 + j, 95);
    }
  }

  //ceiling 2
  for (i = 0; i <= 34; i++) {
    for (j = 0; j <= 34; j++) {
      Level.setTile(x - 17 + i, 15, z - 17 + j, 7);
    }
  }

  //walls
  for (i = 0; i <= 34; i++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x - 17 + i, 1 + k, z - 17, 62);
    }
  }

  for (i = 0; i <= 34; i++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x - 17 + i, 1 + k, z + 17, 20);
    }
  }


  for (j = 0; j <= 32; j++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x - 17, 1 + k, z - 16 + j, 89);
    }
  }

  for (j = 0; j <= 32; j++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x + 17, 1 + k, z - 16 + j, 58);
    }
  }

  //walls 2
  for (i = 0; i <= 36; i++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x - 18 + i, 1 + k, z - 18, 95);
    }
  }

  for (i = 0; i <= 36; i++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x - 18 + i, 1 + k, z + 18, 95);
    }
  }

  for (j = 0; j <= 34; j++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x - 18, 1 + k, z - 17 + j, 95);
    }
  }


  for (j = 0; j <= 34; j++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x + 18, 1 + k, z + 17 + j, 95);
    }
  }
  for (j = 0; j <= 32; j++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x + 18, 1 + k, z - 18 + j, 95);
    }
  }


  //walls 3

  for (j = 0; j <= 32; j++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x + 19, 1 + k, z - 18 + j, 7);
    }
  }
  for (j = 0; j <= 34; j++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x - 19, 1 + k, z - 18 + j, 7);
    }
  }

  for (j = 0; j <= 34; j++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x + 18, 1 + k, z + 17 + j, 7);
    }
  }

  for (i = 0; i <= 36; i++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x - 19 + i, 1 + k, z - 19, 95);
    }
  }

  for (i = 0; i <= 36; i++) {
    for (k = 0; k < 14; k++) {
      Level.setTile(x - 19 + i, 1 + k, z + 19, 95);
    }
  }
}




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

function shootAtTarget(xx, yy, zz, target, id) {
  var x = Entity.getX(target);
  var y = Entity.getY(target);
  var z = Entity.getZ(target);
  arrow = Level.spawnMob(x + xx, y + yy, z + zz, id);
  Entity.setVelY(arrow, -2);
}
