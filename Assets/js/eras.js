// ------------------------------ Global Variables ------------------------------
var listEl = document.querySelector("#orderedList");

// Timeline era cards
var arrayOfTimelineItems = [
    {
        timeline: {
            date: "01/01/0400", 
            customDisplay: "Ancient Art"
        },
        title: "Ancient Art",
        date: "30,000 B.C. - A.D. 400",
        content: 
            "Ancient art refers to the many types of a art produced by the advanced cultures of ancient societies with some form of writing, such as those of ancient China, India, Mesopotamia, Persia, Palestine, Egypt, Greece, and Rome. The art of pre-literate societies is normally referred to as Prehistoric art and is not covered here. Although some Pre-Columbian cultures developed writing during the centuries before the arrival of Europeans, on grounds of dating these are covered at Pre-Columbian art, and articles such as Maya art and Aztec art. ",
        link: "https://en.wikipedia.org/wiki/Ancient_art",
        img: "./Assets/images/Eras/Ancient.jpeg",
        alt: " Lion hunt. Mosaic from Pella (ancient Macedonia), late 4th century BC",
        width: "300"
    },
    {
        timeline: {
            date: "01/01/0500", 
            customDisplay: "Medieval"
        },
        title: "Medieval",
        date: "A.D 500 - A.D. 1400",
        content: 
            "The medieval art of the Western world covers a vast scope of time and place, over 1000 years of art in Europe, and at certain periods in Western Asia and Northern Africa. It includes major art movements and periods, national and regional art, genres, revivals, the artists' crafts, and the artists themselves.\n\nArt historians attempt to classify medieval art into major periods and styles, often with some difficulty. A generally accepted scheme includes the later phases of Early Christian art, Migration Period art, Byzantine art, Insular art, Pre-Romanesque, Romanesque art, and Gothic art, as well as many other periods within these central styles. In addition each region, mostly during the period in the process of becoming nations or cultures, had its own distinct artistic style, such as Anglo-Saxon art or Viking art.\n\nMedieval art was produced in many media, and works survive in large numbers in sculpture, illuminated manuscripts, stained glass, metalwork and mosaics, all of which have had a higher survival rate than other media such as fresco wall-paintings, work in precious metals or textiles, including tapestry. Especially in the early part of the period, works in the so-called \"minor arts\" or decorative arts, such as metalwork, ivory carving, enamel and embroidery using precious metals, were probably more highly valued than paintings or monumental sculpture. " ,
        link: "https://en.wikipedia.org/wiki/Medieval_art",
        img: "./Assets/images/Eras/Medieval.jpg",
        alt: "Detail of The Effects of Good Government, a fresco in the City Hall of Siena by Ambrogio Lorenzetti, 1338.",
        width: "400"
    },
    {
        timeline: {
            date: "01/01/1400", 
            customDisplay: "Renaissance"
        },
        title: "Renaissance",
        date: "1400 - 1600",
        content: 
            "Renaissance art (1350 - 1620 AD) is the painting, sculpture, and decorative arts of the period of European history known as the Renaissance, which emerged as a distinct style in Italy in about AD 1400, in parallel with developments which occurred in philosophy, literature, music, science, and technology. Renaissance art took as its foundation the art of Classical antiquity, perceived as the noblest of ancient traditions, but transformed that tradition by absorbing recent developments in the art of Northern Europe and by applying contemporary scientific knowledge. Along with Renaissance humanist philosophy, it spread throughout Europe, affecting both artists and their patrons with the development of new techniques and new artistic sensibilities. For art historians, Renaissance art marks the transition of Europe from the medieval period to the Early Modern age.\n\nThe body of art, painting, sculpture, architecture, music, and literature identified as \"Renaissance art\" was primarily produced during the 14th, 15th, and 16th centuries in Europe under the combined influences of an increased awareness of nature, a revival of classical learning, and a more individualistic view of man. Scholars no longer believe that the Renaissance marked an abrupt break with medieval values, as is suggested by the French word renaissance, literally meaning \"rebirth\". Rather, historical sources suggest that interest in nature, humanistic learning, and individualism were already present in the late medieval period and became dominant in 15th- and 16th-century Italy, concurrently with social and economic changes such as the secularization of daily life, the rise of a rational money-credit economy, and greatly increased social mobility. In many parts of Europe, Early Renaissance art was created in parallel with Late Medieval art. " ,
        link: "https://en.wikipedia.org/wiki/Renaissance_art",
        img: "./Assets/images/Eras/Renaissance.jpg",
        alt: "Jan van Eyck, The Ghent Altarpiece: The Adoration of the Mystic Lamb (interior view), 1432",
        width: "500"
    },
    {
        timeline: {
            date: "01/01/1527",
            customDisplay: "Mannerism"
        },
        title: "Mannerism",
        date: "1527 - 1580",
        content: 
            "Mannerism, also known as Late Renaissance, is a style in European art that emerged in the later years of the Italian High Renaissance around 1520, spreading by about 1530 and lasting until about the end of the 16th century in Italy, when the Baroque style largely replaced it. Northern Mannerism continued into the early 17th century.\n\nStylistically, Mannerism encompasses a variety of approaches influenced by, and reacting to, the harmonious ideals associated with artists such as Leonardo da Vinci, Raphael, and early Michelangelo. Where High Renaissance art emphasizes proportion, balance, and ideal beauty, Mannerism exaggerates such qualities, often resulting in compositions that are asymmetrical or unnaturally elegant. Notable for its artificial (as opposed to naturalistic) qualities, this artistic style privileges compositional tension and instability rather than the balance and clarity of earlier Renaissance painting. Mannerism in literature and music is notable for its highly florid style and intellectual sophistication.\n\nThe definition of Mannerism and the phases within it continues to be a subject of debate among art historians. For example, some scholars have applied the label to certain early modern forms of literature (especially poetry) and music of the 16th and 17th centuries. The term is also used to refer to some late Gothic painters working in northern Europe from about 1500 to 1530, especially the Antwerp Mannerists—a group unrelated to the Italian movement. Mannerism has also been applied by analogy to the Silver Age of Latin literature. ",
        link: "https://en.wikipedia.org/wiki/Mannerism",
        img: "./Assets/images/Eras/Mannerism.jpeg",
        alt: "Jacopo Pontormo, Entombment, 1528; Santa Felicità, Florence",
        width: "300"
    },
    {
        timeline: {
            date: "01/01/1600",
            customDisplay: "Baroque"
        },
        title: "Baroque",
        date: "1600 - 1750",
        content: 
            "The Baroque is a style of architecture, music, dance, painting, sculpture, and other arts that flourished in Europe from the early 17th century until the 1740s. In the territories of the Spanish and Portuguese empires including the Iberian Peninsula it continued, together with new styles, until the first decade of the 19th century. It was encouraged by the Catholic Church as a means to counter the simplicity and austerity of Protestant architecture, art, and music, though Lutheran Baroque art developed in parts of Europe as well.\n\nThe Baroque style used contrast, movement, exuberant detail, deep colour, grandeur, and surprise to achieve a sense of awe. The style began at the start of the 17th century in Rome, then spread rapidly to France, northern Italy, Spain, and Portugal, then to Austria, southern Germany, and Russia. By the 1730s, it had evolved into an even more flamboyant style, called rocaille or Rococo, which appeared in France and Central Europe until the mid to late 18th century.\n\nIn the decorative arts, the style employs plentiful and intricate ornamentation. The departure from Renaissance classicism has its own ways in each country. But a general feature is that everywhere the starting point is the ornamental elements introduced by the Renaissance. The classical repertoire is crowded, dense, overlapping, loaded, in order to provoke shock effects. New motifs introduced by Baroque are: the cartouche, trophies and weapons, baskets of fruit or flowers, and others, made in marquetry, stucco, or carved. ",
        link: "https://en.wikipedia.org/wiki/Baroque",
        img: "./Assets/images/Eras/Baroque.jpeg",
        alt: "Venus and Adonis by Peter Paul Rubens (1635–40)",
        width: "400"
    },
    {
        timeline: {
            date: "01/01/1699",
            customDisplay: "Rococo"
        },
        title: "Rococo",
        date: "1699 - 1780",
        content: 
            "Rococo is an exceptionally ornamental and theatrical style of architecture, art and decoration which combines asymmetry, scrolling curves, gilding, white and pastel colors, sculpted molding, and trompe-l'œil frescoes to create surprise and the illusion of motion and drama. It is often described as the final expression of the Baroque movement.\n\nThe Rococo style began in France in the 1730s as a reaction against the more formal and geometric Style Louis XIV. It was known as the style rocaille, or rocaille style. It soon spread to other parts of Europe, particularly northern Italy, Austria, southern Germany, Central Europe and Russia. It also came to influence the other arts, particularly sculpture, furniture, silverware, glassware, painting, music, and theatre. Although originally a secular style primarily used for interiors of private residences the Rococo had a spiritual aspect to it which led to its widespread use in church interiors, particularly in Central Europe, Portugal, and South America. ",
        link: "https://en.wikipedia.org/wiki/Rococo",
        img: "./Assets/images/Eras/Rococo.jpg",
        alt: "Ca' Rezzonico (Venice) ",
        width: "400"
    },
    {
        timeline: {
            date: "01/01/1750",
            customDisplay: "Neoclassicism"
        },
        title: "Neoclassicism",
        date: "1750 - 1850",
        content: 
            "Neoclassicism was a Western cultural movement in the decorative and visual arts, literature, theatre, music, and architecture that drew inspiration from the art and culture of classical antiquity. Neoclassicism was born in Rome largely thanks to the writings of Johann Joachim Winckelmann, at the time of the rediscovery of Pompeii and Herculaneum, but its popularity spread all over Europe as a generation of European art students finished their Grand Tour and returned from Italy to their home countries with newly rediscovered Greco-Roman ideals. The main Neoclassical movement coincided with the 18th-century Age of Enlightenment, and continued into the early 19th century, laterally competing with Romanticism. In architecture, the style continued throughout the 19th, 20th and up to the 21st century.\n\nEuropean Neoclassicism in the visual arts began c. 1760 in opposition to the then-dominant Rococo style. Neoclassical architecture is based on the principles of simplicity and symmetry, which were seen as virtues of the arts of Rome and Ancient Greece, and were more immediately drawn from 16th-century Renaissance Classicism. Each \"neo\"-classicism selects some models among the range of possible classics that are available to it, and ignores others. The Neoclassical writers and talkers, patrons and collectors, artists and sculptors of 1765–1830 paid homage to an idea of the generation of Phidias, but the sculpture examples they actually embraced were more likely to be Roman copies of Hellenistic sculptures. They ignored both Archaic Greek art and the works of Late Antiquity.\n\nThe Empire style, a second phase of Neoclassicism in architecture and the decorative arts, had its cultural centre in Paris in the Napoleonic era. Especially in architecture, but also in other fields, Neoclassicism remained a force long after the early 19th century, with periodic waves of revivalism into the 20th and even the 21st centuries, especially in America and Russia. ",
        link: "https://en.wikipedia.org/wiki/Neoclassicism",
        img: "./Assets/images/Eras/Neoclassicism.jpeg",
        alt: "Anton Raphael Mengs; Judgement of Paris; circa 1757",
        width: "450"
    },
    {
        timeline: {
            date: "01/01/1780",
            customDisplay: "Romanticism"
        },
        title: "Romanticism",
        date: "1780 - 1850",
        content: 
            "Romanticism (also known as the Romantic era) was an artistic, literary, musical, and intellectual movement that originated in Europe towards the end of the 18th century, and in most areas was at its peak in the approximate period from 1800 to 1850. Romanticism was characterized by its emphasis on emotion and individualism as well as glorification of all the past and nature, preferring the medieval rather than the classical. It was partly a reaction to the Industrial Revolution, the aristocratic social and political norms of the Age of Enlightenment, and the scientific rationalization of nature—all components of modernity. It was embodied most strongly in the visual arts, music, and literature, but had a major impact on historiography, education, chess, social sciences, and the natural sciences. It had a significant and complex effect on politics, with romantic thinkers influencing liberalism, radicalism, conservatism, and nationalism.\n\nThe movement emphasized intense emotion as an authentic source of aesthetic experience, placing new emphasis on such emotions as fear, horror and terror, and awe — especially that experienced in confronting the new aesthetic categories of the sublime and beauty of nature. It elevated folk art and ancient custom to something noble, but also spontaneity as a desirable characteristic (as in the musical impromptu). In contrast to the Rationalism and Classicism of the Enlightenment, Romanticism revived medievalism and elements of art and narrative perceived as authentically medieval in an attempt to escape population growth, early urban sprawl, and industrialism.\n\nAlthough the movement was rooted in the German Sturm und Drang movement, which preferred intuition and emotion to the rationalism of the Enlightenment, the events and ideologies of the French Revolution were also proximate factors since many of the early Romantics were cultural revolutionaries and sympathetic to the revolution. Romanticism assigned a high value to the achievements of \"heroic\" individualists and artists, whose examples, it maintained, would raise the quality of society. It also promoted the individual imagination as a critical authority allowed of freedom from classical notions of form in art. There was a strong recourse to historical and natural inevitability, a Zeitgeist, in the representation of its ideas. The decline of Romanticism during the second half of the 19th century was associated with multiple processes, including social and political changes. ",
        link: "https://en.wikipedia.org/wiki/Romanticism",
        img: "./Assets/images/Eras/Romanticism.jpeg",
        alt: "Caspar David Friedrich, Wanderer above the Sea of Fog, 1818",
        width: "400"
    },
    {
        timeline: {
            date: "01/01/1848",
            customDisplay: "Realism"
        },
        title: "Realism",
        date: "1848 - 1900",
        content: 
            "Realism was an artistic movement that emerged in France in the 1840s, around the 1848 Revolution. Realists rejected Romanticism, which had dominated French literature and art since the early 19th century. Realism revolted against the exotic subject matter and the exaggerated emotionalism and drama of the Romantic movement. Instead, it sought to portray real and typical contemporary people and situations with truth and accuracy, and not avoiding unpleasant or sordid aspects of life. The movement aimed to focus on unidealised subjects and events that were previously rejected in art work. Realist works depicted people of all classes in situations that arise in ordinary life, and often reflected the changes brought by the Industrial and Commercial Revolutions. Realism was primarily concerned with how things appeared to the eye, rather than containing ideal representations of the world.\n\nThe Realists depicted everyday subjects and situations in contemporary settings, and attempted to depict individuals of all social classes in a similar manner. Gloomy earth toned palettes were used to ignore beauty and idealisation that was typically found in art. This movement sparked controversy because it purposefully criticised social values and the upper classes, as well as examining the new values that came along with the industrial revolution. Realism is widely regarded as the beginning of the modern art movement due to the push to incorporate modern life and art together. Social realism emphasises the depiction of the working class, and treating them with the same seriousness as other classes in art, but realism, as the avoidance of artificiality, in the treatment of human relations and emotions was also an aim of Realism. Treatments of subjects in a heroic or sentimental manner were equally rejected. ",
        link: "https://en.wikipedia.org/wiki/Realism_(art_movement)",
        img: "./Assets/images/Eras/Realism.jpeg",
        alt: "Jean-François Millet, The Sower, 1850",
        width: "400"
    },
    {
        timeline: {
            date: "01/01/1865",
            customDisplay: "Impressionism"
        },
        title: "Impressionism",
        date: "1865 - 1885",
        content: 
            "Impressionism is a 19th-century art movement characterised by relatively small, thin, yet visible brush strokes, open composition, emphasis on accurate depiction of light in its changing qualities (often accentuating the effects of the passage of time), ordinary subject matter, unusual visual angles, and inclusion of movement as a crucial element of human perception and experience. Impressionism originated with a group of Paris-based artists whose independent exhibitions brought them to prominence during the 1870s and 1880s. The Impressionists faced harsh opposition from the conventional art community in France. The name of the style derives from the title of a Claude Monet work, Impression, soleil levant (Impression, Sunrise), which provoked the critic Louis Leroy to coin the term in a satirical review published in the Parisian newspaper Le Charivari. The development of Impressionism in the visual arts was soon followed by analogous styles in other media that became known as impressionist music and impressionist literature. ",
        link: "https://en.wikipedia.org/wiki/Impressionism",
        img: "./Assets/images/Eras/Impressionism.jpeg",
        alt: "Claude Monet, Le Grand Canal, 1908",
        width: "400"
    },
    {
        timeline: {
            date: "01/01/1886",
            customDisplay: "Post-Impressionism"
        },
        title: "Post-Impressionism",
        date: "1886 - 1905",
        content: 
            "Post-Impressionism (also spelled Postimpressionism) is a predominantly French art movement that developed roughly between 1886 and 1905. Post-Impressionism emerged as a reaction against Impressionists' concern for the naturalistic depiction of light and colour. Due to its broad emphasis on abstract qualities or symbolic content, Post-Impressionism encompasses Les Nabis, Neo-Impressionism, Symbolism, Cloisonnism, Pont-Aven School, as well as Synthetism, along with some later Impressionists' work. The movement was led by Paul Cézanne (known as the father of Post-Impressionism), Paul Gauguin, Vincent van Gogh and Georges Seurat.\n\nThe term Post-Impressionism was first used by art critic Roger Fry in 1906. It extended Impressionism while rejecting its limitations: they continued using vivid colours, often thick application of paint and real-life subject matter, but were more inclined to emphasise geometric forms, distort form for expressive effect and use unnatural or arbitrary colour. ",
        link: "https://en.wikipedia.org/wiki/Post-Impressionism",
        img: "./Assets/images/Eras/Post-Impressionism.jpeg",
        alt: "The Starry Night, June 1889",
        width: "300"
    },
    {
        timeline: {
            date: "01/01/1900",
            customDisplay: "Fauvism"
        },
        title: "Fauvism",
        date: "1900 - 1935",
        content: 
            "Fauvism is the style of les Fauves (French for \"the wild beasts\"), a group of early 20th-century modern artists whose works emphasised painterly qualities and strong colour over the representational or realistic values retained by Impressionism. While Fauvism as a style began around 1904 and continued beyond 1910, the movement as such lasted only a few years, and had three exhibitions. The leaders of the movement were André Derain and Henri Matisse.\n\nThe paintings of the Fauves were characterised by seemingly wild brush work and strident colours, while their subject matter had a high degree of simplification and abstraction. Fauvism can be classified as an extreme development of Van Gogh's Post-Impressionism fused with the pointillism of Seurat and other Neo-Impressionist painters, in particular Paul Signac. ",
        link: "https://en.wikipedia.org/wiki/Fauvism",
        img: "./Assets/images/Eras/Fauvism.png",
        alt: "André Derain, 1906, Charing Cross Bridge, London",
        width: "400"
    },
    {
        timeline: {
            date: "01/01/1905",
            customDisplay: "Expressionism"
        },
        title: "Expressionism",
        date: "1905 - 1920",
        content: 
            "Expressionism is a modernist movement,  originating in Northern Europe around the beginning of the 20th century. Its typical trait is to present the world solely from a subjective perspective, distorting it radically for emotional effect in order to evoke moods or ideas. Expressionist artists have sought to express the meaning of emotional experience rather than physical reality.\n\nExpressionism developed as an avant-garde style before the First World War.  The style extended to a wide range of the arts, including expressionist architecture, painting, literature, theatre, dance, film and music. The term is sometimes suggestive of angst. In a historical sense, much older painters such as Matthias Grünewald and El Greco are sometimes termed expressionist, though the term is applied mainly to 20th-century works. The Expressionist emphasis on individual and subjective perspective has been characterised as a reaction to positivism and other artistic styles such as Naturalism and Impressionism. ",
        link: "https://en.wikipedia.org/wiki/Expressionism",
        img: "./Assets/images/Eras/Expressionism.jpeg",
        alt: "Edvard Munch, 1893, The Scream, oil, tempera and pastel on cardboard",
        width: "300"
    },
    {
        timeline: {
            date: "01/01/1907",
            customDisplay: "Cubism"
        },
        title: "Cubism",
        date: "1907 - 1914",
        content: 
            "Cubism is an early-20th-century avant-garde art movement that revolutionised European painting and sculpture, and inspired related movements in music, literature and architecture. In Cubist artwork, objects are analysed, broken up and reassembled in an abstracted form—instead of depicting objects from a single viewpoint, the artist depicts the subject from a multitude of viewpoints to represent the subject in a greater context. Cubism has been considered the most influential art movement of the 20th century. The term is broadly used in association with a wide variety of art produced in Paris during the 1910s and throughout the 1920s.\n\nThe movement was pioneered by Pablo Picasso and Georges Braque, and joined by Jean Metzinger, Albert Gleizes, Robert Delaunay, Henri Le Fauconnier, Juan Gris, and Fernand Léger. One primary influence that led to Cubism was the representation of three-dimensional form in the late works of Paul Cézanne. ",
        link: "https://en.wikipedia.org/wiki/Cubism",
        img: "./Assets/images/Eras/Cubism.jpg",
        alt: "Pablo Picasso, 1909–10, Figure dans un Fauteuil",
        width: "350"
    },
    {
        timeline: {
            date: "01/01/1917",
            customDisplay: "Surrealism"
        },
        title: "Surrealism",
        date: "1917 - 1950",
        content: 
            "Surrealism was a cultural movement which developed in Europe in the aftermath of World War I and was largely influenced by Dada. The movement is best known for its visual artworks and writings and the juxtaposition of distant realities to activate the unconscious mind through the imagery. Artists painted unnerving, illogical scenes, sometimes with photographic precision, creating strange creatures from everyday objects, and developing painting techniques that allowed the unconscious to express itself. Its aim was, according to leader André Breton, to \"resolve the previously contradictory conditions of dream and reality into an absolute reality, a super-reality\", or surreality.\n\nWorks of Surrealism feature the element of surprise, unexpected juxtapositions and non sequitur. However, many Surrealist artists and writers regard their work as an expression of the philosophical movement first and foremost (for instance, of the \"pure psychic automatism\" Breton speaks of in the first Surrealist Manifesto), with the works themselves being secondary, i.e. artefacts of surrealist experimentation. Leader Breton was explicit in his assertion that Surrealism was, above all, a revolutionary movement. At the time, the movement was associated with political causes such as communism and anarchism. ",
        link: "https://en.wikipedia.org/wiki/Surrealism",
        img: "./Assets/images/Eras/Surrealism.jpeg",
        alt: "Yves Tanguy Indefinite Divisibility 1942",
        width: "400"
    },
    {
        timeline: {
            date: "01/01/1940",
            customDisplay: "Abstract Expressionism"
        },
        title: "Abstract Expressionism",
        date: "1940 - 1950s",
        content: 
            "Abstract expressionism is a post–World War II art movement in American painting, developed in New York City in the 1940s. It was the first specifically American movement to achieve international influence and put New York at the centre of the Western art world, a role formerly filled by Paris. Although the term \"abstract expressionism\" was first applied to American art in 1946 by the art critic Robert Coates, it had been first used in Germany in 1919 in the magazine Der Sturm, regarding German Expressionism.\n\nAbstract expressionism is often characterised by gestural brush-strokes or mark-making, and the impression of spontaneity. Within it were two broad groupings: the so-called action painters, who attacked their canvases with expressive brush strokes; and the colour field painters who filled their canvases with large areas of a single colour. While the second grouping (known as colour filed painting) was deeply interested in religion and myth and created simple compositions with large areas of colour intended to produce a contemplative or meditational response in the viewer. ",
        link: "https://en.wikipedia.org/wiki/Abstract_expressionism",
        img: "./Assets/images/Eras/Abstract Expressionism.jpeg",
        alt: "Arshile Gorky, The Liver is the Cock's Comb (1944)",
        width: "400"
    },
    {
        timeline: {
            date: "01/06/1960",
            customDisplay: "Conceptual Art"
        },
        title: "Conceptual Art",
        date: "1960s - 1970s",
        content: 
            "Conceptual art (or conceptualism) is art for which the idea (or concept) behind the work takes precedence over the aesthetic, technical and material concerns. It emerged as an art movement in the 1960s and the term usually refers to art made from the mid-1960s to the mid-1970s.\n\nSome works of conceptual art, sometimes called installations, may be constructed by anyone simply by following a set of written instructions. This method was fundamental to American artist Sol LeWitt's definition of conceptual art, one of the first to appear in print:\n\nIn conceptual art the idea or concept is the most important aspect of the work. When an artist uses a conceptual form of art, it means that all of the planning and decisions are made beforehand and the execution is a perfunctory affair. The idea becomes a machine that makes the art. ",
        link: "https://en.wikipedia.org/wiki/Conceptual_art",
        img: "./Assets/images/Eras/Conceptual-art.jpeg",
        alt: "An Oak Tree by Michael Craig-Martin. 1973",
        width: "400"
    },
    {
        timeline: {
            date: "01/01/1970",
            customDisplay: "Contemporary Art"
        },
        title: "Contemporary Art",
        date: "1970s - present",
        content: 
            "Contemporary art is the art of today, produced in the second half of the 20th century or in the 21st century. Contemporary artists work in a globally influenced, culturally diverse, and technologically advancing world. Their art is a dynamic combination of materials, methods, concepts, and subjects that continue the challenging of boundaries that was already well underway in the 20th century. Diverse and eclectic, contemporary art as a whole is distinguished by the very lack of a uniform, organising principle, ideology, or \"-ism\". Contemporary art is part of a cultural dialogue that concerns larger contextual frameworks such as personal and cultural identity, family, community, and nationality. ",
        link: "https://en.wikipedia.org/wiki/Contemporary_art",
        img: "./Assets/images/Eras/Contemporary-art.jpg",
        alt: "Free and Leisure-10, Yue Minjun, 2003",
        width: "400"
    }
];


