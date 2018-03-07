/*
This is my biggest Mod. Thanks for downloading!
Please dont steal my code!!!

functions:
function Level.getChestSlot(x, y, z, slot);
function Level.getChestSlotCount(x, y, z, slot);
function Level.getChestSlotData(x, y, z, slot);


*/
//meteorsheep

var currentActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var sdcard = android.os.Environment.getExternalStorageDirectory();

var errors = [];


var meteorsheep = {
        sheep: 0,
        active: false,
        timer1: 0,
        timer2: 0,
        x: 0,
        y: 0,
        z: 0
};

var secondtimer = 0;
var PlayerIsOnDetector = false;
//snowsword
var snowsword = {
        active: false,
        timer: 0,
        victim: 0
};

var cheststonebridge = {
        active: false,
        x: 0,
        y: 0,
        z: 0
};

//arrowsword
var arrowsword = {
        active: false,
        timer: 0,
        victim: 0
};

//hypershooter
var hypershooter = {
        active: false,
        timer: 0,
        arrow: 0
};

var tntshooter = {
        active: false,
        timer: 0,
        arrow: 0
};

var tntsword = {
        active: false,
        timer: 0,
        victim: 0
};

var hypertntsword = {
        active: false,
        timer: 0,
        victim: 0
};

var tntpickaxe = {
        active: false,
        timer: 0,
        victim: 0,
        x: 0,
        y: 0,
        z: 0
};

var hypertntpickaxe = {
        active: false,
        timer: 0,
        victim: 0,
        x: 0,
        y: 0,
        z: 0
};

var hypershootertntshooter = {
        active: false,
        timer: 0,
        arrow: 0
};
var sheeptntthrower = {
        shootDir: 0
};

//Tardis
var tardis = {
        inside: false,
        generated: false,
        formerposition: {
                x: 0,
                y: 0,
                z: 0
        }
};

var flyingtnt = {
        active: false,
        tnt: 0,
};

var tntarmor = {
        wearing: false
};

var pigtnt = {
        active: false,
        timer: 0,
        pig: 0
};

var chickentnt = {
        active: false,
        timer: 0,
        chicken: 0
};

var instanttnt = {
        active: false,
        timer: 0,
        health: 0
};

var dragonglider = {
        gliding: false
};

var recipes = [];


var armors = [];
var maxDamages = [];
var handitems = [];
var swords = [];



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
        tardischeststone: 3036,
        //Lucky blocks
        luckycheststone: 3037,
        redluckycheststone: 3038,
        greenluckycheststone: 3039,
        blueluckycheststone: 3040,
        bigluckycheststone: 3041,
        miniluckycheststone: 3042,
        luckypotion: 3043,

        medicine: 3044,
        help: 3045,
        debugger: 3046,
        mobstacker: 3047,
        elevatorcheststone: 3048,
        slomosword: 3049,
        enderboots: 3050,
        enderparachute: 3051,
        fastbuilder: 3052,
        faststonexpos: 3053,
        faststonexneg: 3054,
        faststonezpos: 3055,
        faststonezneg: 3056,
        faststone: 3074,
        machinetester: 3057,
        jumpercheststone: 3058,
        shop: 3059,
        tntammo: 3060,
        cheststonedetector: 3061,
        cheststonewardrobe: 3062,
        cheststonebeam: 3063,
        cheststoneblocker: 3064,
        cheststonebridge: 3065,
        screwdriverred: 3066,
        screwdrivergreen: 3067,
        screwdriverblue: 3068,
        ironstick: 3069,
        irondust: 3080,
        blueirondust: 3071,
        redirondust: 3072,
        greenirondust: 3073,
        compressedsnow: 3075,
        enderingot: 3076,
        magicbook: 3077

};

const cheststonetypes = {
        step: 1,
        tap: 2,
        destroy: 3
};

//ModPE.setGameSpeed(speed: default 20);

//Ist bei 3033


const blocks = {
        chest: 54,
        lapisblock: 22,
        cheststonebutton: 230
};

const events = {
        slimerain: 1,
        zombieinvasion: 2,
        creeperday: 3
};
var cheststones = [];


var target;
var isPickingEntity = false;
var ggMob;
var initCreativeItems = true;
var sheep;
var activate = false;
var acctivate = false;
var tnt;
var tower = false;
var exp = 0;
var chicken;
var Huhn = 0;
var rupf = false;
var jump = false;
var fly = 0;

var previousCarriedItem = 0;
var previousSlotId = 0;





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
var upspeed = 0.4;
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



function createLuckyItems() {
        Item.defineItem(items.greenluckycheststone, "greenluckycheststone", 0, "greenluckycheststone", 1);
        Item.setChestStone(items.greenluckycheststone, cheststonetypes.destroy);
        //Item.setCategory(items.greenluckycheststone, ItemCategory.MATERIAL);


        Item.defineItem(items.blueluckycheststone, "blueluckycheststone", 0, "blue lucky cheststone", 1);
        Item.setChestStone(items.blueluckycheststone, cheststonetypes.destroy);
        //Item.setCategory(items.blueluckycheststone, ItemCategory.TOOL);



        Item.defineItem(items.redluckycheststone, "redluckycheststone", 0, "red lucky cheststone", 1);
        Item.setChestStone(items.redluckycheststone, cheststonetypes.destroy);
        //Item.setCategory(items.redluckycheststone, ItemCategory.TOOL);


        Item.defineItem(items.miniluckycheststone, "miniluckycheststone", 0, "mini lucky cheststone");
        Item.setChestStone(items.miniluckycheststone, cheststonetypes.destroy);
        //Item.setCategory(items.miniluckycheststone, ItemCategory.TOOL);


        Item.defineItem(items.bigluckycheststone, "bigluckycheststone", 0, "big lucky cheststone");
        Item.setChestStone(items.bigluckycheststone, cheststonetypes.destroy);
        //Item.setCategory(items.bigluckycheststone, ItemCategory.TOOL);

        Item.defineItem(items.luckypotion, "luckypotion", 0, "lucky potion");
        //Item.setCategory(items.luckypotion, ItemCategory.FOOD);

}

function createMagicItems() {
        Item.defineItem(items.magicbook, "magicbook", 0, "magic book", 1);
        //Item.setCategory(items.magicbook, ItemCategory.TOOL);

}

function createInventory() {
        var x;
        for (x in items) {
                var currentItem = items[x];
                Item.setCategory(currentItem, ItemCategory.FOOD);
                Player.addItemCreativeInv(currentItem, 1);
        }
}



