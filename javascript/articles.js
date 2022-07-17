'use strict';

const artArray = [

    {
        artDateIdentifier: "1 January",
        artContents: {
            artTitle: "Headline for 1 January 1922",
            artSubtitle: "Subheadline for 1 January 1922",
            artBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            artPage: "1"
        }
    },

    {
        artDateIdentifier: "30 June",
        artContents: {
            artTitle: "20,000 Barrels of Liquor Sent To France is Resold in America",
            artSubtitle: "Members of $2,000,000 Whisky Pool Rejoice As Settlement Is Made for Canada-Indies Sale",
            artBody: "The last chapter of a whisky adventure overseas undertaken by Louisville and Pennsylvania distillers was completed yesterday with a happy ending. A committee in charge of the transaction met in the office of the Brown, Forman Company, Columbia Building, and reported that approximately $2,000,000 was in sight for the participants in the whisky pool. The last of the whisky was sold two months ago at French ports. In January, 1919, the movement of 20,000 barrels of the best Kentucky whisky and Pennsylvania rye was undertaken. The liquor was landed at La Havre, France. Europeans were reported to have purchased the liquor. But whether it was the competition of vin blanc and vin rouge or whether the European appetite was not accustomed to good whisky, rumor said, the liquor did not sell quickly in Europe. After many months of delay, American firms began the purchase of the liquor in lots of 2,000 barrels, it was said. These purchasers were not named by the committee, but it is said much of the liquor came back across the seas and reached the West Indies and Canada. The committee which had the whisky pool in charge consisted of Owsley Brown and Will Cox of Louisville; Otis Glazebrook of New York and Tom Felder of Paris, France. The latter two were not present yesterday. Besides Mr. Brown, those who attended the meeting were Thomas Bullitt, Leland Taylor and W. C. Wheeler of Louisville; D. J. Hicks of the Overholt Distilling Company of Pittsburgh; Sam Baumgarten of the Jefferson Distilling Company of St. Louis; S. Hirsch of Kansas City, and W. W. Parks of Duquesne, Iowa.",
            artPage: "2"
        }
    },

    {
        artDateIdentifier: "17 July",
        artContents: {
            artTitle: "Headline for 17 July 1922",
            artSubtitle: "Subheadline for 17 July 1922",
            artBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            artPage: "1"
        }
    },

    {
        artDateIdentifier: "29 July",
        artContents: {
            artTitle: "Concert By Full Brass Band Sent Out Clearly By C.-J. Broadcaster",
            artSubtitle: "Pike's Peak \"Listens In\" to Station's Programme, Now Heard From Maine to Colorado.",
            artBody: "Radio fans last night had their first opportunity to hear a full band over W H A S, the radiophone broadcasting station of The Courier-Journal and The Louisville Times. H. H. Dreyer of New Albany and twenty-five members of his band played from 7:30 o'clock until 9:15. Thousands of persons in New Albany were listening to the concert. Many requests for encores came into the studio. A crowd of approximately 700 persons visited the radio exhibition in the lobby of the Liberty Insurance Bank and because of a slight disarrangement of a receiving set there the exposition asked if the concert could be extended for fifteen minutes. Mr. Dreyer complied with the request. Mayor Huston Quin addressed the crowd. The band concert, which included the heaviest band instruments, was an experiment. The radio stations throughout the country have been endeavoring to broadcast full band concerts, but have met with indifferent success. Because of the superior acoustic properties of W H A S' studio the concert last night was sent out without a preliminary test. The fans were asked to communicate with the station the result. Many called by telephone and said the music \"came through\" as clearly as the other concerts. [excerpt]",
            artPage: "1, 11"
        }
    },

    {
        artDateIdentifier: "30 July",
        artContents: {
            artTitle: "Mayor Is Asked to Survey Gas Situation",
            artSubtitle: "Mixing Ordinance Is Sought By Company To Stall Off Famine",
            artBody: "Mayor Huston Quin has been requested by Donald McDonald, vice president of the Louisville Gas & Electric Company, to survey the gas situation, it was learned yesterday, and as a result Dr. Harry M. Limbach, City Gas and Electricity Inspector, may be sent to the gas fields at once. Mr. McDonald told Mr. Quin that an ordinance permitting higher rates for mixed gas should be drawn at once, adding that, in his opinion, it would be impractical to wait until winter. The company has been permissed for the last two years to charge higher rates for mixed gas during the inter months. Mixed gas is necessary, it is said, to prevent a famine.",
            artPage: "4"
        }
    },

    {
        artDateIdentifier: "31 July",
        artContents: {
            artTitle: "Shopping with Peggy True",
            artSubtitle: "The Hose Line for Autumn",
            artBody: "Behold the latest sport hose hanging gaily on the line! The stocking at the left is of imported lisle of an exquisite quality in two tone effect, light with dark blue; tan and brown; black and white; navy with white. The square dot is decidedly new, but you must see it for yourself. Price $2.19 the pair. Pure knitting silk fashions the hose in the center. It is hard finished, fits perfectly giving the ankle a trim line, and the color is soft gray with the pattern done in white. Price $13.98. The other stocking is of silk and lisle in two tones with clocks to match. The shades are gray with silver, black with white, rose and silver or French blue and naby; $3.69 pair. The shop offering these hose carries one of the smartest, most complete lines of imported stockings obtainable, including the English Derby rib. This hose is made of knitting silk, hand finished and may be bought in navy blue with white and other colors. Another imported novelty in all silk is of periwinkle blue and tan with \"fleur de lis\" pattern. Lisle hose, so beautiful in texture as to rival silk, comes with drop stitch or lace clocks in gray or white. The prices are most tempting $1.19 to $1.59 the pair. All articles mentioned in this column are from Louisville shops. Names on request. Write Peggy True, Courier-Journal, or phone Main or City 3200. For personal reply enclose self-addressed envelope.",
            artPage: "5"
        }
    },

    {
        artDateIdentifier: "1 August",
        artContents: {
            artTitle: "Building in July Tops $1,000,000",
            artSubtitle: "Permits Issued Since Jan. 1 Exceed Total for Any Other Entire Year. More Projects in Sight",
            artBody: "July building permits will go slightly over the $1,000,000 mark, according to incomplete totals compiled yesterday by D. M. Brucker, Building Inspector. The total for the year now is approximately $10,300,000, exceeding by more than $2,000,000 that of any full year on record, Mr. brucker said. The figures are a surprise to the officials of the department as it was expected that the operations would decline during midsummer. The autumn usually is accompanied by building operations, and heavy operations are expected again this month. The future, Mr. Brucker believes, looks still brighter for building. There are several million dollars' worth of work proposed next year, including the Elks' Home, a hotel building at Third and Guthrie Streets and other important projects. Should the $750,000 worh of the Jefferson County War Memorial bonds be voted on favorably at the November election it is probable that the building plans will be under way some time during 1923. There is said to be a constant demand for homes and apartments, in spite of the rapid building programme.",
            artPage: "4"
        }
    },

    {
        artDateIdentifier: "2 August",
        artContents: {
            artTitle: "2-Year Hoax Played By Actress Here In Impersonator Role",
            artSubtitle: "Gene Metcalfe, Man Taking Feminine Parts, Is Louisville Woman. Called on Girls Often",
            artBody: "Searchers are hunting for Gene Metcalfe, famous impersonator who disappeared mysteriously in January, but they'll never find him because –\"him\" is \"her.\" And the \"her\" is Mrs. Amanda Norton Gray, 1027 South Second Street, daughter of J. J. Norton. For two years, Mrs. Gray lived as a man, associated with men constantly, was a good-fellow at numerous stag parties and called on girls in many cities, yet only one person knew that her real acting was off-stage and not before the footlights. Friends whom she had known since childhood paid tribute to Gene Metcalfe in person without dreaming it was Amanda Norton of Louisville. And this might have gone on indefinitely but for the unexpected that almost gave everything away. Mrs. Gray explained it last night. More than thirteen years ago Amanda Norton decided to become an actress. She succeeded, and for eleven years she toured the Keith Circuit, appearing in Louisville many times. Later, she was a prima donna with Weber and Fields, but she returned to vaudeville. In September, 1919, Mrs. Gray completed a tour of the South, and on her return to New York, she bagan [sic] wondering how she could do \"something different.\" \"I knew I could sing, but that was all I could do,\" she said. She decided to visit vaudeville shows and while attending a performance a woman with her remarked that a female impersonator on the bill looked like Mrs. Gray. At the time Mrs. Gray thought nothing of it, but that night, while lying in bed, the idea occurred to her. It would take \"nerve,\" but she felt that she had enough. The following morning she employed Frank Metcalfe of New York as a manager. She told him what she planned to do. He was satisfied. And so, in a few seconds, Mrs. Gray had cut off her long black hair. A barber was called to the hotel to complete the work. Clothes were brought to the hotel by Metcalfe, and from then on Mrs. Gray became Gene Metcalfe, a man. Prior to clipping her hair, Mrs. Gray had checked out at the hotel. After the transformation she went to the Hotel Pennsylvania, registering as Gene Metcalfe. This was the test, and it worked. For the next two days, Mrs. Gray – or Gene Metcalfe – walked the streets of New York to find if anyone should detect her identity. Apparently no one paid any attention to her, she said. Then it was decided to ask the Keith Circuit for a tryout. This presented new difficulties. Mrs. Gray for eleven years had known Messrs. Albee, Murdock and Beck, heads of the circuit, and had been known to them as Amanda Gray, a singer. She met them with some trepidation but there was no need to feel ill at ease. \"You can realize how I felt,\" Mrs. Gray said, \"and gee but I was glad when they failed to see though my disguide.\" The tryout was held at Wilmington, Del., in October, 1919, and the \"silvertone\" voice of Gene Metcalfe won the immediate approval of the Keith circuit representation. He returned to New York with the word that \"that boy is the greatest impersonator I've ever seen.\" Mrs. Gray heard of this, and she asked if she looked like a boy. She was assured that she could pass for 19. \"That settles it,\" she informed her manager, \"I'm 19 from now on.\" Her success in the new role was so rapid that she was billed throughout the East and Canada as a headliner. She was playing in washington, later, when she discovered she wa [sic] on the same bill with Virginia Pearson of Louisville, motion picture star, whom Mrs. Gray had known for years. \"Oh, Lord, I'm a goner now,\" Mrs. Gray told herself, and she did her best to remain in seclusion. It was impossible and Miss Pearson finally met Gene Metcalfe. She said: \"Gene, you're one of the nicest boys I've ever met. Your act is a wonder.\" Naturally, Gene Metcalfe was \"such a nice looking boy\" that more than one girl decided to bring into play all the feminine weapons in an effort to win him. Flowers were sent, but these were as nothing to the batch of love letters Mrs. Gray read – and laughed over – last night. A girl named Marion seem [sic] to be the most determined. Her letters started with \"Gene Dear,\" or \"My Own Gene,\" and ended with \"yours in love.\" Some of the girls wrote pleas for letters, but few were answered. There was a definite line drawn, and Mrs. Gray knew that it would be unwise to cross it. The line was reached, once. It was this way: Gene Metcalfe was playing in Halifax, Nova Scotia, and was introduced to the wife of a wealthy New Yorker. The wife fell. She followed Gene to New York and frequently took him on motor trips. The last trip was on a summer's evening. The wife drove to a lonely road, then stopped the car. \"The end has come,\" Mrs. Gray mourned inwardly. She was not surprised, therefore, when the woman started with \"my husband has plenty of money, but I do not care for him.\" She talked along these lines, and ended with an attempt to throw both arms around Gene. But Gene was waiting. He grasped both wrists, kept a straight face, and said: \"I think you are one of the most wonderful women I have ever known, and I do appreciate and want your friendship. But, in Kentucky men have one thing – and that thing is honor.\" Some time later Gene Metcalfe was playing in the East when a woman, also on the bill, approached him. \"Do you know,\" she said, \" you remind me at times of a very dear girl I knew, Amanda Norton Gray.\" \"Do I really look like her?\" Gene replied. \"Well,\" he was told, \"only at times. There is just something that brings her to my mind.\" \"That,\" Mrs. Gray said, \"was the only time I ever heard Gene Metcalfe and Amanda Gray mentioned together.\" When Mrs. Gray decided to become another person, it would be becessary to be thorough. Consequently, she sent home all of her toilet articles and other feminine accessories. She does not like to smoke, but there were times when she was forced to do so. She does not favor profanity, and yet * * * Gene Metcalfe was not billed as a female impersonator – merely as a mysterious personage, perhaps female and perhaps male. Many persons sought to learn the truth. One was a newspaper critic. He interviewed the boy impersonator. His questions consisted of a string of cuss words by which he hoped to find if the actor's face would betray him. \"I struggled through with it,\" Mrs. Gray said, \"but it was some task.\" In line with her policy to be \"a man,\" Mrs. Gray took a course in boxing. She became acquainted with Jack Dempsey and saw him train for one of his championship bouts. \"Say Gene,\" Dempsey remarked, \"you had better lay off of this boxing. First thing you know you will have big back muscles, and then your act won't go.\" By this Dempsey unwittingly aided Mrs. Gray. She repeated his words later in explaining why her hands were soft, and why her muscles were not large. On numerous occasions Gene Metcalfe accepted invitations to address Kiwanis Club meetings in New York, Chicago, Boston and other Eastern cities. Frequently the impersonator would yield to persuasion and visit the corner cafe. \"And I've been in towns,\" Mrs. Gray said, \"where they haven't heard of the prohibition law.\" Mrs. Gray, as Gene Metcalfe, was having a glorious time, but the constant strain of being on guard at all times had a telling effect. She was playing at the Temple in Detroit, January 21, when she became ill. Despite a temperature of 103 1-2, Gene Metcalfe completed the act, but later the actor collapsed in a hotel corridor. Gene Metcalfe was rushed to a hospital, where it was certain her true identity would be revealed. Frank Metcalfe, her manager, thought quickly. He notified the hospital that Amanda Gray would be brought in in a few minutes. By the manager's wit, Gene Metcalfe disappeared in a moment, because when the impersonator reached the hospital, it was a woman. \"I found that men are more open, when together, than women. They accepted me readily. When they talk it is straight from the shoulder. With women it is different. They have petty jealousies. \'Mrs. Smith's gown is prettier than Mrs. Jones,\' and that creates jealousy. You do not know how I felt when girls would try to make love to me. I know how they camouflage with men, and oh, how I longed to say, \'You poor boob. I'm a woman and I know what's coming next.\' Men camouflage too, when they are with women. But they are not as bad as the girls. I suppose many of the girls still have letters from me.\" If they have, they hardly would have appreciated seeing Mrs. Gray, without the least masculine trace, laughing over their letters. And they probably would have gasped if they had seen a pretty little girl pass the door, and call in: \"Hello, mama.\"",
            artPage: "1, 3"
        }
    },

    {
        artDateIdentifier: "31 December",
        artContents: {
            artTitle: "Headline for 31 December 1922",
            artSubtitle: "Subheadline for 31 December 1922",
            artBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            artPage: "1",
        }
    }
]