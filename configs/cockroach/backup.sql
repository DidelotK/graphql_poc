CREATE TABLE books (
        id INT NOT NULL DEFAULT unique_rowid(),
        title STRING(255) NULL,
        author STRING(255) NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
        "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
        CONSTRAINT "primary" PRIMARY KEY (id ASC),
        FAMILY "primary" (id, title, author, "createdAt", "updatedAt")
);

CREATE TABLE films (
        id INT NOT NULL DEFAULT unique_rowid(),
        title STRING(255) NULL,
        director STRING(255) NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
        "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
        CONSTRAINT "primary" PRIMARY KEY (id ASC),
        FAMILY "primary" (id, title, director, "createdAt", "updatedAt")
);

INSERT INTO books (id, title, author, "createdAt", "updatedAt") VALUES
        (363701807199748098, '50 nuances de couleurs', 'loic le beau goss', '2018-07-08 15:23:03.131+00:00', '2018-07-08 15:23:03.131+00:00'),
        (363701807199813634, e'bob l\'\u00E9ponge', 'loic', '2018-07-08 15:23:03.131+00:00', '2018-07-08 15:23:03.131+00:00');

INSERT INTO films (id, title, director, "createdAt", "updatedAt") VALUES
        (363701683930071042, '50 nuances de couleurs', 'loic le beau goss', '2018-07-08 15:22:25.525+00:00', '2018-07-08 15:22:25.525+00:00'),
        (363701683930103810, e'bob l\'\u00E9ponge', 'loic', '2018-07-08 15:22:25.525+00:00', '2018-07-08 15:22:25.525+00:00'),
        (363701806778220546, 'les dents de la mer', 'loic le beau goss', '2018-07-08 15:23:03.019+00:00', '2018-07-08 15:23:03.019+00:00'),
        (363701806778253314, 'american nightmare', 'loic', '2018-07-08 15:23:03.019+00:00', '2018-07-08 15:23:03.019+00:00');