function createEmeraldItems() {

        //Emerald armor
        Item.newArmor(items.emeraldhelmet, "emeraldhelmet", 0, "emerald helmet", "armor/emerald_1.png", 3, 351, ArmorType.helmet);
        Item.recipe(items.emeraldhelmet, 1, 0, [
                "aaa",
                "a a",
                "   "
        ], ["a", items.emeraldingot, 0]);
        //Item.setCategory(items.emeraldingot, ItemCategory.MATERIAL);


        Item.newArmor(items.emeraldchestplate, "emeraldchestplate", 0, "emerald chestplate", "armor/emerald_1.png", 8, 351, ArmorType.chestplate);
        Item.recipe(items.emeraldchestplate, 1, 0, [
                "a a",
                "aaa",
                "aaa"
        ], ["a", items.emeraldingot, 0]);
        //Item.setCategory(items.emeraldchestplate, ItemCategory.TOOL);

        Item.newArmor(items.emeraldleggings, "emeraldleggings", 0, "emerald leggings", "armor/emerald_2.png", 5, 351, ArmorType.leggings);
        Item.recipe(items.emeraldleggings, 1, 0, [
                "aaa",
                "a a",
                "a a"
        ], ["a", items.emeraldingot, 0]);
        //Item.setCategory(items.emeraldleggings, ItemCategory.TOOL);

        Item.newArmor(items.emeraldboots, "emeraldboots", 0, "emerald boots", "armor/emerald_1.png", 7, 351, ArmorType.boots);
        Item.recipe(items.emeraldboots, 1, 0, [
                "a a",
                "a a",
                "   "
        ], ["a", items.emeraldingot, 0]);
        //Item.setCategory(items.emeraldboots, ItemCategory.TOOL);

        //Item.newArmor(LONG_FALL_BOOTS_ID,"longfallboots",0,"Long Fall Boots","armor/longfallboots.png",1,LONG_FALL_BOOTS_MAX_DAMAGE,ArmorType.boots);

        //emerald recipe ingredients
        Item.defineItem(items.emeralddust, "emeralddust", 0, "emerald dust", 0);
        Item.recipe(items.emeralddust, 4, 0, [
                " a ",
                "   ",
                "   "
        ], ["a", 388, 0]);
        //Item.setCategory(items.emeralddust, ItemCategory.MATERIAL);

        Item.defineItem(items.emeraldingot, "emeraldingot", 0, "emerald ingot", 0);
        Item.recipe(items.emeraldingot, 1, 0, [
                "  a",
                " b ",
                "   "
        ], ["a", items.emeralddust, 0, "b", 266, 0]);
        //Item.setCategory(items.emeralddust, ItemCategory.MATERIAL);

        //Emeralddsword
        Item.defineItem(items.emeraldsword, "emeraldsword", 0, "emerald sword", 0);
        Item.recipe(items.emeraldsword, 1, 0, [
                " a ",
                " a ",
                " b "
        ], ["a", items.emeraldingot, 0, "b", 280, 0]);
        Item.setSword(items.emeraldsword, 12, 100);
        //Item.setHandEquipped(items.emeraldsword, true);
        //Item.setCategory(items.emeraldsword, ItemCategory.TOOL);


        //Emerald pickaxe
        Item.defineItem(items.emeraldpickaxe, "emeraldpickaxe", 0, "emerald pickaxe", 0);
        Item.recipe(items.emeraldpickaxe, 1, 0, [
                "aaa",
                " b ",
                " b "
        ], ["a", items.emeraldingot, 0, "b", 280, 0]);
        Item.setMaxDamage(items.emeraldpickaxe, 100);
        //Item.setHandEquipped(items.emeraldpickaxe, true);
        //Item.setCategory(items.emeraldpickaxe, ItemCategory.TOOL);


        //Emerald shovel
        Item.defineItem(items.emeraldshowel, "emeraldshovel", 0, "emerald showel", 0);
        Item.recipe(items.emeraldshowel, 1, 0, [
                " a ",
                " b ",
                " b "
        ], ["a", items.emeraldingot, 0, "b", 280, 0]);
        Item.setMaxDamage(items.emeraldshovel, 200);
        //Item.setHandEquipped(items.emeraldshovel, true);
        //Item.setCategory(items.emeraldshowel, ItemCategory.TOOL);
}


function createMachineItems() {
        Item.defineItem(items.mobstacker, "mobstacker", 0, "mob stacker", 1);
        //Item.setCategory(items.mobstacker, ItemCategory.TOOL);
}

function createModItems() {

        Item.defineItem(items.debugger, "debugger", 0, "debugger", 1);
        //Item.setCategory(items.debugger, ItemCategory.TOOL);

        Item.defineItem(items.help, "help", 0, "help", 1);
        Item.recipe(items.help, 1, 0, [
                "   ",
                " a ",
                "   "
        ], ["a", 280, 0]);
        //Item.setCategory(items.help, ItemCategory.TOOL);
}



function createCheststoneItems() {
        Item.defineItem(items.tardischeststone, "tardischeststone", 0, "tardis cheststone", 0);
        Item.recipe(items.tardischeststone, 1, 0, [
                " a ",
                " a ",
                " b "
        ], ["a", 22, 0, "b", 247, 0]);
        Item.setChestStone(items.tardischeststone);
        //Item.setCategory(items.tardischeststone, ItemCategory.INTERNAL);

        Item.defineItem(items.jumpercheststone, "jumpercheststone", 0, "jumper cheststone");
        Item.addCraftRecipe(items.jumpercheststone, 4, 0, [265, 1, 0]);
        //Item.setCategory(items.jumpercheststone, ItemCategory.INTERNAL);

        Item.defineItem(items.screwdriverblue, "screwdriverblue", 0, "Blue screwdriver", 1);
        Item.recipe(items.screwdriverblue, 1, 0, [
                " a ",
                " a ",
                " b "
        ], ["a", items.ironstick, 0, "b", items.blueirondust, 0]);
        //Item.setCategory(items.screwdriverblue, ItemCategory.TOOL);

        Item.defineItem(items.screwdriverred, "screwdriverred", 0, "Red screwdriver", 1);
        Item.recipe(items.screwdriverred, 1, 0, [
                " a ",
                " a ",
                " b "
        ], ["a", items.ironstick, 0, "b", items.redirondust, 0]);
        //Item.setCategory(items.screwdriverred, ItemCategory.TOOL);

        Item.defineItem(items.screwdrivergreen, "screwdrivergreen", 0, "Green screwdriver", 1);
        Item.recipe(items.screwdrivergreen, 1, 0, [
                " a ",
                " a ",
                " b "
        ], ["a", items.ironstick, 0, "b", items.greenirondust, 0]);
        //Item.setCategory(items.screwdrivergreen, ItemCategory.TOOL);


        Item.defineItem(items.faststonexneg, "fastpad", 0, "Fast Cheststone x-", 1);
        Item.defineItem(items.faststonexpos, "fastpad", 0, "Fast Cheststone x+", 1);
        Item.defineItem(items.faststonezneg, "fastpad", 0, "Fast Cheststone z-", 1);
        Item.defineItem(items.faststonezpos, "fastpad", 0, "Fast Cheststone z+", 1);

        Item.defineItem(items.faststone, "fastpad", 0, "Fast Cheststone", 1);
        //Item.setCategory(items.faststone, ItemCategory.INTERNAL);

        Item.defineItem(items.cheststonedetector, "cheststonedetector", 0, "cheststonedetector", 1);
        //Item.setCategory(items.cheststonedetector, ItemCategory.INTERNAL);

        Item.defineItem(items.cheststonewardrobe, "cheststonewardrobe", 0, "cheststonewardrobe", 1);
        //Item.setCategory(items.cheststonewardrobe, ItemCategory.INTERNAL);



        Block.newBlock(blocks.cheststonebutton, "cheststone button", "cheststonebutton", 0, false, 0);
        Item.recipe(items.cheststonebutton, 1, 0, [
                "   ",
                " a ",
                "   "
        ], ["a", 331, 0]);
        //Item.setCategory(items.cheststonebutton, ItemCategory.INTERNAL);


}



