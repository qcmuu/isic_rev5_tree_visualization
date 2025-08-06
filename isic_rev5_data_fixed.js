const isicData = [
  {
    "level": "Section",
    "code": "A",
    "name": "Agriculture, forestry and fishing",
    "parentCode": "",
    "keywords": "Agriculture; forestry and fishing",
    "note": "This section includes the exploitation of vegetal and animal natural resources, comprising the activities of growing of crops, raising and breeding of animals, harvesting of timber and other plants, production of animal products from a farm or natural habitats."
  },
  {
    "level": "Division",
    "code": "A01",
    "name": "Crop and animal production, hunting and related service activities",
    "parentCode": "A",
    "keywords": "Crop and animal production; hunting and related service activities",
    "note": "This division includes two basic activities, namely the production of crop products and production of animal products. This division includes growing of crops on open land, under cover or in greenhouses.Group 015 (Mixed farming) breaks with the usual principles for identifying main activity. It accepts that many agricultural units have reasonably balanced crop and animal production, and that it would be arbitrary to classify them in one category or the other.This division includes the soilless cultivation of crops, including hydroponics and aquaponics."
  },
  {
    "level": "Group",
    "code": "A011",
    "name": "Growing of non-perennial crops",
    "parentCode": "A01",
    "keywords": "Growing of non-perennial crops",
    "note": "This group includes the growing of non-perennial crops, i.e. plants that do not last for more than two growing seasons. Included is the growing of these plants for the purpose of seed production."
  },
  {
    "level": "Class",
    "code": "A0111",
    "name": "Growing of cereals (except rice), leguminous crops and oil seeds",
    "parentCode": "A011",
    "keywords": "Growing of cereals (except rice); leguminous crops and oil seeds",
    "note": "This class includes all forms of growing of cereals, leguminous crops and oil seeds in open fields, for obtaining crops or for seed production. The growing of these crops is often combined within agricultural units. This class includes: - growing of cereals such as: • wheat • grain maize • sorghum • barley • rye • oats • millets •Pseudocereals, fruits or seeds - used as cereals, such as ◦ quinoa ◦ amaranth ◦ chia - growing of leguminous crops such as: • beans • broad beans • chick peas • cow peas • lentils • lupines • peas • pigeon peas - growing of oil seeds such as: • soya beans • groundnuts • castor bean • linseed • mustard seed • niger seed • rapeseed • safflower seed • sesame seed • sunflower seed"
  },
  {
    "level": "Class",
    "code": "A0112",
    "name": "Growing of rice",
    "parentCode": "A011",
    "keywords": "Growing of rice",
    "note": "This class includes:- growing of rice"
  },
  {
    "level": "Class",
    "code": "A0113",
    "name": "Growing of vegetables and melons, roots and tubers",
    "parentCode": "A011",
    "keywords": "Growing of vegetables and melons; roots and tubers",
    "note": "This class includes: - growing of leafy or stem vegetables, such as: • artichokes • asparagus • cabbages • cauliflower and broccoli • lettuce and chicory • spinach - growing of fruit bearing vegetables,such as: • cucumbers and gherkins • eggplants (aubergines) • tomatoes • melons - growing of root, bulb or tuberous vegetables, such as.: • carrots • turnips • garlic • onions (incl. shallots) • leeks and other alliaceous vegetables - growing of mushrooms and truffles - growing of vegetable seeds, including sugar beet seeds, excluding other beet seeds - growing of sugar beet - growing of chillies, peppers (capsicum spp.) - growing of roots and tubers, such as: • potatoes • sweet potatoes • cassava • yams"
  },
  {
    "level": "Class",
    "code": "A0114",
    "name": "Growing of sugar cane",
    "parentCode": "A011",
    "keywords": "Growing of sugar cane",
    "note": "This class includes: - growing of sugar cane"
  },
  {
    "level": "Class",
    "code": "A0115",
    "name": "Growing of tobacco",
    "parentCode": "A011",
    "keywords": "Growing of tobacco",
    "note": "This class includes:- growing of unmanufactured tobacco"
  },
  {
    "level": "Class",
    "code": "A0116",
    "name": "Growing of fibre crops",
    "parentCode": "A011",
    "keywords": "Growing of fibre crops",
    "note": "This class includes growing of fiber crops such as:- growing of cotton- growing of jute, kenaf and other textile bast fibres- growing of flax and hemp - growing of sisal and other textile fibre of the genus agave- growing of abaca, ramie and other vegetable textile fibres"
  },
  {
    "level": "Class",
    "code": "A0119",
    "name": "Growing of other non-perennial crops",
    "parentCode": "A011",
    "keywords": "Growing of other non-perennial crops",
    "note": "This class includes the growing of all other non-perennial crops, e.g:- growing of swedes, mangolds, roots, clover, alfalfa, sainfoin, maize, lupines, other grasses, Kale for fodder and similar crops forage products - growing of beet seeds and seeds of forage plants- growing of flowers- production of cut flowers and flower buds- growing of flower seeds"
  },
  {
    "level": "Group",
    "code": "A012",
    "name": "Growing of perennial crops",
    "parentCode": "A01",
    "keywords": "Growing of perennial crops",
    "note": "This group includes the growing of perennial crops, i.e. plants that lasts for more than two growing seasons, either dying back after each season or growing continuously. Included is the growing of these plants for the purpose of seed production."
  },
  {
    "level": "Class",
    "code": "A0121",
    "name": "Growing of grapes",
    "parentCode": "A012",
    "keywords": "Growing of grapes",
    "note": "This class includes:- growing of grapes for consumption or the production of wine, juice, vinegar and other dried fruit, e.g. raisins, zante currants and sultanas"
  },
  {
    "level": "Class",
    "code": "A0122",
    "name": "Growing of tropical and subtropical fruits",
    "parentCode": "A012",
    "keywords": "Growing of tropical and subtropical fruits",
    "note": "This class includes: - growing of tropical and subtropical fruits such as: • avocados • bananas and plantains • dates • figs • mangoes • papayas • pineapples"
  },
  {
    "level": "Class",
    "code": "A0123",
    "name": "Growing of citrus fruits",
    "parentCode": "A012",
    "keywords": "Growing of citrus fruits",
    "note": "This class includes: - growing of citrus fruits such as: • grapefruit and pomelo • lemons and limes • oranges • tangerines, mandarins and clementines"
  },
  {
    "level": "Class",
    "code": "A0124",
    "name": "Growing of pome fruits and stone fruits",
    "parentCode": "A012",
    "keywords": "Growing of pome fruits and stone fruits",
    "note": "This class includes: - growing of pome fruits and stone fruits such as: • apples • apricots • cherries and sour cherries • peaches and nectarines • pears and quinces • plums and sloes"
  },
  {
    "level": "Class",
    "code": "A0125",
    "name": "Growing of other tree and bush fruits and nuts",
    "parentCode": "A012",
    "keywords": "Growing of other tree and bush fruits and nuts",
    "note": "This class includes:- growing of berries such as:• blueberries• currants• gooseberries• kiwi fruit• raspberries• strawberries- growing of fruit seeds- growing of edible nuts such as:• almonds• cashew nuts• chestnuts• hazelnuts• pistachios• walnuts- growing of other tree and bush fruits such as:• locust beans"
  },
  {
    "level": "Class",
    "code": "A0126",
    "name": "Growing of oleaginous fruits",
    "parentCode": "A012",
    "keywords": "Growing of oleaginous fruits",
    "note": "This class includes: - growing of oleaginous fruits such as: • coconuts • olives • oil palms"
  },
  {
    "level": "Class",
    "code": "A0127",
    "name": "Growing of beverage crops",
    "parentCode": "A012",
    "keywords": "Growing of beverage crops",
    "note": "This class includes:- growing of beverage crops:• coffee• tea• maté• cocoa"
  },
  {
    "level": "Class",
    "code": "A0128",
    "name": "Growing of spices, aromatic, drug and pharmaceutical crops",
    "parentCode": "A012",
    "keywords": "Growing of spices; aromatic; drug and pharmaceutical crops",
    "note": "This class includes:- growing of perennial and non-perennial spices and aromatic crops:• pepper (piper spp.)• nutmeg, mace and cardamoms• anise, badian and fennel• cinnamon (canella)• cloves• ginger• vanilla• hops• caraway- growing of drug and narcotic crops"
  },
  {
    "level": "Class",
    "code": "A0129",
    "name": "Growing of other perennial crops",
    "parentCode": "A012",
    "keywords": "Growing of other perennial crops",
    "note": "This class includes:- growing of rubber trees for harvesting of latex- growing of Christmas trees- growing of trees for extraction of sap- growing of vegetable materials of a kind used primarily for plaiting- growing of short rotation coppice as energy crop, e.g. poplar and willowIncludes also:"
  },
  {
    "level": "Group",
    "code": "A013",
    "name": "Plant propagation",
    "parentCode": "A01",
    "keywords": "Plant propagation",
    "note": ""
  },
  {
    "level": "Class",
    "code": "A0130",
    "name": "Plant propagation",
    "parentCode": "A013",
    "keywords": "Plant propagation",
    "note": "This class includes the production of all vegetative planting materials including cuttings, suckers and seedlings for direct plant propagation or to create plant grafting stock into which selected scion is grafted for eventual planting to produce crops.This class includes:- growing of plants for planting- growing of plants for ornamental purposes, including turf for transplanting- growing of live plants for bulbs, tubers and roots; cuttings and slips; mushroom spawn - operation of tree nurseries, except forest tree nurseries"
  },
  {
    "level": "Group",
    "code": "A014",
    "name": "Animal production",
    "parentCode": "A01",
    "keywords": "Animal production",
    "note": "This group includes farming (husbandry, raising) and breeding of all animals, except aquatic animals."
  },
  {
    "level": "Class",
    "code": "A0141",
    "name": "Raising of cattle and buffaloes",
    "parentCode": "A014",
    "keywords": "Raising of cattle and buffaloes",
    "note": "This class includes:- raising and breeding of cattle and buffaloes for meat- production of bovine semen"
  },
  {
    "level": "Class",
    "code": "A0142",
    "name": "Raising of horses and other equines",
    "parentCode": "A014",
    "keywords": "Raising of horses and other equines",
    "note": "This class includes:- raising and breeding of horses, asses, mules or hinnies"
  },
  {
    "level": "Class",
    "code": "A0143",
    "name": "Raising of camels and camelids",
    "parentCode": "A014",
    "keywords": "Raising of camels and camelids",
    "note": "This class includes:- raising and breeding of camels (dromedary) and camelids"
  },
  {
    "level": "Class",
    "code": "A0144",
    "name": "Raising of sheep and goats",
    "parentCode": "A014",
    "keywords": "Raising of sheep and goats",
    "note": "This class includes:- raising and breeding of sheep and goats- production of raw sheep or goat milk- production of raw wool"
  },
  {
    "level": "Class",
    "code": "A0145",
    "name": "Raising of swine and pigs",
    "parentCode": "A014",
    "keywords": "Raising of swine and pigs",
    "note": "This class includes:- raising and breeding of swine and pigs"
  },
  {
    "level": "Class",
    "code": "A0146",
    "name": "Raising of poultry",
    "parentCode": "A014",
    "keywords": "Raising of poultry",
    "note": "This class includes:- raising and breeding of poultry:• chickens, turkeys, ducks, geese, quails and guinea fowls- production of eggs from poultry- operation of poultry hatcheries"
  },
  {
    "level": "Class",
    "code": "A0149",
    "name": "Raising of other animals",
    "parentCode": "A014",
    "keywords": "Raising of other animals",
    "note": "This class includes:- raising and breeding of semi-domesticated or other live animals:• ostriches and emus and other birds that are not poultry• insects• rabbits and other fur animals• reindeer- production of fur skins, skins of birds and reptiles from land farms- operation of worm farms, land mollusc farms, snail farms etc.- raising of silk worms, production of silk worm cocoons- bee-keeping, bee propagation for sale, and production of e.g. honey, beeswax, propolis, honeycomb - raising and breeding of pet animals (except fish):• cats and dogs• pet birds, e.g. parakeets• hamsters"
  },
  {
    "level": "Group",
    "code": "A015",
    "name": "Mixed farming",
    "parentCode": "A01",
    "keywords": "Mixed farming",
    "note": ""
  },
  {
    "level": "Class",
    "code": "A0150",
    "name": "Mixed farming",
    "parentCode": "A015",
    "keywords": "Mixed farming",
    "note": "This class includes the combined production of crops and animals without a specialised production of crops or animals. The size of the overall farming operation is not a determining factor. If, for example, either production of crops or animals in a given unit is 66% or more of standard output, the combinedactivity should not be included here, but allocated to crop or animal farming."
  },
  {
    "level": "Group",
    "code": "A016",
    "name": "Support activities to agriculture and post-harvest crop activities",
    "parentCode": "A01",
    "keywords": "Support activities to agriculture and post-harvest crop activities",
    "note": "This group includes activities incidental to agricultural production and activities similar to agriculture but not undertaken for production purposes (in the sense of harvesting agricultural products), usually done on a fee or contract basis. It also includes post-harvest crop activities, aimed at preparing agricultural products for the primary market."
  },
  {
    "level": "Class",
    "code": "A0161",
    "name": "Support activities for crop production",
    "parentCode": "A016",
    "keywords": "Support activities for crop production",
    "note": "This class includes:- crop production activities on a fee or contract basis:• preparation of fields• establishing a crop• treatment of crops• crop spraying, including by air• trimming of fruit trees and vines• transplanting of rice, thinning of beets• harvesting• pest control (including rabbits) in connection with agriculture- operation of agricultural irrigation equipment"
  },
  {
    "level": "Class",
    "code": "A0162",
    "name": "Support activities for animal production",
    "parentCode": "A016",
    "keywords": "Support activities for animal production",
    "note": "This class includes:- Animal production activities on a fee or contract basis:• activities to promote propagation, growth and output of animals• herd testing services, droving services, agistment services, poultry caponising, coop cleaning etc.• activities related to artificial insemination• stud services• sheep shearing• farm animal boarding and careautomated egg hatching for poultry"
  },
  {
    "level": "Class",
    "code": "A0163",
    "name": "Post-harvest crop activities",
    "parentCode": "A016",
    "keywords": "Post-harvest crop activities",
    "note": "This class includes post-harvest crop activities on a fee or contract basis:- preparation of crops for primary markets, e.g. cleaning, trimming, grading, disinfecting- cotton ginning- preparation of tobacco leaves, e.g. sun drying- preparation of cocoa beans, e.g. peeling- waxing of fruit- drying of fruit, vegetable, herbs, spices, medicinal herbs and tobacco under natural conditions- sorting, cleaning and cutting of medicinal herbs- grain drying- retting of plants bearing vegetable textile fibers (jute, flax, coir etc.) not associated with the growing of vegetable textile fibers- artificial ripening of fruits as a service, e.g. banana ripening"
  },
  {
    "level": "Class",
    "code": "A0164",
    "name": "Seed processing for propagation",
    "parentCode": "A016",
    "keywords": "Seed processing for propagation",
    "note": "This class includes seed-processing activities on fee or contract basis, aimed at improving the propagation quality of seed through the removal of non-seed materials, undersized, mechanically or insect-damaged and immature seeds as well as removing the seed moisture to a safe level for seed storage. This activity includes the drying, cleaning, grading and treating of seeds until they are marketed. The treatment of genetically modified seeds is included here."
  },
  {
    "level": "Group",
    "code": "A017",
    "name": "Hunting, trapping and related service activities",
    "parentCode": "A01",
    "keywords": "Hunting; trapping and related service activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "A0170",
    "name": "Hunting, trapping and related service activities",
    "parentCode": "A017",
    "keywords": "Hunting; trapping and related service activities",
    "note": "This class includes:- hunting and trapping on a commercial basis- taking of wild animals (dead or alive) for food, fur, skin, for animal population control or for use in research, in zoos or as pets- production of fur skins, reptile or bird skins from hunting or trapping activities- catching of frogs and toads in the wild- collecting of snails in the wild"
  },
  {
    "level": "Division",
    "code": "A02",
    "name": "Forestry and logging",
    "parentCode": "A",
    "keywords": "Forestry and logging",
    "note": "This division includes silviculture and the production of roundwood as well as the extraction and gathering of wild growing non-wood forest products. Besides the production of timber, forestry activities result in products that undergo little processing, such as firewood, charcoal and roundwood used in an unprocessed form (e.g. pit-props, pulpwood). These activities can be carried out in natural, semi-natural or planted forests."
  },
  {
    "level": "Group",
    "code": "A021",
    "name": "Silviculture and other forestry activities",
    "parentCode": "A02",
    "keywords": "Silviculture and other forestry activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "A0210",
    "name": "Silviculture and other forestry activities",
    "parentCode": "A021",
    "keywords": "Silviculture and other forestry activities",
    "note": "This class includes:- growing of standing timber: planting, replanting, transplanting, thinning and conserving of forests and timber tracts- growing of coppice, pulpwood and fire wood- operation of forest tree nurseriesThese activities can be carried out in natural, semi-natural or planted forests."
  },
  {
    "level": "Group",
    "code": "A022",
    "name": "Logging",
    "parentCode": "A02",
    "keywords": "Logging",
    "note": ""
  },
  {
    "level": "Class",
    "code": "A0220",
    "name": "Logging",
    "parentCode": "A022",
    "keywords": "Logging",
    "note": "This class includes:- production of roundwood for forest-based manufacturing industries- production of roundwood used in an unprocessed form such as pit-props, fence posts and utility poles"
  },
  {
    "level": "Group",
    "code": "A023",
    "name": "Gathering of non-wood forest products",
    "parentCode": "A02",
    "keywords": "Gathering of non-wood forest products",
    "note": ""
  },
  {
    "level": "Class",
    "code": "A0230",
    "name": "Gathering of non-wood forest products",
    "parentCode": "A023",
    "keywords": "Gathering of non-wood forest products",
    "note": "This class includes:- gathering of wild growing materials, e.g.:• mushrooms, truffles• berries• nuts• balata and other rubber-like gums• cork• lac and resins• balsams• acorns, horse chestnuts• mosses and lichens• vegetable hair/eelgrass"
  },
  {
    "level": "Group",
    "code": "A024",
    "name": "Support services to forestry",
    "parentCode": "A02",
    "keywords": "Support services to forestry",
    "note": ""
  },
  {
    "level": "Class",
    "code": "A0240",
    "name": "Support services to forestry",
    "parentCode": "A024",
    "keywords": "Support services to forestry",
    "note": "This class includes carrying out part of the forestry operation on a fee or contract basis.This class includes:- forestry service activities:• forestry inventories• forest management consulting services• timber evaluation• forest fire prevention • forest pest control - logging service activities:• transport of logs within the forest"
  },
  {
    "level": "Division",
    "code": "A03",
    "name": "Fishing and aquaculture",
    "parentCode": "A",
    "keywords": "Fishing and aquaculture",
    "note": "This division includes capture fishery and aquaculture. Gathering marine, brackish or freshwater fish, crustaceans, molluscs and other aquatic organisms and products (e.g. aquatic plants, pearls, sponges)."
  },
  {
    "level": "Group",
    "code": "A031",
    "name": "Fishing",
    "parentCode": "A03",
    "keywords": "Fishing",
    "note": "This group includes \"capture fishery\", i.e. the harvesting, collecting and gathering activities directed at removing or collecting live wild aquatic organisms (predominantly fish, molluscs and crustaceans) including plants from the oceanic, coastal or inland waters for human consumption and other purposes by hand or more usually by various types of fishing gear such as nets, lines and stationary traps. Such activities can be conducted on the intertidal shoreline (e.g. collection of molluscs such as mussels and oysters) coastal waters or offshore waters. These activities also include fishing in restocked water bodies."
  },
  {
    "level": "Class",
    "code": "A0311",
    "name": "Marine fishing",
    "parentCode": "A031",
    "keywords": "Marine fishing",
    "note": "This class includes:- fishing on a commercial basis in ocean and coastal waters- taking of marine crustaceans and molluscs- whale catching- taking of marine aquatic animals, e.g.: turtles, sea squirts, tunicates, sea urchins"
  },
  {
    "level": "Class",
    "code": "A0312",
    "name": "Freshwater fishing",
    "parentCode": "A031",
    "keywords": "Freshwater fishing",
    "note": "This class includes:- fishing on a commercial basis in inland waters- taking of freshwater crustaceans and molluscs- taking of freshwater aquatic animals"
  },
  {
    "level": "Group",
    "code": "A032",
    "name": "Aquaculture",
    "parentCode": "A03",
    "keywords": "Aquaculture",
    "note": "This group includes aquaculture (or aquafarming), i.e. the production process involving the culturing or farming (including harvesting) of aquatic organisms (e.g. fish, molluscs, crustaceans, plants, crocodiles, alligators and amphibians) using techniques designed to increase the production of the organisms in question beyond the natural capacity of the environment (e.g. regular stocking, feeding and protection from predators). Aquaculture also encompasses individual, corporate or state ownership of the individual organisms throughout the rearing or culture stage, up to and including harvesting.Culturing/farming refers to the rearing up to their juvenile and/or adult phase under captive conditions of the above organisms."
  },
  {
    "level": "Class",
    "code": "A0321",
    "name": "Marine aquaculture",
    "parentCode": "A032",
    "keywords": "Marine aquaculture",
    "note": "This class includes:- fish farming in sea water including farming of marine ornamental fish- production of bivalve spat (oyster mussel etc.), lobsterlings, shrimp post-larvae, fish fry and fingerlings- growing of seaweeds and algae- culture of crustaceans, bivalves, other molluscs and other aquatic animals in sea water"
  },
  {
    "level": "Class",
    "code": "A0322",
    "name": "Freshwater aquaculture",
    "parentCode": "A032",
    "keywords": "Freshwater aquaculture",
    "note": "This class includes:- fish farming in freshwater including farming of freshwater ornamental fish- culture of freshwater crustaceans, bivalves, other molluscs and other aquatic animals- operation of fish hatcheries (freshwater)- farming of frogs"
  },
  {
    "level": "Group",
    "code": "A033",
    "name": "Support activities for fishing and aquaculture",
    "parentCode": "A03",
    "keywords": "Support activities for fishing and aquaculture",
    "note": ""
  },
  {
    "level": "Class",
    "code": "A0330",
    "name": "Support activities for fishing and aquaculture",
    "parentCode": "A033",
    "keywords": "Support activities for fishing and aquaculture",
    "note": "This class includes:- service activities incidental to marine or freshwater fishery or aquaculture."
  },
  {
    "level": "Section",
    "code": "B",
    "name": "Mining and quarrying",
    "parentCode": "",
    "keywords": "Mining and quarrying",
    "note": "Mining and quarrying include the extraction of minerals occurring naturally as solids (coal and ores), liquids (petroleum) or gases (natural gas), from mines, seabed, and the extraction of salt from sea water, brine, and other saline waters. Extraction can be achieved by different methods such as underground or surface mining, well operation, seabed mining etc.This section includes supplementary activities aimed at preparing the crude materials for marketing, for example, crushing, grinding, cleaning, drying, sorting, beneficiation and concentration of ores and liquefaction of natural gas.Mining activities are classified into divisions, groups and classes on the basis of the principal mineral produced. Divisions 05, 06 are concerned with mining and quarrying of fossil fuels (coal, lignite, petroleum, gas); divisions 07, 08 concern metal ores, various minerals and quarry products. Some of the technical operations of this section, particularly related to the extraction of hydrocarbons, may also be carried out for third parties by specialised units as an industrial service which is reflected in division 09."
  },
  {
    "level": "Division",
    "code": "B05",
    "name": "Mining of coal and lignite",
    "parentCode": "B",
    "keywords": "Mining of coal and lignite",
    "note": "This division includes the extraction of solid mineral fuels through underground or open-cast mining and includes operations (e.g. grading, cleaning, compressing and other steps necessary for transportation etc.) leading to a marketable product."
  },
  {
    "level": "Group",
    "code": "B051",
    "name": "Mining of hard coal",
    "parentCode": "B05",
    "keywords": "Mining of hard coal",
    "note": ""
  },
  {
    "level": "Class",
    "code": "B0510",
    "name": "Mining of hard coal",
    "parentCode": "B051",
    "keywords": "Mining of hard coal",
    "note": "This class includes:- mining of hard coal: underground or surface mining, including mining through liquefaction methods- cleaning, sizing, grading, pulverising, compressing etc. of coal to classify, improve quality or facilitate transport or storage"
  },
  {
    "level": "Group",
    "code": "B052",
    "name": "Mining of lignite",
    "parentCode": "B05",
    "keywords": "Mining of lignite",
    "note": ""
  },
  {
    "level": "Class",
    "code": "B0520",
    "name": "Mining of lignite",
    "parentCode": "B052",
    "keywords": "Mining of lignite",
    "note": "This class includes:- mining of lignite (brown coal): underground or surface mining, including mining through liquefaction methods- washing, dehydrating, pulverising, compressing of lignite to improve quality or facilitate transport or storage"
  },
  {
    "level": "Division",
    "code": "B06",
    "name": "Extraction of crude petroleum and natural gas",
    "parentCode": "B",
    "keywords": "Extraction of crude petroleum and natural gas",
    "note": "This division includes the production of crude petroleum, the mining and extraction of oil from oil shale and oil sands and the production of natural gas and recovery of hydrocarbon liquids. This divisionincludes the activities of operating and/or developing oil and gas field properties. Such activities may include drilling, completing and equipping wells; operating separators, emulsion breakers, desalting equipment and field gathering lines for crude petroleum; and all other activities in the preparation of oil and gas up to the point of shipment from the producing property."
  },
  {
    "level": "Group",
    "code": "B061",
    "name": "Extraction of crude petroleum",
    "parentCode": "B06",
    "keywords": "Extraction of crude petroleum",
    "note": ""
  },
  {
    "level": "Class",
    "code": "B0610",
    "name": "Extraction of crude petroleum",
    "parentCode": "B061",
    "keywords": "Extraction of crude petroleum",
    "note": "This class includes:- extraction of crude petroleum oils"
  },
  {
    "level": "Group",
    "code": "B062",
    "name": "Extraction of natural gas",
    "parentCode": "B06",
    "keywords": "Extraction of natural gas",
    "note": ""
  },
  {
    "level": "Class",
    "code": "B0620",
    "name": "Extraction of natural gas",
    "parentCode": "B062",
    "keywords": "Extraction of natural gas",
    "note": "This class includes:- production of crude gaseous hydrocarbon (natural gas)- extraction of natural gas liquids from field facilities- draining and separation of liquid hydrocarbon fractions- gas desulphurisation- extraction of coal mine methane"
  },
  {
    "level": "Division",
    "code": "B07",
    "name": "Mining of metal ores",
    "parentCode": "B",
    "keywords": "Mining of metal ores",
    "note": "This division includes mining for metallic minerals (ores), performed through underground or open-cast extraction, seabed mining etc."
  },
  {
    "level": "Group",
    "code": "B071",
    "name": "Mining of iron ores",
    "parentCode": "B07",
    "keywords": "Mining of iron ores",
    "note": ""
  },
  {
    "level": "Class",
    "code": "B0710",
    "name": "Mining of iron ores",
    "parentCode": "B071",
    "keywords": "Mining of iron ores",
    "note": "This class includes:- mining of ores valued chiefly for iron content- beneficiation and agglomeration of iron ores"
  },
  {
    "level": "Group",
    "code": "B072",
    "name": "Mining of non-ferrous metal ores",
    "parentCode": "B07",
    "keywords": "Mining of non-ferrous metal ores",
    "note": "This group includes the mining of uranium and thorium ores and other non-ferrous metal ores."
  },
  {
    "level": "Class",
    "code": "B0721",
    "name": "Mining of uranium and thorium ores",
    "parentCode": "B072",
    "keywords": "Mining of uranium and thorium ores",
    "note": "This class includes: - mining of ores chiefly valued for uranium and thorium content: pitchblende etc. - concentration of such ores - manufacture of yellowcake"
  },
  {
    "level": "Class",
    "code": "B0729",
    "name": "Mining of other non-ferrous metal ores",
    "parentCode": "B072",
    "keywords": "Mining of other non-ferrous metal ores",
    "note": "This class includes: - mining and preparation of ores chiefly valued for non-ferrous metal content: • aluminium (bauxite), copper, lead, lithium (spodumene), zinc, tin, manganese, chrome, nickel, cobalt, molybdenum, tantalum, vanadium etc. • precious metals: gold, silver, platinum"
  },
  {
    "level": "Division",
    "code": "B08",
    "name": "Other mining and quarrying",
    "parentCode": "B",
    "keywords": "Other mining and quarrying",
    "note": "This division includes extraction from a mine or quarry, but also dredging of alluvial deposits, rock crushing and the use of salt marshes. The products are used most notably in construction (e.g. sands, stones), manufacture of materials (e.g. clay, gypsum, calcium) and manufacture of chemicals etc."
  },
  {
    "level": "Group",
    "code": "B081",
    "name": "Quarrying of stone, sand and clay",
    "parentCode": "B08",
    "keywords": "Quarrying of stone; sand and clay",
    "note": ""
  },
  {
    "level": "Class",
    "code": "B0810",
    "name": "Quarrying of stone, sand and clay",
    "parentCode": "B081",
    "keywords": "Quarrying of stone; sand and clay",
    "note": "This class includes:- quarrying, rough trimming and sawing of monumental and building stone such as marble, granite, sandstone etc.- quarrying, crushing and breaking of limestone- mining of gypsum and anhydrite- mining of chalk and uncalcined dolomite- production of granules, chippings and powder of extracted stones, whether heat-treated or not- extraction and dredging of industrial sand, sand for construction and gravel- breaking and crushing of stone and gravel - quarrying of sand- mining of clays, refractory clays and kaolin"
  },
  {
    "level": "Group",
    "code": "B089",
    "name": "Mining and quarrying n.e.c.",
    "parentCode": "B08",
    "keywords": "Mining and quarrying n.e.c.",
    "note": "This group includes mining of chemical and fertilizer minerals, extraction of peat and salt (from underground, sea water or other saline waters, and crushing, purification and refining of salt by the producer."
  },
  {
    "level": "Class",
    "code": "B0891",
    "name": "Mining of chemical and fertilizer minerals",
    "parentCode": "B089",
    "keywords": "Mining of chemical and fertilizer minerals",
    "note": "This class includes: - mining of natural phosphates and natural potassium salts - mining of native sulphur - extraction and preparation of pyrites and pyrrhotite, except roasting - mining of natural barium sulphate and carbonate (barytes and witherite), natural borates, natural magnesium sulphates (kieserite) - mining of earth colours, fluorspar and other minerals valued chiefly as a source of chemicals"
  },
  {
    "level": "Class",
    "code": "B0892",
    "name": "Extraction of peat",
    "parentCode": "B089",
    "keywords": "Extraction of peat",
    "note": "This class includes: - peat digging - preparation of peat to improve quality or facilitate transport or storage"
  },
  {
    "level": "Class",
    "code": "B0893",
    "name": "Extraction of salt",
    "parentCode": "B089",
    "keywords": "Extraction of salt",
    "note": "This class includes: - extraction of table salt from underground including by dissolving and pumping - table salt production by evaporation of sea water or other saline waters - crushing, purification and refining of table salt by the producer"
  },
  {
    "level": "Class",
    "code": "B0899",
    "name": "Other mining and quarrying n.e.c.",
    "parentCode": "B089",
    "keywords": "Other mining and quarrying n.e.c.",
    "note": "This class includes: - mining and quarrying of various minerals and materials: • abrasive materials, asbestos, siliceous fossil meals, natural graphite, steatite (talc), feldspar etc. • natural asphalt, asphaltites and asphaltic rock; natural solid bitumen • gemstones, quartz, mica etc. - Extraction of various minerals and materials (such as lithium) from brine, except table salt"
  },
  {
    "level": "Division",
    "code": "B09",
    "name": "Mining support service activities",
    "parentCode": "B",
    "keywords": "Mining support service activities",
    "note": "This division includes specialised support services incidental to mining provided on a fee or contract basis. It includes exploration services through traditional prospecting methods such as taking core samples and making geological observations as well as drilling, test-drilling or redrilling for oil wells, metallic and non-metallic minerals. Other typical services cover building oil and gas well foundations, cementing oil and gas well casings, cleaning, bailing and swabbing oil and gas wells, draining and pumping mines, etc."
  },
  {
    "level": "Group",
    "code": "B091",
    "name": "Support activities for petroleum and natural gas extraction",
    "parentCode": "B09",
    "keywords": "Support activities for petroleum and natural gas extraction",
    "note": ""
  },
  {
    "level": "Class",
    "code": "B0910",
    "name": "Support activities for petroleum and natural gas extraction",
    "parentCode": "B091",
    "keywords": "Support activities for petroleum and natural gas extraction",
    "note": "This class includes:- oil and gas extraction service activities provided on a fee or contract basis:• exploration services in connection with petroleum or gas extraction, e.g. traditional prospecting methods, such as making geological observations at prospective sites• directional drilling and redrilling; \"spudding in\"; derrick erection in situ, repairing and dismantling; cementing oil and gas well casings; pumping of wells; plugging and abandoning wells etc.• liquefaction and regasification of natural gas for purpose of transport, done at the mine site• draining and pumping services, on a fee or contract basis• test drilling in connection with petroleum or gas extraction"
  },
  {
    "level": "Group",
    "code": "B099",
    "name": "Support activities for other mining and quarrying",
    "parentCode": "B09",
    "keywords": "Support activities for other mining and quarrying",
    "note": ""
  },
  {
    "level": "Class",
    "code": "B0990",
    "name": "Support activities for other mining and quarrying",
    "parentCode": "B099",
    "keywords": "Support activities for other mining and quarrying",
    "note": "This class includes: - support services on a fee or contract basis, required for mining activities of divisions 05, 07 and 08 • exploration services by using traditional prospecting methods, e.g. taking core samples and making geological observations at prospective sites • draining and pumping services, on a fee or contract basis • test drilling and test hole boring - services of ore agglomeration and concentration on behalf of third parties - securing mine shafts and tunnels - demolition and dismantling of underground mining facilities"
  },
  {
    "level": "Section",
    "code": "C",
    "name": "Manufacturing",
    "parentCode": "",
    "keywords": "Manufacturing",
    "note": "This section includes the physical, chemical or biological transformation of materials, substances, or components into new products, although this cannot be used as the single universal criterion for defining manufacturing (see remark on processing of waste below). The materials, substances, or components undergoing transformation are either raw materials or products of agriculture, forestry, fishing, mining or quarrying as well as products of other manufacturing activities. Substantial alteration, renovation or reconstruction of goods is generally considered to be manufacturing. The output of a manufacturing process may be finished in the sense that it is ready for utilisation or consumption, or it may be semi-finished in the sense that it is to become an input for further manufacturing. For example, the output of alumina refining is the input used in the primary production of aluminium; primary aluminium is the input to aluminium wire drawing; and aluminium wire is the input for the manufacture of fabricated wire products. This section includes factoryless goods producers (FGPs) that completely outsources the transformation process but still controls the production process and supplies critical intellectual property inputs, regardless of whether the principal owns the material inputs or not. The FGPs are classified in the same class where they would have been classified if they carried out the manufacturing process themselves. However, this section excludes units that completely outsources the transformation process but neither controls the production process, nor supplies the critical intellectual property inputs, nor owns the material inputs. These units are in fact buying the completed goods from the manufacturer with the intention to re-sell them. Such an activity is classified in section G (Wholesale and retail trade), specifically according to the type of sale and the specific type of goods being sold. Manufacture of specialised components and parts of, and accessories and attachments to, machinery and equipment is, as a general rule, classified in the same class as the manufacture of the machinery and equipment for which the parts and accessories are intended. Manufacture of unspecialised components and parts of machinery and equipment, e.g. engines, pistons, electric motors, electrical assemblies, valves, gears, roller bearings, is classified in the appropriate class of manufacturing, without regard to the machinery and equipment in which these items may be included. Making specialised components and accessories by moulding or extruding plastics materials is usually included in group 222. Assembly of the component parts of manufactured products is considered manufacturing. This includes the assembly of manufactured products from either self-produced or purchased components. The recovery of waste, i.e. the processing of waste into secondary raw materials is classified in group 383 (Materials and other waste recovery). While this may involve physical, chemical or biological transformations, this is not considered to be a part of manufacturing. The primary purpose of these activities is considered to be the treatment or processing of waste and they are therefore classified in Section E (Water supply; sewerage, waste management and remediation activities). However, the manufacture of new products from secondary raw materials is classified in manufacturing, even if these processes use waste as an input. For example, the production of silver from film waste is considered to be a manufacturing process. Specialised maintenance and repair of industrial, commercial and similar machinery and equipment is, in general, classified in division 33 (Repair, maintenance and installation of machinery and equipment). However, the repair and maintenance of computers, personal and household goods and motor vehicles and motorcycles is classified in division 95 (Repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles). The installation of industrial machinery and equipment, when carried out as a specialised activity, is classified in class 3320. Maintenance, repair and installation of equipment that forms an integral part of buildings or similar structures, such as maintenance, repair and installation of escalators or of air-conditioning systems, is classified as construction in section F (Construction), if carried out at the construction site."
  },
  {
    "level": "Division",
    "code": "C10",
    "name": "Manufacture of food products",
    "parentCode": "C",
    "keywords": "Manufacture of food products",
    "note": "This division includes the processing of the products of agriculture, forestry and fishing into food for humans or animals, and includes the production of various intermediate products that are not directly food products. The activity often generates associated products of greater or lesser value (for example, hides from slaughtering, or oilcake from oil production).This division is organised by activities dealing with different kinds of products: meat, fish, fruit and vegetables, fats and oils, milk products, grain mill products, animal feeds and other food products. Production can be carried out for own account, as well as for third parties, as in custom slaughtering.Some activities are considered manufacturing (for example, those performed in bakeries, pastry shops, and prepared meat shops etc. which sell their own production) even though there is retail sale of the products in the producers' own shop. However, where the processing is minimal and does not lead to a real transformation, the unit is classified to wholesale and retail trade (section G)."
  },
  {
    "level": "Group",
    "code": "C101",
    "name": "Processing and preserving of meat",
    "parentCode": "C10",
    "keywords": "Processing and preserving of meat",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1010",
    "name": "Processing and preserving of meat",
    "parentCode": "C101",
    "keywords": "Processing and preserving of meat",
    "note": "This class includes:- operation of slaughterhouses engaged in killing, dressing or packing meat: beef, pork, poultry, lamb, rabbit, mutton, camel, etc.- production of fresh, chilled or frozen meat, in carcasses- production of fresh, chilled or frozen meat, in cuts- production of fresh, chilled or frozen meat, in individual portions- production of dried, salted or smoked meat- production of meat products:* sausages, salami, puddings, \"andouillettes\", saveloys, bolognas, pâtés, rillettes, boiled hamThis class also includes:- slaughtering and processing of whales on land or on specialized vessels- production of hides and skins originating from slaughterhouses, including fellmongery- rendering of lard and other edible fats of animal origin- processing of animal offal- production of pulled wool- production of feathers and down"
  },
  {
    "level": "Group",
    "code": "C102",
    "name": "Processing and preserving of fish, crustaceans and molluscs",
    "parentCode": "C10",
    "keywords": "Processing and preserving of fish; crustaceans and molluscs",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1020",
    "name": "Processing and preserving of fish, crustaceans and molluscs",
    "parentCode": "C102",
    "keywords": "Processing and preserving of fish; crustaceans and molluscs",
    "note": "This class includes:- preparation and preservation of fish, crustaceans and molluscs: e.g. freezing, deep-freezing, drying, cooking, smoking, salting, immersing in brine, canning etc.- production of fish, crustacean and mollusc products: fish fillets, roes, caviar, caviar substitutes etc.- production of fishmeal for human consumption or animal feed- production of meals and solubles from fish and other aquatic animals unfit for human consumption"
  },
  {
    "level": "Group",
    "code": "C103",
    "name": "Processing and preserving of fruit and vegetables",
    "parentCode": "C10",
    "keywords": "Processing and preserving of fruit and vegetables",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1030",
    "name": "Processing and preserving of fruit and vegetables",
    "parentCode": "C103",
    "keywords": "Processing and preserving of fruit and vegetables",
    "note": "This class includes: - manufacture of food consisting chiefly of fruit or vegetables, except ready-made dishes in frozen or canned form - preserving of fruit, nuts or vegetables: freezing, drying, immersing in oil or in vinegar, canning, etc. - manufacture of fruit or vegetable food products - manufacture of fruit or vegetable juices - manufacture of jams, marmalades and table jellies - processing and preserving of potatoes: * manufacture of prepared frozen potatoes * manufacture of dehydrated mashed potatoes * manufacture of potato snacks * manufacture of potato crisps * manufacture of potato flour and meal - roasting of nuts - manufacture of nut foods and pastes"
  },
  {
    "level": "Group",
    "code": "C104",
    "name": "Manufacture of vegetable and animal oils and fats",
    "parentCode": "C10",
    "keywords": "Manufacture of vegetable and animal oils and fats",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1040",
    "name": "Manufacture of vegetable and animal oils and fats",
    "parentCode": "C104",
    "keywords": "Manufacture of vegetable and animal oils and fats",
    "note": "This class includes the manufacture of crude and refined oils and fats from vegetable or animal materials, except rendering or refining of lard and other edible animal fats.This class includes:- manufacture of crude vegetable oils: olive oil, soya-bean oil, groundnut oil, palm oil, sunflower-seed oil, cotton-seed oil, rape, colza or mustard oil, linseed oil etc.- manufacture of non-defatted flour or meal of oilseeds, oil nuts or oil kernels- manufacture of refined vegetable oils: olive oil, soya-bean oil etc.- processing of vegetable oils: blowing, boiling, dehydration, hydrogenation etc.- manufacture of margarine- manufacture of melanges and similar spreads- manufacture of compound cooking fatsThis class also includes:- manufacture of non-edible animal oils and fats- extraction of fish and marine mammal oils- production of cotton linters, oilcakes and other residual products of oil production"
  },
  {
    "level": "Group",
    "code": "C105",
    "name": "Manufacture of dairy products",
    "parentCode": "C10",
    "keywords": "Manufacture of dairy products",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1050",
    "name": "Manufacture of dairy products",
    "parentCode": "C105",
    "keywords": "Manufacture of dairy products",
    "note": "This class includes:- manufacture of fresh liquid milk, pasteurized, sterilized, homogenized and/or ultra heat treated- manufacture of milk-based drinks- manufacture of cream from fresh liquid milk, pasteurized, sterilized, homogenized- manufacture of dried or concentrated milk whether or not sweetened- manufacture of milk or cream in solid form- manufacture of butter- manufacture of yoghurt- manufacture of cheese and curd- refining and aging of cheese- manufacture of whey- manufacture of casein or lactose- manufacture of ice cream"
  },
  {
    "level": "Group",
    "code": "C106",
    "name": "Manufacture of grain mill products, starches and starch products",
    "parentCode": "C10",
    "keywords": "Manufacture of grain mill products; starches and starch products",
    "note": "This group includes the milling of flour or meal from grains or vegetables, the cleaning, polishing and milling of rice, as well as the micronisation and thermal processing of flour and the manufacture of flour mixes or doughs from these products."
  },
  {
    "level": "Class",
    "code": "C1061",
    "name": "Manufacture of grain mill products",
    "parentCode": "C106",
    "keywords": "Manufacture of grain mill products",
    "note": "This class includes:- grain milling: production of flour, groats, meal or pellets of wheat, rye, oats, maize (corn) or other cereal grains- rice milling: production of husked, milled, polished, glazed, parboiled or converted rice; production of rice flour- vegetable milling: production of flour or meal of dried leguminous vegetables, of roots or tubers, or of edible nuts- manufacture of cereal breakfast foods- manufacture of flour mixes and prepared blended flour and dough for bread, cakes, biscuits or pancakes"
  },
  {
    "level": "Class",
    "code": "C1062",
    "name": "Manufacture of starches and starch products",
    "parentCode": "C106",
    "keywords": "Manufacture of starches and starch products",
    "note": "This class includes:- manufacture of starches from rice, potatoes, maize etc.- wet corn milling- manufacture of glucose, glucose syrup, maltose, inulin etc.- manufacture of gluten- manufacture of tapioca and tapioca substitutes prepared from starch- manufacture of corn oil"
  },
  {
    "level": "Group",
    "code": "C107",
    "name": "Manufacture of other food products",
    "parentCode": "C10",
    "keywords": "Manufacture of other food products",
    "note": "This group includes the production of a variety of food products not included in previous groups of this division. This includes the production of bakery products, sugar and confectionery, macaroni, noodles and similar products, prepared meals and dishes, processing of coffee and tea, as well as manufacture of other perishable and specialty food products."
  },
  {
    "level": "Class",
    "code": "C1071",
    "name": "Manufacture of bakery products",
    "parentCode": "C107",
    "keywords": "Manufacture of bakery products",
    "note": "This class includes the manufacture of fresh, frozen or dry bakery products.This class includes:- manufacture of bread and rolls- manufacture of fresh pastry, cakes, pies, tarts etc.- manufacture of rusks, biscuits and other \"dry\" bakery products- manufacture of preserved pastry goods and cakes- manufacture of snack products (cookies, crackers, pretzels etc.), whether sweet or salted- manufacture of tortillas- manufacture of frozen bakery products: pancakes, waffles, rolls etc."
  },
  {
    "level": "Class",
    "code": "C1072",
    "name": "Manufacture of sugar",
    "parentCode": "C107",
    "keywords": "Manufacture of sugar",
    "note": "This class includes:- manufacture or refining of sugar (sucrose) and sugar substitutes from the juice of cane, beet, maple and palm- manufacture of sugar syrups- manufacture of molasses- production of maple syrup and sugar"
  },
  {
    "level": "Class",
    "code": "C1073",
    "name": "Manufacture of cocoa, chocolate and sugar confectionery",
    "parentCode": "C107",
    "keywords": "Manufacture of cocoa; chocolate and sugar confectionery",
    "note": "This class includes:- manufacture of cocoa, cocoa butter, cocoa fat, cocoa oil- manufacture of chocolate and chocolate confectionery- manufacture of sugar confectionery: caramels, cachous, nougats, fondant, white chocolate- manufacture of chewing gum- preserving in sugar of fruit, nuts, fruit peels and other parts of plants- manufacture of confectionery lozenges and pastilles- manufacture of sugar free confectionery"
  },
  {
    "level": "Class",
    "code": "C1074",
    "name": "Manufacture of macaroni, noodles, couscous and similar farinaceous products",
    "parentCode": "C107",
    "keywords": "Manufacture of macaroni; noodles; couscous and similar farinaceous products",
    "note": "This class includes:- manufacture of pastas such as macaroni and noodles, whether or not cooked or stuffed- manufacture of semolina (couscous)"
  },
  {
    "level": "Class",
    "code": "C1075",
    "name": "Manufacture of prepared meals and dishes",
    "parentCode": "C107",
    "keywords": "Manufacture of prepared meals and dishes",
    "note": "This class includes the manufacture of ready-made (i.e. prepared, seasoned and cooked) meals and dishes. These dishes are processed and conserved, such as in frozen or canned form, and are usually packaged and labelled for re-sale, i.e. this class does not include the preparation of meals for immediate consumption, such as in restaurants and caterers. To be considered a dish, these foods have to contain at least two distinct main ingredients (except seasonings etc.).This class includes:- manufacture of meat or poultry dishes- manufacture of fish dishes, including fish and chips- manufacture of dishes containing pasta and rice- manufacture of vegetable dishes- manufacture of frozen or otherwise preserved pizza and croquet-monsieur"
  },
  {
    "level": "Class",
    "code": "C1076",
    "name": "Processing of coffee and tea",
    "parentCode": "C107",
    "keywords": "Processing of coffee and tea",
    "note": "This class includes:- decaffeinating and roasting of coffee- production of coffee products:• ground coffee• soluble coffee• extracts and concentrates of coffee- manufacture of coffee substitutes- blending of tea and maté- manufacture of extracts and preparations based on tea or maté"
  },
  {
    "level": "Class",
    "code": "C1079",
    "name": "Manufacture of other food products n.e.c.",
    "parentCode": "C107",
    "keywords": "Manufacture of other food products n.e.c.",
    "note": "This class includes:- manufacture of soups and broths- manufacture of special food, such as:* infant formula* follow up milk and other follow up foods* baby food* foods containing homogenized ingredients* low-energy and energy-reduced foods intended for weight control* foods for medical purposes- manufacture of spices, sauces and condiments:* mayonnaise* mustard flour and meal* prepared mustard etc.- manufacture of vinegar- manufacture of artificial honey and caramel- manufacture of perishable prepared foods, such as:* sandwiches* fresh (uncooked) pizza"
  },
  {
    "level": "Group",
    "code": "C108",
    "name": "Manufacture of prepared animal feeds",
    "parentCode": "C10",
    "keywords": "Manufacture of prepared animal feeds",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1080",
    "name": "Manufacture of prepared animal feeds",
    "parentCode": "C108",
    "keywords": "Manufacture of prepared animal feeds",
    "note": "This class includes:- manufacture of prepared feeds for pets, including dogs, cats, birds, fish etc.- manufacture of prepared feeds for farm animals, including animal feed concentrates and feed supplements- preparation of unmixed (single) feeds for farm animalsThis class also includes:- processing of waste products from the food industry into animal feeds"
  },
  {
    "level": "Division",
    "code": "C11",
    "name": "Manufacture of beverages",
    "parentCode": "C",
    "keywords": "Manufacture of beverages",
    "note": "This division includes the manufacture of beverages, such as non-alcoholic beverages and mineral water, manufacture of alcoholic beverages mainly through fermentation, beer and wine, and the manufacture of distilled alcoholic beverages."
  },
  {
    "level": "Group",
    "code": "C110",
    "name": "Manufacture of beverages",
    "parentCode": "C11",
    "keywords": "Manufacture of beverages",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1101",
    "name": "Distilling, rectifying and blending of spirits",
    "parentCode": "C110",
    "keywords": "Distilling; rectifying and blending of spirits",
    "note": "This class includes:- manufacture of distilled, potable, alcoholic beverages: whisky, brandy, gin, liqueurs etc. - manufacture of drinks mixed with distilled alcoholic beverages- blending of distilled spirits- production of neutral spirits"
  },
  {
    "level": "Class",
    "code": "C1102",
    "name": "Manufacture of wines",
    "parentCode": "C110",
    "keywords": "Manufacture of wines",
    "note": "This class includes: - manufacture of wine - manufacture of sparkling wine - manufacture of wine from concentrated grape must - manufacture of fermented but not distilled alcoholic beverages: sake, cider, perry, mead, other fruit wines and mixed beverages containing alcohol - manufacture of vermouth and the like"
  },
  {
    "level": "Class",
    "code": "C1103",
    "name": "Manufacture of beer",
    "parentCode": "C110",
    "keywords": "Manufacture of beer",
    "note": "This class includes:- manufacture of malt liquors, e.g. beer, ale, porter and stout"
  },
  {
    "level": "Class",
    "code": "C1104",
    "name": "Manufacture of malt",
    "parentCode": "C110",
    "keywords": "Manufacture of malt",
    "note": "This class includes:- manufacture of malt from barley, rye, or other grains."
  },
  {
    "level": "Class",
    "code": "C1105",
    "name": "Manufacture of soft drinks; production of mineral waters and other bottled waters",
    "parentCode": "C110",
    "keywords": "Manufacture of soft drinks; production of mineral waters and other bottled waters",
    "note": "This class includes manufacture of non-alcoholic beverages (except non-alcoholic beer and wine):- production of natural mineral waters and other bottled waters- manufacture of soft drinks:• non-alcoholic flavoured and/or sweetened waters: lemonade, orangeade, cola, fruit drinks, tonic waters etc.• manufacture of other non-alcoholic beverages, e.g. soya-based beverages"
  },
  {
    "level": "Division",
    "code": "C12",
    "name": "Manufacture of tobacco products",
    "parentCode": "C",
    "keywords": "Manufacture of tobacco products",
    "note": "This division includes the processing of an agricultural product, tobacco, into a form suitable for final consumption."
  },
  {
    "level": "Group",
    "code": "C120",
    "name": "Manufacture of tobacco products",
    "parentCode": "C12",
    "keywords": "Manufacture of tobacco products",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1200",
    "name": "Manufacture of tobacco products",
    "parentCode": "C120",
    "keywords": "Manufacture of tobacco products",
    "note": "This class includes: - manufacture of tobacco products and products of tobacco substitutes: cigarettes, fine cut tobacco, cigars, pipe tobacco, chewing tobacco, snuff - manufacture of \"homogenised\" or \"reconstituted\" tobacco"
  },
  {
    "level": "Division",
    "code": "C13",
    "name": "Manufacture of textiles",
    "parentCode": "C",
    "keywords": "Manufacture of textiles",
    "note": "This division includes preparation and spinning of textile fibres as well as textile weaving, finishing of textiles and wearing apparel, manufacture of technical textiles, manufacture of made-up textile articles, except apparel (e.g. household linen, blankets, rugs, cordage)."
  },
  {
    "level": "Group",
    "code": "C131",
    "name": "Spinning, weaving and finishing of textiles",
    "parentCode": "C13",
    "keywords": "Spinning; weaving and finishing of textiles",
    "note": "This group includes the manufacture of textiles, including preparatory operations, spinning of textile fibres and weaving of textiles. This can be done from varying raw materials, such as silk, wool, other animal, vegetable or man-made fibres, paper or glass etc. Also included in this group is the finishing of textiles and wearing apparel, i.e. bleaching, dyeing, dressing and similar activities."
  },
  {
    "level": "Class",
    "code": "C1311",
    "name": "Preparation and spinning of textile fibres",
    "parentCode": "C131",
    "keywords": "Preparation and spinning of textile fibres",
    "note": "This class includes preparatory operations on textile fibres and the spinning of textile fibres. This can be done from varying raw materials, whether new or recycled textile materials, e.g. such as silk, cotton, wool, vegetable or man-made fibres, paper cellulose-based fibers (wood, straw) This class includes: - preparatory operations on textile fibres: • reeling and washing of silk • wool scouring, i.e. degreasing and carbonising of wool and dyeing of wool fleece • carding and combing of all kinds of animal, vegetable and man-made fibres - spinning and manufacture of yarn or thread for weaving or sewing, for the trade or for further processing • scutching of flax • texturising, twisting, folding, cabling and dipping of synthetic or artificial filament yarns spinning of recycled fibers from secondary raw material"
  },
  {
    "level": "Class",
    "code": "C1312",
    "name": "Weaving of textiles",
    "parentCode": "C131",
    "keywords": "Weaving of textiles",
    "note": "This class includes weaving of textiles. This can be done from varying raw materials, whether new fibers or recycled textile materials, e.g. silk, cotton, wool, vegetable or man-made fibres, paper or glass, recovered textile waste materials or new textile fibers This class includes: - manufacture of broad woven cotton-type, woollen-type, worsted-type or silk-type fabrics, including from mixtures or artificial or synthetic yarns (polypropylene etc.) - manufacture of other broad woven fabrics, using flax, ramie, hemp, jute, bast fibres and special yarns - manufacture of broad woven fabrics, from secondary raw materials"
  },
  {
    "level": "Class",
    "code": "C1313",
    "name": "Finishing of textiles",
    "parentCode": "C131",
    "keywords": "Finishing of textiles",
    "note": "This class includes finishing of textiles and wearing apparel, i.e. bleaching, dyeing, dressing and similar activities. This class includes: - bleaching and dyeing of textile fibres, yarns, fabrics and textile articles, including wearing apparel - dressing, drying, steaming, shrinking, mending, sanforising, mercerising of textiles and textile articles, including wearing apparel"
  },
  {
    "level": "Group",
    "code": "C139",
    "name": "Manufacture of other textiles",
    "parentCode": "C13",
    "keywords": "Manufacture of other textiles",
    "note": "This group includes the manufacture of products produced from textiles, except wearing apparel, e.g. made-up textile articles, carpets and rugs, rope, narrow woven fabrics, trimmings"
  },
  {
    "level": "Class",
    "code": "C1391",
    "name": "Manufacture of knitted and crocheted fabrics",
    "parentCode": "C139",
    "keywords": "Manufacture of knitted and crocheted fabrics",
    "note": "This class includes: - manufacture and processing of knitted or crocheted fabrics: • pile and terry fabrics • net and window furnishing type fabrics • other knitted or crocheted fabrics"
  },
  {
    "level": "Class",
    "code": "C1392",
    "name": "Manufacture of made-up textile articles, except apparel",
    "parentCode": "C139",
    "keywords": "Manufacture of made-up textile articles; except apparel",
    "note": "This class includes: - manufacture, of made-up household textiles articles of any material, including of knitted or crocheted fabrics e.g.: • blankets, including travelling rugs • bed, table, toilet or kitchen linen • quilts, eiderdowns, cushions, pouffes, pillows, sleeping bags - manufacture of made-up furnishing articles: • curtains, valances, bedspreads, • flags, banners, pennants • dust cloths, dishcloths and similar articles"
  },
  {
    "level": "Class",
    "code": "C1393",
    "name": "Manufacture of carpets and rugs",
    "parentCode": "C139",
    "keywords": "Manufacture of carpets and rugs",
    "note": "This class includes: - manufacture of textile floor coverings e.g. • carpets, rugs and mats, tiles"
  },
  {
    "level": "Class",
    "code": "C1394",
    "name": "Manufacture of cordage, rope, twine and netting",
    "parentCode": "C139",
    "keywords": "Manufacture of cordage; rope; twine and netting",
    "note": "This class includes: - manufacture of twine, cordage, rope and cables of textile fibres or strip or the like, whether or not impregnated, coated, covered or sheathed with rubber or plastics - manufacture of knotted netting of twine, cordage or rope - manufacture of products of rope or netting e.g. fishing nets, ships' fenders, unloading cushions, loading slings, rope or cable fitted with metal rings etc."
  },
  {
    "level": "Class",
    "code": "C1399",
    "name": "Manufacture of other textiles n.e.c.",
    "parentCode": "C139",
    "keywords": "Manufacture of other textiles n.e.c.",
    "note": "This class includes all activities related to the manufacture of textiles or textile products, not specified elsewhere in division 13 or 14, involving a large number of processes and a great variety of goods produced. This class includes: - manufacture of nonwovens, whether or not impregnated, coated, covered or laminated with plastics or rubber - manufacture of nonwovens in which plastics or rubber forms the bonding substance - manufacture of narrow woven fabrics, including fabrics consisting of warp without weft assembled by means of an adhesive - manufacture of labels, badges etc. - manufacture of ornamental trimmings: braids, tassels, pompons etc. - manufacture of felt - manufacture of tulles and other net fabrics, and of lace and embroidery, in the piece, in strips or in motifs - manufacture of fabrics impregnated, coated, covered or laminated with plastics - manufacture of metallized yarn or gimped yarn, rubber thread and cord covered with textile material, textile yarn or strip covered, impregnated, coated or sheathed with rubber or plastics - manufacture of tyre cord fabric of high-tenacity man-made yarn - manufacture of other treated or coated fabrics: tracing cloth, canvas prepared for use by painters, buckram and similar stiffened textile fabrics, fabrics coated with gum or amylaceous substances - manufacture of diverse textile articles: textile wicks, incandescent gas mantles and tubular gas mantle fabric, hosepiping, transmission or conveyor belts or belting (whether or not reinforced with metal or other material), bolting cloth, straining cloth - manufacture of automotive trimmings - manufacture of pressure sensitive cloth-tape - manufacture of artists' canvas boards and tracing cloth - manufacture of tarpaulins, tents, sails, parachutes, textiles for blinds and sun blinds, loose covers for cars, machines or furniture - manufacture of shoe-lace, of textiles - manufacture of net and window furnishing type fabrics of lace"
  },
  {
    "level": "Division",
    "code": "C14",
    "name": "Manufacture of wearing apparel",
    "parentCode": "C",
    "keywords": "Manufacture of wearing apparel",
    "note": "This division includes all tailoring (ready-to-wear or made-to-measure), in all materials (e.g. leather, fur fabric, knitted and crocheted fabrics), of all items of clothing (e.g. outerwear, underwear for men, women or children; work, city or casual clothing) and accessories. There is no distinction made between clothing for adults and clothing for children."
  },
  {
    "level": "Group",
    "code": "C141",
    "name": "Manufacture of wearing apparel, except fur apparel",
    "parentCode": "C14",
    "keywords": "Manufacture of wearing apparel; except fur apparel",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1410",
    "name": "Manufacture of wearing apparel, except fur apparel",
    "parentCode": "C141",
    "keywords": "Manufacture of wearing apparel; except fur apparel",
    "note": "This class includes the manufacture of wearing apparel. The materials used generally do not include fur and may be coated, impregnated or rubberized but not knitted or crocheted. However this class includes headgear of fur skins. This class includes: - manufacture of wearing apparel made of leather or composition leather, including leather industrial work accessories such as welder's leather aprons - manufacture of work wear - manufacture of other outerwear made of woven, knitted or crocheted fabric, non-wovens etc. for men, women and children: * coats, suits, ensembles, jackets, trousers, skirts etc. - manufacture of underwear and nightwear made of woven, knitted or crocheted fabric, lace etc. for men, women and children: * shirts, T-shirts, underpants, briefs, pyjamas, nightdresses, dressing gowns, blouses, slips, brassieres, corsets etc. - manufacture of babies' garments, tracksuits, ski suits, swimwear etc. - manufacture of hats and caps - manufacture of other clothing accessories: gloves, belts, shawls, ties, cravats, hairnets etc."
  },
  {
    "level": "Group",
    "code": "C142",
    "name": "Manufacture of articles of fur",
    "parentCode": "C14",
    "keywords": "Manufacture of articles of fur",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1420",
    "name": "Manufacture of articles of fur",
    "parentCode": "C142",
    "keywords": "Manufacture of articles of fur",
    "note": "This class includes: -manufacture of articles made of fur skins: • fur wearing apparel and clothing accessories • assemblies of fur skins such as “dropped” fur skins, plates, mats, strips etc. • diverse articles of fur skins: rugs, unstuffed pouffes, industrial polishing cloths"
  },
  {
    "level": "Group",
    "code": "C143",
    "name": "Manufacture of knitted and crocheted apparel",
    "parentCode": "C14",
    "keywords": "Manufacture of knitted and crocheted apparel",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1430",
    "name": "Manufacture of knitted and crocheted apparel",
    "parentCode": "C143",
    "keywords": "Manufacture of knitted and crocheted apparel",
    "note": "This class includes: - manufacture of hosiery, including socks, tights and pantyhose - manufacture of knitted or crocheted wearing apparel and other made-up articles directly into shape e.g. pullovers, cardigans, jerseys, shirts, T-shirts, blouses, waistcoats, nightwear and underwear, including babies’ wear, clothing for playing sports (both individual and professional use), including knitted and crocheted sportswear and swimwear"
  },
  {
    "level": "Division",
    "code": "C15",
    "name": "Manufacture of leather and related products",
    "parentCode": "C",
    "keywords": "Manufacture of leather and related products",
    "note": "This division includes dressing and dyeing of fur and the transformation of hides or skins into leather by tanning or curing and fabricating the leather into products for final consumption."
  },
  {
    "level": "Group",
    "code": "C151",
    "name": "Tanning, dyeing, dressing of leather and fur; manufacture of luggage, handbags, saddlery and harness",
    "parentCode": "C15",
    "keywords": "Tanning; dyeing; dressing of leather and fur; manufacture of luggage; handbags; saddlery and harness",
    "note": "This group includes the manufacture of leather and fur and products thereof."
  },
  {
    "level": "Class",
    "code": "C1511",
    "name": "Tanning and dressing of leather; dressing and dyeing of fur",
    "parentCode": "C151",
    "keywords": "Tanning and dressing of leather; dressing and dyeing of fur",
    "note": "This class includes: - tanning, dyeing and dressing of hides, skins and pre-tanned leather - manufacture of chamois dressed, parchment dressed, patent or metallised leathers - manufacture of composition leather - scraping, shearing, plucking, currying, tanning, bleaching and dyeing of fur skins and hides with the hair on"
  },
  {
    "level": "Class",
    "code": "C1512",
    "name": "Manufacture of luggage, handbags and the like, saddlery and harness of any material",
    "parentCode": "C151",
    "keywords": "Manufacture of luggage; handbags and the like; saddlery and harness of any material",
    "note": "This class includes: - manufacture of luggage, handbags, backpacks etc., of leather, composition leather or any other material, , where the same technology is used as for leather - manufacture of saddlery and harness for any animal - manufacture of non-metallic watch bands (e.g. fabric, leather, plastic) - manufacture of diverse articles of leather or composition leather e.g. driving belts, packings - manufacture of shoe-lace, of leather - manufacture of horse whips and riding crops"
  },
  {
    "level": "Group",
    "code": "C152",
    "name": "Manufacture of footwear",
    "parentCode": "C15",
    "keywords": "Manufacture of footwear",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1520",
    "name": "Manufacture of footwear",
    "parentCode": "C152",
    "keywords": "Manufacture of footwear",
    "note": "This class includes: - manufacture of footwear for all purposes, of any material, by any process, including moulding (see below for exceptions) - manufacture of parts of footwear e.g. manufacture of uppers and parts of uppers, outer and inner soles, heels, in any material (leather, wood, plastic, rubber, etc.) - manufacture of gaiters, leggings and similar articles"
  },
  {
    "level": "Division",
    "code": "C16",
    "name": "Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials",
    "parentCode": "C",
    "keywords": "Manufacture of wood and of products of wood and cork; except furniture; manufacture of articles of straw and plaiting materials",
    "note": "This division includes the manufacture of wood products, e.g. lumber, plywood, veneers, wood containers, wood flooring, wood trusses, prefabricated wood buildings, the manufacture of solid fuels from vegetable biomass and the finishing of wooden products. The production processes include sawing, planing, shaping, laminating, and assembling of wood products starting from logs that are cut into bolts, or lumber that may then be cut further, or shaped by lathes or other shaping tools. The lumber or other transformed wood shapes may also be subsequently planed or smoothed, and assembled into finished products, e.g. wood containers. With the exception of sawmilling, this division is subdivided mainly based on the specific products manufactured."
  },
  {
    "level": "Group",
    "code": "C161",
    "name": "Sawmilling and planing of wood",
    "parentCode": "C16",
    "keywords": "Sawmilling and planing of wood",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1610",
    "name": "Sawmilling and planing of wood",
    "parentCode": "C161",
    "keywords": "Sawmilling and planing of wood",
    "note": "This class includes: - sawmilling, planning, processing and finishing of wood - sawing, planing and machining of wood - slicing, peeling or chipping logs - manufacture of wooden railway sleepers - manufacture of unassembled wooden flooring - manufacture outside of forest of wood wool, wood sawdust and flour, wood chips and particles"
  },
  {
    "level": "Group",
    "code": "C162",
    "name": "Manufacture of products of wood, cork, straw and plaiting materials",
    "parentCode": "C16",
    "keywords": "Manufacture of products of wood; cork; straw and plaiting materials",
    "note": "This group includes the manufacture of products of wood, cork, straw or plaiting materials, including basic shapes as well as assembled products."
  },
  {
    "level": "Class",
    "code": "C1621",
    "name": "Manufacture of veneer sheets and wood-based panels",
    "parentCode": "C162",
    "keywords": "Manufacture of veneer sheets and wood-based panels",
    "note": "This class includes: - manufacture of veneer sheets thin enough to be used for veneering, making plywood or other purposes: • smoothed, dyed, coated, impregnated, reinforced (with paper or fabric backing) • made in the form of motifs - manufacture of plywood, veneer panels and similar laminated wood boards and sheets - manufacture of oriented strand board (OSB) and other particle board - manufacture of medium density fibreboard (MDF) and other fibreboard - manufacture of densified wood - manufacture of glue laminated wood, cross-laminated timber (CLT) and laminated veneer wood"
  },
  {
    "level": "Class",
    "code": "C1622",
    "name": "Manufacture of builders' carpentry and joinery",
    "parentCode": "C162",
    "keywords": "Manufacture of builders' carpentry and joinery",
    "note": "This class includes: - manufacture of wooden goods intended to be used primarily in the construction industry: * beams, rafters, roof struts * glue-laminated or metal connected prefabricated wooden roof trusses * doors, windows, shutters and their frames of wood, whether or not containing metal fittings, such as hinges, locks etc. * stairs, railings * wooden beadings and mouldings, shingles and shakes * parquet floor blocks, strips etc., assembled into panels - manufacture of prefabricated buildings (mobile homes and caravans), or elements thereof, predominantly of wood - manufacture of wood partitions (except free standing)"
  },
  {
    "level": "Class",
    "code": "C1623",
    "name": "Manufacture of wooden containers",
    "parentCode": "C162",
    "keywords": "Manufacture of wooden containers",
    "note": "This class includes: - manufacture of packing cases, boxes, crates, drums and similar items of wood - manufacture of pallets, box pallets and other load boards of wood - manufacture of barrels, vats, tubs and other coopers' products of wood - manufacture of wooden cable-drums"
  },
  {
    "level": "Class",
    "code": "C1629",
    "name": "Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials",
    "parentCode": "C162",
    "keywords": "Manufacture of other products of wood; manufacture of articles of cork; straw and plaiting materials",
    "note": "This class includes: - manufacture of various wood products: * wooden handles and bodies for tools, brooms, brushes * wooden boot or shoe parts (e.g. heels) * wooden boot or shoe lasts and trees * wooden clothes hangers * wooden mirror and picture frames * wooden frames for artists' canvases * household utensils and kitchenware of wood * wooden statuettes and ornaments, wood marquetry, inlaid wood * wooden cases for jewellery, cutlery and similar articles * wooden spools, cops, bobbins, sewing thread reels and similar articles of turned wood * wooden handles for umbrellas, canes and similar * wooden blocks for the manufacture of smoking pipes * other articles of wood - natural cork processing, manufacture of agglomerated cork - manufacture of articles of natural or agglomerated cork, including floor coverings - manufacture of plaits and products of plaiting materials: mats, matting, screens, cases etc. - manufacture of basket-ware and wickerwork - manufacture of solid fuels from vegetable biomass - manufacture of fire logs, made of pressed wood or substitute materials like coffee or soybean grounds"
  },
  {
    "level": "Division",
    "code": "C17",
    "name": "Manufacture of paper and paper products",
    "parentCode": "C",
    "keywords": "Manufacture of paper and paper products",
    "note": "This division includes the manufacture of pulp, paper, converted paper and the manufacture of products of recycled goods from wood, paper, cardboard and paperboard. The manufacture of these products is grouped together because they constitute a series of vertically connected processes. More than one activity is often carried out in a single unit. The manufacture of pulp involves separating the cellulose fibres from other matter in wood, or dissolving and de-inking of used paper, and mixing in small amounts of reagents to reinforce the binding of the fibres. Converted paper products are made from paper and other materials by various techniques. The paper articles may be printed (e.g. wallpaper, gift wrap), as long as the printing of information is not the main purpose. The production of pulp, paper and paperboard in bulk is included in group 170, while the remaining classes include the production of further-processed paper and paper products."
  },
  {
    "level": "Group",
    "code": "C170",
    "name": "Manufacture of paper and paper products",
    "parentCode": "C17",
    "keywords": "Manufacture of paper and paper products",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1701",
    "name": "Manufacture of pulp, paper and paperboard",
    "parentCode": "C170",
    "keywords": "Manufacture of pulp; paper and paperboard",
    "note": "This class includes: - manufacture of bleached, semi-bleached or unbleached paper pulp by mechanical, chemical (dissolving or non-dissolving) or semi-chemical processes - manufacture of cotton-linters pulp - removal of ink and manufacture of pulp from waste paper - manufacture of paper and paperboard intended for further industrial processing"
  },
  {
    "level": "Class",
    "code": "C1702",
    "name": "Manufacture of corrugated paper and paperboard and of containers of paper and paperboard",
    "parentCode": "C170",
    "keywords": "Manufacture of corrugated paper and paperboard and of containers of paper and paperboard",
    "note": "This class includes: - manufacture of corrugated paper and paperboard - manufacture of cartons, boxes and cases of corrugated paper or paperboard - manufacture of folding cartons, boxes and cases of non-corrugated paper or paperboard containers - manufacture of containers of solid paperboard - manufacture of other containers of paper and paperboard - manufacture of sacks and bags of paper - manufacture of office box files and similar articles"
  },
  {
    "level": "Class",
    "code": "C1709",
    "name": "Manufacture of other articles of paper and paperboard",
    "parentCode": "C170",
    "keywords": "Manufacture of other articles of paper and paperboard",
    "note": "This class includes: - manufacture of household and personal hygiene paper and cellulose wadding products: * cleansing tissues * handkerchiefs, towels, serviettes * toilet paper * sanitary towels and tampons, napkins and napkin liners for babies * cups, dishes and trays - manufacture of textile wadding and articles of wadding: sanitary towels, tampons etc. - manufacture of printing and writing paper ready for use - manufacture of computer printout paper ready for use - manufacture of self-copy paper ready for use - manufacture of duplicator stencils and carbon paper ready for use - manufacture of gummed or adhesive paper ready for use - manufacture of envelopes and letter-cards - manufacture of registers, accounting books, binders, albums and similar educational and commercial stationery - manufacture of boxes, pouches, wallets and writing compendiums containing an assortment of paper stationery - manufacture of wallpaper and similar wall coverings, including vinyl-coated and textile wallpaper - manufacture of labels - manufacture of filter paper and paperboard - manufacture of paper and paperboard bobbins, spools, cops etc. - manufacture of egg trays and other moulded pulp packaging products etc. - manufacture of paper novelties"
  },
  {
    "level": "Division",
    "code": "C18",
    "name": "Printing and reproduction of recorded media",
    "parentCode": "C",
    "keywords": "Printing and reproduction of recorded media",
    "note": "This division includes printing of products, such as newspapers, books, periodicals, business forms and greeting cards, printing on medium, and associated support activities, such as bookbinding, plate-making services, and data imaging. The support activities included here are an integral part of the printing industry, and a product (a printing plate, a bound book, or a computer disk or file) that is an integral part of the printing industry is almost always provided by these operations. The ownership of the input material is irrelevant to the classification of printing and reproduction of recorded media activities. Division 18 covers explicitly the processing activities. Processes used in printing include a variety of methods for transferring an image from a plate, screen or computer file to a medium, such as paper, plastics, metal, textile articles, or wood. The most prominent of these methods entails the transfer of the image from a plate or screen to the medium through lithographic, gravure, screen or flexographic printing. Often a computer file is used to directly ''drive'' the printing mechanism to create the image or electrostatic and other types of equipment (digital or non-impact printing). Though printing and publishing can be carried out by the same unit (a newspaper, for example), it is less and less the case that these distinct activities are carried out in the same physical location."
  },
  {
    "level": "Group",
    "code": "C181",
    "name": "Printing and service activities related to printing",
    "parentCode": "C18",
    "keywords": "Printing and service activities related to printing",
    "note": "This group includes printing of products, e.g. newspapers, books, periodicals, business forms and greeting cards, printing on medium, and associated support activities, e.g. bookbinding, plate-making services, and data imaging. Printing can be done using various techniques and on different materials."
  },
  {
    "level": "Class",
    "code": "C1811",
    "name": "Printing",
    "parentCode": "C181",
    "keywords": "Printing",
    "note": "This class includes: - printing of newspapers, magazines and other periodicals, books and brochures, music and music manuscripts, maps, atlases, posters, advertising catalogues, prospectuses and other printed advertising, postage stamps, taxation stamps, documents of title, cheques and other security papers, diaries, calendars, business forms and other commercial printed matter, personal stationery and other printed matter by letterpress, offset, photogravure, flexographic and other printing presses, duplication machines, computer printers, embossers etc., including quick printing - printing directly onto textiles, plastic, glass, metal, wood and ceramics - laser engraving on textiles The material printed is typically copyrighted."
  },
  {
    "level": "Class",
    "code": "C1812",
    "name": "Service activities related to printing",
    "parentCode": "C181",
    "keywords": "Service activities related to printing",
    "note": "This class includes pre-press and pre-media services, and binding and related services. It includes: - composing, typesetting and phototypesetting, pre-press data input into a form suitable for use in various printing processes and representation in other visual media including scanning and optical character recognition, electronic make-up - preparation of data files for multi-media (printing on paper, CD-ROM, Internet) applications - plate-making services including image setting and plate setting (for the printing processes letterpress and offset) - cylinder preparation: engraving or etching of cylinders for gravure printing - plate processing: \"computer to plate\" CTP (also photopolymer plates) - preparation of plates and dies for relief stamping or printing - preparation of: • artistic works of technical character, such as preparation of lithographic stones and wood blocks • presentation media • sketches, layouts, dummies, etc. • production of proofs - trade binding, sample mounting and post press services in support of printing activities, e.g. trade binding and finishing of books, brochures, magazines, catalogues, by e.g. folding, cutting and trimming, assembling, stitching, thread sewing, adhesive binding, cutting and cover laying, gluing, collating, basting, gold stamping; spiral binding and plastic wire binding - binding and finishing of printed paper or printed cardboard, by folding, stamping, drilling, punching, perforating, embossing, sticking, gluing, laminating - finishing services for CD-ROMs - mailing finishing services e.g. customisation, envelope preparation - other finishing activities e.g. die, sinking or stamping, Braille copying"
  },
  {
    "level": "Group",
    "code": "C182",
    "name": "Reproduction of recorded media",
    "parentCode": "C18",
    "keywords": "Reproduction of recorded media",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1820",
    "name": "Reproduction of recorded media",
    "parentCode": "C182",
    "keywords": "Reproduction of recorded media",
    "note": "This class includes: - reproduction from master copies of gramophone records, compact discs and tapes with music or other sound recordings - reproduction from master copies of records, compact discs and tapes with motion pictures and other video recordings - reproduction from master copies of software and data on discs and tapes"
  },
  {
    "level": "Division",
    "code": "C19",
    "name": "Manufacture of coke and refined petroleum products",
    "parentCode": "C",
    "keywords": "Manufacture of coke and refined petroleum products",
    "note": "This division includes the transformation of crude petroleum and coal into usable products. The dominant process is petroleum refining, which involves the separation of crude petroleum into component products through such techniques as cracking and distillation. This division includes the manufacture of gases such as ethane, propane and butane as products of petroleum refineries"
  },
  {
    "level": "Group",
    "code": "C191",
    "name": "Manufacture of coke oven products",
    "parentCode": "C19",
    "keywords": "Manufacture of coke oven products",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1910",
    "name": "Manufacture of coke oven products",
    "parentCode": "C191",
    "keywords": "Manufacture of coke oven products",
    "note": "This class includes: - operation of coke ovens - production of coke and semi-coke - production of pitch and pitch coke - production of coke oven gas - production of crude coal and lignite tars - agglomeration of coke"
  },
  {
    "level": "Group",
    "code": "C192",
    "name": "Manufacture of refined petroleum products; manufacture of fossil fuel products",
    "parentCode": "C19",
    "keywords": "Manufacture of refined petroleum products; manufacture of fossil fuel products",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C1920",
    "name": "Manufacture of refined petroleum products; manufacture of fossil fuel products",
    "parentCode": "C192",
    "keywords": "Manufacture of refined petroleum products; manufacture of fossil fuel products",
    "note": "This class includes the manufacture of liquid or gaseous fuels or other products from crude petroleum, bituminous minerals or their fractionation products. Petroleum refining involves one or more of the following activities: fractionation; straight distillation of crude oil; and cracking. This class includes: - production of motor fuel: gasoline, kerosene etc. - production of fuel: light, medium and heavy fuel oil, refinery gases such as ethane, propane, butane etc. - manufacture of oil-based lubricating oils or greases, including from waste oil - manufacture of products for the petrochemical industry and for the manufacture of road coverings - manufacture of various refined petroleum products, white spirit, vaseline, paraffin wax, petroleum jelly etc. - manufacture of petroleum briquettes - blending of biofuels, i.e. blending of alcohols with petroleum (e.g. gasohol) - manufacture of products from petroleum waste materials, e.g waste lubricating petroleum oils"
  },
  {
    "level": "Division",
    "code": "C20",
    "name": "Manufacture of chemicals and chemical products",
    "parentCode": "C",
    "keywords": "Manufacture of chemicals and chemical products",
    "note": "This division includes the transformation of organic and inorganic raw materials by a chemical process and the formation of products. It distinguishes the production of basic chemicals that constitute the first industry group from the production of intermediate and end products produced by further processing of basic chemicals that make up the remaining industry classes."
  },
  {
    "level": "Group",
    "code": "C201",
    "name": "Manufacture of basic chemicals, fertilizers and nitrogen compounds, plastics and synthetic rubber in primary forms",
    "parentCode": "C20",
    "keywords": "Manufacture of basic chemicals; fertilizers and nitrogen compounds; plastics and synthetic rubber in primary forms",
    "note": "This group includes the manufacture of basic chemical products, fertilisers and associated nitrogen compounds, as well as plastics and synthetic rubber in primary forms."
  },
  {
    "level": "Class",
    "code": "C2011",
    "name": "Manufacture of basic chemicals",
    "parentCode": "C201",
    "keywords": "Manufacture of basic chemicals",
    "note": "This class includes the manufacture of chemicals using basic processes, such as thermal cracking and distillation. The output of these processes are usually separate chemical elements or separate chemically defined compounds. This class includes: - manufacture of liquefied or compressed inorganic industrial or medical gases: * elemental gases * liquid or compressed air * refrigerant gases * mixed industrial gases * inert gases such as carbon dioxide * isolating gases - manufacture of dyes and pigments from any source in basic form or as concentrate - manufacture of chemical elements - manufacture of inorganic acids except nitric acid - manufacture of alkalis, lyes and other inorganic bases except ammonia - manufacture of other inorganic compounds - manufacture of basic organic chemicals: * acyclic hydrocarbons, saturated and unsaturated * cyclic hydrocarbons, saturated and unsaturated * acyclic and cyclic alcohols * mono- and polycarboxylic acids, including acetic acid * other oxygen-function compounds, including aldehydes, ketones, quinones and dual or poly oxygen-function compounds * synthetic glycerol * nitrogen-function organic compounds, including amines * fermentation of sugarcane, corn or similar to produce alcohol and esters * other organic compounds, including wood distillation products (e.g. charcoal) etc. - manufacture of distilled water - manufacture of synthetic aromatic products - roasting of iron pyrites - distillation of coal tar"
  },
  {
    "level": "Class",
    "code": "C2012",
    "name": "Manufacture of fertilizers and nitrogen compounds",
    "parentCode": "C201",
    "keywords": "Manufacture of fertilizers and nitrogen compounds",
    "note": "This class includes: - manufacture of fertilisers: • straight or complex nitrogenous, phosphatic or potassic fertilisers • urea, crude natural phosphates and crude natural potassium salts - manufacture of associated nitrogen products: • nitric and sulphonitric acids, ammonia, ammonium chloride, ammonium carbonate, nitrites and nitrates of potassium"
  },
  {
    "level": "Class",
    "code": "C2013",
    "name": "Manufacture of plastics and synthetic rubber in primary forms",
    "parentCode": "C201",
    "keywords": "Manufacture of plastics and synthetic rubber in primary forms",
    "note": "This class includes the manufacture of resins, plastics materials and non-vulcanizable thermoplastic elastomers, the mixing and blending of resins on a custom basis, as well as the manufacture of non-customized synthetic resins. This class includes: - manufacture of plastics in primary forms: * polymers, including those of ethylene, propylene, styrene, vinyl chloride, vinyl acetate and acrylics * polyamides * phenolic and epoxide resins and polyurethanes * alkyd and polyester resins and polyethers * silicones * ion-exchangers based on polymers - manufacture of synthetic rubber in primary forms: * synthetic rubber * factice - manufacture of mixtures of synthetic rubber and natural rubber or rubber-like gums (e.g. balata)"
  },
  {
    "level": "Group",
    "code": "C202",
    "name": "Manufacture of other chemical products",
    "parentCode": "C20",
    "keywords": "Manufacture of other chemical products",
    "note": "This group includes the manufacture of chemical products other than basic chemicals and man-made fibres. This includes the manufacture of a variety of goods, such as: - pesticides - paints and inks, soap, cleaning preparations - disinfectant and other agrochemical products - perfumes and toilet preparations - explosives and pyrotechnic products - chemical preparations for photographic uses (including film and sensitized paper) - gelatine and its derivatives - manufacture of glues and prepared adhesives, including rubber-based glues and adhesives - composite diagnostic preparations"
  },
  {
    "level": "Class",
    "code": "C2021",
    "name": "Manufacture of pesticides and other agrochemical products",
    "parentCode": "C202",
    "keywords": "Manufacture of pesticides and other agrochemical products",
    "note": "This class includes: - manufacture of insecticides, rodenticides, fungicides, herbicides, acaricides, molluscicides, biocides - manufacture of anti-sprouting products, plant growth regulators - manufacture of disinfectants (for agricultural and other use) - manufacture of other agrochemical products n.e.c."
  },
  {
    "level": "Class",
    "code": "C2022",
    "name": "Manufacture of paints, varnishes and similar coatings, printing ink and mastics",
    "parentCode": "C202",
    "keywords": "Manufacture of paints; varnishes and similar coatings; printing ink and mastics",
    "note": "This class includes: - manufacture of paints and varnishes, enamels or lacquers - manufacture of prepared pigments and dyes, opacifiers and colours - manufacture of vitrifiable enamels and glazes and engobes and similar preparations - manufacture of mastics - manufacture of caulking compounds and similar non-refractory filling or surfacing preparations - manufacture of organic composite solvents and thinners - manufacture of prepared paint or varnish removers - manufacture of printing ink"
  },
  {
    "level": "Class",
    "code": "C2023",
    "name": "Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations",
    "parentCode": "C202",
    "keywords": "Manufacture of soap and detergents; cleaning and polishing preparations; perfumes and toilet preparations",
    "note": "This class includes: - manufacture of organic surface-active agents - manufacture of soap - manufacture of paper, wadding, felt etc. coated or covered with soap or detergent - manufacture of crude glycerol - manufacture of surface-active preparations: * washing powders in solid or liquid form and detergents * dish-washing preparations * textile softeners - manufacture of cleaning and polishing products: * preparations for perfuming or deodorizing rooms * artificial waxes and prepared waxes * polishes and creams for leather * polishes and creams for wood * polishes for coachwork, glass and metal * scouring pastes and powders, including paper, wadding etc. coated or covered with these - manufacture of perfumes and toilet preparations: * perfumes and toilet water * beauty and make-up preparations * sunburn prevention and suntan preparations * manicure and pedicure preparations * shampoos, hair lacquers, waving and straightening preparations * dentifrices and preparations for oral hygiene, including denture fixative preparations * shaving preparations, including pre-shave and aftershave preparations * deodorants and bath salts * depilatories"
  },
  {
    "level": "Class",
    "code": "C2029",
    "name": "Manufacture of other chemical products n.e.c.",
    "parentCode": "C202",
    "keywords": "Manufacture of other chemical products n.e.c.",
    "note": "This class includes: - manufacture of propellant powders - manufacture of explosives and pyrotechnic products, including percussion caps, detonators, signalling flares etc. - manufacture of gelatine and its derivatives - manufacture of glues and prepared adhesives, including rubber-based glues and adhesives - manufacture of extracts of natural aromatic products - manufacture of resinoids - manufacture of aromatic distilled waters - manufacture of mixtures of odoriferous products for the manufacture of perfumes or food - manufacture of e-liquids used in vaping devices - manufacture of photographic plates, films, sensitized paper and other sensitized unexposed materials - manufacture of chemical preparations for photographic uses - manufacture of various chemical products: * peptones, peptone derivatives, other protein substances and their derivatives n.e.c. * essential oils * chemically modified oils and fats * materials used in the finishing of textiles and leather * powders and pastes used in soldering, brazing or welding * substances used to pickle metal * prepared additives for cements * activated carbon, lubricating oil additives, prepared rubber accelerators, catalysts and other chemical products for industrial use * anti-knock preparations, antifreeze preparations * composite diagnostic or laboratory reagents"
  },
  {
    "level": "Group",
    "code": "C203",
    "name": "Manufacture of man-made fibres",
    "parentCode": "C20",
    "keywords": "Manufacture of man-made fibres",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2030",
    "name": "Manufacture of man-made fibres",
    "parentCode": "C203",
    "keywords": "Manufacture of man-made fibres",
    "note": "This class includes: - manufacture of synthetic or artificial filament tow - manufacture of synthetic or artificial staple fibres, not carded, combed or otherwise processed for spinning - manufacture of synthetic or artificial filament yarn, including high-tenacity yarn - manufacture of synthetic or artificial monofilament or strip - Manufacture of recycled fibres"
  },
  {
    "level": "Division",
    "code": "C21",
    "name": "Manufacture of basic pharmaceutical products and pharmaceutical preparations",
    "parentCode": "C",
    "keywords": "Manufacture of basic pharmaceutical products and pharmaceutical preparations",
    "note": "This division includes the manufacture of basic pharmaceutical products and pharmaceutical preparations."
  },
  {
    "level": "Group",
    "code": "C210",
    "name": "Manufacture of pharmaceuticals, medicinal chemical and botanical products",
    "parentCode": "C21",
    "keywords": "Manufacture of pharmaceuticals; medicinal chemical and botanical products",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2100",
    "name": "Manufacture of pharmaceuticals, medicinal chemical and botanical products",
    "parentCode": "C210",
    "keywords": "Manufacture of pharmaceuticals; medicinal chemical and botanical products",
    "note": "This class includes: - manufacture of medicinal active substances to be used for their pharmacological properties in the manufacture of medicaments: antibiotics, basic vitamins, salicylic and O-acetylsalicylic acids etc. - processing of blood - manufacture of medicaments: * antisera and other blood fractions * vaccines * diverse medicaments, including homeopathic preparations - manufacture of chemical contraceptive products for external use and hormonal contraceptive medicaments - manufacture of medical diagnostic preparations, including pregnancy tests - manufacture of radioactive in-vivo diagnostic substances - manufacture of biotech pharmaceuticals"
  },
  {
    "level": "Division",
    "code": "C22",
    "name": "Manufacture of rubber and plastic products",
    "parentCode": "C",
    "keywords": "Manufacture of rubber and plastic products",
    "note": "This division includes the manufacture of rubber and plastics products. This division is characterised by the raw materials used in the manufacturing process. However, this does not imply that the manufacture of all products made of these materials is classified here."
  },
  {
    "level": "Group",
    "code": "C221",
    "name": "Manufacture of rubber products",
    "parentCode": "C22",
    "keywords": "Manufacture of rubber products",
    "note": "This group includes the manufacture of rubber products."
  },
  {
    "level": "Class",
    "code": "C2211",
    "name": "Manufacture of rubber tyres and tubes; retreading and rebuilding of rubber tyres",
    "parentCode": "C221",
    "keywords": "Manufacture of rubber tyres and tubes; retreading and rebuilding of rubber tyres",
    "note": "This class includes: - manufacture of rubber tyres for vehicles, equipment, mobile machinery, aircraft, toy, furniture and other uses: • pneumatic tyres • solid or cushion tyres - manufacture of inner tubes for tyres - manufacture of interchangeable tyre treads, tyre flaps, \"camelback\" strips for retreading tyres etc. - tyre rebuilding and retreading"
  },
  {
    "level": "Class",
    "code": "C2219",
    "name": "Manufacture of other rubber products",
    "parentCode": "C221",
    "keywords": "Manufacture of other rubber products",
    "note": "This class includes: - manufacture of other products of natural or synthetic rubber, unvulcanised, vulcanised or hardened: • rubber plates, sheets, strip, rods, profile shapes • tubes, pipes and hoses • rubber conveyor or transmission belts or belting • rubber hygienic articles: sheath contraceptives, teats, hot water bottles etc. • rubber articles of apparel • rubber thread and rope • rubberised yarn and fabrics • rubber rings, fittings and seals • rubber roller coverings • inflatable rubber mattresses • inflatable balloons - manufacture of rubber brushes - manufacture of hard rubber pipe stems - manufacture of hard rubber combs, hair pins, hair rollers, and similar - manufacture of rubber expansion joints for the construction industry - manufacture of cellular rubber latex - manufacture of rubber floor coverings"
  },
  {
    "level": "Group",
    "code": "C222",
    "name": "Manufacture of plastics products",
    "parentCode": "C22",
    "keywords": "Manufacture of plastics products",
    "note": "This group comprises processing new or spent (i.e., recycled) plastics resins into intermediate or final products, using such processes as compression moulding; extrusion moulding; injection moulding; blow moulding; and casting. For most of these, the production process is such that a wide variety of products can be made."
  },
  {
    "level": "Class",
    "code": "C2220",
    "name": "Manufacture of plastics products",
    "parentCode": "C222",
    "keywords": "Manufacture of plastics products",
    "note": "This class includes the processing of new or spent (i.e. recycled) plastics resins into intermediate or final products, using such processes as compression molding, extrusion molding, injection molding, blow molding and casting. For most of these, the production process is such that a wide variety of products can be made. This class includes: - manufacture of semi-manufactures of plastic products: * plastic plates, sheets, blocks, film, foil, strip etc. (whether self-adhesive or not) - manufacture of finished plastic products: * plastic tubes, pipes and hoses; hose and pipe fittings - manufacture of plastic articles for the packing of goods: * plastic bags, sacks, containers, boxes, cases, carboys, bottles etc. - manufacture of builders' plastics ware: * plastic doors, windows, frames, shutters, blinds, skirting boards * tanks, reservoirs * plastic floor, wall or ceiling coverings in rolls or in the form of tiles etc. * plastic sanitary ware, such as: ** plastic baths, shower baths, washbasins, lavatory pans, flushing cisterns etc. - manufacture of plastic tableware, kitchenware and toilet articles - cellophane film or sheet - manufacture of resilient floor coverings, such as vinyl, linoleum etc. - manufacture of artificial stone (e.g. cultured marble) - manufacture of plastic signs (non-electrical) - manufacture of diverse plastic products: * plastic headgear, insulating fittings, parts of lighting fittings, office or school supplies, articles of apparel (if only sealed together, not sewn), fittings for furniture, statuettes, transmission and conveyer belts, self-adhesive tapes of plastic, plastic wall paper, plastic shoe lasts, plastic cigar and cigarette holders, combs, plastics hair curlers, plastics novelties, etc."
  },
  {
    "level": "Division",
    "code": "C23",
    "name": "Manufacture of other non-metallic mineral products",
    "parentCode": "C",
    "keywords": "Manufacture of other non-metallic mineral products",
    "note": "This division includes manufacturing activities related to a single substance of mineral origin. This division includes the manufacture of glass and glass products (e.g. flat glass, hollow glass, fibres, technical glassware), ceramic products, tiles and baked clay products, cement, concrete and plaster, from raw materials to finished articles."
  },
  {
    "level": "Group",
    "code": "C231",
    "name": "Manufacture of glass and glass products",
    "parentCode": "C23",
    "keywords": "Manufacture of glass and glass products",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2310",
    "name": "Manufacture of glass and glass products",
    "parentCode": "C231",
    "keywords": "Manufacture of glass and glass products",
    "note": "This class includes the manufacture of glass in all forms, made by any process and the manufacture of articles of glass. This class includes: - manufacture of flat glass, including wired, coloured or tinted flat glass - shaping and processing of flat glass - manufacture of toughened or laminated flat glass - manufacture of glass in rods or tubes - manufacture of glass paving blocks - manufacture of glass mirrors - manufacture of multiple-walled insulating units of glass - manufacture of hollow glass, such as bottles and other containers of glass or crystal, drinking glasses and other domestic glass or crystal articles - manufacture of glass fibres, including glass wool and non-woven products thereof - manufacture of laboratory, hygienic or pharmaceutical glassware - manufacture of clock or watch glasses, optical glass and optical elements not optically worked - manufacture of glassware used in imitation jewellery - manufacture of glass insulators and glass insulating fittings - manufacture of glass envelopes for lamps - manufacture of glass figurines"
  },
  {
    "level": "Group",
    "code": "C239",
    "name": "Manufacture of non-metallic mineral products n.e.c.",
    "parentCode": "C23",
    "keywords": "Manufacture of non-metallic mineral products n.e.c.",
    "note": "This group includes the manufacture of intermediate and final products from mined or quarried non-metallic minerals, such as sand, gravel, stone or clay."
  },
  {
    "level": "Class",
    "code": "C2391",
    "name": "Manufacture of refractory products",
    "parentCode": "C239",
    "keywords": "Manufacture of refractory products",
    "note": "This class includes: manufacture of intermediate products from mined or quarried non-metallic minerals e.g. gravel, stone or clay - manufacture of refractory mortars, concretes etc. - manufacture of refractory ceramic goods e.g. • heat-insulating ceramic goods of siliceous fossil meals • refractory bricks, blocks and tiles etc. • retorts, crucibles, muffles, nozzles, tubes, pipes etc."
  },
  {
    "level": "Class",
    "code": "C2392",
    "name": "Manufacture of clay building materials",
    "parentCode": "C239",
    "keywords": "Manufacture of clay building materials",
    "note": "This class includes: - manufacture of non-refractory ceramic hearth or wall tiles, mosaic cubes etc. - manufacture of non-refractory ceramic flags and paving - manufacture of structural non-refractory clay building materials: - manufacture of flooring blocks in baked clay"
  },
  {
    "level": "Class",
    "code": "C2393",
    "name": "Manufacture of other porcelain and ceramic products",
    "parentCode": "C239",
    "keywords": "Manufacture of other porcelain and ceramic products",
    "note": "This class includes ceramic household and ornamental articles, ceramic sanitary fixtures, technical ceramic products (such as insulators, insulating fittings and permanent magnets), and other ceramic products. It includes: - manufacture of ceramic tableware and other domestic or toilet articles - manufacture of statuettes and other ornamental ceramic articles - manufacture of ceramic sanitary fixtures - manufacture of electrical insulators and insulating fittings of ceramics - manufacture of ceramic and ferrite magnets - manufacture of ceramic laboratory, chemical and industrial products - manufacture of ceramic pots, jars and similar articles of a kind used for conveyance or packing of goods - manufacture of ceramic furniture - manufacture of ceramic products n.e.c."
  },
  {
    "level": "Class",
    "code": "C2394",
    "name": "Manufacture of cement, lime and plaster",
    "parentCode": "C239",
    "keywords": "Manufacture of cement; lime and plaster",
    "note": "This class includes: - manufacture of clinkers and hydraulic cements, including Portland, aluminous cement, slag cement and superphosphate cements - manufacture of quicklime, slaked lime and hydraulic lime - manufacture of plasters of calcined gypsum or calcined sulphate - manufacture of calcined dolomite"
  },
  {
    "level": "Class",
    "code": "C2395",
    "name": "Manufacture of articles of concrete, cement and plaster",
    "parentCode": "C239",
    "keywords": "Manufacture of articles of concrete; cement and plaster",
    "note": "This class includes: - manufacture of precast concrete, cement or artificial stone articles for use in construction: * tiles, flagstones, bricks, boards, sheets, panels, pipes, posts etc. - manufacture of prefabricated structural components for buildings or civil engineering of cement, concrete or artificial stone - manufacture of plaster articles for use in construction: * boards, sheets, panels etc. - manufacture of building materials of vegetable substances (wood wool, straw, reeds, rushes) agglomerated with cement, plaster or other mineral binder - manufacture of articles of asbestos-cement or cellulose fibre-cement or the like: * corrugated sheets, other sheets, panels, tiles, tubes, pipes, reservoirs, troughs, basins, sinks, jars, furniture, window frames etc. - manufacture of other articles of concrete, plaster, cement or artificial stone: * statuary, furniture, bas- and haut-reliefs, vases, flowerpots etc. - manufacture of non-refractory mortars - manufacture of ready-mix and dry-mix concrete and mortars"
  },
  {
    "level": "Class",
    "code": "C2396",
    "name": "Cutting, shaping and finishing of stone",
    "parentCode": "C239",
    "keywords": "Cutting; shaping and finishing of stone",
    "note": "This class includes: - cutting, shaping and finishing of stone e.g. for use in construction, in cemeteries, on roads, as roofing - manufacture of stone furniture"
  },
  {
    "level": "Class",
    "code": "C2399",
    "name": "Manufacture of other non-metallic mineral products n.e.c.",
    "parentCode": "C239",
    "keywords": "Manufacture of other non-metallic mineral products n.e.c.",
    "note": "This class includes abrasive products and other non-metallic mineral products. It includes: - manufacture of millstones, grindstones, grinding wheels and the like, without frameworks, for grinding, sharpening, trueing or cutting, hand sharpening or polishing stones - manufacture ofnatural or artificial abrasive powder or grain, on a base of textile material, of paper, of paperboard or of other materials, whether or not cut to shape or sewn or otherwise made - manufacture of friction material and unmounted articles thereof with a base of mineral substances or of cellulose - manufacture of mineral insulating materials: * slag wool, rock wool and similar mineral wools; exfoliated vermiculite, expanded clays and similar heat-insulating, sound-insulating or sound-absorbing materials - manufacture of articles of diverse mineral substances: * worked mica and articles of mica, of peat, of graphite (other than electrical articles) etc. - manufacture of articles of asphalt or similar material, e.g. petroleum bitumen, coal tar pitch etc. - manufacture of carbon and graphite fibers and products (except electrodes and electrical applications) - manufacture of artificial corundum"
  },
  {
    "level": "Division",
    "code": "C24",
    "name": "Manufacture of basic metals",
    "parentCode": "C",
    "keywords": "Manufacture of basic metals",
    "note": "This division includes the activities of smelting and/or refining ferrous and non-ferrous metals from ore, pig, metal waste or scrap, using electrometallurgic and other process metallurgic techniques"
  },
  {
    "level": "Group",
    "code": "C241",
    "name": "Manufacture of basic iron and steel",
    "parentCode": "C24",
    "keywords": "Manufacture of basic iron and steel",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2410",
    "name": "Manufacture of basic iron and steel",
    "parentCode": "C241",
    "keywords": "Manufacture of basic iron and steel",
    "note": "This class includes operations of conversion by reduction of iron ore in blast furnaces and oxygen converters or of ferrous waste and scrap in electric arc furnaces or by direct reduction of iron ore without fusion to obtain crude steel which is smelted and refined in a ladle furnace and then poured and solidified in a continuous caster in order to produce semi-finished flat or long products, which are used, after reheating, in rolling, drawing and extruding operations to manufacture finished products such as plate, sheet, strip, bars, rods, wire, tubes, pipes and hollow profiles. This class includes: - operation of blast furnaces, steel converters, rolling and finishing mills - production of pig iron and spiegeleisen in pigs, blocks or other primary forms - production of ferro-alloys - production of ferrous products by direct reduction of iron and other spongy ferrous products - production of iron of exceptional purity by electrolysis or other chemical processes - production of granular iron and iron powder - production of steel in ingots or other primary forms - remelting of scrap ingots of iron or steel - production of semi-finished products of steel - manufacture of hot-rolled and cold-rolled flat-rolled products of steel - manufacture of hot-rolled bars and rods of steel - manufacture of hot-rolled open sections of steel - manufacture of steel bars and solid sections of steel by cold drawing, grinding or turning - manufacture of open sections by progressive cold forming on a roll mill or folding on a press of flat-rolled products of steel - manufacture of wire of steel by cold drawing or stretching - manufacture of sheet piling of steel and welded open sections of steel - manufacture of railway track materials (unassembled rails) of steel - manufacture of seamless tubes, pipes and hollow profiles of steel, by hot rolling, hot extrusion or hot drawing, or by cold drawing or cold rolling - manufacture of welded tubes and pipes of steel, by cold or hot forming and welding, delivered as welded or further processed by cold drawing or cold rolling or manufactured by hot forming, welding and reducing - manufacture of tube fittings of steel, such as: * flat flanges and flanges with forged collars * butt-welded fittings * threaded fittings * socket-welded fittings"
  },
  {
    "level": "Group",
    "code": "C242",
    "name": "Manufacture of basic precious and other non-ferrous metals",
    "parentCode": "C24",
    "keywords": "Manufacture of basic precious and other non-ferrous metals",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2420",
    "name": "Manufacture of basic precious and other non-ferrous metals",
    "parentCode": "C242",
    "keywords": "Manufacture of basic precious and other non-ferrous metals",
    "note": "This class includes the production of precious metals (gold, silver, platinum, etc.) and other non-ferrous metals (aluminum, lead, zinc, tin, copper, etc.), and processing of nuclear fuel. It includes: - production of basic precious metals: * production and refining of unwrought or wrought precious metals: gold, silver, platinum etc. from ore and scrap - production of precious metal alloys - production of precious metal semi-products - production of silver rolled onto base metals - production of gold rolled onto base metals or silver - production of platinum and platinum group metals rolled onto gold, silver or base metals - production of aluminium from alumina - production of aluminium from electrolytic refining of aluminium waste and scrap - production of aluminium alloys - semi-manufacturing of aluminium - production of lead, zinc and tin from ores - production of lead, zinc and tin from electrolytic refining of lead, zinc and tin waste and scrap - production of lead, zinc and tin alloys - semi-manufacturing of lead, zinc and tin - production of copper from ores - production of copper from electrolytic refining of copper waste and scrap - production of copper alloys - manufacture of fuse wire or strip - semi-manufacturing of copper - production of chrome, manganese, nickel etc. from ores or oxides - production of chrome, manganese, nickel etc. from electrolytic and aluminothermic refining of chrome, manganese, nickel etc., waste and scrap - production of alloys of chrome, manganese, nickel etc. - semi-manufacturing of chrome, manganese, nickel etc. - production of mattes of nickel - processing of nuclear fuel"
  },
  {
    "level": "Group",
    "code": "C243",
    "name": "Casting of metals",
    "parentCode": "C24",
    "keywords": "Casting of metals",
    "note": "This group includes activities of foundries employing different casting processes to produce castings with all ferrous and non-ferrous metal alloys. Subsequent trimming or de-scaling of the castings might be included, but without any further processing. This group includes the manufacture of castings used in various industries"
  },
  {
    "level": "Class",
    "code": "C2431",
    "name": "Casting of iron and steel",
    "parentCode": "C243",
    "keywords": "Casting of iron and steel",
    "note": "This class includes the casting of iron and steel, i.e. the activities of iron and steel foundries. This class includes: - casting of semi-finished iron products - casting of grey iron castings - casting of spheroidal graphite iron castings - casting of malleable cast-iron products - casting of semi-finished steel products - casting of steel castings - manufacture of tubes, pipes and hollow profiles and of tube or pipe fittings of cast-iron - manufacture of seamless tubes and pipes of steel by centrifugal casting - manufacture of tube or pipe fittings of cast-steel"
  },
  {
    "level": "Class",
    "code": "C2432",
    "name": "Casting of non-ferrous metals",
    "parentCode": "C243",
    "keywords": "Casting of non-ferrous metals",
    "note": "This class includes: - casting of semi-finished products of aluminium, magnesium, titanium, zinc etc. - casting of light metal castings - casting of heavy metal castings - casting of precious metal castings - die-casting of non-ferrous metal castings"
  },
  {
    "level": "Division",
    "code": "C25",
    "name": "Manufacture of fabricated metal products, except machinery and equipment",
    "parentCode": "C",
    "keywords": "Manufacture of fabricated metal products; except machinery and equipment",
    "note": "This division includes the manufacture of \"pure\" metal products (such as parts, containers and structures), usually with a static, immovable function, as opposed to the following divisions 26-30, which cover the manufacture of combinations or assemblies of such metal products (sometimes with other materials) into more complex units that, unless they are purely electrical, electronic or optical, work with moving parts."
  },
  {
    "level": "Group",
    "code": "C251",
    "name": "Manufacture of structural metal products, tanks, reservoirs and steam generators",
    "parentCode": "C25",
    "keywords": "Manufacture of structural metal products; tanks; reservoirs and steam generators",
    "note": "This group includes the manufacture of structural metal products (such as metal frameworks or parts for construction), as well as metal container-type objects (such as reservoirs, tanks, central heating boilers) and steam generators."
  },
  {
    "level": "Class",
    "code": "C2511",
    "name": "Manufacture of structural metal products",
    "parentCode": "C251",
    "keywords": "Manufacture of structural metal products",
    "note": "This class includes: - manufacture of metal frameworks or skeletons for construction and parts thereof (towers, masts, trusses, bridges etc.) - manufacture of industrial frameworks in metal (frameworks for blast furnaces, lifting and handling equipment etc.) - manufacture of prefabricated buildings mainly of metal: * site huts, modular exhibition elements etc. - manufacture of metal doors, windows and their frames, shutters and gates - metal room partitions for floor attachment"
  },
  {
    "level": "Class",
    "code": "C2512",
    "name": "Manufacture of tanks, reservoirs and containers of metal",
    "parentCode": "C251",
    "keywords": "Manufacture of tanks; reservoirs and containers of metal",
    "note": "This class includes: - manufacture of reservoirs, tanks, vats and similar containers of metal, whether or not lined or heat-insulated - manufacture of metal containers for compressed or liquefied gas"
  },
  {
    "level": "Class",
    "code": "C2513",
    "name": "Manufacture of steam generators, except central heating hot water boilers",
    "parentCode": "C251",
    "keywords": "Manufacture of steam generators; except central heating hot water boilers",
    "note": "This class includes: - manufacture of radiators for central heating, non-electrically heated - manufacture of steam or other vapour generating boilers - manufacture of auxiliary plant for use with steam or other vapour generating boilers, e.g. economisers, superheaters, steam collectors and accumulators - manufacture of condensers for steam or other vapour power units - manufacture of nuclear reactors, except isotope separators - manufacture of marine or power boilers"
  },
  {
    "level": "Group",
    "code": "C252",
    "name": "Manufacture of weapons and ammunition",
    "parentCode": "C25",
    "keywords": "Manufacture of weapons and ammunition",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2520",
    "name": "Manufacture of weapons and ammunition",
    "parentCode": "C252",
    "keywords": "Manufacture of weapons and ammunition",
    "note": "This class includes: - manufacture of military weapons e.g. artillery weapons, rocket launchers, flame-throwers, grenade launchers, torpedo tubes and similar projectors, machine guns - manufacture of pistols, shotguns and rifles - manufacture of spring, air or gas guns and pistols etc. - manufacture of war ammunition - manufacture of cartridges for shotguns, revolvers and pistols - manufacture of bombs, grenades, torpedos, mines, missiles and similar munitions of war"
  },
  {
    "level": "Group",
    "code": "C259",
    "name": "Manufacture of other fabricated metal products; metalworking service activities",
    "parentCode": "C25",
    "keywords": "Manufacture of other fabricated metal products; metalworking service activities",
    "note": "This group includes general activities for the treatment of metal, such as forging or pressing, plating, coating, engraving, boring, polishing, welding etc., which are typically carried out on a fee or contract basis. This group also includes the manufacture of a variety of metal products, such as cutlery; metal hand tools and general hardware; cans and buckets; nails, bolts and nuts; metal household articles; metal fixtures; ships propellers and anchors; assembled railway track fixtures etc. for a variety of household and industrial uses."
  },
  {
    "level": "Class",
    "code": "C2591",
    "name": "Forging, pressing, stamping and roll-forming of metal; powder metallurgy",
    "parentCode": "C259",
    "keywords": "Forging; pressing; stamping and roll-forming of metal; powder metallurgy",
    "note": "This class includes: - forging, pressing, stamping and roll-forming of metal -production of metal objects directly from metal powders by heat treatment (sintering) or under pressure, i.e. powder metallurgy"
  },
  {
    "level": "Class",
    "code": "C2592",
    "name": "Treatment and coating of metals; machining",
    "parentCode": "C259",
    "keywords": "Treatment and coating of metals; machining",
    "note": "This class includes: - plating, anodizing etc. of metals - heat treatment of metals - deburring, sandblasting, tumbling, cleaning of metals - colouring and engraving of metals - non-metallic coating of metals: * plasticizing, enamelling, lacquering etc. - hardening, buffing of metals - boring, turning, milling, eroding, planing, lapping, broaching, levelling, sawing, grinding, sharpening, polishing, welding, splicing etc. of metalwork pieces - cutting of and writing on metals by means of laser beams"
  },
  {
    "level": "Class",
    "code": "C2593",
    "name": "Manufacture of cutlery, hand tools and general hardware",
    "parentCode": "C259",
    "keywords": "Manufacture of cutlery; hand tools and general hardware",
    "note": "This class includes: - manufacture of domestic cutlery such as knives, forks, spoons etc. - manufacture of other articles of cutlery: * cleavers and choppers * razors and razor blades * scissors and hair clippers - manufacture of knives and cutting blades for machines or for mechanical appliances - manufacture of hand tools such as pliers, screwdrivers etc. - manufacture of non-power-driven agricultural hand tools - manufacture of saws and saw blades, including circular saw blades and chainsaw blades - manufacture of interchangeable tools for hand tools, whether or not power-operated, or for machine tools: drills, punches, milling cutters etc. - manufacture of press tools - manufacture of blacksmiths' tools: forges, anvils etc. - manufacture of moulding boxes and moulds (except ingot moulds) - manufacture of vices, clamps - manufacture of padlocks, locks, keys, hinges and the like, hardware for buildings, furniture, vehicles etc. - manufacture of cutlasses, swords, bayonets etc."
  },
  {
    "level": "Class",
    "code": "C2599",
    "name": "Manufacture of other fabricated metal products n.e.c.",
    "parentCode": "C259",
    "keywords": "Manufacture of other fabricated metal products n.e.c.",
    "note": "This class includes: - manufacture of pails, cans, drums, buckets, boxes - manufacture of tins and cans for food products, collapsible tubes and boxes - manufacture of metallic closures - manufacture of metal cable, plaited bands and similar articles - manufacture of uninsulated metal cable or insulated cable not capable of being used as a conductor of electricity - manufacture of articles made of wire: barbed wire, wire fencing, grill, netting, cloth etc. - manufacture of nails and pins - manufacture of rivets, washers and similar non-threaded products - manufacture of screw machine products - manufacture of bolts, screws, nuts and similar threaded products - manufacture of springs (except watch springs): * leaf springs, helical springs, torsion bar springs * leaves for springs - manufacture of chain, except power transmission chain - manufacture of metal household articles: * flatware: plates, saucers etc. * hollowware: pots, kettles etc. * dinnerware: bowls, platters etc. * saucepans, frying pans and other non-electrical utensils for use at the table or in the kitchen * small hand-operated kitchen appliances and accessories * metal scouring pads - manufacture of baths, sinks, washbasins and similar articles - manufacture of metal goods for office use, except furniture - manufacture of safes, strongboxes, armoured doors etc. - manufacture of various metal articles: * ship propellers and blades thereof * anchors * bells * assembled railway track fixtures * clasps, buckles, hooks - manufacture of foil bags - manufacture of permanent metallic magnets - manufacture of metal vacuum jugs and bottles - manufacture of metal signs (non-electrical) - manufacture of metal badges and metal military insignia - manufacture of metal hair curlers, metal umbrella handles and frames, combs"
  },
  {
    "level": "Division",
    "code": "C26",
    "name": "Manufacture of computer, electronic and optical products",
    "parentCode": "C",
    "keywords": "Manufacture of computer; electronic and optical products",
    "note": "This division includes the manufacture of computers, computer peripherals, communications equipment, and similar electronic products, as well as the manufacture of components for such products. Production processes of this division are characterised by the design and use of integrated circuits and the application of highly specialised miniaturisation technologies."
  },
  {
    "level": "Group",
    "code": "C261",
    "name": "Manufacture of electronic components and boards",
    "parentCode": "C26",
    "keywords": "Manufacture of electronic components and boards",
    "note": "This group includes the manufacture of solar cells, solar panels and photovoltaic inverters, and other electronic components and boards."
  },
  {
    "level": "Class",
    "code": "C2611",
    "name": "Manufacture of solar cells, solar panels and photovoltaic inverters",
    "parentCode": "C261",
    "keywords": "Manufacture of solar cells; solar panels and photovoltaic inverters",
    "note": "This class includes the manufacture of solar cells , solar panels and photovoltaic inverters. This class includes: - manufacture of photovoltaic cells, modules and panels"
  },
  {
    "level": "Class",
    "code": "C2619",
    "name": "Manufacture of other electronic components and boards",
    "parentCode": "C261",
    "keywords": "Manufacture of other electronic components and boards",
    "note": "This class includes the manufacture of semiconductors and other components for electronic applications. This class includes: - manufacture of capacitors, electronic - manufacture of resistors, electronic - manufacture of microprocessors - manufacture of bare printed circuit boards - manufacture of electron tubes - manufacture of electronic connectors - manufacture of integrated circuits (analog, digital or hybrid) - manufacture of diodes, transistors and related discrete devices - manufacture of inductors (e.g. chokes, coils, transformers), electronic component type - manufacture of electronic crystals and crystal assemblies - manufacture of solenoids, switches and transducers for electronic applications - manufacture of dice or wafers, semiconductor, finished or semi-finished - manufacture of interface cards (e.g. sound, video, controllers, network, modems) - manufacture of display components (plasma, polymer, LCD) - manufacture of light emitting diodes (LED) - loading of components onto printed circuit boards"
  },
  {
    "level": "Group",
    "code": "C262",
    "name": "Manufacture of computers and peripheral equipment",
    "parentCode": "C26",
    "keywords": "Manufacture of computers and peripheral equipment",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2620",
    "name": "Manufacture of computers and peripheral equipment",
    "parentCode": "C262",
    "keywords": "Manufacture of computers and peripheral equipment",
    "note": "This class includes the manufacture and/or assembly of electronic computers, such as mainframes, desktop computers, laptops and computer servers; and computer peripheral equipment, such as storage devices and input/output devices (printers, monitors, keyboards). Computers can be analog, digital, or hybrid. Digital computers, the most common type, are devices that do all of the following: (1) store the processing program or programs and the data immediately necessary for the execution of the program, (2) can be freely programmed in accordance with the requirements of the user, (3) perform arithmetical computations specified by the user and (4) execute, without human intervention, a processing program that requires the computer to modify its execution by logical decision during the processing run. Analog computers are capable of simulating mathematical models and comprise at least analog control and programming elements. This class includes: - manufacture of desktop computers - manufacture of laptop computers - manufacture of main frame computers - manufacture of hand-held computers - manufacture of magnetic disk drives, flash drives and other storage devices - manufacture of optical disc drives for computers - manufacture of printers - manufacture of monitors - manufacture of keyboards - manufacture of all types of mice, joysticks, and trackball accessories - manufacture of dedicated computer terminals - manufacture of computer servers - manufacture of scanners, including bar code scanners - manufacture of smart card readers - manufacture of virtual reality helmets - manufacture of computer projectors (video beamers)"
  },
  {
    "level": "Group",
    "code": "C263",
    "name": "Manufacture of communication equipment",
    "parentCode": "C26",
    "keywords": "Manufacture of communication equipment",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2630",
    "name": "Manufacture of communication equipment",
    "parentCode": "C263",
    "keywords": "Manufacture of communication equipment",
    "note": "This class includes the manufacture of telephone and data communications equipment used to move signals electronically through wired or wireless networks, such as radio and television broadcast and wireless communications equipment. This class includes: - manufacture of central office switching equipment - manufacture of cordless telephones - manufacture of private branch exchange (PBX) equipment - manufacture of telephone and facsimile equipment, including telephone answering machines - manufacture of data communications equipment, such as bridges, routers, and gateways - manufacture of transmitting and receiving antenna - manufacture of cable television equipment - manufacture of pagers - manufacture of cellular phones - manufacture of mobile communication equipment - manufacture of radio and television studio and broadcasting equipment, including television cameras - manufacture of modems, carrier equipment - manufacture of radio and television transmitters - manufacture of communication devices using infrared signal (e.g. remote controls) - manufacture of broadcast studio equipment such as reproduction equipment, transmitting and receiving antennas, commercial video cameras"
  },
  {
    "level": "Group",
    "code": "C264",
    "name": "Manufacture of consumer electronics",
    "parentCode": "C26",
    "keywords": "Manufacture of consumer electronics",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2640",
    "name": "Manufacture of consumer electronics",
    "parentCode": "C264",
    "keywords": "Manufacture of consumer electronics",
    "note": "This class includes the manufacture of electronic audio and video equipment for home entertainment, motor vehicles, public address systems and musical instrument amplification. This class includes: - manufacture of video recorders and duplicating equipment - manufacture of televisions - manufacture of television monitors and displays - manufacture of audio recording and duplicating equipment, such as CD players and DVD players - manufacture of computer and TV projectors - manufacture of stereo equipment - manufacture of radio receivers - manufacture of speaker systems - manufacture of household-type video cameras - manufacture of jukeboxes - manufacture of amplifiers for musical instruments and public address systems - manufacture of microphones - manufacture of optical media players with optical reading system - manufacture of karaoke machines - manufacture of headphones, e.g. for radio, stereo, computer - manufacture of video game consoles - manufacture of personal audio and video headsets, including virtual reality headsets - manufacture of home theater audio and video equipment"
  },
  {
    "level": "Group",
    "code": "C265",
    "name": "Manufacture of measuring, testing, navigating and control equipment; watches and clocks",
    "parentCode": "C26",
    "keywords": "Manufacture of measuring; testing; navigating and control equipment; watches and clocks",
    "note": "This group includes the manufacture of sensing, measuring, testing and navigating equipment for various industrial and non-industrial purposes, including time-based measuring devices, e.g. watches and clocks and related devices."
  },
  {
    "level": "Class",
    "code": "C2651",
    "name": "Manufacture of measuring, testing, navigating and control equipment",
    "parentCode": "C265",
    "keywords": "Manufacture of measuring; testing; navigating and control equipment",
    "note": "This class comprises manufacture of search, detection, navigation, guidance, aeronautical, and nautical systems and instruments; automatic controls and regulators for applications, such as heating, air-conditioning, refrigeration and appliances; instruments and devices for measuring, displaying, indicating, recording, transmitting, and controlling temperature, humidity, pressure, vacuum, combustion, flow, level, viscosity, density, acidity, concentration, and rotation; totalising (i.e., registering) fluid meters and counting devices; instruments for measuring and testing the characteristics of electricity and electrical signals; instruments and instrumentation systems for laboratory analysis of the chemical or physical composition or concentration of samples of solid, fluid, gaseous, or composite material; other measuring and testing instruments and parts thereof. The manufacture of non-electric measuring, testing and navigating equipment (except simple mechanical tools) is included here. This class includes: - manufacture of aircraft engine instruments - manufacture of automotive emissions testing equipment - manufacture of meteorological instruments - manufacture of physical properties testing and inspection equipment - manufacture of polygraph machines - manufacture of radiation detection and monitoring instruments - manufacture of surveying instruments - manufacture of thermometers liquid-in-glass and bimetal types (except medical) - manufacture of humidistats - manufacture of hydronic limit controls - manufacture of flame and burner control - manufacture of spectrometers - manufacture of pneumatic gauges - manufacture of consumption meters, e.g., water, gas, electricity - manufacture of flow meters and counting devices - manufacture of tally counters - manufacture of mine detectors, pulse (signal) generators; metal detectors - manufacture of search, detection, navigation, aeronautical, and nautical equipment, including sonobuoys - manufacture of radar equipment - manufacture of GPS devices - manufacture of environmental controls and automatic controls for appliances - manufacture of measuring and recording equipment, e.g. flight recorders - manufacture of motion detectors - manufacture of radars - manufacture of laboratory analytical instruments (e.g. blood analysis equipment) - manufacture of laboratory scales, balances, incubators, and miscellaneous laboratory apparatus for measuring, testing, etc. manufacture of sensors and sensing equipment"
  },
  {
    "level": "Class",
    "code": "C2652",
    "name": "Manufacture of watches and clocks",
    "parentCode": "C265",
    "keywords": "Manufacture of watches and clocks",
    "note": "This class includes the manufacture of watches, clocks and timing mechanisms and parts thereof. This class includes: - manufacture of watches and clocks of all kinds, including instrument panel clocks - manufacture of watch and clock cases, including cases of precious metals - manufacture of time-recording equipment and equipment for measuring, recording and otherwise displaying intervals of time with a watch or clock movement or with synchronous motor, e.g.: • parking meters • time clocks • time/date stamps • process timers - manufacture of time switches and other releases with a watch or clock movement or with synchronous motor: • time locks - manufacture of components for clocks and watches e.g.: • movements of all kinds for watches and clocks • springs, jewels, dials, hands, plates, bridges and other parts • watch and clock cases and housings of all materials"
  },
  {
    "level": "Group",
    "code": "C266",
    "name": "Manufacture of irradiation, electromedical and electrotherapeutic equipment",
    "parentCode": "C26",
    "keywords": "Manufacture of irradiation; electromedical and electrotherapeutic equipment",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2660",
    "name": "Manufacture of irradiation, electromedical and electrotherapeutic equipment",
    "parentCode": "C266",
    "keywords": "Manufacture of irradiation; electromedical and electrotherapeutic equipment",
    "note": "This class includes: - manufacture of irradiation apparatus and tubes, e.g. industrial, medical diagnostic, medical therapeutic, research, scientific: • alpha, beta-, gamma, X-ray or other radiation equipment - manufacture of CT scanners - manufacture of PET scanners - manufacture of magnetic resonance imaging (MRI) equipment - manufacture of medical ultrasound equipment - manufacture of electrocardiographs - manufacture of electromedical endoscopic equipment - manufacture of medical laser equipment - manufacture of artificial respiration or therapeutic respiration apparatus - manufacture of pacemakers - manufacture of hearing aids - manufacture of medical electrical vibratory-massage apparatus - manufacture of electro medical ventilators"
  },
  {
    "level": "Group",
    "code": "C267",
    "name": "Manufacture of optical instruments and photographic equipment",
    "parentCode": "C26",
    "keywords": "Manufacture of optical instruments and photographic equipment",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2670",
    "name": "Manufacture of optical instruments and photographic equipment",
    "parentCode": "C267",
    "keywords": "Manufacture of optical instruments and photographic equipment",
    "note": "This class includes the manufacture of optical instruments and lenses, such as binoculars, microscopes (except electron, proton), telescopes, prisms and lenses (except ophthalmic); the coating or polishing of lenses (except ophthalmic); the mounting of lenses (except ophthalmic) and the manufacture of photographic equipment such as cameras and light meters and the manufacture of. This class includes: - manufacture of optical mirrors - manufacture of optical gun sighting equipment - manufacture of optical positioning equipment - manufacture of optical magnifying instruments - manufacture of optical machinist's precision tools - manufacture of optical comparators - manufacture of film cameras and digital cameras - manufacture of motion picture and slide projectors - manufacture of overhead transparency projectors - manufacture of optical measuring and checking devices and instruments (e.g. fire control equipment, photographic light meters, range finders) - manufacture of lenses, optical microscopes, binoculars and telescopes - manufacture of objective lenses for cameras, projectors or photographic enlargers or reducers - manufacture of laser assemblies -manufacture of unrecorded magnetic audio and video tapes - manufacture of unrecorded optical disks"
  },
  {
    "level": "Group",
    "code": "C268",
    "name": "Manufacture of magnetic and optical media",
    "parentCode": "C26",
    "keywords": "Manufacture of magnetic and optical media",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2680",
    "name": "Manufacture of magnetic and optical media",
    "parentCode": "C268",
    "keywords": "Manufacture of magnetic and optical media",
    "note": "This class includes the manufacture of magnetic and optical recording media. This class includes: —manufacture of blank magnetic audio and video tapes —manufacture of blank magnetic audio and video cassettes —manufacture of blank diskettes —manufacture of blank optical discs"
  },
  {
    "level": "Division",
    "code": "C27",
    "name": "Manufacture of electrical equipment",
    "parentCode": "C",
    "keywords": "Manufacture of electrical equipment",
    "note": "This division includes the manufacture of products that generate, distribute and use electrical power."
  },
  {
    "level": "Group",
    "code": "C271",
    "name": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus",
    "parentCode": "C27",
    "keywords": "Manufacture of electric motors; generators; transformers and electricity distribution and control apparatus",
    "note": "This group comprises the manufacture of power, distribution and specialty transformers; electric motors, generators, and motor generator sets."
  },
  {
    "level": "Class",
    "code": "C2710",
    "name": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus",
    "parentCode": "C271",
    "keywords": "Manufacture of electric motors; generators; transformers and electricity distribution and control apparatus",
    "note": "This class includes the manufacture of power, distribution and specialty transformers; electric motors, generators and motor generator sets; switchgear and switchboard apparatus; relays and industrial controls. The electrical equipment manufactured in this class is for distribution level voltages. This class includes: - manufacture of distribution transformers, electric - manufacture of arc-welding transformers - manufacture of fluorescent ballasts (i.e. transformers) - manufacture of substation transformers for electric power distribution - manufacture of transmission and distribution voltage regulators - manufacture of electric motors (except internal combustion engine starting motors) - manufacture of power generators (except battery charging alternators for internal combustion engines) - manufacture of motor generator sets (except turbine generator set units) - manufacture of prime mover generator sets - rewinding of armatures on a factory basis - manufacture of power circuit breakers - manufacture of surge suppressors (for distribution level voltage) - manufacture of control panels for electric power distribution - manufacture of electrical relays - manufacture of duct for electrical switchboard apparatus - manufacture of electric fuses - manufacture of power switching equipment - manufacture of electric power switches (except pushbutton, snap, solenoid, tumbler)"
  },
  {
    "level": "Group",
    "code": "C272",
    "name": "Manufacture of batteries and accumulators",
    "parentCode": "C27",
    "keywords": "Manufacture of batteries and accumulators",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2720",
    "name": "Manufacture of batteries and accumulators",
    "parentCode": "C272",
    "keywords": "Manufacture of batteries and accumulators",
    "note": "This class includes the manufacture of non-rechargeable and rechargeable batteries. This class includes: - manufacture of primary cells and primary batteries • cells containing manganese dioxide, mercuric dioxide, silver oxide etc. - manufacture of electric accumulators, including parts thereof: • separators, containers, covers - manufacture of lead acid batteries - manufacture of NiCad batteries - manufacture of NiMH batteries - manufacture of lithium batteries - manufacture of dry cell batteries - manufacture of wet cell batteries - manufacture of batteries for vehicles and bicycles - manufacture of battery energy storage system"
  },
  {
    "level": "Group",
    "code": "C273",
    "name": "Manufacture of wiring and wiring devices",
    "parentCode": "C27",
    "keywords": "Manufacture of wiring and wiring devices",
    "note": "This group includes the manufacture of current-carrying wiring devices and non current-carrying wiring devices for wiring electrical circuits regardless of material."
  },
  {
    "level": "Class",
    "code": "C2731",
    "name": "Manufacture of fibre optic cables",
    "parentCode": "C273",
    "keywords": "Manufacture of fibre optic cables",
    "note": "This class includes: - manufacture of fibre optic cable for data transmission or live transmission of images, whether or not fitted with connectors"
  },
  {
    "level": "Class",
    "code": "C2732",
    "name": "Manufacture of other electronic and electric wires and cables",
    "parentCode": "C273",
    "keywords": "Manufacture of other electronic and electric wires and cables",
    "note": "This class includes: - manufacture of insulated wire and cable, made of steel, copper, aluminium - manufacture of computer cables, printer cables, USB cables, not fitted with connectors"
  },
  {
    "level": "Class",
    "code": "C2733",
    "name": "Manufacture of wiring devices",
    "parentCode": "C273",
    "keywords": "Manufacture of wiring devices",
    "note": "This class includes the manufacture of current-carrying and noncurrent-carrying wiring devices for electrical circuits regardless of material. This class includes: - manufacture of bus bars, electrical conductors (except switchgear-type) - manufacture of GFCI (ground fault circuit interrupters) - manufacture of lamp holders - manufacture of lightning arrestors and coils - manufacture of switches for electrical wiring (e.g. pressure, pushbutton, snap, tumbler switches) - manufacture of electrical plugs, connectors or sockets - manufacture of boxes for electrical wiring (e.g. junction, outlet, switch boxes) - manufacture of electrical conduit and fitting - manufacture of transmission pole and line hardware - manufacture of plastic noncurrent carrying wiring devices including plastic junction boxes, face plates and similar, plastic pole line fittings and switch covers"
  },
  {
    "level": "Group",
    "code": "C274",
    "name": "Manufacture of lighting equipment",
    "parentCode": "C27",
    "keywords": "Manufacture of lighting equipment",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2740",
    "name": "Manufacture of lighting equipment",
    "parentCode": "C274",
    "keywords": "Manufacture of lighting equipment",
    "note": "This class includes the manufacture of electric light bulbs and tubes and parts and components thereof (except glass blanks for electric light bulbs), electric lighting and other fixtures and lighting fixture components (except current-carrying wiring devices). This class includes: - manufacture of lamps, fixtures and bulbs, e.g. discharge, incandescent, fluorescent, ultra-violet, infra-red, LED - manufacture of ceiling or wall lighting fixtures, e.g. chandeliers - manufacture of table or floor-standing lamps (i.e. lighting fixture) - manufacture of chain lights - manufacture of electric fireplace logs - manufacture of flashlights - manufacture of electric insect lamps - manufacture of lanterns (e.g. carbide, electric, gas, gasoline, kerosene) - manufacture of spotlights - manufacture of street lighting fixtures (except traffic signals) - manufacture of lighting equipment for transportation equipment (e.g. for motor vehicles, aircraft, boats) - manufacture of solar lighting equipment"
  },
  {
    "level": "Group",
    "code": "C275",
    "name": "Manufacture of domestic appliances",
    "parentCode": "C27",
    "keywords": "Manufacture of domestic appliances",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2750",
    "name": "Manufacture of domestic appliances",
    "parentCode": "C275",
    "keywords": "Manufacture of domestic appliances",
    "note": "This class includes the manufacture of small electric appliances and electric housewares, household-type fans, household-type vacuum cleaners, electric household-type floor care machines, household-type cooking appliances, household-type laundry equipment, household-type refrigerators, upright and chest freezers and other electrical and non-electrical household appliances, such as dishwashers, water heaters and garbage disposal units. This class includes the manufacture of appliances with electric, gas or other fuel sources. This class includes: - manufacture of domestic electric appliances: * refrigerators * freezers * dishwashers * washing and drying machines * vacuum cleaners * floor polishers * waste disposers * grinders, blenders, juice squeezers * tin openers * electric shavers, electric toothbrushes and other electric personal care device * knife sharpeners * ventilating or recycling hoods - manufacture of domestic electrothermic appliances: * electric water heaters * electric blankets * electric dryers, combs, brushes, curlers * electric smoothing irons * space heaters and household-type fans, portable * electric ovens * microwave ovens * cookers, hotplates * toasters * electric barbecue * coffee or tea makers * fry pans, roasters, grills, hoods * electric heating resistors etc. - manufacture of domestic non-electric cooking and heating equipment: * non-electric space heaters, cooking ranges, grates, stoves, water heaters, cooking appliances, plate warmers"
  },
  {
    "level": "Group",
    "code": "C279",
    "name": "Manufacture of other electrical equipment",
    "parentCode": "C27",
    "keywords": "Manufacture of other electrical equipment",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2790",
    "name": "Manufacture of other electrical equipment",
    "parentCode": "C279",
    "keywords": "Manufacture of other electrical equipment",
    "note": "This class includes the manufacture of miscellaneous electrical equipment other than motors, generators and transformers, batteries and accumulators, wires and wiring devices, lighting equipment or domestic appliances This class includes: - manufacture of battery chargers, solid-state - manufacture of door opening and closing devices, electrical - manufacture of electric bells - manufacture of extension cords made from purchased insulated wire - manufacture of ultrasonic cleaning machines (except laboratory and dental) - manufacture of tanning beds - manufacture of fuel cells (except for motor vehicles), regulated and unregulated power supplies - manufacture of uninterruptible power supplies (UPS) - manufacture of surge suppressors (except for distribution level voltage) - manufacture of appliance cords, extension cords, and other electrical cord sets with insulated wire and connectors - manufacture of carbon and graphite electrodes, contacts, and other electrical carbon and graphite products - manufacture of particle accelerators - manufacture of electrical capacitors, resistors, condensers and similar components - manufacture of electromagnets - manufacture of sirens - manufacture of electronic scoreboards - manufacture of electrical signs - manufacture of electrical signalling equipment such as traffic lights and pedestrian signalling equipment - manufacture of electrical insulators (except glass or porcelain) - manufacture of electrical welding and soldering equipment, including hand-held soldering irons - manufacture of inverters for photovoltaic installations - manufacture of electroplating machinery - manufacture of on-board chargers for motor vehicles - manufacture of assembled cables, fitted with connectors - manufacture of charging stations for cars"
  },
  {
    "level": "Division",
    "code": "C28",
    "name": "Manufacture of machinery and equipment n.e.c.",
    "parentCode": "C",
    "keywords": "Manufacture of machinery and equipment n.e.c.",
    "note": "This division includes the manufacture of machinery and equipment that act independently on materials either mechanically or thermally or perform operations on materials (such as handling, spraying, weighing or packing), including their mechanical components that produce and apply force, and any specially manufactured primary parts. This includes the manufacture of fixed and mobile or hand-held devices, regardless of whether they are designed for industrial, building and civil engineering, agricultural or home use. The manufacture of special equipment for passenger or freight transport within demarcated premises also belongs within this division. This division distinguishes between the manufacture of special-purpose machinery, i.e. machinery for exclusive use in an ISIC activity or a small cluster of ISIC activities, and general-purpose machinery, i.e. machinery that is being used in a wide range of ISIC industries."
  },
  {
    "level": "Group",
    "code": "C281",
    "name": "Manufacture of general-purpose machinery",
    "parentCode": "C28",
    "keywords": "Manufacture of general-purpose machinery",
    "note": "This group includes the manufacture of general-purpose machinery, i.e. machinery that is being used in a wide range of ISIC industries. This can include the manufacture of components used in the manufacture of a variety of other machinery or the manufacture of machinery that support the operation of other businesses."
  },
  {
    "level": "Class",
    "code": "C2811",
    "name": "Manufacture of engines and turbines, except aircraft, vehicle and cycle engines",
    "parentCode": "C281",
    "keywords": "Manufacture of engines and turbines; except aircraft; vehicle and cycle engines",
    "note": "This class includes: - manufacture of internal combustion piston engines, except motor vehicle, aircraft and cycle propulsion engines: • marine engines • railway engines - manufacture of parts suitable for use solely or principally with internal combustion engines, e.g. pistons, piston rings, carburettors and such for internal combustion engines, diesel engines etc, except for motor vehicles - manufacture of inlet and exhaust valves of internal combustion engines - manufacture of turbines and parts thereof: • steam turbines and other vapour turbines • hydraulic turbines, waterwheels and regulators thereof • wind turbines and mills • gas turbines, except turbojets or turbo propellers for aircraft propulsion - manufacture of boiler-turbine sets - manufacture of turbine-generator sets, consisting of a turbine and a generator mounted together - manufacture of engines for industrial application - factory overhaul of ship and boat engines"
  },
  {
    "level": "Class",
    "code": "C2812",
    "name": "Manufacture of fluid power equipment",
    "parentCode": "C281",
    "keywords": "Manufacture of fluid power equipment",
    "note": "This class includes: - manufacture of hydraulic and pneumatic power engines and motors, cylinders and valve - manufacture of air preparation equipment for use in pneumatic systems - manufacture of hydraulic fluid power systems - manufacture of hydraulic transmission equipment - manufacture of electric linear actuators - manufacture of gas spring cylinders"
  },
  {
    "level": "Class",
    "code": "C2813",
    "name": "Manufacture of other pumps, compressors, taps and valves",
    "parentCode": "C281",
    "keywords": "Manufacture of other pumps; compressors; taps and valves",
    "note": "This class includes: - manufacture of air or vacuum pumps, air or other gas compressors - manufacture of pumps for liquids whether or not fitted with a measuring device - manufacture of pumps designed for fitting to internal combustion engines: oil, water and fuel pumps for motor vehicles etc."
  },
  {
    "level": "Class",
    "code": "C2814",
    "name": "Manufacture of bearings, gears, gearing and driving elements",
    "parentCode": "C281",
    "keywords": "Manufacture of bearings; gears; gearing and driving elements",
    "note": "This class includes: - manufacture of ball and roller bearings and parts thereof - manufacture of mechanical power transmission equipment e.g.: • transmission shafts including camshafts, crankshafts and cranks • bearing housings and plain shaft bearings - manufacture of gears, gearing and gear boxes and other speed changers - manufacture of clutches and shaft couplings - manufacture of flywheels and pulleys - manufacture of articulated link chain - manufacture of power transmission chain"
  },
  {
    "level": "Class",
    "code": "C2815",
    "name": "Manufacture of ovens, furnaces and permanent household heating equipment",
    "parentCode": "C281",
    "keywords": "Manufacture of ovens; furnaces and permanent household heating equipment",
    "note": "This class includes: - manufacture of electrical and other industrial and laboratory furnaces and ovens, including incinerators - manufacture of furnace burners - manufacture of central heating boilers, solar water heaters and similar equipment -manufacture of household cooling and ventilation equipment"
  },
  {
    "level": "Class",
    "code": "C2816",
    "name": "Manufacture of lifting and handling equipment",
    "parentCode": "C281",
    "keywords": "Manufacture of lifting and handling equipment",
    "note": "This class includes: - manufacture of hand-operated or power-driven lifting, handling, loading or unloading machinery e.g.: • pulley tackle and hoists, winches, capstans and jacks • derricks, cranes, mobile lifting frames, straddle carriers • works trucks, whether or not fitted with lifting or handling equipment, whether or not self- propelled, of the type used in factories (including hand trucks and wheelbarrows) • mechanical manipulators and industrial robots specifically designed for lifting, handling, loading or unloading • manufacture of unmanned and robotic forklifts and pallet loaders/unloaders - manufacture of conveyors, cable cars etc. - manufacture of lifts, escalators and moving walkways - manufacture of parts suitable for use solely or principally with lifting and handling equipment"
  },
  {
    "level": "Class",
    "code": "C2817",
    "name": "Manufacture of office machinery and equipment (except computers and peripheral equipment)",
    "parentCode": "C281",
    "keywords": "Manufacture of office machinery and equipment (except computers and peripheral equipment)",
    "note": "This class includes: - manufacture of calculating machines - manufacture of cash registers - manufacture of calculators - manufacture of postage meters, mail handling machines (envelope stuffing, sealing and addressing machinery; opening, sorting, scanning) - manufacture of typewriters and stenography machines - manufacture of office-type binding equipment (i.e. plastic or tape binding) - manufacture of coin sorting, coin counting and coin wrapping machines - manufacture of pencil sharpening machines - manufacture of stapling machines - manufacture of voting machines - manufacture of tape dispensers - manufacture of hole punches - manufacture of photocopy machines - manufacture of toner cartridges - manufacture of blackboards; white boards and marker boards with writing or drawing surfaces - manufacture of dictating machines"
  },
  {
    "level": "Class",
    "code": "C2818",
    "name": "Manufacture of power-driven hand tools",
    "parentCode": "C281",
    "keywords": "Manufacture of power-driven hand tools",
    "note": "This class includes: - manufacture of hand tools, with self-contained electric or non-electric motor, pneumatic or hydraulic drive, such as: • circular or reciprocating saws • chain saws • drills and hammer drills • hand held power sanders • pneumatic nailers • buffers • routers • grinders • staplers • pneumatic rivet guns • planers • shears and nibblers • impact wrenches • powder actuated nailers"
  },
  {
    "level": "Class",
    "code": "C2819",
    "name": "Manufacture of other general-purpose machinery",
    "parentCode": "C281",
    "keywords": "Manufacture of other general-purpose machinery",
    "note": "This class includes: —manufacture of industrial refrigerating or freezing equipment, including assemblies of major components —manufacture of air-conditioning machines, including for motor vehicles —manufacture of non-domestic fans —manufacture of weighing machinery (other than sensitive laboratory balances): ™ household and shop scales, platform scales, scales for continuous weighing, weighbridges, weights etc. —manufacture of filtering or purifying machinery and apparatus for liquids —manufacture of equipment for projecting, dispersing or spraying liquids or powders: ™ spray guns, fire extinguishers, sandblasting machines, steam cleaning machines etc. —manufacture of packing and wrapping machinery: ™ filling, closing, sealing, capsuling or labeling machines etc. —manufacture of machinery for cleaning or drying bottles and for aerating beverages —manufacture of distilling or rectifying plant for petroleum refineries, chemical industries, beverage industries etc. —manufacture of heat exchangers —manufacture of machinery for liquefying air or gas —manufacture of gas generators —manufacture of calendering or other rolling machines and cylinders thereof (except for metal and glass) —manufacture of centrifuges (except cream separators and clothes dryers) —manufacture of gaskets and similar joints made of a combination of materials or layers of the same material —manufacture of automatic goods vending machines —manufacture of parts for general-purpose machinery —manufacture of attic ventilation fans (gable fans, roof ventilators, etc.) —manufacture of levels, tape measures and similar hand tools, machinists’ precision tools (except optical) —manufacture of non-electrical welding and soldering equipment"
  },
  {
    "level": "Group",
    "code": "C282",
    "name": "Manufacture of special-purpose machinery",
    "parentCode": "C28",
    "keywords": "Manufacture of special-purpose machinery",
    "note": "This group includes the manufacture of special-purpose machinery, i.e. machinery for exclusive use in an ISIC industry or a small cluster of ISIC industries. While most of these are used in other manufacturing processes, such as food manufacturing or textile manufacturing, this group also includes the manufacture of machinery specific for other (non-manufacturing industries), such as aircraft launching gear or amusement park equipment."
  },
  {
    "level": "Class",
    "code": "C2821",
    "name": "Manufacture of agricultural and forestry machinery",
    "parentCode": "C282",
    "keywords": "Manufacture of agricultural and forestry machinery",
    "note": "This class includes: - manufacture of tractors used in agricultural and forestry - manufacture of single-axe (pedestrian-controlled) tractors - manufacture of mowers, including lawnmowers - manufacture of agricultural self-loading or self-unloading trailers or semi-trailers for agricultural purposes - manufacture of agricultural machinery for soil preparation or cultivation e.g.: • ploughs, harrows, manure spreaders, seeders, fertiliser distributors, etc. - manufacture of harvesting or threshing machinery e.g.: • harvesters, threshers, sorters etc. - manufacture of milking machines - manufacture of agricultural or horticultural spraying appliances - manufacture of diverse agricultural machinery e.g.: • poultry-keeping machinery, bee-keeping machinery, equipment for preparing fodder etc. • machines for cleaning, sorting or grading eggs, fruit etc. - manufacture of machinery for vertical farming"
  },
  {
    "level": "Class",
    "code": "C2822",
    "name": "Manufacture of metal-forming machinery and machine tools",
    "parentCode": "C282",
    "keywords": "Manufacture of metal-forming machinery and machine tools",
    "note": "This class includes: - manufacture of machine tools for working metals and other materials (wood, bone, stone, hard rubber, hard plastics, cold glass etc.), including those using a laser beam, ultrasonic waves, plasma arc, magnetic pulse etc. - manufacture of machine tools for turning, drilling, milling, shaping, planing, boring, grinding etc. - manufacture of stamping or pressing machine tools - manufacture of punch presses, hydraulic presses, hydraulic brakes, drop hammers, forging machines etc. - manufacture of draw-benches, thread rollers or machines for working wires - manufacture of stationary machines for nailing, stapling, glueing or otherwise assembling wood, cork, bone, hard rubber or plastics etc. - manufacture of stationary rotary or rotary percussion drills, filing machines, riveters, sheet metal cutters etc. - manufacture of presses for the manufacture of particle board and the like - manufacture of electroplating machinery"
  },
  {
    "level": "Class",
    "code": "C2823",
    "name": "Manufacture of machinery for metallurgy",
    "parentCode": "C282",
    "keywords": "Manufacture of machinery for metallurgy",
    "note": "This class includes: - manufacture of machines and equipment for handling hot metals e.g. converters, ingot moulds, ladles and casting machines of a kind used in metallurgy or in metal foundries - manufacture of metal-rolling mills and rolls for such mills"
  },
  {
    "level": "Class",
    "code": "C2824",
    "name": "Manufacture of machinery for mining, quarrying and construction",
    "parentCode": "C282",
    "keywords": "Manufacture of machinery for mining; quarrying and construction",
    "note": "This class includes: - manufacture of continuous-action elevators and conveyors for goods and materials, for underground use - manufacture of boring, cutting or sinking machinery for boring earth or extracting minerals or ores or of coal or rock cutters and tunnelling machinery - manufacture of machinery for treating minerals by screening, sorting, separating, washing, crushing, grinding, mixing or kneading earth, stone, ores or other mineral substances, in solid (including powder or paste) form - manufacture of concrete and mortar mixers - manufacture of earth-moving machinery: • bulldozers, angle-dozers, graders, scrapers, levellers, mechanical shovels, shovel loaders etc. - manufacture of pile drivers and pile extractors, mortar spreaders, bitumen spreaders, concrete surfacing machinery etc. - manufacture of machines for mixing mineral substances with bitumen - manufacture of track laying excavators - manufacture of bulldozer and angle-dozer blades - manufacture of off-road dumping trucks - manufacture of snow-ploughs and snow-blowers"
  },
  {
    "level": "Class",
    "code": "C2825",
    "name": "Manufacture of machinery for food, beverage and tobacco processing",
    "parentCode": "C282",
    "keywords": "Manufacture of machinery for food; beverage and tobacco processing",
    "note": "This class includes: - manufacture of dryers for agricultural products - manufacture of machinery for the dairy industry e.g.: • cream separators • milk processing machinery, e.g. homogenisers • milk converting machinery, e.g. butter chums, butter workers and moulding machines • cheese-making machines, e.g. homogenisers, moulders, presse) - manufacture of machinery for the grain milling industry e.g.: • machinery to clean, sort or grade seeds, grain or dried leguminous vegetables, e.g. winnowers, sieving belts, separators, grain brushing machines • machinery to produce flour and meal etc., e.g. grinding mills, feeders, sifters, bran cleaners, blenders, rice hullers, pea splitters - manufacture of presses, crushers etc., e.g.to make wine, cider, fruit juices etc. - manufacture of machinery for the bakery industry or for making macaroni, spaghetti or similar products e.g.: • bakery ovens, dough mixers, dough-dividers, moulders, slicers, cake depositing machines etc. - manufacture of machines and equipment to process diverse foods e.g.: • machinery to make confectionery, cocoa or chocolate; to manufacture sugar; for breweries; to process meat or poultry, to prepare fruit, nuts or vegetables; to prepare fish, shellfish or other seafood • other machinery for the industrial preparation or manufacture of food or drink - manufacture of machinery for the extraction or preparation of animal or vegetable fats or oils - manufacture of machinery for the preparation of tobacco and for the making of cigarettes or cigars, or for pipe or chewing tobacco or snuff - manufacture of machinery, plant and equipment for cooking or heating food in hotels and restaurants"
  },
  {
    "level": "Class",
    "code": "C2826",
    "name": "Manufacture of machinery for textile, apparel and leather production",
    "parentCode": "C282",
    "keywords": "Manufacture of machinery for textile; apparel and leather production",
    "note": "This class includes: - manufacture of textile machinery e.g.: • machines for preparing, producing, extruding, drawing, texturing or cutting man-made textile fibres, materials or yarns • machines for preparing textile fibres e.g.: cotton gins, bale breakers, garnetters, cotton spreaders, wool scourers, wool carbonisers, combs, carders, roving frames • spinning machines • machines for preparing textile yarns e.g.: reelers, warpers and related machines • weaving machines (looms), including hand looms • knitting machines • machines for making knotted net, tulle, lace, braid etc. - manufacture of auxiliary machines or equipment for textile machinery: • dobbies, jacquards, automatic stop motions, shuttle changing mechanisms, spindles and spindle flyers etc. - manufacture of textile printing machinery - manufacture of machinery for fabric processing: • machinery for washing, bleaching, dyeing, dressing, finishing, coating or impregnating textile fabrics • manufacture of machines for reeling, unreeling, folding, cutting or pinking textile fabrics - manufacture of laundry machinery: • ironing machines, including fusing presses • commercial washing and drying machines • dry-cleaning machines - manufacture of sewing machines, sewing machine heads and sewing machine needles (whether or not for household use) - manufacture of machines for producing or finishing felt or non-wovens - manufacture of leather machines: • machinery for preparing, tanning or working hides, skins or leather • machinery for making or repairing footwear or other articles of hides, skins, leather or fur skins"
  },
  {
    "level": "Class",
    "code": "C2829",
    "name": "Manufacture of other special-purpose machinery",
    "parentCode": "C282",
    "keywords": "Manufacture of other special-purpose machinery",
    "note": "This class includes the manufacture of special-purpose machinery not elsewhere classified. This class includes: - manufacture of machinery for making paper pulp - manufacture of paper and paperboard making or finishing machinery - manufacture of dryers for wood, paper pulp, paper or paperboard - manufacture of machinery producing articles of paper or paperboard - manufacture of machinery for working soft rubber or plastics or for the manufacture of products of these materials: * extruders, moulders, pneumatic tyre making or retreading machines and other machines for making a specific rubber or plastic product - manufacture of printing and bookbinding machines and machines for activities supporting printing on a variety of materials - manufacture of machinery for producing tiles, bricks, shaped ceramic pastes, pipes, graphite electrodes, blackboard chalk, foundry moulds etc. - manufacture of semi-conductor manufacturing machinery - manufacture of additive manufacturing machinery - manufacture of industrial robots performing multiple tasks for special purposes - manufacture of diverse special-purpose machinery and equipment: * machines to assemble electric or electronic lamps, tubes (valves) or bulbs * machines for production or hot-working of glass or glassware, glass fibre or yarn * machinery or apparatus for isotopic separation - manufacture of tire alignment and balancing equipment; balancing equipment (except wheel balancing) - manufacture of central greasing systems - manufacture of aircraft launching gear, aircraft carrier catapults and related equipment - manufacture of automatic bowling alley equipment (e.g. pin-setters) - manufacture of roundabouts, swings, shooting galleries and other fairground amusements"
  },
  {
    "level": "Division",
    "code": "C29",
    "name": "Manufacture of motor vehicles, trailers and semi-trailers",
    "parentCode": "C",
    "keywords": "Manufacture of motor vehicles; trailers and semi-trailers",
    "note": "This division includes the manufacture of motor vehicles for transporting passengers or freight. The manufacture of various parts and accessories, as well as the manufacture of trailers and semi-trailers, is included here. The repair and maintenance of motor vehicles produced in this division are classified in 9531."
  },
  {
    "level": "Group",
    "code": "C291",
    "name": "Manufacture of motor vehicles",
    "parentCode": "C29",
    "keywords": "Manufacture of motor vehicles",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2910",
    "name": "Manufacture of motor vehicles",
    "parentCode": "C291",
    "keywords": "Manufacture of motor vehicles",
    "note": "This class includes the manufacture of electric, combustion and hybrid engine vehicles and of autonomous vehicles It includes - manufacture of passenger cars - manufacture of commercial vehicles: • vans, lorries, road tractors for semi-trailers etc. - manufacture of buses, trolleybuses and coaches - manufacture of motor vehicle engines, including electric motors - manufacture of other motor vehicles e.g.: • snowmobiles, golf carts, amphibious motor vehicles • road sweeper trollies • crane lorries - all-terrain vehicles (ATV), go-carts and similar including racing cars"
  },
  {
    "level": "Group",
    "code": "C292",
    "name": "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers",
    "parentCode": "C29",
    "keywords": "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2920",
    "name": "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers",
    "parentCode": "C292",
    "keywords": "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers",
    "note": "This class includes: - manufacture of bodies, including cabs for motor vehicles e.g. • fire engines, travelling libraries, armoured cars. • concrete-mixer lorries - outfitting of all types of motor vehicles, trailers and semi-trailers - manufacture of trailers and semi-trailers e.g.: • tankers, trailers with closed and open bodies etc. • caravans etc. - reconditioning and customising of motor vehicles - manufacture of containers (including containers for the transport of fluids) specially designed and equipped for carriage by one or more modes of transport - manufacture of chassis for trailers"
  },
  {
    "level": "Group",
    "code": "C293",
    "name": "Manufacture of parts and accessories for motor vehicles",
    "parentCode": "C29",
    "keywords": "Manufacture of parts and accessories for motor vehicles",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C2930",
    "name": "Manufacture of parts and accessories for motor vehicles",
    "parentCode": "C293",
    "keywords": "Manufacture of parts and accessories for motor vehicles",
    "note": "This class includes: - manufacture of diverse parts and accessories for motor vehicles: * brakes, gearboxes, axles, road wheels, suspension shock absorbers, radiators, silencers, exhaust pipes, catalytic converters, clutches, steering wheels, steering columns and steering boxes - manufacture of parts and accessories of bodies for motor vehicles: * safety belts, airbags, doors, bumpers - manufacture of car seats - manufacture of motor vehicle electrical equipment, such as generators, alternators, spark plugs, ignition wiring harnesses, power window and door systems, assembly of purchased gauges into instrument panels, voltage regulators, lamps, etc."
  },
  {
    "level": "Division",
    "code": "C30",
    "name": "Manufacture of other transport equipment",
    "parentCode": "C",
    "keywords": "Manufacture of other transport equipment",
    "note": "This division includes the manufacture of transportation equipment such as ship building and boat manufacturing, the manufacture of railroad rolling stock and locomotives, air and spacecraft, motorcycles and bicycles and the manufacture of parts thereof, whose manufacture is not elsewhere classified"
  },
  {
    "level": "Group",
    "code": "C301",
    "name": "Building of ships and boats",
    "parentCode": "C30",
    "keywords": "Building of ships and boats",
    "note": "This group includes the building of ships, boats, yachts and other floating structures for transportation and other commercial purposes, as well as for sports, recreational and military purposes"
  },
  {
    "level": "Class",
    "code": "C3011",
    "name": "Building of ships and floating structures",
    "parentCode": "C301",
    "keywords": "Building of ships and floating structures",
    "note": "This class includes the building of civilian and military ships (except vessels for sports or recreation), and the construction of floating structures. This class includes: - building of commercial vessels: * passenger vessels, ferry boats, cargo ships, tankers, tugs etc. - building of military ships and vessels - building of fishing vessels, factory ships and other vessels for processing or preserving fishery products - manufacture of submersible drones"
  },
  {
    "level": "Class",
    "code": "C3012",
    "name": "Building of pleasure and sporting boats",
    "parentCode": "C301",
    "keywords": "Building of pleasure and sporting boats",
    "note": "This class includes: - manufacture of inflatable boats and rafts for sport and recreation - building of sailboats with or without auxiliary motor - building of motor boats - building of recreation-type hovercraft - building of yachts - manufacture of personal watercraft - manufacture of other pleasure and sporting boats e.g.: • canoes, kayaks, rowing boats, skiffs"
  },
  {
    "level": "Group",
    "code": "C302",
    "name": "Manufacture of railway locomotives and rolling stock",
    "parentCode": "C30",
    "keywords": "Manufacture of railway locomotives and rolling stock",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C3020",
    "name": "Manufacture of railway locomotives and rolling stock",
    "parentCode": "C302",
    "keywords": "Manufacture of railway locomotives and rolling stock",
    "note": "This class includes: - manufacture of electric, diesel, steam and other rail locomotives - manufacture of self-propelled railway or tramway coaches, vans and trucks - manufacture of railway or tramway maintenance or service vehicles - manufacture of railway or tramway rolling stock, not self-propelled e.g.: • passenger coaches, goods vans, tank wagons, self-discharging vans and wagons, workshop vans, crane vans, tenders - manufacture of specialised parts of railway or tramway locomotives or of rolling stock e.g.: • bogies, axles, axle-boxes and wheels, brakes and parts of brakes; hooks and coupling devices, buffers and buffer parts; shock absorbers; wagon and locomotive frames; bodies; corridor connections etc."
  },
  {
    "level": "Group",
    "code": "C303",
    "name": "Manufacture of air and spacecraft and related machinery",
    "parentCode": "C30",
    "keywords": "Manufacture of air and spacecraft and related machinery",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C3030",
    "name": "Manufacture of air and spacecraft and related machinery",
    "parentCode": "C303",
    "keywords": "Manufacture of air and spacecraft and related machinery",
    "note": "This class includes the manufacture of civilian and military air and spacecraft and related machinery. It includes: - manufacture of airplanes for the transport of goods or passengers, for sport or other purposes - manufacture of helicopters - manufacture of gliders, hang-gliders - manufacture of dirigibles and hot air balloons - manufacture of parts and accessories of the aircraft of this class: * major assemblies such as fuselages, wings, doors, control surfaces, landing gear, fuel tanks, nacelles etc. * airscrews, helicopter rotors and propelled rotor blades * motors and engines of a kind typically found on aircraft * parts of turbojets and turboprops for aircraft - manufacture of ground flying trainers - manufacture of civilian unmanned aircrafts (drones), non-recreational - manufacture of military drones, Unmanned Aerial Vehicles (UAVs) - manufacture of spacecraft and launch vehicles, satellites, planetary probes, orbital stations, shuttles"
  },
  {
    "level": "Group",
    "code": "C304",
    "name": "Manufacture of military fighting vehicles",
    "parentCode": "C30",
    "keywords": "Manufacture of military fighting vehicles",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C3040",
    "name": "Manufacture of military fighting vehicles",
    "parentCode": "C304",
    "keywords": "Manufacture of military fighting vehicles",
    "note": "This class includes the manufacture of military fighting vehicles, whether or not fitted with weapons, and of parts of such vehicles, e.g.: - manufacture of tanks - manufacture of armoured combat vehicles for transporting persons - manufacture of armoured supply vehicles or armoured recovery vehicles with cranes - manufacture of armoured amphibious military vehicles - manufacture of remotely operated tanks - manufacture of armoured fighting vehicle bodies and parts thereof, e.g. armoured turrets, armoured doors and covers - manufacture of armoured plates that are identifiable as parts of military fighting vehicles - manufacture of special tracks and special wheels and drive wheels for armored fighting vehicles"
  },
  {
    "level": "Group",
    "code": "C309",
    "name": "Manufacture of transport equipment n.e.c.",
    "parentCode": "C30",
    "keywords": "Manufacture of transport equipment n.e.c.",
    "note": "This group includes the manufacture of transport equipment other than motor vehicles and rail, water, air or space transport equipment and military vehicles."
  },
  {
    "level": "Class",
    "code": "C3091",
    "name": "Manufacture of motorcycles",
    "parentCode": "C309",
    "keywords": "Manufacture of motorcycles",
    "note": "This class includes: - manufacture of motorcycles and mopeds - manufacture of engines for motorcycles - manufacture of sidecars for motorcycles - manufacture of parts and accessories for motorcycles, e.g. brakes, gear boxes, clutches, road wheels, silencers and exhaust pipes, and parts thereof"
  },
  {
    "level": "Class",
    "code": "C3092",
    "name": "Manufacture of bicycles and invalid carriages",
    "parentCode": "C309",
    "keywords": "Manufacture of bicycles and invalid carriages",
    "note": "This class includes: - manufacture of non-motorised bicycles and other cycles, including (delivery) tricycles, tandems, children's bicycles and tricycles - manufacture of parts and accessories of bicycles, e.g. frames, forks, wheel rims and spokes, hubs, brakes, saddles, pedals, crank-gear and derailleur gears - manufacture of bicycles with an auxiliary electric motor - manufacture of carriages for disabled persons with or without motor - manufacture of parts and accessories of carriages for disabled persons - manufacture of baby carriages and parts thereof"
  },
  {
    "level": "Class",
    "code": "C3099",
    "name": "Manufacture of other transport equipment n.e.c.",
    "parentCode": "C309",
    "keywords": "Manufacture of other transport equipment n.e.c.",
    "note": "This class includes: - manufacture of hand-propelled vehicles e.g.: luggage trucks, handcarts, sledges, shopping carts - manufacture of vehicles drawn by animals e.g.: sulkies, donkey-carts, hearses"
  },
  {
    "level": "Division",
    "code": "C31",
    "name": "Manufacture of furniture",
    "parentCode": "C",
    "keywords": "Manufacture of furniture",
    "note": "This division includes the manufacture of furniture and parts thereof, except of sheets and slabs of glass, stone, concrete or similar material as parts of furniture. The processes used in the manufacture of furniture are standard methods of forming materials and assembling components, including cutting, molding and laminating. The design of the article, for both aesthetic and functional qualities, is an important aspect of the production process. Some of the processes used in furniture manufacturing are similar to processes that are used in other segments of manufacturing. For example, cutting and assembly occurs in the production of wood trusses that are classified in division 16 (Manufacture of wood and wood products). However, the multiple processes distinguish wood furniture manufacturing from wood product manufacturing. Similarly, metal furniture manufacturing uses techniques that are also employed in the manufacture of roll-formed products classified in division 25 (Manufacture of fabricated metal products). The molding process for plastics furniture is similar to the molding of other plastics products. However, the manufacture of plastics furniture tends to be a specialised activity."
  },
  {
    "level": "Group",
    "code": "C310",
    "name": "Manufacture of furniture",
    "parentCode": "C31",
    "keywords": "Manufacture of furniture",
    "note": "This group includes the manufacture of furniture of wood and of any other material, for various purposes. It also includes manufacture of parts of furniture, except of sheets and slabs (whether or not cut to shape) of glass (including mirrors), marble or other stone, concrete or similar material. This group includes: —manufacture of chairs and seats for offices, workrooms, hotels, restaurants, public and domestic premises —manufacture of chairs and seats for theatres, cinemas and the like —manufacture of sofas, sofa beds and sofa sets —manufacture of garden chairs and seats —manufacture of special furniture for shops: counters, display cases, shelves etc. —manufacture of furniture for churches, schools, restaurants —manufacture of office furniture —manufacture of kitchen furniture —manufacture of furniture for bedrooms, living rooms, gardens etc. —manufacture of cabinets for sewing machines, televisions etc. —manufacture of laboratory benches, stools and other laboratory seating, laboratory furniture (e.g. cabinets and tables) —manufacture of parts and accessories of furniture"
  },
  {
    "level": "Class",
    "code": "C3101",
    "name": "Manufacture of wooden furniture",
    "parentCode": "C310",
    "keywords": "Manufacture of wooden furniture",
    "note": "This class includes the manufacture of wooden furniture of any kind and for various purposes. The furniture is considered being made from wood if its frame is made of wood, or if there is no frame, the predominant component material is wood. Reference to “wood” in this class applies also to bamboos and other materials of a woody nature."
  },
  {
    "level": "Class",
    "code": "C3102",
    "name": "Manufacture of other furniture",
    "parentCode": "C310",
    "keywords": "Manufacture of other furniture",
    "note": "This class includes the manufacture of furniture of any kind, of any material (except, wood, bamboo, stone, concrete or ceramic) for any place and for various purposes. It includes manufacture of mattresses and of mattress supports."
  },
  {
    "level": "Division",
    "code": "C32",
    "name": "Other manufacturing",
    "parentCode": "C",
    "keywords": "Other manufacturing",
    "note": "This division includes the manufacture of a variety of goods not covered in other parts of the classification. Since this is a residual division, production processes, input materials and use of the produced goods can vary widely and usual criteria for grouping classes into divisions have not been applied here."
  },
  {
    "level": "Group",
    "code": "C321",
    "name": "Manufacture of jewellery, bijouterie and related articles",
    "parentCode": "C32",
    "keywords": "Manufacture of jewellery; bijouterie and related articles",
    "note": "This group includes the manufacture of jewellery and imitation jewellery articles."
  },
  {
    "level": "Class",
    "code": "C3211",
    "name": "Manufacture of jewellery and related articles",
    "parentCode": "C321",
    "keywords": "Manufacture of jewellery and related articles",
    "note": "This class includes: - production of worked pearls - production of precious and semi-precious stones in the worked state, including the working of industrial quality stones and synthetic or reconstructed precious or semi-precious stones - working of diamonds - manufacture of jewellery of precious metal or of base metals clad with precious metals, or precious or semi-precious stones, or of combinations of precious metal and precious or semi-precious stones or of other materials - manufacture of goldsmiths' articles of precious metals or of base metals clad with precious metals: * dinnerware, flatware, hollowware, toilet articles, office or desk articles, articles for religious use etc. - manufacture of technical or laboratory articles of precious metal (except instruments and parts thereof): crucibles, spatulas, electroplating anodes etc. - manufacture of precious metal watch bands, wristbands, watch straps and cigarette cases - manufacture of coins, including coins for use as legal tender, whether or not of precious metal"
  },
  {
    "level": "Class",
    "code": "C3212",
    "name": "Manufacture of imitation jewellery and related articles",
    "parentCode": "C321",
    "keywords": "Manufacture of imitation jewellery and related articles",
    "note": "This class includes: - manufacture of costume or imitation jewellery, not incorporating natural or cultured pearls, precious or semi-precious stones or (except as plating or as minor constituents) precious metal or metal clad with precious metal, e.g.: • rings, bracelets, necklaces, brooches, earrings and similar small objects articles of of personal adornment made from base metals plated with precious metals • imitation jewellery containing imitation stones such as imitation gems stones, imitation diamonds, and similar - manufacture of metal watch bands (except precious metal)"
  },
  {
    "level": "Group",
    "code": "C322",
    "name": "Manufacture of musical instruments",
    "parentCode": "C32",
    "keywords": "Manufacture of musical instruments",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C3220",
    "name": "Manufacture of musical instruments",
    "parentCode": "C322",
    "keywords": "Manufacture of musical instruments",
    "note": "This class includes: - manufacture of string musical instruments - manufacture of keyboard stringed instruments, including automatic pianos - manufacture of keyboard pipe organs, harmoniums and similar keyboard instruments with free metal reeds - manufacture of accordions and similar instruments, including mouth organs - manufacture of wind instruments - manufacture of percussion musical instruments, e.g. drums, xylophones, cymbals, castanets, maracas - manufacture of musical instruments, the sound of which is produced, or must be amplified, electronically, e.g. digital pianos, synthesisers - manufacture of musical boxes, fairground organs, calliopes etc. - manufacture of instrument parts and accessories e.g.: • metronomes, tuning forks, pitch pipes, cards, discs and rolls for automatic mechanical instruments etc."
  },
  {
    "level": "Group",
    "code": "C323",
    "name": "Manufacture of sports goods",
    "parentCode": "C32",
    "keywords": "Manufacture of sports goods",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C3230",
    "name": "Manufacture of sports goods",
    "parentCode": "C323",
    "keywords": "Manufacture of sports goods",
    "note": "This class includes the manufacture of sporting and athletic goods (except apparel and footwear). This class includes: - manufacture of articles and equipment for sports, outdoor and indoor games, of any material e.g.: • hard, soft and inflatable balls • rackets, bats and clubs • skis, bindings and poles • ski-boots, snowboard boots and cross-country ski footwear • sailboards and surfboards • requisites for sport fishing, including landing nets • decoy ‘birds’ and similar requisites for hunting or shooting • articles and equipment for mountain climbing • gloves , for use in sport, of leather or composition leather • basins for swimming and padding pools • ice skates, roller skates • bows and crossbows • gymnasium, fitness centre or athletic equipment"
  },
  {
    "level": "Group",
    "code": "C324",
    "name": "Manufacture of games and toys",
    "parentCode": "C32",
    "keywords": "Manufacture of games and toys",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C3240",
    "name": "Manufacture of games and toys",
    "parentCode": "C324",
    "keywords": "Manufacture of games and toys",
    "note": "This class includes the manufacture of dolls, toys and games (including electronic games), scale models and children's vehicles (except metal bicycles and tricycles). This class includes: - manufacture of dolls and doll garments, parts and accessories - manufacture of action figures - manufacture of toy animals - manufacture of toy musical instruments - manufacture of playing cards - manufacture of games and toys of paper or paperboard - manufacture of board games and similar games - manufacture of electronic board games - manufacture of reduced-size (\"scale\") models and similar recreational models, electrical trains, construction sets etc. - manufacture of gaming and gambling machines - manufacture of billiards and special tables for casino games etc. - manufacture of articles for funfair, table or parlour games - manufacture of wheeled toys designed to be ridden, including plastic bicycles and tricycles - manufacture of puzzles and similar articles - manufacture of drones for recreational purposes"
  },
  {
    "level": "Group",
    "code": "C325",
    "name": "Manufacture of medical and dental instruments and supplies",
    "parentCode": "C32",
    "keywords": "Manufacture of medical and dental instruments and supplies",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C3250",
    "name": "Manufacture of medical and dental instruments and supplies",
    "parentCode": "C325",
    "keywords": "Manufacture of medical and dental instruments and supplies",
    "note": "This class includes the manufacture of laboratory apparatus, surgical and medical instruments, surgical appliances and supplies, dental equipment and supplies, orthodontic goods, dentures and orthodontic appliances. Included is the manufacture of medical, dental and similar furniture, where the additional specific functions determine the purpose of the product, e.g. dentist's chairs with built-in hydraulic functions. This class includes: - manufacture of surgical drapes and sterile yarns and tissue - manufacture of individual protective masks e.g. FFP2, FFP3, surgical masks - manufacture of dental fillings and cements (except denture adhesives), dental wax and other dental plaster preparations - manufacture of bone reconstruction cements - manufacture of dental laboratory furnaces - manufacture of laboratory ultrasonic cleaning machinery - manufacture of medical, surgical or laboratory sterilisers - manufacture of laboratory type centrifuges - manufacture of medical, surgical, dental or veterinary furniture, e.g.: • operating tables • examination tables • hospital beds with mechanical fittings • dentists' chairs - manufacture of articles specially designed for use exclusively in implants in medical, surgical, dental or veterinary sciences, e.g. plates which remain permanently in the body, for example, to replace part or the whole of a bone - manufacture of syringes, needles, catheters, cannulae, etc. - manufacture of dental instruments and appliances - manufacture of artificial teeth and dental fittings - manufacture of orthopaedic and prosthetic devices - manufacture of glass eyes - manufacture of medical thermometers - manufacture of ophthalmic goods, eyeglasses, sunglasses, lenses ground to prescription, contact lenses, safety goggles - manufacture of orthopaedic shoes made to measure orthopaedic footwear and special insoles for correcting orthopaedic conditions"
  },
  {
    "level": "Group",
    "code": "C329",
    "name": "Other manufacturing n.e.c.",
    "parentCode": "C32",
    "keywords": "Other manufacturing n.e.c.",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C3290",
    "name": "Other manufacturing n.e.c.",
    "parentCode": "C329",
    "keywords": "Other manufacturing n.e.c.",
    "note": "This class includes: - manufacture of protective safety equipment * manufacture of fire-resistant and protective safety clothing * manufacture of linemen's safety belts and other belts for occupational use * manufacture of cork life preservers * manufacture of plastics hard hats and other personal safety equipment of plastics (e.g. athletic helmets) * manufacture of fire-fighting protection suits * manufacture of metal safety headgear and other metal personal safety devices * manufacture of ear and noise plugs (e.g. for swimming and noise protection) * manufacture of gas masks - manufacture of brooms and brushes, including brushes constituting parts of machines, hand-operated mechanical floor sweepers, mops and feather dusters, paint brushes, paint pads and rollers, squeegees and other brushes, brooms, mops etc. - manufacture of shoe and clothes brushes - manufacture of pens and pencils of all kinds whether or not mechanical - manufacture of pencil leads - manufacture of date, sealing or numbering stamps, hand-operated devices for printing, or embossing labels, hand printing sets, prepared typewriter ribbons and inked pads - manufacture of globes - manufacture of umbrellas, sun-umbrellas, walking sticks, seat-sticks - manufacture of buttons, press-fasteners, snap-fasteners, press-studs, slide fasteners - manufacture of electronic cigarettes - manufacture of cigarette lighters and other lighters - manufacture of articles of personal use: smoking pipes, scent sprays, vacuum flasks and other vacuum vessels for personal or household use, wigs, false beards, eyebrows - manufacture of miscellaneous articles: candles, tapers and the like; bouquets, wreaths and floral baskets; artificial flowers, fruit and foliage; jokes and novelties; hand sieves and hand riddles; tailors' dummies; burial caskets etc. - taxidermy activities"
  },
  {
    "level": "Division",
    "code": "C33",
    "name": "Repair, maintenance and installation of machinery and equipment",
    "parentCode": "C",
    "keywords": "Repair; maintenance and installation of machinery and equipment",
    "note": "This division includes the specialised repair of goods produced in the manufacturing sector with the aim to restore machinery, equipment and other products to working order. The provision of general or routine maintenance (i.e. servicing) on such products to ensure they work efficiently and to prevent breakdown and unnecessary repairs is included. This division does only include specialised repair and maintenance activities. A substantial amount of repair is also done by manufacturers of machinery, equipment and other goods, in which case the classification of units engaged in these repair and manufacturing activities is done according to the value-added principle which would often assign these combined activities to the manufacture of the good. The same principle is applied for combined trade and repair. The rebuilding or remanufacture of machinery and equipment is considered a manufacturing activity and included in other divisions of this section."
  },
  {
    "level": "Group",
    "code": "C331",
    "name": "Repair and maintenance of fabricated metal products, machinery and equipment",
    "parentCode": "C33",
    "keywords": "Repair and maintenance of fabricated metal products; machinery and equipment",
    "note": "This group includes the specialised repair of goods produced in the manufacturing sector with the aim to restore these metal products, machinery, equipment and other products to working order. The provision of general or routine maintenance (i.e. servicing) on such products to ensure they work efficiently and to prevent breakdown and unnecessary repairs is included."
  },
  {
    "level": "Class",
    "code": "C3311",
    "name": "Repair and maintenance of fabricated metal products",
    "parentCode": "C331",
    "keywords": "Repair and maintenance of fabricated metal products",
    "note": "This class includes the repair and maintenance of fabricated metal products of division 25. This class includes: - repair of metal tanks, reservoirs and containers - repair and maintenance for pipes and pipelines - mobile welding repair - repair of steel shipping drums - repair and maintenance of steam or other vapour generators - repair and maintenance of auxiliary plant for use with steam generators: • condensers, economisers, superheaters, steam collectors and accumulators - repair and maintenance of nuclear reactors, except isotope separators - repair and maintenance of parts for marine or power boilers - plate work repair of central heating boilers and radiators - repair and maintenance of fire arms and ordnance, including repair of sporting and recreational guns"
  },
  {
    "level": "Class",
    "code": "C3312",
    "name": "Repair and maintenance of machinery",
    "parentCode": "C331",
    "keywords": "Repair and maintenance of machinery",
    "note": "This class includes the repair and maintenance of industrial and commercial machinery and equipment, e.g. sharpening or installing machinery blades and saws; the provision of welding (e.g. automotive, general) repair services; the repair of agricultural and other heavy and industrial machinery and equipment (e.g. forklifts and other materials handling equipment, machine tools, commercial refrigeration equipment, construction equipment and mining machinery), including machinery and equipment of division 28. This class includes: - repair and maintenance of engines, except for motor vehicles, ships, boats and aircrafts - repair and maintenance of railway engines - repair and maintenance of pumps, compressors and related equipment - repair and maintenance of fluid power machinery - repair of valves - repair of gearing and driving elements - repair and maintenance of industrial process furnaces - repair and maintenance of lifting and handling equipment - repair and maintenance of industrial refrigeration equipment and air purifying equipment - repair and maintenance of commercial-type general-purpose machinery - repair of power-driven hand-tools - repair and maintenance of metal cutting and metal forming machine tools and accessories - repair and maintenance of other machine tools - repair and maintenance of agricultural tractors - repair and maintenance of agricultural machinery and forestry and logging machinery - repair and maintenance of metallurgy machinery - repair and maintenance of mining, construction, and oil and gas field machinery - repair and maintenance of food, beverage, and tobacco processing machinery - repair and maintenance of textile apparel, and leather production machinery - repair and maintenance of papermaking machinery - repair and maintenance of plastic and rubber machinery - repair and maintenance of other special-purpose machinery of division 28 - repair and maintenance of weighing equipment - repair and maintenance of vending machines - repair and maintenance of cash registers - repair and maintenance of photocopy machines - repair of calculators, electronic or not - repair of typewriters"
  },
  {
    "level": "Class",
    "code": "C3313",
    "name": "Repair and maintenance of electronic and optical equipment",
    "parentCode": "C331",
    "keywords": "Repair and maintenance of electronic and optical equipment",
    "note": "This class includes the repair and maintenance of goods produced in groups 2651, 2660 and 2670, except those that are considered household goods. This class includes: - repair and maintenance of the measuring, testing, navigating and control equipment of group 2651, e.g.: • aircraft engine instruments • automotive emissions testing equipment • meteorological instruments • physical, electrical and chemical properties testing and inspection equipment • surveying instruments • radiation detection and monitoring instruments - repair and maintenance of irradiation, electromedical and electrotherapeutic equipment of class 267, e.g.: • magnetic resonance imaging equipment • medical ultrasound equipment • pacemakers • hearing aids • electrocardiographs • electromedical endoscopic equipment • irradiation apparatus - repair and maintenance of optical instruments and equipment of class 268, if the use is mainly commercial, e.g.: • binoculars • microscopes (except electron and proton microscopes) • telescopes • prisms and lenses (except ophthalmic) • photographic equipment"
  },
  {
    "level": "Class",
    "code": "C3314",
    "name": "Repair and maintenance of electrical equipment",
    "parentCode": "C331",
    "keywords": "Repair and maintenance of electrical equipment",
    "note": "This class includes the repair and maintenance of goods of division 27 . This class includes: - repair and maintenance of power, distribution, and specialty transformers - repair and maintenance of electric motors, generators, and motor generator sets - repair and maintenance of switchgear and switchboard apparatus - repair and maintenance of relays and industrial controls - repair and maintenance of primary and storage batteries - repair and maintenance of electric lighting equipment - repair and maintenance of current-carrying wiring devices and noncurrent-carrying wiring devices for wiring electrical circuits"
  },
  {
    "level": "Class",
    "code": "C3315",
    "name": "Repair and maintenance of transport equipment, except motor vehicles",
    "parentCode": "C331",
    "keywords": "Repair and maintenance of transport equipment; except motor vehicles",
    "note": "This class includes the repair and maintenance of transport equipment of division 30, except motorcycles and bicycles. However, the factory rebuilding or overhaul of ships, locomotives, railroad cars and aircraft is classified in division 30. This class includes: - repair and routine maintenance of ships - repair and maintenance of pleasure boats - repair and maintenance of locomotives and railroad cars (except factory rebuilding or factory conversion) - repair and maintenance of aircraft (except factory conversion, factory overhaul, factory rebuilding) - repair and maintenance of aircraft engines - repair of animal drawn buggies and wagons"
  },
  {
    "level": "Class",
    "code": "C3319",
    "name": "Repair and maintenance of other equipment",
    "parentCode": "C331",
    "keywords": "Repair and maintenance of other equipment",
    "note": "This class includes the repair and maintenance of equipment not covered in other groups of this division. This class includes: - repair of fishing nets, including mending - repair or ropes, riggings, canvas and tarpaulins - repair of fertiliser and chemical storage bags - repair or reconditioning of wooden pallets, shipping drums or barrels, and similar items - repair of gaming and gambling machines - restoring of organs and other historical musical instruments - repair of hospital beds Includes also: -"
  },
  {
    "level": "Group",
    "code": "C332",
    "name": "Installation of industrial machinery and equipment",
    "parentCode": "C33",
    "keywords": "Installation of industrial machinery and equipment",
    "note": ""
  },
  {
    "level": "Class",
    "code": "C3320",
    "name": "Installation of industrial machinery and equipment",
    "parentCode": "C332",
    "keywords": "Installation of industrial machinery and equipment",
    "note": "This class includes the specialised installation of machinery. However, the installation of equipment that forms an integral part of buildings or similar structures, such as installation of escalators, electrical wiring, burglar alarm systems or air-conditioning systems, is classified as construction. This class includes: - installation of industrial machinery in industrial plant - installation and assembly of industrial process control equipment - installation of other industrial equipment, e.g.: • communications equipment • mainframe and similar computers • irradiation and electromedical equipment etc. - dismantling large-scale machinery and equipment - activities of millwrights - machine rigging - installation of bowling alley equipment - installation of warehouse machinery and equipment"
  },
  {
    "level": "Section",
    "code": "D",
    "name": "Electricity, gas, steam and air conditioning supply",
    "parentCode": "",
    "keywords": "Electricity; gas; steam and air conditioning supply",
    "note": "This section includes the generation, storage, control, distribution, trade and brokerage of electric power or of gaseous fuels for energy supply through a permanent network of lines, mains and pipes. Energy supply for industrial parks or residential buildings is included. This section therefore includes the operation of electricity and gas utilities."
  },
  {
    "level": "Division",
    "code": "D35",
    "name": "Electricity, gas, steam and air conditioning supply",
    "parentCode": "D",
    "keywords": "Electricity; gas; steam and air conditioning supply",
    "note": ""
  },
  {
    "level": "Group",
    "code": "D351",
    "name": "Electric power generation, transmission and distribution activities",
    "parentCode": "D35",
    "keywords": "Electric power generation; transmission and distribution activities",
    "note": "This group includes the generation of electric power, transmission from generating facilities to distribution centres and distribution to end users. Trade and storage of electric power are also included."
  },
  {
    "level": "Class",
    "code": "D3511",
    "name": "Electric power generation activities from non-renewable sources",
    "parentCode": "D351",
    "keywords": "Electric power generation activities from non-renewable sources",
    "note": "This class includes: - Operation of generation facilities that produce electricity from non-renewable sources, e.g. natural gas, coal, petroleum products, peat and other fossil fuels, and emission-free non-renewable sources such as nuclear."
  },
  {
    "level": "Class",
    "code": "D3512",
    "name": "Electric power generation activities from renewable sources",
    "parentCode": "D351",
    "keywords": "Electric power generation activities from renewable sources",
    "note": "This class includes: - operation of generation facilities that produce electricity from renewable sources, e.g. gaseous biofuels, hydropower, on-shore and off-shore wind, solar photovoltaic, and thermal, geothermal and tide, wave and ocean energy."
  },
  {
    "level": "Class",
    "code": "D3513",
    "name": "Electric power transmission and distribution activities",
    "parentCode": "D351",
    "keywords": "Electric power transmission and distribution activities",
    "note": "This class includes: - operation of transmission systems that convey the electricity from the generation facility to the distribution system, usually in the form of high-voltage - operation of distribution systems (e.g. lines, poles, meters, and wiring) which convey electric power received from the generation facility or the transmission system to the end user - rental and leasing electricity distribution networks - distribution of electricity into electricity mains/networks - sale of electricity to the user on own account - operation of electricity and transmission capacity exchanges for electric power, except via intermediaries - conversion of electrical energy into a form of energy which can be stored, the storing of such energy, and the subsequent reconversion of such energy into electrical energy, e.g. operation of pump storage facilities, compressed air storage facilities, or battery storage facilities - distributing stored electricity into electricity mains/networks"
  },
  {
    "level": "Group",
    "code": "D352",
    "name": "Manufacture of gas; distribution of gaseous fuels through mains",
    "parentCode": "D35",
    "keywords": "Manufacture of gas; distribution of gaseous fuels through mains",
    "note": ""
  },
  {
    "level": "Class",
    "code": "D3520",
    "name": "Manufacture of gas; distribution of gaseous fuels through mains",
    "parentCode": "D352",
    "keywords": "Manufacture of gas; distribution of gaseous fuels through mains",
    "note": "This class includes the manufacture of gas, the storage and the distribution of natural or synthetic gas to the user through a system of mains. - production of gas for the purpose of gas supply by carbonation of coal, from by-products of agriculture or from waste - - gas storage and gas storage service (e.g. sale of storage capacity for natural gas) - manufacture of gaseous fuels with a specified calorific value, by purification, blending and other processes from gases of various types including natural gas - transportation, distribution and supply of gaseous fuels of all kinds through a system of mains - sale of gas to the user through mains - commodity and transport capacity exchanges for gaseous fuels"
  },
  {
    "level": "Group",
    "code": "D353",
    "name": "Steam and air conditioning supply",
    "parentCode": "D35",
    "keywords": "Steam and air conditioning supply",
    "note": ""
  },
  {
    "level": "Class",
    "code": "D3530",
    "name": "Steam and air conditioning supply",
    "parentCode": "D353",
    "keywords": "Steam and air conditioning supply",
    "note": "This class includes: - production, collection and distribution of steam and hot water for heating, power and other purposes - production and distribution of cooled air, e.g. for air conditioning supply - production and distribution of chilled water for cooling purposes - production of ice from natural water"
  },
  {
    "level": "Group",
    "code": "D354",
    "name": "Activities of brokers and agents for electric power and natural gas",
    "parentCode": "D35",
    "keywords": "Activities of brokers and agents for electric power and natural gas",
    "note": ""
  },
  {
    "level": "Class",
    "code": "D3540",
    "name": "Activities of brokers and agents for electric power and natural gas",
    "parentCode": "D354",
    "keywords": "Activities of brokers and agents for electric power and natural gas",
    "note": "This class includes: - activities of brokers or agents who arrange the sale of electricity via power distribution systems operated by others - activities of gas brokers or agentswho arrange the sale of gaseous fuels via gas distribution systems operated by others - activities of brokers or agents for commodity and distribution capacity exchanges for gaseous fuels - activities of brokers or agents for operation of electricity, distribution and transmission capacity exchanges for electric power"
  },
  {
    "level": "Section",
    "code": "E",
    "name": "Water supply; sewerage, waste management and remediation activities",
    "parentCode": "",
    "keywords": "Water supply; sewerage; waste management and remediation activities",
    "note": "This section includes activities related to the management, e.g. collection, pretreatment, recovery and disposal, of various forms of waste, such as solid or non-solid industrial or household waste and its organisation. The output of the waste or sewage treatment process can either be disposed of or become an input into other production processes. Secondary raw materials are materials and products which can be used as raw materials by simple re-use, or via recycling and recovery of waste. Activities of water supply are also grouped in this section, since they are often carried out in connection with, or by units also engaged in, the treatment of sewage. The activities also include remediation of contaminated buildings and sites, soil, surface and ground water (e.g. oceans, mangroves, seas) etc. Units that usually take over their clients waste procedures and become the customer of the waste hauler, and then in turn bill their clients for waste service must be classified in Division 38 because although these units do not render the corresponding services themselves, they are responsible for their fulfilment. This activity has to be regarded as complete outsourcing of a service."
  },
  {
    "level": "Division",
    "code": "E36",
    "name": "Water collection, treatment and supply",
    "parentCode": "E",
    "keywords": "Water collection; treatment and supply",
    "note": "This division includes the collection, treatment and distribution of water to end-users’. Collection of water from various sources, as well as distribution by various means is included."
  },
  {
    "level": "Group",
    "code": "E360",
    "name": "Water collection, treatment and supply",
    "parentCode": "E36",
    "keywords": "Water collection; treatment and supply",
    "note": ""
  },
  {
    "level": "Class",
    "code": "E3600",
    "name": "Water collection, treatment and supply",
    "parentCode": "E360",
    "keywords": "Water collection; treatment and supply",
    "note": "This class includes: - abstraction of water from rivers, lakes and ground water - treatment of water for the water supply - desalting of sea or ground water to produce water as the principal product of interest - distribution of water through mains, by trucks or other means - rainwater harvesting"
  },
  {
    "level": "Division",
    "code": "E37",
    "name": "Sewerage",
    "parentCode": "E",
    "keywords": "Sewerage",
    "note": "This division includes the operation of sewer systems or sewage treatment facilities, which collect, treat and discharge sewage into water bodies or operate surface impoundment."
  },
  {
    "level": "Group",
    "code": "E370",
    "name": "Sewerage",
    "parentCode": "E37",
    "keywords": "Sewerage",
    "note": ""
  },
  {
    "level": "Class",
    "code": "E3700",
    "name": "Sewerage",
    "parentCode": "E370",
    "keywords": "Sewerage",
    "note": "This class includes: - operation of wastewater treatment facilities, for the reuse of e.g. agricultural, industrial, road cleaning or collected rain water, or for artificial recharge or augmentation of groundwater bodies - collection and transportation of wastewater from users, e.g. households or industrial units - collection and transportation of rain water - treatment of wastewater - maintenance and cleaning of sewers and drains, including sewer rodding"
  },
  {
    "level": "Division",
    "code": "E38",
    "name": "Waste collection, treatment and disposal, and recovery activities",
    "parentCode": "E",
    "keywords": "Waste collection; treatment and disposal; and recovery activities",
    "note": "This division includes the collection, pre-treatment for recovery or disposal, recovery and disposal of waste materials and its organization. Collection of waste, which solely supports the subsequent recovery or disposal of the collected waste by the same unit, is to be regarded as waste recovery or as a disposal activity."
  },
  {
    "level": "Group",
    "code": "E381",
    "name": "Waste collection activities",
    "parentCode": "E38",
    "keywords": "Waste collection activities",
    "note": "This group includes the collection of waste from households and businesses, e.g. by means of bins, containers. It includes collection of non-hazardous and hazardous waste e.g. diapers, used batteries, demolition waste, waste oil from households and ships."
  },
  {
    "level": "Class",
    "code": "E3811",
    "name": "Collection of non-hazardous waste",
    "parentCode": "E381",
    "keywords": "Collection of non-hazardous waste",
    "note": "This class includes: - collection of non-hazardous solid waste (i.e. garbage) within a local area such as collection of wated from households and businesses, by means of bins, containers etc., which may contain mixed recoverable materials - collection of recyclable materials (separated or not) - collection of non-hazardous waste of animal or vegetal origin - collection of used cooking oils and fats - collection of refuse in public places - collection of yard waste"
  },
  {
    "level": "Class",
    "code": "E3812",
    "name": "Collection of hazardous waste",
    "parentCode": "E381",
    "keywords": "Collection of hazardous waste",
    "note": "This class includes the collection of hazardous waste, e.g. explosive, oxidizing, flammable, toxic, irritant, carcinogenic, corrosive, infectious and other substances and preparations harmful for human health and environment. The activities may also include identification, treatment, packaging and labelling of waste for the purposes of transport. This class includes: - collection of hazardous waste, such as: • used oil from ships or garages, • bio-hazardous waste • used batteries • hazardous waste of animal origin • nuclear waste • collection of expired pharmaceuticals"
  },
  {
    "level": "Group",
    "code": "E382",
    "name": "Waste treatment and disposal",
    "parentCode": "E38",
    "keywords": "Waste treatment and disposal",
    "note": "This group includes the disposal and treatment prior to disposal of various forms of waste by different means, such as waste treatment of organic waste with the aim of disposal; treatment and disposal of toxic live or dead animals and other contaminated waste; treatment and disposal of transition radioactive waste from hospitals, etc.; waste disposal without recovery dumping of refuse on land or in water; burial or ploughing-under of refuse; disposal of used goods such as refrigerators to eliminate harmful waste; disposal of waste by incineration or combustion. Included is also the generation of electricity resulting from waste incineration processes. This group excludes: - treatment and disposal of wastewater, see 3700 - waste recovery, see 3830"
  },
  {
    "level": "Class",
    "code": "E3821",
    "name": "Treatment and disposal of non-hazardous waste",
    "parentCode": "E382",
    "keywords": "Treatment and disposal of non-hazardous waste",
    "note": "This class includes the disposal, treatment prior to disposal and other treatment of solid or non-solid non-hazardous waste. This class includes: - operation of landfills for the disposal of non-hazardous waste - disposal of non-hazardous waste by combustion or incineration or other methods, with or without the resulting production of electricity or steam, substitute fuels, biogas, ashes or other by-products for further use etc. - treatment of organic waste for disposal - treatment of organic waste for landfilling or permanent storage - production of compost from organic waste"
  },
  {
    "level": "Class",
    "code": "E3822",
    "name": "Treatment and disposal of hazardous waste",
    "parentCode": "E382",
    "keywords": "Treatment and disposal of hazardous waste",
    "note": "This class includes the disposal and treatment prior to disposal of solid or non-solid hazardous waste, including waste that is explosive, oxidizing, flammable, toxic, irritant, carcinogenic, corrosive or infectious and other substances and preparations harmful for human health and environment. This class includes: - operation of facilities for treatment of hazardous waste - treatment and disposal of toxic live or dead animals and other contaminated waste - incineration of hazardous waste - disposal of used goods such as refrigerators to eliminate harmful waste - treatment, disposal and storage of radioactive nuclear waste including: - treatment and disposal of transition radioactive waste, i.e. decaying within the period of transport, from hospitals - encapsulation, preparation and other treatment of nuclear waste for storage"
  },
  {
    "level": "Group",
    "code": "E383",
    "name": "Materials and other waste recovery",
    "parentCode": "E38",
    "keywords": "Materials and other waste recovery",
    "note": ""
  },
  {
    "level": "Class",
    "code": "E3830",
    "name": "Materials and other waste recovery",
    "parentCode": "E383",
    "keywords": "Materials and other waste recovery",
    "note": "This class includes: - processing of metal and non-metal waste and scrap and other articles into secondary raw materials, usually involving a mechanical or chemical transformation process - recovery of materials from waste streams in the form of: • separating and sorting recoverable materials from non-hazardous waste streams (i.e. garbage) • separating and sorting of commingled recoverable materials, such as paper, plastics, used beverage cans and metals, into distinct categories Examples of the mechanical or chemical transformation processes that are undertaken are: - mechanical crushing of metal waste such as used cars, washing machines, bikes etc. with subsequent sorting and separation - dismantling of automobiles, computers, televisions and other equipment for materials recovery - mechanical reduction of large iron pieces such as railway wagons - shredding of metal waste, end-of-life vehicles etc. - other methods of mechanical treatment as cutting, pressing to reduce the volume - ship-breaking - reclaiming metals out of photographic waste, e.g. fixer solution or photographic films and paper - reclaiming of rubber such as used tires to produce secondary raw material - sorting and mechanical processing (e.g. cleaning, grinding) of plastics to produce secondary raw material - processing (cleaning, melting, grinding) of plastic or rubber waste to granulates - processing (aging, cleaning, sorting) of incineration bottom ash into secondary raw materials (metals, aggregates) - crushing, cleaning and sorting of glass - crushing, cleaning and sorting of other waste such as demolition waste to obtain secondary raw material - recovery of waste oil, processing of used cooking oils and fats into secondary raw materials - processing of other food, beverage and tobacco waste and residual substances into secondary raw materials"
  },
  {
    "level": "Division",
    "code": "E39",
    "name": "Remediation and other waste management service activities",
    "parentCode": "E",
    "keywords": "Remediation and other waste management service activities",
    "note": "This division includes the provision of remediation services, e.g. the cleaning up of contaminated buildings and sites, soil, surface or ground water."
  },
  {
    "level": "Group",
    "code": "E390",
    "name": "Remediation and other waste management service activities",
    "parentCode": "E39",
    "keywords": "Remediation and other waste management service activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "E3900",
    "name": "Remediation and other waste management service activities",
    "parentCode": "E390",
    "keywords": "Remediation and other waste management service activities",
    "note": "This class includes: - decontamination of soils and groundwater at the place of pollution, either in situ or ex situ, using e.g. mechanical, chemical or biological methods - decontamination of industrial plants or sites, including nuclear plants and sites - decontamination and cleaning up of surface water following accidental pollution, e.g. through collection of pollutants or through application of chemicals - cleaning up oil spills and other pollutions on land, in surface water, in ocean and seas, including coastal areas - asbestos, lead paint, and other toxic material abatement - clearing of landmines , including detonation at the site - other specialized pollution-control activities - carbon capture and storage activities - Remediation of mining sites"
  },
  {
    "level": "Section",
    "code": "F",
    "name": "Construction",
    "parentCode": "",
    "keywords": "Construction",
    "note": "This section includes general construction and specialised construction activities for buildings and civil engineering works. It includes new work, repair, additions and alterations, the erection of prefabricated buildings or structures on the site as well as construction of a temporary nature. General construction is the construction of entire buildings for e.g., homes, offices, stores , as well as utility buildings or farm buildings etc.It also includes the construction of civil engineering works such as motorways, streets, bridges, tunnels, railways, airfields, harbours and other water projects, irrigation systems, sewerage systems, industrial facilities, pipelines and electric lines, sports facilities etc. This work can be carried out on own account or on a fee or contract basis, including intermediation service activities for construction. Portions of the work and sometimes even the whole practical work can be subcontracted out. A main contractor that carries the overall responsibility for a construction project is classified here. Also included is the repair of buildings and engineering works. Maintenance, repair and installation of equipment that forms an integral part of buildings , e.g. escalators or air-conditioning systems, is classified as construction in section F, if carried out at the construction site. This section includes the complete construction of buildings (division 41), the complete construction of civil engineering works (division 42), as well as specialised construction activities, if carried out only as a part of the construction process (division 43). The rental of construction equipment with operator is classified with the specific construction activity carried out with this equipment."
  },
  {
    "level": "Division",
    "code": "F41",
    "name": "Construction of residential and non-residential buildings",
    "parentCode": "F",
    "keywords": "Construction of residential and non-residential buildings",
    "note": "This division includes general construction of buildings of all types and sizes. It includes construction, repair, additions and alterations as well as the erection of pre-fabricated buildings on site and those of a temporary nature. Included is the construction of entire buildings for e.g., homes, offices, stores as well as utility buildings or farm buildings."
  },
  {
    "level": "Group",
    "code": "F410",
    "name": "Construction of residential and non-residential buildings",
    "parentCode": "F41",
    "keywords": "Construction of residential and non-residential buildings",
    "note": ""
  },
  {
    "level": "Class",
    "code": "F4100",
    "name": "Construction of residential and non-residential buildings",
    "parentCode": "F410",
    "keywords": "Construction of residential and non-residential buildings",
    "note": "This class includes the construction of complete residential or non-residential buildings, as well as of additions and alterations. Outsourcing parts or the whole construction process is possible. If only specialised parts of the construction process are carried out, the activity is classified in division 43. This class includes: - construction of all types of buildings: • buildings for industrial production, e.g. factories and workshops • hospital, school and office buildings • hotel, store, shopping mall and restaurant buildings • airport buildings • indoor sports facilities • parking garages, including underground parking garages • warehouse buildings • religious buildings - on-site construction of prefabricated buildings that are manufactured by a different unit"
  },
  {
    "level": "Division",
    "code": "F42",
    "name": "Civil engineering",
    "parentCode": "F",
    "keywords": "Civil engineering",
    "note": "This division includes general construction for civil engineering objects. It includes new work, repair, additions and alterations, the erection of pre-fabricated objects on site and also those of a temporary nature. Included is the construction of heavy constructions such as motorways, roads, power plants, bridges, tunnels, railways, airfields, harbours and other water projects, irrigation systems, sewerage systems, industrial facilities, pipelines and electric lines, , outdoor sports facilities, etc. This work can be carried out on own account or on a fee or contract basis. Portions of the work and sometimes even the whole practical work can be subcontracted out."
  },
  {
    "level": "Group",
    "code": "F421",
    "name": "Construction of roads and railways",
    "parentCode": "F42",
    "keywords": "Construction of roads and railways",
    "note": ""
  },
  {
    "level": "Class",
    "code": "F4210",
    "name": "Construction of roads and railways",
    "parentCode": "F421",
    "keywords": "Construction of roads and railways",
    "note": "This class includes: - construction of motorways, streets, roads, other vehicular and pedestrian ways - surface work on streets, roads, highways, bridges or tunnels: * asphalt paving of roads - construction of bridges for elevated motorways and railways - construction of tunnels, including those for motorways and railways - construction of railways, underground railways and subways - construction of electricity overhead lines and conductor rails for railways - construction of airfield runways"
  },
  {
    "level": "Group",
    "code": "F422",
    "name": "Construction of utility projects",
    "parentCode": "F42",
    "keywords": "Construction of utility projects",
    "note": ""
  },
  {
    "level": "Class",
    "code": "F4220",
    "name": "Construction of utility projects",
    "parentCode": "F422",
    "keywords": "Construction of utility projects",
    "note": "This class includes the construction of distribution lines and related buildings and structures that are integral part of these systems. This class includes: - construction of civil engineering constructions for: * long-distance pipelines, communication and power lines * urban pipelines, urban communication and power lines; ancillary urban works * water main and line construction * irrigation systems (canals) * reservoirs - construction of: * sewer systems, including repair * sewage disposal plants * pumping stations * power plants"
  },
  {
    "level": "Group",
    "code": "F429",
    "name": "Construction of other civil engineering projects",
    "parentCode": "F42",
    "keywords": "Construction of other civil engineering projects",
    "note": ""
  },
  {
    "level": "Class",
    "code": "F4290",
    "name": "Construction of other civil engineering projects",
    "parentCode": "F429",
    "keywords": "Construction of other civil engineering projects",
    "note": "This class includes: - construction of industrial facilities, except buildings, such as: * mining facilities, e.g. shafts, towers and tunnels * refineries * chemical plants * grain storage systems - construction of: * waterways, harbour and river works, marinas * hydromechanical structures, e.g. locks, lifts, sluices and slipways * dams and dykes - dredging of waterways, e.g. harbour basins and rivers - construction work, other than buildings, such as: * outdoor sports facilities - construction of playgrounds"
  },
  {
    "level": "Division",
    "code": "F43",
    "name": "Specialized construction activities",
    "parentCode": "F",
    "keywords": "Specialized construction activities",
    "note": "This division includes specialised activities (special trades) in the construction of buildings and civil engineering objects or preparation of same. These activities are usually specialised in one aspect common to different structures, requiring specialised skills or equipment. Specialised construction works are generally performed by subcontractors on behalf of a contractor (whose activities fall under Division 41 or 42, see e.g. 4100 and 4290). Repair is usually performed without subcontracting. Included is the installation of all types of utilities that make the construction function as such. These activities are usually performed at the site of the construction, although parts of the job may be carried out off site. This division includes electrical, plumbing and other offshore construction installation on floating platforms. The rental of equipment with operator is classified under the associated construction activity."
  },
  {
    "level": "Group",
    "code": "F431",
    "name": "Demolition and site preparation",
    "parentCode": "F43",
    "keywords": "Demolition and site preparation",
    "note": "This group includes activities of preparing a site for subsequent construction activities, including the removal of previously existing structures."
  },
  {
    "level": "Class",
    "code": "F4311",
    "name": "Demolition",
    "parentCode": "F431",
    "keywords": "Demolition",
    "note": "This class includes: - demolition, dismantling or wrecking of buildings and other structures"
  },
  {
    "level": "Class",
    "code": "F4312",
    "name": "Site preparation",
    "parentCode": "F431",
    "keywords": "Site preparation",
    "note": "This class includes the preparation of sites for subsequent construction activities. This class includes: - clearing of building sites - earth moving: excavation, landfill, levelling and grading of construction sites, trench digging, rock removal, blasting, etc. - drilling, boring and core sampling for construction, geophysical, geological or similar purposes"
  },
  {
    "level": "Group",
    "code": "F432",
    "name": "Electrical, plumbing and other construction installation activities",
    "parentCode": "F43",
    "keywords": "Electrical; plumbing and other construction installation activities",
    "note": "This group includes installation activities that support the functioning of a building as such, including installation of electrical systems, plumbing (water, gas and sewage systems), heat and air-conditioning systems, elevators etc."
  },
  {
    "level": "Class",
    "code": "F4321",
    "name": "Electrical installation",
    "parentCode": "F432",
    "keywords": "Electrical installation",
    "note": "This class includes the installation, repair and maintenance of electrical systems in all types of buildings and civil engineering structures of electrical systems. This class includes: - installation of: • electrical wiring and fittings • telecommunications wiring • computer network and cable television wiring, including fibre optic • satellite dishes • lighting systems • fire alarms • burglar alarm systems • street lighting and electrical signals • airport runway lighting • photovoltaic systems on buildings • power storage systems - installation of electrical chargers, for electrical vehicles"
  },
  {
    "level": "Class",
    "code": "F4322",
    "name": "Plumbing, heat and air-conditioning installation",
    "parentCode": "F432",
    "keywords": "Plumbing; heat and air-conditioning installation",
    "note": "This class includes the installation, repair and maintenance of plumbing, heating and air-conditioning systems, including additions and alterations. This class includes: - installation, maintenance and repair of: • heating systems , e.g. heat pumps and solar thermal collectors • furnaces, cooling towers • plumbing and sanitary equipment • ventilation and air-conditioning equipment and ducts • gas fittings • steam piping • sprinkler systems, e.g. fire and lawn sprinkler systems - construction or installation of masonry heater stoves - duct work installation"
  },
  {
    "level": "Class",
    "code": "F4329",
    "name": "Other construction installation",
    "parentCode": "F432",
    "keywords": "Other construction installation",
    "note": "This class includes the installation of equipment other than electrical, plumbing, heating and air-conditioning systems or industrial machinery in buildings and civil engineering structures, including maintenance and repair. This class includes: - installation in buildings or other construction projects of: * elevators, escalators * automated and revolving doors * lightning conductors * vacuum cleaning systems * thermal, sound or vibration insulation"
  },
  {
    "level": "Group",
    "code": "F433",
    "name": "Building completion and finishing",
    "parentCode": "F43",
    "keywords": "Building completion and finishing",
    "note": ""
  },
  {
    "level": "Class",
    "code": "F4330",
    "name": "Building completion and finishing",
    "parentCode": "F433",
    "keywords": "Building completion and finishing",
    "note": "This class includes: - application in buildings or other construction projects of interior and exterior plaster or stucco, including related lathing materials - installation of doors (except automated and revolving), windows, door and window frames, of wood or other materials - installation of fitted kitchens, staircases, shop fittings and the like - installation of furniture - interior completion such as ceilings, wooden wall coverings, movable partitions, etc. - laying, tiling, hanging or fitting in buildings or other construction projects of: * ceramic, concrete or cut stone wall or floor tiles, ceramic stove fitting * parquet and other wooden floor coverings * carpets and linoleum floor coverings, including of rubber or plastic * terrazzo, marble, granite or slate floor or wall coverings * wallpaper - interior and exterior painting of buildings - painting of civil engineering structures - installation of glass, mirrors, etc. - other building completion work n.e.c."
  },
  {
    "level": "Group",
    "code": "F434",
    "name": "Intermediation service activities for specialized construction services",
    "parentCode": "F43",
    "keywords": "Intermediation service activities for specialized construction services",
    "note": ""
  },
  {
    "level": "Class",
    "code": "F4340",
    "name": "Intermediation service activities for specialized construction services",
    "parentCode": "F434",
    "keywords": "Intermediation service activities for specialized construction services",
    "note": "This class includes the intermediation for specialised construction services by bringing clients and service providers together for a fee or commission, without the intermediary providing the specialised construction services that are intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face, phone, post, etc.). The fee or commission can be received from either the client or the provider of the specialised construction services. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising."
  },
  {
    "level": "Group",
    "code": "F439",
    "name": "Other specialized construction activities",
    "parentCode": "F43",
    "keywords": "Other specialized construction activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "F4390",
    "name": "Other specialized construction activities",
    "parentCode": "F439",
    "keywords": "Other specialized construction activities",
    "note": "This class includes: - construction activities specializing in one aspect common to different kind of structures, requiring specialized skill or equipment: * construction of foundations, including pile driving * damp proofing and water proofing works * de-humidification of buildings * shaft sinking * erection of non-self-manufactured steel elements * reinforcement steel bending activities, at the construction site * bricklaying, block laying, stone setting and other masonry works * roofing activities such as laying of roof covering- * scaffolds and work platform erecting and dismantling * installation of crash barriers, traffic signs etc. * road painting and other marking * erection of chimneys and industrial ovens * work with specialist access requirements necessitating climbing skills and the use of related equipment, e.g. working at height on tall structures - subsurface work - erection of noise protection walls, e.g. along roads - installation of street furniture - construction of outdoor swimming pools - renting of cranes with operator"
  },
  {
    "level": "Section",
    "code": "G",
    "name": "Wholesale and retail trade",
    "parentCode": "",
    "keywords": "Wholesale and retail trade",
    "note": "This section includes wholesale and retail sale (i.e. sale without transformation) of any type of physical goods, and rendering services incidental to the sale of merchandise. Goods are physical, produced objects for which a demand exists, over which ownership rights can be established and whose ownership can be transferred from one unit to another by engaging in transactions on markets. Wholesaling and retailing are the final steps in the distribution of merchandise. For this purpose, ancillary activities () are carried out, which is considered to include a number of usual operations (or manipulations) associated with trade, without transforming the goods. These operations (or manipulations) include, for example, sorting, grading and assembling of goods, mixing of goods (e.g. sand), bottling (with or without preceding bottle cleaning), packaging, breaking bulk and repacking for distribution in smaller lots, storage (whether or not frozen or chilled). If not carried out as usual operations (or manipulations) associated with trade, the mentioned activities can be carried out as principal, secondary or ancillary activities in other sections of ISIC. Wholesale is the resale of new and used goods to retailers, business-to-business trade, such as to industrial, commercial, institutional or professional users, or resale to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchandise to, such persons or companies. The principal types of businesses included are merchant wholesalers, i.e. wholesalers who take title to the goods they sell, such as wholesale merchants or jobbers, industrial distributors, exporters, importers, and cooperative buying associations, sales branches and sales offices (but not retail stores) that are maintained by manufacturing or mining units apart from their plants or mines for the purpose of marketing their products and that do not merely take orders to be filled by direct shipments from the plants or mines. Also included are intermediation service activities, such as the activities of merchandise and commodity brokers, commission merchants and agents and assemblers, cooperative associations primarily engaged in the marketing of farm products. If the wholesaler does not assume ownership of the goods he trades, he must be classified in group 461. If the wholesaler assumes ownership of the goods, even if he is acting on behalf of a third party, he must be classified in groups 462-469. Wholesalers frequently physically assemble, sort and grade goods in large lots, break bulk, repack and redistribute in smaller lots, for example pharmaceuticals; store, refrigerate, deliver and install goods, engage in sales promotion for their customers and label design. Retailing is the resale of new and used goods to the general public for personal or household consumption or utilisation, whatever the channel, in shops, department stores, stalls, mail-order houses, door-to-door sales persons, hawkers, consumer cooperatives, auction houses etc. It includes the sale of goods via showroom (where the exposed goods can be bought), via ephemeral points of sale (e.g. pop up stores) as well as in automated retail shops. Most retailers take title to the goods they sell, but some act as agents for a principal and sell either on consignment or on a commission basis. Retailing via mail order or internet is classified according to the type of goods sold. The distinction between wholesale and retail is not based on the quantity of goods sold, as wholesale sales may be made on a unit basis, just as retail sales may be made on a bulk basis. Instead, the primary distinction between wholesale and retail is the type of customer. Wholesale usually involves business as customers, and retail trade usually sell to individual customers. If a trader sells to both business and household customers without distinction, and it is practically impossible to distinguish the majority type of customers, then it is recommended to treat the seller as a retailer."
  },
  {
    "level": "Division",
    "code": "G46",
    "name": "Wholesale trade",
    "parentCode": "G",
    "keywords": "Wholesale trade",
    "note": "This division includes wholesale trade of physical goods on own account or on a fee or contract basis (commission trade) related to domestic wholesale trade as well as international wholesale trade (import/export), including on the Internet. Wholesale trade on own account means owning the goods traded until the ownership is transferred to the buyer. In the case of transit trade, the goods are commissioned by a buyer, but the agent owns the goods while they are in transit, however both cases are classified the same way (groups 462-469). This division includes wholesale on a fee or contract basis (group 461), specialised wholesale (groups 462-467) and non- specialised wholesale (group 469); class 4630 is an exception as it includes non-specialised wholesale of food, beverages and tobacco."
  },
  {
    "level": "Group",
    "code": "G461",
    "name": "Wholesale on a fee or contract basis",
    "parentCode": "G46",
    "keywords": "Wholesale on a fee or contract basis",
    "note": ""
  },
  {
    "level": "Class",
    "code": "G4610",
    "name": "Wholesale on a fee or contract basis",
    "parentCode": "G461",
    "keywords": "Wholesale on a fee or contract basis",
    "note": "This class includes: intermediation service activities, i.e. of facilitation of transactions between sellers and buyers for the ordering of goods for a fee or commission without supplying or taking ownership of the goods and services intermediated Including: - activities of commission agents, commodity brokers and other wholesalers trading on the account of others without owning the intermediated goods at any time - activities of bringing sellers and buyers together - activities of undertaking commercial transactions on the account of a principal, including on the Internet."
  },
  {
    "level": "Group",
    "code": "G462",
    "name": "Wholesale of agricultural raw materials and live animals",
    "parentCode": "G46",
    "keywords": "Wholesale of agricultural raw materials and live animals",
    "note": ""
  },
  {
    "level": "Class",
    "code": "G4620",
    "name": "Wholesale of agricultural raw materials and live animals",
    "parentCode": "G462",
    "keywords": "Wholesale of agricultural raw materials and live animals",
    "note": "This class includes: - wholesale of grains and seeds and seeds for planting - wholesale of oleaginous fruits - wholesale of flowers and plants - wholesale of unmanufactured tobacco - wholesale of live animals including pets - wholesale of hides and skins - wholesale of leather - wholesale of agricultural material, waste, residues and by-products used for animal feed"
  },
  {
    "level": "Group",
    "code": "G463",
    "name": "Wholesale of food, beverages and tobacco",
    "parentCode": "G46",
    "keywords": "Wholesale of food; beverages and tobacco",
    "note": ""
  },
  {
    "level": "Class",
    "code": "G4630",
    "name": "Wholesale of food, beverages and tobacco",
    "parentCode": "G463",
    "keywords": "Wholesale of food; beverages and tobacco",
    "note": "This class includes: - wholesale of fruit and vegetables - wholesale of dairy products - wholesale of eggs and egg products - wholesale of edible oils and fats of animal or vegetable origin - wholesale of meat and meat products - wholesale of fishery products - wholesale of sugar, chocolate and sugar confectionery - wholesale of bakery products - wholesale of beverages - wholesale of coffee, tea, cocoa and spices - wholesale of tobacco and smoking products and accessories, including electronic cigarettes (vapes), lighters, pipes, cigarette rolling equipment"
  },
  {
    "level": "Group",
    "code": "G464",
    "name": "Wholesale of household goods",
    "parentCode": "G46",
    "keywords": "Wholesale of household goods",
    "note": "This group includes the wholesale of household goods, including textiles and furniture"
  },
  {
    "level": "Class",
    "code": "G4641",
    "name": "Wholesale of textiles, clothing and footwear",
    "parentCode": "G464",
    "keywords": "Wholesale of textiles; clothing and footwear",
    "note": "This class includes: - wholesale of yarn - wholesale of fabrics - wholesale of household linen etc. - wholesale of haberdashery: needles, sewing thread etc. - wholesale of clothing, including sports clothes - wholesale of clothing accessories such as gloves, ties and braces - wholesale of footwear - wholesale of fur articles - wholesale of umbrellas - wholesale of parasols, tarpaulins, sails, parachutes, etc"
  },
  {
    "level": "Class",
    "code": "G4642",
    "name": "Wholesale of household, office and shop furniture, carpets and lighting equipment",
    "parentCode": "G464",
    "keywords": "Wholesale of household; office and shop furniture; carpets and lighting equipment",
    "note": "This class includes: - wholesale of furniture - wholesale of carpets - wholesale of lighting equipment - wholesale of mattress and box springs"
  },
  {
    "level": "Class",
    "code": "G4649",
    "name": "Wholesale of other household goods",
    "parentCode": "G464",
    "keywords": "Wholesale of other household goods",
    "note": "This class includes: - wholesale of household appliances - wholesale of consumer electronics: • radio and TV equipment • CD and DVD players and recorders • stereo equipment • video game consoles - wholesale of cutlery - wholesale of china and glassware - wholesale of woodenware, wickerwork and corkware etc. - wholesale of pharmaceutical and medical goods - wholesale of perfumeries, cosmetics and soaps - wholesale of bicycles, e-bikes, monowheels, hoverboards, kick scooters, segways, including related parts and accessories - wholesale of stationery, books, magazines and newspapers - wholesale of photographic and optical goods (e.g. sunglasses, binoculars, magnifying glasses) - wholesale of recorded audio and video tapes, CDs, DVDs - wholesale of leather goods and travel accessories - wholesale of watches, clocks and jewellery - wholesale of musical instruments, games and toys, sports goods - -wholesale of recorded media - wholesale of baby equipment, such as baby carriages, pushchairs, baby walkers, baby carriers, baby car seats, etc. - wholesale of medals and sports cups"
  },
  {
    "level": "Group",
    "code": "G465",
    "name": "Wholesale of machinery, equipment and supplies",
    "parentCode": "G46",
    "keywords": "Wholesale of machinery; equipment and supplies",
    "note": "This group includes the wholesale of computers, telecommunications equipment, specialized machinery for all kinds of industries and general-purpose machinery and parts thereof."
  },
  {
    "level": "Class",
    "code": "G4651",
    "name": "Wholesale of computers, computer peripheral equipment and software",
    "parentCode": "G465",
    "keywords": "Wholesale of computers; computer peripheral equipment and software",
    "note": "This class includes: - wholesale of computers and computer peripheral equipment (e.g. printers, photocopiers, interactive whiteboards, videoconferencing equipment, etc.) - wholesale of non-customised software, including video games, provided on physical media with right to perpetual use"
  },
  {
    "level": "Class",
    "code": "G4652",
    "name": "Wholesale of electronic and telecommunications equipment and parts",
    "parentCode": "G465",
    "keywords": "Wholesale of electronic and telecommunications equipment and parts",
    "note": "This class includes: —wholesale of electronic valves and tubes —wholesale of semiconductor devices —wholesale of microchips and integrated circuits —wholesale of printed circuits —wholesale of blank audio and video tapes and diskettes, magnetic and optical disks (CDs, DVDs) —wholesale of telephone and communications equipment, e.g. mobile phones, modems etc."
  },
  {
    "level": "Class",
    "code": "G4653",
    "name": "Wholesale of agricultural machinery, equipment and supplies",
    "parentCode": "G465",
    "keywords": "Wholesale of agricultural machinery; equipment and supplies",
    "note": "This class includes: - wholesale of agricultural and forestry machinery and equipment: • ploughs, manure spreaders, seeders • harvesters • threshers • milking machines • poultry-keeping machines, bee-keeping machines • tractors used in agriculture and forestry"
  },
  {
    "level": "Class",
    "code": "G4659",
    "name": "Wholesale of other machinery and equipment",
    "parentCode": "G465",
    "keywords": "Wholesale of other machinery and equipment",
    "note": "This class includes: - wholesale of office machinery and equipment, except computers and computer peripheral equipment - wholesale of transport equipment such as locomotives, wagons, etc., except motor vehicles, motorcycles and bicycles - wholesale of production-line robots - wholesale of wires and switches and other installation equipment for industrial use - wholesale of other electrical material such as electrical motors, transformers - wholesale of weapons, weapon systems and ammunition, including tanks and armoured fighting vehicles - wholesale of machine tools of any type and for any material - wholesale of other machinery n.e.c. for use in industry, trade and navigation and other services"
  },
  {
    "level": "Group",
    "code": "G466",
    "name": "Wholesale of motor vehicles, motorcycles and related parts and accessories",
    "parentCode": "G46",
    "keywords": "Wholesale of motor vehicles; motorcycles and related parts and accessories",
    "note": "This group includes the wholesale of motor vehicles, motorcycles, and their parts and accessories."
  },
  {
    "level": "Class",
    "code": "G4661",
    "name": "Wholesale of motor vehicles",
    "parentCode": "G466",
    "keywords": "Wholesale of motor vehicles",
    "note": "This class includes: - wholesale of new and used motor vehicles including electrical vehicles: • passenger motor vehicles, including specialised passenger motor vehicles such as ambulances and minibuses, etc. • lorries, trailers and semi-trailers for freight transport • camping vehicles such as caravans and motor homes"
  },
  {
    "level": "Class",
    "code": "G4662",
    "name": "Wholesale of motor vehicle parts and accessories",
    "parentCode": "G466",
    "keywords": "Wholesale of motor vehicle parts and accessories",
    "note": "This class includes: - wholesale of new and used motor vehicle parts, equipment and related accessories like tyres etc. - wholesale of batteries and accumulators for motor vehicles"
  },
  {
    "level": "Class",
    "code": "G4663",
    "name": "Wholesale of motorcycles, motorcycle parts and accessories",
    "parentCode": "G466",
    "keywords": "Wholesale of motorcycles; motorcycle parts and accessories",
    "note": "This class includes: - wholesale of new and used motorcycles, including mopeds - wholesale of parts and accessories for motorcycles"
  },
  {
    "level": "Group",
    "code": "G467",
    "name": "Other specialized wholesale",
    "parentCode": "G46",
    "keywords": "Other specialized wholesale",
    "note": "This group includes - other specialised wholesale activities not classified in groups 462 to 466 of this division. - the wholesale of intermediate products, except agricultural, typically not for household use."
  },
  {
    "level": "Class",
    "code": "G4671",
    "name": "Wholesale of solid, liquid and gaseous fuels and related products",
    "parentCode": "G467",
    "keywords": "Wholesale of solid; liquid and gaseous fuels and related products",
    "note": "This class includes: - wholesale of fossil fuels and low or free carbon fuels, greases, lubricants, oils such as: • charcoal, coal, coke, fuel wood, pellets of wood or biomass, naphtha • crude petroleum, crude oil, diesel fuel, gasoline, fuel oil, heating oil, kerosene, biofuels, recycled carbon fuels, synthetic fuels in blending or pure • liquefied petroleum gases, liquefied natural gas, butane and propane gas and their related bio and renewable forms, blended or pure • lubricating oils and greases, refined petroleum products"
  },
  {
    "level": "Class",
    "code": "G4672",
    "name": "Wholesale of metals and metal ores",
    "parentCode": "G467",
    "keywords": "Wholesale of metals and metal ores",
    "note": "This class includes: - wholesale of ferrous and non-ferrous metal ores - wholesale of ferrous and non-ferrous metals in primary forms - wholesale of ferrous and non-ferrous semi-finished metal products n.e.c. - wholesale of gold and other precious metals - wholesale of semi-finished metal products and metal ores"
  },
  {
    "level": "Class",
    "code": "G4673",
    "name": "Wholesale of construction materials, hardware, plumbing and heating equipment and supplies",
    "parentCode": "G467",
    "keywords": "Wholesale of construction materials; hardware; plumbing and heating equipment and supplies",
    "note": "This class includes: - wholesale of wood in the rough - wholesale of products of primary processing of wood - wholesale of paint and varnish - wholesale of construction materials: * sand, gravel - wholesale of wallpaper and floor coverings - wholesale of flat glass - wholesale of hardware and locks - wholesale of fittings and fixtures - wholesale of hot water heaters and boilers - wholesale of sanitary equipment: * baths, washbasins, toilets and other sanitary porcelain - wholesale of sanitary installation equipment: * tubes, pipes, fittings, taps, T-pieces, connections, rubber pipes etc. - wholesale of tools such as hammers, saws, screwdrivers and other hand tools, including power hand tools"
  },
  {
    "level": "Class",
    "code": "G4679",
    "name": "Wholesale of chemicals, waste and scrap and other products n.e.c.",
    "parentCode": "G467",
    "keywords": "Wholesale of chemicals; waste and scrap and other products n.e.c.",
    "note": "This class includes: - wholesale of industrial chemicals: * aniline, printing ink, essential oils, industrial gases, chemical glues, colouring matter, synthetic resin, methanol, paraffin, scents and flavourings, soda, industrial salt, acids and sulphurs, starch derivates etc. - wholesale of fertilizers and agrochemical products - wholesale of plastic materials in primary forms - wholesale of rubber - wholesale of textile fibres etc. - wholesale of paper , e.g. bulk, paper pulp - wholesale of precious stones - wholesale of metal and non-metal waste and scrap and materials for recycling, including collecting, sorting, separating, stripping of used goods such as cars in order to obtain reusable parts, packing and repacking, storage and delivery, but without a real transformation process. Additionally, the purchased and sold waste has a remaining value."
  },
  {
    "level": "Group",
    "code": "G469",
    "name": "Non-specialized wholesale trade",
    "parentCode": "G46",
    "keywords": "Non-specialized wholesale trade",
    "note": ""
  },
  {
    "level": "Class",
    "code": "G4690",
    "name": "Non-specialized wholesale trade",
    "parentCode": "G469",
    "keywords": "Non-specialized wholesale trade",
    "note": "This class includes: - wholesale of a variety of goods without any particular specialisation"
  },
  {
    "level": "Division",
    "code": "G47",
    "name": "Retail trade",
    "parentCode": "G",
    "keywords": "Retail trade",
    "note": "This division includes the resale (sale without transformation or after minor alterations or usual handling such as reconditioning) of new and used physical goods to the general public for personal or household consumption or utilisation, by shops, department stores, consumer cooperatives, stalls, mail-order houses, internet, door-to-door sales persons, hawkers etc. This division includes retail trade of new and used motor vehicles and motorcycles including electrical vehicles. The classification of retail trade activities is done based on traded good and not according to the way of selling (in store, on-line, via stall and market etc.). Retail trade activities are divided into specialised retail trade activities (groups 472 to 478) and non-specialised retail trade activities (group 471). Retail trade includes the retail sale of second-hand goods (class 4774). The above groups are further subdivided by the range of products sold. The goods sold in this division are limited to goods usually referred to as consumer goods or retail goods. Therefore, goods not normally entering the retail trade, such as cereal grains, ores, industrial machinery etc. are excluded. Distribution of digital products, including downloading and streaming services is also excluded."
  },
  {
    "level": "Group",
    "code": "G471",
    "name": "Non-specialized retail sale",
    "parentCode": "G47",
    "keywords": "Non-specialized retail sale",
    "note": "This group includes the retail sale of a variety of product lines in the same unit (non-specialised sale, such as supermarkets, hypermarkets and department stores). The rules for defining specialised and non-specialised retail trade activities are described in paragraphs 96-98 of the NACE introductory guidelines"
  },
  {
    "level": "Class",
    "code": "G4711",
    "name": "Non-specialized retail sale with food, beverages or tobacco predominating",
    "parentCode": "G471",
    "keywords": "Non-specialized retail sale with food; beverages or tobacco predominating",
    "note": "This class includes: - retail sale of a large variety of goods (such as wearing apparel, furniture, appliances, hardware, cosmetics etc.) among which however, food products, beverages or tobacco should be predominant"
  },
  {
    "level": "Class",
    "code": "G4719",
    "name": "Other non-specialized retail sale",
    "parentCode": "G471",
    "keywords": "Other non-specialized retail sale",
    "note": "This class includes: - retail sale of a large variety of goods (such as wearing apparel, furniture, appliances, hardware, cosmetics, jewellery, toys, sports goods etc.) of which food products, beverages or tobacco are not predominant"
  },
  {
    "level": "Group",
    "code": "G472",
    "name": "Retail sale of food, beverages and tobacco",
    "parentCode": "G47",
    "keywords": "Retail sale of food; beverages and tobacco",
    "note": "This group includes retail sale of food, beverage or tobacco products."
  },
  {
    "level": "Class",
    "code": "G4721",
    "name": "Retail sale of food",
    "parentCode": "G472",
    "keywords": "Retail sale of food",
    "note": "This class includes: - retail sale of any the following types of food products without processing and not intended for immediate consumption: * fresh or preserved fruit and vegetables * dairy products and eggs * meat and meat products (including poultry) * fish, other seafood and products thereof * bakery products * sugar confectionery * other food products"
  },
  {
    "level": "Class",
    "code": "G4722",
    "name": "Retail sale of beverages",
    "parentCode": "G472",
    "keywords": "Retail sale of beverages",
    "note": "This class includes: - retail sale of alcoholic and non-alcoholic beverages not for consumption or manufactured on the premises"
  },
  {
    "level": "Class",
    "code": "G4723",
    "name": "Retail sale of tobacco products",
    "parentCode": "G472",
    "keywords": "Retail sale of tobacco products",
    "note": "This class includes: - retail sale of tobacco in any form - retail sale of tobacco and smoking products and accessories, including lighters, pipes, cigarette rolling equipment etc."
  },
  {
    "level": "Group",
    "code": "G473",
    "name": "Retail sale of automotive fuel",
    "parentCode": "G47",
    "keywords": "Retail sale of automotive fuel",
    "note": ""
  },
  {
    "level": "Class",
    "code": "G4730",
    "name": "Retail sale of automotive fuel",
    "parentCode": "G473",
    "keywords": "Retail sale of automotive fuel",
    "note": "This class includes: - retail sale of fuels, whether fossil or carbon free, for motor vehicles and motorcycles - operation of petrol stations, including commission sale of fuels"
  },
  {
    "level": "Group",
    "code": "G474",
    "name": "Retail sale of information and communication equipment",
    "parentCode": "G47",
    "keywords": "Retail sale of information and communication equipment",
    "note": "This group includes the retail sale of information and communications technology (ICT) equipment, such as computers and peripheral equipment, telecommunications equipment and consumer electronics."
  },
  {
    "level": "Class",
    "code": "G4740",
    "name": "Retail sale of information and communication equipment",
    "parentCode": "G474",
    "keywords": "Retail sale of information and communication equipment",
    "note": "This class includes: - retail sale of computers - retail sale of computer peripheral equipment (e.g. printers, photocopiers, interactive whiteboards, videoconferencing equipment, etc.) - retail sale of video game consoles - retail sale of non-customised software, including video games, provided on physical media with right to perpetual use - retail sale of audio and video equipment - retail sale of radio and television equipment - retail sale of recordable media - retail sale of recording media players and recorders - retail sale of smartphones, mobile phones and telephones and their accessories (chargers, hands-free kits, protective film and case, ...)"
  },
  {
    "level": "Group",
    "code": "G475",
    "name": "Retail sale of other household equipment",
    "parentCode": "G47",
    "keywords": "Retail sale of other household equipment",
    "note": "This group includes the specialised retail sale of household equipment, such as textiles, hardware, carpets, electrical appliances or furniture"
  },
  {
    "level": "Class",
    "code": "G4751",
    "name": "Retail sale of textiles",
    "parentCode": "G475",
    "keywords": "Retail sale of textiles",
    "note": "This class includes: - retail sale of fabrics - retail sale of knitting yarn - retail sale of basic materials for rug, tapestry or embroidery making - retail sale of textiles - retail sale of haberdashery: needles, sewing thread etc. - retail sale of tarpaulins"
  },
  {
    "level": "Class",
    "code": "G4752",
    "name": "Retail sale of hardware, building materials, paints and glass",
    "parentCode": "G475",
    "keywords": "Retail sale of hardware; building materials; paints and glass",
    "note": "This class includes: - retail sale of hardware - retail sale of paints, varnishes and lacquers - retail sale of solvents, white spirit and other drugstore products - retail sale of flat glass - retail sale of other building material such as bricks, tiles, breezeblock, wood, floor boards, insulation material etc. - retail sale of sanitary and heating equipment - retail sale of do-it-yourself material, electrical and plumbing material and equipment - retail sale of tools such as hammers, saws, screwdrivers and other hand tools, including power hand tools - retail sale of renewable energy materials, e.g. non-electric solar collectors and photovoltaic panels, without installation - retail trade of electrical or electronic fire alarms, fire extinguishers, emergency blocks, smoke extraction system, safes, and vaults, without installation or maintenance services - retail sale of doors and windows and shutters of any material"
  },
  {
    "level": "Class",
    "code": "G4753",
    "name": "Retail sale of carpets, rugs, wall and floor coverings",
    "parentCode": "G475",
    "keywords": "Retail sale of carpets; rugs; wall and floor coverings",
    "note": "This class includes: - retail sale of carpets and rugs - retail sale of curtains and net curtains - retail sale of retail sale of wall or floor coverings such as wallpaper, tiles, laminates and vinyl flooring"
  },
  {
    "level": "Class",
    "code": "G4759",
    "name": "Retail sale of electrical household appliances, furniture, lighting equipment and other household articles",
    "parentCode": "G475",
    "keywords": "Retail sale of electrical household appliances; furniture; lighting equipment and other household articles",
    "note": "This class includes: - retail sale of household furniture, including mattresses and box springs - retail sale of articles for lighting - retail sale of household utensils and cutlery, crockery, glassware, china and pottery - retail sale of wooden, cork and wickerwork goods - retail sale of household appliances - retail sale of musical instruments and scores - retail sale of security systems, such as locking devices, safes, and vaults, without installation or maintenance services - retail sale of household articles and equipment n.e.c."
  },
  {
    "level": "Group",
    "code": "G476",
    "name": "Retail sale of cultural and recreational goods",
    "parentCode": "G47",
    "keywords": "Retail sale of cultural and recreational goods",
    "note": "This group includes the specialised retail sale of cultural and recreation goods, e.g. books, newspapers, audio and video recordings on physical media, sporting equipment, games and toys."
  },
  {
    "level": "Class",
    "code": "G4761",
    "name": "Retail sale of books, newspapers, stationery and office supplies",
    "parentCode": "G476",
    "keywords": "Retail sale of books; newspapers; stationery and office supplies",
    "note": "This class includes: - retail sale of books of all kinds - retail sale of newspapers and stationery"
  },
  {
    "level": "Class",
    "code": "G4762",
    "name": "Retail sale of sporting equipment",
    "parentCode": "G476",
    "keywords": "Retail sale of sporting equipment",
    "note": "This class includes: - retail sale of sports goods, including fishing gear, weapons and ammunitions for hunting, camping goods, etc. - retail sale of boats - retail sale bicycles, including e-bikes, monowheels, hoverboards, kick scooters, segways - retail sale of special footwear for sports e.g. football shoes, ice skates, ski boots, etc. - retail sale of special sports equipment clothes for skiing, martial arts, ballet, etc - retail sale of parachutes, tents, sleeping bags, etc."
  },
  {
    "level": "Class",
    "code": "G4763",
    "name": "Retail sale of games and toys",
    "parentCode": "G476",
    "keywords": "Retail sale of games and toys",
    "note": "This class includes: - retail sale of games and toys, made of all materials - retail sale of party supplies, e.g. disguises, masks, party favours (cotillions, jokes, etc.) and magic items"
  },
  {
    "level": "Class",
    "code": "G4769",
    "name": "Retail sale of cultural and recreational goods n.e.c.",
    "parentCode": "G476",
    "keywords": "Retail sale of cultural and recreational goods n.e.c.",
    "note": "This class includes retail sale of cultural and recreational goods not elsewhere classified: - retail sale of recorded media - retail sale of musical instruments, scores and related accessories, e.g. strings, music stands, metronomes - retail sale of philately, numismatics and collectors’ items such as stamps and coins - activities of commercial art galleries"
  },
  {
    "level": "Group",
    "code": "G477",
    "name": "Retail sale of other goods, except motor vehicles and motorcycles",
    "parentCode": "G47",
    "keywords": "Retail sale of other goods; except motor vehicles and motorcycles",
    "note": "This group includes the retail sale of various goods not elsewhere classified, e.g. clothing, footwear and leather articles, pharmaceutical and medical goods, watches, souvenirs, cleaning products, toiletries, flowers, pets , etc."
  },
  {
    "level": "Class",
    "code": "G4771",
    "name": "Retail sale of clothing, footwear and leather articles",
    "parentCode": "G477",
    "keywords": "Retail sale of clothing; footwear and leather articles",
    "note": "This class includes: - retail sale of articles of clothing - retail sale of articles of fur - retail sale of clothing accessories such as gloves, ties, braces etc. - retail sale of umbrellas - retail sale of footwear - retail sale of leather goods - retail sale of travel accessories of leather and leather substitutes"
  },
  {
    "level": "Class",
    "code": "G4772",
    "name": "Retail sale of pharmaceutical and medical goods, cosmetic and toilet articles",
    "parentCode": "G477",
    "keywords": "Retail sale of pharmaceutical and medical goods; cosmetic and toilet articles",
    "note": "This class includes: - retail sale of pharmaceuticals - retail sale of medical and orthopaedic goods - retail sale of perfumery and cosmetic articles"
  },
  {
    "level": "Class",
    "code": "G4773",
    "name": "Retail sale of other new goods n.e.c.",
    "parentCode": "G477",
    "keywords": "Retail sale of other new goods n.e.c.",
    "note": "This class includes: - retail sale of photographic, optical and precision equipment - activities of opticians - retail sale of watches, clocks and jewellery - retail sale of flowers, plants, seeds, fertilizers, pet animals and pet food - retail sale of souvenirs, craftwork and religious articles - activities of commercial art galleries - retail sale of household fuel oil, bottled gas, coal and fuel wood - retail sale of cleaning materials - retail sale of weapons and ammunition - retail sale of stamps and coins - retail sale of non-food products n.e.c."
  },
  {
    "level": "Class",
    "code": "G4774",
    "name": "Retail sale of second-hand goods",
    "parentCode": "G477",
    "keywords": "Retail sale of second-hand goods",
    "note": "This class includes: - retail sale of second-hand books - retail sale of antiques - retail sale of second-hand clothes - retail sale of second-hand furniture - retail sale of second-hand household appliances - retail sale of other second-hand goods"
  },
  {
    "level": "Group",
    "code": "G478",
    "name": "Retail sale of motor vehicles, motorcycles and related parts and accessories",
    "parentCode": "G47",
    "keywords": "Retail sale of motor vehicles; motorcycles and related parts and accessories",
    "note": "This group includes retail sale of new and second hand motor vehicles, motorcycles and all kinds of parts, components, supplies, tools and accessories for motor vehicles and motorcycles, such as: • rubber tyres and inner tubes for tyres • spark plugs, batteries, lighting equipment, vehicle charging equipment and electrical parts etc."
  },
  {
    "level": "Class",
    "code": "G4781",
    "name": "Retail sale of motor vehicles",
    "parentCode": "G478",
    "keywords": "Retail sale of motor vehicles",
    "note": "This class includes: - retail sale of new and used motor vehicles including electrical vehicles: • passenger motor vehicles • camping vehicles such as caravans and motor homes"
  },
  {
    "level": "Class",
    "code": "G4782",
    "name": "Retail sale of motor vehicle parts and accessories",
    "parentCode": "G478",
    "keywords": "Retail sale of motor vehicle parts and accessories",
    "note": "This class includes: - retail sale of new and used parts, equipment and accessories for motor vehicles"
  },
  {
    "level": "Class",
    "code": "G4783",
    "name": "Retail sale of motorcycles, motorcycles parts and accessories",
    "parentCode": "G478",
    "keywords": "Retail sale of motorcycles; motorcycles parts and accessories",
    "note": "This class includes: - retail sale of new and used motorcycles, including mopeds - retail sale of new and used parts and accessories for motorcycles"
  },
  {
    "level": "Group",
    "code": "G479",
    "name": "Intermediation service activities for retail sale",
    "parentCode": "G47",
    "keywords": "Intermediation service activities for retail sale",
    "note": ""
  },
  {
    "level": "Class",
    "code": "G4790",
    "name": "Intermediation service activities for retail sale",
    "parentCode": "G479",
    "keywords": "Intermediation service activities for retail sale",
    "note": "This class includes intermediation service activities for specialized and non-specialised retail trade that facilitate transactions between buyers and sellers for the ordering and/or delivering of physical goods for a fee or commission, without supplying and taking ownership of the goods that are intermediated. These activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the buyers or sellers. Revenue for intermediation service activities for non-specialised retail trade can include other sources of income, such as revenues from advertising. The rules for defining specialised and non-specialised retail trade activities are described in paragraphs 96-98 of the NACE introductory guidelines."
  },
  {
    "level": "Section",
    "code": "H",
    "name": "Transportation and storage",
    "parentCode": "",
    "keywords": "Transportation and storage",
    "note": "This section includes transportation of passengers or freight, e.g by rail, pipeline, road, water or air, including transportation of passengers disregarding the reasons, whether for personal, professional or recreational reasons, scheduled or not. Rental of transport equipment with driver or operator as well as postal and courier activities are classified this section The section also includes associated activities, e.g. operational of terminal and parking facilities, cargo handling and storage. Transport activities classified in divisions 49, 50, 51, 53 often involve related activities, e.g. packaging, goods handling operations, temporary crating, sampling and weighing of goods, which solely support the transport activities. These supporting activities are only to be classified in division 52, if they are performed on behalf of others"
  },
  {
    "level": "Division",
    "code": "H49",
    "name": "Land transport and transport via pipelines",
    "parentCode": "H",
    "keywords": "Land transport and transport via pipelines",
    "note": "This division includes transportation of passengers and freight by road or rail. The activities include transport of passengers, whether for personal, professional or recreational reasons as well as the transport of goods via road, rail or pipelines."
  },
  {
    "level": "Group",
    "code": "H491",
    "name": "Transport via railways",
    "parentCode": "H49",
    "keywords": "Transport via railways",
    "note": "This group includes all transportation of passengers and/or freight by rail suing rolling stock on mainline networks, usually spread over an extensive geographic area. Freight rail transport over short-line freight railroads is included here. This group excludes: - urban and suburban passenger land transport, see 4921 - related activities such as switching and shunting, see 5221 - operation of railroad infrastructure, see 5221"
  },
  {
    "level": "Class",
    "code": "H4911",
    "name": "Passenger rail transport, interurban",
    "parentCode": "H491",
    "keywords": "Passenger rail transport; interurban",
    "note": "This class includes: - passenger transport by inter-urban railways - operation of sleeping cars or dining cars as an integrated operation of railway companies"
  },
  {
    "level": "Class",
    "code": "H4912",
    "name": "Freight rail transport",
    "parentCode": "H491",
    "keywords": "Freight rail transport",
    "note": "This class includes: - freight transport on mainline rail networks as well as short line freight railroads"
  },
  {
    "level": "Group",
    "code": "H492",
    "name": "Other land transport",
    "parentCode": "H49",
    "keywords": "Other land transport",
    "note": "This group includes all land-based transport activities other than rail transport. However, rail transport as part of urban or suburban transport systems is included here."
  },
  {
    "level": "Class",
    "code": "H4921",
    "name": "Urban and suburban passenger land transport",
    "parentCode": "H492",
    "keywords": "Urban and suburban passenger land transport",
    "note": "This class includes: - land transport of passengers by urban or suburban transport systems. This may include different modes of land transport, such as by motorbus, tramway, streetcar, trolley bus, underground and elevated railways etc. The transport is carried out on scheduled routes normally following a fixed time schedule, entailing the picking up and setting down of passengers at normally fixed stops."
  },
  {
    "level": "Class",
    "code": "H4922",
    "name": "Other passenger land transport",
    "parentCode": "H492",
    "keywords": "Other passenger land transport",
    "note": "This class includes: - other passenger road transport: - scheduled long-distance bus services - charters, excursions and other occasional coach services - taxi operation - airport shuttles - operation of funiculars, cable cars and ski lifts, if they are not part of urban or suburban transit systems or not in combination with the operation of ski hills"
  },
  {
    "level": "Class",
    "code": "H4923",
    "name": "Freight transport by road",
    "parentCode": "H492",
    "keywords": "Freight transport by road",
    "note": "This class includes: - all freight transport operations by road: • logging haulage • livestock haulage • refrigerated haulage • heavy haulage • bulk haulage, including haulage in tanker trucks including milk collection at farms • haulage of automobiles • transport of waste and waste materials, without collection or disposal"
  },
  {
    "level": "Group",
    "code": "H493",
    "name": "Transport via pipeline",
    "parentCode": "H49",
    "keywords": "Transport via pipeline",
    "note": ""
  },
  {
    "level": "Class",
    "code": "H4930",
    "name": "Transport via pipeline",
    "parentCode": "H493",
    "keywords": "Transport via pipeline",
    "note": "This class includes: - transport of gases, liquids, water, slurry and other commodities via pipelines - pipeline transportation of natural gas from processing plants to local distribution systems"
  },
  {
    "level": "Division",
    "code": "H50",
    "name": "Water transport",
    "parentCode": "H",
    "keywords": "Water transport",
    "note": "This division includes the water transport of passengers or freight, whether scheduled or not, whether for professional, personal or recreational reasons. Also included are the operation of towing or pushing boats, excursion, cruise or sightseeing boats, ferries, water taxis etc. Although the location is an indicator for the separation between sea and inland water transport, the deciding factor is the type of vessel used. Transport on sea-going vessels is classified in group 501, while transport using other vessels is classified in group 502."
  },
  {
    "level": "Group",
    "code": "H501",
    "name": "Sea and coastal water transport",
    "parentCode": "H50",
    "keywords": "Sea and coastal water transport",
    "note": "This group includes the transport of passengers or freight on vessels designed for operating on sea or coastal waters. Also included is the transport of passengers or freight on great lakes etc. when similar types of vessels are used."
  },
  {
    "level": "Class",
    "code": "H5011",
    "name": "Sea and coastal passenger water transport",
    "parentCode": "H501",
    "keywords": "Sea and coastal passenger water transport",
    "note": "This class includes: - transport of passengers over seas and coastal waters, whether scheduled or not: • operation of excursion, cruise or sightseeing boats • operation of ferries, water taxis etc."
  },
  {
    "level": "Class",
    "code": "H5012",
    "name": "Sea and coastal freight water transport",
    "parentCode": "H501",
    "keywords": "Sea and coastal freight water transport",
    "note": "This class includes: - transport of freight over seas and coastal waters, whether scheduled or not - transport by towing or pushing of barges, oil rigs etc."
  },
  {
    "level": "Group",
    "code": "H502",
    "name": "Inland water transport",
    "parentCode": "H50",
    "keywords": "Inland water transport",
    "note": "This group includes the transport of passengers or freight on inland waters, involving vessels that are not suitable for sea transport."
  },
  {
    "level": "Class",
    "code": "H5021",
    "name": "Inland passenger water transport",
    "parentCode": "H502",
    "keywords": "Inland passenger water transport",
    "note": "This class includes: - transport of passenger via rivers, canals, lakes and other inland waterways, including inside harbours and ports - passenger water transport for sightseeing"
  },
  {
    "level": "Class",
    "code": "H5022",
    "name": "Inland freight water transport",
    "parentCode": "H502",
    "keywords": "Inland freight water transport",
    "note": "This class includes: - transport of freight via rivers, canals, lakes and other inland waterways, including inside harbours and ports"
  },
  {
    "level": "Division",
    "code": "H51",
    "name": "Air transport",
    "parentCode": "H",
    "keywords": "Air transport",
    "note": "This division includes transportation of passengers or freight by air or via space"
  },
  {
    "level": "Group",
    "code": "H511",
    "name": "Passenger air transport",
    "parentCode": "H51",
    "keywords": "Passenger air transport",
    "note": ""
  },
  {
    "level": "Class",
    "code": "H5110",
    "name": "Passenger air transport",
    "parentCode": "H511",
    "keywords": "Passenger air transport",
    "note": "This class includes: - scheduled air transportation of passengers over regular routes - charter flights for passengers - sightseeing flights"
  },
  {
    "level": "Group",
    "code": "H512",
    "name": "Freight air transport",
    "parentCode": "H51",
    "keywords": "Freight air transport",
    "note": ""
  },
  {
    "level": "Class",
    "code": "H5120",
    "name": "Freight air transport",
    "parentCode": "H512",
    "keywords": "Freight air transport",
    "note": "This class includes: - transport freight by air over regular routes and on regular schedules - non-scheduled transport of freight by air - launching of satellites and space vehicles - space transport"
  },
  {
    "level": "Division",
    "code": "H52",
    "name": "Warehousing and support activities for transportation",
    "parentCode": "H",
    "keywords": "Warehousing and support activities for transportation",
    "note": "This division includes warehousing and support activities for transportation, such as operating of transport infrastructure, e.g. airports, harbours, tunnels, bridges, etc., including the activities of transport agencies and cargo handling. The activities mentioned are carried out on behalf of third parties. If the related services are provided solely to support transport activities by the same unit, they will be considered as ancillary activities to transport and this unit will be classified elsewhere in section H."
  },
  {
    "level": "Group",
    "code": "H521",
    "name": "Warehousing and storage",
    "parentCode": "H52",
    "keywords": "Warehousing and storage",
    "note": ""
  },
  {
    "level": "Class",
    "code": "H5210",
    "name": "Warehousing and storage",
    "parentCode": "H521",
    "keywords": "Warehousing and storage",
    "note": "This class includes: - operation of storage and warehouse facilities for all kinds of goods: • operation of grain silos • general merchandise warehouses • refrigerated warehouses or cool stores • storage tanks etc. - warehousing of furniture not part of a removal service"
  },
  {
    "level": "Group",
    "code": "H522",
    "name": "Support activities for transportation",
    "parentCode": "H52",
    "keywords": "Support activities for transportation",
    "note": "This group includes activities supporting the transport of passengers or freight, including operation of transport facilities and parts of the transport infrastructure and activities related to handling freight before, after or between transport segments."
  },
  {
    "level": "Class",
    "code": "H5221",
    "name": "Service activities incidental to land transportation",
    "parentCode": "H522",
    "keywords": "Service activities incidental to land transportation",
    "note": "This class includes: - activities related to road, rail and other land transport of passengers, animals or freight: • operation of terminal facilities such as railway stations, bus stations, stations for the handling of goods • operation of railroad infrastructure and rail related facilities, cargo terminals, technical back-up points, railway stops for fuel • operation of roads, including bridges, tunnels, and highway toll roads - operation of car parks or garages, bicycle parkings, winter storage of caravans - switching and shunting - towing and roadside assistance - operation of toll collection facilities - truck transportation cargo surveying activities"
  },
  {
    "level": "Class",
    "code": "H5222",
    "name": "Service activities incidental to water transportation",
    "parentCode": "H522",
    "keywords": "Service activities incidental to water transportation",
    "note": "This class includes: - activities related to water transport of passengers, animals or freight: • operation of terminal facilities such as harbours and piers • operation of waterway locks etc. • navigation, pilotage, tug and berthing activities • bunkering and reception of port waste • lighterage, salvage activities • lighthouse activities • marine cargo surveying activities - river information services - winter storage of ships and boats"
  },
  {
    "level": "Class",
    "code": "H5223",
    "name": "Service activities incidental to air transportation",
    "parentCode": "H522",
    "keywords": "Service activities incidental to air transportation",
    "note": "This class includes: - activities related to air transport of passengers, animals or freight: • operation of terminal facilities such as airway terminals etc. • airport and air-traffic-control activities • ground service activities on airfields etc. - airfield infrastructure maintenance work - storage of aircrafts"
  },
  {
    "level": "Class",
    "code": "H5224",
    "name": "Cargo handling",
    "parentCode": "H522",
    "keywords": "Cargo handling",
    "note": "This class includes: - loading and unloading of goods and luggage irrespective of the mode of transportation used - stevedoring - loading and unloading of freight railway cars"
  },
  {
    "level": "Class",
    "code": "H5229",
    "name": "Other support activities for transportation",
    "parentCode": "H522",
    "keywords": "Other support activities for transportation",
    "note": "This class includes: - arranging or organizing of transport operations by rail, road, sea or air - logistics consulting activities, i.e. planning, designing and supporting operations of transportation, warehousing and distribution - issue and procurement of transport documents and waybills - goods-handling operations, e.g. temporary crating for the sole purpose of protecting the goods during transit, uncrating, sampling, weighing of goods"
  },
  {
    "level": "Group",
    "code": "H523",
    "name": "Intermediation service activities for transportation",
    "parentCode": "H52",
    "keywords": "Intermediation service activities for transportation",
    "note": "This group includes the intermediation of freight and passenger transportation."
  },
  {
    "level": "Class",
    "code": "H5231",
    "name": "Intermediation service activities for freight transportation",
    "parentCode": "H523",
    "keywords": "Intermediation service activities for freight transportation",
    "note": "This class includes the intermediation of freight transportation, by bringing clients and service providers together for a fee or commission, without the intermediary providing the freight transportation services that are intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the client or the provider of the freight transportation service. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising. This class includes: - brokerage of freight transportation in ships and aircraft space - operation of platforms for intermediation of freight transport services - activities of sea-freight forwarders and air-cargo agents - organisation and freight forwarding of group and individual consignments on behalf of the client - activities of customs brokers acting on behalf of a client in the customs clearance process"
  },
  {
    "level": "Class",
    "code": "H5232",
    "name": "Intermediation service activities for passenger transportation",
    "parentCode": "H523",
    "keywords": "Intermediation service activities for passenger transportation",
    "note": "This class includes the intermediation of passenger transportation, by bringing clients and service providers together for a fee or commission, without the intermediary providing the passenger transportation services that are intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the client or the provider of the passenger transportation service. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising. This class includes: - operation of on-line ridesharing platforms that allow passengers to book a ride - provision of intermediation services for the purchase of land, water or air transportation for passengers - brokerage of passenger seats in ships and aircrafts space - arrangement of carpools and van pools - arrangement of nonemergency medical transportation, without providing social assistance services"
  },
  {
    "level": "Division",
    "code": "H53",
    "name": "Postal and courier activities",
    "parentCode": "H",
    "keywords": "Postal and courier activities",
    "note": ""
  },
  {
    "level": "Group",
    "code": "H531",
    "name": "Postal activities",
    "parentCode": "H53",
    "keywords": "Postal activities",
    "note": "This group includes postal and courier activities, such as pickup, transport and delivery of letters and parcels under various arrangements. Local delivery and messenger services are also included."
  },
  {
    "level": "Class",
    "code": "H5310",
    "name": "Postal activities",
    "parentCode": "H531",
    "keywords": "Postal activities",
    "note": "This class includes the activities of postal services operating under a universal service obligation by one or more designated universal service providers. The activities include use of the universal service infrastructure, including retail locations, sorting and processing facilities, and carrier routes to pickup and deliver the mail. The delivery can include letter-post, i.e. letters, postcards, printed papers (newspaper, periodicals, advertising items, etc.), small packets, goods or documents. Also included are other services necessary to support the universal service obligation. This class includes: - pickup, sorting, transport and delivery (domestic or international) of letter-post and (mail-type) parcels and packages by postal services operating under a universal service obligation. One or more modes of transport may be involved and the activity may be carried out with either self-owned (private) transport or via public transport. - collection of letter-mail and parcels from public letter-boxes or from post offices"
  },
  {
    "level": "Group",
    "code": "H532",
    "name": "Courier activities",
    "parentCode": "H53",
    "keywords": "Courier activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "H5320",
    "name": "Courier activities",
    "parentCode": "H532",
    "keywords": "Courier activities",
    "note": "This class includes: - pickup, sorting, transport and delivery (domestic or international) of letter-post and (mail-type) parcels and packages by firms operating outside the scope of a universal service obligation. One or more modes of transport may be involved and the activity may be carried out with either self-owned (private) transport or via public transport."
  },
  {
    "level": "Group",
    "code": "H533",
    "name": "Intermediation service activities for postal and courier activities",
    "parentCode": "H53",
    "keywords": "Intermediation service activities for postal and courier activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "H5330",
    "name": "Intermediation service activities for postal and courier activities",
    "parentCode": "H533",
    "keywords": "Intermediation service activities for postal and courier activities",
    "note": "This class includes the intermediation of postal and courier activities, by bringing clients and service providers together for a fee or commission, without the intermediary providing the postal and courier services that are intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the client or the provider of postal and courier service. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising. This class includes: - any intermediation service undertaken by third parties to the postal service provider access point/s and offered to business and domestic clients - operation of on-line platforms to allow people to book food delivery"
  },
  {
    "level": "Section",
    "code": "I",
    "name": "Accommodation and food service activities",
    "parentCode": "",
    "keywords": "Accommodation and food service activities",
    "note": "This section includes the provision of short-term (less than one year) accommodation in buildings, camping grounds and recreational vehicle parks for visitors and other travelers and the provision of meals and drinks fit for immediate consumption. The amount and type of supplementary services provided within this section can vary widely."
  },
  {
    "level": "Division",
    "code": "I55",
    "name": "Accommodation",
    "parentCode": "I",
    "keywords": "Accommodation",
    "note": "This division includes the provision of short-term accommodation for visitors and other travelers. Some units may provide only accommodation while others provide a combination of accommodation, meals and/or recreational facilities"
  },
  {
    "level": "Group",
    "code": "I551",
    "name": "Hotels and similar accommodation activities",
    "parentCode": "I55",
    "keywords": "Hotels and similar accommodation activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "I5510",
    "name": "Hotels and similar accommodation activities",
    "parentCode": "I551",
    "keywords": "Hotels and similar accommodation activities",
    "note": "This class includes the provision of accommodation, typically on a daily or weekly basis, for short stays. This includes the provision of furnished accommodation in guest rooms and suites. Services offered include necessarily daily cleaning and bed-making. A range of additional services may be provided, e.g. daily cleaning and bedmaking, food and beverage services, laundry services, as well as conference and convention facilities. These activities in this class are generally characterized by providing on-site reactive customer service. This class includes accommodation provided by e.g.: - hotels - resort hotels"
  },
  {
    "level": "Group",
    "code": "I552",
    "name": "Other short term accommodation activities",
    "parentCode": "I55",
    "keywords": "Other short term accommodation activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "I5520",
    "name": "Other short term accommodation activities",
    "parentCode": "I552",
    "keywords": "Other short term accommodation activities",
    "note": "This class includes the provision of short-term accommodation, typically on a daily or weekly basis, in furnished rooms, homes, flats or apartments principally for short stay by visitors. No on-site reactive customer services and very minimal complementary services, if any, are provided. This class includes accommodation in e.g.: - holiday homes and apartments - visitor flats and bungalows - cottages and cabins without housekeeping services - mountain lodges - hostels - bed and breakfast units - guest rooms provided by private households - mountain huts"
  },
  {
    "level": "Group",
    "code": "I553",
    "name": "Camping grounds, recreational vehicle parks and trailer parks",
    "parentCode": "I55",
    "keywords": "Camping grounds; recreational vehicle parks and trailer parks",
    "note": ""
  },
  {
    "level": "Class",
    "code": "I5530",
    "name": "Camping grounds, recreational vehicle parks and trailer parks",
    "parentCode": "I553",
    "keywords": "Camping grounds; recreational vehicle parks and trailer parks",
    "note": "This class includes: - provision of short-term accommodation in camping grounds, e.g. recreational camps, fishing and hunting camps - provision of space and facilities for recreational vehicles"
  },
  {
    "level": "Group",
    "code": "I554",
    "name": "Intermediation service activities for accommodation",
    "parentCode": "I55",
    "keywords": "Intermediation service activities for accommodation",
    "note": ""
  },
  {
    "level": "Class",
    "code": "I5540",
    "name": "Intermediation service activities for accommodation",
    "parentCode": "I554",
    "keywords": "Intermediation service activities for accommodation",
    "note": "This class includes the intermediation of all types of accommodation by bringing clients and service providers together for a fee or commission. These intermediation activities can be carried out on digital platforms or through non-digital channels (phone, post etc.). The fee or commission can be received from either the client or the provider of the accommodation. Revenue for the intermediation activities can include other sources of income, such as revenues from the sale of advertising space."
  },
  {
    "level": "Group",
    "code": "I559",
    "name": "Other accommodation n.e.c.",
    "parentCode": "I55",
    "keywords": "Other accommodation n.e.c.",
    "note": ""
  },
  {
    "level": "Class",
    "code": "I5590",
    "name": "Other accommodation n.e.c.",
    "parentCode": "I559",
    "keywords": "Other accommodation n.e.c.",
    "note": "This class includes the provision of temporary accommodation in single or shared rooms or dormitories for students, seasonal workers and other individuals. This class includes accommodation in: - worker dormitories - boarding houses - student accommodation provided for less than a year - operation of railways sleeping cars when not operated by railway companies"
  },
  {
    "level": "Division",
    "code": "I56",
    "name": "Food and beverage service activities",
    "parentCode": "I",
    "keywords": "Food and beverage service activities",
    "note": "This division includes food and beverage serving activities providing meals or drinks fit for immediate consumption, whether in traditional restaurants, self-service or take-away restaurants, whether permanent or temporary, with or without seating. Decisive is the fact that meals fit for immediate consumption are offered, not the kind of facility providing them."
  },
  {
    "level": "Group",
    "code": "I561",
    "name": "Restaurants and mobile food service activities",
    "parentCode": "I56",
    "keywords": "Restaurants and mobile food service activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "I5610",
    "name": "Restaurants and mobile food service activities",
    "parentCode": "I561",
    "keywords": "Restaurants and mobile food service activities",
    "note": "This class includes the provision of food services to customers, whether they are served while seated or serve themselves from a display of items, whether they eat the prepared meals on the premises, take them out or have them delivered. This includes the preparation and serving of meals for immediate consumption from motorized vehicles or non-motorized carts. This class includes activities of: - restaurants - cafeterias - fast-food restaurants - take-out eating places - mobile food operators, including: truck vendors - mobile food carts - food preparation in market stalls"
  },
  {
    "level": "Group",
    "code": "I562",
    "name": "Event catering and other food service activities",
    "parentCode": "I56",
    "keywords": "Event catering and other food service activities",
    "note": "This group includes catering activities for individual events or for a specified period of time and the operation of food concessions, such as at sports or similar facilities. The services are provided on a contract basis and offered to a limited clientele."
  },
  {
    "level": "Class",
    "code": "I5621",
    "name": "Event catering activities",
    "parentCode": "I562",
    "keywords": "Event catering activities",
    "note": "This class includes the food preparation and supply based on contractual agreements, at the location specified by the customer, for a specific event."
  },
  {
    "level": "Class",
    "code": "I5629",
    "name": "Other food service activities",
    "parentCode": "I562",
    "keywords": "Other food service activities",
    "note": "This class includes industrial catering, i.e. the provision of food preparation and supply based on contractual arrangements with the customer, for a fixed term. Also included is the operation of food concessions e.g. at sports and similar facilities. The food can be prepared directly on the premises of the client organization or in a central unit. This class includes: - activities of food service contractors, e.g. for transportation companies - operation of canteens or cafeterias, e.g. for factories, offices, hospitals or schools, on a concession basis"
  },
  {
    "level": "Group",
    "code": "I563",
    "name": "Beverage serving activities",
    "parentCode": "I56",
    "keywords": "Beverage serving activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "I5630",
    "name": "Beverage serving activities",
    "parentCode": "I563",
    "keywords": "Beverage serving activities",
    "note": "This class predominantly includes serving of beverages for immediate consumption on the premises. The activity can include the provision of e.g. live music This class includes activities of: - bars - cocktail lounges - pubs - coffee houses -tea rooms - fruit juice bars - mobile beverage vendors"
  },
  {
    "level": "Group",
    "code": "I564",
    "name": "Intermediation service activities for food and beverage services activities",
    "parentCode": "I56",
    "keywords": "Intermediation service activities for food and beverage services activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "I5640",
    "name": "Intermediation service activities for food and beverage services activities",
    "parentCode": "I564",
    "keywords": "Intermediation service activities for food and beverage services activities",
    "note": "This class includes the intermediation of food and beverage services by bringing clients and service providers together for a fee or commission without the intermediary providing the food and beverage services intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face, phone, post, etc.). The fee or commission can be received from either the client or the provider of the food and beverage services. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising."
  },
  {
    "level": "Section",
    "code": "J",
    "name": "Publishing, broadcasting, and content production and distribution activities",
    "parentCode": "",
    "keywords": "Publishing; broadcasting; and content production and distribution activities",
    "note": "This section includes the production and publishing, broadcasting and other distribution of information products. This section includes book, newspaper, periodical, and software publishing activities (division 58), motion picture, video and television programme production, sound recording and music publishing activities (division 59) and radio and television broadcasting as well as radio and television programme production and distribution activities, including operation of streaming, downloads, and content distribution (sharing) platforms not associated with publishing of the content, operation of blog and wiki sites, social network sites, and the operation of online gaming/video game sites (division 60). Publishing refers to the acquisition of copyrights to content (information products) or the acquisition of publication authorization from copyright holders, and making this content available to the general public by engaging in (or arranging for) the reproduction and distribution of this content in various forms. Publishers may publish only and license rights to others to distribute their content, or they may publish and distribute content they create or own. All the feasible forms of publishing (in print, electronic, digital, analog, or any other form) and self-publishing activities are included in this section. Individual television programming components, such as movies, television series, etc. are produced by activities in division 59, while the creation of a complete television channel programme, from components produced in division 59 or other components (such as live news programming) is included in division 60. Division 60 also includes the broadcasting of this programme by the producer."
  },
  {
    "level": "Division",
    "code": "J58",
    "name": "Publishing activities",
    "parentCode": "J",
    "keywords": "Publishing activities",
    "note": "This division includes the publishing of books, brochures, leaflets, dictionaries, encyclopedias, atlases, maps and charts; publishing of newspapers, journals and periodicals; directory and mailing list and other publishing, as well as software publishing. Publishing includes the acquisition of copyrights to content (information products) and making this content available to the general public by engaging in (or arranging for) the reproduction and distribution of this content in various forms. Publishers may license rights to others to distribute their content, or they may publish and distribute content they create or own. All the feasible forms of publishing (in print, electronic, digital, analog, or any other form ) and self-publishing activities are included in this division, except publishing of motion pictures and music. This division covers the streaming of content, such as software and books, by content publishers."
  },
  {
    "level": "Group",
    "code": "J581",
    "name": "Publishing of books, newspapers, periodicals and other publishing activities",
    "parentCode": "J58",
    "keywords": "Publishing of books; newspapers; periodicals and other publishing activities",
    "note": "This group includes activities of publishing books, newspapers, magazines and other periodicals, directories, compilations, mailing lists and other works such as catalogs, photos, calendars, greeting cards, postcards, forms, posters and reproductions of works of art. These works are characterized by the intellectual creativity required in their development and are usually protected by copyright. All the feasible forms of publishing (in print, electronic, digital, analog, or any other form) are included."
  },
  {
    "level": "Class",
    "code": "J5811",
    "name": "Publishing of books",
    "parentCode": "J581",
    "keywords": "Publishing of books",
    "note": "This class includes: - publishing of books, brochures and similar publications - publishing of dictionaries and encyclopaedias - publishing of atlases, maps and charts - publishing of e-books and audio books - publishing of comic books and graphic novels All the feasible forms of publishing (in print, electronic, digital, analog, or any other form) are included."
  },
  {
    "level": "Class",
    "code": "J5812",
    "name": "Publishing of newspapers",
    "parentCode": "J581",
    "keywords": "Publishing of newspapers",
    "note": "This class includes: - publishing of newspapers, including advertising newspapers All the feasible forms of publishing (in print, electronic, digital, analog, or any other form) are included."
  },
  {
    "level": "Class",
    "code": "J5813",
    "name": "Publishing of journals and periodicals",
    "parentCode": "J581",
    "keywords": "Publishing of journals and periodicals",
    "note": "This class includes: - publishing of periodicals and other journalspublishing of radio and television schedules All the feasible forms of publishing (in print, electronic, digital, analog, or any other form) are included."
  },
  {
    "level": "Class",
    "code": "J5819",
    "name": "Other publishing activities",
    "parentCode": "J581",
    "keywords": "Other publishing activities",
    "note": "This class includes: - publishing in print, electronic, digital, analog, or any other form, of : • directories and mailing lists • compilations, such as case law, pharmaceutical compendia etc. • catalogs • photos, engravings and postcards • calendars • greeting cards • forms • posters • reproductions of works of art • non-bound leaflets and advertising material • statistics and other information • datasets/databases without associated data processing services"
  },
  {
    "level": "Group",
    "code": "J582",
    "name": "Software publishing",
    "parentCode": "J58",
    "keywords": "Software publishing",
    "note": "This group includes publishing of software, e.g. operating systems, business and financial technologies software and applications and video games. Development and continuous updating of self-published video games and software are included here."
  },
  {
    "level": "Class",
    "code": "J5821",
    "name": "Publishing of video games",
    "parentCode": "J582",
    "keywords": "Publishing of video games",
    "note": "This class includes: - publishing of video games for all platforms and all devices - provision of online games, in-game and in-app purchases, by the publisher, for all users including subscribers - intermediation service activities for video game software publishing"
  },
  {
    "level": "Class",
    "code": "J5829",
    "name": "Other software publishing",
    "parentCode": "J582",
    "keywords": "Other software publishing",
    "note": "This class includes: - publishing of other software, including : • operating systems • business and other applications, e.g. distributed ledger technology (DLT) or financial technologies software • cybersecurity software • modelling software • intermediation service activities for software publishing • marketplaces for software downloads"
  },
  {
    "level": "Division",
    "code": "J59",
    "name": "Motion picture, video and television programme production, sound recording and music publishing activities",
    "parentCode": "J",
    "keywords": "Motion picture; video and television programme production; sound recording and music publishing activities",
    "note": "This division includes production of theatrical and non-theatrical motion pictures, videos or audiovisual works and vlogs, whether for direct projection in theatres, for broadcasting or streaming; supporting post-production activities such as film editing, cutting, dubbing or conversion to video streaming formats; distribution of motion pictures and other audiovisual productions to other industries; as well as motion pictures or other audiovisual productions projection. Also included is the buying and selling of distribution rights for motion pictures or other audiovisual productions. This division also includes sound recording activities, i.e. production of original sound master recordings, releasing, promoting and distributing them; publishing of music , including distribution directly to the public via streaming and downloads; as well as sound recording service activities in a studio or elsewhere."
  },
  {
    "level": "Group",
    "code": "J591",
    "name": "Motion picture, video and television programme activities",
    "parentCode": "J59",
    "keywords": "Motion picture; video and television programme activities",
    "note": "This group includes the production of theatrical and non-theatrical motion pictures, videos or audiovisual works and vlogs, whether on film, DVD or other digital storage media, including digital distribution, for direct projection in theatres or for broadcasting or streaming; supporting post-production activities such as film editing, cutting, dubbing or conversion to video streaming formats ; distribution of motion pictures or other audiovisual productions to other industries as well as their projection."
  },
  {
    "level": "Class",
    "code": "J5911",
    "name": "Motion picture, video and television programme production activities",
    "parentCode": "J591",
    "keywords": "Motion picture; video and television programme production activities",
    "note": "This class includes: - motion picture, video or audiovisual and television programme production activities - production of television commercials - production of animated audiovisual works - production of television or video news programmes - production of vlogs - production of video podcasts"
  },
  {
    "level": "Class",
    "code": "J5912",
    "name": "Motion picture, video and television programme post-production activities",
    "parentCode": "J591",
    "keywords": "Motion picture; video and television programme post-production activities",
    "note": "This class includes: - motion picture, video or audiovisual and television programme post-production activities such as • editing, titling, subtitling, credits, • closed captioninganimation and special effects • film/tape transfers • conversion to video streaming formats - activities of motion picture film laboratories and activities of special laboratories for animated films: • developing and processing motion picture film • reproduction of motion picture film for theatrical distribution"
  },
  {
    "level": "Class",
    "code": "J5913",
    "name": "Motion picture, video and television programme distribution activities",
    "parentCode": "J591",
    "keywords": "Motion picture; video and television programme distribution activities",
    "note": "This class includes: - distributing film, videos, or audiovisual works and similar productions to motion picture theatres, television networks and stations, and exhibitors"
  },
  {
    "level": "Class",
    "code": "J5914",
    "name": "Motion picture projection activities",
    "parentCode": "J591",
    "keywords": "Motion picture projection activities",
    "note": "This class includes: - activities of motion picture or audiovisual projection in cinemas, in the open air or in other projection facilities"
  },
  {
    "level": "Group",
    "code": "J592",
    "name": "Sound recording and music publishing activities",
    "parentCode": "J59",
    "keywords": "Sound recording and music publishing activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "J5920",
    "name": "Sound recording and music publishing activities",
    "parentCode": "J592",
    "keywords": "Sound recording and music publishing activities",
    "note": "This class includes: - production of original (sound) master recordings sound recording service activities, including the production of recorded ( i.e. non-live) radio programming, audio podcasts, audio for film, television, books, etc. - conversion of sound recordings to audio streaming formats - music publishing, i.e. activities of: - * acquiring and registering copyrights for musical compositions - * promoting, authorizing and using these compositions in recordings, radio, television, motion pictures, live performances, print and other media - * jointly publishing and distributing sound recordings via streaming and downloads Units engaged in these activities may own the copyright or act as administrator of the music copyrights on behalf of the copyright owners. Units that release, promote and distribute sound recordings to wholesalers, retailers or directly to the public may produce master recordings or obtain the reproduction and distribution rights to master recordings."
  },
  {
    "level": "Division",
    "code": "J60",
    "name": "Programming, broadcasting, news agency and other content distribution activities",
    "parentCode": "J",
    "keywords": "Programming; broadcasting; news agency and other content distribution activities",
    "note": "This division includes the activities of creating content or acquiring the right to distribute content and subsequently broadcasting or distributing that content. Types of produced or distributed content included in this division are radio, television, audio and audiovisual entertainment, news, talk, and the like, including programs that are typically narrowcast in nature (limited format, such as news, sports, education or youth-oriented programming). The broadcasting or content distribution can be performed using different technologies, over-the-air, via satellite, via a cable network or via Internet broadcasting, streaming or downloads. This division also includes the broadcasting of live podcasts, third party on-demand distribution of recorded podcasts and downloads, and activities of news agencies, social network sites, blog and wiki sites, and online gaming/video game sites. Content may be made freely available to users or may be available only on a subscription or fee basis."
  },
  {
    "level": "Group",
    "code": "J601",
    "name": "Radio broadcasting and audio distribution activities",
    "parentCode": "J60",
    "keywords": "Radio broadcasting and audio distribution activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "J6010",
    "name": "Radio broadcasting and audio distribution activities",
    "parentCode": "J601",
    "keywords": "Radio broadcasting and audio distribution activities",
    "note": "This class includes: - broadcasting audio signals throughradio broadcasting studios and facilities for transmission of aural programming to the public, to affiliates or to subscribers - third party on-demand audio streaming distribution services and downloads live podcast broadcasting and third party on-demand podcast streaming services and downloads"
  },
  {
    "level": "Group",
    "code": "J602",
    "name": "Television programming, broadcasting and video distribution activities",
    "parentCode": "J60",
    "keywords": "Television programming; broadcasting and video distribution activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "J6020",
    "name": "Television programming, broadcasting and video distribution activities",
    "parentCode": "J602",
    "keywords": "Television programming; broadcasting and video distribution activities",
    "note": "This class includes: - the creation of a complete television channel programme,, from purchased programme components (e.g. movies, documentaries etc.), self-produced programme components (e.g. local news, live reports) or a combination thereof. This complete television programme can be either broadcast by the producing unit or produced for transmission by a third party operator of transmission facilities,, such as cable companies or satellite television providers. The programming may be of a general or specialised nature (e.g. limited formats such as news, sports, education or youth oriented programming), may be made freely available to users or may be available only on a subscription basis."
  },
  {
    "level": "Group",
    "code": "J603",
    "name": "News agency and other content distribution activities",
    "parentCode": "J60",
    "keywords": "News agency and other content distribution activities",
    "note": "This group includes the activities of news agencies, social network sites, blog and wiki sites, and online gaming/video game sites."
  },
  {
    "level": "Class",
    "code": "J6031",
    "name": "News agency activities",
    "parentCode": "J603",
    "keywords": "News agency activities",
    "note": "This class includes: - news syndicate and news agency activities furnishing news, pictures and features to the media, publishers and broadcasters"
  },
  {
    "level": "Class",
    "code": "J6039",
    "name": "Social network sites and other content distribution activities",
    "parentCode": "J603",
    "keywords": "Social network sites and other content distribution activities",
    "note": "This class includes: social network sites and other content distribution (sharing) platforms, including blog and wiki sites online gaming/video game sites provision of e-book for downloads not associated with publishing"
  },
  {
    "level": "Section",
    "code": "K",
    "name": "Telecommunications, computer programming, consultancy, computing infrastructure, and other information service activities",
    "parentCode": "",
    "keywords": "Telecommunications; computer programming; consultancy; computing infrastructure; and other information service activities",
    "note": "This section includes telecommunications and related service activities, i.e. transmitting voice, data, text, sound and video (division 61), computer programming, consultancy and related activities (division 62), and computing infrastructure, data processing, hosting, and other information service activities (division 63)."
  },
  {
    "level": "Division",
    "code": "K61",
    "name": "Telecommunications",
    "parentCode": "K",
    "keywords": "Telecommunications",
    "note": "This division includes the activities of providing telecommunications and related service activities, i.e. transmitting voice, data, text, sound and video. The transmission facilities that carry out these activities may be based on a single technology or a combination of technologies. The commonality of activities classified in this division is the transmission of content, without being involved in its creation or alteration. In the case of transmission of television signals, this may include the bundling of complete programming channels (produced in division 60) into programme packages for distribution."
  },
  {
    "level": "Group",
    "code": "K611",
    "name": "Wired, wireless, and satellite telecommunication activities",
    "parentCode": "K61",
    "keywords": "Wired; wireless; and satellite telecommunication activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "K6110",
    "name": "Wired, wireless, and satellite telecommunication activities",
    "parentCode": "K611",
    "keywords": "Wired; wireless; and satellite telecommunication activities",
    "note": "This class includes: - operating, maintaining or providing access to facilities for the transmission of voice, data, text, sound and video using wired, wireless or satellite telecommunications infrastructure, including: • operating and maintaining switching and transmission facilities to provide point-to-point communications via landlines, microwave or a combination of landlines and satellite linkups • operating of cable distribution systems (e.g. for distribution of data and television signals) with or without providing customers with third-party video-on-demand services • provision of Internet access by the operator of the infrastructure • maintaining and operating cellular and other wireless telecommunications networks ((including paging systems) • delivery of visual, aural or textual programming received from cable networks, local television stations or radio networks to consumers via direct-to-home satellite systems or via Internet protocol TV (the units classified here do not generally originate programming material) • Voice Over Internet Protocol (VOIP) provision by the operator of the infrastructure The transmission facilities that carry out these activities may be based on a single technology or a combination of technologies."
  },
  {
    "level": "Group",
    "code": "K612",
    "name": "Telecommunication reselling activities and intermediation service activities for telecommunication",
    "parentCode": "K61",
    "keywords": "Telecommunication reselling activities and intermediation service activities for telecommunication",
    "note": ""
  },
  {
    "level": "Class",
    "code": "K6120",
    "name": "Telecommunication reselling activities and intermediation service activities for telecommunication",
    "parentCode": "K612",
    "keywords": "Telecommunication reselling activities and intermediation service activities for telecommunication",
    "note": "This class includes: - reselling of wired, wireless, and satellite telecommunications (i.e. purchasing and reselling network capacity), including activities of telecommunications brokers and resellers of pre-paid calling cards and services - intermediation services for wired, wireless, and satellite telecommunications activities, including: * agent activities for telecommunications carriers * selling mobile phone service plans on an agent basis * wireless phone service plan sales agent activities, selling on behalf of wireless telecommunications carriers * agent activities for mobile virtual network operators (MVNOs). - provision of Internet access over networks between the client and the Internet Service Provider not owned or controlled by the Internet Service Provider, such as dial-up Internet access etc. - provision of telephone and Internet access in facilities open to the public"
  },
  {
    "level": "Group",
    "code": "K619",
    "name": "Other telecommunication activities",
    "parentCode": "K61",
    "keywords": "Other telecommunication activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "K6190",
    "name": "Other telecommunication activities",
    "parentCode": "K619",
    "keywords": "Other telecommunication activities",
    "note": "This class includes: - provision of specialised telecommunications applications, such as satellite tracking, communications telemetry, and radar station operations - operation of satellite terminal stations and associated facilities operationally connected with one or more terrestrial communications systems and capable of transmitting telecommunications to or receiving telecommunications from satellite systems - Voice Over Internet Protocol (VOIP) - text messaging (SMS), advanced data services (SMS+, MMS+) and SMS push services provision, without operating facilities for the transmission of data"
  },
  {
    "level": "Division",
    "code": "K62",
    "name": "Computer programming, consultancy and related activities",
    "parentCode": "K",
    "keywords": "Computer programming; consultancy and related activities",
    "note": "This division includes the following activities of providing expertise in the field of information technologies: designing the structure and content of, and/or writing, modifying, customizing, testing and supporting software and applications; planning and designing computer systems that integrate computer hardware, software and communication technologies; on-site management and operation of clients' computer systems and/or data processing facilities; computer hardware, software, and systems consultancy activities; and other professional and technical computer-related activities."
  },
  {
    "level": "Group",
    "code": "K621",
    "name": "Computer programming activities",
    "parentCode": "K62",
    "keywords": "Computer programming activities",
    "note": "The group includes the development of video games, video game software, and video game software tools, and other computer programming activities."
  },
  {
    "level": "Class",
    "code": "K6211",
    "name": "Development of video games, video game software, and video game software tools",
    "parentCode": "K621",
    "keywords": "Development of video games; video game software; and video game software tools",
    "note": "This class includes - designing the structure and content of, and/or writing, modifying (including updates and patches), customizing, testing and supporting of the computer code necessary to create and implement: * video game software * video game applications * video game software tools * video game middleware"
  },
  {
    "level": "Class",
    "code": "K6219",
    "name": "Other computer programming activities",
    "parentCode": "K621",
    "keywords": "Other computer programming activities",
    "note": "This class includes: - designing the structure and content of, and/or writing, modifying (including updates and patches), customizing, testing and supporting of the computer code necessary to create and implement: * systems software * business, finance, and other software applications (other than video game applications) * machine learning applications * artificial intelligence/machine vision applications * cybersecurity applications * distributed ledger applications * databases * web pages"
  },
  {
    "level": "Group",
    "code": "K622",
    "name": "Computer consultancy and computer facilities management activities",
    "parentCode": "K62",
    "keywords": "Computer consultancy and computer facilities management activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "K6220",
    "name": "Computer consultancy and computer facilities management activities",
    "parentCode": "K622",
    "keywords": "Computer consultancy and computer facilities management activities",
    "note": "This class includes: - computer hardware, software, and systems consultancy activities, including cybersecurity consultancy activities - planning and designing of computer systems which integrate computer hardware, software and communication technologies, with or without related services such as system installation, training, and user support - provision of on-site management and operation of clients' computer systems and/or data processing facilities, as well as related support services"
  },
  {
    "level": "Group",
    "code": "K629",
    "name": "Other information technology and computer service activities",
    "parentCode": "K62",
    "keywords": "Other information technology and computer service activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "K6290",
    "name": "Other information technology and computer service activities",
    "parentCode": "K629",
    "keywords": "Other information technology and computer service activities",
    "note": "This class includes other information technology and computer related activities not elsewhere classified, such as: - computer disaster recovery services - installation (setting-up) of personal computers - software installation services"
  },
  {
    "level": "Division",
    "code": "K63",
    "name": "Computing infrastructure, data processing, hosting, and other information service activities",
    "parentCode": "K",
    "keywords": "Computing infrastructure; data processing; hosting; and other information service activities",
    "note": "This division includes the provision of computing infrastructure, data processing and hosting activities, as well as activities of web search portals and other activities that primarily supply information."
  },
  {
    "level": "Group",
    "code": "K631",
    "name": "Computing infrastructure, data processing, hosting and related activities",
    "parentCode": "K63",
    "keywords": "Computing infrastructure; data processing; hosting and related activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "K6310",
    "name": "Computing infrastructure, data processing, hosting and related activities",
    "parentCode": "K631",
    "keywords": "Computing infrastructure; data processing; hosting and related activities",
    "note": "This class includes: - provision of computing infrastructure including cloud infrastructure and platform provision (IaaS, PaaS) - cloud computing (except software publishing and computer systems design), whether or not in combination with infrastructure provision - provision of technical infrastructure related to streaming services - data processing services and related activities: • complete processing of data supplied by clients • generation of specialized reports from data supplied by clients • blockchain/distributed ledger technology (DLT) data processing activities - specialized hosting activities such as: • web hosting • application hosting - general time-share provision of mainframe facilities to clients - digitalisation of files (for further processing of data) - provision of data entry services - data centre colocation activities (i.e., rental of server and networking space in data centres, ) - computer data storage services"
  },
  {
    "level": "Group",
    "code": "K639",
    "name": "Web search portals activities and other information service activities",
    "parentCode": "K63",
    "keywords": "Web search portals activities and other information service activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "K6390",
    "name": "Web search portals activities and other information service activities",
    "parentCode": "K639",
    "keywords": "Web search portals activities and other information service activities",
    "note": "This class includes: - operation of websites that use a search engine to generate and maintain extensive databases of Internet addresses and content in an easily searchable format; these web search portals are not responsible for the content operation of comparison websites for prices, product specification, etc., with provision of links to other websites - other information service activities not elsewhere classified, such as: * telephone based information services * information search services on a contract or fee basis * news clipping services, press clipping services, etc. * compiling of information or directories on a fee or contract basis"
  },
  {
    "level": "Section",
    "code": "L",
    "name": "Financial and insurance activities",
    "parentCode": "",
    "keywords": "Financial and insurance activities",
    "note": "This section includes financial service activities, insurance activities and financial auxiliary activities, regardless of the technologies used to conduct these activities or support services Three principal types of activities are classified in this section: raising, obtaining and providing funding in division 64, pooling of risk by underwriting insurance and annuities in division 65 and providing specialised services facilitating or supporting financial or insurance service activities in division 66."
  },
  {
    "level": "Division",
    "code": "L64",
    "name": "Financial service activities, except insurance and pension funding",
    "parentCode": "L",
    "keywords": "Financial service activities; except insurance and pension funding",
    "note": "This division includes the activities of obtaining and providing funds other than for the purpose of insurance or pension funding or compulsory social security."
  },
  {
    "level": "Group",
    "code": "L641",
    "name": "Monetary intermediation",
    "parentCode": "L64",
    "keywords": "Monetary intermediation",
    "note": "This group includes the obtaining and providing funds in the form of transferable deposits or close substitutes, i.e. funds that are fixed in money terms, obtained on a day-to-day basis and distributing these funds."
  },
  {
    "level": "Class",
    "code": "L6411",
    "name": "Central banking",
    "parentCode": "L641",
    "keywords": "Central banking",
    "note": "This class includes: - issuing and managing banknotes and digital currency - conducting the monetary policy - monitoring and control of the money supply - taking deposits that are used for clearance between monetary intermediaries - supervising banking or non-banking monetary operations, unless performed by some other entity - holding the country's international reserves - acting as banker to the government"
  },
  {
    "level": "Class",
    "code": "L6419",
    "name": "Other monetary intermediation",
    "parentCode": "L641",
    "keywords": "Other monetary intermediation",
    "note": "This class includes the receiving of deposits and/or close substitutes for deposits and extending of credit or other forms of lending funds. The granting of credit can take a variety of forms, such as loans mortgages, consumer credit cards etc. These activities are generally carried out by monetary institutions other than central banks, such as: - banks - savings banks - credit cooperatives and unions"
  },
  {
    "level": "Group",
    "code": "L642",
    "name": "Activities of holding companies and financing conduits",
    "parentCode": "L64",
    "keywords": "Activities of holding companies and financing conduits",
    "note": "This group includes the activities of holding companies and financing conduits. These are corporate groups’ captive financial entities, i.e., units created by a financial or non-financial group to fulfil specific financial activities, whose main activity it is to own the group or to act as a vehicle to arrange and channel funds within the group, respectively."
  },
  {
    "level": "Class",
    "code": "L6421",
    "name": "Activities of holding companies",
    "parentCode": "L642",
    "keywords": "Activities of holding companies",
    "note": "This class includes the activities of holding companies, i.e. units that hold the assets (owning controlling-levels of equity) of one or more subsidiaries and whose only purpose is owning subsidiaries. The holding companies in this class do not provide any other service to the enterprises in which the equity is held, i.e. they do not administer or manage other units."
  },
  {
    "level": "Class",
    "code": "L6422",
    "name": "Activities of financing conduits",
    "parentCode": "L642",
    "keywords": "Activities of financing conduits",
    "note": "This class includes the activities of financing conduits, i.e., units created by a financial or non-financial group to raise or borrow funds (often on the open market) and to remit those funds to their parent or another entity within the group"
  },
  {
    "level": "Group",
    "code": "L643",
    "name": "Activities of trusts, funds and similar financial entities",
    "parentCode": "L64",
    "keywords": "Activities of trusts; funds and similar financial entities",
    "note": "This group includes legal entities organized to pool securities or other financial assets, without managing, on behalf of shareholders or beneficiaries. The portfolios are customized to achieve specific investment characteristics, such as diversification, risk, rate of return and price volatility. These entities earn interest, dividends and other property income, but have little or no employment and no revenue from the sale of services This class includes: - open-end investment funds - closed-end investment funds - trusts, estates or agency accounts, administered on behalf of the beneficiaries under the terms of a trust agreement, will or agency agreement - unit investment trust funds"
  },
  {
    "level": "Class",
    "code": "L6431",
    "name": "Activities of money market funds",
    "parentCode": "L643",
    "keywords": "Activities of money market funds",
    "note": "This class includes activities of money market funds, i.e., collective investment schemes that raise funds by issuing shares or units to the public, of which the proceeds are invested primarily in short-term assets, i.e., assets with a remaining maturity of 1 year or less. Their units may be regarded as close substitutes for deposits."
  },
  {
    "level": "Class",
    "code": "L6432",
    "name": "Activities of non-money market investments funds",
    "parentCode": "L643",
    "keywords": "Activities of non-money market investments funds",
    "note": "This class includes activities of non-money market funds, i.e., collective investment schemes that raise funds by issuing shares or units to the public, of which proceeds are invested primarily in financial assets, other than short-term assets, and in non-financial assets (usually real estate). Their units (or shares) are not substitutes for deposits."
  },
  {
    "level": "Class",
    "code": "L6433",
    "name": "Activities of trust, estate and agency accounts",
    "parentCode": "L643",
    "keywords": "Activities of trust; estate and agency accounts",
    "note": "This class includes legal entities, not acting as collective investment schemes, organised to pool securities, estates and other financial assets, without managing, on behalf of shareholders or beneficiaries. The portfolios are customised to achieve specific investment characteristics, e.g. diversification, risk, rate of return and price volatility. These entities earn interest, dividends and other property income, but have little or no employment and no revenue from the sale of services. This class includes: - trusts, estates or agency accounts, administered on behalf of the beneficiaries under the terms of a trust agreement, will or agency agreement - activities of trusts, estates and similar financial entities - activities of companies holding financial assets for individuals and families (family trusts)"
  },
  {
    "level": "Group",
    "code": "L649",
    "name": "Other financial service activities, except insurance and pension funding activities",
    "parentCode": "L64",
    "keywords": "Other financial service activities; except insurance and pension funding activities",
    "note": "This group includes financial service activities except insurance and pension funding activities, other than those conducted by monetary institutions, holding companies and financing conduits, and trusts, funds and similar entities."
  },
  {
    "level": "Class",
    "code": "L6491",
    "name": "Financial leasing activities",
    "parentCode": "L649",
    "keywords": "Financial leasing activities",
    "note": "This class includes the activities of financing the purchase of an asset on behalf of a customer. The financer (the lessor) is the legal owner of the asset and the costumer (the lessee) carries the risk for the duration of the lease, which usually covers the expected life of the asset. The lessee acquires all the benefits of its use."
  },
  {
    "level": "Class",
    "code": "L6492",
    "name": "International trade financing activities",
    "parentCode": "L649",
    "keywords": "International trade financing activities",
    "note": "This class covers the provision of financial support often combined with additional services to assist entities in receiving and shipping goods to and from the rest of the world."
  },
  {
    "level": "Class",
    "code": "L6493",
    "name": "Factoring activities",
    "parentCode": "L649",
    "keywords": "Factoring activities",
    "note": "This class covers the activity of purchasing accounts receivable (i.e., invoices) from third parties at a discount."
  },
  {
    "level": "Class",
    "code": "L6494",
    "name": "Securitisation activities",
    "parentCode": "L649",
    "keywords": "Securitisation activities",
    "note": "This class covers activities to issue debt securities whose coupon and principal payments are backed by payments on specified assets or future income streams on assets that have not been originated by the issuing unit."
  },
  {
    "level": "Class",
    "code": "L6495",
    "name": "Other credit granting activities",
    "parentCode": "L649",
    "keywords": "Other credit granting activities",
    "note": "This class includes: - financial service activities primarily concerned with making loans by institutions not involved in monetary intermediation, where the granting of credit can take a variety of forms, such as loans, mortgages, credit cards etc., providing the following types of services: • granting of consumer credit • provision of long-term finance to industry • money lending outside the banking system • credit granting by specialised non-depository institutions, e.g., for house purchases • short-term financing for corporate mergers and takeovers • activities of pawnbrokers"
  },
  {
    "level": "Class",
    "code": "L6499",
    "name": "Other financial service activities n.e.c., except insurance and pension funding activities",
    "parentCode": "L649",
    "keywords": "Other financial service activities n.e.c.; except insurance and pension funding activities",
    "note": "This class includes: - other financial service activities primarily concerned with distributing funds other than by granting loans: • writing of swaps, options and other hedging arrangements • activities of viatical settlement companies - own-account investment and trading activities, by e.g. venture capital companies or investment clubs - acting as a counterparty for clearing and settlement of transactions"
  },
  {
    "level": "Division",
    "code": "L65",
    "name": "Insurance, reinsurance and pension funding, except compulsory social security",
    "parentCode": "L",
    "keywords": "Insurance; reinsurance and pension funding; except compulsory social security",
    "note": "The division includes the underwriting annuities, insurance policies such as direct life and non-life insurance and investing premiums to build up a portfolio of financial assets to be used against future claims. Provision of direct insurance, pension funding and reinsurance are included."
  },
  {
    "level": "Group",
    "code": "L651",
    "name": "Insurance",
    "parentCode": "L65",
    "keywords": "Insurance",
    "note": "This group includes life reinsurance with or without a substantial savings element and other non-life insurance. This group includes: - life insurance and life reinsurance with or without a substantial savings element and other non-life insurance - life insurance, with or without a substantial savings element, and non-life insurance - activities of insurance providers on own account - pooling and assuming insurance risks"
  },
  {
    "level": "Class",
    "code": "L6511",
    "name": "Life insurance",
    "parentCode": "L651",
    "keywords": "Life insurance",
    "note": "This class includes: - Term life insurance - Permanent life insurance - underwriting annuities and life insurance policies, disability income insurance policies, accidental death, funeral and dismemberment insurance policies (with or without a substantial savings element)"
  },
  {
    "level": "Class",
    "code": "L6512",
    "name": "Non-life insurance",
    "parentCode": "L651",
    "keywords": "Non-life insurance",
    "note": "This class includes: - provision of insurance services other than life insurance: • accident insurance • fire and natural forces damage to property insurance • medical and health insurance • travel insurance • property insurance • motor vehicles, railway rolling stock, ships, aircraft and other transport insurance - freight insurance • financial loss and liability insurance - - credit insurance - - legal expenses insurance - - income protection insurance - - workers' compensation insurance"
  },
  {
    "level": "Group",
    "code": "L652",
    "name": "Reinsurance",
    "parentCode": "L65",
    "keywords": "Reinsurance",
    "note": ""
  },
  {
    "level": "Class",
    "code": "L6520",
    "name": "Reinsurance",
    "parentCode": "L652",
    "keywords": "Reinsurance",
    "note": "This class includes: - activities of assuming all or part of the risk associated with existing insurance policies originally underwritten by other insurance providers"
  },
  {
    "level": "Group",
    "code": "L653",
    "name": "Pension funding",
    "parentCode": "L65",
    "keywords": "Pension funding",
    "note": ""
  },
  {
    "level": "Class",
    "code": "L6530",
    "name": "Pension funding",
    "parentCode": "L653",
    "keywords": "Pension funding",
    "note": "This class includes provision of retirement income benefits exclusively for the sponsor's employees or members. This includes pension plans with defined benefits as well as defined contributions This class includes: - provision of employee benefit plans - provision of pension funds and plans - provision of retirement plans"
  },
  {
    "level": "Division",
    "code": "L66",
    "name": "Activities auxiliary to financial service and insurance activities",
    "parentCode": "L",
    "keywords": "Activities auxiliary to financial service and insurance activities",
    "note": "This division includes the provision of services involved in or supporting financial transactions in financial assets and liabilities, without taking ownership of the financial assets and liabilities being transacted, but not themselves providing financial services. These services can be provided via/in different media/ways, including over the Internet."
  },
  {
    "level": "Group",
    "code": "L661",
    "name": "Activities auxiliary to financial services, except insurance and pension funding",
    "parentCode": "L66",
    "keywords": "Activities auxiliary to financial services; except insurance and pension funding",
    "note": "This group includes the furnishing of physical or electronic marketplaces for the purpose of facilitating the buying and selling of stocks, stock options, bonds or commodity contracts, and trading of crypto assets with a corresponding liability. It also includes the provision of advisory services and well as the provision of equity and debt-based crowdfunding."
  },
  {
    "level": "Class",
    "code": "L6611",
    "name": "Administration of financial markets",
    "parentCode": "L661",
    "keywords": "Administration of financial markets",
    "note": "This class includes the operation and supervision of financial markets other than central banks such as: - commodity contracts exchanges - futures commodity contracts exchanges - securities exchanges - stock exchanges - stock or commodity options exchanges - crypto assets exchange - - administration of financial markets except insurance and pension funding - - financial supervisory authority of financial service activities except insurance and pending funding (not by the central bank)"
  },
  {
    "level": "Class",
    "code": "L6612",
    "name": "Security and commodity contracts brokerage",
    "parentCode": "L661",
    "keywords": "Security and commodity contracts brokerage",
    "note": "This class includes: - dealing in financial markets on behalf of others (e.g. stock broking) and related activities - securities brokerage - brokerage of investment funds shares - Standardized commodity contracts brokerage - currency trading on behalf of others - trade and brokerage of crypto assets with liabilities - activities of bureaux de change - equity-based crowdfunding - debt-based crowdfunding offering securities"
  },
  {
    "level": "Class",
    "code": "L6619",
    "name": "Other activities auxiliary to financial service activities, except insurance and pension funding",
    "parentCode": "L661",
    "keywords": "Other activities auxiliary to financial service activities; except insurance and pension funding",
    "note": "This class includes activities auxiliary financial service activities not elsewhere classified, e.g.: - financial transaction processing and settlement activities, including digital (or internet based) payment provision and settlement activities for credit card transactions - investment advisory services including robo-advisory services - activities of mortgage and loan advisors - activities of digital currency wallet providers - activities of financial advisors in relation to mergers and acquisition services - validation and mining for crypto assets deemed financial assets - securities custody - tokenization of digital assets including security token offerings, initial coin offerings"
  },
  {
    "level": "Group",
    "code": "L662",
    "name": "Activities auxiliary to insurance and pension funding",
    "parentCode": "L66",
    "keywords": "Activities auxiliary to insurance and pension funding",
    "note": "This group includes acting as agents (i.e. brokers) in selling annuities and insurance policies or provide other employee benefits and insurance and pension related services such as claims adjustment and third party administration."
  },
  {
    "level": "Class",
    "code": "L6621",
    "name": "Risk and damage evaluation",
    "parentCode": "L662",
    "keywords": "Risk and damage evaluation",
    "note": "This class includes the provision of administration services of insurance, such as assessing and settling insurance claims, e.g.: - assessing insurance claims • claims adjusting • risk assessing • risk and damage evaluation • average and loss adjusting - settling insurance claims"
  },
  {
    "level": "Class",
    "code": "L6622",
    "name": "Activities of insurance agents and brokers",
    "parentCode": "L662",
    "keywords": "Activities of insurance agents and brokers",
    "note": "This class includes: - activities of insurance agents and brokers (insurance intermediaries) in selling, negotiating or soliciting of annuities and insurance and reinsurance policies"
  },
  {
    "level": "Class",
    "code": "L6629",
    "name": "Other activities auxiliary to insurance and pension funding",
    "parentCode": "L662",
    "keywords": "Other activities auxiliary to insurance and pension funding",
    "note": "This class includes: - activities involved in or closely related to insurance and pension funding (except financial intermediation, claims adjusting and activities of insurance agents): • salvage administration • actuarial services • pension and insurance advisory activities • • administration of financial markets for insurance and pension funding"
  },
  {
    "level": "Group",
    "code": "L663",
    "name": "Fund management activities",
    "parentCode": "L66",
    "keywords": "Fund management activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "L6630",
    "name": "Fund management activities",
    "parentCode": "L663",
    "keywords": "Fund management activities",
    "note": "This class includes portfolio and fund management activities, for instance making decisions on which investments to purchase or sell, on a fee or contract basis, for individuals, businesses and others, e.g.: - management of mutual funds - management of other investment funds - management of pension funds"
  },
  {
    "level": "Section",
    "code": "M",
    "name": "Real estate activities",
    "parentCode": "",
    "keywords": "Real estate activities",
    "note": "This section includes activities of owning, renting out, buying, selling, developing or refurbishing (re-developing) property. It includes various types of real estate investors, e.g. real estate investment companies, real estate investment trust (REITs), real estate asset management firms, real estate funds, real estate development companies or real estate traders, housing cooperatives. Furthermore, it includes agents and/or brokers in one or more of the following: selling or buying real estate, rental real estate, providing other real estate services such as appraising real estate or acting as real estate escrow agents. Activities in this section may be carried out on own or leased property and may be done on a fee or contract basis."
  },
  {
    "level": "Division",
    "code": "M68",
    "name": "Real estate activities",
    "parentCode": "M",
    "keywords": "Real estate activities",
    "note": ""
  },
  {
    "level": "Group",
    "code": "M681",
    "name": "Real estate activities with own or leased property",
    "parentCode": "M68",
    "keywords": "Real estate activities with own or leased property",
    "note": ""
  },
  {
    "level": "Class",
    "code": "M6810",
    "name": "Real estate activities with own or leased property",
    "parentCode": "M681",
    "keywords": "Real estate activities with own or leased property",
    "note": "This class includes: - renting and operating of self-owned or leased real estate, such as: * apartment buildings and dwellings * non-residential buildings, including office buildings, coworking space, exhibition halls, self-storage facilities, malls and shopping centers, data centers * land, including agricultural and forestry land - provision of homes and furnished or unfurnished flats or apartments for more permanent use, on an annual basis or longer - operation of residential mobile home sites for primary residences - development of building projects for own operation, i.e. for renting of space in these buildings - development of building projects for sale"
  },
  {
    "level": "Group",
    "code": "M682",
    "name": "Real estate activities on a fee or contract basis",
    "parentCode": "M68",
    "keywords": "Real estate activities on a fee or contract basis",
    "note": ""
  },
  {
    "level": "Class",
    "code": "M6821",
    "name": "Intermediation service activities for real estate",
    "parentCode": "M682",
    "keywords": "Intermediation service activities for real estate",
    "note": "This class includes the intermediation of buying, selling and rental of real estate by bringing clients and sellers or service providers together for a fee or commission. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the client or the seller of the real estate or the provider of the real estate service. Revenue for the intermediation activities can include other sources of income, such as revenues from selling advertising space to third parties. This class includes the provision of real estate activities by real estate agencies or independent real estate agents: - intermediation in buying, selling and rental of real estate on a fee or contract basis"
  },
  {
    "level": "Class",
    "code": "M6829",
    "name": "Other real estate activities on a fee or contract basis",
    "parentCode": "M682",
    "keywords": "Other real estate activities on a fee or contract basis",
    "note": "This class includes: - activities of rent-collecting agencies - management of real estate, e.g. property management of real estate or dwellings in joint ownership (mostly done on a fee or contract basis) - activities of valuation of real estate, appraisal services - activities of real estate escrow agents -advisory activities on a fee or contract basis, in connection to buying, selling and rental of real estate"
  },
  {
    "level": "Section",
    "code": "N",
    "name": "Professional, scientific and technical activities",
    "parentCode": "",
    "keywords": "Professional; scientific and technical activities",
    "note": "This section includes specialised professional, scientific and technical activities. These activities require a high degree of training, and make specialised knowledge and skills available to users."
  },
  {
    "level": "Division",
    "code": "N69",
    "name": "Legal and accounting activities",
    "parentCode": "N",
    "keywords": "Legal and accounting activities",
    "note": "This division includes legal representation of one party's interest against another party, whether or not before courts or other judicial bodies by, or under supervision of, persons who are members of the bar, such as advice and representation in civil cases, advice and representation in criminal actions, advice and representation in connection with labour disputes. The activities of this division may be provided also online."
  },
  {
    "level": "Group",
    "code": "N691",
    "name": "Legal activities",
    "parentCode": "N69",
    "keywords": "Legal activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N6910",
    "name": "Legal activities",
    "parentCode": "N691",
    "keywords": "Legal activities",
    "note": "This class includes: - legal representation of one party's interest against another party, whether or not before courts or other judicial bodies by, or under supervision of, persons who are members of the bar: • advice and representation in civil cases • advice and representation in criminal cases • advice and representation in connection with labour disputes - general counselling and advising, preparation of legal documents: • articles of incorporation, partnership agreements or similar documents in connection with company • formation • patents and copyrights • preparation of deeds, wills, trusts etc. - other activities of notaries public, civil law notaries, bailiffs, arbitrators, examiners and referees"
  },
  {
    "level": "Group",
    "code": "N692",
    "name": "Accounting, bookkeeping and auditing activities; tax consultancy",
    "parentCode": "N69",
    "keywords": "Accounting; bookkeeping and auditing activities; tax consultancy",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N6920",
    "name": "Accounting, bookkeeping and auditing activities; tax consultancy",
    "parentCode": "N692",
    "keywords": "Accounting; bookkeeping and auditing activities; tax consultancy",
    "note": "This class includes: -recording of commercial transactions from businesses or others - bookkeeping activities for financial accounting and payroll accounting etc. - preparation or auditing of financial accounts - examination of accounts and certification of their accuracy - preparation of tax returns for individuals or enterprises - accounting advisory activities and representation on behalf of clients before tax authorities or tax courts - duty and tax tariff calculation service activities"
  },
  {
    "level": "Division",
    "code": "N70",
    "name": "Activities of head offices; management consultancy activities",
    "parentCode": "N",
    "keywords": "Activities of head offices; management consultancy activities",
    "note": "This division includes the provision of advice and assistance to businesses and other organisations on management issues, such as strategic and organisational planning; financial planning and budgeting; marketing objectives and policies; human resources policies, practices, and planning; production scheduling; and control planning."
  },
  {
    "level": "Group",
    "code": "N701",
    "name": "Activities of head offices",
    "parentCode": "N70",
    "keywords": "Activities of head offices",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7010",
    "name": "Activities of head offices",
    "parentCode": "N701",
    "keywords": "Activities of head offices",
    "note": "This class includes: the overseeing and managing of other units of the enterprise or enterprise group i.e. acting as head office; undertaking the strategic or organisational planning and decision making role of the company or enterprise; exercising operational control and managing the day-to-day operations of their related units. These activities are the same regardless of which activities the managed units perform (financing, manufacturing trade, etc. This class includes activities of: - centralised administrative offices - corporate offices - district and regional offices - subsidiary management offices"
  },
  {
    "level": "Group",
    "code": "N702",
    "name": "Business and other management consultancy activities",
    "parentCode": "N70",
    "keywords": "Business and other management consultancy activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7020",
    "name": "Business and other management consultancy activities",
    "parentCode": "N702",
    "keywords": "Business and other management consultancy activities",
    "note": "This class includes the provision of advice, guidance and operational assistance to businesses and other organizations on management issues, such as strategic and organizational planning; decision areas that are financial in nature; marketing objectives and policies; human resource policies, practices and planning; production scheduling and control planning. This provision of business services may include advice, guidance or operational assistance to businesses and the public service regarding: - lobbying activities - design of accounting methods or procedures, cost accounting programmes, budgetary control procedures - advice and help to businesses and public services in planning, organization, efficiency and control, management information etc. - occupational health and safety consulting, e.g identification and documentation of risks"
  },
  {
    "level": "Division",
    "code": "N71",
    "name": "Architectural and engineering activities; technical testing and analysis",
    "parentCode": "N",
    "keywords": "Architectural and engineering activities; technical testing and analysis",
    "note": "This division includes the provision of architectural services, engineering services, drafting services, building inspection services and surveying and mapping services."
  },
  {
    "level": "Group",
    "code": "N711",
    "name": "Architectural and engineering, and related technical consultancy activities",
    "parentCode": "N71",
    "keywords": "Architectural and engineering; and related technical consultancy activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7110",
    "name": "Architectural and engineering, and related technical consultancy activities",
    "parentCode": "N711",
    "keywords": "Architectural and engineering; and related technical consultancy activities",
    "note": "This class includes the provision of architectural services, engineering services, drafting services, building inspection services and surveying and mapping services and the like. This class includes: - architectural consulting activities: • building design and drafting • town and city planning and landscape architecture - engineering design (i.e. applying physical laws and principles of engineering in the design of machines, materials, instruments, structures, processes and systems) and consulting activities for: • machinery, industrial processes and industrial plant • projects involving civil engineering, hydraulic engineering, traffic engineering • water management projects • projects elaboration and realization relative to electrical and electronic engineering, mining engineering, chemical engineering, mechanical, industrial and systems engineering, safety engineering • project management activities related to construction - elaboration of projects using air conditioning, refrigeration, sanitary and pollution control engineering, acoustical engineering etc. - geophysical, geologic and seismic surveying - geodetic surveying activities: • land and boundary surveying activities • hydrologic surveying activities • subsurface surveying activities • cartographic and spatial information activities"
  },
  {
    "level": "Group",
    "code": "N712",
    "name": "Technical testing and analysis",
    "parentCode": "N71",
    "keywords": "Technical testing and analysis",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7120",
    "name": "Technical testing and analysis",
    "parentCode": "N712",
    "keywords": "Technical testing and analysis",
    "note": "This class includes: - performance of physical, chemical and other analytical testing of all types of materials and products, such as: • acoustics and vibration testing • testing of composition and purity of minerals etc. • testing activities in the field of food hygiene, including testing and control in relation to food production, e.g. testing of animals before slaughter • testing of physical characteristics and performance of materials, such as strength, thickness, durability, radioactivity etc. • qualification and reliability testing • performance testing of complete machinery: motors, automobiles, electronic equipment etc. • radiographic testing of welds and joints • failure analysis • testing and measuring of environmental indicators: air and water pollution etc. • testing the quality of fuels - certification of products, including consumer goods, motor vehicles, aircraft, pressurised containers, nuclear plants etc. - certification of consumer goods - periodic road-safety testing of motor vehicles - testing with use of models or mock-ups (e.g. of aircraft, ships, dams etc.) - operation of police or forensic laboratories - product origin and quality assessment activities"
  },
  {
    "level": "Division",
    "code": "N72",
    "name": "Scientific research and development",
    "parentCode": "N",
    "keywords": "Scientific research and development",
    "note": "This division includes the activities of three types of research and development: (1) basic research: experimental or theoretical work undertaken primarily to acquire new knowledge of the underlying foundations of phenomena and observable facts, without particular application or use in view, (2) applied research: original investigation undertaken in order to acquire new knowledge, directed primarily towards a specific practical aim or objective and (3) experimental development: systematic work, drawing on existing knowledge gained from research and/or practical experience, directed to producing new materials, products and devices, to installing new processes, systems and services, and to improving substantially those already produced or installed. Research and experimental development activities in this division are not to be regarded as ancillary activities. They are subdivided into the two following two categories: natural sciences and engineering; social sciences and the humanities."
  },
  {
    "level": "Group",
    "code": "N721",
    "name": "Research and experimental development on natural sciences and engineering",
    "parentCode": "N72",
    "keywords": "Research and experimental development on natural sciences and engineering",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7210",
    "name": "Research and experimental development on natural sciences and engineering",
    "parentCode": "N721",
    "keywords": "Research and experimental development on natural sciences and engineering",
    "note": "This class includes: - research and experimental development on natural sciences and engineering: • research and development on natural sciences • research and development on engineering and technology • research and development on medical, health and life, and veterinary sciences • research and development on biotechnology • research and development on agricultural, forestry and fisheries sciences • interdisciplinary research and development, predominantly on natural sciences and engineering"
  },
  {
    "level": "Group",
    "code": "N722",
    "name": "Research and experimental development on social sciences and humanities",
    "parentCode": "N72",
    "keywords": "Research and experimental development on social sciences and humanities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7220",
    "name": "Research and experimental development on social sciences and humanities",
    "parentCode": "N722",
    "keywords": "Research and experimental development on social sciences and humanities",
    "note": "This class includes: - research and development on social sciences (e.g., economics and business administration; psychology and cognitive sciences; education; sociology; law; political sciences; media and communication; etc.) - research and development on humanities and arts (e.g., history and archeology; literature and languages; philosophy; etc.) - interdisciplinary research and development, predominantly on social sciences and humanities"
  },
  {
    "level": "Division",
    "code": "N73",
    "name": "Activities of advertising, market research and public relations",
    "parentCode": "N",
    "keywords": "Activities of advertising; market research and public relations",
    "note": "This division includes the creation of advertising campaigns and placement of such advertising in periodicals, newspapers, radio and television, on the Internet, or other media as well as the design of display structures and sites. These advertising activities are often provided via advertising agencies and media representatives. The division includes activities of provision of information about markets for goods and services and provision of information about public relations and public opinion polling activities, which may be based on the collection and analysis of original data, or on the research and analysis of existing data."
  },
  {
    "level": "Group",
    "code": "N731",
    "name": "Advertising activities",
    "parentCode": "N73",
    "keywords": "Advertising activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7310",
    "name": "Advertising activities",
    "parentCode": "N731",
    "keywords": "Advertising activities",
    "note": "This class includes the creation of advertising campaigns and placement of such advertising in periodicals, newspapers, radio and television, on the Internet, or other media as well as the design of display structures and sites. These advertising activities are often provided via advertising agencies and media representatives. This class includes: - creation and realization of advertising campaigns: • creating and placing advertising in newspapers and periodicals, on radio and television, over the Internet and in/or other media • creating and placing of outdoor advertising, e.g. billboards, panels, bulletins and frames, window dressing, showroom design, car and bus carding etc. • media representation, i.e. sale of time and space for various media soliciting advertising • aerial advertising • distribution or delivery of advertising material or samples • provision of advertising space on billboards etc. • creation of stands and other display structures and sites - conducting marketing campaigns and other advertising services aimed at attracting and retaining customers: • promotion of products • point-of-sale marketing • direct mail advertising • marketing consulting"
  },
  {
    "level": "Group",
    "code": "N732",
    "name": "Market research and public opinion polling activities",
    "parentCode": "N73",
    "keywords": "Market research and public opinion polling activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7320",
    "name": "Market research and public opinion polling activities",
    "parentCode": "N732",
    "keywords": "Market research and public opinion polling activities",
    "note": "This class includes: - conducting market research studies on the awareness, evaluation and use of goods and services, on product development and pricing, on the use of media and on the recall and impact of advertising - conducting studies of opinion research on the quality of life and lifestyles, on social participation and political participation, on party preference and voting behavior This class also includes scientific conducting of market and opinion research with a - qualitative and quantitative methodological orientation; - reactive and non-reactive survey procedures; - collection of research data through questioning, observation, measurement and counting; - face-to-face, postal, telephone and online interviews to collect research data."
  },
  {
    "level": "Group",
    "code": "N733",
    "name": "Public relations activities",
    "parentCode": "N73",
    "keywords": "Public relations activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7330",
    "name": "Public relations activities",
    "parentCode": "N733",
    "keywords": "Public relations activities",
    "note": "This class includes the provision of advice, guidance and operational assistance, including lobbying activities, to businesses and other organisations on public relations and communication."
  },
  {
    "level": "Division",
    "code": "N74",
    "name": "Other professional, scientific and technical activities",
    "parentCode": "N",
    "keywords": "Other professional; scientific and technical activities",
    "note": "This division includes the provision of professional scientific and technical services (except legal and accounting activities; architecture and engineering activities; technical testing and analysis; management and management consultancy activities; research and development and advertising activities)."
  },
  {
    "level": "Group",
    "code": "N741",
    "name": "Specialized design activities",
    "parentCode": "N74",
    "keywords": "Specialized design activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7410",
    "name": "Specialized design activities",
    "parentCode": "N741",
    "keywords": "Specialized design activities",
    "note": "This class includes: - fashion design related to textiles, wearing apparel, shoes, jewelry, furniture and other interior decoration and other fashion goods as well as other personal or household goods - industrial design, carried out also through specialised software, i.e. creating and developing designs and specifications that optimize the use, value and appearance of products, including the determination of the materials, construction, mechanism, shape, colour and surface finishes of the product, taking into consideration human characteristics and needs, safety, market appeal and efficiency in production, distribution, use and maintenance - activities of graphic designers - activities of interior decorators"
  },
  {
    "level": "Group",
    "code": "N742",
    "name": "Photographic activities",
    "parentCode": "N74",
    "keywords": "Photographic activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7420",
    "name": "Photographic activities",
    "parentCode": "N742",
    "keywords": "Photographic activities",
    "note": "This class includes: - commercial and consumer photograph production: • portrait photography for passports, schools, weddings etc. • photography for commercials, publishers, fashion, real estate or tourism purposes • aerial and underwater photography • videotaping of events: weddings, meetings etc. - film processing: • developing, printing and enlarging from client-taken negatives or cine-films • film developing and photo printing laboratories • one hour photo shops (not part of camera stores) • mounting of slides • copying and restoring or transparency retouching in connection with photographs - activities of photojournalists - activity of artistic photographs"
  },
  {
    "level": "Group",
    "code": "N743",
    "name": "Translation and interpretation activities",
    "parentCode": "N74",
    "keywords": "Translation and interpretation activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7430",
    "name": "Translation and interpretation activities",
    "parentCode": "N743",
    "keywords": "Translation and interpretation activities",
    "note": "This class includes: - translation and interpretation of all languages, including sign language, whether spoken or written"
  },
  {
    "level": "Group",
    "code": "N749",
    "name": "Other professional, scientific and technical activities n.e.c.",
    "parentCode": "N74",
    "keywords": "Other professional; scientific and technical activities n.e.c.",
    "note": "This group includes patent brokering and marketing service activities, and other professional, scientific and technical activities n.e.c."
  },
  {
    "level": "Class",
    "code": "N7491",
    "name": "Patent brokering and marketing service activities",
    "parentCode": "N749",
    "keywords": "Patent brokering and marketing service activities",
    "note": "This class includes: - brokering and marketing activities on patents"
  },
  {
    "level": "Class",
    "code": "N7499",
    "name": "All other professional, scientific and technical activities n.e.c.",
    "parentCode": "N749",
    "keywords": "All other professional; scientific and technical activities n.e.c.",
    "note": "This class includes a great variety of service activities generally delivered to commercial clients. It includes those activities for which more advanced professional, scientific and technical skill levels are required, but does not include ongoing, routine business functions that are generally of short duration. This class includes: - business brokerage activities, i.e. arranging for the purchase and sale of small and medium-sized businesses, including professional practices, but not including real estate brokerage - appraisal activities other than for real estate and insurance (for antiques, jewellery, etc.) - bill auditing and freight rate information - weather forecasting activities - security consulting - consulting in the area of occupational safety at workplace - agronomy consulting services - environmental consulting activities - energy saving advice activities - other technical consulting - activities of consultants other than architecture, engineering and management consultants - activities of quantity surveyors - activities of construction economists"
  },
  {
    "level": "Division",
    "code": "N75",
    "name": "Veterinary activities",
    "parentCode": "N",
    "keywords": "Veterinary activities",
    "note": "This division includes the provision of animal health care and control activities for farm animals or pet animals. These activities are carried out by qualified veterinarians in veterinary hospitals as well as when visiting farms, kennels or homes, in own consulting and surgery rooms or elsewhere."
  },
  {
    "level": "Group",
    "code": "N750",
    "name": "Veterinary activities",
    "parentCode": "N75",
    "keywords": "Veterinary activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "N7500",
    "name": "Veterinary activities",
    "parentCode": "N750",
    "keywords": "Veterinary activities",
    "note": "This class includes: - animal health care and control activities for farm animals - animal health care and control activities for pet animals - These activities are carried out in veterinary hospitals as well as when visiting farms, kennels or homes, in own consulting and surgery rooms or elsewhere."
  },
  {
    "level": "Section",
    "code": "O",
    "name": "Administrative and support service activities",
    "parentCode": "",
    "keywords": "Administrative and support service activities",
    "note": "This section includes a variety of activities that support general business operations. These activities differ from those in section N, since their primary purpose is not the transfer of specialised knowledge."
  },
  {
    "level": "Division",
    "code": "O77",
    "name": "Rental and leasing activities",
    "parentCode": "O",
    "keywords": "Rental and leasing activities",
    "note": "This division includes the rental and leasing of tangible and non-financial intangible assets and the intermediation service activities for rental and leasing thereof. For leasing activities, only the provision of operating leases is included in this division. The renter or lessor has the economic risk for the tangible goods and non-financial intangible assets provided, whereas the intermediator has no economic risk for the tangible goods and non-financial intangible assets that are intermediated. In the division, a wide array of tangible goods are concerned, such as automobiles, computers, consumer goods, and industrial machinery and equipment, to customers in return for a periodic rental or lease payment."
  },
  {
    "level": "Group",
    "code": "O771",
    "name": "Rental and leasing of motor vehicles",
    "parentCode": "O77",
    "keywords": "Rental and leasing of motor vehicles",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O7710",
    "name": "Rental and leasing of motor vehicles",
    "parentCode": "O771",
    "keywords": "Rental and leasing of motor vehicles",
    "note": "This class includes: - renting and operational leasing of the following types of vehicles: • passenger cars (without drivers) • trucks, motor caravans, utility trailers and recreational vehicles"
  },
  {
    "level": "Group",
    "code": "O772",
    "name": "Rental and leasing of personal and household goods",
    "parentCode": "O77",
    "keywords": "Rental and leasing of personal and household goods",
    "note": "This group includes the rental of personal and household goods as well as rental of recreational and sports equipment and video discs. Activities generally include short-term rental of goods although in some instances, the goods may be leased for longer periods of time."
  },
  {
    "level": "Class",
    "code": "O7721",
    "name": "Rental and leasing of recreational and sports goods",
    "parentCode": "O772",
    "keywords": "Rental and leasing of recreational and sports goods",
    "note": "This class includes rental of recreational and sports equipment e.g.: - pleasure boats, canoes, sailboats and yachts without operator - bicycles, including bicycles with electrical assistance - beach chairs and umbrellas - skis - other sports equipment"
  },
  {
    "level": "Class",
    "code": "O7729",
    "name": "Rental and leasing of other personal and household goods",
    "parentCode": "O772",
    "keywords": "Rental and leasing of other personal and household goods",
    "note": "This class includes: - rental of all kinds of household or personal goods, to households or industries (except recreational and sports equipment): • textiles, wearing apparel and footwear, e.g curtains, costumes, wedding dresses and shoes etc. • furniture, pottery and glass, kitchen and tableware, electrical appliances and house wares • jewellery, musical instruments, scenery and costumes • books, journals and magazines • machinery and equipment used by amateurs e.g. tools for home repairs • flowers and plants • electronic equipment for household use - rental of video games, video discs, records, etc. - rental of gazebos and tensile structures without additional services"
  },
  {
    "level": "Group",
    "code": "O773",
    "name": "Rental and leasing of other machinery, equipment and tangible goods",
    "parentCode": "O77",
    "keywords": "Rental and leasing of other machinery; equipment and tangible goods",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O7730",
    "name": "Rental and leasing of other machinery, equipment and tangible goods",
    "parentCode": "O773",
    "keywords": "Rental and leasing of other machinery; equipment and tangible goods",
    "note": "This class includes: - renting and operational leasing, without operator, of other machinery and equipment that are generally used as capital goods by industries: • engines and turbines • machine tools • mining and oilfield equipment • professional radio, television and communication equipment • motion picture production equipment • measuring and controlling equipment • other scientific, commercial and industrial machinery • renting and operational leasing of land-transport equipment other than motor vehicles and motorcycleswithout drivers, such as railroad vehicles • - renting and operational leasing of water-transport equipment without operator: • commercial boats and ships - renting and operational leasing of air transport equipment without operator: • airplanes • hot-air balloons - renting and operational leasing of agricultural and forestry machinery and equipment without operator: • renting of products produced by class 2821, such as agricultural tractors etc. - renting and operational leasing of construction and civil-engineering machinery and equipment without operator: • crane lorries • scaffolds and work platforms, without erection and dismantling - renting and operational leasing of office machinery and equipment without operator: • computers and computer peripheral equipment • duplicating machines, typewriters and word-processing machines • accounting machinery and equipment: cash registers, electronic calculators etc. • office furniture"
  },
  {
    "level": "Group",
    "code": "O774",
    "name": "Leasing of intellectual property and similar products, except copyrighted works",
    "parentCode": "O77",
    "keywords": "Leasing of intellectual property and similar products; except copyrighted works",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O7740",
    "name": "Leasing of intellectual property and similar products, except copyrighted works",
    "parentCode": "O774",
    "keywords": "Leasing of intellectual property and similar products; except copyrighted works",
    "note": "This class includes the activities of allowing others to use intellectual property products and similar products for which a royalty payment or licensing fee is paid to the owner of the product (i.e. the asset holder). The leasing of these products can take various forms, such as permission for reproduction, use in subsequent processes or products, operating businesses under a franchise etc. The current owners may or may not have created these products. This class includes: - leasing of intellectual property products (except copyrighted works, such as books or software) - receiving royalties or licensing fees for the use of: • patented entities • trademarks or service marks • brand names • mineral exploration and evaluation • franchise agreements • internet domains • rights of designed or developed board games"
  },
  {
    "level": "Group",
    "code": "O775",
    "name": "Intermediation service activities for rental and leasing of tangible goods and non-financial intangible assets",
    "parentCode": "O77",
    "keywords": "Intermediation service activities for rental and leasing of tangible goods and non-financial intangible assets",
    "note": "This group includes intermediation service activities for rental and leasing of tangible goods (such as cars, motorhomes and trailers) and non-financial intangible assets"
  },
  {
    "level": "Class",
    "code": "O7751",
    "name": "Intermediation service activities for rental and leasing of cars, motorhomes and trailers",
    "parentCode": "O775",
    "keywords": "Intermediation service activities for rental and leasing of cars; motorhomes and trailers",
    "note": "This class includes the intermediation of the rental and leasing of cars, motorhomes and trailers, by bringing clients and service providers together for a fee or commission, without the intermediary providing the rental and leasing services that are intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the client or the provider of the rental and leasing service. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising."
  },
  {
    "level": "Class",
    "code": "O7752",
    "name": "Intermediation service activities for rental and leasing of other tangible goods and non-financial intangible assets",
    "parentCode": "O775",
    "keywords": "Intermediation service activities for rental and leasing of other tangible goods and non-financial intangible assets",
    "note": "This class includes the intermediation of the rental and leasing of other tangible goods and non-financial intangible assets, by bringing clients and service providers together for a fee or commission, without the intermediary providing the rental and leasing services that are intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the client or the provider of the rental and leasing service. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising. This class includes: - providing intermediation between households that offer their goods for rental and households renting the goods, e.g. lawn movers, ladders, bicycles."
  },
  {
    "level": "Division",
    "code": "O78",
    "name": "Employment activities",
    "parentCode": "O",
    "keywords": "Employment activities",
    "note": "This division includes activities of listing employment vacancies and referring or placing applicants for employment, where the individuals referred or placed are not employees of the employment agencies, supplying workers to clients' businesses for periods of time to supplement the working force of the client, and the activities of providing other human resources. This division includes: - personnel search and placement activities - activities of theatrical casting agencies - activities of recruitment agencies - headhunting activities"
  },
  {
    "level": "Group",
    "code": "O781",
    "name": "Activities of employment placement agencies",
    "parentCode": "O78",
    "keywords": "Activities of employment placement agencies",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O7810",
    "name": "Activities of employment placement agencies",
    "parentCode": "O781",
    "keywords": "Activities of employment placement agencies",
    "note": "This class includes listing employment vacancies and referring or placing applicants for employment, where the individuals referred or placed are not employees of the employment agencies. This class includes: - personnel search, selection referral and placement activities, including executive placement and search activities - activities of casting agencies and bureaus, e.g. theatrical casting and model agencies - activities of on-line employment placement agencies"
  },
  {
    "level": "Group",
    "code": "O782",
    "name": "Temporary employment agency activities and other human resource provisions",
    "parentCode": "O78",
    "keywords": "Temporary employment agency activities and other human resource provisions",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O7820",
    "name": "Temporary employment agency activities and other human resource provisions",
    "parentCode": "O782",
    "keywords": "Temporary employment agency activities and other human resource provisions",
    "note": "This class includes the activities of supplying workers to clients' businesses for specific periods of time to temporarily replace or supplement the working force of the client. In that employment arrangement, the temporary employment agency or human resource providers are the employers of the individual workers provided. However, the clients are responsible for the supervision of temporary personnel. The activities are providing human resources for client businesses. The units classified here represent the employer of record for the employees on matters relating to payroll, taxes, and other fiscal and human resource issues, but they are not responsible for direction and supervision of employees. The units classified here perform a wide range of human resource and personnel management duties associated with this provision."
  },
  {
    "level": "Division",
    "code": "O79",
    "name": "Travel agency, tour operator, and other travel related activities",
    "parentCode": "O",
    "keywords": "Travel agency; tour operator; and other travel related activities",
    "note": "This division includes the activity of agencies, primarily engaged in the sale and operation and of pre-package or custom-packaged travel packages comprising transportation, accommodation, amusement and entertainment, tour guide and other services to the general public and commercial clients and the activity of arranging and assembling tours that are sold through travel agencies or directly by agents such as tour operators; and other travel-related services including reservation services."
  },
  {
    "level": "Group",
    "code": "O791",
    "name": "Travel agency and tour operator activities",
    "parentCode": "O79",
    "keywords": "Travel agency and tour operator activities",
    "note": "This group includes the activities of agencies, primarily engaged in selling pre-packaged or custom-packaged travel packages comprising transportation, accommodation, tour guide, and other services to the general public and commercial clients and the activity of arranging and assembling tours that are sold through travel agencies or directly by agents such as tour operators. This group also includes the activities of tour operators."
  },
  {
    "level": "Class",
    "code": "O7911",
    "name": "Travel agency activities",
    "parentCode": "O791",
    "keywords": "Travel agency activities",
    "note": "This class includes: - activities of agencies, primarily engaged in selling packaged tours and cruises to the general public or to commercial clients: • reservation services for pre-packaged tours, domestic and international • reservation services for custom packaged tours for groups, domestic or international - intermediation activities in concluding contracts for provision of tourist services from tour operators"
  },
  {
    "level": "Class",
    "code": "O7912",
    "name": "Tour operator activities",
    "parentCode": "O791",
    "keywords": "Tour operator activities",
    "note": "This class includes: - arranging, assembling, and marketing of packaged tours: • pre-packaged tours, domestic and international • custom packaged tours for groups, domestic or international Tour operators are engaged in the operation of tour packages that are sold by travel agencies, including arranging and assembling different services in the packaged tour. The tour operators might be employed or contracted by a travel agency, or they might operate as independent tour operators that involve the following services: • transportation • accommodation • food • visits to museums, historical or cultural sites, theatrical, musical or sporting events, etc."
  },
  {
    "level": "Group",
    "code": "O799",
    "name": "Other travel related activities",
    "parentCode": "O79",
    "keywords": "Other travel related activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O7990",
    "name": "Other travel related activities",
    "parentCode": "O799",
    "keywords": "Other travel related activities",
    "note": "This class includes: - visitor assistance services: • provision of travel information to visitors • activities of independent tourist guides - tourism promotion activities"
  },
  {
    "level": "Division",
    "code": "O80",
    "name": "Investigation and security activities",
    "parentCode": "O",
    "keywords": "Investigation and security activities",
    "note": "This division includes security-related services: - investigation services in private, commercial, corporate, insurance and criminal law for the exercise of rights in court - guard and patrol services - picking up and delivering money, receipts, or other valuable items with personnel and equipment to protect such properties while in transit - security system services and operation of electronic security alarm systems, e.g. burglar and fire alarms, as well as remote monitoring and video surveillance systems services where the activity focuses on remote monitoring these systems, but often involves also sale, installation and repair services"
  },
  {
    "level": "Group",
    "code": "O801",
    "name": "Investigation and security activities",
    "parentCode": "O80",
    "keywords": "Investigation and security activities",
    "note": "This group includes security activities that are normally carried out by private operators."
  },
  {
    "level": "Class",
    "code": "O8011",
    "name": "Investigation and private security activities",
    "parentCode": "O801",
    "keywords": "Investigation and private security activities",
    "note": "This class includes: - investigation services in the private, commercial, insurance and legal field - guard, patrol or security services - support services to cash collection and deposit services - secure shredding and data destruction services - armoured car services"
  },
  {
    "level": "Class",
    "code": "O8019",
    "name": "Security activities n.e.c.",
    "parentCode": "O801",
    "keywords": "Security activities n.e.c.",
    "note": "This class includes the provision of one or more of the following services: security system services as part of security service centres or alarm receiving centres (ARC); remote monitoring and video surveillance systems services, and, only if provided in connection with later monitoring and remote monitoring services, installation, repair and maintenance of electronic security systems."
  },
  {
    "level": "Division",
    "code": "O81",
    "name": "Services to buildings and landscape activities",
    "parentCode": "O",
    "keywords": "Services to buildings and landscape activities",
    "note": "This division includes the provision of a number of general support services, such as: - the provision of a combination of support services within clients’ facilities, - the interior and exterior cleaning of buildings of all types - cleaning of industrial machinery, cleaning of trains, buses, planes, etc. - cleaning of the inside of road and sea tankers - disinfecting and exterminating activities for buildings, ships, trains, etc. - bottle cleaning - street sweeping - snow and ice removal - provision of landscape care and maintenance services and provision of these services"
  },
  {
    "level": "Group",
    "code": "O811",
    "name": "Combined facilities support activities",
    "parentCode": "O81",
    "keywords": "Combined facilities support activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O8110",
    "name": "Combined facilities support activities",
    "parentCode": "O811",
    "keywords": "Combined facilities support activities",
    "note": "This class includes the provision of a combination of support services within clients’ facilities. These services include general interior cleaning, maintenance, trash disposal, doormen and surveillance services, mail routing, reception, laundry and related services to support operations within facilities. These support activities are performed by operating staff, which is not involved with or responsible for the core business or activities of the client."
  },
  {
    "level": "Group",
    "code": "O812",
    "name": "Cleaning activities",
    "parentCode": "O81",
    "keywords": "Cleaning activities",
    "note": "This group includes: general, specialised and other cleaning activities. The difference between them is not based on the type of customers served, but on the type of cleaning. This group includes the activities of general interior cleaning of all types of buildings, exterior cleaning of buildings, specialised cleaning activities for buildings or other specialised cleaning activities, cleaning of industrial machinery, cleaning of the inside of road and sea tankers, disinfecting and extermination activities for buildings and industrial machinery, bottle cleaning, street sweeping, snow and ice removal."
  },
  {
    "level": "Class",
    "code": "O8121",
    "name": "General cleaning of buildings",
    "parentCode": "O812",
    "keywords": "General cleaning of buildings",
    "note": "This class includes: - general (non-specialised) cleaning of all types of buildings, such as: • offices • private dwellings, e.g. houses or apartments • factories • shops • institutions - general (non-specialised) cleaning of other business and professional premises and multiunit residential buildings These general cleaning activities are mostly interior cleaning although they may include the cleaning of associated exterior areas such as windows or passageways."
  },
  {
    "level": "Class",
    "code": "O8129",
    "name": "Other cleaning activities",
    "parentCode": "O812",
    "keywords": "Other cleaning activities",
    "note": "This class includes: - exterior cleaning of buildings of all types, including offices, factories, shops, institutions and other business and professional premises and multiunit residential buildings - specialized cleaning activities for buildings such as window cleaning, chimney cleaning and cleaning of fireplaces, stoves, furnaces, incinerators, boilers, ventilation ducts and exhaust units - swimming pool cleaning and maintenance services - cleaning of industrial machinery - bottle cleaning - cleaning of trains, buses, planes, etc. - cleaning of the inside of road and sea tankers - disinfecting and exterminating activities - street sweeping and snow and ice removal - other building and industrial cleaning activities, n.e.c. - cleaning of new buildings immediately after construction - steam cleaning, sand blasting and similar activities for building exteriors"
  },
  {
    "level": "Group",
    "code": "O813",
    "name": "Landscape service activities",
    "parentCode": "O81",
    "keywords": "Landscape service activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O8130",
    "name": "Landscape service activities",
    "parentCode": "O813",
    "keywords": "Landscape service activities",
    "note": "This class includes: - planting, care and maintenance of: • parks and gardens for: • private and public housing • public and semi-public buildings (schools, hospitals, administrative buildings, church buildings etc.) • municipal grounds (parks, green areas, cemeteries etc.) • highway greenery (roads, train lines and tramlines, waterways, ports) • industrial and commercial buildings - planting, care and maintenance of greenery for: • buildings (roof gardens, façade greenery, indoor gardens etc.) • sports grounds (football fields, golf courses etc.), play grounds, lawns for sunbathing and other recreational parks • stationary and flowing water (basins, alternating wet areas, ponds, swimming pools, ditches, watercourses, plant sewage systems) - planting of vegetation for protection against noise, wind, erosion, visibility - protection and restoring landscape, e.g. for parks, gardens - ecological engineering works for the purpose of ecological preservation of sites"
  },
  {
    "level": "Division",
    "code": "O82",
    "name": "Office administrative, office support and other business support activities",
    "parentCode": "O",
    "keywords": "Office administrative; office support and other business support activities",
    "note": "This division includes the provision of a range of day-to-day office administrative services, as well as ongoing routine business support functions for others, on a contract or fee basis."
  },
  {
    "level": "Group",
    "code": "O821",
    "name": "Office administrative and support activities",
    "parentCode": "O82",
    "keywords": "Office administrative and support activities",
    "note": "This group includes the provision of a range of day-to-day office administrative services, such as financial planning, billing and record keeping, personnel and physical distribution and logistics for others on a contract or fee basis."
  },
  {
    "level": "Class",
    "code": "O8210",
    "name": "Office administrative and support activities",
    "parentCode": "O821",
    "keywords": "Office administrative and support activities",
    "note": "This class includes the provision of a combination of day-to-day office administrative services, such as reception, financial planning, billing and record keeping, personnel and mail services etc. for others on a contract or fee basis This class includes: - document preparation, e.g. editing, proofreading, typing, word processing etc., and pre-archiving - other secretarial support services - transcription of documents - letter or resume writing - provision of a mailbox rental and other postal and mailing services, e.g. pre-sorting, addressing - duplicating - blueprinting - operation of photocopying machines for photocopying as a self-service - digitalisation of files (without any further processing of data) - formatting of eBooks"
  },
  {
    "level": "Group",
    "code": "O822",
    "name": "Activities of call centres",
    "parentCode": "O82",
    "keywords": "Activities of call centres",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O8220",
    "name": "Activities of call centres",
    "parentCode": "O822",
    "keywords": "Activities of call centres",
    "note": "This class includes the activities of: - inbound call centres, including answering calls from clients by using human operators, automatic call distribution, computer telephone integration, interactive voice response systems or similar methods to receive orders, provide product information, dealing with customer requests for assistance or address customer complaints - outbound call centres using similar methods to market goods or services to potential customers, conducting telephone interviews for market and opinion research surveys on a contract or fee basis - web contact centres"
  },
  {
    "level": "Group",
    "code": "O823",
    "name": "Organization of conventions and trade shows",
    "parentCode": "O82",
    "keywords": "Organization of conventions and trade shows",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O8230",
    "name": "Organization of conventions and trade shows",
    "parentCode": "O823",
    "keywords": "Organization of conventions and trade shows",
    "note": "This class includes the organisation, promotion and/or management of events: - business and trade shows - company events - general or specialised exhibitions - conferences and conventions - seminars, symposiums and workshops- farm markets and craft fairs - country festivals This class may further include the management and provision of the staff to operate the facilities in which the aforementioned events take place but only if the management and provision of staff are performed in association with the organisation, promotion and/or management of such events."
  },
  {
    "level": "Group",
    "code": "O824",
    "name": "Intermediation service activities for business support activities n.e.c., except financial intermediation",
    "parentCode": "O82",
    "keywords": "Intermediation service activities for business support activities n.e.c.; except financial intermediation",
    "note": ""
  },
  {
    "level": "Class",
    "code": "O8240",
    "name": "Intermediation service activities for business support activities n.e.c., except financial intermediation",
    "parentCode": "O824",
    "keywords": "Intermediation service activities for business support activities n.e.c.; except financial intermediation",
    "note": "This class includes the intermediation service activities for business support activities n.e.c. This class includes units that bring clients and service providers together for a fee or commission. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the client or the provider of the service. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising."
  },
  {
    "level": "Group",
    "code": "O829",
    "name": "Business support service activities n.e.c.",
    "parentCode": "O82",
    "keywords": "Business support service activities n.e.c.",
    "note": "This group includes the activities of collection agencies, credit bureaus, business information agencies and all support activities not elsewhere classified. The activities are predominately provided to businesses."
  },
  {
    "level": "Class",
    "code": "O8291",
    "name": "Activities of collection agencies and credit bureaus",
    "parentCode": "O829",
    "keywords": "Activities of collection agencies and credit bureaus",
    "note": "This class includes: - collection of payments for claims and remittance of payments collected to the clients, such as bill or debt collection services - compiling and provision of information, such as credit or employment history, to financial institutions, retailers and others who have a need to evaluate the creditworthiness of individuals or businesses"
  },
  {
    "level": "Class",
    "code": "O8292",
    "name": "Packaging activities",
    "parentCode": "O829",
    "keywords": "Packaging activities",
    "note": "This class includes: - packaging activities on a fee or contract basis, whether or not these involve an automated process: • bottling of liquids, including beverages and food • packaging of solids (blister packaging, foil-covered etc.) • security packaging of pharmaceutical preparations • labelling, stamping and imprinting • parcel-packing and gift-wrapping - product sterilisation associated with packaging"
  },
  {
    "level": "Class",
    "code": "O8299",
    "name": "Other business support service activities n.e.c.",
    "parentCode": "O829",
    "keywords": "Other business support service activities n.e.c.",
    "note": "This class includes: - fundraising organisation services on a contract or fee basis - court reporting or stenotype recording services - public stenography services - real-time (i.e. simultaneous) closed captioning of meetings, conferences - bar coding services - bar code imprinting services - repossession services - parking meter coin collection services - activities of handling visa and work permit - restaurant voucher handling service activities - providing assistance in motor vehicle registration - relocation service activities - leisure activities gift package administration - voucher issuing and handling activities - donation-based crowd funding - trading and brokerage of crypto assets without a corresponding liability (not by a monetary authority) - company domiciliation services - reading of consumption of heat and hot water including cost allocation - activities of independent auctioneers - administration of loyalty programmes - selling of travel boxes: form of distribution of a service linked to travel, but a deferred service, which can be of any nature: hotels, restaurants, care, leisure activities, etc.)"
  },
  {
    "level": "Section",
    "code": "P",
    "name": "Public administration and defence; compulsory social security",
    "parentCode": "",
    "keywords": "Public administration and defence; compulsory social security",
    "note": "This section includes activities of a governmental nature, normally carried out by the public administration. This includes the enactment and judicial interpretation of laws and their pursuant regulation, as well as the administration of programmes based on them, legislative activities, taxation, national defence, public order and safety, immigration services, foreign affairs and the administration of government programmes. The legal or institutional status is not, in itself, the determining factor for an activity to belong in this section, rather than the activity being of a nature specified in the previous paragraph. This means that activities classified elsewhere in ISIC do not fall under this section, even if carried out by public entities. For example, administration of the school system (i.e. regulations, checks, curricula) falls under this section, but teaching itself does not (see section Q), and a prison or military hospital is classified to health (see section R). Similarly, some activities described in this section may be carried out by non-government units."
  },
  {
    "level": "Division",
    "code": "P84",
    "name": "Public administration and defence; compulsory social security",
    "parentCode": "P",
    "keywords": "Public administration and defence; compulsory social security",
    "note": ""
  },
  {
    "level": "Group",
    "code": "P841",
    "name": "Administration of the State and the economic, social and environmental policies of the community",
    "parentCode": "P84",
    "keywords": "Administration of the State and the economic; social and environmental policies of the community",
    "note": "This group includes general administration (e.g. executive, legislative, financial administration etc. at all levels of government) and supervision in the field of social, economic and environmental policy of the community."
  },
  {
    "level": "Class",
    "code": "P8411",
    "name": "General public administration activities",
    "parentCode": "P841",
    "keywords": "General public administration activities",
    "note": "This class includes: - executive and legislative administration of central, regional and local bodies - public general administration at national and regional level - administration and supervision of fiscal affairs: • operation of taxation schemes • duty/tax collection on goods and tax violation investigation • customs administration - budget implementation and management of public funds and public debt: • raising and receiving of money and control of their disbursement - administration of overall (civil) research and development policy and associated funds - administration and operation of overall economic and social planning and statistical services at the various levels of government"
  },
  {
    "level": "Class",
    "code": "P8412",
    "name": "Regulation of the activities of providing health care, education, cultural services and other social services, excluding social security and environment",
    "parentCode": "P841",
    "keywords": "Regulation of the activities of providing health care; education; cultural services and other social services; excluding social security and environment",
    "note": "This class includes: - public administration of programmes aimed to increase personal well-being, e.g.: • health • education • culture • sport • recreation • housing • social services - public administration of research and development policies and associated funds for these areas"
  },
  {
    "level": "Class",
    "code": "P8413",
    "name": "Regulation of the activities of providing environmental services",
    "parentCode": "P841",
    "keywords": "Regulation of the activities of providing environmental services",
    "note": "This class includes: - public administration of environmental services programmes - public administration of research and development policies and associated funds for environmental services"
  },
  {
    "level": "Class",
    "code": "P8414",
    "name": "Regulation of and contribution to more efficient operation of businesses",
    "parentCode": "P841",
    "keywords": "Regulation of and contribution to more efficient operation of businesses",
    "note": "This class includes: - public administration and regulation, including subsidy allocation, for different economic sectors, e.g.: • agriculture • land use • energy and mining resources • infrastructure • transport • communication • hotels and tourism • wholesale and retail trade - administration of research and development policies and associated funds to improve economic performance - administration of general labour affairs - implementation of regional development policy measures, e.g. to reduce unemployment"
  },
  {
    "level": "Group",
    "code": "P842",
    "name": "Provision of services to the community as a whole",
    "parentCode": "P84",
    "keywords": "Provision of services to the community as a whole",
    "note": "This group includes foreign affairs, defence, justice and public order and safety activities."
  },
  {
    "level": "Class",
    "code": "P8421",
    "name": "Foreign affairs",
    "parentCode": "P842",
    "keywords": "Foreign affairs",
    "note": "This class includes: - administration and operation of the ministry of foreign affairs and diplomatic and consular missions stationed abroad or at offices of international organisations - administration, operation and support for information and cultural services intended for distribution beyond national boundaries - aid to foreign countries, whether or not routed through international organisations - provision of military aid to foreign countries - management of foreign trade, international financial and foreign technical affairs"
  },
  {
    "level": "Class",
    "code": "P8422",
    "name": "Defence activities",
    "parentCode": "P842",
    "keywords": "Defence activities",
    "note": "This class includes: - administration, supervision and operation of military defence affairs and land, sea, air and space defence forces such as: • combat forces of army, navy and air force • engineering, transport, communications, intelligence, materiel, personnel and other non-combat forces and commands • reserve and auxiliary forces of the defence establishment • military logistics (provision of equipment, structures, supplies etc.) • health activities for military personnel in the field - administration, operation and support of civil defence forces - support for the working out of contingency plans and the carrying out of exercises in which civilian institutions and populations are involved - administration of defence-related research and development policies and related funds"
  },
  {
    "level": "Class",
    "code": "P8423",
    "name": "Public order and safety activities",
    "parentCode": "P842",
    "keywords": "Public order and safety activities",
    "note": "This class includes: - administration and operation of regular and auxiliary police forces supported by public authorities and of port, border, coastguards and other special police forces, including traffic regulation, alien registration, maintenance of arrest records - firefighting activities and fire prevention: * administration and operation of regular and auxiliary fire brigades in fire prevention, firefighting, rescue of persons and animals, assistance in civic disasters, floods, road accidents etc., including firefighting by units on a fee or contract basis - administration and operation of administrative civil and criminal law courts, military tribunals and the judicial system - rendering of judgements and interpretations of the law - arbitration of civil actions - prison administration and provision of correctional services, including rehabilitation services - provision of supplies for domestic emergency use in case of peacetime disasters"
  },
  {
    "level": "Group",
    "code": "P843",
    "name": "Compulsory social security activities",
    "parentCode": "P84",
    "keywords": "Compulsory social security activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "P8430",
    "name": "Compulsory social security activities",
    "parentCode": "P843",
    "keywords": "Compulsory social security activities",
    "note": "This class includes: - funding and administration of government-provided social security programmes, e.g.: • sickness, work-accident and unemployment insurance • retirement pensions • covering losses of income due to maternity, temporary disablement, widowhood, loss of partner etc."
  },
  {
    "level": "Section",
    "code": "Q",
    "name": "Education",
    "parentCode": "",
    "keywords": "Education",
    "note": "This section includes education at any level or for any profession. The instructions may be oral or written and may be provided by radio, television, Internet or via correspondence. Education activities are those having an educational programme, a time frame and some evaluation of the knowledge achieved. It includes formal initial education at its different levels provided by the different institutions in the regular school system designed for students as a continuous educational pathway before their first entrance to the labour market, as well as formal education outside the regular school system with programme content and qualifications that are equivalent to those of such initial education (adult education, literacy programmes etc). Also included are activities provided by military schools and academies, prison schools etc. at their respective levels. This section includes compulsory and non-compulsory schooling and public as well as private education. For each level of education, the classes include special education for physically or mentally disabled persons. Groups 851, 852, 853 and 854 take into account the formal education activities provided under the ISCED-P 2011 classification, that is, the international classification of educational programmes. As a consequence, the breakdown of the categories in this section is based on the level of education offered as defined by the levels of ISCED-P 2011. The activities of educational institutions providing courses on ISCED-P 2011 level 02 are classified in 8510, on ISCED-P 2011 level 1 in 8520, on ISCED-P 2011 levels 2 in class 8531, on ISCED-P 2011 levels 3 in class 8532, on ISCED-P 2011 levels 4 in class 8533 and on ISCED-P 2011 level 5-6-7-8 in group 854. Educational institutions classified in groups 852 to 854 are authorised to certify successful completion of an educational programme, usually in the form of a document officially recognized by the relevant national education authorities."
  },
  {
    "level": "Division",
    "code": "Q85",
    "name": "Education",
    "parentCode": "Q",
    "keywords": "Education",
    "note": ""
  },
  {
    "level": "Group",
    "code": "Q851",
    "name": "Pre-primary education",
    "parentCode": "Q85",
    "keywords": "Pre-primary education",
    "note": ""
  },
  {
    "level": "Class",
    "code": "Q8510",
    "name": "Pre-primary education",
    "parentCode": "Q851",
    "keywords": "Pre-primary education",
    "note": "This class includes: - pre-primary education. Pre-primary education is defined as the initial stage of organised instruction designed primarily to introduce very young children to a school- type environment, that is, to provide a bridge between the home and a school-based atmosphere."
  },
  {
    "level": "Group",
    "code": "Q852",
    "name": "Primary education",
    "parentCode": "Q85",
    "keywords": "Primary education",
    "note": ""
  },
  {
    "level": "Class",
    "code": "Q8520",
    "name": "Primary education",
    "parentCode": "Q852",
    "keywords": "Primary education",
    "note": "This class includes primary education: the furnishing of academic courses and associated course work that give students a sound basic education in reading, writing and mathematics and an elementary understanding of other subjects such as history, geography, natural science, social science, art and music."
  },
  {
    "level": "Group",
    "code": "Q853",
    "name": "Secondary and post-secondary non-tertiary education",
    "parentCode": "Q85",
    "keywords": "Secondary and post-secondary non-tertiary education",
    "note": "This group includes the provision of general secondary and technical and vocational secondary education."
  },
  {
    "level": "Class",
    "code": "Q8531",
    "name": "General secondary education",
    "parentCode": "Q853",
    "keywords": "General secondary education",
    "note": "This class includes provision of the type of education that lays the foundation for lifelong learning and human development and is capable of furthering education opportunities. Activities classified in this class are based on programmes that are usually on a more subject-oriented pattern using more specialised teachers, and more often employ several teachers conducting classes in their field of specialisation. Subject specialisation at this level often begins to have some influence even on the educational experience of those pursuing a general programme. Such programmes are designed to qualify students either for technical and vocational education or for entrance to higher education without any special subject prerequisite. This class includes: - lower general secondary education corresponding more or less to compulsory school age - upper general secondary education, whether granting access or not to higher education"
  },
  {
    "level": "Class",
    "code": "Q8532",
    "name": "Vocational secondary education",
    "parentCode": "Q853",
    "keywords": "Vocational secondary education",
    "note": "This class includes provision of education typically emphasising subject-matter specialisation and instruction in both theoretical background and practical skills generally associated with present or prospective employment. The aim of a programme can vary from preparation for a general field of employment to a very specific job. This class includes: - technical and vocational education below the level of tertiary education (as defined in 854)"
  },
  {
    "level": "Class",
    "code": "Q8533",
    "name": "Post-secondary non-tertiary education",
    "parentCode": "Q853",
    "keywords": "Post-secondary non-tertiary education",
    "note": "This class includes provision of post-secondary education, general and vocational, which cannot be considered tertiary education. This level concerns post-secondary non-tertiary general and vocational education and training programmes. This may also include provision of supplementary post-secondary education to prepare for tertiary education or post-secondary non-tertiary vocational."
  },
  {
    "level": "Group",
    "code": "Q854",
    "name": "Tertiary education",
    "parentCode": "Q85",
    "keywords": "Tertiary education",
    "note": ""
  },
  {
    "level": "Class",
    "code": "Q8540",
    "name": "Tertiary education",
    "parentCode": "Q854",
    "keywords": "Tertiary education",
    "note": "This class includes the furnishing of tertiary academic, professional and vocational courses and granting of degrees at short-cycle bachelor or equivalent level, master’s or equivalent level. This class includes education in public and private universities provided at the level of: - short cycle studies, usually based on practical learning appropriate to the performance of a given profession and preparing students for entry into the labour market or other higher education programmes, - first cycle studies, where applicants are accepted with a secondary school leaving certificate, leading to a first degree qualification, - second-cycle studies open to applicants holding at least a first-cycle qualification and leading to a second-cycle qualification, - comprehensive master degree courses open to applicants holding a secondary school leaving certificate and leading to a second-cycle qualification, - postgraduate studies, which shall be open to candidates who have completed at least first-cycle studies leading to a postgraduate qualification, - education in doctoral schools third-cycle studies (training for doctoral students) to which candidates are admitted if they have completed at least second-cycle studies, leading to a third-cycle qualification. Education shall be conducted as full-time and part-time studies."
  },
  {
    "level": "Group",
    "code": "Q855",
    "name": "Other education",
    "parentCode": "Q85",
    "keywords": "Other education",
    "note": "This group includes education (including non-formal), which is neither part of initial education in the regular school system, nor equivalent in programme content and qualifications to those programmes. It includes training for any professional, hobby or self-development purposes for both children and adults, including non-formal continuing vocational education and training. Non-formal education is defined by ISCED-P 2011 as institutionalised, intentional and planned by an education provider education as an addition, alternative and/or complement to formal education within the process of the lifelong learning of individuals. It targets people of all ages, but does not necessarily apply a continuous pathway-structure; it may be short in duration and/or low-intensity, and it is typically provided in the form of short courses, workshops or seminars. This group also includes education activities run by self-employed/own account/individual/independent lecturers (tutors, academics, instructors). This group includes the provision of athletic instruction to groups or individuals, foreign language instruction, instruction in the arts, drama or music or other instruction or specialised training, provided by camps and schools, not comparable to the education in groups 851 - 854."
  },
  {
    "level": "Class",
    "code": "Q8551",
    "name": "Sports and recreation education",
    "parentCode": "Q855",
    "keywords": "Sports and recreation education",
    "note": "This class includes the provision of instruction in athletic activities to groups of individuals, such as by camps and schools. Activities provided by overnight and day sports instruction camps are also included. Instruction may be provided in diverse settings, such as the unit's or client's training facilities, educational institutions or by other means including internet. Instruction provided in this class offers structured educational arrangements, such as student-teacher relationships, that are specially designed for education and learning. However, it does not lead to qualifications at primary-tertiary levels. This class includes: - sports instruction by camps or schools - gymnastics instruction - riding instruction - swimming instruction - activities of professional sports instructors, teachers, coaches - martial arts instruction - card game instruction, e.g. bridge - board games courses - yoga instruction - e-sports instruction"
  },
  {
    "level": "Class",
    "code": "Q8552",
    "name": "Cultural education",
    "parentCode": "Q855",
    "keywords": "Cultural education",
    "note": "This class includes provision of instruction in the arts, drama and music such as by \"schools”, \"studios”, \"classes” etc. Structured educational arrangements specially designed for education and learning, such as student-teacher relationships and/or interactions, are provided. Such instruction is mainly for hobby, recreational or self-development purposes, and does not lead to qualifications at primary-tertiary levels. This class includes: - music instruction - art instruction - dance instruction - drama, fine arts, performing arts and photography instruction"
  },
  {
    "level": "Class",
    "code": "Q8553",
    "name": "Driving school activities",
    "parentCode": "Q855",
    "keywords": "Driving school activities",
    "note": "This class includes the activities of automobile driving schools for personal (non-commercial) drivers."
  },
  {
    "level": "Class",
    "code": "Q8559",
    "name": "Other education n.e.c.",
    "parentCode": "Q855",
    "keywords": "Other education n.e.c.",
    "note": "This class includes: - education that is not definable by level - academic tutoring - remedial courses - professional examination review courses - language instruction and conversational skills instruction - computer training - religious instruction - wellness courses, - sewing courses, - relaxation courses, - oenology courses, - family life courses, e.g. parent-child courses - training on plant protection products"
  },
  {
    "level": "Group",
    "code": "Q856",
    "name": "Educational support activities",
    "parentCode": "Q85",
    "keywords": "Educational support activities",
    "note": "This group includes intermediation service activities for courses and tutors and other educational support activities."
  },
  {
    "level": "Class",
    "code": "Q8561",
    "name": "Intermediation service activities for courses and tutors",
    "parentCode": "Q856",
    "keywords": "Intermediation service activities for courses and tutors",
    "note": "This class includes the intermediation service activities for courses and tutors by bringing clients and service providers together for a fee or commission, without the intermediary providing the instruction or tutoring services intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the client or the provider of instruction or tutoring. Revenue for the intermediation activities can include other sources of income, such as revenues from sale of advertising space."
  },
  {
    "level": "Class",
    "code": "Q8569",
    "name": "Other educational support activities",
    "parentCode": "Q856",
    "keywords": "Other educational support activities",
    "note": "This class includes: - provision of non-instructional activities that support educational processes or systems: • educational consulting • vocational and career related counselling activities • educational guidance counselling activities • educational testing evaluation activities • educational testing activities • organisation of student exchange programmes • examination and testing of regulated professions such as pilots • development of curricula • expert and rehabilitation activities examining learning ability"
  },
  {
    "level": "Section",
    "code": "R",
    "name": "Human health and social work activities",
    "parentCode": "",
    "keywords": "Human health and social work activities",
    "note": "This section includes the provision of health and social work activities. Activities include a wide range of activities, private or public. It includes: - health care provided by trained medical professionals in hospitals and other facilities, including outpatient settings - residential care activities that still involve a degree of health care activities - social work activities without accommodation and any involvement of health care professionals"
  },
  {
    "level": "Division",
    "code": "R86",
    "name": "Human health activities",
    "parentCode": "R",
    "keywords": "Human health activities",
    "note": "This division includes activities of short- or long-term inpatient health care, general or specialty medical or surgical, offered by hospitals, preventoria, medical nursing homes, mental hospital institutions, rehabilitation centres and other human health institutions, which have accommodation facilities and which engage in providing diagnostic and medical treatment to primarily inpatients, with a wide range of medical conditions. This division also includes medical consultation and treatment in the field of general and specialised medicine, by general practitioners and medical specialists and surgeons. It includes dental practice activities of a general or specialised nature, as well as orthodontic activities. Additionally, this division includes medical, curative, rehabilitative, or prevention activities by paramedical practitioners and health professionals other than hospitals or practicing medical doctors."
  },
  {
    "level": "Group",
    "code": "R861",
    "name": "Hospital activities",
    "parentCode": "R86",
    "keywords": "Hospital activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "R8610",
    "name": "Hospital activities",
    "parentCode": "R861",
    "keywords": "Hospital activities",
    "note": "This class includes: - short- or long-term provision of medical, diagnostic and treatment services, including physician, nursing and other health services to inpatients and the specialised accommodation services required by inpatients, by general hospitals and specialised hospitals (e.g. community and regional hospitals, hospitals of non-profit organisations, university hospitals, military-base and prison hospitals) The activities are chiefly directed to inpatients, are carried out under the direct supervision of medical doctors and include: • activities of medical and paramedical staff • activities of laboratory and technical facilities, including radiologic and anaesthesiologic activities • emergency room activities • provision of operating room services, pharmacy services, food and other hospital services • activities of family planning centres providing medical treatment, e.g. sterilisation and • termination of pregnancy, with accommodation"
  },
  {
    "level": "Group",
    "code": "R862",
    "name": "Medical and dental practice activities",
    "parentCode": "R86",
    "keywords": "Medical and dental practice activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "R8620",
    "name": "Medical and dental practice activities",
    "parentCode": "R862",
    "keywords": "Medical and dental practice activities",
    "note": "This class includes: - medical consultation and treatment in the field of general and specialized medicine by general practitioners and medical specialists and surgeons - dental practice activities of a general or specialized nature, e.g. dentistry, endodontic and pediatric dentistry; oral pathology - orthodontic activities - family planning centres providing medical treatment, such as sterilization and termination of pregnancy, without accommodation These activities can be carried out in private practice, group practices and in hospital outpatient clinics, and in clinics such as those attached to firms, schools, homes for the aged, labour organizations and fraternal organizations, as well as in patients’ homes. This class also includes: - dental activities in operating rooms - private consultants’ services to inpatients This class excludes: - production of artificial teeth, denture and prosthetic appliances by dental laboratories, see 3250 - inpatient hospital activities, see 8610 - paramedical activities such as those of midwives, nurses and physiotherapists, see 8699"
  },
  {
    "level": "Group",
    "code": "R869",
    "name": "Other human health activities",
    "parentCode": "R86",
    "keywords": "Other human health activities",
    "note": "This group includes medical, curative, rehabilitative, or prevention activities (without provision of accommodation services) by paramedical practitioners and health professionals other than hospitals or practicing medical doctors."
  },
  {
    "level": "Class",
    "code": "R8691",
    "name": "Intermediation service activities for medical, dental, and other human health services",
    "parentCode": "R869",
    "keywords": "Intermediation service activities for medical; dental; and other human health services",
    "note": "This class includes the intermediation of medical, dental and other human health services, by bringing clients and service providers together for a fee or commission, without the intermediary providing the medical, dental and other human health services that are intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail etc.). The fee or commission can be received from either the client or the provider of the medical, dental and other human health services. Revenue for the intermediation activities can include other sources of income, such as revenues from sale of advertising."
  },
  {
    "level": "Class",
    "code": "R8699",
    "name": "Other human health activities n.e.c",
    "parentCode": "R869",
    "keywords": "Other human health activities n.e.c",
    "note": "This class includes: - activities for human health n.e.c.: • activities of nurses, midwives, physiotherapists or other paramedical practitioners in the field of optometry, hydrotherapy, medical massage, occupational therapy, speech therapy, podiatry/chiropody, homeopathy, chiropractice, acupuncture etc. These activities may be carried out in health clinics such as those attached to firms, schools, homes for the aged, labour organizations and fraternal organizations and in residential health facilities other than hospitals, as well as in own consulting rooms, patients’ homes or elsewhere. These activities do not involve medical treatment."
  },
  {
    "level": "Division",
    "code": "R87",
    "name": "Residential care activities",
    "parentCode": "R",
    "keywords": "Residential care activities",
    "note": "This division includes the provision of residential care combined with either nursing, supervisory or other types of care as required by the residents. The residential care is a mix of health and social services with the health services being largely some level of nursing services. Residential care activities are provided for residents, whom can be staying temporarily."
  },
  {
    "level": "Group",
    "code": "R871",
    "name": "Residential nursing care activities",
    "parentCode": "R87",
    "keywords": "Residential nursing care activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "R8710",
    "name": "Residential nursing care activities",
    "parentCode": "R871",
    "keywords": "Residential nursing care activities",
    "note": "This class includes the provision of residential care, with medical assistance, nursing and rehabilitation treatments. These establishments have a permanent core staff of registered or licensed practical nurses that, along with other staff, provide nursing care in combination with personal care. The medical or nursing care services typically include administering medication, performing medical diagnoses and dressing wounds, and are typically provided without the supervision of a medical doctor located on the premises. This class includes activities of: • homes for older persons with nursing care • convalescent homes, other than mental health and substance abuse facilities • rest homes with nursing care • nursing care facilities • nursing homes hospices • inpatient care hospices for palliative care"
  },
  {
    "level": "Group",
    "code": "R872",
    "name": "Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse",
    "parentCode": "R87",
    "keywords": "Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse",
    "note": ""
  },
  {
    "level": "Class",
    "code": "R8720",
    "name": "Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse",
    "parentCode": "R872",
    "keywords": "Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse",
    "note": "This class includes the provision of residential care (but not licensed hospital care), protective supervision and counselling to persons living with or having a diagnosis of a mental illness, intellectual disability or substance abuse, irrespective of the age. This class includes activities of: - facilities for treatment of substance abuse - mental health convalescent homes - residential group homes for the emotionally disturbed - mental health halfway houses - assisted living facilities for persons having a diagnosis of intellectual disability Includes also:"
  },
  {
    "level": "Group",
    "code": "R873",
    "name": "Residential care activities for older persons or persons with physical disabilities",
    "parentCode": "R87",
    "keywords": "Residential care activities for older persons or persons with physical disabilities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "R8730",
    "name": "Residential care activities for older persons or persons with physical disabilities",
    "parentCode": "R873",
    "keywords": "Residential care activities for older persons or persons with physical disabilities",
    "note": "This class includes the provision of residential and personal care services for older persons or persons with physical disabilities who are unable to fully care for themselves and/or who do not desire to live independently. The care typically includes room, board, supervision, and assistance in daily living, such as housekeeping activities. Nursing careis sometimes provided for residents in separate on-site facilities. This class includes: - activities of: • assisted-living facilities • continuing care retirement communities • homes for older persons with minimal nursing care • rest homes without nursing care"
  },
  {
    "level": "Group",
    "code": "R879",
    "name": "Other residential care activities",
    "parentCode": "R87",
    "keywords": "Other residential care activities",
    "note": "This group includes intermediation service activities for residential care activities and other residential care activities n.e.c."
  },
  {
    "level": "Class",
    "code": "R8791",
    "name": "Intermediation service activities for residential care activities",
    "parentCode": "R879",
    "keywords": "Intermediation service activities for residential care activities",
    "note": "This class includes the intermediation of residential care activities, by bringing clients and service providers together for a fee or commission, without the intermediary providing the residential care services that are intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail etc.). The fee or commission can be received from either the client or the provider of the residential care service. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising"
  },
  {
    "level": "Class",
    "code": "R8799",
    "name": "Other residential care activities n.e.c.",
    "parentCode": "R879",
    "keywords": "Other residential care activities n.e.c.",
    "note": "This class includes the provision of residential care and assistance services for persons, except older persons and persons with disabilities, who are unable to fully care for themselves or who do not wish to live on their own. This class includes: - residential and social assistance activities provided on a round-the-clock basis to special categories of persons, but where medical treatment or education are not essential elements: • orphanages • children's boarding homes and hostels • provision of residential services for homeless persons, refugees, immigrants etc. • other residential family support activities The activities are usually carried out by government offices or private organisations."
  },
  {
    "level": "Division",
    "code": "R88",
    "name": "Social work activities without accommodation",
    "parentCode": "R",
    "keywords": "Social work activities without accommodation",
    "note": "This division includes the provision of a variety of social assistance services directly to clients. The activities in this division do not include accommodation services, except on a temporary basis."
  },
  {
    "level": "Group",
    "code": "R881",
    "name": "Social work activities without accommodation for older persons or persons with disabilities",
    "parentCode": "R88",
    "keywords": "Social work activities without accommodation for older persons or persons with disabilities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "R8810",
    "name": "Social work activities without accommodation for older persons or persons with disabilities",
    "parentCode": "R881",
    "keywords": "Social work activities without accommodation for older persons or persons with disabilities",
    "note": "This class includes: - social, counselling, welfare, referral and similar services which are aimed at older persons or persons with disabilities in their homes or elsewhere and carried out by government offices or by private organisations, national or local self-help organisations and by specialists providing counselling services: • visiting of older persons and persons with disabilities • day-care activities for older persons or for adults with disabilities • home assistance services for older persons or persons with disabilities • vocational rehabilitation and activities for persons with physical disabilities, where the education component is limited"
  },
  {
    "level": "Group",
    "code": "R889",
    "name": "Other social work activities without accommodation",
    "parentCode": "R88",
    "keywords": "Other social work activities without accommodation",
    "note": ""
  },
  {
    "level": "Class",
    "code": "R8890",
    "name": "Other social work activities without accommodation",
    "parentCode": "R889",
    "keywords": "Other social work activities without accommodation",
    "note": "This class includes: - social, counselling, welfare, refugee, referral and similar services which are delivered to individuals and families in their homes or elsewhere and carried out by public or by private organizations, disaster relief organizations and national or local self-help organizations and by specialists providing counselling services: • welfare and guidance activities for children and adolescents ™ adoption activities, activities for the prevention of cruelty to children and others • household budget counselling, marriage and family guidance, credit and debt counselling services • community and neighbourhood activities • activities for disaster victims, refugees, immigrants etc., including temporary or extended shelter for them • vocational rehabilitation activities for unemployed persons provided that the education component is limited • eligibility determination in connection with welfare aid, rent supplements or food stamps • child day-care activities, including for handicapped children • day facilities for the homeless and other socially weak groups • fund-raising or other supporting activities aimed at social work"
  },
  {
    "level": "Section",
    "code": "S",
    "name": "Arts, sports and recreation",
    "parentCode": "",
    "keywords": "Arts; sports and recreation",
    "note": "This section includes a wide range of activities to meet varied cultural, sports and recreational interests of their customers, including live performances, entertainment, operation of cultural and natural heritage sites, and gambling. Sports associations are typically non-profit entities, but inclusion in the sports sector is legitimised by the prevailing purpose of the activity carried out (promotion of sports practice). The activities of education, training, sale of advertising space, provision of clubhouse services, are, in this context, ancillary activities, which may have a prevailing weight at an economic level, but which are instrumental with respect to the prevailing purpose of the activity carried out and for its perpetuation."
  },
  {
    "level": "Division",
    "code": "S90",
    "name": "Arts creation and performing arts activities",
    "parentCode": "S",
    "keywords": "Arts creation and performing arts activities",
    "note": "This division includes arts creation and performing arts activities and the operation of facilities and provision of services to meet the cultural and entertainment interests. This includes the production and promotion of, and participation in, live performances, events or exhibits intended for public viewing; the provision of artistic, creative or technical skills for the production of artistic products and live performances and events."
  },
  {
    "level": "Group",
    "code": "S901",
    "name": "Arts creation activities",
    "parentCode": "S90",
    "keywords": "Arts creation activities",
    "note": "This group includes activities in literary creation, musical composition and visual arts creation and related activities."
  },
  {
    "level": "Class",
    "code": "S9011",
    "name": "Literary creation and musical composition activities",
    "parentCode": "S901",
    "keywords": "Literary creation and musical composition activities",
    "note": "This class includes: - activities of individual writers, for all subjects including fictional writing etc. - musical composition - texts and compositions writing on behalf of someone else - activities of scriptwriting - activities of journalists not self-publishing their own created content - activities of bloggers not self-publishing their own created content"
  },
  {
    "level": "Class",
    "code": "S9012",
    "name": "Visual arts creation activities",
    "parentCode": "S901",
    "keywords": "Visual arts creation activities",
    "note": "This class includes the activities of creation and production of works of the visual arts This class includes: - activities of independent artists, e.g. sculptors, painters, cartoonists, calligraphers, engravers, etchers, etc. - digital forms of visual arts creation - creation of art featuring light installations"
  },
  {
    "level": "Class",
    "code": "S9013",
    "name": "Other arts creation activities",
    "parentCode": "S901",
    "keywords": "Other arts creation activities",
    "note": "This class includes: - conceptual art activities - choreography activities"
  },
  {
    "level": "Group",
    "code": "S902",
    "name": "Activities of performing arts",
    "parentCode": "S90",
    "keywords": "Activities of performing arts",
    "note": ""
  },
  {
    "level": "Class",
    "code": "S9020",
    "name": "Activities of performing arts",
    "parentCode": "S902",
    "keywords": "Activities of performing arts",
    "note": "This class includes activities in the performing arts and related activities. It includes: - live stage productions (theatrical presentations, concerts, opera, dance and others): • activities of performing groups, circuses or companies, orchestras or bands • activities of performing artists, e.g. actors (including stand-up comedians), dancers, musicians (including activities of independent organists), conductors"
  },
  {
    "level": "Group",
    "code": "S903",
    "name": "Support activities to arts creation and performing arts",
    "parentCode": "S90",
    "keywords": "Support activities to arts creation and performing arts",
    "note": "This group includes support activities to arts creation and performing arts. It includes activities supporting the production of theater, opera and ballet performances, musicals, events and others, activities of producers of artistic performances, inside or outside the premises."
  },
  {
    "level": "Class",
    "code": "S9031",
    "name": "Operation of arts facilities and sites",
    "parentCode": "S903",
    "keywords": "Operation of arts facilities and sites",
    "note": "This class includes: - operation of arts facilities, e.g. concert, theatre halls and cultural centres - operation of arts facilities which support artistic creation in visual arts"
  },
  {
    "level": "Class",
    "code": "S9039",
    "name": "Other support activities to arts creation and performing arts",
    "parentCode": "S903",
    "keywords": "Other support activities to arts creation and performing arts",
    "note": "This class includes: - support activities to performing arts for production of live stage presentations, e.g. theatrical presentations, concerts, opera, dance and other stage productions: • activities of producers, stage-set designers and builders, scene shifters, lighting engineers etc. - organisation of cultural and entertainment events, e.g. film festivals, musicals or music and dance festivals - activities of directors, dramaturges, film promoters and programs creators or supervisors"
  },
  {
    "level": "Division",
    "code": "S91",
    "name": "Library, archives, museum and other cultural activities",
    "parentCode": "S",
    "keywords": "Library; archives; museum and other cultural activities",
    "note": "This division includes the activities of libraries and archives; the operation of museums of all kinds, heritage collections of all types including library and archival documents, botanical and zoological gardens; the operation of archaeological and historical sites or buildings and nature reserves activities. These activities include the identification, collection, inventory, conservation-restoration and mediation of cultural or natural, tangible and intangible heritage."
  },
  {
    "level": "Group",
    "code": "S911",
    "name": "Library and archive activities",
    "parentCode": "S91",
    "keywords": "Library and archive activities",
    "note": "This group includes all activities related to management, care, preservation, appraisal of libraries and archives. This group includes: - documentation and information activities of libraries and archives of all kinds including reading, listening and viewing rooms, providing library and archive services to the general public or to a specific public e.g. students, scientists, staff members, etc.: - operation of public archives (at governmental, regional or local levels) or of private archives (artists’, historians’, writers’ archives, etc.) - organisation of a library collection, whether specialised or not cataloguing collections - -lending and storage of books, maps, periodicals, films, records, tapes, works of art, archives, etc. - retrieval activities in order to comply with information requests etc."
  },
  {
    "level": "Class",
    "code": "S9111",
    "name": "Library activities",
    "parentCode": "S911",
    "keywords": "Library activities",
    "note": "This class includes: - documentation and information activities of libraries of all kinds (including digital libraries), reading, listening and viewing rooms: • organisation of a collection, whether specialised or not • cataloguing collections • lending and storage of books, maps, periodicals, films, records, tapes, works of art etc. • retrieval activities in order to comply with information requests etc."
  },
  {
    "level": "Class",
    "code": "S9112",
    "name": "Archive activities",
    "parentCode": "S911",
    "keywords": "Archive activities",
    "note": "Archive activities include the activities carried out by archival services of all types, with a view to building, storing, classifying, physical or digital archive collections and communicating them to the general public or to a particular category of users This class includes: - activities of public archives providing service to the general public or to a special clientele, such as - students, scientists, staff, members as well as operation of government archives - activities related to the acquisition or collection of archives - activities related to the identification, stocktaking, description and classification of archives - activities related to the safety and maintenance of collections (monitoring of the sanitary status and climatic conditions, safety and security, rehabilitation) - activities related to communication of archives to the public on site or remotely - cultural and pedagogical activities related to the valorisation of archives"
  },
  {
    "level": "Group",
    "code": "S912",
    "name": "Museum, collection, historical site and monument activities",
    "parentCode": "S91",
    "keywords": "Museum; collection; historical site and monument activities",
    "note": "This group includes activities related to the operation, management, care, preservation and appraisal of cultural heritage: tangible, intangible and digital in a wide variety of types of collections (both private and public). It includes activities of pertaining to cultural heritage places as the result of human intervention in its surroundings, from landscapes to gardens, from historical and archaeological sites to buildings."
  },
  {
    "level": "Class",
    "code": "S9121",
    "name": "Museum and collection activities",
    "parentCode": "S912",
    "keywords": "Museum and collection activities",
    "note": "This class includes: - operation, management, care, preservation, appraisal and exhibition of collections of museums of all kinds: • museums or art museums, applied art crafts and design museums (e.g. for jewelry, furniture, costumes, ceramics, silverware) • natural history, science and technological museums, historical museums, including military museums • other specialised museums • open-air museums, ecomuseums as well as digital and virtual museums • collections in historic houses and national galleries, interpretation centres for ethnographic, religious and folk art at local or regional level"
  },
  {
    "level": "Class",
    "code": "S9122",
    "name": "Historical site and monument activities",
    "parentCode": "S912",
    "keywords": "Historical site and monument activities",
    "note": "This class includes the operation and preservation of heritage places as a result of human intervention in its surroundings, from landscapes to gardens, from buildings to sites (built heritage as well natural heritage). This class includes: - operation and preservation of historical sites and buildings - operation and preservation of archaeological sites open to visitors"
  },
  {
    "level": "Group",
    "code": "S913",
    "name": "Conservation, restoration and other support activities for cultural heritage",
    "parentCode": "S91",
    "keywords": "Conservation; restoration and other support activities for cultural heritage",
    "note": ""
  },
  {
    "level": "Class",
    "code": "S9130",
    "name": "Conservation, restoration and other support activities for cultural heritage",
    "parentCode": "S913",
    "keywords": "Conservation; restoration and other support activities for cultural heritage",
    "note": "This class includes: - activities related to measures and actions for preventive conservation, curative conservation and restoration, including consulting, taking in account both tangible and intangible significance of cultural heritage and sustainability. On every kind of materials and surface, these activities covers in particular movable and immovable archaeological assets, leathers, archival documents, graphic and printed documents and wood panelling, objects of art, ceramic tiles, goldsmithing, easel painting, mural painting, photography, sculpture, textiles including embroidery, stained glasses, scientific and industrial objects. - activities related to the digitisation of cultural heritage (moveable or immovable), data collection, collection management, virtual replicas and other activities through digital means to ensure the preservation of cultural heritage"
  },
  {
    "level": "Group",
    "code": "S914",
    "name": "Botanical and zoological garden and nature reserve activities",
    "parentCode": "S91",
    "keywords": "Botanical and zoological garden and nature reserve activities",
    "note": "This group includes the operation of botanical and zoological gardens, including children's zoos, and the operation of nature reserves, including wildlife preservation, etc., as well as conservation and maintenance services of national parks, nature parks and reserves."
  },
  {
    "level": "Class",
    "code": "S9141",
    "name": "Botanical and zoological garden activities",
    "parentCode": "S914",
    "keywords": "Botanical and zoological garden activities",
    "note": "This class includes: - operation of botanical and zoological gardens, including children's zoos - operation of aquariums"
  },
  {
    "level": "Class",
    "code": "S9142",
    "name": "Nature reserve activities",
    "parentCode": "S914",
    "keywords": "Nature reserve activities",
    "note": "This class includes: - operation of nature reserves, including wildlife preservation, safari parks, etc. - conservation and maintenance services of national parks, nature parks and reserves"
  },
  {
    "level": "Division",
    "code": "S92",
    "name": "Gambling and betting activities",
    "parentCode": "S",
    "keywords": "Gambling and betting activities",
    "note": "This division includes the operation of gambling facilities such as casinos, bingo halls and video gaming terminals and the provision of gambling services, such as lotteries and off-track betting. The gambling and betting activities can be carried out in gambling facilities or online."
  },
  {
    "level": "Group",
    "code": "S920",
    "name": "Gambling and betting activities",
    "parentCode": "S92",
    "keywords": "Gambling and betting activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "S9200",
    "name": "Gambling and betting activities",
    "parentCode": "S920",
    "keywords": "Gambling and betting activities",
    "note": "This class includes gambling and betting activities such as: - bookmaking and other betting operations - off-track betting - operation of casinos, including \"floating casinos” - sale of lottery tickets - operation (exploitation) of coin-operated gambling machines - quiz app subscription with prizes - sport betting - operation of card games as a betting activity"
  },
  {
    "level": "Division",
    "code": "S93",
    "name": "Sports activities and amusement and recreation activities",
    "parentCode": "S",
    "keywords": "Sports activities and amusement and recreation activities",
    "note": "This division includes sports activities as any form of physical activity undertaken, either occasionally or in an organized participatory manner, with the aim of expressing and improving physical fitness and mental wellbeing, and of establishing social links or achieving results in competitions at all levels. This division includes the provision of amusement and recreation activities (except museums activities, preservation of historical sites, botanical and zoological gardens and nature reserves activities; and gambling and betting activities)."
  },
  {
    "level": "Group",
    "code": "S931",
    "name": "Sports activities",
    "parentCode": "S93",
    "keywords": "Sports activities",
    "note": "This group includes the operation of sports facilities; activities of sports teams or clubs primarily participating in live sports events before a paying audience; independent athletes engaged in participating in live sports or racing events before a paying audience; owners of racing participants such as cars, dogs, horses, etc. primarily engaged in entering them in racing events or other spectator sports events; sports trainers providing specialised services to support participants in sports events or competitions; operators of arenas and stadiums; other activities of organising, promoting or managing sports events, n.e.c."
  },
  {
    "level": "Class",
    "code": "S9311",
    "name": "Operation of sports facilities",
    "parentCode": "S931",
    "keywords": "Operation of sports facilities",
    "note": "This class includes: —operation of facilities for indoor or outdoor sports events (open, closed or covered, with or without spectator seating): • football, hockey, cricket, baseball, jai-alai stadiums • racetracks for auto, dog, horse races • swimming pools and stadiums • track and field stadiums • winter sports arenas and stadiums • ice-hockey arenas • boxing arenas • golf courses • bowling lanes • fitness centers —organization and operation of outdoor or indoor sports events for professionals or amateurs by organizations in their own facilities (not by sports clubs)"
  },
  {
    "level": "Class",
    "code": "S9312",
    "name": "Activities of sports clubs",
    "parentCode": "S931",
    "keywords": "Activities of sports clubs",
    "note": "This class includes the activities of sports clubs, which, whether professional, semi-professional or amateur clubs, give their members the opportunity to engage in sporting activities. Sports clubs are typically non-profit entities, but inclusion in the sports sector is legitimised by the prevailing purpose of the activity carried out (promotion of sports practice). The activities of education, training, sale of advertising space, provision of clubhouse services, are, in this context, ancillary activities, which may have a prevailing weight at an economic level, but which are instrumental with respect to the prevailing purpose of the activity carried out and for its perpetuation. This class includes: - operation of sports clubs, e.g.: • football clubs • bowling clubs • swimming clubs • golf clubs • boxing clubs • winter sports clubs • chess clubs • track and field clubs • shooting clubs, etc. • e-sports clubs • card games clubs, e.g. bridge clubs"
  },
  {
    "level": "Class",
    "code": "S9319",
    "name": "Other sports activities",
    "parentCode": "S931",
    "keywords": "Other sports activities",
    "note": "This class includes: - activities of producers of sports events, with or without facilities - activities of individual own-account sportsmen and athletes, referees, judges, timekeepers etc. - activities of individual own-account participants of e-sports - activities of sports leagues and sport governing bodies - activities related to promotion of sports events - activities of racing stables, kennels and garages - operation of sport fishing and hunting preserves - activities of mountain guides - support activities for sport or recreational hunting and fishing - operation of vertical, aerodynamic wind tunnels - activities related to training of sporting and entertainment animals"
  },
  {
    "level": "Group",
    "code": "S932",
    "name": "Amusement and recreation activities",
    "parentCode": "S93",
    "keywords": "Amusement and recreation activities",
    "note": "This group includes a wide range of units that operate facilities or provide services to meet the varied recreational interests of their patrons. It includes the operation of a variety of attractions, such as mechanical rides, water rides, games, shows, theme exhibits and picnic grounds."
  },
  {
    "level": "Class",
    "code": "S9321",
    "name": "Activities of amusement parks and theme parks",
    "parentCode": "S932",
    "keywords": "Activities of amusement parks and theme parks",
    "note": "This class includes the activities of amusement parks and theme parks characterized by a permanent and site-based operation of a variety of attractions, such as mechanical rides, carousels, games, shooting galleries, shows, theme exhibits and picnic grounds, that are provided under the economic and operational directive of a central operator. These parks are typically located in structurally delimited areas, for which customers must pay admission."
  },
  {
    "level": "Class",
    "code": "S9329",
    "name": "Other amusement and recreation activities",
    "parentCode": "S932",
    "keywords": "Other amusement and recreation activities",
    "note": "This class includes activities related to entertainment and recreation (except amusement parks and theme parks) not elsewhere classified: - operation (exploitation) of coin-operated games - rental of leisure and pleasure equipment as an integral part of recreational facilities - operation of mechanical rides, games and shows by independent providers, e.g. at fairgrounds, folk festivals and Christmas markets - activities of beaches, including rental of facilities such as bathhouses, lockers, chairs etc. - activities of independent animators in amusement and recreation facilities - operation of dance floors and ballrooms where beverage serving is not the main activity - operation of computer rooms for playing computer games - operation of self-service amusement devices, e.g. rocking chairs/horses/cars/space ships - operation of airsoft and paintball courts - games/experiences of reality virtual or geolocated - amusement and recreation activities related to the infrastructure of marinas - operation of ski hills, alone or in combination with ski lifts - operation of billiard halls - operation of escape rooms - operation of bowling halls - light and sound shows - activities of guides for underwater excursions - creation and presentation of fireworks - operation of picnic grounds not associated with a nature reserve - operation of laser games"
  },
  {
    "level": "Section",
    "code": "T",
    "name": "Other service activities",
    "parentCode": "",
    "keywords": "Other service activities",
    "note": "This section (as a residual category) includes the activities of membership organisations, the repair of computers, personal and household goods, and motor vehicles and motorcycles, and a variety of personal service activities not covered elsewhere in the classification."
  },
  {
    "level": "Division",
    "code": "T94",
    "name": "Activities of membership organizations",
    "parentCode": "T",
    "keywords": "Activities of membership organizations",
    "note": "This division includes activities of organisations representing interests of special groups or promoting ideas to the general public. These organisations usually have a constituency of members, but their activities may involve and benefit non-members as well. The primary breakdown of this division is determined by the purpose that these organisations serve, namely interests of employers, self-employed individuals and professional groups(group 941), interests of employees (group 942) or promotion of religious, political, cultural, educational or recreational ideas and activities (group 949)."
  },
  {
    "level": "Group",
    "code": "T941",
    "name": "Activities of business, employers and professional membership organizations",
    "parentCode": "T94",
    "keywords": "Activities of business; employers and professional membership organizations",
    "note": "This group includes the activities of promoting the interests of the members of business and employers organisations."
  },
  {
    "level": "Class",
    "code": "T9411",
    "name": "Activities of business and employers membership organizations",
    "parentCode": "T941",
    "keywords": "Activities of business and employers membership organizations",
    "note": "This class includes: - activities of organisations whose members' interests centre on the development and prosperity of enterprises in a particular line of business or trade, including farming, or on the economic growth and climate of a particular geographical area or political subdivision without regard for the line of business. - activities of federations of such associations - activities of chambers of commerce, guilds and similar organisations - dissemination of information, representation before government agencies, public relations and labour negotiations of business and employer organisations"
  },
  {
    "level": "Class",
    "code": "T9412",
    "name": "Activities of professional membership organizations",
    "parentCode": "T941",
    "keywords": "Activities of professional membership organizations",
    "note": "This class includes: - activities of organisations whose members' interests centre chiefly on a particular scholarly discipline or professional practice or technical field, e.g. medical associations, legal associations, accounting associations, engineering associations, architects associations etc. - activities of associations of specialists engaged in scientific, academic or cultural activities, e.g. associations of writers, painters, performers of various kinds, journalists etc. - dissemination of information, the establishment and supervision of standards of practice, representation before government agencies and public relations of professional organisations"
  },
  {
    "level": "Group",
    "code": "T942",
    "name": "Activities of trade unions",
    "parentCode": "T94",
    "keywords": "Activities of trade unions",
    "note": ""
  },
  {
    "level": "Class",
    "code": "T9420",
    "name": "Activities of trade unions",
    "parentCode": "T942",
    "keywords": "Activities of trade unions",
    "note": "This class includes: - promoting of the interests of organised labour and union employees"
  },
  {
    "level": "Group",
    "code": "T949",
    "name": "Activities of other membership organizations",
    "parentCode": "T94",
    "keywords": "Activities of other membership organizations",
    "note": "This group includes the activities of units (except business and employers organisations, professional organisations, trade unions) that promote the interests of their members."
  },
  {
    "level": "Class",
    "code": "T9491",
    "name": "Activities of religious organizations",
    "parentCode": "T949",
    "keywords": "Activities of religious organizations",
    "note": "This class includes: - activities of religious organisations or individuals providing services directly to worshippers in churches, mosques, temples, synagogues or other places - activities of organisations furnishing monastery and convent services - religious retreat activities"
  },
  {
    "level": "Class",
    "code": "T9492",
    "name": "Activities of political organizations",
    "parentCode": "T949",
    "keywords": "Activities of political organizations",
    "note": "This class includes: - activities of political organisations and auxiliary organisations e.g. young people's auxiliaries associated with a political party. These organisations chiefly engage in influencing decision-taking in public governing bodies by placing members of the party or those sympathetic to the party in political office and involve the dissemination of information, public relations, fund-raising etc"
  },
  {
    "level": "Class",
    "code": "T9499",
    "name": "Activities of other membership organizations n.e.c.",
    "parentCode": "T949",
    "keywords": "Activities of other membership organizations n.e.c.",
    "note": "This class includes: - activities of organisations (not directly affiliated to a political party) furthering a public cause or issue by means of public education, political influence, fund-raising etc.: • citizens initiative or protest movements • environmental and ecological movements • organisations supporting community and educational facilities n.e.c. • organisations for the protection and betterment of special groups, e.g. ethnic and minority groups • associations for patriotic purposes, including war veterans' associations - activities of associations intended to promote health, e.g. Samaritans - activities of associations for the protection of animals - consumer associations - automobile associations (other than sports) - associations for the purpose of social acquaintanceship such as rotary clubs, lodges etc. - associations of youth, e.g. scouts associations, young persons' associations, student associations, clubs and fraternities etc. - associations for the pursuit of a cultural or recreational activity or hobby (other than sports or games), e.g. poetry, literature and book clubs, historical clubs, gardening clubs, film and photo clubs, music and art clubs, craft and collectors' clubs, social clubs, carnival clubs etc."
  },
  {
    "level": "Division",
    "code": "T95",
    "name": "Repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles",
    "parentCode": "T",
    "keywords": "Repair and maintenance of computers; personal and household goods; and motor vehicles and motorcycles",
    "note": "This division includes the repair and maintenance of computers and computer peripheral equipment, communications equipment, consumer electronics, garden equipment, footwear and leather goods, furniture and home furnishings, clothing, sporting goods, musical instruments and other personal and household goods, as well as the repair and maintenance of motor vehicles and motorcycles."
  },
  {
    "level": "Group",
    "code": "T951",
    "name": "Repair and maintenance of computers and communication equipment",
    "parentCode": "T95",
    "keywords": "Repair and maintenance of computers and communication equipment",
    "note": ""
  },
  {
    "level": "Class",
    "code": "T9510",
    "name": "Repair and maintenance of computers and communication equipment",
    "parentCode": "T951",
    "keywords": "Repair and maintenance of computers and communication equipment",
    "note": "This class includes the repair of electronic equipment, such as computers and computing machinery, peripheral and communications equipment. This class includes the repair and maintenance of: - desktop computers - laptop computers - magnetic disk drives and flash drives - optical disks drives - printers - monitors - keyboards - webcams - headsets, including in-ear wireless headsets - mice, joysticks and trackball accessories - internal and external computer modems - dedicated computer terminals - computer servers - scanners, including bar code scanners - smart card readers - virtual reality helmets - computer projectors - cordless telephones - smartphones and tablets - telecommunication carrier equipment - communications transmission equipment, e.g. routers, bridges, modems - two-way radios - commercial TV, video cameras and facsimile machines"
  },
  {
    "level": "Group",
    "code": "T952",
    "name": "Repair and maintenance of personal and household goods",
    "parentCode": "T95",
    "keywords": "Repair and maintenance of personal and household goods",
    "note": "This group includes the repair and servicing of personal and household goods."
  },
  {
    "level": "Class",
    "code": "T9521",
    "name": "Repair and maintenance of consumer electronics",
    "parentCode": "T952",
    "keywords": "Repair and maintenance of consumer electronics",
    "note": "This class includes repair and maintenance of consumer electronics: - repair of consumer electronics: • television, radio receivers • audio and video players • household-type video cameras and photographic equipment • video game devices"
  },
  {
    "level": "Class",
    "code": "T9522",
    "name": "Repair and maintenance of household appliances and home and garden equipment",
    "parentCode": "T952",
    "keywords": "Repair and maintenance of household appliances and home and garden equipment",
    "note": "This class includes the repair and servicing household appliances and home and garden equipment: - repair and servicing of household appliances • refrigerators, stoves, washing machines, clothes dryers, room air conditioners, etc. - repair and servicing of home and garden equipment • lawnmowers, edgers, snow- and leaf- blowers, trimmers, etc."
  },
  {
    "level": "Class",
    "code": "T9523",
    "name": "Repair and maintenance of footwear and leather goods",
    "parentCode": "T952",
    "keywords": "Repair and maintenance of footwear and leather goods",
    "note": "This class includes repair and maintenance of footwear and leather goods: - repair of boots, shoes, luggage and the like - fitting of heels"
  },
  {
    "level": "Class",
    "code": "T9524",
    "name": "Repair and maintenance of furniture and home furnishings",
    "parentCode": "T952",
    "keywords": "Repair and maintenance of furniture and home furnishings",
    "note": "This class includes: - reupholstering, refinishing, repairing and restoring of furniture and home furnishings including office furniture - assembly of self-standing furniture"
  },
  {
    "level": "Class",
    "code": "T9529",
    "name": "Repair and maintenance of other personal and household goods",
    "parentCode": "T952",
    "keywords": "Repair and maintenance of other personal and household goods",
    "note": "This class includes: - repair and maintenance of bicycles, e-bikes, monowheels, hoverboards, kick scooters - repair and alteration of clothing - repair and alteration of jewellery - repair of watches, clocks and their parts such as watchcases and housings of any material - repair of sporting goods (except sporting guns) - repair of books - repair of musical instruments - repair of toys and similar articles - repair of other personal and household goods - piano-tuning"
  },
  {
    "level": "Group",
    "code": "T953",
    "name": "Repair and maintenance of motor vehicles and motorcycles",
    "parentCode": "T95",
    "keywords": "Repair and maintenance of motor vehicles and motorcycles",
    "note": "This group includes repair and maintenance of motor vehicles and motorcycles"
  },
  {
    "level": "Class",
    "code": "T9531",
    "name": "Repair and maintenance of motor vehicles",
    "parentCode": "T953",
    "keywords": "Repair and maintenance of motor vehicles",
    "note": "This class includes: - repair and maintenance of motor vehicles, including trailers and semi-trailers, e.g.: • mechanical repairs • electrical repairs • electronic injection systems repair • ordinary servicing • bodywork repair • repair of motor vehicle parts • washing, polishing, etc. • spraying and painting • repair of screens and windows • repair of motor vehicle seats • mechatronics system repair and diagnostics services - repair, fitting or replacement service activities for tubes and tyres - anti-rust treatment - installation of parts and accessories not as part of the manufacturing process - repair and maintenance of non-military amphibious vehicles"
  },
  {
    "level": "Class",
    "code": "T9532",
    "name": "Repair and maintenance of motorcycles",
    "parentCode": "T953",
    "keywords": "Repair and maintenance of motorcycles",
    "note": "This class includes: - repair and maintenance of motorcycles - motorcycle and motorcycle equipment spraying and painting activities - bodywork repair - washing, polishing, etc."
  },
  {
    "level": "Group",
    "code": "T954",
    "name": "Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles",
    "parentCode": "T95",
    "keywords": "Intermediation service activities for repair and maintenance of computers; personal and household goods; and motor vehicles and motorcycles",
    "note": ""
  },
  {
    "level": "Class",
    "code": "T9540",
    "name": "Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles",
    "parentCode": "T954",
    "keywords": "Intermediation service activities for repair and maintenance of computers; personal and household goods; and motor vehicles and motorcycles",
    "note": "This class includes the intermediation of the repair and maintenance of computers, personal and household goods and motor vehicles and motorcycles by bringing clients and service providers together for a fee or commission, without the intermediary providing the services intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the client or the provider of the repair and maintenance service. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising."
  },
  {
    "level": "Division",
    "code": "T96",
    "name": "Personal service activities",
    "parentCode": "T",
    "keywords": "Personal service activities",
    "note": "This division includes all personal service activities not mentioned elsewhere in the classification. Notably it includes types of services such as washing and (dry-)cleaning of textiles and fur products, ironing, hairdressing, beauty treatment day-spas and similar activities, funeral and related activities."
  },
  {
    "level": "Group",
    "code": "T961",
    "name": "Washing and cleaning of textile and fur products",
    "parentCode": "T96",
    "keywords": "Washing and cleaning of textile and fur products",
    "note": ""
  },
  {
    "level": "Class",
    "code": "T9610",
    "name": "Washing and cleaning of textile and fur products",
    "parentCode": "T961",
    "keywords": "Washing and cleaning of textile and fur products",
    "note": "This class includes: - laundering and dry cleaning, pressing, ironing etc., of all kinds of clothing (including fur) and textiles, provided by mechanical equipment, by hand or by self-service coin-operated machines, whether for the general public or for industrial or commercial clients - laundry collection and delivery - carpet and rug shampooing and drapery and curtain cleaning, whether on clients' premises or not - provision of combined rental and care services including washing and cleaning of textiles, e.g. linen, work uniforms and related items - reusable diaper supply services Includes also:"
  },
  {
    "level": "Group",
    "code": "T962",
    "name": "Hairdressing, beauty treatment, day spa and similar activities",
    "parentCode": "T96",
    "keywords": "Hairdressing; beauty treatment; day spa and similar activities",
    "note": "This group includes hairdressing and barber activities, beauty care and beauty treatment, day spa and similar activities."
  },
  {
    "level": "Class",
    "code": "T9621",
    "name": "Hairdressing and barber activities",
    "parentCode": "T962",
    "keywords": "Hairdressing and barber activities",
    "note": "This class includes: - hair washing, trimming and cutting, setting, dyeing, tinting, waving, straightening and similar activities - hairstyling - shaving and beard trimming"
  },
  {
    "level": "Class",
    "code": "T9622",
    "name": "Beauty care and other beauty treatment activities",
    "parentCode": "T962",
    "keywords": "Beauty care and other beauty treatment activities",
    "note": "This class includes beauty treatment activities not performed by medical specialists, e.g. by cosmetologists such as: facial massage, manicure, pedicure, permanent make-up, depilations, tanning"
  },
  {
    "level": "Class",
    "code": "T9623",
    "name": "Day spa, sauna and steam bath activities",
    "parentCode": "T962",
    "keywords": "Day spa; sauna and steam bath activities",
    "note": "This class includes: - activities of Turkish baths, sauna and steam baths, day spas, solariums, reducing and slendering salons, etc."
  },
  {
    "level": "Group",
    "code": "T963",
    "name": "Funeral and related activities",
    "parentCode": "T96",
    "keywords": "Funeral and related activities",
    "note": ""
  },
  {
    "level": "Class",
    "code": "T9630",
    "name": "Funeral and related activities",
    "parentCode": "T963",
    "keywords": "Funeral and related activities",
    "note": "This class includes: - burial and incineration of human or animal corpses and related activities: • preparing the dead for burial or cremation and embalming and morticians' services • providing burial or cremation services • rental of equipped space in funeral parlours - rental or sale of graves - maintenance of graves and mausoleums"
  },
  {
    "level": "Group",
    "code": "T964",
    "name": "Intermediation service activities for personal services",
    "parentCode": "T96",
    "keywords": "Intermediation service activities for personal services",
    "note": ""
  },
  {
    "level": "Class",
    "code": "T9640",
    "name": "Intermediation service activities for personal services",
    "parentCode": "T964",
    "keywords": "Intermediation service activities for personal services",
    "note": "This class includes the intermediation of personal services that bring clients and service providers together for a fee or commission, without the intermediary providing the services intermediated. These intermediation activities can be carried out on digital platforms or through non-digital channels (face-to-face including door-to-door, phone, mail, etc.). The fee or commission can be received from either the client or the provider of the personal service. Revenue for the intermediation activities can include other sources of income, such as revenues from advertising”. It includes, for example, laundry and dry-cleaning agent activities."
  },
  {
    "level": "Group",
    "code": "T969",
    "name": "Other personal service activities n.e.c.",
    "parentCode": "T96",
    "keywords": "Other personal service activities n.e.c.",
    "note": ""
  },
  {
    "level": "Class",
    "code": "T9690",
    "name": "Other personal service activities n.e.c.",
    "parentCode": "T969",
    "keywords": "Other personal service activities n.e.c.",
    "note": "This class includes the provision of a range of domestic personal service activities like cooking, washing, cleaning, and ironing services, at the home of households."
  },
  {
    "level": "Section",
    "code": "U",
    "name": "Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use",
    "parentCode": "",
    "keywords": "Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use",
    "note": "This section includes households’ employment of domestic personnel and undifferentiated subsistence goods-producing and services-producing activities of households."
  },
  {
    "level": "Division",
    "code": "U97",
    "name": "Activities of households as employers of domestic personnel",
    "parentCode": "U",
    "keywords": "Activities of households as employers of domestic personnel",
    "note": ""
  },
  {
    "level": "Group",
    "code": "U970",
    "name": "Activities of households as employers of domestic personnel",
    "parentCode": "U97",
    "keywords": "Activities of households as employers of domestic personnel",
    "note": ""
  },
  {
    "level": "Class",
    "code": "U9700",
    "name": "Activities of households as employers of domestic personnel",
    "parentCode": "U970",
    "keywords": "Activities of households as employers of domestic personnel",
    "note": "This class includes households’ employment of domestic personnel, e.g. cooks, cleaners, gardeners, chauffeurs, caretakers, babysitters, personal assistants etc. It allows the domestic personnel employed to state the activity of their employer in censuses or studies, even though the employer is an individual. The product produced by this activity is consumed by the employing household."
  },
  {
    "level": "Division",
    "code": "U98",
    "name": "Undifferentiated goods- and services-producing activities of private households for own use",
    "parentCode": "U",
    "keywords": "Undifferentiated goods- and services-producing activities of private households for own use",
    "note": "This division includes the undifferentiated subsistence goods-producing and services-producing activities of households. Households should be classified here only if it is impossible to identify a primary activity for the subsistence activities of the household. If the household engages in market activities, it should be classified according to the primary market activity carried out."
  },
  {
    "level": "Group",
    "code": "U981",
    "name": "Undifferentiated goods-producing activities of private households for own use",
    "parentCode": "U98",
    "keywords": "Undifferentiated goods-producing activities of private households for own use",
    "note": ""
  },
  {
    "level": "Class",
    "code": "U9810",
    "name": "Undifferentiated goods-producing activities of private households for own use",
    "parentCode": "U981",
    "keywords": "Undifferentiated goods-producing activities of private households for own use",
    "note": "This class includes the undifferentiated subsistence goods-producing activities of households, that is to say, the activities of households that are engaged in a variety of activities that produce goods for their own subsistence. These activities include hunting and gathering, farming, the production of shelter and clothing and other goods produced by the household for its own subsistence. If households are also engaged in the production of marketed goods, they are classified to the appropriate goods-producing industry of ISIC. If they are principally engaged in a specific goods-producing subsistence activity, they are classified to the appropriate goods-producing industry of ISIC."
  },
  {
    "level": "Group",
    "code": "U982",
    "name": "Undifferentiated service-producing activities of private households for own use",
    "parentCode": "U98",
    "keywords": "Undifferentiated service-producing activities of private households for own use",
    "note": ""
  },
  {
    "level": "Class",
    "code": "U9820",
    "name": "Undifferentiated service-producing activities of private households for own use",
    "parentCode": "U982",
    "keywords": "Undifferentiated service-producing activities of private households for own use",
    "note": "This class includes the undifferentiated subsistence services-producing activities of households. These activities include cooking, teaching, caring for household members and other services produced by the household for its own subsistence. If households are also engaged in the production of multiple goods for subsistence purposes, they are classified to the undifferentiated goods-producing subsistence activities of households."
  },
  {
    "level": "Section",
    "code": "V",
    "name": "Activities of extraterritorial organizations and bodies",
    "parentCode": "",
    "keywords": "Activities of extraterritorial organizations and bodies",
    "note": ""
  },
  {
    "level": "Division",
    "code": "V99",
    "name": "Activities of extraterritorial organizations and bodies",
    "parentCode": "V",
    "keywords": "Activities of extraterritorial organizations and bodies",
    "note": ""
  },
  {
    "level": "Group",
    "code": "V990",
    "name": "Activities of extraterritorial organizations and bodies",
    "parentCode": "V99",
    "keywords": "Activities of extraterritorial organizations and bodies",
    "note": ""
  },
  {
    "level": "Class",
    "code": "V9900",
    "name": "Activities of extraterritorial organizations and bodies",
    "parentCode": "V990",
    "keywords": "Activities of extraterritorial organizations and bodies",
    "note": "This class includes: - activities of international organisations under international treaties between states such as the United Nations and the specialised agencies of the United Nations system, regional bodies etc., the International Monetary Fund, the World Bank, the World Customs Organisation, the Organisation for Economic Co-operation and Development, the Organisation of Petroleum Exporting Countries, the European Free Trade Association etc. - activities of institutions and bodies of the European Union"
  }
];
