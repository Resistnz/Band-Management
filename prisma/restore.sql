BEGIN TRANSACTION;
DELETE FROM "SetlistSong";
DELETE FROM "Setlist";
DELETE FROM "Song";
DELETE FROM "Transaction";
DELETE FROM "RoadmapItem";

INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('6825bfc5-2edf-49f2-8c35-6b9af594107a', 'Rhiannon', 1, 'Fleetwood Mac');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('c0cffa5c-4afc-4cb3-bdb2-fa68ab65f457', 'Weir', 1, 'Killing Heidi');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('326ce87d-ed7d-48a9-a3ce-bce08627e0cb', 'Eagle Rock', 1, 'Daddy Cool');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('44c373e0-1067-4c84-a16f-b968e5ebed70', 'Don''t Change', 1, 'Grinspoon');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('863386a2-00e6-4283-8b1a-25f2b78eb890', 'Down To The Waterline', 1, 'Dire Straits');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('5918268b-27e8-417c-873f-15c3a6b5bb65', 'Sultans Of Swing', 1, 'Dire Straits');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('e707d29f-3db9-4ebb-97c3-b7f6ff6c001e', 'Jeep On 35', 1, 'John Scofield');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('ab2a62fc-098c-4dd2-a1df-ab97f3eaf8d1', 'Layla', 1, 'Eric Clapton');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('94b62e10-2c0c-41c4-9e03-d738a2d4e83c', 'Green Eyes', 1, 'Coldplay');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('b419a68a-7316-445d-9945-b55543359ebe', 'Rosanna', 1, 'Toto');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('0b93db36-be51-47b6-bea3-10f02969ab6f', 'Black Hole Sun', 1, 'Soundgarden');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('26f8285b-e3be-4194-a80e-7745fa659ae7', 'Ain''t Nobody', 1, 'Chaka Khan');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('45be695e-d0f1-45d2-af43-a92a3621cb13', 'Don''t Dream It''s Over', 1, 'Crowded House');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('0210c0dd-a471-42bf-8514-9bfc84218273', 'Come Together', 1, 'The Beatles');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('364a301e-a078-4d66-bcae-ad2e5bbbe369', 'Shakey Ground', 1, 'The Temptations');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('c2b82417-5722-45a3-8dc6-bb8c5d02ae9a', 'Superstition', 1, 'Stevie Wonder / Jeff Beck');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('5089ce04-e632-4ffc-8285-8d93ca932034', 'The Chain', 1, 'Fleetwood Mac');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('5d289aad-a57e-4251-a23a-63a77f91d7bc', 'Silver Springs', 1, 'Fleetwood Mac');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('a1b63e96-b47b-4220-b9d3-16c185901601', 'Red House', 1, 'Jimi Hendrix');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('e34d488e-afd8-4b50-b85b-0154d972982a', 'Purple Haze', 1, 'Jimi Hendrix');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('dd7b8698-4284-4ee0-aa87-4f1e1f68fc54', 'Dazed And Confused', 1, 'Led Zeppelin');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('9d8ec47e-a2dd-4983-908f-55ef3d721c2b', 'Are You Gonna Be My Girl', 1, 'Jet');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('04f5f2d5-7650-47c1-90d8-8d9e714497fa', 'Just A Girl', 1, 'No Doubt');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('c4bc3ce2-9610-4994-a30c-1639cfb95d78', 'Hotel California', 1, 'The Eagles');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('bf8aca0d-a443-4669-928d-740f2fe13f34', 'Black Magic Woman', 1, 'Santana');
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('f05b49af-978d-4ba5-b1df-fd2270f8baaa', 'Help Me', 0, NULL);
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('44153508-c7f5-4027-bb88-42ccdc65a1ec', 'Hatman', 0, NULL);
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('89192951-7ff5-4c55-a433-74e39bf27501', 'Apples', 0, NULL);
INSERT INTO "Song" ("id", "title", "isCover", "originalArtist") VALUES ('acd92256-9bf8-4f2e-bcc0-717a45800842', 'Whole Lotta Love', 1, 'Led Zeppelin');

INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('3f6febb6-779d-44f4-bf03-c0702edc9de9', '2024-01-10T20:00:00.000Z', 'South Street Ale House', 'First Gig!', NULL, NULL, NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('26c06a9f-af9c-4e73-a11c-e4defdb7f36d', '2024-01-17T20:00:00.000Z', 'South Street Ale House', NULL, NULL, 'Tone for Ain''t Nobody was very trebly', NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('80f38b1b-d185-4e57-a465-1f1b9021977d', '2024-01-24T20:00:00.000Z', 'Taya Engagement Party', NULL, NULL, NULL, NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('7ec87dcd-2053-49a3-84de-8e6f99813dd3', '2024-02-01T20:00:00.000Z', 'Zeke Engagement Party', NULL, NULL, NULL, NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('4122448f-b7c4-409c-b4fc-f1435a07ac7b', '2024-02-08T20:00:00.000Z', 'Birthday', NULL, NULL, NULL, NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('4ef1d1c2-b654-4460-b08c-d807389588de', '2024-02-15T20:00:00.000Z', 'SWA Party', NULL, NULL, NULL, NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('5784a6b4-f2c6-4fb9-b7b1-6c7024c6cee1', '2024-02-22T20:00:00.000Z', 'Indi Bar', 'Sunday Sesh', NULL, NULL, NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('f8e1d468-226f-49a4-9088-78bccfd0e613', '2024-03-01T20:00:00.000Z', 'Sea Shepherd', NULL, NULL, NULL, NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('9b5c0f4c-a973-4788-9415-27b430c23c31', '2024-03-08T20:00:00.000Z', 'Indi Bar', 'Sunday Sesh', NULL, NULL, NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('78af7be8-0a18-4e65-95a5-ff9e1e26d207', '2024-03-15T20:00:00.000Z', 'Madi Birthday', NULL, NULL, NULL, 'Idk the order of these');
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('c7fda64d-1570-42bb-ad08-773e24127d6d', '2024-03-22T20:00:00.000Z', 'Indi Bar', 'Plug and Play', NULL, NULL, NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', '2024-03-29T20:00:00.000Z', 'Indi Bar', 'Plug and Play', 'Crowd absolutely loved it
Best gig we''ve played so far', 'Ryan stepped on his cable lol', NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('e009b525-5063-4e68-8fa7-22987a262f21', '2024-04-05T20:00:00.000Z', 'Milk Bar', NULL, 'Great turnout for a venue in the middle of nowhere', 'Crowd less engaged than usual
Didn''t sound too cohesive', NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('f956377b-a831-4a1c-9de5-e9c0a3a7d95c', '2024-04-12T20:00:00.000Z', 'The Bird', 'Supporting the Goddamn Darlings', 'Crowd of new people enjoyed', 'Need to move more!!!!!!!
Ryan arrived way to close to 7:30 and didn''t give us enough heads up about it', NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('92f3e4af-5297-4d91-9ccd-9106f822f9da', '2024-04-19T20:00:00.000Z', 'Indi Bar', 'Toy Crown Single Launch', 'Help me was awesome
Crowd energy was great by the end
Complements on good cover choices
Complements on 2 guitars playing together', 'Zeke couldn''t get the reverb lmao
Long time between songs
Missed entrance to second chorus silver springs
Tobias solos were poor', NULL);
INSERT INTO "Setlist" ("id", "date", "venue", "notes", "goodNotes", "badNotes", "interestingNotes") VALUES ('b691aa43-68a1-44ce-947d-401c21b674c4', '2024-04-26T20:00:00.000Z', 'Indi Bar', 'Hello Stranger', 'Sold out!!!!
Amazing energy
Incredible drum fills
Very well done', 'Missed second half of second solo in black magic woman but caught it perfectly', NULL);

INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('14c3e4ab-420e-404f-90a9-ebfa4104ace2', '3f6febb6-779d-44f4-bf03-c0702edc9de9', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('b65ded6d-1013-4e45-bcae-4f408d42b811', '3f6febb6-779d-44f4-bf03-c0702edc9de9', '5d289aad-a57e-4251-a23a-63a77f91d7bc', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('acf74905-3b08-46ad-bccc-f5de2f36c7e5', '3f6febb6-779d-44f4-bf03-c0702edc9de9', '45be695e-d0f1-45d2-af43-a92a3621cb13', 3, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('d93ca2ab-7751-48e4-b0d4-0bd650cc0ca8', '3f6febb6-779d-44f4-bf03-c0702edc9de9', 'c2b82417-5722-45a3-8dc6-bb8c5d02ae9a', 4, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('68179487-646b-476f-a7fb-bf8735bda08c', '26c06a9f-af9c-4e73-a11c-e4defdb7f36d', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('2477ae4b-ecb6-4b25-aa06-9a399a7a9a9b', '26c06a9f-af9c-4e73-a11c-e4defdb7f36d', 'e34d488e-afd8-4b50-b85b-0154d972982a', 2, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('e0976e71-454d-4ad9-bbc8-0a4005a5e581', '7ec87dcd-2053-49a3-84de-8e6f99813dd3', '9d8ec47e-a2dd-4983-908f-55ef3d721c2b', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('17be7075-8d37-405d-bcf2-7879077a2595', '7ec87dcd-2053-49a3-84de-8e6f99813dd3', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('6d281d98-22ce-43ba-84fc-f207b3e909c3', '7ec87dcd-2053-49a3-84de-8e6f99813dd3', '5d289aad-a57e-4251-a23a-63a77f91d7bc', 3, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('8bf92967-ab81-4a97-bc82-ab79da5b17e3', '7ec87dcd-2053-49a3-84de-8e6f99813dd3', 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', 4, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('a61b49f4-67e5-4a83-a18e-4323d9f5dc9e', '7ec87dcd-2053-49a3-84de-8e6f99813dd3', '04f5f2d5-7650-47c1-90d8-8d9e714497fa', 5, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('6adb483e-7953-4072-95b8-f781099ae7bc', '7ec87dcd-2053-49a3-84de-8e6f99813dd3', '863386a2-00e6-4283-8b1a-25f2b78eb890', 6, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('c01521be-4968-4e0a-b678-5a17800f8c1f', '4122448f-b7c4-409c-b4fc-f1435a07ac7b', '04f5f2d5-7650-47c1-90d8-8d9e714497fa', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('6de3f472-01f1-460d-b580-e1de77a13484', '4122448f-b7c4-409c-b4fc-f1435a07ac7b', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('c9c63b66-4da0-4af1-8817-a72f4fdb09ba', '4122448f-b7c4-409c-b4fc-f1435a07ac7b', 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', 3, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('41dde199-60ea-4ca1-a232-7f60c6ff6317', '4ef1d1c2-b654-4460-b08c-d807389588de', 'e34d488e-afd8-4b50-b85b-0154d972982a', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('73b9867f-0759-4b28-968e-12cddb7961aa', '4ef1d1c2-b654-4460-b08c-d807389588de', '9d8ec47e-a2dd-4983-908f-55ef3d721c2b', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('0e08ad43-0cb7-4ffc-8f59-ee97868090a9', '4ef1d1c2-b654-4460-b08c-d807389588de', 'acd92256-9bf8-4f2e-bcc0-717a45800842', 3, 0, 0, 'Incredible performance of this, especially Taya');
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('dbd945d9-111b-4a51-b699-5414ab3de7f5', '4ef1d1c2-b654-4460-b08c-d807389588de', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 4, 0, 0, 'We lost the crowd here');
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('6e6f9a9b-588d-4d8f-9953-e3924db8cd76', '4ef1d1c2-b654-4460-b08c-d807389588de', 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', 5, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('fc20b782-4901-4756-95da-df38d6ec4b97', '4ef1d1c2-b654-4460-b08c-d807389588de', '5d289aad-a57e-4251-a23a-63a77f91d7bc', 6, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('13d8a9d4-4946-4b57-bffc-8c52fa860445', '4ef1d1c2-b654-4460-b08c-d807389588de', '04f5f2d5-7650-47c1-90d8-8d9e714497fa', 7, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('46d9a4b5-6ffb-4eba-b0b4-515a80544a4a', '5784a6b4-f2c6-4fb9-b7b1-6c7024c6cee1', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('dc8f94ba-2764-4ddd-b4ac-d8e4a0c5e501', '5784a6b4-f2c6-4fb9-b7b1-6c7024c6cee1', 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('ff487f34-0502-4b74-a402-3de1acd4b4d4', '5784a6b4-f2c6-4fb9-b7b1-6c7024c6cee1', 'acd92256-9bf8-4f2e-bcc0-717a45800842', 3, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('4e7c218e-b66d-46c7-a6ee-a15b3aaddb09', 'f8e1d468-226f-49a4-9088-78bccfd0e613', '89192951-7ff5-4c55-a433-74e39bf27501', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('e8d5a5d7-3612-49b8-a630-33324fe68aa4', 'f8e1d468-226f-49a4-9088-78bccfd0e613', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('b6dcf63c-abbc-4bb7-86ca-fd18209d345a', 'f8e1d468-226f-49a4-9088-78bccfd0e613', 'bf8aca0d-a443-4669-928d-740f2fe13f34', 3, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('5ab514e3-145c-4477-a583-e34ee2785e2d', '78af7be8-0a18-4e65-95a5-ff9e1e26d207', '863386a2-00e6-4283-8b1a-25f2b78eb890', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('b35d9c73-0ac3-48d8-a95d-fc8fdcd9e6c8', '78af7be8-0a18-4e65-95a5-ff9e1e26d207', '89192951-7ff5-4c55-a433-74e39bf27501', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('66e6dea7-eb6b-4924-be11-64fd3a62c475', '78af7be8-0a18-4e65-95a5-ff9e1e26d207', 'bf8aca0d-a443-4669-928d-740f2fe13f34', 3, 0, 0, 'Messed this up a fair bit, but it was our first time playing');
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('0bb34710-d4ce-4bd0-9f96-a0d7bb4c588d', '78af7be8-0a18-4e65-95a5-ff9e1e26d207', 'c4bc3ce2-9610-4994-a30c-1639cfb95d78', 4, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('a4147dac-2a2b-4d0e-8a7e-3070eb3068da', '78af7be8-0a18-4e65-95a5-ff9e1e26d207', 'acd92256-9bf8-4f2e-bcc0-717a45800842', 5, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('2a9b7e0a-83be-40bb-ab98-89006b27013a', '78af7be8-0a18-4e65-95a5-ff9e1e26d207', '5089ce04-e632-4ffc-8285-8d93ca932034', 6, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('781a23bd-7e05-4046-9c74-52ca630ff245', '78af7be8-0a18-4e65-95a5-ff9e1e26d207', 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', 7, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('0c15d7eb-1f4d-4d8f-942d-b98b0e5123c7', '78af7be8-0a18-4e65-95a5-ff9e1e26d207', 'e707d29f-3db9-4ebb-97c3-b7f6ff6c001e', 8, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('5e605a4a-4a48-4090-891e-d56d6fe9e2e3', '78af7be8-0a18-4e65-95a5-ff9e1e26d207', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 9, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('31d712dc-9c5b-4a7c-8225-a43f3347527b', '78af7be8-0a18-4e65-95a5-ff9e1e26d207', '26f8285b-e3be-4194-a80e-7745fa659ae7', 10, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('8534c2ec-3718-4c89-af0b-59e8f1c7fcd8', 'c7fda64d-1570-42bb-ad08-773e24127d6d', '89192951-7ff5-4c55-a433-74e39bf27501', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('3b99a481-2eb7-406d-8c75-dc8b048210cd', 'c7fda64d-1570-42bb-ad08-773e24127d6d', 'ab2a62fc-098c-4dd2-a1df-ab97f3eaf8d1', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('805904d0-9ef4-4f0f-975a-7fc303ad106a', 'c7fda64d-1570-42bb-ad08-773e24127d6d', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 3, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('7df4890a-0976-4ddb-8dee-c014b958a8f2', 'c7fda64d-1570-42bb-ad08-773e24127d6d', 'c4bc3ce2-9610-4994-a30c-1639cfb95d78', 4, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('4db6d411-eac4-4070-8326-c1e388737190', 'c7fda64d-1570-42bb-ad08-773e24127d6d', 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', 5, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('e02e884d-b9c4-4e5a-8969-f64cf96d2020', 'c7fda64d-1570-42bb-ad08-773e24127d6d', 'acd92256-9bf8-4f2e-bcc0-717a45800842', 6, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('2822f430-4c0b-47ac-bade-6fa51fe19e39', 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', 'bf8aca0d-a443-4669-928d-740f2fe13f34', 1, 1, 0, 'Wonderful opening song');
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('43961f84-9a09-4a91-a094-5e2e733410d4', 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('ab2522c3-ddf7-4ab1-869b-919f29b8e4f0', 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', 'c2b82417-5722-45a3-8dc6-bb8c5d02ae9a', 3, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('255c205d-3aa6-4413-956c-667b800411f3', 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', '89192951-7ff5-4c55-a433-74e39bf27501', 4, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('06c04e5e-1639-438c-8eac-26863baa98f2', 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', 5, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('7dc417ad-a811-4824-85e8-37d3d2ffa9b2', 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', '9d8ec47e-a2dd-4983-908f-55ef3d721c2b', 6, 0, 1, 'Crowd was calling for an encore');
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('36a81010-cdef-4876-b06a-27e77e130a7d', 'e009b525-5063-4e68-8fa7-22987a262f21', 'bf8aca0d-a443-4669-928d-740f2fe13f34', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('c1a59ff4-6515-424f-9ada-d023f2d40174', 'e009b525-5063-4e68-8fa7-22987a262f21', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('e3f7a494-297f-48ea-a85a-28e3035d4e8c', 'e009b525-5063-4e68-8fa7-22987a262f21', '89192951-7ff5-4c55-a433-74e39bf27501', 3, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('c2406f14-dcc5-4ef1-a34b-7d50c8eac4ee', 'e009b525-5063-4e68-8fa7-22987a262f21', 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', 4, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('ac46807b-5711-40da-a8fe-38b30c6522e0', 'e009b525-5063-4e68-8fa7-22987a262f21', 'acd92256-9bf8-4f2e-bcc0-717a45800842', 5, 0, 0, 'Taya sounded great');
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('08c3f0a5-0d5f-4278-8042-b3cea364a4d0', 'e009b525-5063-4e68-8fa7-22987a262f21', 'c4bc3ce2-9610-4994-a30c-1639cfb95d78', 6, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('3927db60-19a3-4e25-b774-31d7de8e7556', 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('b9a2fe01-6458-4f5f-a624-5135ebdef480', 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', '89192951-7ff5-4c55-a433-74e39bf27501', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('f605a4ab-b9ed-4ed1-b82f-18ddd65bcbc7', 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', 3, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('8a2acf42-8109-4b21-8f48-74280f129539', 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', 'acd92256-9bf8-4f2e-bcc0-717a45800842', 4, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('77d0fab9-0dc3-4b15-83aa-2775a1340138', 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', '9d8ec47e-a2dd-4983-908f-55ef3d721c2b', 5, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('d7f3bb44-5095-40eb-8f9b-bc49ef61437f', 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', 'ab2a62fc-098c-4dd2-a1df-ab97f3eaf8d1', 6, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('b7b661dc-c39e-4e7f-8ae6-d257c29a6ea6', 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', 'c2b82417-5722-45a3-8dc6-bb8c5d02ae9a', 7, 0, 1, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('0ff87b30-8376-4ba1-a35b-a6251743def7', '92f3e4af-5297-4d91-9ccd-9106f822f9da', '44153508-c7f5-4027-bb88-42ccdc65a1ec', 1, 1, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('08bac2a7-4f92-49ee-a45e-ef0bdcc77711', '92f3e4af-5297-4d91-9ccd-9106f822f9da', '89192951-7ff5-4c55-a433-74e39bf27501', 2, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('f7d801f1-8e15-4bc4-a63c-6d97ec1953ab', '92f3e4af-5297-4d91-9ccd-9106f822f9da', 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', 3, 0, 0, NULL);
INSERT INTO "SetlistSong" ("id", "setlistId", "songId", "position", "isOpener", "isCloser", "feedback") VALUES ('d4d98720-1a6e-4723-bc10-ef3fadb6b29e', '92f3e4af-5297-4d91-9ccd-9106f822f9da', '04f5f2d5-7650-47c1-90d8-8d9e714497fa', 4, 0, 1, NULL);

INSERT INTO "Transaction" ("id", "date", "amount", "type", "category", "description", "attachmentLink") VALUES ('cfe3a612-a047-472e-be06-74b6e916e842', '2024-03-01T00:00:00.000Z', 250.0, 'INCOME', 'Gig Pay', 'Sea Shepherd', 'https://drive.google.com/file/d/1pJQEaelJagSCD-T92QrfLXq5CvQw68ZP/view?usp=drive_link');
INSERT INTO "Transaction" ("id", "date", "amount", "type", "category", "description", "attachmentLink") VALUES ('1e1d2ad5-0469-44a3-bba0-8094f92d9ed2', '2024-03-29T00:00:00.000Z', 300.0, 'INCOME', 'Gig Pay', 'Indi Bar', 'https://drive.google.com/file/d/1stmCs9qN2b1CCcaX_ntr79VK-jJ3AkfA/view?usp=drive_link');
INSERT INTO "Transaction" ("id", "date", "amount", "type", "category", "description", "attachmentLink") VALUES ('d022ef23-9f43-4e81-ac0a-04a30a85b49e', '2024-02-15T00:00:00.000Z', 200.0, 'INCOME', 'Gig Pay', 'SWA Party', 'https://drive.google.com/file/d/1Qt-_Tnu4cQ9TevFK-ZvMZx51KjortZ4f/view?usp=drive_link');
INSERT INTO "Transaction" ("id", "date", "amount", "type", "category", "description", "attachmentLink") VALUES ('9160e2a2-9495-4c15-887f-fe8ad33ffdb1', '2024-04-12T00:00:00.000Z', 150.0, 'INCOME', 'Gig Pay', 'The Bird with Goddamn Darlings', NULL);
INSERT INTO "Transaction" ("id", "date", "amount", "type", "category", "description", "attachmentLink") VALUES ('81a4801a-cd37-4274-a941-470c5ba2621a', '2024-03-30T00:00:00.000Z', 100.0, 'EXPENSE', 'Photography', 'Cassius @ Indi Bar', 'https://drive.google.com/file/d/1jpzyj4m84k2h5KLx1Ra6ULGUeXwxtDGp/view?usp=drive_link');

INSERT INTO "RoadmapItem" ("id", "title", "status") VALUES ('425f94c2-3129-457a-b3aa-82f38916e939', 'Write new originals', 'DONE');
INSERT INTO "RoadmapItem" ("id", "title", "status") VALUES ('67dffafe-713e-4eb9-83de-630ac4e8674c', 'Setup band bank account', 'DONE');
INSERT INTO "RoadmapItem" ("id", "title", "status") VALUES ('e1be5368-18cf-4d6e-a6a2-a3b855868ef6', 'Get specific soundcheck song', 'TODO');
INSERT INTO "RoadmapItem" ("id", "title", "status") VALUES ('0d1c67e2-7b68-453e-8051-1020d6a56392', 'Record Help Me demo', 'TODO');
INSERT INTO "RoadmapItem" ("id", "title", "status") VALUES ('261ca050-ed45-43b5-a9eb-023a34486a9e', 'Record Apples demo', 'TODO');
INSERT INTO "RoadmapItem" ("id", "title", "status") VALUES ('31b4ac7b-2e5c-4498-9f0c-2c600f9f2ebc', 'Record Hatman demo', 'TODO');
INSERT INTO "RoadmapItem" ("id", "title", "status") VALUES ('42ecc31e-8384-44c4-971b-205d0bcf8c19', 'Find and contact recording studio', 'TODO');

COMMIT;