function createMiscellaniousItems() {
        Item.defineItem(items.enderparachute, "enderparachute", 0, "enderparachute", 1);
        Item.newArmor(items.enderboots, "enderboots", 0, "ender boots", "armor/ender_2.png", 3, 351, ArmorType.boots);
        Item.recipe(items.enderboots, 1, 0, [
                "   ",
                "a a",
                "a a"
        ], ["a", 121, 0]); //end stone
        Item.defineItem(items.medicine, "medicine", 0, "medicine");
        //Item.setCategory(items.medicine, ItemCategory.FOOD);


        //ModPE.setFoodItem(id, iconName, offset, halfhearts, name, maxStack)

        Item.defineThrowable(items.slingshot, "slingshot", 0, "slingshot", 1);
        Item.recipe(items.slingshot, 1, 0, [
                "a a",
                " b ",
                "a a"
        ], ["a", 46, 0, "b", 264, 0]);
        //Item.setHandEquipped(items.slingshot, true);
        //Item.setCategory(items.slingshot, ItemCategory.TOOL);

        Item.defineItem(items.meteorsheep, "meteorsheep", 0, "Meteor sheep", 0);
        Item.recipe(items.meteorsheep, 1, 0, [
                "wtw",
                "twt",
                "wtw"
        ], ["w", 35, 0, "t", 46, 0]);
        //Item.setCategory(items.meteorsheep, ItemCategory.TOOL);



        Item.defineThrowable(items.gravitygun, "gravitygun", 0, "gravity gun", 0);
        Item.setMaxDamage(items.gravitygun, 200);
        //Item.setCategory(items.gravitygun, ItemCategory.TOOL);





        Item.newArmor(items.hoverboots, "hoverboots", 0, "hover boots", "armor/hover_2.png", 2, 315, ArmorType.boots);
        //Item.setCategory(items.hoverboots, ItemCategory.TOOL);


        Item.newArmor(items.jetpack, "jetpack", 0, "jetpack", "armor/jetpack_1.png", 2, 353, ArmorType.chestplate);
        Item.recipe(items.jetpack, 1, 0, [
                "aba",
                "a a",
                "c c"
        ], ["a", 265, 0, "b", 331, 0, "c", 325, 10]);
        //Item.setCategory(items.jetpack, ItemCategory.TOOL);

        Item.newArmor(items.dragonglider, "dragonglider", 0, "dragon glider", "armor/glider_1.png", 2, 351, ArmorType.chestplate);
        Item.recipe(items.dragonglider, 1, 0, [
                "aaa",
                "b b",
                " c "
        ], ["a", 35, 0, "b", 265, 0, "c", 334, 0]);
        //Item.setCategory(items.dragonglider, ItemCategory.TOOL);




}


function createCraftItems() {
        Item.defineItem(items.irondust, "irondust", 0, "iron dust", 16);
        Item.recipe(items.irondust, 4, 0, [
                "   ",
                " a ",
                "   "
        ], ["a", 265, 0]);
        //Item.setCategory(items.irondust, ItemCategory.MATERIAL);

        Item.defineItem(items.blueirondust, "blueirondust", 0, "blue iron dust", 16);
        Item.recipe(items.blueirondust, 1, 0, [
                "aaa",
                "aba",
                "aaa"
        ], ["a", 351, 12, "b", 265, 0]);
        //Item.setCategory(items.blueirondust, ItemCategory.MATERIAL);

        Item.defineItem(items.greenirondust, "greenirondust", 0, "green iron dust", 16);
        Item.recipe(items.greenirondust, 1, 0, [
                "aaa",
                "aba",
                "aaa"
        ], ["a", 351, 10, "b", 265, 0]);
        //Item.setCategory(items.greenirondust, ItemCategory.MATERIAL);

        Item.defineItem(items.redirondust, "redirondust", 0, "red iron dust", 16);
        Item.recipe(items.redirondust, 1, 0, [
                "aaa",
                "aba",
                "aaa"
        ], ["a", 351, 13, "b", 265, 0]);
        //Item.setCategory(items.redirondust, ItemCategory.MATERIAL);

        Item.defineItem(items.emeralddust, "emeralddust", 0, "emerald dust", 0);
        Item.recipe(items.emeralddust, 4, 0, [
                " a ",
                "   ",
                "   "
        ], ["a", 388, 0]);
        //Item.setCategory(items.emeralddust, ItemCategory.MATERIAL);

        Item.defineItem(items.ironstick, "ironstick", 0, "ironstick", 0);
        Item.recipe(items.ironstick, 1, 0, [
                "   ",
                " a ",
                " a "
        ], ["a", 265, 0]);
        //Item.setCategory(items.ironstick, ItemCategory.MATERIAL);

        Item.defineItem(items.compressedsnow, "compressedsnow", 0, "compressed snow", 1);
        Item.recipe(items.compressedsnow, 1, 0, [
                "aaa",
                "aaa",
                "aaa"
        ], ["a", 80, 0]);
        //Item.setCategory(items.compressedsnow, ItemCategory.MATERIAL);

        Item.defineItem(items.enderingot, "enderingot", 0, "ender ingot", 0);
        Item.recipe(items.enderingot, 1, 0, [
                "aaa",
                "aba",
                "aaa"
        ], ["a", 368, 0, "b", 265, 0]);
        //Item.setCategory(items.enderingot, ItemCategory.MATERIAL);

}


function createSwordItems() {
        Item.defineItem(items.lavasword, "lavasword", 0, "lava sword");
        Item.recipe(items.lavasword, 1, 0, [
                " a ",
                " a ",
                " b "
        ], ["a", 325, 10, "b", items.ironstick, 0]);
        //Item.setHandEquipped(items.lavasword, true);
        //Item.setCategory(items.lavasword, ItemCategory.TOOL);

        Item.defineItem(items.watersword, "watersword", 0, "water sword");
        //Item.setHandEquipped(items.watersword, true);
        //Item.setCategory(items.watersword, ItemCategory.TOOL);

        Item.defineItem(items.arrowsword, "arrowsword", 0, "arrow sword");
        //Item.setCategory(items.arrowsword, ItemCategory.TOOL);


        Item.defineItem(items.snowsword, "snowsword", 0, "snow sword", 0);
        Item.recipe(items.snowsword, 1, 0, [
                " a ",
                " a ",
                " b "
        ], ["a", 80, 0, "b", 280, 0]);
        //Item.setHandEquipped(items.snowsword, true);
        //Item.setCategory(items.snowsword, ItemCategory.TOOL);


        Item.defineItem(items.firesword, "firesword", 0, "fire sword", 1);
        //Item.setHandEquipped(items.firesword, true);
        //Item.setCategory(items.firesword, ItemCategory.TOOL);

}

