CREATE TABLE IF NOT EXISTS Produits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom VARCHAR(200) NOT NULL,
    titre VARCHAR(50) NOT NULL,
    url TEXT NOT NULL,
    type VARCHAR(200) NOT NULL,
    parfum VARCHAR(50) ,
    pays VARCHAR(50) NOT NULL,
    prix INTEGER NOT NULL,
    description TEXT NOT NULL,
    suggestion TEXT
);

INSERT OR REPLACE INTO Produits VALUES
    (1,'Thé du Hammam','Thé Vert parfumé - Fruité', "https://www.palaisdesthes.com/media/catalog/product/cache/d68f0350dd21afbb7f381fb835e279db/8/6/861-42158-rh8x3mmwnv.jpg",'Thé Vert', 'Fruité','Chine' , 9.90, "Gourmand et fruité, le Thé du Hammam est inspiré d'une recette traditionnelle turque. Son parfum évoque la datte verte, la fleur d'oranger, la rose et les fruits rouges.Il est agrémenté, dans la plus pure tradition orientale, de pétales de fleurs. Sa fragrance extraordinaire naît de la subtile association du thé vert de Chine, réputé pour sa fraîcheur et ses vertus désaltérantes, et des parfums gourmands des fruits.Le saviez-vous ? 1 thé du hammam est vendu toutes les 2 minutes dans le monde !" ,null),


    (2,'Green of London','Thé vert parfumé - AGRUMES' ,"https://www.palaisdesthes.com/media/catalog/product/cache/d68f0350dd21afbb7f381fb835e279db/8/0/809-35140-7ehpwfwvtv.jpg",'Thé Vert', 'AGRUMES','CHINE' , 9.90, "Green of London est un Earl Grey d'exception, qui associe un délicat thé vert de Chine à des notes fraîches de bergamote. Un mélange remarquable d'équilibre et de finesse.Le Earl Grey est un grand classique anglais, depuis que Charles Grey, comte (earl en anglais) de Falodon et Ministre des Affaires étrangères du Royaume britannique au milieu du XIXème siècle, reçut d’un mandarin chinois une vieille recette consistant à aromatiser son thé avec de la bergamote." ,null),

    (3,'Sencha ariake','Thé vert du japon', "https://www.palaisdesthes.com/media/catalog/product/cache/d68f0350dd21afbb7f381fb835e279db/3/0/302-35746-ptx0icd86w.jpg",'Thé Vert', null,'Japon' ,15.50, "Ce thé vert japonais est une très bonne introduction à la diversité des Sencha, la famille de thé la plus consommée au Japon. Etuvés puis pliés en aiguilles, ces thés présentent des notes végétales et marines.Le Sencha Ariake est le plus accessible des Sencha. Il est produit dans la province de Shizuoka.À la fois doux et bien présent en bouche, il est idéal le matin ou en début d'après-midi. C'est aussi un thé riche en antioxydants !" ,null),

    (4,'Le thé merveilleux','Thé vert parfumé - gourmand ', "https://www.palaisdesthes.com/media/catalog/product/cache/d68f0350dd21afbb7f381fb835e279db/8/2/821.jpg",'Thé Vert', 'Gourmand','Japon' ,10.50, "Palais des Thés signe une création délicieuse et festive qui s’adresse aux adeptes de la nouveauté.
    Le Thé Merveilleux, tel une explosion de saveurs et d'émotions, associe un thé vert à des notes gourmandes d'amandes caramélisées et de pistache.

    Une expérience gustative qui s’accorde à merveille avec des douceurs et des gourmandises !" ,null),

    (5,'Fleur de Jasmin','Thé vert parfumé - Floral ', "https://www.palaisdesthes.com/media/catalog/product/cache/d68f0350dd21afbb7f381fb835e279db/2/5/252.jpg",'Thé Vert', 'Floral','Chine' ,6.50, "Fleur de Jasmin est un beau thé vert de Chine parfumé à la fleur du même nom.

    Les fleurs ont été retirées à la main pour ne pas donner d’amertume à l’infusion." ,null),

    (6,'Grand Yunnan impérial','Thé noir du yannun, Chine' ,"https://www.palaisdesthes.com/media/catalog/product/cache/d68f0350dd21afbb7f381fb835e279db/2/2/220-34816-wmr7f3mou6.jpg",'Thé Vert','Floral','Chine' ,9.50, "Fleuri et miellé, le grand caractère et la subtilité de ce thé lui valent le nom de Moka des thés ou thé des chirurgiens, car il réveille sans énerver. Feuille superbe, avec beaucoup de bourgeons dorés. Un des must de Palais des Thés.

    Le Grand Yunnan Impérial est le thé d'origine le plus apprécié de Palais des Thés. Il a converti un grand nombre de buveurs de café et remplace avantageusement le café en début de journée." ,null);



    -- (1, 'Premier article', 'Neque porro quisquam est qui'),
    -- (2, 'Second article', 'ipsum quia dolor sit amet'),
    -- (3, 'Dernier article', 'dolorem consectetur, adipisci velit');