function timedRenderer() {
    var idx = 0;
    var afterDate = "01/01/0300";
  
    return function renderTimeline() {
      if (idx >= arrayOfTimelineItems.length) {
          return;
        };
  
      const { timeline, title, date, content, img, link, alt, width } = arrayOfTimelineItems[idx];
      
        // Dynamically create html elements, whilst changing all the information for each era event using array
      var html = `<li data-horizontal-timeline='${JSON.stringify(timeline)}'>
                <h4>${title}</h4>
                <p class="date">${date}</p>
                <div class="content"><p>${content} <a href="${link}" target="_blank">Read more...</a>
                </p><img src="${img}" alt="${alt}" width="${width}"/></div>
                </li>`;
  
      $("#era-timeline-container").horizontalTimeline("addEvent", html, "after", afterDate);
      afterDate = timeline.date;
      idx++;
        
      // Timeout added to create enough of time to hit the DOM and refresh before the next era event
      setTimeout(renderTimeline, 350);
    };
};
  
setTimeout(timedRenderer(), 350);


// ------------------------------ jsdilvr CDN Settings --------------------------
$("#era-timeline-container").horizontalTimeline({

    dateIntervals: {
      desktop: 200,
      tablet: 150,
      mobile: 120,
      minimal: true,
    },
  
    dateDisplay: "year", 
    dateOrder: "normal", 
  
    autoplay: false,
    autoplaySpeed: 8,
    autoplayPause_onHover: false,
  
    useScrollWheel: false,
    useTouchSwipe: true,
    useKeyboardKeys: false,
    addRequiredFile: true,
    useFontAwesomeIcons: true,
    useNavBtns: true,
    useScrollBtns: true,
  
    iconClass: {
      base: "fas fa-3x", 
      scrollLeft: "fa-arrow-circle-left",
      scrollRight: "fa-arrow-circle-right",
      prev: "fa-arrow-circle-left",
      next: "fa-arrow-circle-right",
      pause: "fa-pause-circle",
      play: "fa-play-circle",
    },
    animationClass: {
      base: "animationSpeed", 
      enter: {
        left: "enter-left",
        right: "enter-right",
      },
      exit: {
        left: "exit-left",
        right: "exit-right",
      },
    },
  });