function createTntItems() {

        Item.defineItem(items.tntpickaxe, "tntpickaxe", 0, "TNT pickaxe", 1);
        Item.recipe(items.tntpickaxe, 1, 0, [
                "aaa",
                " b ",
                " b "
        ], ["a", 46, 0, "b", 280, 0]);
        Item.setMaxDamage(items.tntpickaxe, 80);
        //Item.setHandEquipped(items.tntpickaxe, true);
        //Item.setCategory(items.tntpickaxe, ItemCategory.TOOL);

        Item.defineItem(items.hypertntpickaxe, "hypertntpickaxe", 0, "Hyper TNT pickaxe", 1);
        Item.recipe(items.hypertntpickaxe, 1, 0, [
                "aaa",
                " b ",
                " b "
        ], ["a", 46, 0, "b", 265, 0]);
        //Item.setHandEquipped(items.hypertntpickaxe, true);
        Item.setMaxDamage(items.hypertntpickaxe, 200);
        //Item.setCategory(items.hypertntpickaxe, ItemCategory.TOOL);

        Item.defineItem(items.tntrocket, "tntrocket", 0, "TNT rocket");
        Item.recipe(items.tntrocket, 1, 0, [
                " a ",
                " b ",
                "   "
        ], ["a", 46, 0, "b", 288, 0]);
        //Item.setCategory(items.tntrocket, ItemCategory.TOOL);


        Item.defineItem(items.flyingtnt, "flyingtnt", 0, "flying TNT", 0);
        Item.recipe(items.flyingtnt, 1, 0, [
                " a ",
                " a ",
                " b "
        ], ["a", 46, 0, "b", 288, 0]);
        //Item.setCategory(items.flyingtnt, ItemCategory.TOOL);

        Item.defineItem(items.instanttnt, "instanttnt", 0, "instant TNT", 0);
        Item.recipe(items.instanttnt, 1, 0, [
                "aaa",
                "aba",
                "aaa"
        ], ["a", 12, 0, "b", 289, 0]);
        Item.setMaxDamage(items.instanttnt, 1000);
        //Item.setCategory(items.instanttnt, ItemCategory.TOOL);

        Item.defineItem(items.tntsword, "tntsword", 0, "TNT sword", 1);
        Item.recipe(items.tntsword, 1, 0, [
                " a ",
                " a ",
                " b "
        ], ["a", 46, 0, "b", 280, 0]);
        Item.setMaxDamage(items.tntsword, 80);
        //Item.setCategory(items.tntsword, ItemCategory.TOOL);

        //Hyper Tnt sword
        Item.defineItem(items.chickentnt, "chickentnt", 0, "chicken TNT", 0);
        //Item.setCategory(items.chickentnt, ItemCategory.TOOL);


        Item.defineItem(items.hypertntsword, "hypertntsword", 0, "Hyper TNT sword", 1);
        Item.recipe(items.hypertntsword, 1, 0, [
                " a ",
                " a ",
                " b "
        ], ["a", items.tntsword, 0, "b", 280, 0]);
        Item.setMaxDamage(items.hypertntsword, 200);
        //Item.setHandEquipped(items.hypertntsword, true);
        //Item.setCategory(items.hypertntsword, ItemCategory.TOOL);


        Item.defineItem(items.pigtnt, "pigtnt", 0, "pig TNT", 0);
        Item.recipe(items.pigtnt, 1, 0, [
                "aaa",
                "aba",
                "aaa"
        ], ["a", 319, 0, "b", 46, 0]);
        //Item.setCategory(items.pigtnt, ItemCategory.TOOL);

        Item.newArmor(items.tnthelmet, "tnthelmet", 0, "TNT helmet", "armor/tnt_1.png", 6, 399, ArmorType.helmet);
        Item.recipe(items.tnthelmet, 1, 0, [
                "aaa",
                "a a",
                "   "
        ], ["a", 46, 0]);
        //Item.setCategory(items.tnthelmet, ItemCategory.TOOL);

        Item.newArmor(items.tntchestplate, "tntchestplate", 0, "TNT chestplate", "armor/tnt_1.png", 12, 354, ArmorType.chestplate);
        Item.recipe(items.tntchestplate, 1, 0, [
                "a a",
                "aaa",
                "aaa"
        ], ["a", 46, 0]);
        //Item.setCategory(items.tntchestplate, ItemCategory.TOOL);

        Item.newArmor(items.tntleggings, "tntleggings", 0, "TNT leggings", "armor/tnt_2.png", 6, 360, ArmorType.leggings);
        Item.recipe(items.tntleggings, 1, 0, [
                "aaa",
                "a a",
                "a a"
        ], ["a", 46, 0]);
        //Item.setCategory(items.tntleggings, ItemCategory.TOOL);

        Item.newArmor(items.tntboots, "tntboots", 0, "TNT boots", "armor/tnt_1.png", 2, 351, ArmorType.boots);
        Item.recipe(items.tntboots, 1, 0, [
                "a a",
                "a a",
                "   "
        ], ["a", 46, 0]);
        Item.setMaxDamage(items.tntboots, 5000);
        //Item.setCategory(items.tntboots, ItemCategory.TOOL);

        Item.defineItem(items.tntammo, "tntammo", 0, "TNT ammo", 0);
        Item.recipe(items.tntammo, 64, 0, [
                "   ",
                " a ",
                "   "
        ], ["a", 46, 0]);
        //Item.setCategory(items.tntammo, ItemCategory.MATERIAL);

}

function createShooterItems() {
        //
        Item.defineThrowable(items.hypershooter, "hypershooter", 0, "Hyper shoter", 1);
        Item.recipe(items.hypershooter, 1, 0, [
                " a ",
                "bcb",
                "bcb"
        ], ["a", 46, 0, "b", 265, 0, "c", 331, 0]);
        //Item.setCategory(items.hypershooter, ItemCategory.TOOL);



        Item.defineThrowable(items.tntshooter, "tntshooter", 0, "tnt shooter", 0);
        Item.recipe(items.tntshooter, 1, 0, [
                " a ",
                "bcb",
                "bcb"
        ], ["a", 46, 0, "b", 265, 0, "c", 331, 0]);
        //Item.setCategory(items.tntshooter, ItemCategory.TOOL);

        Item.defineThrowable(items.sheeptntthrower, "sheeptntthrower", 0, "sheep TNT thrower", 0);
        Item.recipe(items.sheeptntthrower, 1, 0, [
                " a ",
                "bbb",
                "cdc"
        ], ["a", 46, 0, "b", 35, 0, "c", 265, 0, "d", 331, 0]);
        //Item.setCategory(items.sheeptntthrower, ItemCategory.TOOL);

}





function newLevel() {
        clientMessage("Thanks for using my mod. You can craft a help item with a stick to get started");

        loadTardis();

}

function destroyBlock(x, y, z, side) {
        var destroyedblock = Level.getTile(x, y, z);
}

function startDestroyBlock(x, y, z, side) {
        //emeraldpickaxe
        var attemptblock = Level.getTile(x, y, z);
        var item = Player.getCarriedItem();
        if (item == items.tntpickaxe) {
                if (Player.removeItem(items.tntammo, 1) == true) {
                        clientMessage("better run");
                        tntpickaxe.active = true;
                        Item.damage();
                        preventDefault();
                }
        }

        if (item == items.hypertntpickaxe) {
                if (Player.removeItem(items.tntammo, 1) == true) {
                        clientMessage("better run");
                        hypertntpickaxe.active = true;
                        Item.damage();
                        preventDefault();
                }
        }

        if (item == items.emeraldpickaxe) {
                setTile(x, y, z, 0);
        }
        if (attemptblock == 7 && tardis.inside == true) { // bedrock as tardiswall
                Entity.setPosition(Player.getEntity(), tardis.formerposition.x, tardis.formerposition.y, tardis.formerposition.z);
                tardis.inside = false;
                clientMessage(ChatColor.GREEN + "exited the tardis");
        }
        //Lucky blocks
        if (attemptblock == blocks.chest) {
                var cheststone = Level.getChestSlot(x, y, z, 0);
                if (cheststone == items.miniluckycheststone) {
                        randItem(x, y + 1, z);
                        setTile(x, y, z, 0);
                }
                if (cheststone == items.greenluckycheststone) {
                        randPotion(getPlayerEnt());
                }
                if (cheststone == items.bigluckycheststone) {
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
                if (cheststone == items.blueluckycheststone) {
                        placeRandomBlock(x, y, z);
                }
                if (cheststone == items.redluckycheststone) {
                        mobTurm(x, y, z, 0);
                        setTile(x, y, z, 0);
                }

                if (cheststone == items.luckycheststone) {
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
                                        var rndpig1 = Level.spawnMob(x, y, z, 12);
                                        var rndpig2 = Level.spawnMob(x, y, z, 12);
                                        rideAnimal(rndpig2, rndpig1);
                                        var rndpig3 = Level.spawnMob(x, y, z, 12);
                                        rideAnimal(rndpig3, rndpig2);
                                        var rndpig4 = Level.spawnMob(x, y, z, 12);
                                        rideAnimal(rndpig4, rndpig3);
                                        var rndpig5 = Level.spawnMob(x, y, z, 12);
                                        rideAnimal(rndpig5, rndpig4);
                                        var rndpig6 = Level.spawnMob(x, y, z, 12);
                                        rideAnimal(rndpig6, rndpig5);
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
                                        setTile(playerX - 1, playerY, playerZ, 101);
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
        if (itemId == items.machinetester) {

        }

        if (blockId == items.cheststonebutton && itemId != items.screwdriverblue && itemId != screwdriverred && itemId != screwdrivergreen) {
                checkChestStoneHook(x + 1, y, z);
                checkChestStoneHook(x, y + 1, z);
                checkChestStoneHook(x, y, z + 1);
                checkChestStoneHook(x - 1, y, z);
                checkChestStoneHook(x, y - 1, z);
                checkChestStoneHook(x, y, z - 1);
        }

        if (itemId == items.screwdriverblue) {
                checkScrewdriverHook(x, y, z);
        }

        if (itemId == items.screwdrivergreen) {

        }

        if (itemId == items.screwdriverred) {

        }






        if (itemId == items.luckypotion) {
                randPotion(Player.getEntity());
        }
        if (itemId == items.medicine) {
                Entity.removeAllEffects(Player.getEntity());
        }
        if (itemId == 408) {
                Entity.removeAllEffects(Player.getEntity());
        }
        if (itemId == items.tntrocket) {
                var rocket = Level.spawnMob(x, y + 1, z, 65);
                Entity.setVelY(rocket, 3);
                Player.addItemInventory(items.tntrocket, -1);
        }


        if (itemId == items.pigtnt) {
                Level.spawnMob(x, y + 1, z, 65);
                Player.addItemInventory(items.pigtnt, -1);
                pigtnt.active = true;
        }

        if (itemId == items.chickentnt && chickentnt.active == false) {
                chickentnt.chicken = Level.spawnMob(x, y, z, 65);
                chickentnt.active = true;
                Player.addItemInventory(items.chickentnt, -1);
        }



        if (itemId == items.meteorsheep && meteorsheep.active == false) {
                meteorsheep.sheep = Level.spawnMob(x, y + 1, z, 13, "mob/sheep_14.png");
                Entity.setNameTag(meteorsheep.sheep, "§cBooommmmm!");
                Entity.setVelY(meteorsheep.sheep, 3);
                meteorsheep.active = true;
                Player.addItemInventory(items.meteorsheep, -1);
                Entity.setHealth(meteorsheep.sheep, 3);
        }

        if (itemId == items.flyingtnt) {
                flyingtnt.tnt = Level.spawnMob(x, y + 1, z, 65);
                flyingtnt.active = true;
        }

        if (itemId == items.instanttnt) {
                instanttnt.active = true;
                instanttnt.health = Entity.getHealth(Player.getEntity());
                Player.setHealth(1000);
                Player.addItemInventory(items.instanttnt, -1);
                Level.explode(Entity.getX(sheep), Entity.getY(sheep), Entity.getZ(sheep), 40);
        }
        if (itemId == 280) {
                if (blockId == 7) {
                        clientErrors();
                }
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

function entityRemovedHook(e) {
        if (e == flyingtnt.tnt) {
                flyingtnt.active = false;
        }
}


function procCmd(c) {
        var p = c.split(" ");
        var command = p[0];
        switch (command) {
                case 'gv':
                        Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 0, p[1], p[2], p[3]);
                        break;
                case 'errors':
                        clientErrors();
                        break;

        }
}


function modTick() {
        //variablen für blöcke unterm spieler
        checkChangedCarriedItem();
        var blockUnderPlayer = Level.getTile(Math.floor(Player.getX()), Math.floor(Player.getY()) - 2, Math.floor(Player.getZ()));
        var flatBlockUnderPlayer = Level.getTile(Math.floor(Player.getX()), Math.floor(Player.getY()) - 1, Math.floor(Player.getZ()));

        var item = Player.getCarriedItem();
        //cheststone hooks

        checkChestStoneHook(Math.floor(Player.getX()), Math.floor(Player.getY()) - 2, Math.floor(Player.getZ()));

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

        if (Player.getCarriedItem() == items.fastbuilder && Player.getCarriedItemData() != 0 && blockUnderPlayer == 0) {
                if (Player.removeItem(Player.getCarriedItemData()) == true) {
                        Level.setTile(Math.floor(Player.getX()), Math.floor(Player.getY()) - 2, Math.floor(Player.getZ()), Player.getCarriedItemData());
                        ModPE.showTipMessage("building");
                        Player.removeItem(Player.getCarriedItemData());

                }
        }

        if (blockUnderPlayer == blocks.chest) {
                var x = Math.floor(Player.getX());
                var y = Math.floor(Player.getY()) - 2;
                var z = Math.floor(Player.getZ());

                if (Level.getChestSlot(x, y, z, 0) == items.cheststonedetector && PlayerIsOnDetector == false) {
                        checkChestStoneHook(x, y - 1, z);
                        checkChestStoneHook(x, y, z);
                        checkChestStoneHook(x + 1, y, z);
                        checkChestStoneHook(x - 1, y, z + 1);
                        checkChestStoneHook(x, y, z - 1);
                        PlayerIsOnDetector = true;
                } else {
                        if (PlayerIsOnDetector == true) {
                                PlayerIsOnDetector = false;
                        }
                }
        }

        if (item == items.debugger) {
                ModPE.showTipMessage("Slot id: " + Player.getSelectedSlotId());
        }

        secondtimer++;
        if (secondtimer >= 20) {
                secondtimer = 0;
                secondHook();
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
                        Entity.setVelX(ggMob, (Player.getX() + (ggMobDirection.x * 3) - Entity.getX(ggMob)) / 5);
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

        if (Player.getArmorSlot(3, items.hoverboots)) {
                Entity.setVelY(Player.getEntity(), 0);
        }

        if (Player.getArmorSlot(1) == items.jetpack) {
                shootEntity(Player.getEntity(), 0.1, 0.1, 0.1);
                Level.addParticle(ParticleType.mobFlame, Player.getX(), Player.getY() - 1, Player.getZ(), 0, 0, 10);
        }

        if (Player.getArmorSlot(3) == items.enderboots) {
                if (Entity.getVelY() <= 0.02) {
                        Entity.setPosition(Player.getEntity(), Player.getX(), Player.getY() + 3, Player.getZ());
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


        if (tntarmor.active) {
                if (Player.isFlying()) {
                        Player.setFlying(0);
                        if (Player.removeItem(items.tntammo, 1) == true) {
                                Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), EntityType.TNT);
                                setVelY(Player, 1);

                        }
                }

                if (blockUnderPlayer == 51) {
                        Level.explode(Player.getX(), Player.getY(), Player.getZ(), 4);
                }
        }

        if (tntpickaxe.active) {
                tntpickaxe.timer++;
                if (tntpickaxe.timer >= 100) {
                        Level.explode(tntpickaxe.x, tntpickaxe.y, tntpickaxe.z, 5);
                        tntpickaxe.timer = 0;
                        tntpickaxe.active = false;
                }
        }


        if (hypertntpickaxe.active) {
                hypertntpickaxe.timer++;
                if (hypertntpickaxe.timer >= 150) {
                        Level.explode(hypertntpickaxe.x, hypertntpickaxe.y, hypertntpickaxe.z, 8);
                        hypertntpickaxe.timer = 0;
                        hypertntpickaxe.active = false;
                }
        }

        if (tntsword.active) {
                tntsword.timer++;
                if (tntsword.timer >= 80) {
                        Level.explode(Entity.getX(tntsword.victim), Entity.getY(tntsword.victim), Entity.getZ(tntsword.victim), 3);
                        tntsword.timer = 0;
                        tntsword.active = false;
                }

        }
        if (hypertntsword.active) {
                hypertntsword.timer++;
                if (hypertntsword.timer >= 100) {
                        Level.explode(Entity.getX(hypertntsword.victim), Entity.getY(hypertntsword.victim), Entity.getZ(hypertntsword.victim), 3);
                        hypertntsword.timer = 0;
                        hypertntsword.active = false;
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
                Entity.setVelX(meteorsheep.sheep, meteorsheep.x);
                Entity.setVelY(meteorsheep.sheep, meteorsheep.y);
                Entity.setVelZ(meteorsheep.sheep, meteorsheep.z);
                meteorsheep.timer1++;
                if (meteorsheep.timer1 == 20) {
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

        if (cheststonebridge.active) {
                var playX = Math.floor(Player.getX());
                var playY = Math.floor(Player.getY());
                var playZ = Math.floor(Player.getZ());
                if (blockUnderPlayer == 0 && (
                                playX == cheststonebridge.x && playY == cheststonebridge.y ||
                                playY == cheststonebridge.y && playZ == cheststonebridge.z ||
                                playZ == cheststonebridge.z && playX == cheststonebridge.x)) {
                        Player.setFloor(7);

                        if (Level.getTile(playX + 1, playY - 2, playZ) == 7) {
                                Level.setTile(playX + 1, playY - 2, playZ, 0);
                        }
                        if (Level.getTile(playX - 1, playY - 2, playZ) == 7) {
                                Level.setTile(playX - 1, playY - 2, playZ, 0);
                        }
                        if (Level.getTile(playX, playY - 2, playZ + 1) == 7) {
                                Level.setTile(playX, playY - 2, playZ + 1, 0);
                        }
                        if (Level.getTile(playX, playY - 2, playZ - 1) == 7) {
                                Level.setTile(playX, playY - 2, playZ - 1, 0);
                        }
                        if (Level.getTile(playX, playY - 3, playZ) == 7) {
                                Level.setTile(playX, playY - 3, playZ, 0);
                        }
                }

                if (playX != cheststonebridge.x && playY != cheststonebridge.y ||
                        playY != cheststonebridge.y && playZ != cheststonebridge.z ||
                        playZ != cheststonebridge.z && playX != cheststonebridge.x) {
                        cheststonebridge.active = false;
                }
        }
}

function secondHook() {
        var item = Player.getCarriedItem();
        if (Player.getArmorSlot(0) == items.tnthelmet && Player.getArmorSlot(1) == items.tntchestplate &&
                Player.getArmorSlot(2) == items.tntleggings && Player.getArmorSlot(3) == items.tntboots) {
                if (tntarmor.wearing == false) {
                        tntarmor.wearing = true;
                        Player.setCanFly(1);
                        clientMessage("TNT armor active. Maybe try double jumping?");
                }
        } else if (tntarmor.active) {
                tntarmor.active = false;
                Player.setCanFly(0);
        }
        if (item == items.faststonexneg || item == items.faststonexpos || item == items.faststonezneg || item == items.faststonezpos) {
                Entity.setCarriedItem(Player.getEntity(), items.faststone, 1, 1);
        }
}

function checkScrewdriverHook(x, y, z) {
        ScrewdriverHook(x + 1, y, z);
        ScrewdriverHook(x - 1, y, z);
        ScrewdriverHook(x, y + 1, z);
        ScrewdriverHook(x, y - 1, z);
        ScrewdriverHook(x, y, z + 1);
        ScrewdriverHook(x, y, z - 1);
}

function ScrewdriverHook(x, y, z) {
        var id = Level.getTile(x, y, z);
        if (id == blocks.chest) {
                if (Level.getChestSlot(x, y, z, 0) == items.faststonexpos ||
                        Level.getChestSlot(x, y, z, 0) == items.faststonexneg ||
                        Level.getChestSlot(x, y, z, 0) == items.faststonezpos ||
                        Level.getChestSlot(x, y, z, 0) == items.faststonezneg ||
                        Level.getChestSlot(x, y, z, 0 == items.faststone)) {
                        var dmg = Level.getChestSlotData(x, y, z, 0);
                        var distance = {
                                x: 0,
                                z: 0
                        };
                        if (Player.getX() < x) {
                                distance.x = x - Player.getX();
                        } else {
                                distance.x = Player.getX() - x;
                        }
                        if (Player.getZ() < z) {
                                distance.z = z - Player.getZ();
                        } else {
                                distance.z = Player.getZ() - z;
                        }
                        if (distance.x > distance.z) {
                                if (Player.getX() > x) {
                                        Level.setChestSlot(x, y, z, 0, items.faststonexpos, dmg);
                                }
                                if (Player.getX() < x) {
                                        Level.setChestSlot(x, y, z, 0, items.faststonexneg, dmg);
                                }
                        }
                        if (distance.z > distance.x) {
                                if (Player.getZ() > z) {
                                        Level.setChestSlot(x, y, z, 0, items.faststonezpos, dmg);
                                }
                                if (Player.getZ() < z) {
                                        Level.setChestSlot(x, y, z, 0, items.faststonezneg, dmg);
                                }
                        }

                }

        }
}



function checkScrewdriverGreenHook(x, y, z) {
        ScrewdriverGreenHook(x + 1, y, z);
        ScrewdriverGreenHook(x - 1, y, z);
        ScrewdriverGreenHook(x, y + 1, z);
        ScrewdriverGreenHook(x, y - 1, z);
        ScrewdriverGreenHook(x, y, z + 1);
        ScrewdriverGreenHook(x, y, z - 1);
}

function ScrewdriverGreenHook(x, y, z) {
        var id = Level.getTile(x, y, z);
        if (id == blocks.chest) {
                if (Level.getChestSlot(x, y, z, 0) == items.faststonexpos ||
                        Level.getChestSlot(x, y, z, 0) == items.faststonexneg ||
                        Level.getChestSlot(x, y, z, 0) == items.faststonezpos ||
                        Level.getChestSlot(x, y, z, 0) == items.faststonezneg) {
                        var item = Level.getChestSlot(x, y, z, 0);
                        var dmg = Level.getChestSlotData(x, y, z, 0);
                        if (dmg <= 10) {
                                Level.setChestSlot(x, y, z, 0, item, dmg + 1);
                        } else {
                                ModPE.showTipMessage("Maximum strength reached");
                        }
                }
        }
}

function checkScrewdriverRedHook(x, y, z) {
        ScrewdriverRedHook(x + 1, y, z);
        ScrewdriverRedHook(x - 1, y, z);
        ScrewdriverRedHook(x, y + 1, z);
        ScrewdriverRedHook(x, y - 1, z);
        ScrewdriverRedHook(x, y, z + 1);
        ScrewdriverRedHook(x, y, z - 1);
}

function ScrewdriverRedHook(x, y, z) {
        var id = Level.getTile(x, y, z);
        if (id == blocks.chest) {
                if (Level.getChestSlot(x, y, z, 0) == items.faststonexpos ||
                        Level.getChestSlot(x, y, z, 0) == items.faststonexneg ||
                        Level.getChestSlot(x, y, z, 0) == items.faststonezpos ||
                        Level.getChestSlot(x, y, z, 0) == items.faststonezneg) {
                        var item = Level.getChestSlot(x, y, z, 0);
                        var dmg = Level.getChestSlotData(x, y, z, 0);
                        if (dmg <= 10) {
                                Level.setChestSlot(x, y, z, 0, item, dmg - 1);
                        } else {
                                ModPE.showTipMessage("Minimum strength reached");
                        }
                }
        }
}

function cheststoneHook(x, y, z, id) {
        if (id == items.jumpercheststone) {
                Entity.setVelY(Player.getEntity(), 1);
        }
        if (id == items.elevatorcheststone) {
                elevator.active = true;
        }
        if (id == items.tardischeststone) {
                //saving position
                tardis.formerposition.x = x;
                tardis.formerposition.y = y + 3;
                tardis.formerposition.z = z;
                clientMessage("welcome to the tardis. tap and hold on the walls to exit. hope you brought torches");
                Entity.setPosition(Player.getEntity(), 0, 25, 0);
                tardis.inside = true;
        }
        if (id == items.cheststonebeam) {
                for (var i = 0; i < 64; i++) {
                        if (Level.getTile(x + i, y, z) != 0 && Level.getTile(x + i, y, z) != blocks.chest) {
                                break;
                        }
                        checkChestStoneHook(x + i, y, z);
                }
                for (var p = 0; p < 64; p++) {
                        if (Level.getTile(x - p, y, z) != 0 && Level.getTile(x - p, y, z) != blocks.chest) {
                                break;
                        }
                        checkChestStoneHook(x - p, y, z);
                }


                for (var o = 0; o < 64; o++) {
                        if (Level.getTile(x, y + o, z) != 0 && Level.getTile(x, y + o, z) != blocks.chest) {
                                break;
                        }
                        checkChestStoneHook(x, y + o, z);
                }

                for (var u = 0; u < 64; u++) {
                        if (Level.getTile(x, y - u, z) != 0 && Level.getTile(x, y - u, z) != blocks.chest) {
                                break;
                        }
                        checkChestStoneHook(x, y - u, z);
                }

                for (var e = 0; e < 64; e++) {
                        if (Level.getTile(x, y, z + e) != 0 && Level.getTile(x, y, z + e) != blocks.chest) {
                                break;
                        }
                        checkChestStoneHook(x, y, z + e);
                }
                for (var s = 0; s < 64; s++) {
                        if (Level.getTile(x, y, z - s) != 0 && Level.getTile(x, y, z - s) != blocks.chest) {
                                break;
                        }
                        checkChestStoneHook(x, y, z - s);
                }


        }
        if (id == items.cheststonewardrobe) {
                if (Level.getTile(x, y - 1, z) == blocks.chest) {
                        var helmet = [Player.getArmorSlot(ArmorType.helmet), Player.getArmorSlotDamage(ArmorType.helmet)];
                        var chestplate = [Player.getArmorSlot(ArmorType.chestplate), Player.getArmorSlotDamage(ArmorType.chestplate)];
                        var leggings = [Player.getArmorSlot(ArmorType.leggings), Player.getArmorSlotDamage(ArmorType.leggings)];
                        var boots = [Player.getArmorSlot(ArmorType.boots), Player.getArmorSlotDamage(ArmorType.boots)];

                        var slot0 = [Level.getChestSlot(x, y - 1, z, 0), Level.getChestSlotData(x, y - 1, z, 0)];
                        var slot1 = [Level.getChestSlot(x, y - 1, z, 1), Level.getChestSlotData(x, y - 1, z, 1)];
                        var slot2 = [Level.getChestSlot(x, y - 1, z, 2), Level.getChestSlotData(x, y - 1, z, 2)];
                        var slot3 = [Level.getChestSlot(x, y - 1, z, 3), Level.getChestSlotData(x, y - 1, z, 3)];

                        for (var it in armors) {
                                if (slot0[0] == armors[it][0]) {
                                        Player.setArmorSlot(armors[it][1], armors[it][0], slot0[1]);
                                        Level.setChestSlot(x, y - 1, z, 0, helmet[0], helmet[1], 1);
                                }
                                if (slot1[0] == armors[it][0]) {
                                        Player.setArmorSlot(armors[it][1], armors[it][0], slot1[1]);
                                        Level.setChestSlot(x, y - 1, z, 0, chestplate[0], chestplate[1], 1);
                                }
                                if (slot2[0] == armors[it][0]) {
                                        Player.setArmorSlot(armors[it][1], armors[it][0], slot2[1]);
                                        Level.setChestSlot(x, y - 1, z, 0, leggings[0], leggings[1], 1);
                                }
                                if (slot3[0] == armors[it][0]) {
                                        Player.setArmorSlot(armors[it][1], armors[it][0], slot3[1]);
                                        Level.setChestSlot(x, y - 1, z, 0, boots[0], boots[1], 1);
                                }
                        }
                        ModPE.showTipMessage("Swapped Armor");
                }
        }
        if (id == items.cheststonebridge) {
                cheststonebridge.active = true;
                cheststonebridge.x = x;
                cheststonebridge.y = y;
                cheststonebridge.z = z;
                ModPE.showTipMessage("bridge active");
        }
        if (id == items.faststonexpos) {
                Entity.setVelX(Player.getEntity, 0.1 * Level.getChestSlotData(x, y, z, 0));
        }

        if (id == items.faststonexneg) {
                Entity.setVelX(Player.getEntity, -0.1 * Level.getChestSlotData(x, y, z, 0));
        }
        if (id == items.faststonezpos) {
                Entity.setVelZ(Player.getEntity, 0.1 * Level.getChestSlotData(x, y, z, 0));
        }

        if (id == items.faststonezneg) {
                Entity.setVelZ(Player.getEntity, -0.1 * Level.getChestSlotData(x, y, z, 0));
        }
        if (id == items.faststone) {
                clientMessage("You need a blue screwdriver to choose the direction!");
        }
}



function attackHook(attacker, victim) {
        //firesword sets player on fire
        var item = Player.getCarriedItem;
        for (var i in swords) {
                if (item == swords[i][0]) {
                        Entity.damage(victim, swords[i][1]);
                        Item.damage();
                        break;
                }
        }

        if (item == items.firesword) {
                Entity.setFireTicks(Player.getEntity(), 5);
                Entity.setHealth(Entity.getHealth(victim) - 20);
        }

        //Snowsword rains snowballs
        if (item == items.snowsword) {
                snowsword.active = true;
                snowsword.victim = victim;
        }

        if (item == items.arrowsword) {
                arrowsword.victim = victim;
                arrowsword.active = true;
        }

        if (item == items.lavasword) {
                Level.setTile(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 10);
        }

        if (item == items.gravitygun) {
                ggMob = victim;
                isPickingEntity = true;
                Item.damage();
        }
        if (item == items.hypertntsword) {
                if (Player.removeItem(items.tntammo, 2) == true) {
                        hypertntsword.active = true;
                        hypertntsword.victim = victim;
                        Item.damage();
                }
        }
        if (item == items.tntsword) {
                if (Player.removeItem(items.tntammo, 2) == true) {
                        tntsword.active = true;
                        tntsword.victim = victim;
                        Item.damage();
                }
        }
}




function entityAddedHook(added) {

        //TNT makes you faster
        if (Entity.getEntityTypeId(added) == 65 && Player.getArmorSlot(3) == items.tntboots) {
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
                        sheeptntthrower.ShootDir = lookDir(getYaw(), getPitch());
                        arrow = Level.spawnMob(getPlayerX() + (ShootDir.x * 2), getPlayerY() + (ShootDir.y * 2), getPlayerZ() + (ShootDir.z * 2), 13);
                        shootEntity(arrow, 4, 4, 4);
                        fireThrow = 1;
                        break;
        }

}

function leaveGame() {
        saveTardis();
}




////////////////////////////////////////
//////CUSTOM FUNKTIONEN/////////////////
////////////////////////////////////////

function clientErrors() {
        var strings = " ";
        for (var i in errors) {
                strings = strings + errors[i];
        }
        clientMessage("errors: " + strings);
}

function rideEntity(entity) {
        var shootDir = lookDir(getYaw(), getPitch());
        setVelX(entity, shootDir.x * reit);
        setVelZ(entity, shootDir.z * reit);
}

function ParticleRow(type, x1, y1, z1, x2, y2, z2, ammount, size, velocity) {
        var dirx = 0;
        var diry = 0;
        var dirz = 0;
        var distance = {
                x: 0,
                y: 0,
                z: 0,
                abs: 0
        };
        var anteil = {
                x: 0,
                y: 0,
                z: 0
        };
        if (x2 > x1) {
                dirx = 1;
                distance.x = Math.abs(x2) - Math.abs(x1);
        } else {
                dirx = -1;
                distance.x = Math.abs(x1) - Math.abs(x2);
        }
        if (y2 > y1) {
                diry = 1;
                distance.y = Math.abs(y2) - Math.abs(y1);
        } else {
                diry = -1;
                distance.y = Math.abs(y1) - Math.abs(y2);
        }
        if (z2 > z1) {
                dirz = 1;
                distance.z = Math.abs(z2) - Math.abs(z1);
        } else {
                dirz = -1;
                distance.z = Math.abs(z1) - Math.abs(z2);
        }
        for (var i = 0; i < ammount; i++) {
                Level.addParticle(type, x + (distance.x / ammount * i) * dirx, y + (distance.y / ammount * i) * diry, z + (distance.z / ammount * i) * dirz, 0, 0, 0, 1);
        }

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
                var turmmob1 = Level.spawnMob(x, y, z, mobid);
                var turmmob2 = Level.spawnMob(x, y, z, mobid);
                rideAnimal(turmmob2, turmmob1);
                var turmmob3 = Level.spawnMob(x, y, z, mobid);
                rideAnimal(turmmob3, turmmob2);
                var turmmob4 = Level.spawnMob(x, y, z, mobid);
                rideAnimal(turmmob4, turmmob3);
                var turmmob5 = Level.spawnMob(x, y, z, mobid);
                rideAnimal(turmmob5, turmmob4);
                var turmmob6 = Level.spawnMob(x, y, z, mobid);
                rideAnimal(turmmob6, turmmob5);
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
                clientMessage("please put in correct values.\n If you happen to see this as a casual player, you just need to know that something went wrong, you can't do anything about it and i'ts all the programmers fault!");
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

function checkChestStoneHook(x, y, z) {
        if (Level.getTile(x, y, z) == blocks.chest) {
                var cheststone = Level.getChestSlot(x, y, z, 0);
                for (var i in cheststones) {
                        if (cheststone == cheststones[i][0]) {
                                cheststoneHook(x, y, z, cheststone);
                        }
                }
        }
}

function randomize(min, max) {
        return Math.random() * (max - min) + min;
}

Item.newArmor = function(id, iconName, iconIndex, name, texture, damageReduceAmount, maxDamage, armorType) {
        armors.push([id, armorType]);
        try {
                //Item.newArmor(int id, String iconName, int iconIndex, String name, String texture, int damageReduceAmount, int maxDamage, int armorType)
                Item.defineArmor(id, iconName, iconIndex, name, texture, damageReduceAmount, maxDamage, armorType);
        } catch (e) {
                print("error with armor " + id);
                errors.push(e + " \n");
        }
};

Item.setSword = function(id, damage, max) {
        swords.push([id, damage]);
        maxDamages.push([id, max]);
};

Item.max = function(id, max){
        maxDamages.push([id, max]);
};

Item.equip = function(id){
        handitems.push(id);
};

Item.setChestStone = function(id) {
        cheststones.push(id);
};

Item.damage = function() {
        var pcid = Player.getCarriedItemData();
        if (pcid >= Item.getMaxDamage(Player.getCarriedItem())) {
                Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.break", 2);
                Entity.setCarriedItem(getPlayerEnt(), 0, 0, 0);
        } else {
                Entity.setCarriedItem(getPlayerEnt(), id, 1, pcid + 1);
        }
};


Item.defineItem = function(id, textureName, textureNumber, name, stackLimit) {
        try {
                ModPE.setItem(id, textureName, textureNumber, name, stackLimit);
        } catch (e) {
                print("error with item " + id + e);
                errors.push(e + " \n");
        }
};

Item.recipe = function(id1, ammount1, damage1, order1, ingredients1) {
        recipes.push({
                id: id1,
                ammount: ammount1,
                damage: damage1,
                order: order1,
                ingredients: ingredients1
        });
};

Block.newBlock = function(id, name, textureNames, sourceId, opaque, renderType) {
        try {
                Block.defineBlock(id, name, textureNames, sourceId, opaque, renderType);
        } catch (e) {
                Block.defineBlock(id, name, "enchanting_table_top", sourceId, opaque, renderType);
                errors.push(e + " \n");
        }
};

Player.removeItem = function(item, ammount) {
        if (Player.hasItemCount(item) != 0) {
                Player.setInventorySlot(Player.hasItemSlots(item)[0], item, Player.getInventorySlotCount(Player.hasItemSlots(item)[0]) - 1, 0);
                return true;
        } else {
                clientMessage("you need" + Item.getName(item, 0, false));
                Item.getName(par1int, par2int, par3boolean);
                return false;
        }
};

Player.setFloor = function(id, damage) {
        Level.setTile(Math.floor(Player.getX(), Math.floor(Player.getY()) - 2, Math.floor(Player.getZ()), id, damage));
};

Player.hasItemSlots = function(item) {
        var i = 0;
        var slots = [];
        while (i < 27) {
                i++;
                if (Player.getInventorySlot(i) == item) {
                        gotit.push(i);
                }
                return slots;
        }
};

Player.hasItemCount = function(item) {
        var count = 0;
        for (var i = 0; i < 28; i++) {
                if (Player.getInventorySlot(i) == item) {
                        count += Player.getInventorySlotCount(i);
                }
        }
        return count;
};

Entity.damage = function(victim, damage) {
        Entity.setHealth(Entity.getHealth(victim) - damage);
};

Level.getSurroundingBlock = function(x, y, z, id) {
        if (Level.getTile(x, y + 1, z) == id ||
                Level.getTile(x, y - 1, z) == id ||
                Level.getTile(x + 1, y, z) == id ||
                Level.getTile(x - 1, y, z) == id ||
                Level.getTile(x, y, z + 1) == id ||
                Level.getTile(x, y, z - 1) == id) {
                return true;
        } else {
                return false;
        }
};

Level.getSurroundingIds = function(x, y, z) {
        var ids = [];
        ids.push(Level.getTile(x + 1, y, z));
        ids.push(Level.getTile(x - 1, y, z));
        ids.push(Level.getTile(x, y + 1, z));
        ids.push(Level.getTile(x, y - 1, z));
        ids.push(Level.getTile(x, y, z + 1));
        ids.push(Level.getTile(x, y, z - 1));
        return ids;
};

function createRecipies() {
        for (var i in recipes) {
                try {
                        Item.addShapedRecipe(recipes[i].id, recipes[i].ammount, recipes[i].damage, recipes[i].order, recipes[i].ingredients);
                } catch (e) {
                        print("recipe error" + i);
                        break;
                }
        }

}

function setMaxDamages(){
        for(var i in maxDamages){
                Item.setMaxDamage(maxDamages[i][0], maxDamages[i][1]);
        }
}

function setHandItems(){
        for(var i in handitems){
                Item.setHandEquipped(handitems[i], true);
        }
}



function changeCarriedItemHook() {
        clientMessage("changed item");
}
/*
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
*/
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
        createModItems();
        createCraftItems();
        createCheststoneItems();

        createRecipies();
       // createInventory();
}

startup();
